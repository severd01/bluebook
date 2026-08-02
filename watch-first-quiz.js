const SVG_NS = "http://www.w3.org/2000/svg";
const LOOP_DURATION_MS = 5600;
const RUNNER_TRAVEL_MS = 5600;
const BALL_TO_FIELDER_MS = 2000;
const THROW_TO_FIRST_MS = 2500;
const FIRST_BASE_FIELDER_MS = 2000;
const POLL_TABLE = "positioning_poll_results";
const POLL_KEY = "watch-first-quiz-2026-08";
const SELECTOR_START = { x: 537, y: 483 };
const SELECTOR_CONTROL = { x: 575, y: 470 };
const SELECTOR_END = { x: 619, y: 568 };
const SPOTS = [
  { id: "1", t: 0, label: "Too close / straight-line risk" },
  { id: "2", t: 1 / 7, label: "Fair-side drift" },
  { id: "3", t: 2 / 7, label: "Inside lane" },
  { id: "4", t: 3 / 7, label: "Neutral lane" },
  { id: "5", t: 4 / 7, label: "Slightly outside" },
  { id: "6", t: 5 / 7, label: "Tighter read" },
  { id: "7", t: 6 / 7, label: "Foul line wedge" },
  { id: "8", t: 1, label: "Deep foul side" },
];

const PLAYS = [
  {
    id: "play-1",
    progress: "Play 1 of 3",
    throwOrigin: "Third Baseman",
    fielderLabel: "F6",
    ballToFielderMs: 2000,
    throwToFirstMs: 2500,
    fielderToBallMs: 2000,
    title: "5-3 routine throw from third",
    description:
      "No runners, no outs. F5 charges a routine ground ball and throws across to first.",
    instruction:
      "Routine cross-diamond throw. After the first loop, pick the best working area for Plate.",
    runnerPath: [
      { x: 442, y: 706 },
      { x: 456, y: 665 },
      { x: 495, y: 623 },
      { x: 530, y: 585 },
      { x: 548, y: 563 },
      { x: 556, y: 551 },
      { x: 608, y: 523 },
    ],
    ballPath: [
      { x: 442, y: 665 },
      { x: 360, y: 445 },
      { x: 553, y: 556 },
    ],
    fielderPath: [
      { x: 354, y: 473 },
      { x: 360, y: 445 },
    ],
    firstBasePath: [
      { x: 539, y: 490 },
      { x: 553, y: 556 },
    ],
  },
  {
    id: "play-2",
    progress: "Play 2 of 3",
    throwOrigin: "Shortstop",
    fielderLabel: "F5",
    runnerTravelMs: 5500,
    ballToFielderMs: 3000,
    throwToFirstMs: 2500,
    fielderToBallMs: 2600,
    title: "6-3 throw from the hole",
    description:
      "No runners, no outs. F5 moves to the ball, receives it, and throws across to first.",
    instruction:
      "Third baseman fields and throws across. Watch one loop first, then choose your best angle.",
    runnerPath: [
      { x: 442, y: 706 },
      { x: 456, y: 665 },
      { x: 495, y: 623 },
      { x: 530, y: 585 },
      { x: 548, y: 563 },
      { x: 556, y: 551 },
      { x: 608, y: 523 },
    ],
    ballPath: [
      { x: 443, y: 667 },
      { x: 291, y: 513 },
      { x: 554, y: 556 },
    ],
    fielderPath: [
      { x: 338, y: 499 },
      { x: 291, y: 513 },
    ],
    firstBasePath: [
      { x: 539, y: 490 },
      { x: 553, y: 556 },
    ],
  },
  {
    id: "play-3",
    progress: "Play 3 of 3",
    throwOrigin: "Second Baseman",
    fielderLabel: "F4",
    ballToFielderMs: 2000,
    throwToFirstMs: 2500,
    fielderToBallMs: 2000,
    title: "4-3 feed from the middle",
    description:
      "No runners, no outs. F4 moves to the ball and makes a quick throw from the middle of the infield.",
    instruction:
      "Quick release from second baseman territory. After the first loop, pick the best look and then submit all three.",
    runnerPath: [
      { x: 442, y: 706 },
      { x: 456, y: 665 },
      { x: 495, y: 623 },
      { x: 530, y: 585 },
      { x: 548, y: 563 },
      { x: 556, y: 551 },
      { x: 608, y: 523 },
    ],
    ballPath: [
      { x: 445, y: 666 },
      { x: 514, y: 401 },
      { x: 553, y: 553 },
    ],
    fielderPath: [
      { x: 521, y: 460 },
      { x: 514, y: 401 },
    ],
    firstBasePath: [
      { x: 539, y: 490 },
      { x: 553, y: 556 },
    ],
  },
];

const scenarioIntroEl = document.getElementById("scenario-intro");
const playProgressEl = document.getElementById("play-progress");
const scenarioPanelEl = document.querySelector(".scenario-panel");
const selectedSpotEl = document.getElementById("selected-spot");
const fieldStatusTextEl = document.getElementById("field-status-text");
const nextBtn = document.getElementById("next-btn");
const restartAllBtn = document.getElementById("restart-all-btn");
const runnerMarkerEl = document.getElementById("runner-marker");
const runnerLabelEl = document.getElementById("runner-label");
const fielderMarkerEl = document.getElementById("fielder-marker");
const fielderLabelEl = document.getElementById("fielder-label");
const firstBaseMarkerEl = document.getElementById("first-base-marker");
const firstBaseLabelEl = document.getElementById("first-base-label");
const ballMarkerEl = document.getElementById("ball-marker");
const selectorLayerEl = document.getElementById("selector-layer");
const selectorTrackUnderlayEl = document.getElementById("selector-track-underlay");
const selectorTrackEl = document.getElementById("selector-track");
const selectorHandleEl = document.getElementById("selector-handle");
const thanksModalEl = document.getElementById("thanks-modal");
const thanksSubscribeFormEl = document.getElementById("thanks-subscribe-form");
const thanksSubscribeBtnEl = document.getElementById("thanks-subscribe-btn");
const thanksSubscribeNoteEl = document.getElementById("thanks-subscribe-note");
const thanksSubmitNoteEl = document.getElementById("thanks-submit-note");
const fieldEl = document.getElementById("field");

let currentPlayIndex = 0;
let loopCount = 0;
let activeLoopToken = 0;
const selections = {};
let selectedSpotIndex = 0;
let isDraggingSelector = false;
let selectorSegments = [];
let pollClient = null;

function createSvgElement(name, attributes = {}) {
  const element = document.createElementNS(SVG_NS, name);
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  return element;
}

function buildPath(points) {
  return points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");
}

function pointAlongPath(points, progress) {
  if (progress <= 0) {
    return points[0];
  }
  if (progress >= 1) {
    return points[points.length - 1];
  }

  let totalLength = 0;
  const segments = [];
  for (let index = 0; index < points.length - 1; index += 1) {
    const start = points[index];
    const end = points[index + 1];
    const length = Math.hypot(end.x - start.x, end.y - start.y);
    segments.push({ start, end, length });
    totalLength += length;
  }

  let remaining = totalLength * progress;
  for (const segment of segments) {
    if (remaining <= segment.length) {
      const ratio = segment.length === 0 ? 0 : remaining / segment.length;
      return {
        x: segment.start.x + (segment.end.x - segment.start.x) * ratio,
        y: segment.start.y + (segment.end.y - segment.start.y) * ratio,
      };
    }
    remaining -= segment.length;
  }

  return points[points.length - 1];
}

function getCurrentPlay() {
  return PLAYS[currentPlayIndex];
}

function getQuadraticPoint(t) {
  const oneMinusT = 1 - t;
  return {
    x:
      oneMinusT * oneMinusT * SELECTOR_START.x +
      2 * oneMinusT * t * SELECTOR_CONTROL.x +
      t * t * SELECTOR_END.x,
    y:
      oneMinusT * oneMinusT * SELECTOR_START.y +
      2 * oneMinusT * t * SELECTOR_CONTROL.y +
      t * t * SELECTOR_END.y,
  };
}

function getSpotByIndex(index) {
  const spot = SPOTS[Math.max(0, Math.min(index, SPOTS.length - 1))];
  return {
    ...spot,
    ...getQuadraticPoint(spot.t),
  };
}

function buildSelectorSegments(points) {
  selectorSegments = [];
  for (let index = 0; index < points.length - 1; index += 1) {
    selectorSegments.push({
      start: points[index],
      end: points[index + 1],
    });
  }
}

function moveSelectorToIndex(index) {
  selectedSpotIndex = Math.max(0, Math.min(index, SPOTS.length - 1));
  const spot = getSpotByIndex(selectedSpotIndex);
  selectorHandleEl.setAttribute("transform", `translate(${spot.x} ${spot.y})`);
  selectorHandleEl.setAttribute("aria-valuenow", spot.id);
  selectorHandleEl.setAttribute("aria-valuetext", `${spot.id} - ${spot.label}`);
}

function setSelection(index) {
  const play = getCurrentPlay();
  moveSelectorToIndex(index);
  const spot = getSpotByIndex(selectedSpotIndex);
  selections[play.id] = spot.id;
  if (selectedSpotEl) {
    selectedSpotEl.textContent = `${spot.id} - ${spot.label}`;
  }
  nextBtn.classList.remove("hidden");

  if (currentPlayIndex === PLAYS.length - 1) {
    nextBtn.textContent = "Finish And Submit";
  } else {
    nextBtn.textContent = "Next Play";
  }
}

function buildSelector() {
  const curvePath = `M ${SELECTOR_START.x} ${SELECTOR_START.y} Q ${SELECTOR_CONTROL.x} ${SELECTOR_CONTROL.y} ${SELECTOR_END.x} ${SELECTOR_END.y}`;
  selectorTrackUnderlayEl.setAttribute("d", curvePath);
  selectorTrackEl.setAttribute("d", curvePath);
  buildSelectorSegments(SPOTS.map((spot) => getQuadraticPoint(spot.t)));

  moveSelectorToIndex(0);
}

function getNearestSpotIndex(svgPoint) {
  let nearestIndex = 0;
  let nearestDistance = Number.POSITIVE_INFINITY;
  SPOTS.forEach((spot, index) => {
    const point = getQuadraticPoint(spot.t);
    const distance = Math.hypot(svgPoint.x - point.x, svgPoint.y - point.y);
    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearestIndex = index;
    }
  });
  return nearestIndex;
}

function getNearestPointOnSegment(point, segment) {
  const { start, end } = segment;
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const lengthSquared = dx * dx + dy * dy;
  if (lengthSquared === 0) {
    return { x: start.x, y: start.y, t: 0 };
  }

  const t = Math.max(0, Math.min(1, ((point.x - start.x) * dx + (point.y - start.y) * dy) / lengthSquared));
  return {
    x: start.x + dx * t,
    y: start.y + dy * t,
    t,
  };
}

function getNearestPointOnSelector(point) {
  const firstPoint = getQuadraticPoint(SPOTS[0].t);
  let best = { x: firstPoint.x, y: firstPoint.y, distance: Number.POSITIVE_INFINITY };

  selectorSegments.forEach((segment) => {
    const nearest = getNearestPointOnSegment(point, segment);
    const distance = Math.hypot(point.x - nearest.x, point.y - nearest.y);
    if (distance < best.distance) {
      best = { ...nearest, distance };
    }
  });

  return best;
}

function getSvgPointFromEvent(event) {
  const point = fieldEl.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  return point.matrixTransform(fieldEl.getScreenCTM().inverse());
}

function handleSelectorPointerDown(event) {
  if (selectorLayerEl.classList.contains("hidden")) {
    return;
  }
  isDraggingSelector = true;
  selectorHandleEl.classList.add("is-dragging");
  event.preventDefault();
}

function handleFieldPointerMove(event) {
  if (!fieldEl) {
    return;
  }

  const svgPoint = getSvgPointFromEvent(event);

  if (!isDraggingSelector || selectorLayerEl.classList.contains("hidden")) {
    return;
  }

  const nearest = getNearestPointOnSelector(svgPoint);
  selectorHandleEl.setAttribute("transform", `translate(${nearest.x} ${nearest.y})`);
}

function handleFieldPointerUp(event) {
  if (!isDraggingSelector) {
    return;
  }

  isDraggingSelector = false;
  selectorHandleEl.classList.remove("is-dragging");
  const svgPoint = getSvgPointFromEvent(event);
  setSelection(getNearestSpotIndex(svgPoint));
}

function applyPlay(play) {
  scenarioIntroEl.textContent = "No runners, no outs. Routine ground ball to 1st base.";
  playProgressEl.textContent = play.progress;
  fielderLabelEl.textContent = play.fielderLabel || "F6";
  fieldStatusTextEl.textContent = "Slide U1 to best position";
  const existingSelectionIndex = SPOTS.findIndex((spot) => spot.id === selections[play.id]);
  if (existingSelectionIndex >= 0) {
    const spot = getSpotByIndex(existingSelectionIndex);
    moveSelectorToIndex(existingSelectionIndex);
    if (selectedSpotEl) {
      selectedSpotEl.textContent = `${spot.id} - ${spot.label}`;
    }
    nextBtn.classList.remove("hidden");
  } else {
    moveSelectorToIndex(0);
    if (selectedSpotEl) {
      selectedSpotEl.textContent = "Waiting";
    }
    nextBtn.classList.add("hidden");
  }
  nextBtn.textContent = currentPlayIndex === PLAYS.length - 1 ? "Finish And Submit" : "Next Play";
  selectorLayerEl.classList.remove("hidden");
  loopCount = 0;
}

function animateLoop(loopToken) {
  const play = getCurrentPlay();
  const start = performance.now();
  const runnerTravelMs = play.runnerTravelMs || RUNNER_TRAVEL_MS;
  const ballToFielderMs = play.ballToFielderMs || BALL_TO_FIELDER_MS;
  const throwToFirstMs = play.throwToFirstMs || THROW_TO_FIRST_MS;
  const fielderToBallMs = play.fielderToBallMs || ballToFielderMs;

  function frame(now) {
    if (loopToken !== activeLoopToken) {
      return;
    }

    const rawProgress = Math.min((now - start) / LOOP_DURATION_MS, 1);
    const elapsedMs = rawProgress * LOOP_DURATION_MS;
    const runnerProgress = Math.max(0, Math.min(elapsedMs / runnerTravelMs, 1));
    const fielderProgress = Math.max(0, Math.min(elapsedMs / fielderToBallMs, 1));
    let ballProgress = 0;

    if (elapsedMs <= ballToFielderMs) {
      ballProgress = (elapsedMs / ballToFielderMs) * 0.5;
    } else if (elapsedMs <= ballToFielderMs + throwToFirstMs) {
      ballProgress = 0.5 + ((elapsedMs - ballToFielderMs) / throwToFirstMs) * 0.5;
    } else {
      ballProgress = 1;
    }

    const runnerPoint = pointAlongPath(play.runnerPath, runnerProgress);
    const fielderPoint = pointAlongPath(play.fielderPath || [play.ballPath[0], play.ballPath[0]], fielderProgress);
    const firstBaseProgress = Math.max(0, Math.min(elapsedMs / FIRST_BASE_FIELDER_MS, 1));
    const firstBasePoint = pointAlongPath(
      play.firstBasePath || [play.ballPath[play.ballPath.length - 1], play.ballPath[play.ballPath.length - 1]],
      firstBaseProgress
    );
    const ballPoint = pointAlongPath(play.ballPath, ballProgress);

    runnerMarkerEl.setAttribute("cx", runnerPoint.x.toFixed(2));
    runnerMarkerEl.setAttribute("cy", runnerPoint.y.toFixed(2));
    runnerLabelEl.setAttribute("x", runnerPoint.x.toFixed(2));
    runnerLabelEl.setAttribute("y", (runnerPoint.y + 1).toFixed(2));
    fielderMarkerEl.setAttribute("cx", fielderPoint.x.toFixed(2));
    fielderMarkerEl.setAttribute("cy", fielderPoint.y.toFixed(2));
    fielderLabelEl.setAttribute("x", fielderPoint.x.toFixed(2));
    fielderLabelEl.setAttribute("y", (fielderPoint.y + 1).toFixed(2));
    firstBaseMarkerEl.setAttribute("cx", firstBasePoint.x.toFixed(2));
    firstBaseMarkerEl.setAttribute("cy", firstBasePoint.y.toFixed(2));
    firstBaseLabelEl.setAttribute("x", firstBasePoint.x.toFixed(2));
    firstBaseLabelEl.setAttribute("y", (firstBasePoint.y + 1).toFixed(2));
    ballMarkerEl.setAttribute("cx", ballPoint.x.toFixed(2));
    ballMarkerEl.setAttribute("cy", ballPoint.y.toFixed(2));

    if (rawProgress < 1) {
      window.requestAnimationFrame(frame);
      return;
    }

    loopCount += 1;

    activeLoopToken += 1;
    animateLoop(activeLoopToken);
  }

  window.requestAnimationFrame(frame);
}

function startCurrentPlay() {
  activeLoopToken += 1;
  applyPlay(getCurrentPlay());
  animateLoop(activeLoopToken);
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

async function submitPollData() {
  const client = await ensurePollClient();
  if (!client) {
    if (thanksSubmitNoteEl) {
      thanksSubmitNoteEl.classList.remove("hidden");
      thanksSubmitNoteEl.textContent = "Thanks. We could not reach the results database from this device.";
    }
    return;
  }

  const payload = {
    poll_key: POLL_KEY,
    play_1_spot: selections["play-1"] || null,
    play_2_spot: selections["play-2"] || null,
    play_3_spot: selections["play-3"] || null,
    source_page: "watch-first-quiz.html",
  };

  const { error } = await client.from(POLL_TABLE).insert(payload);

  if (thanksSubmitNoteEl) {
    thanksSubmitNoteEl.classList.remove("hidden");
    thanksSubmitNoteEl.textContent = error
      ? "Thanks. Your picks are in, but the results database could not be updated right now."
      : "Results saved. We will share the poll results soon.";
  }
}

function finishSequence() {
  scenarioPanelEl?.classList.add("hidden");
  nextBtn.classList.add("hidden");
  restartAllBtn.textContent = "Run The Poll Again";
  fieldStatusTextEl.classList.remove("hidden");
  fieldStatusTextEl.textContent = "All three throws are complete.";
  thanksModalEl?.classList.remove("hidden");
  void submitPollData();
}

function handleNext() {
  if (!selections[getCurrentPlay().id]) {
    return;
  }

  if (currentPlayIndex === PLAYS.length - 1) {
    finishSequence();
    return;
  }

  currentPlayIndex += 1;
  startCurrentPlay();
}

function restartAll() {
  currentPlayIndex = 0;
  activeLoopToken += 1;
  Object.keys(selections).forEach((key) => {
    delete selections[key];
  });
  scenarioPanelEl?.classList.remove("hidden");
  thanksModalEl?.classList.add("hidden");
  if (thanksSubscribeFormEl) {
    thanksSubscribeFormEl.classList.remove("hidden");
  }
  if (thanksSubscribeBtnEl) {
    thanksSubscribeBtnEl.disabled = false;
    thanksSubscribeBtnEl.textContent = "Subscribe";
  }
  if (thanksSubscribeNoteEl) {
    thanksSubscribeNoteEl.textContent = "No spam. Unsubscribe anytime.";
  }
  if (thanksSubmitNoteEl) {
    thanksSubmitNoteEl.classList.add("hidden");
    thanksSubmitNoteEl.textContent = "";
  }
  nextBtn.classList.add("hidden");
  restartAllBtn.textContent = "Start Over";
  startCurrentPlay();
}

function handleThanksSubscribeSubmit() {
  if (!thanksSubscribeBtnEl) {
    return;
  }

  thanksSubscribeBtnEl.disabled = true;
  thanksSubscribeBtnEl.textContent = "Subscribed";
  if (thanksSubscribeNoteEl) {
    thanksSubscribeNoteEl.textContent = "Thanks for subscribing.";
  }
}

buildSelector();
nextBtn.addEventListener("click", handleNext);
restartAllBtn.addEventListener("click", restartAll);
thanksSubscribeFormEl?.addEventListener("submit", handleThanksSubscribeSubmit);
selectorHandleEl?.addEventListener("pointerdown", handleSelectorPointerDown);
fieldEl?.addEventListener("pointermove", handleFieldPointerMove);
fieldEl?.addEventListener("pointerup", handleFieldPointerUp);
fieldEl?.addEventListener("pointerleave", () => {
  if (isDraggingSelector) {
    isDraggingSelector = false;
    selectorHandleEl.classList.remove("is-dragging");
  }
});

startCurrentPlay();
