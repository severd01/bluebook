const PLAY_ALL_KEY = "bluebook-play-all-session";
const PLAY_ALL_COMPLETE_KEY = "bluebook-play-all-complete";

const scenarios = [
  ["01-routine-fly-ball-to-right-field", "Routine Fly Ball to Right Field"],
  ["02-routine-fly-ball-to-left-field", "Routine Fly Ball to left field"],
  ["03-fly-ball-to-right-u1-goes-out", "Fly ball to right, U1 goes out."],
  ["04-pop-up-on-the-infield", "Pop Up On The Infield"],
  ["05-foul-pop-up", "Foul Pop Up"],
  ["06-base-hit-possible-triple", "Base Hit, possible triple"],
  ["07-ground-ball", "Ground Ball"],
  ["08-fly-ball-r1", "Fly Ball, R1"],
  ["09-fly-ball-rf-line-r1", "Fly Ball RF Line, R1"],
  ["10-base-hit-r1", "Base Hit, R1"],
  ["11-ground-ball-r1", "Ground Ball, R1"],
  ["12-fly-ball-r2", "Fly Ball, R2"],
  ["13-base-hit-r2", "Base Hit, R2"],
  ["14-fly-ball-r3", "Fly Ball, R3"],
  ["15-fly-ball-rf-line-r3", "Fly Ball RF Line, R3"],
  ["16-base-hit-r3", "Base Hit, R3"],
  ["17-fly-ball-r1-r2", "Fly Ball, R1,R2"],
  ["18-fly-ball-rf-line-r1-r2", "Fly Ball RF Line, R1,R2"],
  ["19-base-hit-r1-r2", "Base Hit, R1,R2"],
  ["20-ground-ball-r1-r2", "Ground Ball, R1,R2"],
  ["21-fly-ball-rf-line-r1-r3", "Fly Ball RF Line, R1, R3"],
  ["22-base-hit-r1-r3", "Base Hit, R1, R3"],
  ["23-ground-ball-r1-r3", "Ground Ball, R1, R3"],
  ["24-fly-ball-r2-r3", "Fly Ball, R2,R3"],
  ["25-base-hit-r2-r3", "Base Hit, R2, R3"],
  ["26-fly-ball-r1-r2-r3", "Fly Ball, R1,R2,R3"],
  ["27-base-hit-r1-r2-r3", "Base Hit, R1,R2,R3"],
].map(([slug, title], index) => ({ slug, title, number: index + 1 }));

const playAllBtn = document.getElementById("play-all-btn");
const randomFiveBtn = document.getElementById("random-five-btn");
const resumeBtn = document.getElementById("resume-btn");
const scenarioGrid = document.getElementById("scenario-grid");
const scenarioCount = document.getElementById("scenario-count");
const sessionSummary = document.getElementById("session-summary");

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
  window.location.href = `./scenarios/${safeOrder[0]}/`;
}

function renderScenarioGrid() {
  scenarioCount.textContent = String(scenarios.length);
  scenarioGrid.innerHTML = scenarios
    .map(
      (scenario) => `
        <a class="scenario-link" href="./scenarios/${scenario.slug}/">
          <span class="scenario-number">${String(scenario.number).padStart(2, "0")}</span>
          <p class="scenario-title">${scenario.title}</p>
          <p class="scenario-meta">Open this scenario only</p>
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

    resumeBtn.classList.remove("hidden");
    resumeBtn.textContent = `Resume ${sessionLabel}`;
    resumeBtn.onclick = () => {
      const slug = nextScenario?.slug || scenarios[0].slug;
      window.location.href = `./scenarios/${slug}/`;
    };

    sessionSummary.classList.remove("hidden");
    sessionSummary.innerHTML = `
      <p><strong>${sessionLabel} in progress.</strong> Score ${activeSession.score}/${maxPoints}. Next up: ${nextScenario.title}.</p>
    `;
    return;
  }

  resumeBtn.classList.add("hidden");
  resumeBtn.textContent = "Resume Play All";

  if (completedSession) {
    const totalScenarios = Number(completedSession.totalScenarios || (completedSession.order || []).length || 0);
    const maxPoints = Math.max(totalScenarios * 2, Number(completedSession.attempts || 0));
    sessionSummary.classList.remove("hidden");
    sessionSummary.innerHTML = `
      <p><strong>Last result:</strong> ${completedSession.label || "Session"} finished at ${completedSession.score}/${maxPoints}</p>
    `;
    return;
  }

  sessionSummary.classList.add("hidden");
}

playAllBtn.addEventListener("click", () => {
  startSession(
    scenarios.map((scenario) => scenario.slug),
    "all",
    "Play All Scenarios"
  );
});

randomFiveBtn.addEventListener("click", () => {
  const randomOrder = shuffle(scenarios.map((scenario) => scenario.slug)).slice(0, 5);
  startSession(randomOrder, "random-5", "5 Random Scenarios");
});

renderScenarioGrid();
renderSessionSummary();


scenarioGrid.addEventListener("click", (event) => {
  const link = event.target.closest("a.scenario-link");
  if (!link) {
    return;
  }

  localStorage.removeItem(PLAY_ALL_KEY);
});
