const scenarios = [
  {
    title: "Base Hit to Right Field",
    system: "",
    description: "No runners on, base hit to right field.",
    runners: "No Runners",
    outs: "No Outs",
    ball: "Base hit to right field",
    type: "dual-movement",
    ballFlightPath:
      "M 442 664 C 470 560, 545 390, 612 314 C 630 294, 642 282, 650 276",
    prompt: "Click P's starting position.",
    explanation: "",
    answerNotes: [
      {
        heading: "Plate",
        bullets: [
          "Clear F2 and move into fair territory.",
          "Your next play would be at the plate unless you read your partner unable to take runner into third.",
          "Communicate your location and if you commit to third, you will also have any plays at the plate.",
        ],
      },
      {
        heading: "U1",
        bullets: [
          "Come in and pivot, watch touch of first and stay ahead of runner.",
          "Has all plays at 1st, 2nd and 3rd.",
        ],
      },
    ],
    paths: [
      {
        role: "P",
        startAnswer: { x: 439, y: 699 },
        routePoints: [
          { x: 439, y: 699 },
          { x: 411, y: 679 },
          { x: 471, y: 574 },
        ],
        waypoints: [{ x: 411, y: 679 }],
        endAnswer: { x: 471, y: 574 },
      },
      {
        role: "U1",
        startAnswer: { x: 615, y: 523 },
        routePoints: [
          { x: 615, y: 523 },
          { x: 513, y: 548 },
          { x: 461, y: 504 },
        ],
        waypoints: [{ x: 513, y: 548 }],
        endAnswer: { x: 461, y: 504 },
      },
    ],
  },
];

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
const movementTrackerEl = document.getElementById("movement-tracker");
const cursorReadoutEl = document.getElementById("cursor-readout");
const pollYesBtn = document.getElementById("poll-yes-btn");
const pollNoBtn = document.getElementById("poll-no-btn");
const pollStatusEl = document.getElementById("poll-status");
const pollYesCountEl = document.getElementById("poll-yes-count");
const pollNoCountEl = document.getElementById("poll-no-count");
const pollYesBarEl = document.getElementById("poll-yes-bar");
const pollNoBarEl = document.getElementById("poll-no-bar");
const pollTotalEl = document.getElementById("poll-total");
const togglePlaybackBtn = document.getElementById("toggle-playback-btn");
const field = document.getElementById("field");
const ballFlight = document.getElementById("ball-flight");
const animationObjectsLayer = document.getElementById("animation-objects-layer");
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
const POLL_TABLE = "prototype_animation_poll_votes";
const POLL_KEY = "base_hit_to_right_field_animation";
const POLL_VOTE_STORAGE_KEY = "umpiq-animation-template-poll-vote";
const POLL_LOCAL_RESULTS_KEY = "umpiq-animation-template-poll-results";
const ANIMATION_OBJECTS = [
  { name: "R1", kind: "runner" },
  { name: "R2", kind: "runner" },
  { name: "R3", kind: "runner" },
  { name: "BR", kind: "runner" },
  { name: "F1", kind: "fielder" },
  { name: "F2", kind: "fielder" },
  { name: "F3", kind: "fielder" },
  { name: "F4", kind: "fielder" },
  { name: "F5", kind: "fielder" },
  { name: "F6", kind: "fielder" },
  { name: "F7", kind: "fielder" },
  { name: "F8", kind: "fielder" },
  { name: "F9", kind: "fielder" },
  { name: "Ball", kind: "ball" },
  { name: "P", kind: "umpire" },
  { name: "U1", kind: "umpire" },
];
const ANIMATION_OBJECT_MAP = new Map(
  ANIMATION_OBJECTS.map((object) => [object.name.toUpperCase(), object])
);
const ANIMATION_PRESETS = {
  BALL: {
    start: { x: 440, y: 660 },
    segments: [
      {
        dur: "3s",
        path: "M 440 660 L 454 619 L 473 568 L 491 515 L 512 479 L 532 438 L 561 388 L 579 358 L 600 330 L 614 315 L 633 293 L 647 278",
      },
      {
        pause: "1s",
      },
      {
        dur: "3s",
        path: "M 645 277 L 535 361",
      },
      {
        dur: "3s",
        path: "M 535 359 L 435 430",
      },
    ],
  },
  BR: {
    dur: "7s",
    path: "M 444 671 L 557 554 L 512 507 L 554 551",
    start: { x: 444, y: 671 },
  },
  F9: {
    dur: "4s",
    path: "M 703 321 L 659 277",
    start: { x: 703, y: 321 },
  },
  F4: {
    dur: "7s",
    path: "M 502 450 L 534 366",
    start: { x: 502, y: 450 },
  },
  F6: {
    dur: "7s",
    path: "M 359 448 L 436 436",
    start: { x: 359, y: 448 },
  },
  F1: {
    dur: "7s",
    path: "M 559 485 L 560 528",
    start: { x: 559, y: 485 },
  },
};

const currentScenarioSlug = window.location.pathname.replace(/\/$/, "").split("/").pop();

function updateNextButtonLabel() {
  nextBtn.textContent = "Replay";
}

let scenarioIndex = 0;
let roundFinished = false;
let activeRoleIndex = null;
let selectedPaths = [];
let pointHistory = [];
let roleArtifacts = [];
let gridVisible = false;
let gridLayer;
let animationObjectElements = new Map();
let animationStarterElements = [];
let animationPlaying = false;
let animationCycleTimer = null;
let pollClient = null;
let pollVoteChoice = null;
let pollMode = "remote";

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

function getStoredPollVote() {
  try {
    return window.localStorage.getItem(POLL_VOTE_STORAGE_KEY);
  } catch (error) {
    return null;
  }
}

function setStoredPollVote(choice) {
  try {
    window.localStorage.setItem(POLL_VOTE_STORAGE_KEY, choice);
  } catch (error) {
    // Ignore storage failures in prototype mode.
  }
}

function getStoredLocalPollResults() {
  try {
    const parsed = JSON.parse(
      window.localStorage.getItem(POLL_LOCAL_RESULTS_KEY) || "{\"yes\":0,\"no\":0}"
    );
    return {
      yes: Number(parsed.yes || 0),
      no: Number(parsed.no || 0),
    };
  } catch (error) {
    return { yes: 0, no: 0 };
  }
}

function setStoredLocalPollResults(results) {
  try {
    window.localStorage.setItem(POLL_LOCAL_RESULTS_KEY, JSON.stringify(results));
  } catch (error) {
    // Ignore storage failures in prototype mode.
  }
}

function setPollButtonsDisabled(disabled) {
  if (pollYesBtn) pollYesBtn.disabled = disabled;
  if (pollNoBtn) pollNoBtn.disabled = disabled;
}

function renderPollResults(yesVotes, noVotes) {
  const totalVotes = yesVotes + noVotes;
  const yesPercent = totalVotes ? (yesVotes / totalVotes) * 100 : 0;
  const noPercent = totalVotes ? (noVotes / totalVotes) * 100 : 0;
  const yesRounded = Math.round(yesPercent);
  const noRounded = Math.round(noPercent);

  if (pollYesCountEl) pollYesCountEl.textContent = `${yesRounded}%`;
  if (pollNoCountEl) pollNoCountEl.textContent = `${noRounded}%`;
  if (pollYesBarEl) pollYesBarEl.style.width = `${yesPercent}%`;
  if (pollNoBarEl) pollNoBarEl.style.width = `${noPercent}%`;
  if (pollTotalEl) {
    pollTotalEl.textContent = `${totalVotes} response${totalVotes === 1 ? "" : "s"}`;
  }
}

async function ensurePollClient() {
  if (pollClient) {
    return pollClient;
  }

  const authConfig = window.UMPIQ_SUPABASE_CONFIG;
  if (!authConfig?.url || !authConfig?.anonKey) {
    return null;
  }

  const supabaseModule = await import("https://esm.sh/@supabase/supabase-js@2");
  const { createClient } = supabaseModule;
  pollClient = createClient(authConfig.url, authConfig.anonKey);
  return pollClient;
}

async function loadPollResults() {
  const client = await ensurePollClient();
  if (!client) {
    pollMode = "local";
    const localResults = getStoredLocalPollResults();
    renderPollResults(localResults.yes, localResults.no);
    if (pollStatusEl) {
      pollStatusEl.textContent = "Cast one quick vote to tell us whether animation helps.";
    }
    pollVoteChoice = getStoredPollVote();
    if (pollVoteChoice && pollStatusEl) {
      pollStatusEl.textContent = "Thanks for voting. Current results are shown below.";
    }
    setPollButtonsDisabled(Boolean(pollVoteChoice));
    return;
  }

  const { data, error } = await client
    .from(POLL_TABLE)
    .select("choice")
    .eq("poll_key", POLL_KEY);

  if (error) {
    pollMode = "local";
    const localResults = getStoredLocalPollResults();
    renderPollResults(localResults.yes, localResults.no);
    if (pollStatusEl) {
      pollStatusEl.textContent = "Cast one quick vote to tell us whether animation helps.";
    }
    pollVoteChoice = getStoredPollVote();
    if (pollVoteChoice && pollStatusEl) {
      pollStatusEl.textContent = "Thanks for voting. Current results are shown below.";
    }
    setPollButtonsDisabled(Boolean(pollVoteChoice));
    return;
  }

  pollMode = "remote";
  const yesVotes = data.filter((row) => row.choice === "yes").length;
  const noVotes = data.filter((row) => row.choice === "no").length;
  renderPollResults(yesVotes, noVotes);

  pollVoteChoice = getStoredPollVote();
  if (pollStatusEl) {
    pollStatusEl.textContent = pollVoteChoice
      ? "Thanks for voting. Current prototype results are shown below."
      : "Cast one quick vote to tell us whether animation helps.";
  }
  setPollButtonsDisabled(Boolean(pollVoteChoice));
}

async function submitPollVote(choice) {
  if (pollVoteChoice) {
    return;
  }

  setPollButtonsDisabled(true);
  if (pollStatusEl) {
    pollStatusEl.textContent = "Submitting your vote...";
  }

  if (pollMode === "local") {
    const localResults = getStoredLocalPollResults();
    localResults[choice] += 1;
    setStoredLocalPollResults(localResults);
    pollVoteChoice = choice;
    setStoredPollVote(choice);
    renderPollResults(localResults.yes, localResults.no);
    if (pollStatusEl) {
      pollStatusEl.textContent = "Thanks for voting. Current results are shown below.";
    }
    setPollButtonsDisabled(true);
    return;
  }

  const client = await ensurePollClient();
  if (!client) {
    pollMode = "local";
    setPollButtonsDisabled(false);
    await submitPollVote(choice);
    return;
  }

  const { error } = await client.from(POLL_TABLE).insert({
    poll_key: POLL_KEY,
    choice,
  });

  if (error) {
    pollMode = "local";
    setPollButtonsDisabled(false);
    await submitPollVote(choice);
    return;
  }

  pollVoteChoice = choice;
  setStoredPollVote(choice);
  await loadPollResults();
}

function createAnimationObject(object) {
  if (!animationObjectsLayer) {
    return;
  }

  const preset = ANIMATION_PRESETS[object.name.toUpperCase()];

  const group = document.createElementNS(SVG_NS, "g");
  group.setAttribute(
    "class",
    `animation-object object-${object.kind}${preset ? "" : " is-hidden"}`
  );
  group.setAttribute("id", `animation-object-${object.name.toLowerCase()}`);
  group.setAttribute(
    "transform",
    preset
      ? `translate(${preset.start.x},${preset.start.y})`
      : "translate(-100,-100)"
  );

  const circle = document.createElementNS(SVG_NS, "circle");
  circle.setAttribute("class", "runner-marker");
  circle.setAttribute("cx", "0");
  circle.setAttribute("cy", "0");
  circle.setAttribute("r", object.kind === "ball" ? "9" : "13");
  group.appendChild(circle);

  const text = document.createElementNS(SVG_NS, "text");
  text.setAttribute("class", "runner-label");
  text.setAttribute("x", "0");
  text.setAttribute("y", "0");
  text.setAttribute("dy", "0.35em");
  text.textContent = object.kind === "ball" ? "" : object.name;
  group.appendChild(text);

  if (preset) {
    const segments = Array.isArray(preset.segments)
      ? preset.segments
      : [{ dur: preset.dur, path: preset.path }];
    let previousAnimationId = null;
    let accumulatedPauseMs = 0;

    segments.forEach((segment, index) => {
      if (segment.pause) {
        accumulatedPauseMs += parseDurationToMs(segment.pause);
        return;
      }

      const motion = document.createElementNS(SVG_NS, "animateMotion");
      const motionId = `motion-${object.name.toLowerCase()}-${index}`;
      motion.setAttribute("id", motionId);
      motion.setAttribute(
        "begin",
        previousAnimationId
          ? `${previousAnimationId}.end+${accumulatedPauseMs / 1000}s`
          : "indefinite"
      );
      motion.setAttribute("dur", segment.dur);
      motion.setAttribute("repeatCount", "1");
      motion.setAttribute("fill", "freeze");
      motion.setAttribute("path", segment.path);
      group.appendChild(motion);

      if (!previousAnimationId) {
        animationStarterElements.push(motion);
      }

      previousAnimationId = motionId;
      accumulatedPauseMs = 0;
    });
  }

  animationObjectsLayer.appendChild(group);
  animationObjectElements.set(object.name.toUpperCase(), group);
}

function initializeAnimationObjects() {
  animationStarterElements = [];
  ANIMATION_OBJECTS.forEach(createAnimationObject);
}

function parseDurationToMs(duration) {
  if (typeof duration !== "string") {
    return 0;
  }

  const value = duration.trim().toLowerCase();

  if (value.endsWith("ms")) {
    return Number.parseFloat(value) || 0;
  }

  if (value.endsWith("s")) {
    return (Number.parseFloat(value) || 0) * 1000;
  }

  return Number.parseFloat(value) || 0;
}

function getLongestPresetDurationMs() {
  return Object.values(ANIMATION_PRESETS).reduce((longest, preset) => {
    const segments = Array.isArray(preset.segments)
      ? preset.segments
      : [{ dur: preset.dur }];
    const total = segments.reduce((sum, segment) => {
      if (segment.pause) {
        return sum + parseDurationToMs(segment.pause);
      }

      return sum + parseDurationToMs(segment.dur);
    }, 0);
    return Math.max(longest, total);
  }, 0);
}

function updatePlaybackButton() {
  if (!togglePlaybackBtn) {
    return;
  }

  togglePlaybackBtn.textContent = animationPlaying ? "■ Stop" : "▶ Play";
  togglePlaybackBtn.classList.toggle("is-stopping", animationPlaying);
  togglePlaybackBtn.disabled = false;
}

function clearAnimationCycleTimer() {
  if (animationCycleTimer) {
    window.clearTimeout(animationCycleTimer);
    animationCycleTimer = null;
  }
}

function startAnimationCycle() {
  field.pauseAnimations();
  field.setCurrentTime(0);
  animationObjectElements.forEach((element, name) => {
    if (ANIMATION_PRESETS[name]) {
      element.setAttribute("transform", "translate(0,0)");
    }
  });
  animationStarterElements.forEach((motion) => motion.beginElement());
  field.unpauseAnimations();
}

function queueAnimationCycleCompletion() {
  clearAnimationCycleTimer();

  if (!animationPlaying) {
    return;
  }

  animationCycleTimer = window.setTimeout(() => {
    if (!animationPlaying) {
      return;
    }

    field.pauseAnimations();
    animationPlaying = false;
    updatePlaybackButton();
  }, getLongestPresetDurationMs());
}

function stopPresetAnimations() {
  clearAnimationCycleTimer();
  field.pauseAnimations();
  animationPlaying = false;
  updatePlaybackButton();
}

function startPresetAnimations() {
  startAnimationCycle();
  animationPlaying = true;
  queueAnimationCycleCompletion();
  updatePlaybackButton();
}

function updateAnimationObjectPreview() {
  animationObjectElements.forEach((element, name) => {
    const preset = ANIMATION_PRESETS[name];
    const hasPreset = Boolean(preset);
    const shouldShow = hasPreset;
    element.classList.toggle("is-hidden", !shouldShow);

    if (hasPreset) {
      element.setAttribute(
        "transform",
        !animationPlaying
          ? `translate(${preset.start.x},${preset.start.y})`
          : "translate(0,0)"
      );
    }
  });
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

function renderScoreLine() {
  // Prototype page intentionally omits score display.
}

function celebrateScore(pointsEarned) {
  void pointsEarned;
}

function roleDisplayName(role) {
  if (role === "P") return "Plate Umpire";
  if (role === "U1") return "Base Umpire";
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
    feedbackTitleEl.textContent = "Choose Plate or U1 to begin drawing.";
    renderMovementTracker();
    return;
  }

  const activeRole = scenario.paths[activeRoleIndex];
  const selectedPath = selectedPaths[activeRoleIndex];

  if (!activeRole || !selectedPath) {
    feedbackTitleEl.textContent = "Choose Plate or U1 to begin drawing.";
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

pollYesBtn?.addEventListener("click", () => {
  submitPollVote("yes");
});

pollNoBtn?.addEventListener("click", () => {
  submitPollVote("no");
});

togglePlaybackBtn?.addEventListener("click", () => {
  if (animationPlaying) {
    stopPresetAnimations();
    return;
  }

  startPresetAnimations();
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

  roundFinished = true;

  renderScoreLine();
  nextBtn.disabled = false;
  updateNextButtonLabel();
  celebrateScore(result.points);
  updateCheckButtonState();

  if (result.tone === "perfect") {
    feedbackEl?.classList.add("is-perfect");
    nextBtn.classList.add("perfect-next");
  } else if (result.tone === "partial") {
    feedbackEl?.classList.add("is-partial");
  }

  feedbackTitleEl.textContent = result.label;
  showFieldResult(result);
  renderFeedbackBody(scenario);
  renderAnswerOverlay(scenario);
  renderMovementTracker();
});

nextBtn.addEventListener("click", () => {
  window.location.reload();
});

initializeGrid();
initializeRoleArtifacts();
initializeAnimationObjects();
updateGridVisibility();
stopPresetAnimations();
loadScenario();
loadPollResults();
