import {
  formatChallengeDate,
  getChallengeByDate,
  getFeaturedChallenge,
} from "./challenge-data.js";

function getRequestedChallengeDate() {
  const searchParams = new URLSearchParams(window.location.search);
  const requestedDate = searchParams.get("date");
  return /^\d{4}-\d{2}-\d{2}$/.test(requestedDate || "") ? requestedDate : "";
}

const requestedChallengeDate = getRequestedChallengeDate();
const selectedChallenge =
  getChallengeByDate(requestedChallengeDate) || getFeaturedChallenge(new Date());
const scenarios = selectedChallenge ? [selectedChallenge] : [];

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
const togglePlaybackBtn = document.getElementById("toggle-playback-btn");
const animationObjectSelectEl = document.getElementById("animation-object-select");
const animationDurationInputEl = document.getElementById("animation-duration-input");
const animationShowBtn = document.getElementById("animation-show-btn");
const animationHideBtn = document.getElementById("animation-hide-btn");
const animationResetBtn = document.getElementById("animation-reset-btn");
const animationEditBtn = document.getElementById("animation-edit-btn");
const animationUndoBtn = document.getElementById("animation-undo-btn");
const animationClearPathBtn = document.getElementById("animation-clear-path-btn");
const animationCopyBtn = document.getElementById("animation-copy-btn");
const animationManagerStatusEl = document.getElementById("animation-manager-status");
const animationManagerTimingEl = document.getElementById("animation-manager-timing");
const animationChipListEl = document.getElementById("animation-chip-list");
const animationPathOutputEl = document.getElementById("animation-path-output");
const cursorReadoutEl = document.getElementById("cursor-readout");
const field = document.getElementById("field");
const ballFlight = document.getElementById("ball-flight");
const animationObjectsLayer = document.getElementById("animation-objects-layer");
const dailyKickerEl = document.getElementById("daily-kicker");
const dailyHeroTitleEl = document.getElementById("daily-hero-title");
const dailyPanelHeadingEl = document.getElementById("daily-panel-heading");
const dailyResultsPanelEl = document.getElementById("daily-results-panel");
const dailyResultsScoreEl = document.getElementById("daily-results-score");
const dailyResultsSummaryEl = document.getElementById("daily-results-summary");
const dailyResultsCountEl = document.getElementById("daily-results-count");
const dailyResultsBreakdownEl = document.getElementById("daily-results-breakdown");
const answerOverlayEl = document.getElementById("answer-overlay");
const answerCardSharedEl = document.getElementById("answer-card-shared");
const revealObservationBtn = document.getElementById("reveal-observation-btn");
const observationCardEl = document.getElementById("observation-card");
const observationPromptEl = document.getElementById("observation-prompt");
const observationOptionsEl = document.getElementById("observation-options");
const ruleSummaryCardEl = document.getElementById("rule-summary-card");
const ruleSummaryLabelEl = document.getElementById("rule-summary-label");
const ruleSummaryTitleEl = document.getElementById("rule-summary-title");
const ruleSummaryBodyEl = document.getElementById("rule-summary-body");
const fieldStatusEl = document.getElementById("field-status");
const fieldResultEl = document.getElementById("field-result");
const fieldResultTextEl = document.getElementById("field-result-text");
const fieldResultBurstEl = document.getElementById("field-result-burst");
const prePitchOverlayEl = document.getElementById("pre-pitch-overlay");
const prePitchOptionsEl = document.getElementById("pre-pitch-options");
const prePitchFeedbackEl = document.getElementById("pre-pitch-feedback");
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
const DAILY_RESULTS_TABLE = "daily_challenge_results";
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
const DEFAULT_ANIMATION_PRESETS = {
  BALL: {
    start: { x: 451, y: 641 },
    segments: [
      {
        dur: "6s",
        path: "M 451 641 L 454 621 L 462 604 L 468 586 L 473 571 L 484 547 L 498 513 L 508 492 L 524 455 L 541 422 L 560 388 L 583 353 L 608 320 L 637 290 L 648 282 L 707 247",
      },
      {
        dur: "2s",
        path: "M 707 247 L 499 404",
      },
      {
        pause: "1s",
      },
      {
        dur: "3s",
        path: "M 497 404 L 151 606",
      },
    ],
  },
  R1: {
    start: { x: 530, y: 510 },
    segments: [
      {
        dur: "5s",
        path: "M 530 510 L 504 474",
      },
      {
        dur: "5s",
        path: "M 504 474 L 488 447 L 465 432 L 440 436 L 407 452 L 378 478 L 358 505 L 348 522 L 337 547",
      },
    ],
  },
  BR: {
    dur: "12s",
    path: "M 442 679 L 476 640 L 504 618 L 534 606 L 548 589 L 552 575 L 550 562 L 543 548 L 537 535 L 523 516 L 508 497 L 520 505 L 535 520 L 548 538 L 552 546",
    start: { x: 442, y: 679 },
  },
  F9: {
    dur: "6s",
    path: "M 637 396 L 715 261",
    start: { x: 637, y: 396 },
  },
  F4: {
    dur: "5s",
    path: "M 521 462 L 499 404",
    start: { x: 521, y: 462 },
  },
  F5: {
    dur: "5s",
    path: "M 360 477 L 323 546",
    start: { x: 360, y: 477 },
  },
};
const reducedMotionQuery = window.matchMedia?.("(prefers-reduced-motion: reduce)") ?? null;

function getCurrentAnimationPresets() {
  return getCurrentScenario()?.animationPresets || DEFAULT_ANIMATION_PRESETS;
}

function updateNextButtonLabel() {
  nextBtn.textContent = "Play Again";
}

function updateNextButtonVisibility() {
  nextBtn?.classList.toggle("hidden", !observationAnswered);
}

function applyChallengeLabels(scenario) {
  if (!scenario) {
    return;
  }

  const formattedDate = formatChallengeDate(scenario.date);

  if (dailyKickerEl) {
    dailyKickerEl.textContent = formattedDate;
  }
  if (dailyHeroTitleEl) {
    dailyHeroTitleEl.textContent = scenario.title;
  }

  if (dailyPanelHeadingEl) {
    dailyPanelHeadingEl.textContent = scenario.title;
  }
}

let scenarioIndex = 0;
let roundFinished = false;
let activeRoleIndex = null;
let selectedPaths = [];
let pointHistory = [];
let roleArtifacts = [];
let gridVisible = false;
let gridLayer;
let prePitchUnlocked = true;
let prePitchAttempts = 0;
let prePitchScore = 0;
let animationObjectElements = new Map();
let animationStarterElements = [];
let animationObjectVisibility = new Map();
let animationEditorMode = false;
let animationEditorPaths = new Map();
let animationEditorArtifacts = new Map();
let animationObjectDurations = new Map();
let animationPlaying = false;
let animationCycleTimer = null;
let animationPlaybackFrame = null;
let animationPlaybackStartedAt = 0;
let animationPausedAtMs = 0;
let animationStarted = false;
let animationCompleted = false;
let selectedObservationOption = null;
let observationAnswered = false;
let pendingRoundResult = null;
let dailyResultsClient = null;
let roundResultSubmitted = false;
let currentAttemptId = crypto.randomUUID ? crypto.randomUUID() : String(Date.now());
let observationResolutionTimer = null;

async function getDailyResultsClient() {
  if (dailyResultsClient) {
    return dailyResultsClient;
  }

  const authConfig = window.UMPIQ_SUPABASE_CONFIG;
  if (!authConfig?.url || !authConfig?.anonKey) {
    return null;
  }

  const supabaseModule = await import("https://esm.sh/@supabase/supabase-js@2");
  const { createClient } = supabaseModule;
  dailyResultsClient = createClient(authConfig.url, authConfig.anonKey);
  return dailyResultsClient;
}

function hideDailyResultsPanel() {
  dailyResultsPanelEl?.classList.add("hidden");
}

function renderDailyResultsPanel({ score, maxPoints, summary, breakdown, attemptCount }) {
  if (!dailyResultsPanelEl || !dailyResultsScoreEl || !dailyResultsSummaryEl) {
    return;
  }

  dailyResultsScoreEl.textContent = `${score}/${maxPoints}`;
  dailyResultsSummaryEl.textContent = summary;
  if (dailyResultsCountEl) {
    dailyResultsCountEl.textContent = `Out of ${attemptCount || 0} user${
      attemptCount === 1 ? "" : "s"
    }:`;
  }
  if (dailyResultsBreakdownEl && Array.isArray(breakdown) && breakdown.length) {
    dailyResultsBreakdownEl.innerHTML = breakdown
      .map(
        (entry) =>
          `<p class="daily-results-pill"><span>${entry.label}</span><span>${entry.value}</span></p>`
      )
      .join("");
  }
  dailyResultsPanelEl.classList.remove("hidden");
}

async function submitAndRenderDailyResults(score, maxPoints) {
  const scenario = getCurrentScenario();
  if (!scenario || roundResultSubmitted) {
    return;
  }

  roundResultSubmitted = true;

  const fallbackSummary = `You scored ${score}/${maxPoints} on this challenge.`;
  const fallbackBreakdown = Array.from({ length: maxPoints + 1 }, (_, index) => {
    const bucketScore = maxPoints - index;
    return {
      label: `${bucketScore}/${maxPoints}`,
      value: "0%",
    };
  });

  const client = await getDailyResultsClient();
  if (!client) {
    renderDailyResultsPanel({
      score,
      maxPoints,
      summary: fallbackSummary,
      breakdown: fallbackBreakdown,
      attemptCount: 0,
    });
    return;
  }

  await client.from(DAILY_RESULTS_TABLE).insert({
    challenge_id: scenario.id,
    attempt_id: currentAttemptId,
    score,
    max_points: maxPoints,
  });

  const { data, error } = await client
    .from(DAILY_RESULTS_TABLE)
    .select("score,max_points")
    .eq("challenge_id", scenario.id);

  if (error || !Array.isArray(data) || !data.length) {
    renderDailyResultsPanel({
      score,
      maxPoints,
      summary: fallbackSummary,
      breakdown: fallbackBreakdown,
      attemptCount: 0,
    });
    return;
  }

  const matchingAttempts = data.filter(
    (row) => Number(row.max_points || 0) === maxPoints
  );
  const denominator = matchingAttempts.length || data.length;
  const distributionSource = matchingAttempts.length ? matchingAttempts : data;
  const scoreBuckets = new Map();

  distributionSource.forEach((row) => {
    const rowScore = Number(row.score || 0);
    scoreBuckets.set(rowScore, (scoreBuckets.get(rowScore) || 0) + 1);
  });

  const breakdown = Array.from({ length: maxPoints + 1 }, (_, index) => {
    const bucketScore = maxPoints - index;
    const bucketCount = scoreBuckets.get(bucketScore) || 0;
    const bucketPercent = denominator
      ? Math.round((bucketCount / denominator) * 100)
      : 0;
    return {
      label: `${bucketScore}/${maxPoints}`,
      value: `${bucketPercent}%`,
    };
  });

  renderDailyResultsPanel({
    score,
    maxPoints,
    summary: `You scored ${score}/${maxPoints} on this challenge.`,
    breakdown,
    attemptCount: denominator,
  });
}

function getCurrentScenario() {
  return scenarios[scenarioIndex] || null;
}

function hasPrePitchSignal() {
  return Boolean(getCurrentScenario()?.prePitchSignal);
}

function isPrePitchLocked() {
  return hasPrePitchSignal() && !prePitchUnlocked;
}

function focusFirstPrePitchOption() {
  const firstOption = prePitchOptionsEl?.querySelector(".pre-pitch-option");
  firstOption?.focus();
}

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

function createAnimationObject(object) {
  if (!animationObjectsLayer) {
    return;
  }

  const preset = getCurrentAnimationPresets()[object.name.toUpperCase()];

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
  if (animationObjectsLayer) {
    animationObjectsLayer.innerHTML = "";
  }

  animationObjectElements = new Map();
  animationStarterElements = [];
  ANIMATION_OBJECTS.forEach(createAnimationObject);
  resetAnimationObjectVisibility();
  populateAnimationManager();
  updateAnimationObjectPreview();
}

function createAnimationEditorArtifacts(object) {
  const key = object.name.toUpperCase();
  const roleClass =
    object.kind === "fielder"
      ? " role-u1"
      : object.kind === "umpire" && object.name.toUpperCase() === "P"
        ? " role-p"
        : "";

  const path = createSvgElement("polyline", {}, `answer-path${roleClass} hidden`);
  const start = createSvgElement("circle", { r: MARKER_RADIUS }, `answer${roleClass} hidden`);
  const end = createSvgElement("circle", { r: MARKER_RADIUS }, `marker${roleClass} hidden`);

  animationEditorArtifacts.set(key, { path, start, end });
}

function initializeAnimationEditorArtifacts() {
  ANIMATION_OBJECTS.forEach(createAnimationEditorArtifacts);
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
  return Object.values(getCurrentAnimationPresets()).reduce((longest, preset) => {
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

  if (animationPlaying) {
    togglePlaybackBtn.textContent = "❚❚ Pause";
  } else if (reducedMotionQuery?.matches) {
    togglePlaybackBtn.textContent = "Show Sequence";
  } else if (animationCompleted) {
    togglePlaybackBtn.textContent = "↻ Replay";
  } else if (animationPausedAtMs > 0) {
    togglePlaybackBtn.textContent = "▶ Resume";
  } else {
    togglePlaybackBtn.textContent = "▶ Play";
  }
  togglePlaybackBtn.classList.toggle("is-stopping", animationPlaying);
  togglePlaybackBtn.disabled = false;
}

function clearAnimationCycleTimer() {
  if (animationCycleTimer) {
    window.clearTimeout(animationCycleTimer);
    animationCycleTimer = null;
  }
}

function clearAnimationPlaybackFrame() {
  if (animationPlaybackFrame) {
    window.cancelAnimationFrame(animationPlaybackFrame);
    animationPlaybackFrame = null;
  }
}

function formatPlaybackSeconds(milliseconds) {
  return `${(milliseconds / 1000).toFixed(1)}s`;
}

function updateAnimationManagerTiming(elapsedMs = 0) {
  if (!animationManagerTimingEl) {
    return;
  }

  const totalMs = getLongestPresetDurationMs();
  const clampedElapsedMs = Math.max(0, Math.min(elapsedMs, totalMs));

  animationManagerTimingEl.textContent =
    `Animation time: ${formatPlaybackSeconds(clampedElapsedMs)} / ${formatPlaybackSeconds(totalMs)}`;
}

function tickAnimationPlaybackTime() {
  if (!animationPlaying) {
    animationPlaybackFrame = null;
    return;
  }

  const totalMs = Math.max(getLongestPresetDurationMs(), 1);
  const elapsedMs = Math.max(0, Math.min(performance.now() - animationPlaybackStartedAt, totalMs));
  updateAnimationManagerTiming(elapsedMs);

  if (elapsedMs >= totalMs) {
    animationPlaybackFrame = null;
    return;
  }

  animationPlaybackFrame = window.requestAnimationFrame(tickAnimationPlaybackTime);
}

function startAnimationCycle(startTimeMs = 0) {
  const totalMs = Math.max(getLongestPresetDurationMs(), 1);
  const normalizedStartMs = ((startTimeMs % totalMs) + totalMs) % totalMs;
  const animationPresets = getCurrentAnimationPresets();

  field.pauseAnimations();
  animationObjectElements.forEach((element, name) => {
    if (animationPresets[name]) {
      element.setAttribute("transform", "translate(0,0)");
    }
  });
  field.setCurrentTime(0);
  animationStarterElements.forEach((motion) => motion.beginElement());
  field.setCurrentTime(normalizedStartMs / 1000);
  field.unpauseAnimations();
  animationStarted = true;
}

function queueAnimationCycleCompletion(delayMs = getLongestPresetDurationMs()) {
  clearAnimationCycleTimer();

  if (!animationPlaying || reducedMotionQuery?.matches) {
    return;
  }

  const safeDelayMs = Math.max(delayMs, 0);
  animationCycleTimer = window.setTimeout(() => {
    if (!animationPlaying) {
      return;
    }

    field.pauseAnimations();
    field.setCurrentTime(getLongestPresetDurationMs() / 1000);
    animationPlaying = false;
    animationPausedAtMs = 0;
    animationCompleted = true;
    clearAnimationPlaybackFrame();
    updateAnimationManagerTiming(getLongestPresetDurationMs());
    updatePlaybackButton();
  }, safeDelayMs);
}

function stopPresetAnimations() {
  clearAnimationCycleTimer();
  clearAnimationPlaybackFrame();

  if (animationPlaying) {
    const totalMs = Math.max(getLongestPresetDurationMs(), 1);
    animationPausedAtMs = Math.max(
      0,
      Math.min(performance.now() - animationPlaybackStartedAt, totalMs)
    );
  }

  field.pauseAnimations();
  animationPlaying = false;
  animationCompleted = false;
  updateAnimationManagerTiming(animationPausedAtMs);
  updatePlaybackButton();
}

function resetPresetAnimations() {
  clearAnimationCycleTimer();
  clearAnimationPlaybackFrame();
  field.pauseAnimations();
  field.setCurrentTime(0);
  animationPlaying = false;
  animationPausedAtMs = 0;
  animationStarted = false;
  animationCompleted = false;
  updateAnimationManagerTiming(0);
  updateAnimationObjectPreview();
  updatePlaybackButton();
}

function startPresetAnimations() {
  const totalMs = Math.max(getLongestPresetDurationMs(), 1);

  if (reducedMotionQuery?.matches) {
    startAnimationCycle(0);
    field.pauseAnimations();
    field.setCurrentTime(totalMs / 1000);
    animationPlaying = false;
    animationPausedAtMs = totalMs;
    animationCompleted = true;
    updateAnimationManagerTiming(totalMs);
    updatePlaybackButton();
    return;
  }

  if (animationCompleted) {
    animationPausedAtMs = 0;
  }

  if (!animationStarted || animationPausedAtMs <= 0) {
    startAnimationCycle(animationPausedAtMs);
  } else {
    field.setCurrentTime(animationPausedAtMs / 1000);
    field.unpauseAnimations();
  }

  animationPlaying = true;
  animationPlaybackStartedAt = performance.now() - animationPausedAtMs;
  updateAnimationManagerTiming(animationPausedAtMs);
  queueAnimationCycleCompletion(totalMs - animationPausedAtMs);
  animationPausedAtMs = 0;
  animationCompleted = false;
  clearAnimationPlaybackFrame();
  animationPlaybackFrame = window.requestAnimationFrame(tickAnimationPlaybackTime);
  updatePlaybackButton();
}

function updateAnimationObjectPreview() {
  const animationPresets = getCurrentAnimationPresets();
  animationObjectElements.forEach((element, name) => {
    const preset = animationPresets[name];
    const defaultVisibility = Boolean(preset);
    const visibilityOverride = animationObjectVisibility.get(name);
    const shouldShow = visibilityOverride ?? defaultVisibility;
    element.classList.toggle("is-hidden", !shouldShow);

    if (preset) {
      element.setAttribute(
        "transform",
        !animationPlaying
          ? `translate(${preset.start.x},${preset.start.y})`
          : "translate(0,0)"
      );
    }

    const editorPoints = animationEditorPaths.get(name);
    if (editorPoints?.length && !animationPlaying) {
      const firstPoint = editorPoints[0];
      element.setAttribute("transform", `translate(${firstPoint.x},${firstPoint.y})`);
    }
  });

  renderAnimationEditorArtifacts();
  renderAnimationManagerChips();
  updateAnimationManagerStatus();
}

function resetAnimationObjectVisibility() {
  const animationPresets = getCurrentAnimationPresets();
  animationObjectVisibility = new Map(
    ANIMATION_OBJECTS.map((object) => [
      object.name.toUpperCase(),
      Boolean(animationPresets[object.name.toUpperCase()]),
    ])
  );
}

function getPresetDurationSeconds(preset) {
  if (!preset) {
    return 3;
  }

  if (Array.isArray(preset.segments)) {
    const totalMs = preset.segments.reduce((sum, segment) => {
      if (segment.pause) {
        return sum + parseDurationToMs(segment.pause);
      }

      return sum + parseDurationToMs(segment.dur);
    }, 0);

    return Number((totalMs / 1000).toFixed(1));
  }

  return Number((parseDurationToMs(preset.dur) / 1000).toFixed(1)) || 3;
}

function resetAnimationObjectDurations() {
  const animationPresets = getCurrentAnimationPresets();
  animationObjectDurations = new Map(
    ANIMATION_OBJECTS.map((object) => {
      const key = object.name.toUpperCase();
      return [key, getPresetDurationSeconds(animationPresets[key])];
    })
  );
}

function getSelectedAnimationObjectName() {
  return animationObjectSelectEl?.value?.toUpperCase() || "";
}

function populateAnimationManager() {
  if (!animationObjectSelectEl) {
    return;
  }

  animationObjectSelectEl.innerHTML = ANIMATION_OBJECTS.map((object) => {
    const label = object.kind === "ball" ? "Ball" : `${object.name} (${object.kind})`;
    return `<option value="${object.name}">${label}</option>`;
  }).join("");

  syncAnimationDurationInput();
}

function syncAnimationDurationInput() {
  if (!animationDurationInputEl) {
    return;
  }

  const name = getSelectedAnimationObjectName();
  const durationSeconds = animationObjectDurations.get(name);
  animationDurationInputEl.value = durationSeconds ? String(durationSeconds) : "3";
}

function updateAnimationManagerStatus() {
  if (!animationManagerStatusEl) {
    return;
  }

  const name = getSelectedAnimationObjectName();
  if (!name) {
    animationManagerStatusEl.textContent =
      "Manage which animated objects are visible on the field.";
    return;
  }

  const isVisible = animationObjectVisibility.get(name);
  const pointCount = animationEditorPaths.get(name)?.length || 0;
  const modeLabel = animationEditorMode ? "editor on" : "editor off";
  const durationSeconds = animationObjectDurations.get(name) || 3;
  animationManagerStatusEl.textContent = `${name} is currently ${isVisible ? "visible" : "hidden"} on the field, ${modeLabel}, ${pointCount} point${pointCount === 1 ? "" : "s"} captured, ${durationSeconds}s duration.`;
}

function renderAnimationManagerChips() {
  if (!animationChipListEl) {
    return;
  }

  animationChipListEl.innerHTML = ANIMATION_OBJECTS.map((object) => {
    const name = object.name.toUpperCase();
    const isVisible = animationObjectVisibility.get(name);
    return `
      <span class="animation-chip kind-${object.kind}${isVisible ? "" : " is-hidden"}">
        <span class="animation-chip-dot" aria-hidden="true"></span>
        ${object.name}
      </span>
    `;
  }).join("");
}

function setAnimationObjectVisibility(name, isVisible) {
  if (!name || !animationObjectElements.has(name)) {
    return;
  }

  animationObjectVisibility.set(name, isVisible);
  updateAnimationObjectPreview();
}

function getAnimationEditorPoints(name) {
  return animationEditorPaths.get(name) || [];
}

function formatAnimationPath(points) {
  if (!points.length) {
    return "";
  }

  return points
    .map((point, index) =>
      `${index === 0 ? "M" : "L"} ${Math.round(point.x)} ${Math.round(point.y)}`
    )
    .join(" ");
}

function updateAnimationPathOutput() {
  if (!animationPathOutputEl) {
    return;
  }

  const name = getSelectedAnimationObjectName();
  if (!name) {
    animationPathOutputEl.value =
      "Select an object and click Edit Path to start collecting coordinates.";
    return;
  }

  const points = getAnimationEditorPoints(name);
  const pathString = formatAnimationPath(points);
  const durationSeconds = animationObjectDurations.get(name) || 3;
  const startPoint = points[0]
    ? `{ x: ${Math.round(points[0].x)}, y: ${Math.round(points[0].y)} }`
    : "not set";

  animationPathOutputEl.value = [
    `Object: ${name}`,
    `Duration: ${durationSeconds}s`,
    `Start: ${startPoint}`,
    `Path: ${pathString || "not set"}`,
    `Points: [${points
      .map((point) => `{ x: ${Math.round(point.x)}, y: ${Math.round(point.y)} }`)
      .join(", ")}]`,
  ].join("\n");
}

function renderAnimationEditorArtifacts() {
  animationEditorArtifacts.forEach((artifacts, name) => {
    const points = getAnimationEditorPoints(name);

    if (!points.length) {
      hideElement(artifacts.path);
      hideElement(artifacts.start);
      hideElement(artifacts.end);
      return;
    }

    placeMarker(artifacts.start, points[0]);

    if (points.length > 1) {
      placeMarker(artifacts.end, points[points.length - 1]);
      placePath(artifacts.path, points);
    } else {
      hideElement(artifacts.path);
      hideElement(artifacts.end);
    }
  });

  updateAnimationPathOutput();
}

function toggleAnimationEditorMode(forceValue) {
  animationEditorMode =
    typeof forceValue === "boolean" ? forceValue : !animationEditorMode;
  animationEditBtn?.classList.toggle("is-active", animationEditorMode);
  updateAnimationManagerStatus();
}

function addAnimationEditorPoint(point) {
  const name = getSelectedAnimationObjectName();
  if (!name) {
    return;
  }

  const currentPoints = [...getAnimationEditorPoints(name), point];
  animationEditorPaths.set(name, currentPoints);
  animationObjectVisibility.set(name, true);
  updateAnimationObjectPreview();
}

function undoAnimationEditorPoint() {
  const name = getSelectedAnimationObjectName();
  if (!name) {
    return;
  }

  const currentPoints = [...getAnimationEditorPoints(name)];
  currentPoints.pop();
  animationEditorPaths.set(name, currentPoints);
  updateAnimationObjectPreview();
}

function clearAnimationEditorPath() {
  const name = getSelectedAnimationObjectName();
  if (!name) {
    return;
  }

  animationEditorPaths.set(name, []);
  updateAnimationObjectPreview();
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
      label: `Excellent. ${pointsEarned}/${maxPoints} points.`,
      points: pointsEarned,
      tone: "perfect",
    };
  }

  if (pointsEarned > 0) {
    return {
      label: `Nice work. ${pointsEarned}/${maxPoints} points.`,
      points: pointsEarned,
      tone: "partial",
    };
  }

  if (averageDistance <= 35) {
    return {
      label: `0/${maxPoints} points, but very close.`,
      points: 0,
      tone: "close",
    };
  }

  if (averageDistance <= 75) {
    return {
      label: `0/${maxPoints} points. Close, but outside the target zone.`,
      points: 0,
      tone: "close",
    };
  }

  return {
    label: `0/${maxPoints} points.`,
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
  const scenario = getCurrentScenario();

  if (roundFinished) {
    return;
  }

  if (isPrePitchLocked()) {
    feedbackTitleEl.textContent = "Select the correct pre-pitch signal to begin.";
    renderMovementTracker();
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
  const scenario = getCurrentScenario();
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
    button.disabled = roundFinished || isComplete || isPrePitchLocked();
    button.textContent = canFinish
      ? `Finish ${roleLabel} Path`
      : `Draw ${roleLabel} Path`;
  });
}

function updateCheckButtonState() {
  if (checkBtn) {
    checkBtn.disabled = roundFinished || isPrePitchLocked() || !selectedPaths.every(
      (path) => path.completed && path.start && path.end
    );
    checkBtn.classList.toggle("hidden", roundFinished);
  }

  if (togglePlaybackBtn) {
    togglePlaybackBtn.classList.toggle("hidden", roundFinished);
  }

  if (clearBtn) {
    clearBtn.disabled = roundFinished || isPrePitchLocked();
    clearBtn.classList.toggle("hidden", roundFinished);
  }

  if (undoBtn) {
    const hasPoints = selectedPaths.some((path) => path.points.length > 0);
    undoBtn.disabled = roundFinished || isPrePitchLocked() || !hasPoints;
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
  revealObservationBtn?.classList.remove("hidden");
  hideObservationCard();
}

function hideAnswerOverlay() {
  answerOverlayEl.classList.add("hidden");
  answerCardSharedEl.innerHTML = "";
  revealObservationBtn?.classList.add("hidden");
  hideObservationCard();
  hideRuleSummaryCard();
}

function renderObservationCard(scenario) {
  if (!observationCardEl || !observationPromptEl || !observationOptionsEl) {
    return;
  }

  const options = Array.isArray(scenario?.observationOptions)
    ? scenario.observationOptions
    : [];

  if (!options.length) {
    hideObservationCard();
    return;
  }

  observationPromptEl.textContent =
    scenario.observationPrompt || "What did you see?";

  observationOptionsEl.innerHTML = options
    .map(
      (option, index) => `
        <button
          class="observation-option${
            !observationAnswered && selectedObservationOption === index ? " is-selected" : ""
          }${
            observationAnswered && index === scenario.correctObservationIndex ? " is-correct" : ""
          }${
            observationAnswered &&
            selectedObservationOption === index &&
            index !== scenario.correctObservationIndex
              ? " is-incorrect"
              : ""
          }"
          type="button"
          data-observation-index="${index}"
          ${observationAnswered ? "disabled" : ""}
        >
          ${option}
          <span class="observation-option-check" aria-hidden="true">✓</span>
        </button>
      `
    )
    .join("");

  observationCardEl.classList.remove("hidden");
}

function hideObservationCard() {
  if (!observationCardEl || !observationOptionsEl) {
    return;
  }

  observationCardEl.classList.add("hidden");
  observationOptionsEl.innerHTML = "";
}

function renderRuleSummaryCard(scenario) {
  if (!ruleSummaryCardEl || !ruleSummaryLabelEl || !ruleSummaryTitleEl || !ruleSummaryBodyEl) {
    return;
  }

  const summary = scenario?.ruleSummary;
  if (!summary?.body) {
    hideRuleSummaryCard();
    return;
  }

  ruleSummaryLabelEl.textContent = summary.label || "Rule";
  ruleSummaryTitleEl.textContent = summary.title || "Rule Summary";
  ruleSummaryBodyEl.textContent = summary.body;
  ruleSummaryCardEl.classList.remove("hidden");
}

function hideRuleSummaryCard() {
  ruleSummaryCardEl?.classList.add("hidden");
  if (ruleSummaryLabelEl) ruleSummaryLabelEl.textContent = "";
  if (ruleSummaryTitleEl) ruleSummaryTitleEl.textContent = "";
  if (ruleSummaryBodyEl) ruleSummaryBodyEl.textContent = "";
}

function renderFeedbackBody(scenario) {
  if (!feedbackBodyEl) return;
  feedbackBodyEl.innerHTML = `<p>${scenario.explanation}</p>`;
}

function updateCursorReadout(point) {
  if (!cursorReadoutEl) return;
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
  const scenario = getCurrentScenario();
  if (!scenario) {
    if (titleEl) titleEl.textContent = "Daily challenge coming soon";
    if (descriptionEl) {
      descriptionEl.textContent =
        "We do not have a published situation challenge entry for this date yet.";
    }
    if (feedbackTitleEl) {
      feedbackTitleEl.textContent = "Check back soon for the next animated rep.";
    }
    checkBtn.disabled = true;
    nextBtn.disabled = true;
    drawPBtn.disabled = true;
    drawU1Btn.disabled = true;
    clearBtn.disabled = true;
    undoBtn.disabled = true;
    togglePlaybackBtn.disabled = true;
    return;
  }

  applyChallengeLabels(scenario);
  if (titleEl) titleEl.textContent = scenario.title;
  if (systemEl) {
    systemEl.textContent = scenario.system;
    systemEl.style.display = scenario.system ? "inline-flex" : "none";
  }
  if (descriptionEl) descriptionEl.textContent = scenario.description;
  if (runnersEl) runnersEl.textContent = scenario.runners;
  if (outsEl) outsEl.textContent = scenario.outs;
  if (ballEl) ballEl.textContent = scenario.ball;

  roundFinished = false;
  prePitchUnlocked = !scenario.prePitchSignal;
  prePitchAttempts = 0;
  prePitchScore = 0;
  selectedObservationOption = null;
  observationAnswered = false;
  pendingRoundResult = null;
  roundResultSubmitted = false;
  currentAttemptId = crypto.randomUUID ? crypto.randomUUID() : String(Date.now());
  if (observationResolutionTimer) {
    window.clearTimeout(observationResolutionTimer);
    observationResolutionTimer = null;
  }
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
  updateNextButtonVisibility();

  if (scenario.ballFlightPath) {
    ballFlight.setAttribute("d", scenario.ballFlightPath);
    ballFlight.classList.remove("hidden");
  }

  hideAnswerOverlay();
  resetRoundFeedbackState();
  clearFieldResult();
  renderPrePitchSignalOverlay();
  initializeAnimationObjects();
  resetPresetAnimations();
  renderMovementTracker();
  updatePrompt();
  if (feedbackBodyEl) feedbackBodyEl.textContent = "";
  updateRoleDrawButtons();
  hideDailyResultsPanel();

  renderScoreLine();
}

function renderPrePitchSignalOverlay() {
  const scenario = getCurrentScenario();
  const config = scenario?.prePitchSignal;

  if (!prePitchOverlayEl || !prePitchOptionsEl || !prePitchFeedbackEl) {
    return;
  }

  if (!config || prePitchUnlocked) {
    prePitchOverlayEl.classList.add("hidden");
    prePitchOverlayEl.setAttribute("aria-hidden", "true");
    prePitchOptionsEl.innerHTML = "";
    prePitchFeedbackEl.textContent = "";
    return;
  }

  prePitchFeedbackEl.textContent =
    config.prompt || "Choose the signal that matches this situation.";

  prePitchOptionsEl.innerHTML = config.options
    .map(
      (option) => `
        <button
          class="pre-pitch-option"
          type="button"
          data-signal-label="${option.label}"
          aria-label="${option.label}"
          aria-pressed="false"
        >
          <img class="pre-pitch-option-image" src="${option.image}" alt="${option.label}" />
          <span class="pre-pitch-option-check" aria-hidden="true">✓</span>
          <span class="pre-pitch-option-label">${option.label}</span>
        </button>
      `
    )
    .join("");

  prePitchOverlayEl.classList.remove("hidden");
  prePitchOverlayEl.setAttribute("aria-hidden", "false");
}

function handlePrePitchSelection(label, button) {
  const config = getCurrentScenario()?.prePitchSignal;
  if (!config || !prePitchFeedbackEl) {
    return;
  }

  prePitchAttempts += 1;

  const optionButtons = Array.from(
    prePitchOptionsEl?.querySelectorAll(".pre-pitch-option") || []
  );

  optionButtons.forEach((optionButton) => {
    optionButton.classList.remove("is-correct", "is-incorrect");
    optionButton.disabled = false;
    optionButton.setAttribute("aria-pressed", "false");
  });

  if (label !== config.correctOption) {
    button?.classList.add("is-incorrect");
    button?.setAttribute("aria-pressed", "true");
    prePitchFeedbackEl.textContent = "Not quite. Try again.";
    button?.focus();
    return;
  }

  button?.classList.add("is-correct");
  optionButtons.forEach((optionButton) => {
    optionButton.disabled = true;
  });
  button?.setAttribute("aria-pressed", "true");
  prePitchScore = prePitchAttempts === 1 ? 1 : 0;
  prePitchFeedbackEl.textContent = "Correct! Pre-pitch signal matched. Loading the scenario.";

  window.setTimeout(() => {
    prePitchUnlocked = true;
    renderPrePitchSignalOverlay();
    updatePrompt();
    updateCheckButtonState();
    drawPBtn?.focus();
  }, 900);
}

field.addEventListener("click", (event) => {
  if (isPrePitchLocked()) return;
  if (animationEditorMode) {
    addAnimationEditorPoint(getSvgPoint(event));
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
  if (!cursorReadoutEl) return;
  cursorReadoutEl.textContent = "Cursor: x -, y -";
});

togglePlaybackBtn?.addEventListener("click", () => {
  if (animationPlaying) {
    stopPresetAnimations();
    return;
  }

  startPresetAnimations();
});

animationObjectSelectEl?.addEventListener("change", () => {
  syncAnimationDurationInput();
  updateAnimationManagerStatus();
  updateAnimationPathOutput();
});

animationDurationInputEl?.addEventListener("input", () => {
  const name = getSelectedAnimationObjectName();
  if (!name) {
    return;
  }

  const parsed = Number.parseFloat(animationDurationInputEl.value);
  animationObjectDurations.set(name, Number.isFinite(parsed) && parsed > 0 ? parsed : 3);
  updateAnimationManagerStatus();
  updateAnimationPathOutput();
});

animationEditBtn?.addEventListener("click", () => {
  toggleAnimationEditorMode();
});

animationShowBtn?.addEventListener("click", () => {
  setAnimationObjectVisibility(getSelectedAnimationObjectName(), true);
});

animationHideBtn?.addEventListener("click", () => {
  setAnimationObjectVisibility(getSelectedAnimationObjectName(), false);
});

animationResetBtn?.addEventListener("click", () => {
  resetAnimationObjectVisibility();
  resetAnimationObjectDurations();
  animationEditorPaths = new Map();
  toggleAnimationEditorMode(false);
  syncAnimationDurationInput();
  updateAnimationObjectPreview();
});

animationUndoBtn?.addEventListener("click", () => {
  undoAnimationEditorPoint();
});

animationClearPathBtn?.addEventListener("click", () => {
  clearAnimationEditorPath();
});

animationCopyBtn?.addEventListener("click", async () => {
  updateAnimationPathOutput();

  if (!animationPathOutputEl?.value) {
    return;
  }

  try {
    await navigator.clipboard.writeText(animationPathOutputEl.value);
    if (animationManagerStatusEl) {
      animationManagerStatusEl.textContent = "Copied animation coordinates to clipboard.";
    }
  } catch {
    if (animationManagerStatusEl) {
      animationManagerStatusEl.textContent =
        "Could not copy automatically, but the path output is ready to copy.";
    }
  }
});

drawPBtn?.addEventListener("click", () => {
  const selectedPath = selectedPaths[0];
  if (!selectedPath || roundFinished || isPrePitchLocked()) {
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
  if (!selectedPath || roundFinished || isPrePitchLocked()) {
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
  if (roundFinished || isPrePitchLocked()) {
    return;
  }

  resetSelectedPaths();
  if (feedbackBodyEl) feedbackBodyEl.textContent = "";
  updatePrompt();
  updateCheckButtonState();
});

undoBtn?.addEventListener("click", () => {
  if (roundFinished || isPrePitchLocked() || !pointHistory.length) {
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
  if (
    roundFinished ||
    isPrePitchLocked() ||
    !selectedPaths.every((path) => path.start && path.end)
  ) {
    return;
  }

  const scenario = scenarios[scenarioIndex];
  let totalDistance = 0;
  let movementPointsEarned = scenario.prePitchSignal ? prePitchScore : 0;

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
      movementPointsEarned += 1;
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

  const maxPoints =
    scenario.paths.length +
    (scenario.prePitchSignal ? 1 : 0) +
    (Number.isInteger(scenario.correctObservationIndex) ? 1 : 0);
  const averageDistance =
    totalDistance /
    scenario.paths.reduce(
      (sum, path) => sum + 2 + (path.waypoints ? path.waypoints.length : 0),
      0
    );
  roundFinished = true;
  updateCheckButtonState();
  nextBtn.disabled = true;
  updateNextButtonLabel();
  updateNextButtonVisibility();
  feedbackTitleEl.textContent = "Review the answer, then choose what you saw.";
  clearFieldResult();
  renderFeedbackBody(scenario);
  renderAnswerOverlay(scenario);
  renderMovementTracker();
  pendingRoundResult = {
    movementPointsEarned,
    maxPoints,
    averageDistance,
  };
});

nextBtn.addEventListener("click", () => {
  resetPresetAnimations();
  loadScenario();
});

revealObservationBtn?.addEventListener("click", () => {
  if (!pendingRoundResult) {
    return;
  }

  revealObservationBtn.classList.add("hidden");
  renderObservationCard(getCurrentScenario());
  hideRuleSummaryCard();
  feedbackTitleEl.textContent = "What did you see on the play?";
});

observationOptionsEl?.addEventListener("click", (event) => {
  const button = event.target.closest(".observation-option");
  if (!button || !observationOptionsEl.contains(button)) {
    return;
  }

  if (observationAnswered || !pendingRoundResult) {
    return;
  }

  selectedObservationOption = Number(button.dataset.observationIndex);
  observationAnswered = true;
  renderObservationCard(getCurrentScenario());

  const scenario = getCurrentScenario();
  const totalPoints =
    pendingRoundResult.movementPointsEarned +
    (selectedObservationOption === scenario.correctObservationIndex ? 1 : 0);
  const result = describeGrade(
    totalPoints,
    pendingRoundResult.maxPoints,
    pendingRoundResult.averageDistance
  );

  feedbackTitleEl.textContent = "Checking the ruling...";
  if (observationResolutionTimer) {
    window.clearTimeout(observationResolutionTimer);
  }

  observationResolutionTimer = window.setTimeout(() => {
    hideObservationCard();
    renderRuleSummaryCard(scenario);
    renderScoreLine();
    nextBtn.disabled = false;
    updateNextButtonLabel();
    updateNextButtonVisibility();
    celebrateScore(result.points);

    if (result.tone === "perfect") {
      feedbackEl?.classList.add("is-perfect");
      nextBtn.classList.add("perfect-next");
    } else if (result.tone === "partial") {
      feedbackEl?.classList.add("is-partial");
    }

    feedbackTitleEl.textContent = result.label;
    showFieldResult(result);
    submitAndRenderDailyResults(result.points, pendingRoundResult.maxPoints);
    observationResolutionTimer = null;
  }, 2000);
});

prePitchOptionsEl?.addEventListener("click", (event) => {
  const button = event.target.closest(".pre-pitch-option");
  if (!button || !prePitchOptionsEl.contains(button)) {
    return;
  }

  handlePrePitchSelection(button.dataset.signalLabel, button);
});

initializeGrid();
initializeRoleArtifacts();
resetAnimationObjectDurations();
initializeAnimationEditorArtifacts();
updateGridVisibility();
initializeAnimationObjects();
resetPresetAnimations();
loadScenario();

if (reducedMotionQuery) {
  const handleReducedMotionChange = () => {
    stopPresetAnimations();
    updatePlaybackButton();
  };

  if (typeof reducedMotionQuery.addEventListener === "function") {
    reducedMotionQuery.addEventListener("change", handleReducedMotionChange);
  } else if (typeof reducedMotionQuery.addListener === "function") {
    reducedMotionQuery.addListener(handleReducedMotionChange);
  }
}
