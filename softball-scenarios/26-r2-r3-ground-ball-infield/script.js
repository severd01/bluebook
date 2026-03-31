const scenarioTitles = [
  "No Runners Ground Ball In The Infield",
  "No Runners Hit To The Outfield",
  "No Runners Fly Ball To The Outfield, Ball Is Caught",
  "No Runners Fly Ball To The Outfield, Ball Is Not Caught",
  "No Runners Fly Ball To Right Field",
  "No Runners Bunt or Bouncing Ball Fielded in Front of Plate",
  "Runner on 1st Ground Ball In The Infield",
  "Runner on 1st Hit To The Outfield",
  "Runner on 1st Fly Ball To The Outfield, Ball Is Caught",
  "Runner on 1st Fly Ball To The Outfield, Ball Is Not Caught",
  "Runner on 1st Pickoff Throw By Catcher To 1st",
  "Runner on 1st, Batter Bunts, Play at 2nd or 1st",
  "Runner on 1st, Steal Attempt",
  "Runners on 1st and 2nd, Ground Ball In The Infield",
  "Runners on 1st and 2nd, Hit To The Outfield",
  "Runners on 1st and 2nd, Fly Ball To The Outfield, Ball Is Caught",
  "Runners on 1st and 2nd, Fly Ball To The Outfield, Ball Is Not Caught",
  "Runners on 1st and 2nd, Pickoff Throw By Catcher To 1st",
  "Runners on 1st and 2nd, Batter Bunts, Play At 1st, 2nd, or 3rd",
  "Runners on 1st and 2nd, R1 Is Stealing",
  "Runners on 1st and 3rd, Ground Ball In The Infield",
  "Runners on 1st and 3rd, Hit To The Outfield",
  "Runners on 1st and 3rd, Fly Ball To The Outfield, Ball Is Caught",
  "Runners on 1st and 3rd, Fly Ball To The Outfield, Ball Is Not Caught",
  "Runners on 1st and 3rd, Pickoff Throw By Catcher To 3rd",
  "Runners on 2nd and 3rd, Ground Ball In The Infield",
  "Runners on 2nd and 3rd, Hit To The Outfield",
  "Runners on 2nd and 3rd, Fly Ball To Outfield, Ball Is Caught",
  "Runners on 2nd and 3rd, Fly Ball To Outfield, Ball Is Not Caught",
  "Runners on 2nd and 3rd, Pickoff Throw By Catcher To 3rd",
  "Runners on 2nd and 3rd, Batter Bunts, Play at 1st, 2nd or 3rd",
  "Runner on 2nd, Ground Ball In The Infield",
  "Runner on 2nd, Hit To The Outfield",
  "Runner on 2nd, Fly Ball To The Outfield, Ball Is Caught",
  "Runner on 2nd, Fly Ball To The Outfield, Ball Is Not Caught",
  "Runner on 2nd, Steal Attempt",
  "Runner on 2nd, Batter Bunts, Play At 3rd or 1st",
  "Runner on 3rd, Ground Ball In The Infield",
  "Runner on 3rd, Hit To The Outfield",
  "Runner on 3rd, Fly Ball To The Outfield, Ball Is Caught",
  "Runner on 3rd, Fly Ball To The Outfield, Ball Is Not Caught",
  "Runner on 3rd, Batter Bunts, Play at 3rd or 1st",
  "Runners on 1st, 2nd, and 3rd, Ground Ball In The Infield",
  "Runners on 1st, 2nd, and 3rd, Hit To The Outfield",
  "Runners on 1st, 2nd, and 3rd, Fly Ball To The Outfield, Ball Is Caught",
  "Runners on 1st, 2nd, and 3rd, Fly Ball To The Outfield, Ball Is Not Caught"
];

function createScenarioTemplate(title, index) {
  return {
    title,
    system: "",
    description: "R2, R3, ground ball to the infield.",
    runners: "R2, R3",
    outs: "No Outs",
    ball: "Ground Ball",
    type: "dual-movement",
    ballFlightPath: "M 443 696 L 513 520",
    prompt: `Click PU's starting position for Scenario ${index + 1}.`,
    explanation: "",
    answerNotes: [
      {
        heading: "Plate Umpire",
        bullets: [
          "Move out from behind the plate toward the holding zone halfway to third base in foul ground to an area where you have an unobstructed view of all four elements and read the play.",
          "Be prepared to move as the play develops as you are responsible for a subsequent throw to third base on the lead runner (R1 or R2) and any play at the plate.",
        ],
      },
      {
        heading: "B",
        bullets: [
          "Let the ball take you to the play.",
          "Move to get the best angle and distance possible as the play develops.",
          "Responsible for the first throw in the infield, any play at first base or second base and the last runner (batter-runner) to third base.",
        ],
      },
    ],
    paths: [
      {
        role: "P",
        startAnswer: { x: 443, y: 711 },
        routePoints: [
          { x: 443, y: 711 },
          { x: 348, y: 665 },
        ],
        waypoints: [],
        endAnswer: { x: 348, y: 665 },
      },
      {
        role: "U1",
        startAnswer: { x: 344, y: 532 },
        routePoints: [
          { x: 344, y: 532 },
          { x: 399, y: 484 },
        ],
        waypoints: [],
        endAnswer: { x: 399, y: 484 },
      },
    ],
  };
}

const scenarios = scenarioTitles.map((title, index) =>
  createScenarioTemplate(title, index)
);

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
const drawPBtn = document.getElementById("draw-p-btn");
const drawU1Btn = document.getElementById("draw-u1-btn");
const clearBtn = document.getElementById("clear-btn");
const undoBtn = document.getElementById("undo-btn");
const toggleGridBtn = document.getElementById("toggle-grid-btn");
const nextBtn = document.getElementById("next-btn");
const scoreLineEl = document.querySelector(".score-line");
const movementTrackerEl = document.getElementById("movement-tracker");
const cursorReadoutEl = document.getElementById("cursor-readout");
const togglePathToolBtn = document.getElementById("toggle-path-tool-btn");
const pathToolPanelEl = document.getElementById("path-tool-panel");
const pathObjectInput = document.getElementById("path-object-input");
const pathDurationInput = document.getElementById("path-duration-input");
const pathToolStatusEl = document.getElementById("path-tool-status");
const pathOutputEl = document.getElementById("path-output");
const pathToolUndoBtn = document.getElementById("path-tool-undo-btn");
const pathToolClearBtn = document.getElementById("path-tool-clear-btn");
const copyPathBtn = document.getElementById("copy-path-btn");
const hidePathToolBtn = document.getElementById("hide-path-tool-btn");
const field = document.getElementById("field");
const ballFlight = document.getElementById("ball-flight");
const capturePathLine = document.getElementById("capture-path-line");
const capturePointsLayer = document.getElementById("capture-points-layer");
const answerOverlayEl = document.getElementById("answer-overlay");
const answerCardSharedEl = document.getElementById("answer-card-shared");
const fieldStatusEl = document.getElementById("field-status");
const fieldResultEl = document.getElementById("field-result");
const fieldResultTextEl = document.getElementById("field-result-text");
const fieldResultBurstEl = document.getElementById("field-result-burst");
const MARKER_RADIUS = 5.5;
const SCORING_POINT_DIAMETER = 60;
const SCORING_POINT_RADIUS = SCORING_POINT_DIAMETER / 2;
const START_TOLERANCE_RADIUS = 72;
const END_TOLERANCE_RADIUS = 110;
const WAYPOINT_TOLERANCE_RADIUS = 96;
const ROUTE_AVERAGE_TOLERANCE = 68;
const ROUTE_STRONG_TOLERANCE = 48;
const ROUTE_MAX_DEVIATION_TOLERANCE = 92;
const SVG_NS = "http://www.w3.org/2000/svg";
const FIELD_SIZE = 886;
const GRID_STEP = 100;

const PLAY_ALL_KEY = "softball-play-all-session";
const PLAY_ALL_COMPLETE_KEY = "softball-play-all-complete";
const DEFAULT_SCENARIO_ORDER = [
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
const currentScenarioSlug = window.location.pathname.replace(/\/$/, "").split("/").pop();
const initialScenarioIndex = Math.max(
  DEFAULT_SCENARIO_ORDER.indexOf(currentScenarioSlug),
  0
);

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
    nextBtn.textContent = "Next Situation";
    return;
  }

  const order = getSessionOrder(session);
  const currentIndex = order.indexOf(currentScenarioSlug);
  nextBtn.textContent = currentIndex >= order.length - 1
    ? "Finish Session"
    : "Next Situation";
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
  window.location.href = "../../softball-results.html";
  return true;
}

let scenarioIndex = initialScenarioIndex;
let score = 0;
let attempts = 0;
let roundFinished = false;
let activeRoleIndex = null;
let selectedPaths = [];
let pointHistory = [];
let roleArtifacts = [];
let gridVisible = true;
let pathToolOpen = false;
let capturePoints = [];
let copyResetTimer = null;
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
  if (toggleGridBtn) {
    toggleGridBtn.textContent = gridVisible ? "Hide Grid" : "Show Grid";
  }
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

function distanceToSegment(point, start, end) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;

  if (dx === 0 && dy === 0) {
    return distance(point, start);
  }

  const t = Math.max(
    0,
    Math.min(
      1,
      ((point.x - start.x) * dx + (point.y - start.y) * dy) /
        (dx * dx + dy * dy)
    )
  );

  return distance(point, {
    x: start.x + t * dx,
    y: start.y + t * dy,
  });
}

function getExpectedRoutePoints(path) {
  return path.routePoints?.length
    ? path.routePoints
    : [path.startAnswer, ...(path.waypoints || []), path.endAnswer];
}

function getAverageDistanceToRoute(points, expectedRoutePoints) {
  if (!points.length || expectedRoutePoints.length < 2) {
    return Infinity;
  }

  const totalDistance = points.reduce((sum, point) => {
    let best = Infinity;

    for (let index = 0; index < expectedRoutePoints.length - 1; index += 1) {
      best = Math.min(
        best,
        distanceToSegment(
          point,
          expectedRoutePoints[index],
          expectedRoutePoints[index + 1]
        )
      );
    }

    return sum + best;
  }, 0);

  return totalDistance / points.length;
}

function getMaxDistanceToRoute(points, expectedRoutePoints) {
  if (!points.length || expectedRoutePoints.length < 2) {
    return Infinity;
  }

  return points.reduce((worst, point) => {
    let best = Infinity;

    for (let index = 0; index < expectedRoutePoints.length - 1; index += 1) {
      best = Math.min(
        best,
        distanceToSegment(
          point,
          expectedRoutePoints[index],
          expectedRoutePoints[index + 1]
        )
      );
    }

    return Math.max(worst, best);
  }, 0);
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

function renderSelectedPath(index) {
  const selectedPath = selectedPaths[index];
  const artifacts = roleArtifacts[index];

  if (!selectedPath || !artifacts) {
    return;
  }

  selectedPath.start = selectedPath.points[0] || null;
  selectedPath.end =
    selectedPath.points.length > 1
      ? selectedPath.points[selectedPath.points.length - 1]
      : null;

  if (!selectedPath.start) {
    selectedPath.completed = false;
    hideElement(artifacts.userPath);
    hideElement(artifacts.userStart);
    hideElement(artifacts.userEnd);
    return;
  }

  placeMarker(artifacts.userStart, selectedPath.start);

  if (selectedPath.points.length === 1) {
    selectedPath.completed = false;
    hideElement(artifacts.userPath);
    hideElement(artifacts.userEnd);
    return;
  }

  placeMarker(artifacts.userEnd, selectedPath.end);
  placePath(artifacts.userPath, selectedPath.points);
}

function getDisplayedMaxPoints() {
  const session = getPlayAllSession();
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
  if (role === "U1") return "B";
  return role;
}

function roleActionLabel(role) {
  return role === "P" ? "Plate" : role;
}

function getFirstIncompleteRoleIndex() {
  return selectedPaths.findIndex((path) => !path.completed);
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
      return "Tap the field to place the starting position.";
    }

    return "Keep adding route points, then finish on the field.";
  }

  if (path.start) {
    return "Route started.";
  }

  return "Waiting for your path.";
}

function renderMovementTracker() {
  if (!movementTrackerEl) {
    return;
  }

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

function runFieldResultAnimation(result) {
  if (!fieldResultEl) return;

  fieldResultEl.classList.remove("is-animating");
  void fieldResultEl.offsetWidth;
  fieldResultEl.classList.add("is-animating");
  window.setTimeout(() => {
    fieldResultEl?.classList.remove("is-animating");
  }, 560);

  if (!fieldResultBurstEl) return;
  fieldResultBurstEl.innerHTML = "";
  fieldResultBurstEl.classList.remove("is-active");

  if (result.tone !== "perfect") {
    return;
  }

  const colors = ["#38d199", "#ffcf5c", "#285a9b", "#1f7a5f", "#f0a266", "#fff1d6"];
  const pieces = [
    [-66, -42, "-28deg"],
    [-32, -58, "-12deg"],
    [18, -60, "14deg"],
    [58, -40, "28deg"],
    [-58, 20, "-18deg"],
    [-16, 50, "-6deg"],
    [20, 52, "10deg"],
    [64, 18, "22deg"],
  ];

  pieces.forEach(([x, y, rotate], index) => {
    const piece = document.createElement("span");
    piece.className = "field-result-burst-piece";
    piece.style.setProperty("--burst-x", `${x}px`);
    piece.style.setProperty("--burst-y", `${y}px`);
    piece.style.setProperty("--burst-rotate", rotate);
    piece.style.background = colors[index % colors.length];
    piece.style.animationDelay = `${index * 18}ms`;
    fieldResultBurstEl.appendChild(piece);
  });

  void fieldResultBurstEl.offsetWidth;
  fieldResultBurstEl.classList.add("is-active");
  window.setTimeout(() => {
    fieldResultBurstEl?.classList.remove("is-active");
    if (fieldResultBurstEl) fieldResultBurstEl.innerHTML = "";
  }, 900);
}

function clearFieldResult() {
  fieldResultEl?.classList.add("hidden");
  fieldResultEl?.classList.remove("is-perfect", "is-partial", "is-close", "is-miss", "is-animating");
  if (fieldResultTextEl) fieldResultTextEl.textContent = "";
  if (fieldResultBurstEl) {
    fieldResultBurstEl.classList.remove("is-active");
    fieldResultBurstEl.innerHTML = "";
  }
}

function showFieldResult(result) {
  if (!fieldResultEl || !fieldResultTextEl) return;
  fieldResultTextEl.textContent = result.label;
  fieldResultEl.classList.remove("hidden", "is-perfect", "is-partial", "is-close", "is-miss");
  if (result.tone === "perfect") {
    fieldResultEl.classList.add("is-perfect");
  } else if (result.tone === "partial") {
    fieldResultEl.classList.add("is-partial");
  } else if (result.tone === "close") {
    fieldResultEl.classList.add("is-close");
  } else if (result.tone === "miss") {
    fieldResultEl.classList.add("is-miss");
  }
  runFieldResultAnimation(result);
}

function updatePrompt() {
  const scenario = scenarios[scenarioIndex];

  if (roundFinished) {
    return;
  }

  if (activeRoleIndex === null) {
    feedbackTitleEl.textContent = "Choose Plate or B to begin drawing.";
    renderMovementTracker();
    return;
  }

  const activeRole = scenario.paths[activeRoleIndex];
  const selectedPath = selectedPaths[activeRoleIndex];

  if (!activeRole || !selectedPath) {
    feedbackTitleEl.textContent = "Choose Plate or B to begin drawing.";
    renderMovementTracker();
    return;
  }

  const roleLabel = roleActionLabel(activeRole.role);

  if (!selectedPath.start) {
    feedbackTitleEl.textContent = `Tap the field to place ${roleLabel}'s starting position.`;
  } else {
    feedbackTitleEl.textContent = `Keep drawing ${roleLabel}'s route, then tap ${roleLabel} again to finish.`;
  }

  renderMovementTracker();
}

function updateRoleDrawButtons() {
  const scenario = scenarios[scenarioIndex];
  const buttonMap = { P: drawPBtn, U1: drawU1Btn };

  scenario.paths.forEach((path, index) => {
    const button = buttonMap[path.role];
    if (!button) return;

    const selectedPath = selectedPaths[index];
    const roleLabel = roleActionLabel(path.role);
    const isComplete = Boolean(selectedPath?.completed);
    const isActive = !roundFinished && index === activeRoleIndex;
    const canFinish = Boolean(selectedPath?.start) && selectedPath.points.length >= 2 && !isComplete;

    button.classList.toggle("hidden", isComplete || roundFinished);
    button.classList.toggle("is-active", isActive);
    button.classList.toggle("is-complete", isComplete);
    button.disabled = roundFinished || isComplete;
    button.textContent = canFinish
      ? `Finish ${roleLabel} Path`
      : `Draw ${roleLabel} Path`;
  });
}

function updateCheckButtonState() {
  if (checkBtn) {
    checkBtn.disabled = roundFinished || !selectedPaths.every(
      (path) => path.completed && path.start && path.end
    );
    checkBtn.classList.toggle("hidden", roundFinished);
  }

  if (clearBtn) {
    clearBtn.disabled = roundFinished;
    clearBtn.classList.toggle("hidden", roundFinished);
  }

  if (undoBtn) {
    const hasPoints = selectedPaths.some((path) => path.points.length > 0);
    undoBtn.disabled = roundFinished || !hasPoints;
    undoBtn.classList.toggle("hidden", roundFinished);
  }

  if (fieldStatusEl) {
    fieldStatusEl.classList.toggle("hidden", roundFinished);
  }

  updateRoleDrawButtons();
  renderMovementTracker();
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
  if (!feedbackBodyEl) return;
  feedbackBodyEl.innerHTML = `<p>${scenario.explanation}</p>`;
}

function updateCursorReadout(point) {
  cursorReadoutEl.textContent = `Cursor: x ${Math.round(point.x)}, y ${Math.round(point.y)}`;
}

function formatCapturePoint(point) {
  return "(" + Math.round(point.x) + "," + Math.round(point.y) + ")";
}

function buildPathOutput() {
  const objectName = pathObjectInput?.value.trim() || "Object";
  const duration = pathDurationInput?.value.trim() || "0s";
  const pointsText = capturePoints.map(formatCapturePoint).join(" -> ");
  return objectName + " | " + duration + " | " + pointsText;
}

function updatePathToolOutput() {
  if (pathOutputEl) {
    pathOutputEl.value = buildPathOutput();
  }

  if (!pathToolStatusEl) {
    return;
  }

  if (!capturePoints.length) {
    pathToolStatusEl.textContent = "Click points on the field to capture a path.";
    return;
  }

  pathToolStatusEl.textContent =
    capturePoints.length +
    " point" +
    (capturePoints.length === 1 ? "" : "s") +
    " captured.";
}

function renderCapturePath() {
  if (!capturePathLine || !capturePointsLayer) {
    return;
  }

  capturePointsLayer.innerHTML = "";

  if (!capturePoints.length) {
    capturePathLine.setAttribute("points", "");
    capturePathLine.classList.add("hidden");
    capturePointsLayer.classList.add("hidden");
    updatePathToolOutput();
    return;
  }

  capturePathLine.setAttribute(
    "points",
    capturePoints.map((point) => point.x + "," + point.y).join(" ")
  );
  capturePathLine.classList.remove("hidden");
  capturePointsLayer.classList.remove("hidden");

  capturePoints.forEach((point) => {
    const marker = document.createElementNS(SVG_NS, "circle");
    marker.setAttribute("cx", point.x);
    marker.setAttribute("cy", point.y);
    marker.setAttribute("r", 7);
    marker.setAttribute("class", "capture-point");
    capturePointsLayer.appendChild(marker);
  });

  updatePathToolOutput();
}

function clearCapturePath() {
  capturePoints = [];
  renderCapturePath();
}

function setPathToolOpen(isOpen) {
  pathToolOpen = isOpen;
  pathToolPanelEl?.classList.toggle("hidden", !isOpen);
  if (togglePathToolBtn) {
    togglePathToolBtn.textContent = isOpen ? "Hide Path Tool" : "Show Path Tool";
  }

  if (!isOpen && copyPathBtn) {
    copyPathBtn.textContent = "Copy Output";
  }
}


function resetSelectedPaths() {
  const scenario = scenarios[scenarioIndex];

  activeRoleIndex = null;
  selectedPaths = scenario.paths.map(() => ({
    start: null,
    end: null,
    points: [],
    completed: false,
  }));
  pointHistory = [];

  roleArtifacts.forEach((artifacts) => {
    hideElement(artifacts.userPath);
    hideElement(artifacts.userStart);
    hideElement(artifacts.userEnd);
  });
}

function setActiveRole(index) {
  if (roundFinished || index === null || index === undefined) {
    return;
  }

  const selectedPath = selectedPaths[index];
  if (!selectedPath || selectedPath.completed) {
    return;
  }

  activeRoleIndex = index;
  updatePrompt();
  updateCheckButtonState();
}

function finishActiveRolePath() {
  if (roundFinished || activeRoleIndex === null) {
    return;
  }

  const selectedPath = selectedPaths[activeRoleIndex];
  if (!selectedPath || selectedPath.completed || selectedPath.points.length < 2) {
    return;
  }

  selectedPath.completed = true;

  const nextIncompleteIndex = getFirstIncompleteRoleIndex();
  activeRoleIndex = nextIncompleteIndex === -1 ? null : nextIncompleteIndex;

  if (activeRoleIndex === null) {
    feedbackTitleEl.textContent = "Check both movement paths when you're ready.";
    renderMovementTracker();
  } else {
    updatePrompt();
  }

  updateCheckButtonState();
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
  nextBtn.disabled = true;
  updateNextButtonLabel();

  if (scenario.ballFlightPath) {
    ballFlight.setAttribute("d", scenario.ballFlightPath);
    ballFlight.classList.remove("hidden");
  }

  hideAnswerOverlay();
  resetRoundFeedbackState();
  clearFieldResult();
  renderMovementTracker();
  updatePrompt();
  if (feedbackBodyEl) feedbackBodyEl.textContent = "";
  updateRoleDrawButtons();

  renderScoreLine();
}

field.addEventListener("click", (event) => {
  if (pathToolOpen) {
    const clickPoint = getSvgPoint(event);
    capturePoints.push(clickPoint);
    renderCapturePath();
    return;
  }

  if (roundFinished || activeRoleIndex === null) return;

  const clickPoint = getSvgPoint(event);
  const selectedPath = selectedPaths[activeRoleIndex];
  const artifacts = roleArtifacts[activeRoleIndex];

  if (selectedPath.completed) {
    return;
  }

  selectedPath.points.push(clickPoint);
  pointHistory.push(activeRoleIndex);

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

drawPBtn?.addEventListener("click", () => {
  const selectedPath = selectedPaths[0];
  if (!selectedPath || roundFinished) {
    return;
  }

  if (selectedPath.start && selectedPath.points.length >= 2 && !selectedPath.completed) {
    activeRoleIndex = 0;
    finishActiveRolePath();
    return;
  }

  setActiveRole(0);
});

drawU1Btn?.addEventListener("click", () => {
  const selectedPath = selectedPaths[1];
  if (!selectedPath || roundFinished) {
    return;
  }

  if (selectedPath.start && selectedPath.points.length >= 2 && !selectedPath.completed) {
    activeRoleIndex = 1;
    finishActiveRolePath();
    return;
  }

  setActiveRole(1);
});

clearBtn.addEventListener("click", () => {
  if (roundFinished) {
    return;
  }

  resetSelectedPaths();
  if (feedbackBodyEl) feedbackBodyEl.textContent = "";
  updatePrompt();
  updateCheckButtonState();
});

undoBtn?.addEventListener("click", () => {
  if (roundFinished || !pointHistory.length) {
    return;
  }

  const lastRoleIndex = pointHistory.pop();
  const selectedPath = selectedPaths[lastRoleIndex];
  if (!selectedPath || !selectedPath.points.length) {
    updateCheckButtonState();
    return;
  }

  selectedPath.points.pop();
  selectedPath.completed = false;
  activeRoleIndex = lastRoleIndex;
  renderSelectedPath(lastRoleIndex);
  updatePrompt();
  updateCheckButtonState();
});

toggleGridBtn?.addEventListener("click", () => {
  gridVisible = !gridVisible;
  updateGridVisibility();
});

togglePathToolBtn?.addEventListener("click", () => {
  setPathToolOpen(!pathToolOpen);
});

hidePathToolBtn?.addEventListener("click", () => {
  setPathToolOpen(false);
});

pathToolUndoBtn?.addEventListener("click", () => {
  if (!capturePoints.length) {
    return;
  }

  capturePoints.pop();
  renderCapturePath();
});

pathToolClearBtn?.addEventListener("click", () => {
  clearCapturePath();
});

pathObjectInput?.addEventListener("input", updatePathToolOutput);
pathDurationInput?.addEventListener("input", updatePathToolOutput);

copyPathBtn?.addEventListener("click", async () => {
  if (!pathOutputEl?.value.trim()) {
    return;
  }

  try {
    await navigator.clipboard.writeText(pathOutputEl.value);
    copyPathBtn.textContent = "Copied";
  } catch (error) {
    pathOutputEl.focus();
    pathOutputEl.select();
    copyPathBtn.textContent = "Press Cmd+C";
  }

  if (copyResetTimer) {
    window.clearTimeout(copyResetTimer);
  }

  copyResetTimer = window.setTimeout(() => {
    if (copyPathBtn) {
      copyPathBtn.textContent = "Copy Output";
    }
  }, 1600);
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
    const expectedRoutePoints = getExpectedRoutePoints(path);
    const startHit = pointInCircle(
      selected.start,
      path.startAnswer,
      START_TOLERANCE_RADIUS
    );
    const endHit = pointInCircle(
      selected.end,
      path.endAnswer,
      END_TOLERANCE_RADIUS
    );
    const waypointHits = (path.waypoints || []).every((waypoint) =>
      pathIntersectsPointTarget(selected.points, waypoint, WAYPOINT_TOLERANCE_RADIUS)
    );
    const averageRouteDistance = getAverageDistanceToRoute(
      selected.points,
      expectedRoutePoints
    );
    const maxRouteDistance = getMaxDistanceToRoute(
      selected.points,
      expectedRoutePoints
    );
    const routeHit = averageRouteDistance <= ROUTE_AVERAGE_TOLERANCE;
    const strongRouteHit = averageRouteDistance <= ROUTE_STRONG_TOLERANCE;
    const routeWithinBounds = maxRouteDistance <= ROUTE_MAX_DEVIATION_TOLERANCE;
    const routeOrWaypointHit = waypointHits || (routeHit && routeWithinBounds);
    const roleHit =
      startHit &&
      routeOrWaypointHit &&
      endHit &&
      (waypointHits || strongRouteHit || routeWithinBounds);

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
  updateCheckButtonState();

  if (result.tone === "perfect") {
    fieldResultEl?.classList.add("is-perfect");
    nextBtn.classList.add("perfect-next");
  } else if (result.tone === "partial") {
    fieldResultEl?.classList.add("is-partial");
  }

  feedbackTitleEl.textContent = result.label;
  showFieldResult(result);
  renderFeedbackBody(scenario);
  renderAnswerOverlay(scenario);
  renderMovementTracker();
});

nextBtn.addEventListener("click", () => {
  if (goToNextPlayAllScenario()) {
    return;
  }

  const currentIndex = DEFAULT_SCENARIO_ORDER.indexOf(currentScenarioSlug);
  const nextSlug =
    currentIndex === -1
      ? null
      : DEFAULT_SCENARIO_ORDER[(currentIndex + 1) % DEFAULT_SCENARIO_ORDER.length];

  if (nextSlug) {
    window.location.href = `../${nextSlug}/`;
    return;
  }

  scenarioIndex = (scenarioIndex + 1) % scenarios.length;
  loadScenario();
});

initializeGrid();
initializeRoleArtifacts();
updateGridVisibility();
loadScenario();
