export const dailyChallenges = [
  {
    id: "2026-04-05-base-hit-left-center",
    date: "2026-04-05",
    title: "Hit to Left Center",
    system: "",
    description: "R1, R2",
    runners: "R1, R2",
    outs: "1 Out",
    ball: "Base hit",
    sport: "Baseball",
    mechanics: "2 Umpire Mechanics",
    summary:
      "Animated two-umpire situation challenge focused on plate clearance, fair-territory movement, and U1 staying ahead of the batter-runner.",
    type: "dual-movement",
    ballFlightPath: "M 442 664 Q 447 348 319 234",
    prePitchSignal: {
      prompt: "Choose the correct pre-pitch signal for this situation.",
      correctOption: "Plate Covers 3rd on Fly",
      options: [
        {
          label: "Standard Rotation",
          image: "../scenarios/19-base-hit-r1-r2/pre-pitch-standard-rotation.png",
        },
        {
          label: "Plate Covers 3rd on Fly",
          image: "../scenarios/19-base-hit-r1-r2/pre-pitch-plate-covers-third.png",
        },
        {
          label: "Staying Home",
          image: "../scenarios/19-base-hit-r1-r2/pre-pitch-staying-home.png",
        },
      ],
    },
    explanation:
      "Use the animation to read the developing play, then draw where both umpires should move to stay ahead of the next likely play.",
    observationPrompt: "What did you see on this play?",
    observationOptions: [
      "R1 is out for passing R2. The ball stays live. No time.",
      "Nothing here, play on.",
      "R2 is out because he was passed by R1. No time.",
      "Defensive coach must appeal R1 passing R2.",
    ],
    correctObservationIndex: 0,
    answerNotes: [
      {
        heading: "Plate",
        bullets: [
          "Observe R2 and R1's touch of 3rd.",
          "Move into position to rule on play at home.",
        ],
      },
      {
        heading: "U1",
        bullets: [
          "Move into the working area.",
          "Let the throw take you to the play.",
          "Responsible for all touches of 1st and 2nd and BR into third.",
          "Be in position to take all plays in the infield.",
        ],
      },
    ],
    paths: [
      {
        role: "P",
        startAnswer: { x: 439, y: 699 },
        routePoints: [
          { x: 441, y: 683 },
          { x: 441, y: 668 },
        ],
        waypoints: [],
        endAnswer: { x: 441, y: 668 },
      },
      {
        role: "U1",
        startAnswer: { x: 405, y: 514 },
        routePoints: [
          { x: 405, y: 514 },
          { x: 437, y: 514 },
        ],
        waypoints: [],
        endAnswer: { x: 437, y: 514 },
      },
    ],
  },
  {
    id: "2026-04-10-base-hit-r1",
    date: "2026-04-10",
    title: "R1, base hit to right field.",
    system: "",
    description: "R1, base hit to right field.",
    runners: "R1",
    outs: "No Outs",
    ball: "Base hit, possible diving catch.",
    sport: "Baseball",
    mechanics: "2 Umpire Mechanics",
    summary:
      "Animated two-umpire situation challenge focused on standard rotation, Plate taking the runner into third, and U1 covering touches at first and second.",
    type: "dual-movement",
    ballFlightPath:
      "M 442 664 C 470 560, 545 390, 612 314 C 630 294, 642 282, 650 276",
    prePitchSignal: {
      prompt: "Choose the correct pre-pitch signal for this situation.",
      correctOption: "Standard Rotation",
      options: [
        {
          label: "Standard Rotation",
          image: "../scenarios/19-base-hit-r1-r2/pre-pitch-standard-rotation.png",
        },
        {
          label: "Plate Covers 3rd on Fly",
          image: "../scenarios/19-base-hit-r1-r2/pre-pitch-plate-covers-third.png",
        },
        {
          label: "Staying Home",
          image: "../scenarios/19-base-hit-r1-r2/pre-pitch-staying-home.png",
        },
      ],
    },
    explanation:
      "Read the base hit with a runner on first, then draw how Plate and U1 should move to stay ahead of the next likely play.",
    observationPrompt:
      "With R1 and a base hit to right, F4's throw goes out of play. Where do you place the runners?",
    observationOptions: [
      "R1 is awarded 3rd and the batter-runner is awarded 2nd.",
      "R1 scores and the batter-runner is awarded 3rd.",
      "R1 scores and the batter-runner is awarded 2nd.",
      "R1 is awarded home and the batter-runner returns to 1st.",
    ],
    correctObservationIndex: 1,
    ruleSummary: {
      label: "NFHS 8-3-3c",
      title: "Two-base award from time of throw",
      body:
        "Because the batter-runner had already achieved first base when F4 released the throw out of play, awards are made from time of throw. R1 is awarded home and the batter-runner is awarded third.",
    },
    answerNotes: [
      {
        heading: "Plate",
        bullets: [
          "Responsible for all plays on R1 into 3rd.",
          "If play develops at 3rd, move into cutout.",
          "On overthrow retreat to home in fair territory.",
          "If R1 will reach 3rd without any possible play, return home in foul territory.",
          "Responsible for all overthrows (1st and 3rd).",
        ],
      },
      {
        heading: "U1",
        intro: "Rotation stays standard on this base hit with R1 only.",
        bullets: [
          "Responsible for all touches at 1st and 2nd.",
          "Split difference between 1st and 2nd.",
          "Make sure partner is rotating to third, and be prepared to cover all plays.",
        ],
      },
    ],
    paths: [
      {
        role: "P",
        startAnswer: { x: 446, y: 686 },
        routePoints: [
          { x: 446, y: 686 },
          { x: 365, y: 612 },
          { x: 367, y: 557 },
        ],
        waypoints: [],
        endAnswer: { x: 367, y: 557 },
      },
      {
        role: "U1",
        startAnswer: { x: 466, y: 518 },
        routePoints: [
          { x: 466, y: 518 },
          { x: 505, y: 524 },
        ],
        waypoints: [],
        endAnswer: { x: 505, y: 524 },
      },
    ],
  },
  {
    id: "2026-04-11-base-hit-r1",
    date: "2026-04-11",
    title: "R1, base hit to right field.",
    system: "",
    description: "R1, base hit to right field.",
    runners: "R1",
    outs: "No Outs",
    ball: "Base hit, possible diving catch.",
    sport: "Baseball",
    mechanics: "2 Umpire Mechanics",
    summary:
      "Animated two-umpire situation challenge focused on standard rotation, Plate taking the runner into third, and U1 covering touches at first and second.",
    type: "dual-movement",
    ballFlightPath:
      "M 442 664 C 470 560, 545 390, 612 314 C 630 294, 642 282, 650 276",
    prePitchSignal: {
      prompt: "Choose the correct pre-pitch signal for this situation.",
      correctOption: "Standard Rotation",
      options: [
        {
          label: "Standard Rotation",
          image: "../scenarios/19-base-hit-r1-r2/pre-pitch-standard-rotation.png",
        },
        {
          label: "Plate Covers 3rd on Fly",
          image: "../scenarios/19-base-hit-r1-r2/pre-pitch-plate-covers-third.png",
        },
        {
          label: "Staying Home",
          image: "../scenarios/19-base-hit-r1-r2/pre-pitch-staying-home.png",
        },
      ],
    },
    explanation:
      "Read the base hit with a runner on first, then draw how Plate and U1 should move to stay ahead of the next likely play.",
    observationPrompt:
      "With R1 and a base hit to right, F4's throw goes out of play. Where do you place the runners?",
    observationOptions: [
      "R1 is awarded 3rd and the batter-runner is awarded 2nd.",
      "R1 scores and the batter-runner is awarded 3rd.",
      "R1 scores and the batter-runner is awarded 2nd.",
      "R1 is awarded home and the batter-runner returns to 1st.",
    ],
    correctObservationIndex: 1,
    ruleSummary: {
      label: "NFHS 8-3-3c",
      title: "Two-base award from time of throw",
      body:
        "Because the batter-runner had already achieved first base when F4 released the throw out of play, awards are made from time of throw. R1 is awarded home and the batter-runner is awarded third.",
    },
    answerNotes: [
      {
        heading: "Plate",
        bullets: [
          "Responsible for all plays on R1 into 3rd.",
          "If play develops at 3rd, move into cutout.",
          "On overthrow retreat to home in fair territory.",
          "If R1 will reach 3rd without any possible play, return home in foul territory.",
          "Responsible for all overthrows (1st and 3rd).",
        ],
      },
      {
        heading: "U1",
        intro: "Rotation stays standard on this base hit with R1 only.",
        bullets: [
          "Responsible for all touches at 1st and 2nd.",
          "Split difference between 1st and 2nd.",
          "Make sure partner is rotating to third, and be prepared to cover all plays.",
        ],
      },
    ],
    paths: [
      {
        role: "P",
        startAnswer: { x: 446, y: 686 },
        routePoints: [
          { x: 446, y: 686 },
          { x: 365, y: 612 },
          { x: 367, y: 557 },
        ],
        waypoints: [],
        endAnswer: { x: 367, y: 557 },
      },
      {
        role: "U1",
        startAnswer: { x: 466, y: 518 },
        routePoints: [
          { x: 466, y: 518 },
          { x: 505, y: 524 },
        ],
        waypoints: [],
        endAnswer: { x: 505, y: 524 },
      },
    ],
  },
];

function parseChallengeDate(dateString) {
  return new Date(`${dateString}T12:00:00`);
}

function getReferenceKey(referenceDate = new Date()) {
  if (typeof referenceDate === "string") {
    return /^\d{4}-\d{2}-\d{2}$/.test(referenceDate) ? referenceDate : "";
  }

  if (referenceDate instanceof Date && !Number.isNaN(referenceDate.valueOf())) {
    return referenceDate.toISOString().slice(0, 10);
  }

  return "";
}

export function formatChallengeDate(dateString, options = {}) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: options.includeYear === false ? undefined : "numeric",
  });

  return formatter.format(parseChallengeDate(dateString));
}

export function getChallengeByDate(referenceDate = new Date()) {
  const referenceKey = getReferenceKey(referenceDate);

  if (!referenceKey) {
    return null;
  }

  return dailyChallenges.find((challenge) => challenge.date === referenceKey) || null;
}

export function getFeaturedChallenge(referenceDate = new Date()) {
  const referenceKey = getReferenceKey(referenceDate);
  const exactMatch = getChallengeByDate(referenceKey);

  if (exactMatch) {
    return exactMatch;
  }

  const availableChallenges = [...dailyChallenges].sort((a, b) =>
    a.date < b.date ? 1 : -1
  );

  return (
    availableChallenges.find((challenge) => challenge.date <= referenceKey) ||
    availableChallenges[0] ||
    null
  );
}

export function getArchivedChallenges(referenceDate = new Date()) {
  const featured = getFeaturedChallenge(referenceDate);

  return [...dailyChallenges]
    .filter((challenge) => challenge.id !== featured?.id)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
