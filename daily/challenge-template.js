export const dailyChallengeTemplate = {
  id: "YYYY-MM-DD-base-hit-r1",
  date: "YYYY-MM-DD",
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
};
