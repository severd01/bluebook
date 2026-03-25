const AUTH_STORAGE_PREFIX = "bluebook-";
const AUTH_LAST_UPDATED_KEY = "bluebook-last-updated-at";
const AUTH_TABLE = "user_state";
const AUTH_RELOAD_GUARD_KEY = "bluebook-auth-reload-guard";
const ORIGINAL_STORAGE_SET_ITEM = Storage.prototype.setItem;
const ORIGINAL_STORAGE_REMOVE_ITEM = Storage.prototype.removeItem;

const authConfig = window.UMPIQ_SUPABASE_CONFIG || {};
const authConfigured = Boolean(authConfig.url && authConfig.anonKey);

let supabaseClient = null;
let currentUser = null;
let authOverlay = null;
let authMessageEl = null;
let authSignedCardEl = null;
let authGoogleBtn = null;
let authInlineRoots = [];
let isApplyingCloudState = false;
let syncTimer = null;
let authReady = false;
let suppressNextSync = false;

function originalSetItem(key, value) {
  ORIGINAL_STORAGE_SET_ITEM.call(localStorage, key, value);
}

function originalRemoveItem(key) {
  ORIGINAL_STORAGE_REMOVE_ITEM.call(localStorage, key);
}

function touchLocalState() {
  originalSetItem(AUTH_LAST_UPDATED_KEY, new Date().toISOString());
}

function getRelevantLocalState() {
  const snapshot = {};
  for (let index = 0; index < localStorage.length; index += 1) {
    const key = localStorage.key(index);
    if (!key || !key.startsWith(AUTH_STORAGE_PREFIX)) {
      continue;
    }
    snapshot[key] = localStorage.getItem(key);
  }
  return snapshot;
}

function hasMeaningfulState(state) {
  return Object.entries(state || {}).some(
    ([key, value]) => key !== AUTH_LAST_UPDATED_KEY && value !== null && value !== ""
  );
}

function getStateSignature(state) {
  const normalized = Object.entries(state || {})
    .filter(([, value]) => typeof value === "string")
    .sort(([a], [b]) => a.localeCompare(b));

  return JSON.stringify(normalized);
}

function applyCloudState(state) {
  if (!state || typeof state !== "object") {
    return;
  }

  isApplyingCloudState = true;
  try {
    const existingKeys = [];
    for (let index = 0; index < localStorage.length; index += 1) {
      const key = localStorage.key(index);
      if (key && key.startsWith(AUTH_STORAGE_PREFIX)) {
        existingKeys.push(key);
      }
    }

    existingKeys.forEach((key) => originalRemoveItem(key));
    Object.entries(state).forEach(([key, value]) => {
      if (typeof value === "string") {
        originalSetItem(key, value);
      }
    });
    touchLocalState();
  } finally {
    isApplyingCloudState = false;
  }
}

function setAuthMessage(message, isError = false) {
  if (!authMessageEl) {
    return;
  }
  authMessageEl.textContent = message || "";
  authMessageEl.classList.toggle("is-error", Boolean(isError));
}

function shortEmail(email) {
  if (!email) {
    return "Signed In";
  }
  return email.length > 28 ? `${email.slice(0, 28)}...` : email;
}

function createAuthUi() {
  authInlineRoots = [];

  const topbar = document.querySelector(".topbar");
  if (topbar) {
    const root = document.createElement("div");
    root.className = "auth-inline";
    topbar.appendChild(root);
    authInlineRoots.push(root);
  }

  if (document.body.classList.contains("home-page")) {
    const homeSlot = document.querySelector(".auth-home-slot");
    if (homeSlot) {
      const root = document.createElement("div");
      root.className = "auth-inline auth-inline-mobile";
      homeSlot.appendChild(root);
      authInlineRoots.push(root);
    }
  }

  const scenarioNav = document.querySelector(".scenario-nav");
  if (scenarioNav) {
    const root = document.createElement("div");
    root.className = "auth-inline";
    scenarioNav.appendChild(root);
    authInlineRoots.push(root);
  }

  if (!authInlineRoots.length) {
    const heroActions = document.querySelector(".hero-actions");
    if (heroActions) {
      const root = document.createElement("div");
      root.className = "auth-inline";
      heroActions.appendChild(root);
      authInlineRoots.push(root);
    }
  }

  authOverlay = document.createElement("div");
  authOverlay.className = "auth-overlay hidden";
  authOverlay.innerHTML = `
    <div class="auth-modal" role="dialog" aria-modal="true" aria-labelledby="auth-title">
      <div class="auth-modal-top">
        <div>
          <p class="auth-eyebrow">Optional Login</p>
          <h2 id="auth-title">Save your progress.</h2>
        </div>
        <button class="auth-close" type="button" aria-label="Close login dialog">×</button>
      </div>
      <p>
        Keep playing anonymously, or sign in with Google so your session progress and results can follow you.
      </p>
      <form class="auth-form" id="auth-form">
        <div class="auth-actions">
          <button class="auth-btn auth-btn-primary" id="auth-google" type="submit">Continue With Google</button>
        </div>
        <p class="auth-helper">No password to remember. We’ll use your Google account.</p>
        <p class="auth-message" id="auth-message" aria-live="polite"></p>
      </form>
      <section class="auth-signed-card hidden" id="auth-signed-card">
        <p>Signed in as <span class="auth-signed-email" id="auth-signed-email"></span></p>
        <div class="auth-actions">
          <button class="auth-btn" id="auth-sign-out" type="button">Sign Out</button>
        </div>
      </section>
    </div>
  `;

  document.body.appendChild(authOverlay);

  authMessageEl = authOverlay.querySelector("#auth-message");
  authSignedCardEl = authOverlay.querySelector("#auth-signed-card");
  authGoogleBtn = authOverlay.querySelector("#auth-google");

  authOverlay.querySelector(".auth-close").addEventListener("click", closeAuthModal);
  authOverlay.addEventListener("click", (event) => {
    if (event.target === authOverlay) {
      closeAuthModal();
    }
  });

  authOverlay.querySelector("#auth-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!supabaseClient || !authGoogleBtn) {
      return;
    }

    authGoogleBtn.disabled = true;
    setAuthMessage("Redirecting to Google...");

    const { error } = await supabaseClient.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.href.split("#")[0],
      },
    });

    authGoogleBtn.disabled = false;

    if (error) {
      setAuthMessage(error.message || "We couldn't start Google sign-in.", true);
      return;
    }
  });

  authOverlay.querySelector("#auth-sign-out").addEventListener("click", async () => {
    if (!supabaseClient) {
      return;
    }
    await supabaseClient.auth.signOut();
    closeAuthModal();
  });
}

function openAuthModal() {
  if (!authOverlay) {
    return;
  }
  authOverlay.classList.remove("hidden");
  setAuthMessage("");
}

function closeAuthModal() {
  if (!authOverlay) {
    return;
  }
  authOverlay.classList.add("hidden");
}

function renderInlineAuth() {
  authInlineRoots.forEach((root) => {
    root.innerHTML = "";

    if (!currentUser) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "auth-btn";
      button.textContent = "Save Progress";
      button.addEventListener("click", openAuthModal);
      root.appendChild(button);
      return;
    }

    const badge = document.createElement("button");
    badge.type = "button";
    badge.className = "auth-badge";
    badge.textContent = `Saved: ${shortEmail(currentUser.email)}`;
    badge.addEventListener("click", openAuthModal);
    root.appendChild(badge);
  });

  if (!authSignedCardEl) {
    return;
  }

  const signedEmailEl = authOverlay.querySelector("#auth-signed-email");
  if (!currentUser) {
    authSignedCardEl.classList.add("hidden");
    return;
  }

  signedEmailEl.textContent = currentUser.email || "Signed in";
  authSignedCardEl.classList.remove("hidden");
}

async function uploadLocalState() {
  if (!authReady || !supabaseClient || !currentUser || isApplyingCloudState || suppressNextSync) {
    suppressNextSync = false;
    return;
  }

  const appState = getRelevantLocalState();
  if (!hasMeaningfulState(appState)) {
    return;
  }

  const { error } = await supabaseClient
    .from(AUTH_TABLE)
    .upsert(
      {
        user_id: currentUser.id,
        email: currentUser.email,
        app_state: appState,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id" }
    );

  if (error) {
    console.error("UmpIQ auth sync failed:", error.message);
  }
}

function scheduleUpload() {
  clearTimeout(syncTimer);
  syncTimer = setTimeout(() => {
    uploadLocalState();
  }, 500);
}

async function syncFromCloud() {
  if (!supabaseClient || !currentUser) {
    return;
  }

  const { data, error } = await supabaseClient
    .from(AUTH_TABLE)
    .select("app_state, updated_at")
    .eq("user_id", currentUser.id)
    .maybeSingle();

  if (error) {
    console.error("UmpIQ auth load failed:", error.message);
    return;
  }

  const localState = getRelevantLocalState();
  const localUpdatedAt = localStorage.getItem(AUTH_LAST_UPDATED_KEY);

  if (data?.app_state && hasMeaningfulState(data.app_state)) {
    const cloudUpdatedAt = data.updated_at ? new Date(data.updated_at).getTime() : 0;
    const localUpdated = localUpdatedAt ? new Date(localUpdatedAt).getTime() : 0;
    const cloudSignature = getStateSignature(data.app_state);
    const localSignature = getStateSignature(localState);
    const reloadGuard = sessionStorage.getItem(AUTH_RELOAD_GUARD_KEY);
    const nextGuard = `${currentUser.id}:${data.updated_at || "no-date"}:${window.location.pathname}`;

    if ((!localUpdated || cloudUpdatedAt >= localUpdated) && cloudSignature !== localSignature) {
      suppressNextSync = true;
      applyCloudState(data.app_state);
      if (reloadGuard !== nextGuard) {
        sessionStorage.setItem(AUTH_RELOAD_GUARD_KEY, nextGuard);
        window.location.reload();
      }
      return;
    }
  }

  sessionStorage.removeItem(AUTH_RELOAD_GUARD_KEY);

  if (hasMeaningfulState(localState)) {
    await uploadLocalState();
  }
}

function installLocalStorageSync() {
  const originalSet = Storage.prototype.setItem;
  const originalRemove = Storage.prototype.removeItem;

  if (window.__umpiqStoragePatched) {
    return;
  }

  window.__umpiqStoragePatched = true;

  Storage.prototype.setItem = function patchedSetItem(key, value) {
    originalSet.call(this, key, value);
    if (this === window.localStorage && key.startsWith(AUTH_STORAGE_PREFIX) && !isApplyingCloudState) {
      touchLocalState();
      scheduleUpload();
    }
  };

  Storage.prototype.removeItem = function patchedRemoveItem(key) {
    originalRemove.call(this, key);
    if (this === window.localStorage && key.startsWith(AUTH_STORAGE_PREFIX) && !isApplyingCloudState) {
      touchLocalState();
      scheduleUpload();
    }
  };
}

async function initializeAuth() {
  if (!authConfigured) {
    return;
  }

  createAuthUi();
  installLocalStorageSync();

  const supabaseModule = await import("https://esm.sh/@supabase/supabase-js@2");
  const { createClient } = supabaseModule;

  supabaseClient = createClient(authConfig.url, authConfig.anonKey);
  authReady = true;

  const {
    data: { session },
  } = await supabaseClient.auth.getSession();

  currentUser = session?.user || null;
  renderInlineAuth();

  if (currentUser) {
    await syncFromCloud();
  }

  supabaseClient.auth.onAuthStateChange(async (_event, sessionValue) => {
    currentUser = sessionValue?.user || null;
    renderInlineAuth();

    if (currentUser) {
      setAuthMessage("Signed in. Syncing your progress...");
      await syncFromCloud();
      setAuthMessage("You're signed in and your progress is being saved.");
      return;
    }

    setAuthMessage("Signed out. You can still keep playing anonymously.");
  });
}

initializeAuth();
