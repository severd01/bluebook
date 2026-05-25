const THREE_MAN_APP = window.THREE_MAN_APP || {
  playAllKey: "bluebook-3man-session",
  playAllCompleteKey: "bluebook-3man-complete",
  scenarios: [],
};
const PLAY_ALL_KEY = THREE_MAN_APP.playAllKey;
const PLAY_ALL_COMPLETE_KEY = THREE_MAN_APP.playAllCompleteKey;
const scenarios = THREE_MAN_APP.scenarios.map((scenario, index) => ({
  ...scenario,
  number: index + 1,
}));

const playAllBtn = document.getElementById("play-all-btn");
const randomFiveBtn = document.getElementById("random-five-btn");
const resumeBtn = document.getElementById("resume-btn");
const sessionSummary = document.getElementById("session-summary");
const scenarioGrid = document.getElementById("scenario-grid");
const scenarioCount = document.getElementById("scenario-count");

function getStoredJson(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "null");
  } catch (error) {
    return null;
  }
}

function setStoredJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getSessionMaxPoints(order) {
  return order.reduce((sum, slug) => {
    const scenario = scenarios.find((entry) => entry.slug === slug);
    return sum + (scenario?.points || 0);
  }, 0);
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function startSession(order, mode, label) {
  const safeOrder = order.length ? order : scenarios.map((scenario) => scenario.slug);
  const session = {
    active: true,
    startedAt: new Date().toISOString(),
    score: 0,
    attempts: 0,
    order: safeOrder,
    currentIndex: 0,
    startIndex: 0,
    mode,
    label,
  };

  localStorage.removeItem(PLAY_ALL_COMPLETE_KEY);
  setStoredJson(PLAY_ALL_KEY, session);
  window.location.href = `./three-man-scenarios/${safeOrder[0]}/`;
}

function renderScenarioGrid() {
  if (!scenarioGrid || !scenarioCount) {
    return;
  }

  scenarioCount.textContent = String(scenarios.length);
  scenarioGrid.innerHTML = scenarios
    .map(
      (scenario) => `
        <a class="scenario-link" href="./three-man-scenarios/${scenario.slug}/">
          <span class="scenario-number">${String(scenario.number).padStart(2, "0")}</span>
          <p class="scenario-title">${scenario.title}</p>
          <p class="scenario-meta">3 movement paths</p>
        </a>
      `
    )
    .join("");
}

function renderSessionSummary() {
  const activeSession = getStoredJson(PLAY_ALL_KEY);
  const completedSession = getStoredJson(PLAY_ALL_COMPLETE_KEY);

  if (activeSession?.active) {
    const activeIndex = Math.min(
      Math.max(Number(activeSession.currentIndex || 0), 0),
      Math.max((activeSession.order || []).length - 1, 0)
    );
    const nextSlug = (activeSession.order || [])[activeIndex] || scenarios[0].slug;
    const nextScenario =
      scenarios.find((scenario) => scenario.slug === nextSlug) || scenarios[0];
    const sessionLabel = activeSession.label || "Current build";
    const maxPoints = getSessionMaxPoints(activeSession.order || []);

    if (resumeBtn) {
      resumeBtn.classList.remove("hidden");
      resumeBtn.textContent = `Resume ${sessionLabel}`;
      resumeBtn.onclick = () => {
        window.location.href = `./three-man-scenarios/${nextScenario.slug}/`;
      };
    }

    if (sessionSummary) {
      sessionSummary.classList.remove("hidden");
      sessionSummary.innerHTML = `
        <p><strong>${sessionLabel} in progress.</strong> Score ${activeSession.score}/${maxPoints}. Next up: ${nextScenario.title}.</p>
      `;
    }
    return;
  }

  if (resumeBtn) {
    resumeBtn.classList.add("hidden");
    resumeBtn.textContent = "Resume Current Build";
  }

  if (completedSession) {
    const maxPoints = Math.max(
      getSessionMaxPoints(completedSession.order || []),
      Number(completedSession.attempts || 0)
    );
    if (sessionSummary) {
      sessionSummary.classList.remove("hidden");
      sessionSummary.innerHTML = `
        <p><strong>Last result:</strong> ${completedSession.label || "3-man build"} finished at ${completedSession.score}/${maxPoints}</p>
      `;
    }
    return;
  }

  if (sessionSummary) {
    sessionSummary.classList.add("hidden");
  }
}

playAllBtn?.addEventListener("click", () => {
  startSession(
    scenarios.map((scenario) => scenario.slug),
    "all",
    "Current Build"
  );
});

randomFiveBtn?.addEventListener("click", () => {
  const randomOrder = shuffle(scenarios.map((scenario) => scenario.slug)).slice(
    0,
    Math.min(5, scenarios.length)
  );
  startSession(randomOrder, "random", "Random Reps");
});

renderScenarioGrid();
renderSessionSummary();

scenarioGrid?.addEventListener("click", (event) => {
  const link = event.target.closest("a.scenario-link");
  if (!link) {
    return;
  }

  localStorage.removeItem(PLAY_ALL_KEY);
});
