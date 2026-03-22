const scenarios = [
  {
    title: "Pop Up On The Infield",
    system: "",
    description: "No runners on, pop up to the infield.",
    runners: "No Runners",
    outs: "No Outs",
    ball: "Pop up to infield.",
    type: "dual-movement",
    ballFlightPath:
      "M 442 664 Q 384 543, 480 554",
    prompt: "Click P's starting position for Scenario 4.",
    explanation: "",
    answerNotes: [
      {
        heading: "Plate",
        bullets: [
          "Do not watch the ball. Read fielders.",
          "Take all catch/no catch responsibilities.",
          "Clear F2 and move out in the direction of the ball.",
          "Rule fair/foul and then catch/no catch.",
          "Tell your partner, \"That's a catch!\"",
        ],
      },
      {
        heading: "U1",
        bullets: [
          "Do not watch the ball. Read fielders.",
          "Clear F3 and move into the infield.",
          "Keep distance from fielder(s) that are making a play.",
          "Observe BR's touch of 1st.",
        ],
      },
    ],
    paths: [
      {
        role: "P",
        startAnswer: { x: 440, y: 695 },
        routePoints: [
          { x: 440, y: 695 },
          { x: 424, y: 671 },
          { x: 442, y: 629 },
        ],
        waypoints: [{ x: 424, y: 671 }],
        endAnswer: { x: 442, y: 629 },
      },
      {
        role: "U1",
        startAnswer: { x: 598, y: 538 },
        routePoints: [
          { x: 598, y: 538 },
          { x: 604, y: 521 },
          { x: 574, y: 509 },
          { x: 510, y: 550 },
        ],
        waypoints: [
          { x: 604, y: 521 },
          { x: 574, y: 509 },
        ],
        endAnswer: { x: 510, y: 550 },
      },
    ],
  },
];

const scoreEl = document.getElementById("score");
const attemptsEl = document.getElementById("attempts");
const titleEl = document.getElementById("scenario-title");
const systemEl = document.getElementById("scenario-system");
const descriptionEl = document.getElementById("scenario-description");
const runnersEl = document.getElementById("scenario-runners");
const outsEl = document.getElementById("scenario-outs");
const ballEl = document.getElementById("scenario-ball");
const feedbackTitleEl = document.getElementById("feedback-title");
const feedbackBodyEl = document.getElementById("feedback-body");
const feedbackEl = document.querySelector(".feedback");
const checkBtn = document.getElementById("check-btn");
const finishPathBtn = document.getElementById("finish-path-btn");
const clearBtn = document.getElementById("clear-btn");
const toggleGridBtn = document.getElementById("toggle-grid-btn");
const nextBtn = document.getElementById("next-btn");
const scoreLineEl = document.querySelector(".score-line");
const movementTrackerEl = document.getElementById("movement-tracker");
const cursorReadoutEl = document.getElementById("cursor-readout");
const field = document.getElementById("field");
const ballFlight = document.getElementById("ball-flight");
const answerOverlayEl = document.getElementById("answer-overlay");
const answerCardSharedEl = document.getElementById("answer-card-shared");
const MARKER_RADIUS = 11;
const SCORING_POINT_DIAMETER = 60;
const SCORING_POINT_RADIUS = SCORING_POINT_DIAMETER / 2;
const SVG_NS = "http://www.w3.org/2000/svg";
const FIELD_SIZE = 886;
const GRID_STEP = 100;

const PLAY_ALL_KEY = "bluebook-play-all-session";
const PLAY_ALL_COMPLETE_KEY = "bluebook-play-all-complete";
const DEFAULT_SCENARIO_ORDER = [
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
const currentScenarioSlug = window.location.pathname.replace(/\/$/, "").split("/").pop();

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

function getPlayAllSession() {
  const session = getStoredJson(PLAY_ALL_KEY);
  if (!session || !session.active) {
    return null;
  }

  return session;
}

function getSessionOrder(session) {
  return Array.isArray(session?.order) && session.order.length
    ? session.order
    : DEFAULT_SCENARIO_ORDER;
}

function syncPlayAllSessionOnLoad() {
  const session = getPlayAllSession();
  if (!session) {
    return;
  }

  const order = getSessionOrder(session);
  const currentIndex = order.indexOf(currentScenarioSlug);

  if (currentIndex === -1) {
    return;
  }

  session.currentIndex = currentIndex;
  session.lastScenario = currentScenarioSlug;
  setStoredJson(PLAY_ALL_KEY, session);

  score = Number(session.score || 0);
  attempts = Number(session.attempts || 0);
}

function persistPlayAllTotals() {
  const session = getPlayAllSession();
  if (!session) {
    return;
  }

  const order = getSessionOrder(session);
  session.score = score;
  session.attempts = attempts;
  session.currentIndex = order.indexOf(currentScenarioSlug);
  session.lastScenario = currentScenarioSlug;
  setStoredJson(PLAY_ALL_KEY, session);
}

function updateNextButtonLabel() {
  const session = getPlayAllSession();
  if (!session) {
    nextBtn.textContent = "Next Play";
    return;
  }

  const order = getSessionOrder(session);
  const currentIndex = order.indexOf(currentScenarioSlug);
  nextBtn.textContent = currentIndex >= order.length - 1
    ? "Finish Session"
    : "Next Scenario";
}

function goToNextPlayAllScenario() {
  const session = getPlayAllSession();
  if (!session) {
    return false;
  }

  const order = getSessionOrder(session);
  const currentIndex = order.indexOf(currentScenarioSlug);
  if (currentIndex === -1) {
    return false;
  }

  const nextSlug = order[currentIndex + 1];

  if (nextSlug) {
    session.currentIndex = currentIndex + 1;
    session.lastScenario = nextSlug;
    setStoredJson(PLAY_ALL_KEY, session);
    window.location.href = `../${nextSlug}/`;
    return true;
  }

  setStoredJson(PLAY_ALL_COMPLETE_KEY, {
    score,
    attempts,
    completedAt: new Date().toISOString(),
    mode: session.mode || "all",
    label: session.label || "Play All Scenarios",
    order,
    totalScenarios: order.length,
  });
  localStorage.removeItem(PLAY_ALL_KEY);
  window.location.href = "../../results.html";
  return true;
}


let scenarioIndex = 0;
let score = 0;
let attempts = 0;
let roundFinished = false;
let activeRoleIndex = 0;
let selectedPaths = [];
let roleArtifacts = [];
let gridVisible = false;
let gridLayer;

function createSvgElement(tagName, attributes, className) {
  const element = document.createElementNS(SVG_NS, tagName);
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  if (className) {
    element.setAttribute("class", className);
  }
  field.appendChild(element);
  return element;
}

function initializeRoleArtifacts() {
  const maxRoles = Math.max(
    ...scenarios.map((scenario) => (scenario.paths ? scenario.paths.length : 0))
  );

  for (let i = 0; i < maxRoles; i += 1) {
    const role = scenarios.find((scenario) => scenario.paths && scenario.paths[i])?.paths[i]
      ?.role;
    const roleClass = role ? ` role-${role.toLowerCase()}` : "";
    const userPath = createSvgElement(
      "polyline",
      {},
      `path-line${roleClass} hidden`
    );
    const answerPath = createSvgElement(
      "polyline",
      {},
      `answer-path${roleClass} hidden`
    );
    const userStart = createSvgElement(
      "circle",
      { r: MARKER_RADIUS },
      `marker${roleClass} hidden`
    );
    const userEnd = createSvgElement(
      "circle",
      { r: MARKER_RADIUS },
      `marker${roleClass} hidden`
    );
    const answerStart = createSvgElement(
      "circle",
      { r: MARKER_RADIUS },
      `answer${roleClass} hidden`
    );
    const answerEnd = createSvgElement(
      "circle",
      { r: MARKER_RADIUS },
      `answer${roleClass} hidden`
    );

    roleArtifacts.push({
      userPath,
      answerPath,
      userStart,
      userEnd,
      answerStart,
      answerEnd,
    });
  }
}

function createTextLabel(x, y, text) {
  const label = document.createElementNS(SVG_NS, "text");
  label.setAttribute("x", x);
  label.setAttribute("y", y);
  label.setAttribute("class", "grid-label");
  label.textContent = text;
  return label;
}

function initializeGrid() {
  gridLayer = document.createElementNS(SVG_NS, "g");
  gridLayer.setAttribute("id", "coordinate-grid");

  for (let value = 0; value <= FIELD_SIZE; value += GRID_STEP) {
    const verticalLine = document.createElementNS(SVG_NS, "line");
    verticalLine.setAttribute("x1", value);
    verticalLine.setAttribute("y1", 0);
    verticalLine.setAttribute("x2", value);
    verticalLine.setAttribute("y2", FIELD_SIZE);
    verticalLine.setAttribute(
      "class",
      `grid-line${value % 200 === 0 ? " major" : ""}`
    );
    gridLayer.appendChild(verticalLine);

    const horizontalLine = document.createElementNS(SVG_NS, "line");
    horizontalLine.setAttribute("x1", 0);
    horizontalLine.setAttribute("y1", value);
    horizontalLine.setAttribute("x2", FIELD_SIZE);
    horizontalLine.setAttribute("y2", value);
    horizontalLine.setAttribute(
      "class",
      `grid-line${value % 200 === 0 ? " major" : ""}`
    );
    gridLayer.appendChild(horizontalLine);

    if (value < FIELD_SIZE) {
      gridLayer.appendChild(createTextLabel(value + 6, 18, String(value)));
      gridLayer.appendChild(
        createTextLabel(6, value < 22 ? value + 16 : value - 6, String(value))
      );
    }
  }

  field.insertBefore(gridLayer, ballFlight);
}

function updateGridVisibility() {
  if (!gridLayer) return;

  gridLayer.classList.toggle("hidden", !gridVisible);
  toggleGridBtn.textContent = gridVisible ? "Hide Grid" : "Show Grid";
}

function getSvgPoint(event) {
  const point = field.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  const transformed = point.matrixTransform(field.getScreenCTM().inverse());
  return { x: transformed.x, y: transformed.y };
}

function placeMarker(marker, point) {
  marker.setAttribute("cx", point.x);
  marker.setAttribute("cy", point.y);
  marker.classList.remove("hidden");
}

function placePath(line, points) {
  line.setAttribute(
    "points",
    points.map((point) => `${point.x},${point.y}`).join(" ")
  );
  line.classList.remove("hidden");
}

function hideElement(element) {
  element.classList.add("hidden");
}

function distance(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function pointInExpandedRotatedRect(point, zone, padding) {
  const radians = (-zone.rotation * Math.PI) / 180;
  const dx = point.x - zone.cx;
  const dy = point.y - zone.cy;
  const localX = dx * Math.cos(radians) - dy * Math.sin(radians);
  const localY = dx * Math.sin(radians) + dy * Math.cos(radians);

  return (
    Math.abs(localX) <= zone.width / 2 + padding &&
    Math.abs(localY) <= zone.height / 2 + padding
  );
}

function pointInCircle(point, target, radius) {
  return distance(point, target) <= radius;
}

function pathIntersectsZone(points, zone, padding) {
  return points.some((point) =>
    pointInExpandedRotatedRect(point, zone, padding)
  );
}

function pathIntersectsPointTarget(points, target, radius) {
  return points.some((point) => pointInCircle(point, target, radius));
}

function describeGrade(pointsEarned, maxPoints, averageDistance) {
  if (pointsEarned === maxPoints) {
    return {
      label: `Excellent. ${pointsEarned}/${maxPoints} movements correct.`,
      points: pointsEarned,
      tone: "perfect",
    };
  }

  if (pointsEarned > 0) {
    return {
      label: `Nice work. ${pointsEarned}/${maxPoints} movements correct.`,
      points: pointsEarned,
      tone: "partial",
    };
  }

  if (averageDistance <= 35) {
    return {
      label: `0/${maxPoints} correct, but very close.`,
      points: 0,
      tone: "close",
    };
  }

  if (averageDistance <= 75) {
    return {
      label: `0/${maxPoints} correct. Close, but outside the target zone.`,
      points: 0,
      tone: "close",
    };
  }

  return {
    label: `0/${maxPoints} movements correct.`,
    points: 0,
    tone: "miss",
  };
}

function resetRoundFeedbackState() {
  feedbackEl?.classList.remove("is-perfect", "is-partial");
  nextBtn.classList.remove("perfect-next");
}

function getDisplayedMaxPoints() {
  const session = getActiveSession();
  if (session?.active && Array.isArray(session.order) && session.order.length) {
    return session.order.length * 2;
  }

  return attempts;
}

function renderScoreLine() {
  scoreEl.textContent = String(score);
  attemptsEl.textContent = String(getDisplayedMaxPoints());
}

function celebrateScore(pointsEarned) {
  if (!scoreLineEl || pointsEarned <= 0) {
    return;
  }

  scoreLineEl.classList.remove("is-celebrating");
  void scoreLineEl.offsetWidth;
  scoreLineEl.classList.add("is-celebrating");
  window.setTimeout(() => {
    scoreLineEl.classList.remove("is-celebrating");
  }, 1200);
}

function roleDisplayName(role) {
  if (role === "P") return "Plate Umpire";
  if (role === "U1") return "Base Umpire";
  return role;
}

function getMovementStatus(path, isActive, isFinished) {
  if (isFinished && path.start && path.end) {
    return "Movement locked in.";
  }

  if (path.completed && path.start && path.end) {
    return "Path drawn and ready to check.";
  }

  if (isActive) {
    if (!path.start) {
      return "Click to place the starting position.";
    }

    return "Keep adding route points, then finish the path.";
  }

  if (path.start) {
    return "Route started.";
  }

  return "Waiting for your path.";
}

function renderMovementTracker() {
  const scenario = scenarios[scenarioIndex];

  movementTrackerEl.innerHTML = scenario.paths
    .map((path, index) => {
      const selectedPath = selectedPaths[index];
      const isActive = !roundFinished && index === activeRoleIndex;
      const roleClass = path.role.toLowerCase();
      const status = getMovementStatus(selectedPath, isActive, roundFinished);

      return `
        <div class="movement-card${isActive ? " is-active" : ""}">
          <div class="movement-role role-${roleClass}">${path.role}</div>
          <div class="movement-meta">
            <p class="movement-name">${roleDisplayName(path.role)}</p>
            <p class="movement-status">${status}</p>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderAnswerCard(element, section) {
  const sections = (section || [])
    .map((item) => {
      const introMarkup = item.intro
        ? `<p class="answer-card-intro">${item.intro}</p>`
        : "";
      const bulletsMarkup = item.bullets
        ? `<ul class="answer-card-list">${item.bullets
            .map((entry) => `<li>${entry}</li>`)
            .join("")}</ul>`
        : "";
      const numberedMarkup = item.numbered
        ? `<ol class="answer-card-list">${item.numbered
            .map((entry) => `<li>${entry}</li>`)
            .join("")}</ol>`
        : "";

      return `
        <section class="answer-card-section">
          <p class="answer-card-title">${item.heading}</p>
          ${introMarkup}
          ${bulletsMarkup}
          ${numberedMarkup}
        </section>
      `;
    })
    .join("");

  element.innerHTML = sections;
}

function renderAnswerOverlay(scenario) {
  renderAnswerCard(answerCardSharedEl, scenario.answerNotes || []);
  answerOverlayEl.classList.remove("hidden");
}

function hideAnswerOverlay() {
  answerOverlayEl.classList.add("hidden");
  answerCardSharedEl.innerHTML = "";
}

function renderFeedbackBody(scenario) {
  feedbackBodyEl.innerHTML = `<p>${scenario.explanation}</p>`;
}

function updatePrompt() {
  const scenario = scenarios[scenarioIndex];

  if (roundFinished) {
    return;
  }

  const activeRole = scenario.paths[activeRoleIndex];
  const selectedPath = selectedPaths[activeRoleIndex];

  if (!selectedPath.start) {
    feedbackTitleEl.textContent = `Click ${activeRole.role}'s starting position.`;
  } else {
    feedbackTitleEl.textContent = `Click to build ${activeRole.role}'s route, then finish the path.`;
  }

  renderMovementTracker();
}

function updateFinishPathButtonStyle() {
  const scenario = scenarios[scenarioIndex];
  const activeRole = scenario.paths[activeRoleIndex]?.role;
  const selectedPath = selectedPaths[activeRoleIndex];
  const roleLabel = activeRole === "P" ? "Plate" : activeRole;

  finishPathBtn.classList.remove("role-btn-p", "role-btn-u1");

  if (activeRole === "P") {
    finishPathBtn.classList.add("role-btn-p");
  } else if (activeRole === "U1") {
    finishPathBtn.classList.add("role-btn-u1");
  }

  if (!roleLabel) {
    finishPathBtn.textContent = "Draw Plate Path";
    return;
  }

  finishPathBtn.textContent = selectedPath?.start
    ? `Finish ${roleLabel} Path`
    : `Draw ${roleLabel} Path`;
}

function updateCheckButtonState() {
  const activePath = selectedPaths[activeRoleIndex];
  finishPathBtn.disabled =
    roundFinished || !activePath || activePath.completed || activePath.points.length < 2;
  updateFinishPathButtonStyle();
  checkBtn.disabled = !selectedPaths.every(
    (path) => path.completed && path.start && path.end
  );
  renderMovementTracker();
}

function updateCursorReadout(point) {
  cursorReadoutEl.textContent = `Cursor: x ${Math.round(point.x)}, y ${Math.round(point.y)}`;
}

function resetSelectedPaths() {
  const scenario = scenarios[scenarioIndex];

  activeRoleIndex = 0;
  selectedPaths = scenario.paths.map(() => ({
    start: null,
    end: null,
    points: [],
    completed: false,
  }));

  roleArtifacts.forEach((artifacts) => {
    hideElement(artifacts.userPath);
    hideElement(artifacts.userStart);
    hideElement(artifacts.userEnd);
  });
}

function loadScenario() {
  const scenario = scenarios[scenarioIndex];
  syncPlayAllSessionOnLoad();
  titleEl.textContent = scenario.title;
  systemEl.textContent = scenario.system;
  systemEl.style.display = scenario.system ? "inline-flex" : "none";
  descriptionEl.textContent = scenario.description;
  runnersEl.textContent = scenario.runners;
  outsEl.textContent = scenario.outs;
  ballEl.textContent = scenario.ball;

  roundFinished = false;
  resetSelectedPaths();

  roleArtifacts.forEach((artifacts) => {
    hideElement(artifacts.answerPath);
    hideElement(artifacts.answerStart);
    hideElement(artifacts.answerEnd);
  });

  ballFlight.classList.add("hidden");
  checkBtn.disabled = true;
  finishPathBtn.disabled = true;
  nextBtn.disabled = true;
  updateNextButtonLabel();

  if (scenario.ballFlightPath) {
    ballFlight.setAttribute("d", scenario.ballFlightPath);
    ballFlight.classList.remove("hidden");
  }

  hideAnswerOverlay();
  resetRoundFeedbackState();
  renderMovementTracker();
  updatePrompt();
  feedbackBodyEl.textContent = "";
  updateFinishPathButtonStyle();

  renderScoreLine();
}

field.addEventListener("click", (event) => {
  if (roundFinished) return;

  const clickPoint = getSvgPoint(event);
  const selectedPath = selectedPaths[activeRoleIndex];
  const artifacts = roleArtifacts[activeRoleIndex];

  if (selectedPath.completed) {
    return;
  }

  selectedPath.points.push(clickPoint);

  if (!selectedPath.start) {
    selectedPath.start = clickPoint;
    placeMarker(artifacts.userStart, clickPoint);
  } else {
    selectedPath.end = clickPoint;
    placeMarker(artifacts.userEnd, clickPoint);
  }

  if (selectedPath.points.length === 1) {
    hideElement(artifacts.userPath);
    hideElement(artifacts.userEnd);
  } else {
    placePath(artifacts.userPath, selectedPath.points);
  }

  updatePrompt();
  updateCheckButtonState();
});

field.addEventListener("mousemove", (event) => {
  updateCursorReadout(getSvgPoint(event));
});

field.addEventListener("mouseleave", () => {
  cursorReadoutEl.textContent = "Cursor: x -, y -";
});

finishPathBtn.addEventListener("click", () => {
  if (roundFinished) return;

  const scenario = scenarios[scenarioIndex];
  const selectedPath = selectedPaths[activeRoleIndex];

  if (!selectedPath || selectedPath.completed || selectedPath.points.length < 2) {
    return;
  }

  selectedPath.completed = true;

  if (activeRoleIndex < scenario.paths.length - 1) {
    activeRoleIndex += 1;
    updatePrompt();
  } else {
    feedbackTitleEl.textContent = "Check both movement paths when you're ready.";
    renderMovementTracker();
  }

  updateCheckButtonState();
});

clearBtn.addEventListener("click", () => {
  if (roundFinished) {
    return;
  }

  resetSelectedPaths();
  feedbackBodyEl.textContent = "";
  updatePrompt();
  updateCheckButtonState();
});

toggleGridBtn.addEventListener("click", () => {
  gridVisible = !gridVisible;
  updateGridVisibility();
});

checkBtn.addEventListener("click", () => {
  if (roundFinished || !selectedPaths.every((path) => path.start && path.end)) {
    return;
  }

  const scenario = scenarios[scenarioIndex];
  let totalDistance = 0;
  let pointsEarned = 0;

  scenario.paths.forEach((path, index) => {
    const selected = selectedPaths[index];
    const startHit = pointInCircle(
      selected.start,
      path.startAnswer,
      SCORING_POINT_RADIUS
    );
    const endHit = pointInCircle(
      selected.end,
      path.endAnswer,
      SCORING_POINT_RADIUS
    );
    const waypointHits = (path.waypoints || []).every((waypoint) =>
      pathIntersectsPointTarget(selected.points, waypoint, SCORING_POINT_RADIUS)
    );
    const roleHit = startHit && waypointHits && endHit;

    if (roleHit) {
      pointsEarned += 1;
    }

    totalDistance += distance(selected.start, path.startAnswer);
    totalDistance += distance(selected.end, path.endAnswer);
    (path.waypoints || []).forEach((waypoint) => {
      const nearestPointDistance = Math.min(
        ...selected.points.map((point) => distance(point, waypoint))
      );
      totalDistance += nearestPointDistance;
    });

    const artifacts = roleArtifacts[index];
    placeMarker(artifacts.answerStart, path.startAnswer);
    placeMarker(artifacts.answerEnd, path.endAnswer);
    placePath(
      artifacts.answerPath,
      path.routePoints || [path.startAnswer, path.endAnswer]
    );
  });

  const maxPoints = scenario.paths.length;
  const averageDistance =
    totalDistance /
    scenario.paths.reduce(
      (sum, path) => sum + 2 + (path.waypoints ? path.waypoints.length : 0),
      0
    );
  const result = describeGrade(pointsEarned, maxPoints, averageDistance);

  attempts += maxPoints;
  score += result.points;
  roundFinished = true;

  renderScoreLine();
  nextBtn.disabled = false;
  persistPlayAllTotals();
  updateNextButtonLabel();
  celebrateScore(result.points);

  if (result.tone === "perfect") {
    feedbackEl?.classList.add("is-perfect");
    nextBtn.classList.add("perfect-next");
  } else if (result.tone === "partial") {
    feedbackEl?.classList.add("is-partial");
  }

  feedbackTitleEl.textContent = result.label;
  renderFeedbackBody(scenario);
  renderAnswerOverlay(scenario);
  renderMovementTracker();
});

nextBtn.addEventListener("click", () => {
  if (goToNextPlayAllScenario()) {
    return;
  }

  scenarioIndex = (scenarioIndex + 1) % scenarios.length;
  loadScenario();
});

initializeGrid();
initializeRoleArtifacts();
updateGridVisibility();
loadScenario();
