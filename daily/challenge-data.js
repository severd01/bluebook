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

const APRIL_16_ANIMATION_PRESETS = {
  BALL: {
    start: { x: 442, y: 665 },
    segments: [
      {
        dur: "8s",
        path:
          "M 442 665 L 455 624 L 469 596 L 483 566 L 504 537 L 520 508 L 541 479 L 560 460 L 587 430 L 614 405 L 636 383 L 662 363 L 674 355 L 693 346 L 711 335 L 728 326 L 739 326 L 784 300",
      },
      {
        dur: "4.5s",
        path: "M 790 299 L 784 300 L 527 405 L 338 546",
      },
    ],
  },
  BR: {
    dur: "12s",
    start: { x: 447, y: 669 },
    path:
      "M 447 669 L 475 657 L 495 641 L 513 625 L 526 608 L 539 592 L 543 575 L 546 556 L 546 535 L 541 516 L 528 496 L 509 478 L 494 464 L 475 453 L 454 447 L 435 445 L 415 452 L 392 467 L 374 479 L 360 494 L 354 508 L 343 520 L 340 527 L 334 546",
  },
  F9: {
    dur: "8s",
    start: { x: 642, y: 340 },
    path:
      "M 642 340 L 659 332 L 676 324 L 693 313 L 717 303 L 729 299 L 747 296 L 773 302",
  },
  F4: {
    dur: "8s",
    start: { x: 504, y: 485 },
    path: "M 504 485 L 523 431 L 526 416",
  },
  F5: {
    dur: "8s",
    start: { x: 336, y: 475 },
    path: "M 336 475 L 356 560",
  },
};

const MAY_16_ANIMATION_PRESETS = {
  BALL: {
    start: { x: 442, y: 664 },
    segments: [
      {
        dur: "8s",
        path: "M 442 664 L 445 639 L 452 609 L 460 585 L 464 544 L 467 522 L 477 496 L 482 459 L 489 431 L 496 413 L 506 380 L 515 349 L 526 317 L 539 288 L 552 256 L 563 237 L 570 217 L 588 186 L 596 174 L 607 155 L 613 148",
      },
      {
        pause: "1s",
      },
      {
        dur: "7s",
        path: "M 613 148 L 533 397 L 442 668",
      },
    ],
  },
  R1: {
    dur: "13s",
    start: { x: 526, y: 507 },
    path: "M 526 507 L 514 474 L 501 455 L 479 442 L 451 435 L 435 437 L 404 452 L 385 464 L 365 478 L 349 499 L 339 518 L 336 538 L 334 554 L 336 578 L 346 600 L 368 620 L 383 639 L 442 673 L 473 679 L 512 673",
  },
  BR: {
    dur: "10s",
    path: "M 442 679 L 476 640 L 504 618 L 534 606 L 548 589 L 552 575 L 550 562 L 543 548 L 537 535 L 523 516 L 508 497 L 520 505 L 535 520 L 548 538 L 552 546",
    start: { x: 442, y: 679 },
  },
  F9: {
    dur: "9s",
    path: "M 624 384 L 616 145",
    start: { x: 624, y: 384 },
  },
  F4: {
    dur: "5s",
    path: "M 529 466 L 547 365",
    start: { x: 529, y: 466 },
  },
};

const MAY_24_ANIMATION_PRESETS = {
  BALL: {
    start: { x: 442, y: 665 },
    segments: [
      {
        dur: "7s",
        path:
          "M 442 665 L 455 624 L 469 596 L 483 566 L 504 537 L 520 508 L 541 479 L 560 460 L 587 430 L 614 405 L 636 383 L 662 363 L 674 355 L 693 346 L 711 335 L 728 326 L 739 326 L 784 300",
      },
      {
        pause: "0.5s",
      },
      {
        dur: "4s",
        path: "M 784 300 L 650 364 L 520 438 L 338 546",
      },
    ],
  },
  BR: {
    start: { x: 447, y: 669 },
    segments: [
      {
        dur: "4.8s",
        path:
          "M 447 669 L 475 657 L 495 641 L 513 625 L 526 608 L 539 592 L 543 575 L 546 556 L 546 535",
      },
      {
        dur: "1.2s",
        path: "M 546 535 L 535 525 L 546 535",
      },
      {
        dur: "5.6s",
        path:
          "M 546 535 L 541 516 L 528 496 L 509 478 L 494 464 L 475 453 L 454 447 L 435 445 L 415 452 L 392 467 L 374 479 L 360 494 L 354 508 L 343 520 L 340 527 L 334 546",
      },
    ],
  },
  F3: {
    start: { x: 552, y: 542 },
    dur: "5s",
    path: "M 552 542 L 535 525",
  },
  F9: {
    start: { x: 642, y: 340 },
    dur: "8s",
    path:
      "M 642 340 L 659 332 L 676 324 L 693 313 L 717 303 L 729 299 L 747 296 L 773 302",
  },
  F5: {
    start: { x: 336, y: 475 },
    dur: "10s",
    path: "M 336 475 L 338 546",
  },
};

export const dailyChallenges = [
  {
    id: "2026-05-24-trouble-ball-f3-obstruction",
    date: "2026-05-24",
    mobileCompactReveal: true,
    title: "Obstruction, Now What?",
    panelTitle: "No runners, no outs. Trouble ball to right.",
    hideDailyPanel: true,
    system: "",
    description:
      "No runners, no outs. The batter hits a trouble ball to right field. F3 obstructs the batter-runner near first, and the batter-runner is later tagged out at third.",
    runners: "No Runners",
    outs: "No Outs",
    ball: "Trouble ball to right field",
    sport: "Baseball",
    mechanics: "2 Umpire Mechanics",
    summary:
      "Animated two-umpire challenge focused on U1 going out on trouble in right, Plate taking the batter-runner around the bases, and ruling on obstruction when F3 hinders the batter-runner before a tag out at third.",
    animationPresets: MAY_24_ANIMATION_PRESETS,
    type: "dual-movement",
    ballFlightPath:
      "M 442 665 L 455 624 L 469 596 L 483 566 L 504 537 L 520 508 L 541 479 L 560 460 L 587 430 L 614 405 L 636 383 L 662 363 L 674 355 L 693 346 L 711 335 L 728 326 L 739 326 L 784 300",
    explanation:
      "With no runners and a trouble ball to right, U1 goes out for catch/no-catch and possible boundary trouble. Plate clears the catcher, moves into fair territory, reads the batter-runner's touches, and takes the runner into third if U1 stays out.",
    observationPrompt:
      "F3 obstructs the batter-runner near first base. The batter-runner continues and is tagged out at third. What is the ruling?",
    observationOptions: [
      {
        text:
          "Call time immediately when F3 obstructs the batter-runner and award the batter-runner second base.",
        note:
          "Obstruction is a delayed dead ball. Indicate obstruction when it happens, then let the play finish before making the award.",
      },
      {
        text:
          "Indicate obstruction, but disregard it once the batter-runner reaches second base. No need to call time.",
        note:
          "Reaching second does not automatically erase the obstruction. After action ends, call time and award the base you judge the batter-runner would have reached without the obstruction.",
      },
      {
        text:
          "Indicate obstruction, let the play finish, nullify the out, and award the batter-runner third base.",
        note:
          "Correct. Indicate obstruction, keep the ball live, then call time after action ends. Because the play at third was bang-bang, it is likely best judgment that F3's obstruction prevented the batter-runner from reaching third safely.",
      },
      {
        text:
          "Indicate obstruction, let the play finish, nullify the out, and award the batter-runner second base.",
        note:
          "Second base is too conservative if you judge the obstruction caused the out at third. The award should nullify the act of obstruction.",
      },
    ],
    correctObservationIndex: 2,
    observationScoreDetail: {
      correct: "Correctly recognized delayed-dead-ball obstruction and the proper award.",
      review: "Review why obstruction stays live and the award is based on umpire judgment.",
    },
    ruleSummary: {
      label: "NFHS 2-22-1 | 8-3-2",
      title: "Obstruction is a delayed dead ball",
      body:
        "When a fielder without the ball hinders the batter-runner, signal obstruction and let action continue. After play stops, call time and award the runner the base you judge would have been reached without the obstruction. On this play, the tag at third was bang-bang, so it is likely best judgment that F3's obstruction prevented the batter-runner from reaching third safely. Nullify the out and award the batter-runner third.",
    },
    answerNotes: [
      {
        heading: "Plate",
        bullets: [
          "Clear F2 and move into fair territory.",
          "Take the batter-runner's touches and the developing play at third because U1 has gone out.",
          "Signal obstruction when F3 hinders the batter-runner, then let the play finish before making the award.",
        ],
      },
      {
        heading: "U1",
        bullets: [
          "Go out on the trouble ball to right.",
          "Come to a complete stop for catch/no-catch and possible boundary responsibility.",
          "Once you go out, stay out; Plate has the batter-runner around the bases.",
        ],
      },
    ],
    paths: [
      {
        role: "P",
        startAnswer: { x: 446, y: 701 },
        routePoints: [
          { x: 446, y: 701 },
          { x: 446, y: 668 },
          { x: 454, y: 632 },
          { x: 479, y: 599 },
          { x: 493, y: 564 },
          { x: 491, y: 540 },
          { x: 479, y: 516 },
          { x: 461, y: 500 },
          { x: 443, y: 491 },
          { x: 422, y: 501 },
          { x: 406, y: 515 },
          { x: 396, y: 530 },
          { x: 385, y: 542 },
          { x: 373, y: 549 },
        ],
        waypoints: [
          { x: 493, y: 564 },
          { x: 422, y: 501 },
        ],
        endAnswer: { x: 373, y: 549 },
      },
      {
        role: "U1",
        startAnswer: { x: 608, y: 531 },
        routePoints: [
          { x: 608, y: 531 },
          { x: 637, y: 498 },
          { x: 653, y: 472 },
          { x: 681, y: 488 },
          { x: 559, y: 592 },
        ],
        waypoints: [
          { x: 637, y: 498 },
          { x: 653, y: 472 },
          { x: 681, y: 488 },
        ],
        endAnswer: { x: 559, y: 592 },
      },
    ],
  },
  {
    id: "2026-05-18-tag-up-appeal-r2-r3",
    date: "2026-05-18",
    mobileCompactReveal: true,
    title: "Tag, Score, Appeal",
    panelTitle: "R2, R3, 1 Out, fly ball caught.",
    hideDailyPanel: true,
    system: "",
    description:
      "R2 and R3, 1 out, pop fly caught. R3 tags and scores while the defense throws behind R2 at second.",
    runners: "R2, R3",
    outs: "1 Out",
    ball: "Pop fly caught.",
    sport: "Baseball",
    mechanics: "2 Umpire Mechanics",
    summary:
      "Animated two-umpire challenge focused on tag-up responsibilities with R2/R3, Plate reading R3's tag and score, U1 staying with second-base responsibilities, and a timing-play ruling.",
    animationPresets: {
      BALL: {
        start: { x: 442, y: 664 },
        segments: [
          {
            dur: "6s",
            path: "M 442 664 Q 410 384 431 184",
          },
          {
            pause: "1s",
          },
          {
            dur: "3s",
            path: "M 431 184 L 445 459",
          },
        ],
      },
      R2: {
        start: { x: 395, y: 461 },
        segments: [
          {
            dur: "5.5s",
            path:
              "M 395 461 L 383 474 L 365 491 L 350 511 L 341 532",
          },
          {
            pause: "1s",
          },
          {
            dur: "7s",
            path: "M 341 532 L 356 512 L 386 490 L 420 468 L 445 459",
          },
        ],
      },
      R3: {
        start: { x: 334, y: 548 },
        segments: [
          {
            dur: "6.2s",
            path: "M 334 548 L 334 548",
          },
          {
            dur: "2.9s",
            path: "M 334 548 L 359 587 L 392 625 L 436 666 L 454 694",
          },
        ],
      },
      BR: {
        start: { x: 442, y: 679 },
        dur: "8s",
        path:
          "M 442 679 L 476 640 L 504 618 L 534 606 L 548 589 L 552 575 L 550 562 L 543 548 L 537 535 L 523 516 L 508 497 L 520 505 L 535 520 L 548 538 L 552 546",
      },
      F8: {
        start: { x: 443, y: 185 },
        dur: "6s",
        path: "M 443 185 L 431 184",
      },
      F4: {
        start: { x: 521, y: 462 },
        dur: "7.5s",
        path: "M 521 462 L 445 459",
      },
    },
    type: "dual-movement",
    ballFlightPath: "M 442 664 Q 410 384, 431 184",
    prePitchSignal: {
      prompt: "Choose all correct pre-pitch signals for this situation.",
      correctOption: "Staying Home",
      correctOptions: ["Staying Home", "Timing Play"],
      options: [
        {
          label: "Standard Rotation",
          image: "../scenarios/24-fly-ball-r2-r3/pre-pitch-standard-rotation.png",
        },
        {
          label: "Plate Covers 3rd on Fly",
          image: "../scenarios/24-fly-ball-r2-r3/pre-pitch-plate-covers-third.png",
        },
        {
          label: "Staying Home",
          image: "../scenarios/24-fly-ball-r2-r3/pre-pitch-staying-home.png",
        },
        {
          label: "Timing Play",
          image: "./pre-pitch-timing-play.png",
        },
      ],
    },
    explanation:
      "With R2 and R3 on a caught fly ball, Plate reads R3's tag at third and retreats home for a possible play at home. U1 reads catch/no-catch, R2's tag at second, and stays with the ball for possible additional plays in the field.",
    observationPrompt: "What do you have?",
    observationOptions: [
      {
        text:
          "BR is out on fly ball caught. R2 is 3rd out on appeal at 2nd. Run does not score.",
        note:
          "This treats the retouch appeal like a force out. A leaving-early appeal on R2 is not a force, so the run depends on timing.",
      },
      {
        text:
          "BR is out on fly ball caught. R2 is 3rd out on appeal at 2nd. Run scores.",
        note:
          "Correct. The batter-runner is out on the catch, and the successful appeal on R2 can be the third out. Because it is a timing play, R3's run counts if R3 touched home before the appeal out.",
      },
      {
        text:
          "BR is out on fly ball caught. R2 must be tagged for 3rd out. R3 scores.",
        note:
          "The run scoring piece is right, but the defense can complete a live-ball retouch appeal by tagging second while properly appealing R2's miss. R2 does not have to be tagged.",
      },
      {
        text:
          "BR is out on fly ball caught. R2 is immediately out for leaving early. R3 does not score.",
        note:
          "Leaving early is not an automatic out. The defense must properly appeal, and if that appeal becomes the third out, the run still depends on whether R3 scored first.",
      },
    ],
    correctObservationIndex: 1,
    ruleSummary: {
      label: "NFHS 9-1-1 Exception | Appeal Play",
      title: "Retouch appeal as a time play",
      body:
        "The caught fly ball retires the batter-runner. A proper retouch appeal on R2 at second can be the third out, but it is not a force out. If R3 legally tagged and touched home before the appeal out at second, the run scores.",
    },
    answerNotes: [
      {
        heading: "Plate",
        bullets: [
          "Move into position to observe R3's tag at third.",
          "Retreat home for possible play at home.",
        ],
      },
      {
        heading: "U1",
        bullets: [
          "Move into position to rule on catch/no-catch.",
          "Observe R2's tag at second.",
          "Keep your eye on the ball for possible additional plays in the field.",
        ],
      },
    ],
    paths: [
      {
        role: "P",
        startAnswer: { x: 441, y: 694 },
        routePoints: [
          { x: 383, y: 669 },
          { x: 435, y: 690 },
          { x: 492, y: 673 },
        ],
        waypoints: [{ x: 435, y: 690 }],
        endAnswer: { x: 492, y: 673 },
      },
      {
        role: "U1",
        startAnswer: { x: 404, y: 512 },
        routePoints: [
          { x: 384, y: 340 },
          { x: 474, y: 327 },
        ],
        waypoints: [],
        endAnswer: { x: 474, y: 327 },
      },
    ],
  },
  {
    id: "2026-05-16-rotation-boo-appeal",
    date: "2026-05-16",
    mobileCompactReveal: true,
    title: "Rotation, Then the Card",
    panelTitle: "Bottom of 7, home team down by 1, R1, 1 Out.",
    hideDailyPanel: true,
    system: "",
    description:
      "Great highschool game, R1, 1 out, big hit to right center. Bottom of the 7th.",
    runners: "R1",
    outs: "1 Out",
    ball: "Big hit to right center.",
    sport: "Baseball",
    mechanics: "2 Umpire Mechanics",
    summary:
      "Animated two-umpire rotation challenge followed by a lineup-card check: Evans batted in Baker's spot, singled, and the defense appealed before the next pitch.",
    animationPresets: MAY_16_ANIMATION_PRESETS,
    type: "dual-movement",
    ballFlightPath:
      "M 442 664 L 445 639 L 452 609 L 460 585 L 464 544 L 467 522 L 477 496 L 482 459 L 489 431 L 496 413 L 506 380 L 515 349 L 526 317 L 539 288 L 552 256 L 563 237 L 570 217 L 588 186 L 596 174 L 607 155 L 613 148",
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
          image: "../scenarios/13-base-hit-r2/pre-pitch-staying-home.png",
        },
      ],
    },
    explanation:
      "Use standard rotation with R1. Plate has R1 into 3rd on the base hit, while U1 works inside for the batter-runner's touches at 1st and 2nd.",
    lineupCheck: {
      title: "Lineup card after the play",
      note:
        "Last completed batter was Carter in the 5 spot. Evans just batted and singled while Baker was due.",
      rows: [
        { slot: 4, name: "Lopez", number: "11", position: "1B" },
        { slot: 5, name: "Carter", number: "2", position: "2B", note: "Last batter" },
        { slot: 6, name: "Baker", number: "8", position: "LF", note: "Proper batter" },
        { slot: 7, name: "Evans", number: "22", position: "RF", note: "Batted" },
        { slot: 8, name: "Young", number: "3", position: "C" },
      ],
    },
    observationPrompt:
      "Before the next pitch, the defensive coach appeals that Evans, who is now standing on first, batted out of order. It's clear that Baker did not hit. What's the ruling?",
    observationOptions: [
      "Deny the appeal because Evans reached first safely. The improper batter is legalized once the play ends.",
      "Call Evans out for batting out of order, return R1 to 1st, and bring Baker to bat.",
      "Call Baker out, nullify Evans's single, return R1 to 1st, and Evans is the next proper batter.",
      "Call Baker out, but leave Evans at 1st and R1 where he advanced because the ball was put in play.",
    ],
    correctObservationIndex: 2,
    ruleSummary: {
      label: "NFHS 7-1-1 Penalty",
      title: "Batting out of order before the next pitch",
      body:
        "When the defense properly appeals batting out of order before the next pitch, the proper batter is declared out. Any advance or score because of the improper batter's action is nullified, so Evans is removed from 1st and R1 returns to 1st. The next batter is the player who follows the proper batter who was called out.",
    },
    answerNotes: [
      {
        heading: "Plate",
        bullets: [
          "Use standard rotation with R1 on a base hit to right.",
          "Move toward 3rd and be ready for the play on R1 at 3rd. Retreat home for a play at home if necessary.",
        ],
      },
      {
        heading: "U1",
        bullets: [
          "Move into the working area.",
          "Take the batter-runner's touches of 1st and 2nd.",
          "Be ready for any play on the batter-runner while Plate takes R1 into 3rd.",
        ],
      },
    ],
    paths: [
      {
        role: "P",
        startAnswer: { x: 444, y: 689 },
        routePoints: [
          { x: 444, y: 689 },
          { x: 391, y: 641 },
          { x: 375, y: 627 },
          { x: 433, y: 710 },
          { x: 464, y: 690 },
        ],
        waypoints: [],
        endAnswer: { x: 464, y: 690 },
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
    id: "2026-04-16-base-hit-r1",
    date: "2026-04-16",
    mobileCompactReveal: true,
    title: "Trouble Ball to Right Field",
    system: "",
    description: "Trouble Ball to Right Field",
    runners: "No Runners",
    outs: "No Outs",
    ball: "Hit to right field.",
    sport: "Baseball",
    mechanics: "2 Umpire Mechanics",
    summary:
      "Animated two-umpire situation challenge focused on standard rotation, Plate taking the runner into third, and U1 covering touches at first and second.",
    animationPresets: APRIL_16_ANIMATION_PRESETS,
    type: "dual-movement",
    ballFlightPath:
      "M 442 665 L 455 624 L 469 596 L 483 566 L 504 537 L 520 508 L 541 479 L 560 460 L 587 430 L 614 405 L 636 383 L 662 363 L 674 355 L 693 346 L 711 335 L 728 326 L 739 326 L 784 300",
    explanation:
      "Read the base hit with a runner on first, then draw how Plate and U1 should move to stay ahead of the next likely play.",
    observationPrompt:
      "The plate umpire observes that BR misses a touch of 2nd base. What is the proper mechanic?",
    observationOptions: [
      "Plate should point at 2nd base after the missed touch, then wait for a possible appeal.",
      "Plate should immediately verbalize that the runner missed 2nd and call the runner out.",
      "Plate should wait until all play stops, then privately tell U1 the runner missed 2nd so U1 can call the out.",
      "Nothing.",
    ],
    correctObservationIndex: 3,
    ruleSummary: {
      label: "Mechanics Read",
      title: "No mechanic is given on the missed touch",
      body:
        "If Plate observes the batter-runner miss 2nd base, Plate does nothing. The runner is not out unless the defense properly appeals, and no signal or point is given by Plate on the missed touch itself.",
    },
    answerNotes: [
      {
        heading: "Plate",
        bullets: [
          "Come out between first and the mound.",
          "Responsible for the BR's touches of 1st, 2nd, 3rd, and home, if U1 cannot get back to home.",
          "Path should keep you ahead of BR.",
        ],
      },
      {
        heading: "U1",
        bullets: [
          "Communicate that you're going out.",
          "Come to a complete stop when the catch is about to occur.",
          "After determining that the ball will not go out of play, turn, watching the ball, and hustle home in foul territory.",
          "Only cover the plate if you get there prior to a possible play.",
          "\"I've got home!\" once in position.",
        ],
      },
    ],
    paths: [
      {
        role: "P",
        startAnswer: { x: 446, y: 701 },
        routePoints: [
          { x: 446, y: 701 },
          { x: 446, y: 668 },
          { x: 454, y: 632 },
          { x: 479, y: 599 },
          { x: 493, y: 564 },
          { x: 491, y: 540 },
          { x: 479, y: 516 },
          { x: 461, y: 500 },
          { x: 443, y: 491 },
          { x: 422, y: 501 },
          { x: 406, y: 515 },
          { x: 396, y: 530 },
          { x: 385, y: 542 },
          { x: 373, y: 549 },
        ],
        waypoints: [],
        endAnswer: { x: 373, y: 549 },
      },
      {
        role: "U1",
        startAnswer: { x: 616, y: 523 },
        routePoints: [
          { x: 616, y: 523 },
          { x: 631, y: 493 },
          { x: 648, y: 467 },
          { x: 659, y: 452 },
          { x: 677, y: 438 },
          { x: 681, y: 447 },
          { x: 681, y: 467 },
          { x: 676, y: 491 },
          { x: 656, y: 519 },
          { x: 618, y: 559 },
          { x: 570, y: 595 },
          { x: 526, y: 641 },
          { x: 487, y: 672 },
          { x: 469, y: 684 },
        ],
        waypoints: [],
        endAnswer: { x: 469, y: 684 },
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
