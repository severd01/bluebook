const PLAY_ALL_KEY = "softball-play-all-session";
const PLAY_ALL_COMPLETE_KEY = "softball-play-all-complete";

const scenarios = [
  ["01-no-runners-ground-ball-infield", "No Runners Ground Ball In The Infield"],
  ["02-no-runners-hit-to-outfield", "No Runners Hit To The Outfield"],
  ["03-no-runners-fly-ball-outfield-caught", "No Runners Fly Ball To The Outfield, Ball Is Caught"],
  ["04-no-runners-fly-ball-outfield-not-caught", "No Runners Fly Ball To The Outfield, Ball Is Not Caught"],
  ["05-no-runners-fly-ball-right-field", "No Runners Fly Ball To Right Field"],
  ["06-no-runners-bunt-bouncing-ball-front-plate", "No Runners Bunt or Bouncing Ball Fielded in Front of Plate"],
  ["07-r1-ground-ball-infield", "Runner on 1st Ground Ball In The Infield"],
  ["08-r1-hit-to-outfield", "Runner on 1st Hit To The Outfield"],
  ["09-r1-fly-ball-outfield-caught", "Runner on 1st Fly Ball To The Outfield, Ball Is Caught"],
  ["10-r1-fly-ball-outfield-not-caught", "Runner on 1st Fly Ball To The Outfield, Ball Is Not Caught"],
  ["11-r1-pickoff-catcher-to-first", "Runner on 1st Pickoff Throw By Catcher To 1st"],
  ["12-r1-bunt-play-second-or-first", "Runner on 1st, Batter Bunts, Play at 2nd or 1st"],
  ["13-r1-steal-attempt", "Runner on 1st, Steal Attempt"],
  ["14-r1-r2-ground-ball-infield", "Runners on 1st and 2nd, Ground Ball In The Infield"],
  ["15-r1-r2-hit-to-outfield", "Runners on 1st and 2nd, Hit To The Outfield"],
  ["16-r1-r2-fly-ball-outfield-caught", "Runners on 1st and 2nd, Fly Ball To The Outfield, Ball Is Caught"],
  ["17-r1-r2-fly-ball-outfield-not-caught", "Runners on 1st and 2nd, Fly Ball To The Outfield, Ball Is Not Caught"],
  ["18-r1-r2-pickoff-catcher-to-first", "Runners on 1st and 2nd, Pickoff Throw By Catcher To 1st"],
  ["19-r1-r2-bunt-play-first-second-third", "Runners on 1st and 2nd, Batter Bunts, Play At 1st, 2nd, or 3rd"],
  ["20-r1-r2-r1-stealing", "Runners on 1st and 2nd, R1 Is Stealing"],
  ["21-r1-r3-ground-ball-infield", "Runners on 1st and 3rd, Ground Ball In The Infield"],
  ["22-r1-r3-hit-to-outfield", "Runners on 1st and 3rd, Hit To The Outfield"],
  ["23-r1-r3-fly-ball-outfield-caught", "Runners on 1st and 3rd, Fly Ball To The Outfield, Ball Is Caught"],
  ["24-r1-r3-fly-ball-outfield-not-caught", "Runners on 1st and 3rd, Fly Ball To The Outfield, Ball Is Not Caught"],
  ["25-r1-r3-pickoff-catcher-to-third", "Runners on 1st and 3rd, Pickoff Throw By Catcher To 3rd"],
  ["26-r2-r3-ground-ball-infield", "Runners on 2nd and 3rd, Ground Ball In The Infield"],
  ["27-r2-r3-hit-to-outfield", "Runners on 2nd and 3rd, Hit To The Outfield"],
  ["28-r2-r3-fly-ball-outfield-caught", "Runners on 2nd and 3rd, Fly Ball To Outfield, Ball Is Caught"],
  ["29-r2-r3-fly-ball-outfield-not-caught", "Runners on 2nd and 3rd, Fly Ball To Outfield, Ball Is Not Caught"],
  ["30-r2-r3-pickoff-catcher-to-third", "Runners on 2nd and 3rd, Pickoff Throw By Catcher To 3rd"],
  ["31-r2-r3-bunt-play-first-second-third", "Runners on 2nd and 3rd, Batter Bunts, Play at 1st, 2nd or 3rd"],
  ["32-r2-ground-ball-infield", "Runner on 2nd, Ground Ball In The Infield"],
  ["33-r2-hit-to-outfield", "Runner on 2nd, Hit To The Outfield"],
  ["34-r2-fly-ball-outfield-caught", "Runner on 2nd, Fly Ball To The Outfield, Ball Is Caught"],
  ["35-r2-fly-ball-outfield-not-caught", "Runner on 2nd, Fly Ball To The Outfield, Ball Is Not Caught"],
  ["36-r2-steal-attempt", "Runner on 2nd, Steal Attempt"],
  ["37-r2-bunt-play-third-or-first", "Runner on 2nd, Batter Bunts, Play At 3rd or 1st"],
  ["38-r3-ground-ball-infield", "Runner on 3rd, Ground Ball In The Infield"],
  ["39-r3-hit-to-outfield", "Runner on 3rd, Hit To The Outfield"],
  ["40-r3-fly-ball-outfield-caught", "Runner on 3rd, Fly Ball To The Outfield, Ball Is Caught"],
  ["41-r3-fly-ball-outfield-not-caught", "Runner on 3rd, Fly Ball To The Outfield, Ball Is Not Caught"],
  ["42-r3-bunt-play-third-or-first", "Runner on 3rd, Batter Bunts, Play at 3rd or 1st"],
  ["43-loaded-ground-ball-infield", "Runners on 1st, 2nd, and 3rd, Ground Ball In The Infield"],
  ["44-loaded-hit-to-outfield", "Runners on 1st, 2nd, and 3rd, Hit To The Outfield"],
  ["45-loaded-fly-ball-outfield-caught", "Runners on 1st, 2nd, and 3rd, Fly Ball To The Outfield, Ball Is Caught"],
  ["46-loaded-fly-ball-outfield-not-caught", "Runners on 1st, 2nd, and 3rd, Fly Ball To The Outfield, Ball Is Not Caught"],
].map(([slug, title], index) => ({ slug, title, number: index + 1 }));

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
  window.location.href = `./softball-scenarios/${safeOrder[0]}/`;
}

function renderScenarioGrid() {
  if (!scenarioGrid || !scenarioCount) {
    return;
  }

  scenarioCount.textContent = String(scenarios.length);
  scenarioGrid.innerHTML = scenarios
    .map(
      (scenario) => `
        <a class="scenario-link" href="./softball-scenarios/${scenario.slug}/">
          <span class="scenario-number">${String(scenario.number).padStart(2, "0")}</span>
          <p class="scenario-title">${scenario.title}</p>
          <p class="scenario-meta">Open this situation only</p>
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
    const sessionLabel = activeSession.label || "Play-all";
    const totalScenarios = Number((activeSession.order || []).length || 0);
    const maxPoints = totalScenarios * 2;

    if (resumeBtn) {
      resumeBtn.classList.remove("hidden");
      resumeBtn.textContent = `Resume ${sessionLabel}`;
      resumeBtn.onclick = () => {
        const slug = nextScenario?.slug || scenarios[0].slug;
        window.location.href = `./softball-scenarios/${slug}/`;
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
    resumeBtn.textContent = "Resume Play All";
  }

  if (completedSession) {
    const totalScenarios = Number(completedSession.totalScenarios || (completedSession.order || []).length || 0);
    const maxPoints = Math.max(totalScenarios * 2, Number(completedSession.attempts || 0));
    if (sessionSummary) {
      sessionSummary.classList.remove("hidden");
      sessionSummary.innerHTML = `
        <p><strong>Last result:</strong> ${completedSession.label || "Session"} finished at ${completedSession.score}/${maxPoints}</p>
      `;
    }
    return;
  }

  if (sessionSummary) {
    sessionSummary.classList.add("hidden");
  }
}

if (playAllBtn) {
  playAllBtn.addEventListener("click", () => {
    startSession(
      scenarios.map((scenario) => scenario.slug),
      "all",
      "Play All Situations"
    );
  });
}

if (randomFiveBtn) {
  randomFiveBtn.addEventListener("click", () => {
    const randomOrder = shuffle(scenarios.map((scenario) => scenario.slug)).slice(0, 5);
    startSession(randomOrder, "random-5", "5 Random Situations");
  });
}

renderScenarioGrid();
renderSessionSummary();

if (scenarioGrid) {
  scenarioGrid.addEventListener("click", (event) => {
    const link = event.target.closest("a.scenario-link");
    if (!link) {
      return;
    }

    localStorage.removeItem(PLAY_ALL_KEY);
  });
}
