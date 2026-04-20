const APRIL_5_ANIMATION_PRESETS = {
  BALL: {
    start: { x: 446, y: 669 },
    segments: [
      {
        dur: "5s",
        path: "M 446 669 L 442 628 L 442 570 L 432 522 L 425 471 L 411 414 L 402 376 L 391 346 L 371 306 L 345 264 L 329 244 L 319 236 L 297 176",
      },
      {
        dur: "7s",
        path: "M 294 179 L 303 335 L 327 548",
      },
    ],
  },
  R2: {
    start: { x: 396, y: 449 },
    segments: [
      {
        dur: "5.5s",
        path: "M 396 449 L 396 449",
      },
      {
        dur: "6s",
        path: "M 396 449 L 354 486 L 333 498 L 327 511 L 325 526 L 325 545 L 330 553 L 354 584 L 382 615 L 413 641 L 440 665 L 487 691",
      },
    ],
  },
  R1: {
    start: { x: 528, y: 509 },
    segments: [
      {
        dur: "5.5s",
        path: "M 528 509 L 502 479 L 476 458 L 458 453 L 440 450 L 409 453 L 385 464 L 374 476 L 400 453",
      },
      {
        pause: "1s",
      },
      {
        dur: "7.5s",
        path: "M 399 456 L 366 476 L 340 491 L 327 505 L 327 522 L 330 544 L 344 559 L 370 590 L 399 626 L 424 647 L 442 662 L 520 668",
      },
    ],
  },
  BR: {
    dur: "12s",
    path: "M 442 679 L 476 640 L 504 618 L 534 606 L 548 589 L 552 575 L 550 562 L 543 548 L 537 535 L 523 516 L 508 497 L 520 505 L 535 520 L 548 538 L 552 546",
    start: { x: 442, y: 679 },
  },
  F6: {
    dur: "5.1s",
    path: "M 374 475 L 301 391",
    start: { x: 374, y: 475 },
  },
  F5: {
    dur: "5s",
    path: "M 340 502 L 326 487 L 323 546",
    start: { x: 340, y: 502 },
  },
  F7: {
    dur: "5s",
    path: "M 219 314 L 244 300 L 256 285 L 266 264 L 267 245 L 271 219 L 272 194",
    start: { x: 219, y: 314 },
  },
};

const APRIL_10_ANIMATION_PRESETS = {
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

export const dailyChallenges = [
  {
    id: "2026-04-19-base-hit-r2",
    date: "2026-04-19",
    mobileCompactReveal: true,
    title: "Go Ahead Run?",
    system: "",
    description:
      "Bottom of the 7th, 2 outs, R2 on the move, and a base hit to right puts the winning run in motion.",
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
  },
  {
    id: "2026-04-05-base-hit-right-field",
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
    animationPresets: APRIL_5_ANIMATION_PRESETS,
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
    mobileCompactReveal: true,
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
    animationPresets: APRIL_10_ANIMATION_PRESETS,
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
