export const dailyChallengeTemplate = {
  id: "2026-04-19-base-hit-r2-template",
  date: "2026-04-19",
  title: "Go Ahead Run?",
  system: "",
  description: "Bottom of the 7th, 2 outs, R2 on the move, and a base hit to right puts the winning run in motion.",
  runners: "R2",
  outs: "2 Outs",
  ball: "Base hit to right center.",
  sport: "Baseball",
  mechanics: "2 Umpire Mechanics",
  summary:
    "Animated two-umpire situation challenge built from Scenario 13, focused on Plate staying home with R2 only, U1 working the batter-runner, and a fake-tag obstruction read near the plate.",
  animationPresets: {
    BALL: {
      start: { x: 442, y: 659 },
      segments: [
        {
          dur: "7.4s",
          path: "M 442 659 Q 446 414 644 324",
        },
        {
          pause: "0.5s",
        },
        {
          dur: "2.8s",
          path: "M 641 326 L 435 651",
        },
      ],
    },
    R2: {
      start: { x: 395, y: 461 },
      segments: [
        {
          dur: "12s",
          path:
            "M 395 461 L 369 476 L 347 501 L 333 533 L 333 556 L 349 574 L 356 585 L 338 577 L 435 666",
        },
      ],
    },
    BR: {
      start: { x: 443, y: 679 },
      dur: "10s",
      path:
        "M 443 679 L 473 657 L 501 640 L 520 625 L 538 611 L 545 597 L 549 571 L 548 557 L 543 541 L 532 526 L 516 505 L 510 498 L 548 541",
    },
    F5: {
      start: { x: 348, y: 497 },
      dur: "4.5s",
      path: "M 348 497 L 358 581",
    },
    F9: {
      start: { x: 732, y: 337 },
      dur: "8s",
      path: "M 732 337 L 647 326",
    },
    F2: {
      start: { x: 444, y: 687 },
      dur: "3s",
      path: "M 444 687 L 436 650",
    },
  },
  type: "dual-movement",
  ballFlightPath: "M 442 659 Q 446 414, 644 324",
  prePitchSignal: {
    prompt: "Choose the correct pre-pitch signal for this situation.",
    correctOption: "Staying Home",
    options: [
      {
        label: "Standard Rotation",
        image: "../scenarios/13-base-hit-r2/pre-pitch-standard-rotation.png",
      },
      {
        label: "Plate Covers 3rd on Fly",
        image: "../scenarios/13-base-hit-r2/pre-pitch-plate-covers-third.png",
      },
      {
        label: "Staying Home",
        image: "../scenarios/13-base-hit-r2/pre-pitch-staying-home.png",
      },
    ],
  },
  explanation:
    "Use Scenario 13 as the baseline: with only R2 and two outs, Plate stays home for the scoring play while U1 moves into the working area for the batter-runner.",
  observationPrompt:
    "After R2 rounds 3rd, F5 lays a fake tag on the runner. What's the mechanic and the call?",
  observationOptions: [
    "R2 had achieved 3rd, no need for an obstruction call here. F5 receives a warning.",
    'PU points, "Obstruction", lets the play continue, R2 briefly retreated, obstruction waved, he is tagged out at home. End of inning. Umpire issues warning to F5.',
    'PU points and says "Obstruction", lets the play continue, R2 is tagged by the catcher, PU allows the play to finish, calls time, awards R2 home, and issues F5 a warning.',
    'PU states "Interference!", R2 gets home, F5 receives warning.',
  ],
  correctObservationIndex: 2,
  ruleSummary: {
    label: "NFHS 2-22-2 | 8-3-2",
    title: "Fake tag is obstruction",
    body:
      "Under NFHS baseball, a fake tag by a fielder without the ball is obstruction. Call obstruction and protect the runner, let action continue unless time is required immediately, then award the runner the base you judge would have been reached without the fake tag. If R2 would have scored, count the run.",
  },
  answerNotes: [
    {
      heading: "Plate",
      bullets: [
        "Stay home with R2 only and two outs.",
        "Read R2's touch of 3rd and get set for any play at the plate.",
      ],
    },
    {
      heading: "U1",
      bullets: [
        "Observe the batter-runner's touch of 1st.",
        "Move into the working area and be prepared to rule on any play on the BR.",
        "Keep the developing scoring play in front of you while Plate stays home.",
      ],
    },
  ],
  paths: [
    {
      role: "P",
      startAnswer: { x: 442, y: 691 },
      routePoints: [
        { x: 442, y: 691 },
        { x: 425, y: 668 },
        { x: 411, y: 663 },
        { x: 422, y: 680 },
        { x: 466, y: 684 },
        { x: 475, y: 676 },
      ],
      waypoints: [],
      endAnswer: { x: 475, y: 676 },
    },
    {
      role: "U1",
      startAnswer: { x: 407, y: 522 },
      routePoints: [
        { x: 407, y: 522 },
        { x: 458, y: 527 },
      ],
      waypoints: [],
      endAnswer: { x: 458, y: 527 },
    },
  ],
};
