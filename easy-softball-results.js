const PLAY_ALL_KEY = "softball-easy-play-all-session";
const PLAY_ALL_COMPLETE_KEY = "softball-easy-play-all-complete";
const scenarios = [
  "01-no-runners-ground-ball-infield",
  "02-no-runners-hit-to-outfield",
  "03-no-runners-fly-ball-outfield-caught",
  "04-no-runners-fly-ball-outfield-not-caught",
  "05-no-runners-fly-ball-right-field",
  "06-no-runners-bunt-bouncing-ball-front-plate",
  "07-r1-ground-ball-infield",
  "08-r1-hit-to-outfield",
  "09-r1-fly-ball-outfield-caught",
  "10-r1-fly-ball-outfield-not-caught",
  "11-r1-pickoff-catcher-to-first",
  "12-r1-bunt-play-second-or-first",
  "13-r1-steal-attempt",
  "14-r1-r2-ground-ball-infield",
  "15-r1-r2-hit-to-outfield",
  "16-r1-r2-fly-ball-outfield-caught",
  "17-r1-r2-fly-ball-outfield-not-caught",
  "18-r1-r2-pickoff-catcher-to-first",
  "19-r1-r2-bunt-play-first-second-third",
  "20-r1-r2-r1-stealing",
  "21-r1-r3-ground-ball-infield",
  "22-r1-r3-hit-to-outfield",
  "23-r1-r3-fly-ball-outfield-caught",
  "24-r1-r3-fly-ball-outfield-not-caught",
  "25-r1-r3-pickoff-catcher-to-third",
  "26-r2-r3-ground-ball-infield",
  "27-r2-r3-hit-to-outfield",
  "28-r2-r3-fly-ball-outfield-caught",
  "29-r2-r3-fly-ball-outfield-not-caught",
  "30-r2-r3-pickoff-catcher-to-third",
  "31-r2-r3-bunt-play-first-second-third",
  "32-r2-ground-ball-infield",
  "33-r2-hit-to-outfield",
  "34-r2-fly-ball-outfield-caught",
  "35-r2-fly-ball-outfield-not-caught",
  "36-r2-steal-attempt",
  "37-r2-bunt-play-third-or-first",
  "38-r3-ground-ball-infield",
  "39-r3-hit-to-outfield",
  "40-r3-fly-ball-outfield-caught",
  "41-r3-fly-ball-outfield-not-caught",
  "42-r3-bunt-play-third-or-first",
  "43-loaded-ground-ball-infield",
  "44-loaded-hit-to-outfield",
  "45-loaded-fly-ball-outfield-caught",
  "46-loaded-fly-ball-outfield-not-caught",
];

const finalScoreEl = document.getElementById("final-score");
const resultsDetailEl = document.getElementById("results-detail");
const replayBtn = document.getElementById("replay-btn");

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

function renderResults() {
  const result = getStoredJson(PLAY_ALL_COMPLETE_KEY);

  if (!result) {
    finalScoreEl.textContent = "--/--";
    resultsDetailEl.textContent = "No completed session was found yet.";
    return;
  }

  const score = Number(result.score || 0);
  const attempts = Number(result.attempts || 0);
  const percent = attempts > 0 ? Math.round((score / attempts) * 100) : 0;
  const sessionLabel = result.label || "Session";
  const totalScenarios = Number(result.totalScenarios || 46);
  const maxPoints = Math.max(totalScenarios * 2, attempts);

  finalScoreEl.textContent = `${score}/${maxPoints}`;
  resultsDetailEl.textContent = `You completed ${sessionLabel.toLowerCase()} with ${percent}% accuracy across ${totalScenarios} situation${totalScenarios === 1 ? "" : "s"} for a score of ${score}/${maxPoints}.`;
  replayBtn.textContent =
    result.mode === "random-5" ? "Play Another Easy Random 5" : "Replay Easy Softball";
}

replayBtn.addEventListener("click", () => {
  const result = getStoredJson(PLAY_ALL_COMPLETE_KEY);
  const isRandomFive = result?.mode === "random-5";
  const order = isRandomFive ? shuffle(scenarios).slice(0, 5) : scenarios;
  const session = {
    active: true,
    startedAt: new Date().toISOString(),
    score: 0,
    attempts: 0,
    order,
    currentIndex: 0,
    startIndex: 0,
    mode: isRandomFive ? "random-5" : "all",
    label: isRandomFive ? "5 Easy Random Situations" : "Play All Easy Situations",
  };

  localStorage.removeItem(PLAY_ALL_COMPLETE_KEY);
  setStoredJson(PLAY_ALL_KEY, session);
  window.location.href = `./easy-softball-scenarios/${order[0]}/`;
});

renderResults();
