const PLAY_ALL_KEY = "bluebook-play-all-session";
const PLAY_ALL_COMPLETE_KEY = "bluebook-play-all-complete";
const PRE_PITCH_SCENARIO_SLUGS = new Set([
  "08-fly-ball-r1",
  "09-fly-ball-rf-line-r1",
  "10-base-hit-r1",
  "11-ground-ball-r1",
  "12-fly-ball-r2",
  "13-base-hit-r2",
  "14-fly-ball-r3",
  "15-fly-ball-rf-line-r3",
  "16-base-hit-r3",
  "17-fly-ball-r1-r2",
  "18-fly-ball-rf-line-r1-r2",
  "19-base-hit-r1-r2",
  "20-ground-ball-r1-r2",
  "21-fly-ball-rf-line-r1-r3",
  "22-base-hit-r1-r3",
  "23-ground-ball-r1-r3",
  "24-fly-ball-r2-r3",
  "25-base-hit-r2-r3",
  "26-fly-ball-r1-r2-r3",
  "27-base-hit-r1-r2-r3",
]);
const scenarios = [
  "01-routine-fly-ball-to-right-field",
  "02-routine-fly-ball-to-left-field",
  "03-fly-ball-to-right-u1-goes-out",
  "04-pop-up-on-the-infield",
  "05-foul-pop-up",
  "06-base-hit-possible-triple",
  "07-ground-ball",
  "08-fly-ball-r1",
  "09-fly-ball-rf-line-r1",
  "10-base-hit-r1",
  "11-ground-ball-r1",
  "12-fly-ball-r2",
  "13-base-hit-r2",
  "14-fly-ball-r3",
  "15-fly-ball-rf-line-r3",
  "16-base-hit-r3",
  "17-fly-ball-r1-r2",
  "18-fly-ball-rf-line-r1-r2",
  "19-base-hit-r1-r2",
  "20-ground-ball-r1-r2",
  "21-fly-ball-rf-line-r1-r3",
  "22-base-hit-r1-r3",
  "23-ground-ball-r1-r3",
  "24-fly-ball-r2-r3",
  "25-base-hit-r2-r3",
  "26-fly-ball-r1-r2-r3",
  "27-base-hit-r1-r2-r3",
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

function getSessionMaxPoints(order) {
  return order.reduce(
    (sum, slug) => sum + (PRE_PITCH_SCENARIO_SLUGS.has(slug) ? 3 : 2),
    0
  );
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
  const totalScenarios = Number(result.totalScenarios || 27);
  const maxPoints = Math.max(
    getSessionMaxPoints(result.order || scenarios),
    attempts
  );

  finalScoreEl.textContent = `${score}/${maxPoints}`;
  resultsDetailEl.textContent = `You completed ${sessionLabel.toLowerCase()} with ${percent}% accuracy across ${totalScenarios} scenario${totalScenarios === 1 ? "" : "s"} for a score of ${score}/${maxPoints}.`;
  replayBtn.textContent =
    result.mode === "random-5" ? "Play Another Random 5" : "Replay All Scenarios";
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
    label: isRandomFive ? "5 Random Scenarios" : "Play All Scenarios",
  };

  localStorage.removeItem(PLAY_ALL_COMPLETE_KEY);
  setStoredJson(PLAY_ALL_KEY, session);
  window.location.href = `./scenarios/${order[0]}/`;
});

renderResults();
