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

const MAY_30_ANIMATION_PRESETS = {
  BALL: {
    start: { x: 442, y: 665 },
    segments: [
      {
        dur: "3.5s",
        path: "M 442 665 L 421 617 L 399 563 L 382 515 L 372 482",
      },
      {
        dur: "2.2s",
        path: "M 372 482 L 445 459",
      },
      {
        pause: "0.35s",
      },
      {
        dur: "2.6s",
        path: "M 445 459 L 552 542 L 702 626",
      },
    ],
  },
  R1: {
    start: { x: 536, y: 516 },
    segments: [
      {
        dur: "1.1s",
        path: "M 536 516 L 536 516",
      },
      {
        dur: "5.2s",
        path: "M 536 516 L 512 488 L 480 466 L 445 459",
      },
    ],
  },
  BR: {
    start: { x: 442, y: 679 },
    segments: [
      {
        dur: "5.9s",
        path: "M 442 679 L 552 542",
      },
      {
        dur: "2.4s",
        path: "M 552 542 L 614 497",
      },
    ],
  },
  F6: {
    start: { x: 360, y: 477 },
    segments: [
      {
        dur: "3s",
        path: "M 360 477 L 372 482",
      },
      {
        dur: "1.8s",
        path: "M 372 482 L 387 479",
      },
    ],
  },
  F4: {
    start: { x: 521, y: 462 },
    segments: [
      {
        dur: "4.8s",
        path: "M 521 462 L 445 459",
      },
      {
        dur: "1.1s",
        path: "M 445 459 L 445 459",
      },
      {
        dur: "2.4s",
        path: "M 445 459 L 445 459",
      },
    ],
  },
  F3: {
    start: { x: 552, y: 542 },
    dur: "8s",
    path: "M 552 542 L 552 542",
  },
};

const JUNE_27_ANIMATION_PRESETS = {
  BALL: {
    start: { x: 442, y: 665 },
    segments: [
      {
        dur: "5.5s",
        path: "M 442 665 Q 520 438 630 538",
      },
      {
        pause: "0.2s",
      },
      {
        dur: "2.4s",
        path: "M 630 538 L 655 557",
      },
      {
        pause: "0.2s",
      },
      {
        dur: "1.7s",
        path: "M 655 557 L 443 672",
      },
    ],
  },
  R1: {
    start: { x: 553, y: 554 },
    segments: [
      {
        dur: "5.5s",
        path: "M 553 554 L 532 526 L 512 503",
      },
      {
        dur: "1.7s",
        path: "M 512 503 L 532 526 L 553 554",
      },
      {
        dur: "2.8s",
        path: "M 553 554 L 553 554",
      },
    ],
  },
  R2: {
    start: { x: 442, y: 443 },
    segments: [
      {
        dur: "5.5s",
        path: "M 442 443 L 416 462 L 394 484",
      },
      {
        dur: "1.7s",
        path: "M 394 484 L 416 462 L 442 443",
      },
      {
        dur: "2.8s",
        path: "M 442 443 L 442 443",
      },
    ],
  },
  R3: {
    start: { x: 334, y: 548 },
    segments: [
      {
        dur: "5.5s",
        path: "M 334 548 L 350 574 L 363 590",
      },
      {
        dur: "1.1s",
        path: "M 363 590 L 350 574 L 334 548",
      },
    ],
  },
  BR: {
    start: { x: 442, y: 679 },
    dur: "6.2s",
    path: "M 442 679 L 469 645 L 499 618 L 528 586 L 552 542",
  },
  F2: {
    start: { x: 443, y: 672 },
    dur: "10s",
    path: "M 443 672 L 443 672",
  },
  F3: {
    start: { x: 552, y: 542 },
    segments: [
      {
        dur: "5.5s",
        path: "M 552 542 L 581 518 L 630 538",
      },
      {
        dur: "2.4s",
        path: "M 630 538 L 642 535 L 655 557",
      },
    ],
  },
  F4: {
    start: { x: 521, y: 462 },
    dur: "7s",
    path: "M 521 462 L 532 469",
  },
};

const JUNE_30_ANIMATION_PRESETS = {
  BALL: {
    start: { x: 442, y: 665 },
    segments: [
      {
        dur: "2s",
        path: "M 442 665 L 489 606 L 538 547 L 607 502",
      },
      {
        pause: "0.2s",
      },
      {
        dur: "0.8s",
        path: "M 607 502 L 560 548 L 525 584",
      },
      {
        dur: "1.1s",
        path: "M 525 584 L 500 546 L 477 510",
      },
    ],
  },
  R3: {
    start: { x: 334, y: 548 },
    segments: [
      {
        dur: "6.5s",
        path: "M 334 548 L 443 672",
      },
    ],
  },
  BR: {
    start: { x: 439, y: 686 },
    segments: [
      {
        dur: "3s",
        path: "M 439 686 L 525 584",
      },
      {
        dur: "4.2s",
        path: "M 525 584 L 605 527",
      },
    ],
    points: [{ x: 439, y: 686 }, { x: 525, y: 584 }, { x: 605, y: 527 }],
  },
  F3: {
    start: { x: 545, y: 503 },
    segments: [
      {
        dur: "2s",
        path: "M 545 503 L 607 502",
      },
      {
        pause: "0.2s",
      },
      {
        dur: "0.8s",
        path: "M 607 502 L 607 502",
      },
    ],
  },
  F1: {
    start: { x: 444, y: 562 },
    dur: "3s",
    path: "M 444 562 L 488 559",
    points: [{ x: 444, y: 562 }, { x: 488, y: 559 }],
  },
};

const JULY_1_ANIMATION_PRESETS = {
  BALL: {
    start: { x: 442, y: 665 },
    segments: [
      {
        dur: "4.8s",
        path: "M 442 665 Q 570 365 718 269",
      },
      {
        pause: "0.35s",
      },
      {
        dur: "2.8s",
        path: "M 718 269 L 640 325 L 565 382",
      },
      {
        pause: "0.25s",
      },
      {
        dur: "1.8s",
        path: "M 565 382 L 442 442",
      },
    ],
  },
  R2: {
    start: { x: 400, y: 450 },
    segments: [
      {
        dur: "11.5s",
        path: "M 400 450 L 373 472 L 351 497 L 340 522 L 356 514 L 396 479 L 414 461 L 442 442",
      },
      {
        dur: "0.4s",
        path: "M 442 442 L 442 442",
      },
    ],
    points: [
      { x: 400, y: 450 },
      { x: 373, y: 472 },
      { x: 351, y: 497 },
      { x: 340, y: 522 },
      { x: 356, y: 514 },
      { x: 396, y: 479 },
      { x: 414, y: 461 },
      { x: 442, y: 442 },
    ],
  },
  R3: {
    start: { x: 334, y: 548 },
    segments: [
      {
        dur: "5.1s",
        path: "M 334 548 L 334 548",
      },
      {
        dur: "3.9s",
        path: "M 334 548 L 360 588 L 394 626 L 442 672",
      },
    ],
  },
  BR: {
    start: { x: 442, y: 679 },
    segments: [
      {
        dur: "5.3s",
        path: "M 442 679 L 479 639 L 516 591 L 552 542",
      },
    ],
  },
  F9: {
    start: { x: 651, y: 338 },
    segments: [
      {
        dur: "4.8s",
        path: "M 651 338 L 684 304 L 718 269",
      },
      {
        pause: "0.35s",
      },
      {
        dur: "1s",
        path: "M 718 269 L 708 281",
      },
    ],
  },
  F4: {
    start: { x: 521, y: 462 },
    segments: [
      {
        dur: "6.4s",
        path: "M 521 462 L 545 420 L 565 382",
      },
      {
        pause: "0.25s",
      },
      {
        dur: "1.8s",
        path: "M 565 382 L 565 382",
      },
    ],
  },
  F6: {
    start: { x: 360, y: 477 },
    segments: [
      {
        dur: "9s",
        path: "M 360 477 L 402 462 L 442 442",
      },
      {
        dur: "0.4s",
        path: "M 442 442 L 442 442",
      },
    ],
  },
};

const JULY_25_ANIMATION_PRESETS = {
  BALL: {
    start: { x: 442, y: 665 },
    segments: [
      {
        dur: "2.8s",
        path: "M 442 665 L 423 618 L 403 570 L 388 538 L 378 513",
      },
      {
        pause: "0.2s",
      },
      {
        dur: "1.7s",
        path: "M 378 513 L 408 476 L 442 442",
      },
      {
        pause: "2.8s",
      },
    ],
  },
  R3: {
    start: { x: 334, y: 548 },
    segments: [
      {
        dur: "4.8s",
        path: "M 334 548 L 353 578 L 382 612 L 414 646 L 442 672",
      },
    ],
  },
  R2: {
    start: { x: 400, y: 450 },
    segments: [
      {
        dur: "4.9s",
        path: "M 400 450 L 377 471 L 357 495 L 340 522 L 334 548",
      },
    ],
  },
  R1: {
    start: { x: 552, y: 542 },
    segments: [
      {
        dur: "6.84s",
        path:
          "M 552 542 L 528 513 L 499 486 L 470 461 L 442 442 L 423 428 L 406 416",
      },
    ],
  },
  BR: {
    start: { x: 442, y: 679 },
    segments: [
      {
        dur: "6.5s",
        path: "M 442 679 L 468 648 L 498 616 L 526 582 L 552 542",
      },
    ],
  },
  F6: {
    start: { x: 360, y: 477 },
    segments: [
      {
        dur: "2.6s",
        path: "M 360 477 L 370 495 L 378 513",
      },
    ],
  },
  F4: {
    start: { x: 521, y: 462 },
    segments: [
      {
        dur: "4.4s",
        path: "M 521 462 L 482 451 L 442 442",
      },
      {
        dur: "2.2s",
        path: "M 442 442 L 432 430 L 420 420",
      },
    ],
  },
  F3: {
    start: { x: 552, y: 542 },
    dur: "7.5s",
    path: "M 552 542 L 552 542",
  },
};

const JULY_21_ANIMATION_PRESETS = {
  BALL: {
    start: { x: 442, y: 664 },
    segments: [
      {
        dur: "5.8s",
        path: "M 442 664 Q 382 358 290 255",
      },
      {
        pause: "0.7s",
      },
      {
        dur: "3.2s",
        path: "M 290 255 L 444 446",
      },
    ],
  },
  R3: {
    start: { x: 341, y: 593 },
    dur: "7.8s",
    path: "M 334 548 L 352 579 L 391 624 L 432 662 L 454 694",
  },
  R2: {
    start: { x: 399, y: 449 },
    dur: "9.1s",
    path:
      "M 399 449 L 387 468 L 376 486 L 369 504 L 363 530 L 359 590 L 384 621 L 417 653 L 454 694",
  },
  BR: {
    start: { x: 442, y: 679 },
    dur: "10.1s",
    path: "M 442 679 Q 506 626 554 557 Q 541 502 444 446",
  },
  F7: {
    start: { x: 250, y: 216 },
    dur: "5.5s",
    path: "M 250 216 L 282 244",
  },
  F5: {
    start: { x: 341, y: 498 },
    dur: "7s",
    path: "M 341 498 L 339 540",
  },
  F6: {
    start: { x: 363, y: 449 },
    dur: "3.2s",
    path: "M 363 449 L 444 446",
  },
};

const JULY_2_ANIMATION_PRESETS = {
  BALL: {
    start: { x: 442, y: 665 },
    segments: [
      {
        dur: "4.5s",
        path: "M 442 665 Q 559 296 627 321",
      },
      {
        pause: "0.1s",
      },
      {
        dur: "1.3s",
        path: "M 627 321 L 553 280",
      },
      {
        pause: "2.4s",
      },
      {
        dur: "2.1s",
        path: "M 553 280 L 432 401",
      },
      {
        pause: "0.2s",
      },
      {
        dur: "1.3s",
        path: "M 432 401 L 334 548",
      },
    ],
  },
  BR: {
    start: { x: 442, y: 679 },
    segments: [
      {
        dur: "4.84s",
        path:
          "M 442 679 L 478 639 L 517 591 L 552 542",
      },
      {
        dur: "4.18s",
        path:
          "M 552 542 L 536 514 L 512 487 L 480 464 L 443 448",
      },
      {
        dur: "3.85s",
        path:
          "M 443 448 L 415 456 L 389 474 L 367 500 L 344 536",
      },
    ],
  },
  F9: {
    start: { x: 678, y: 376 },
    segments: [
      {
        dur: "5.8s",
        path: "M 678 376 L 678 376",
      },
      {
        pause: "0.1s",
      },
      {
        dur: "2.4s",
        path: "M 678 376 L 553 280",
      },
    ],
  },
  F6: {
    start: { x: 352, y: 446 },
    segments: [
      {
        dur: "6.5s",
        path: "M 352 446 L 432 401",
      },
      {
        dur: "4s",
        path: "M 432 401 L 432 401",
      },
    ],
    points: [{ x: 352, y: 446 }, { x: 432, y: 401 }],
  },
  F5: {
    dur: "4s",
    start: { x: 334, y: 475 },
    path: "M 334 475 L 332 552",
    points: [{ x: 334, y: 475 }, { x: 332, y: 552 }],
  },
  GLOVE: {
    start: { x: 678, y: 376 },
    segments: [
      {
        dur: "2.8s",
        path: "M 678 376 L 678 376",
      },
      {
        dur: "1.7s",
        path: "M 678 376 Q 650 338 627 321",
        spin: true,
      },
      {
        pause: "0.1s",
      },
      {
        dur: "1.2s",
        path: "M 627 321 L 620 370",
      },
    ],
  },
};

export const dailyChallenges = [
  {
    id: "2026-07-25-bases-loaded-fpsr",
    date: "2026-07-25",
    mobileCompactReveal: true,
    title: "Does the Run Score?",
    panelTitle: "Bases loaded, no outs. Double-play ball to short.",
    hideDailyPanel: true,
    system: "",
    description:
      "Bases loaded with no outs. B4 grounds to F6, who throws to F4 for the force at second as R3 races home.",
    runners: "Bases Loaded",
    outs: "No Outs",
    ball: "Ground ball to shortstop",
    sport: "Baseball",
    mechanics: "2 Umpire Mechanics",
    summary:
      "Animated two-umpire challenge focused on a potential double play, an illegal slide through second, force-play-slide-rule enforcement, and whether R3's run scores.",
    animationPresets: JULY_25_ANIMATION_PRESETS,
    interferenceCue: {
      x: 442,
      y: 478,
      text: "INTERFERENCE",
      begin: "5.22s",
      duration: "1.35s",
    },
    type: "dual-movement",
    ballFlightPath: "M 442 665 L 423 618 L 403 570 L 388 538 L 378 513",
    prePitchSignal: {
      prompt: "Choose all correct pre-pitch signals for this situation.",
      correctOption: "Staying Home",
      correctOptions: ["No Outs", "Infield Fly Situation", "Staying Home"],
      options: [
        {
          label: "No Outs",
          image: "../scenarios/11-ground-ball-r1/pre-pitch-no-outs.png",
        },
        {
          label: "1 Out",
          image: "../scenarios/11-ground-ball-r1/pre-pitch-one-out.png",
        },
        {
          label: "2 Outs",
          image: "../scenarios/11-ground-ball-r1/pre-pitch-two-outs.png",
        },
        {
          label: "Standard Rotation",
          image: "../scenarios/25-base-hit-r2-r3/pre-pitch-standard-rotation.png",
        },
        {
          label: "Staying Home",
          image: "../scenarios/24-fly-ball-r2-r3/pre-pitch-staying-home.png",
        },
        {
          label: "Infield Fly Situation",
          image: "./pre-pitch-infield-fly-situation.png",
        },
      ],
    },
    explanation:
      "With the bases loaded and no outs, Plate stays home for R3 and possible scoring action. U1 starts inside, reads the ground ball to F6, and moves for an angle on the force play and the slide at second.",
    observationPrompt: "What do you have on this play?",
    observationOptions: [
      {
        text:
          "Delayed dead ball. R1 is out at 2nd and BR is out at 1st. R3's run scores because R3 touched home before the play ended.",
        note:
          "Force-play-slide interference creates an immediate dead ball. R3 returns to third, so the run does not score.",
      },
      {
        text:
          "R1 is out at 2nd for the force. The ball remains live, BR stays at 1st, R2 advances to 3rd, and R3 scores.",
        note:
          "R1's illegal slide interfered with F4's opportunity to complete the double play. This is not simply a force out with play continuing.",
      },
      {
        text:
          "Immediate dead ball. R1 is out for the FPSR violation, and BR is also declared out. R2 returns to 2nd, R3 returns to 3rd, and no run scores.",
        note:
          "Correct. Enforce the force-play slide rule: R1 and BR are out, the ball is dead immediately, and the other runners return to their time-of-pitch bases.",
      },
      {
        text:
          "Delayed dead ball. R1 is out for interference and BR is out for interference. R2 advances to 3rd, and R3 scores.",
        note:
          "The two outs are correct, but this is an immediate dead ball. R2 and R3 return to their time-of-pitch bases.",
      },
    ],
    correctObservationIndex: 2,
    bonusQuestion: {
      title: "Runner placement",
      prompt: "After enforcing the penalty, what is the game situation?",
      options: [
        {
          text: "R2 at 3rd, BR at 1st, 1 out",
          note:
            "The FPSR penalty produces two outs and returns the other runners to their time-of-pitch bases.",
        },
        {
          text: "R2 at 2nd, R3 at 3rd, 2 outs",
          note:
            "Correct. R1 and BR are out, R2 returns to second, R3 returns to third, and no run scores.",
        },
        {
          text: "R2 at 3rd, 2 outs, one run scored",
          note:
            "R2 and R3 return to their time-of-pitch bases, so the apparent run is canceled.",
        },
        {
          text: "Bases empty, 2 outs",
          note:
            "The penalty does not remove R2 or R3; both return to their time-of-pitch bases.",
        },
      ],
      correctIndex: 1,
      scored: true,
    },
    observationScoreDetail: {
      correct:
        "Correctly enforced the force-play slide rule and canceled R3's apparent run.",
      review:
        "Review that FPSR interference creates an immediate dead ball, an out on R1 and BR, and time-of-pitch placement for the other runners.",
    },
    ruleSummary: {
      label: "NFHS 8-4-2b | Force-Play Slide Rule",
      title: "Two outs, runners return, and no run scores",
      body:
        "A runner in a force-play slide situation must slide legally and directly into the base. When R1 slides beyond second and interferes with F4's opportunity to complete the double play, the ball is dead immediately. R1 is out, BR is also declared out, and the remaining runners return to the bases they occupied at the time of the pitch. R2 returns to second, R3 returns to third, and no run scores.",
    },
    answerNotes: [
      {
        heading: "Plate",
        bullets: [
          "Stay home with the bases loaded.",
          "Read R3's touch of home while staying aware of possible interference at 2nd.",
        ],
      },
      {
        heading: "U1",
        bullets: [
          "Move for an angle on the force play at second and possible play at 1st.",
          "Stay connected to R1's slide and F4's opportunity to complete the double play.",
        ],
      },
    ],
    paths: [
      {
        role: "P",
        startAnswer: { x: 444, y: 689 },
        routePoints: [
          { x: 444, y: 689 },
          { x: 444, y: 690 },
        ],
        waypoints: [],
        endAnswer: { x: 444, y: 690 },
      },
      {
        role: "U1",
        startAnswer: { x: 406, y: 515 },
        routePoints: [
          { x: 406, y: 515 },
          { x: 422, y: 484 },
          { x: 438, y: 462 },
        ],
        waypoints: [{ x: 422, y: 484 }],
        endAnswer: { x: 438, y: 462 },
      },
    ],
  },
  {
    id: "2026-07-21-missed-third-r2-r3",
    date: "2026-07-21",
    mobileCompactReveal: true,
    title: "Does the Run Survive the Appeal?",
    panelTitle: "R2, R3, 2 Outs, base hit to left.",
    hideDailyPanel: true,
    system: "",
    description:
      "R2 and R3, 2 outs, base hit to left. R2 misses third on the way home, and the batter-runner is tagged out arriving at second.",
    runners: "R2, R3",
    outs: "2 Outs",
    ball: "Base hit to left field",
    sport: "Baseball",
    mechanics: "2 Umpire Mechanics",
    summary:
      "Animated two-umpire challenge built from the R2/R3 base-hit template, focused on Plate staying home, U1 taking the batter-runner into second, and ruling the two-out timing-play versus appeal situation.",
    animationPresets: JULY_21_ANIMATION_PRESETS,
    type: "dual-movement",
    ballFlightPath: "M 442 664 Q 390 360, 306 283",
    prePitchSignal: {
      prompt: "Choose all correct pre-pitch signals for this situation.",
      correctOption: "Staying Home",
      correctOptions: ["Staying Home", "2 Outs", "Timing Play"],
      options: [
        {
          label: "Standard Rotation",
          image: "../scenarios/25-base-hit-r2-r3/pre-pitch-standard-rotation.png",
        },
        {
          label: "Plate Covers 3rd on Fly",
          image: "../scenarios/25-base-hit-r2-r3/pre-pitch-plate-covers-third.png",
        },
        {
          label: "Staying Home",
          image: "../scenarios/25-base-hit-r2-r3/pre-pitch-staying-home.png",
        },
        {
          label: "No Outs",
          image: "../scenarios/11-ground-ball-r1/pre-pitch-no-outs.png",
        },
        {
          label: "1 Out",
          image: "../scenarios/11-ground-ball-r1/pre-pitch-one-out.png",
        },
        {
          label: "2 Outs",
          image: "../scenarios/11-ground-ball-r1/pre-pitch-two-outs.png",
        },
        {
          label: "Timing Play",
          image: "./pre-pitch-timing-play.png",
        },
      ],
    },
    explanation:
      "With R2 and R3 and two outs on a base hit, Plate stays home for the scoring runners while U1 works inside and prepares for the play on the batter-runner at second.",
    observationPrompt: "R2 clearly misses 3rd. What do you have on this play?",
    observationOptions: [
      {
        text:
          "The batter-runner is the third out, so no run can score once the tag is made at second.",
        note:
          "Not automatically. If BR had already acquired first base, that out is a timing play, so a run can score before the tag.",
      },
      {
        text:
          "Score R2, R3 run as they touched home before BR was tagged at 2nd.",
        note:
          "That is incomplete. The timing play can allow runs to score before the tag, but a proper missed-base appeal on R2 can still wipe out R2's run.",
      },
      {
        text: "Defense appeals touch at 3rd, R2,R3 do not score.",
        note:
          "This goes too far. A proper appeal on R2 missing third wipes out R2's run, but R3 can still score if home was touched before the tag on BR.",
      },
      {
        text: "Defense appeals touch at 3rd, R3 scores. R2 is out on appeal.",
        note:
          "Correct. The tag on BR at second is a timing play, so R3 can score first. Then a proper appeal on R2 missing third retires R2 and removes only R2's run.",
      },
    ],
    correctObservationIndex: 3,
    observationScoreDetail: {
      correct: "Correctly separated the timing play from the later missed-base appeal.",
      review: "Review how the timing play changes if the defense properly appeals the missed base.",
    },
    bonusQuestion: {
      title: "Mechanics follow-up",
      prompt: "Who is responsible for the touch at 3rd?",
      options: [
        {
          text: "Plate Umpire",
          note:
            "Correct. Plate stays home but still owns the scoring runner's touch at third.",
        },
        {
          text: "Base Umpire",
          note:
            "U1 works the batter-runner and play at second; Plate owns R2's touch at third.",
        },
      ],
      correctIndex: 0,
      scored: true,
    },
    ruleSummary: {
      label: "NFHS 9-1-1 Exception | Appeal Play",
      title: "Timing play first, appeal can still erase the run",
      body:
        "With two outs, a tag on the batter-runner after first base is a timing play. If R3 touches home before that out, R3's run counts. If R2 also touches home but missed third, the defense can properly appeal R2 at third and cancel only R2's run.",
    },
    answerNotes: [
      {
        heading: "Plate",
        bullets: [
          "Stay home.",
          "Read R2's touch of third, then get set for any play at the plate.",
          "Watch for a timing play.",
        ],
      },
      {
        heading: "U1",
        bullets: [
          "Move into the working area.",
          "Glance at BR's touch of first and be ready for the play into second.",
        ],
      },
    ],
    paths: [
      {
        role: "P",
        startAnswer: { x: 444, y: 689 },
        routePoints: [
          { x: 444, y: 689 },
          { x: 444, y: 690 },
        ],
        waypoints: [],
        endAnswer: { x: 444, y: 690 },
      },
      {
        role: "U1",
        startAnswer: { x: 408, y: 514 },
        routePoints: [
          { x: 408, y: 514 },
          { x: 434, y: 511 },
        ],
        waypoints: [],
        endAnswer: { x: 434, y: 511 },
      },
    ],
  },
  {
    id: "2026-07-02-detached-equipment",
    date: "2026-07-02",
    mobileCompactReveal: true,
    title: "Detached Glove? Now What?",
    panelTitle: "No runners, no outs. Lazy fly ball to right.",
    hideDailyPanel: true,
    system: "",
    description:
      "No runners, no outs. B1 hits a lazy fair fly ball over F9's head in right field.",
    runners: "No Runners",
    outs: "No Outs",
    ball: "Lazy fly ball to right field.",
    sport: "Baseball",
    mechanics: "2 Umpire Mechanics",
    summary:
      "Animated two-umpire challenge focused on Plate reading a trouble ball to right, U1 pivoting with the batter-runner, and applying the three-base detached-equipment award.",
    animationPresets: JULY_2_ANIMATION_PRESETS,
    attachedGloveImage: "./baseball-glove-hand-drawn.png",
    type: "dual-movement",
    ballFlightPath: "M 442 665 Q 559 296 627 321",
    explanation:
      "With no runners and a trouble ball to right, Plate comes out for catch/no-catch, ball status, and the detached-equipment violation. U1 pivots in, observes the batter-runner's touch of first, and reacts to the batter-runner returning to first or advancing.",
    observationPrompt:
      "F9 intentionally throws his detached glove, and the glove contacts the fair batted ball in right field. What is the correct ruling?",
    observationOptions: [
      {
        text:
          "Detached-equipment obstruction. B1 is awarded two bases at the conclusion of play. B1 advances to 3rd at the player's own risk.",
        note:
          "This is detached equipment, not obstruction, and the award for a fair batted ball is three bases from the time of pitch.",
      },
      {
        text:
          "Detached-equipment violation. The umpire should announce, \"Dead ball!\" immediately and award B1 2nd base.",
        note:
          "The ball is not killed immediately, and the award is not two bases on a fair batted ball touched by detached equipment.",
      },
      {
        text:
          "Detached-equipment violation. The umpire should announce, \"Dead ball!\" immediately and award B1 3rd base.",
        note:
          "The base award is third, but the ball is not dead immediately. Let playing action continue before administering the award.",
      },
      {
        text:
          "The umpire should point at the detached-equipment violation and allow play to continue. Since B1 was tagged out at 3rd, the umpire shall award B1 3rd base. B1 may advance beyond 3rd at his own risk.",
        note:
          "Correct. Intentionally thrown detached player equipment that contacts a fair batted ball results in a three-base award from the time of pitch, with play allowed to continue.",
      },
    ],
    correctObservationIndex: 3,
    bonusQuestion: {
      title: "Bonus question",
      prompt: "Who would most likely see the detached-equipment violation?",
      options: [
        {
          text: "Plate Umpire",
          note:
            "Correct. Plate has the best look at the trouble ball and detached-equipment contact in right field. Plate is moving out to observe catch/no-catch, while U1 is pivoting in to observe B1's touch of first.",
        },
        {
          text: "Base Umpire",
          note:
            "U1 is pivoting with the batter-runner and may not have the best look at the detached-equipment contact.",
        },
      ],
      correctIndex: 0,
    },
    observationScoreDetail: {
      correct:
        "Correctly applied the detached-equipment award: three bases from the time of pitch.",
      review:
        "Review that intentionally thrown detached player equipment must contact the ball to create the award.",
    },
    ruleSummary: {
      label: "NFHS 8-3-3b",
      title: "Detached equipment touching a fair batted ball",
      body:
        "When a fielder intentionally throws detached player equipment and it touches a fair batted ball, the batter and all runners are awarded three bases from the time of pitch. This is not an immediate dead ball; signal the violation and allow play to continue before administering the award. With no runners, B1 is awarded third base. If the thrown glove does not touch the ball, there is no detached-equipment award.",
    },
    answerNotes: [
      {
        heading: "Plate",
        bullets: [
          "Come out in the general direction of the batted ball.",
          "Come out no further than an imaginary line between 1st and 3rd on a routine catch/no catch.",
          "On a difficult catch/no catch, move out as far as possible.",
          "Obtain the best angle to observe the catch/no catch.",
          "Be stopped to make all calls.",
          "Do not need to give a signal on a routine play, but should inform U1, \"That's a catch.\" or \"Ball's down.\"",
        ],
      },
      {
        heading: "U1",
        bullets: [
          "Pivot and observe the BR's touch of 1st.",
          "React to BR going back into 1st or advancing to 2nd.",
        ],
      },
    ],
    paths: [
      {
        role: "P",
        startAnswer: { x: 442, y: 688 },
        routePoints: [
          { x: 442, y: 688 },
          { x: 473, y: 586 },
        ],
        waypoints: [],
        endAnswer: { x: 473, y: 586 },
      },
      {
        role: "U1",
        startAnswer: { x: 611, y: 533 },
        routePoints: [
          { x: 611, y: 533 },
          { x: 506, y: 542 },
          { x: 461, y: 505 },
          { x: 437, y: 496 },
          { x: 406, y: 505 },
          { x: 370, y: 548 },
        ],
        waypoints: [
          { x: 506, y: 542 },
          { x: 461, y: 505 },
          { x: 437, y: 496 },
          { x: 406, y: 505 },
        ],
        endAnswer: { x: 370, y: 548 },
      },
    ],
  },
  {
    id: "2026-07-01-r2-r3-deep-right-tag-appeal",
    date: "2026-07-01",
    mobileCompactReveal: true,
    title: "R2 leaves early!",
    panelTitle: "R2 and R3, 1 out. Deep fly ball to right.",
    hideDailyPanel: true,
    system: "",
    description:
      "R3 is on third and R2 is on second with 1 out. B3 hits a deep fly ball to the right-field line.",
    runners: "R2, R3",
    outs: "1 Out",
    ball: "Deep fly ball caught in right field; live-ball appeal at second.",
    sport: "Baseball",
    mechanics: "2 Umpire Mechanics",
    summary:
      "Animated two-umpire challenge focused on tag-up responsibility, a live-ball appeal at second base, and the timing-play ruling when R2 leaves early on a caught fly ball with R3 scoring.",
    animationPresets: JULY_1_ANIMATION_PRESETS,
    type: "dual-movement",
    ballFlightPath: "M 442 665 Q 570 365 718 269",
    prePitchSignal: {
      prompt: "Choose all correct pre-pitch signals for this situation.",
      correctOption: "Staying Home",
      correctOptions: ["1 Out", "Staying Home"],
      options: [
        {
          label: "No Outs",
          image: "../scenarios/11-ground-ball-r1/pre-pitch-no-outs.png",
        },
        {
          label: "1 Out",
          image: "../scenarios/11-ground-ball-r1/pre-pitch-one-out.png",
        },
        {
          label: "2 Outs",
          image: "../scenarios/11-ground-ball-r1/pre-pitch-two-outs.png",
        },
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
      ],
    },
    explanation:
      "With R2 and R3 and fewer than 2 outs, Plate stays home for the scoring runner and timing responsibility. U1 stays connected to the catch, R2's tag-up/retouch responsibility, and the live-ball appeal at second.",
    observationPrompt: "What did you see in the play?",
    observationOptions: [
      {
        text: "BR is out on catch. R2 is out on force at 2nd. Inning over.",
        note:
          "This treats the retouch appeal like a force out. A runner leaving early on a caught fly ball is handled by appeal, not a force play.",
      },
      {
        text: "R2 is out on force at 2nd. R3 scores. Inning over.",
        note:
          "This gets the run-scoring timing right, but the out at second is not a force. The batter-runner is also out on the catch.",
      },
      {
        text:
          "BR is out on catch. R2 is out on live ball appeal. R3 scores.",
        note:
          "Correct. The catch is the second out, and the successful live-ball appeal at second can be the third out. Since this is a timing play, R3's run scores if R3 touched home before the appeal out.",
      },
      {
        text:
          "BR is out on catch. R2 is out on live ball appeal. R3 does not score.",
        note:
          "The appeal part is right, but a retouch appeal is a timing play. Because R3 touched home before the appeal out, the run scores.",
      },
    ],
    correctObservationIndex: 2,
    bonusQuestion: {
      title: "Bonus question",
      prompt:
        "What if R2 successfully retouched second before F6 received the throw and appealed?",
      options: [
        {
          text:
            "R2 would still be out because he originally left before the catch.",
          note:
            "A runner can correct the error by retouching before the defense completes its appeal.",
        },
        {
          text:
            "R2 would no longer be out for leaving early, and play would continue with runners at their resulting bases.",
          note:
            "Correct. Retouching the base before the appeal corrects the leaving-early violation.",
        },
        {
          text:
            "The ball would become dead and R2 and R3 would return to their time-of-pitch bases.",
          note:
            "There is no automatic dead ball or return simply because a runner retouches.",
        },
        {
          text:
            "The batter-runner would be called out instead because the defense threw behind R2.",
          note:
            "The batter-runner was already out on the caught fly ball; the appeal concerns R2's tag-up responsibility.",
        },
      ],
      correctIndex: 1,
    },
    observationScoreDetail: {
      correct:
        "Correctly ruled the live-ball appeal as a timing play: R2 is out at second, and R3's run scores if R3 touched home before the appeal.",
      review:
        "Review tag-up appeal timing: the defense may appeal a runner leaving early on a caught fly ball by tagging the runner or the base before the runner legally retouches.",
    },
    ruleSummary: {
      label: "NFHS 8-2-6 | 8-2-7",
      title: "Leaving early on a caught fly ball is an appeal play",
      body:
        "After a caught fly ball, a runner must retouch the time-of-pitch base before advancing. If the runner leaves early, the ball remains live and the defense may appeal by tagging the runner or the base missed/left early before the runner legally retouches. Here, the catch is the second out and the successful appeal at second retires R2 for the third out. Because a retouch appeal is not a force out, R3's run scores if R3 touched home before the appeal out.",
    },
    answerNotes: [
      {
        heading: "Plate",
        bullets: [
          "Move into position to observe R3's tag at 3rd.",
          "Retreat to home.",
        ],
      },
      {
        heading: "U1",
        bullets: [
          "Move into position to rule on the catch/no catch.",
          "Make the catch/no catch call.",
          "Observe R2's tag at 2nd.",
          "Move into position to take R2 back into 2nd or into 3rd.",
        ],
      },
    ],
    paths: [
      {
        role: "P",
        startAnswer: { x: 442, y: 690 },
        routePoints: [
          { x: 442, y: 690 },
          { x: 461, y: 681 },
        ],
        waypoints: [],
        endAnswer: { x: 461, y: 681 },
      },
      {
        role: "U1",
        startAnswer: { x: 406, y: 511 },
        routePoints: [
          { x: 406, y: 511 },
          { x: 473, y: 512 },
        ],
        waypoints: [],
        endAnswer: { x: 473, y: 512 },
      },
    ],
  },
  {
    id: "2026-06-30-throw-hits-batter-runner",
    date: "2026-06-30",
    mobileCompactReveal: true,
    title: "Throw Hits the Batter-Runner",
    panelTitle: "R3 only. Ground ball to F3 beyond first.",
    hideDailyPanel: true,
    system: "",
    description:
      "R3 is on third base with 2 outs. B2 hits a sharp fair ground ball up the first-base line to F3, who fields the ball beyond first base. F3 throws to F2 attempting to retire R3 at the plate. The throw hits B2, who is running on the foul line.",
    runners: "R3",
    outs: "2 Outs",
    ball: "Throw home hits B2 on the foul line.",
    sport: "Baseball",
    mechanics: "2 Umpire Mechanics",
    summary:
      "Animated two-umpire challenge focused on NFHS 8.4.1 Situation C and why the runner's-lane rule does not apply to F3's throw home.",
    animationPresets: JUNE_30_ANIMATION_PRESETS,
    type: "dual-movement",
    ballFlightPath: "M 442 665 L 489 606 L 538 547 L 607 502",
    prePitchSignal: {
      prompt: "Choose all correct pre-pitch signals for this situation.",
      correctOption: "Staying Home",
      correctOptions: ["2 Outs", "Staying Home", "Timing Play"],
      options: [
        {
          label: "No Outs",
          image: "../scenarios/11-ground-ball-r1/pre-pitch-no-outs.png",
        },
        {
          label: "1 Out",
          image: "../scenarios/11-ground-ball-r1/pre-pitch-one-out.png",
        },
        {
          label: "2 Outs",
          image: "../scenarios/11-ground-ball-r1/pre-pitch-two-outs.png",
        },
        {
          label: "Standard Rotation",
          image: "../scenarios/26-fly-ball-r1-r2-r3/pre-pitch-standard-rotation.png",
        },
        {
          label: "Plate Covers 3rd on Fly",
          image: "../scenarios/26-fly-ball-r1-r2-r3/pre-pitch-plate-covers-third.png",
        },
        {
          label: "Staying Home",
          image: "../scenarios/26-fly-ball-r1-r2-r3/pre-pitch-staying-home.png",
        },
        {
          label: "Timing Play",
          image: "./pre-pitch-timing-play.png",
        },
      ],
    },
    explanation:
      "With R3 only and 2 outs, Plate stays home for the play at the plate and must judge whether B2's contact with F3's throw is interference. U1 reads the sharp ground ball up the first-base line, works the first-base side, and can help if asked on the batter-runner's position.",
    observationPrompt:
      "F3's throw home hits B2 while B2 is running on the foul line. What is the correct ruling?",
    observationOptions: [
      {
        text:
          "Runner's-lane interference under 8-4-1g. B2 is out and R3 returns to third.",
        note:
          "8-4-1g does not apply because the defense is not making a play on B2 at first base.",
      },
      {
        text:
          "No interference. The ball remains live because no play is being made on B2 at first base.",
        note:
          "Correct. This follows NFHS 8.4.1 Situation C: B2 has not interfered, and 8-4-1g does not apply.",
      },
      {
        text:
          "Dead ball immediately. B2 is awarded first and R3 is awarded home.",
        note:
          "There is no base award simply because the throw contacts B2. The case play treats this as no interference.",
      },
      {
        text:
          "Interference because B2 is outside the running lane when the throw contacts him.",
        note:
          "The running-lane restriction is tied to a play at first base. This throw is to F2 at the plate.",
      },
    ],
    correctObservationIndex: 1,
    bonusQuestion: {
      title: "Bonus question",
      prompt:
        "Had B2 intentionally made contact with F3's throw, what would be the proper ruling?",
      options: [
        {
          text:
            "The ball is dead. B2 is out for interference, and the umpire returns R3 to third.",
          note:
            "This misses the possibility that R3 can also be called out if B2's interference prevented a possible out on R3.",
        },
        {
          text:
            "The ball is dead. B2 is out for interference, and the umpire could also call R3 out if B2's interference prevented a possible out on R3. Otherwise, R3 returns to third.",
          note:
            "Correct. Intentional interference changes the play: B2 is out, the ball is dead, and R3 is handled based on whether the interference prevented a play on R3.",
        },
        {
          text:
            "B2 is out for interference and the ball is delayed dead. The defense still has an opportunity to get R3 out.",
          note:
            "Intentional interference creates an immediate dead ball; this is not a delayed-dead-ball play.",
        },
        {
          text:
            "Only B2 can be declared out. R3 must always return to third and can never be called out.",
          note:
            "The umpire could call R3 out if B2's intentional interference prevented a possible out on R3.",
        },
      ],
      correctIndex: 1,
    },
    observationScoreDetail: {
      correct: "Correctly applied NFHS 8.4.1 Situation C: no interference and 8-4-1g does not apply.",
      review:
        "Review that 8-4-1g applies when there is a play on the batter-runner at first base.",
    },
    ruleSummary: {
      label: "NFHS 8.4.1 Situation C",
      title: "No play at first: 8-4-1g does not apply",
      body:
        "NFHS 8.4.1 Situation C rules this as no interference. The key is that F3's throw is to F2 for a play on R3 at the plate, not a play on B2 at first base. Since no play is being made on B2 at first, the runner's-lane provision in 8-4-1g does not apply.",
    },
    answerNotes: [
      {
        heading: "Plate",
        bullets: [
          "Stay home with R3 and square up the developing play at the plate.",
        ],
      },
      {
        heading: "U1",
        bullets: [
          "Read the ground ball to F3 and move for the batter-runner's touch and any possible play at first.",
          "Stay aware of B2's running lane in case Plate asks for help on the contact with the throw.",
        ],
      },
    ],
    paths: [
      {
        role: "P",
        startAnswer: { x: 442, y: 692 },
        routePoints: [
          { x: 442, y: 692 },
          { x: 426, y: 666 },
        ],
        waypoints: [],
        endAnswer: { x: 426, y: 666 },
      },
      {
        role: "U1",
        startAnswer: { x: 404, y: 514 },
        routePoints: [
          { x: 404, y: 514 },
          { x: 500, y: 526 },
        ],
        waypoints: [],
        endAnswer: { x: 500, y: 526 },
      },
    ],
  },
  {
    id: "2026-06-27-loaded-f3-catch-and-carry",
    date: "2026-06-27",
    mobileCompactReveal: true,
    title: "Designated Media Area?",
    panelTitle: "Bases loaded, 1 out. Fly ball to F3.",
    hideDailyPanel: true,
    system: "",
    description:
      "Bases loaded, 1 out. The batter hits a fly ball near first base. F3 catches the ball then his momentum carries him into a designated media area.",
    runners: "Bases Loaded",
    outs: "1 Out",
    ball: "Fly ball caught by F3, then carried into a designated media area.",
    sport: "Baseball",
    mechanics: "2 Umpire Mechanics",
    summary:
      "Animated two-umpire challenge focused on a legal catch by F3 followed by catch-and-carry into a designated media area, with the proper dead-ball award from bases loaded.",
    animationPresets: JUNE_27_ANIMATION_PRESETS,
    mediaAreaBoundary: {
      points: [
        { x: 630, y: 592 },
        { x: 616, y: 577 },
        { x: 677, y: 518 },
        { x: 692, y: 537 },
      ],
    },
    type: "dual-movement",
    ballFlightPath: "M 442 665 Q 520 438 630 538",
    prePitchSignal: {
      prompt: "Choose all correct pre-pitch signals for this situation.",
      correctOption: "Staying Home",
      correctOptions: ["1 Out", "Staying Home", "Infield Fly Situation"],
      options: [
        {
          label: "No Outs",
          image: "../scenarios/11-ground-ball-r1/pre-pitch-no-outs.png",
        },
        {
          label: "1 Out",
          image: "../scenarios/11-ground-ball-r1/pre-pitch-one-out.png",
        },
        {
          label: "2 Outs",
          image: "../scenarios/11-ground-ball-r1/pre-pitch-two-outs.png",
        },
        {
          label: "Standard Rotation",
          image: "../scenarios/26-fly-ball-r1-r2-r3/pre-pitch-standard-rotation.png",
        },
        {
          label: "Plate Covers 3rd on Fly",
          image: "../scenarios/26-fly-ball-r1-r2-r3/pre-pitch-plate-covers-third.png",
        },
        {
          label: "Staying Home",
          image: "../scenarios/26-fly-ball-r1-r2-r3/pre-pitch-staying-home.png",
        },
        {
          label: "Infield Fly Situation",
          image: "./pre-pitch-infield-fly-situation.png",
        },
      ],
    },
    explanation:
      "With bases loaded and a caught fly ball, Plate stays home for the scoring runner and timing responsibilities. U1 reads the catch near first base, judges F3's entry into dead-ball territory, and helps administer the award.",
    observationPrompt:
      "F3 secures the fly ball in live-ball territory, then his momentum carries him into a designated media. What is the ruling?",
    observationOptions: [
      {
        text:
          "Foul ball. F3's momentum carried him into the media area.",
        note:
          "The catch was completed before F3 entered the media area. The batter-runner is out.",
      },
      {
        text:
          "Legal catch. BR is out. The ball remains live after F3's momentum carries him into the media area.",
        note:
          "Once F3 carries the ball into dead-ball territory with both feet, the ball becomes dead.",
      },
      {
        text:
          "Catch. BR is out. The ball is dead when one whole foot enters the media area. Award all runners one base from the time of pitch.",
        note:
          "The catch is legal, but the ball does not become dead until both feet enter the media area.",
      },
      {
        text:
          "Catch. BR is out. The ball is dead when both feet enter the media area. Award all runners one base from the time of pitch.",
        note:
          "Correct. This is a legal catch followed by catch-and-carry into dead-ball territory.",
      },
    ],
    correctObservationIndex: 3,
    observationScoreDetail: {
      correct: "Correctly ruled catch, dead ball, and a one-base catch-and-carry award.",
      review:
        "Review the difference between a thrown ball out of play and a fielder carrying a caught ball into dead-ball territory.",
    },
    ruleSummary: {
      label: "NFHS 5-1-1i | 8-3-3d",
      title: "Catch-and-carry: one-base award",
      body:
        "The catch is legal because F3 had secure possession before entering dead-ball territory. When F3 then enters the designated media area/dead-ball territory with both feet, the ball becomes dead. Since this is an unintentional catch-and-carry/dead-ball territory play, each runner is awarded one base from the time of the pitch. R3 scores, R2 goes to third, R1 goes to second, and the batter-runner is out on the catch.",
    },
    answerNotes: [
      {
        heading: "Plate",
        bullets: [
          "Stay home with bases loaded and the fly ball near first-base dead-ball territory.",
          "Read R3's tag/touch responsibilities.",
        ],
      },
      {
        heading: "U1",
        bullets: [
          "Move to see the catch/no-catch by F3 near the first-base side.",
          "After the catch, keep eyes on F3 and designated media area.",
        ],
      },
    ],
    paths: [
      {
        role: "P",
        startAnswer: { x: 442, y: 692 },
        routePoints: [
          { x: 442, y: 692 },
          { x: 504, y: 694 },
        ],
        waypoints: [],
        endAnswer: { x: 504, y: 694 },
      },
      {
        role: "U1",
        startAnswer: { x: 404, y: 514 },
        routePoints: [
          { x: 404, y: 514 },
          { x: 469, y: 531 },
        ],
        waypoints: [],
        endAnswer: { x: 469, y: 531 },
      },
    ],
  },
  {
    id: "2026-05-30-r1-ground-ball-force-overthrow",
    date: "2026-05-30",
    mobileCompactReveal: true,
    title: "Out of Play, Base Award?",
    panelTitle: "R1, 1 out. Ground ball to short.",
    hideDailyPanel: true,
    system: "",
    description:
      "R1, 1 out. The batter hits a ground ball to F6. F6 throws to F4 for the force at second, then F4 throws wildly to first and the ball goes into dead-ball territory.",
    runners: "R1",
    outs: "1 Out",
    ball: "Ground ball to F6, force at second, overthrow to first.",
    sport: "Baseball",
    mechanics: "2 Umpire Mechanics",
    summary:
      "Animated two-umpire challenge focused on the force play at second, U1 staying with the throw to first, and applying the correct two-base award after a subsequent infielder throw goes out of play.",
    animationPresets: MAY_30_ANIMATION_PRESETS,
    type: "dual-movement",
    ballFlightPath: "M 442 665 L 421 617 L 399 563 L 382 515 L 372 482",
    prePitchSignal: {
      prompt: "Choose all correct pre-pitch signals for this situation.",
      correctOption: "Standard Rotation",
      correctOptions: ["Standard Rotation", "1 Out"],
      options: [
        {
          label: "No Outs",
          image: "../scenarios/11-ground-ball-r1/pre-pitch-no-outs.png",
        },
        {
          label: "1 Out",
          image: "../scenarios/11-ground-ball-r1/pre-pitch-one-out.png",
        },
        {
          label: "2 Outs",
          image: "../scenarios/11-ground-ball-r1/pre-pitch-two-outs.png",
        },
        {
          label: "Standard Rotation",
          image: "../scenarios/11-ground-ball-r1/pre-pitch-standard-rotation.png",
        },
        {
          label: "Plate Covers 3rd on Fly",
          image: "../scenarios/11-ground-ball-r1/pre-pitch-plate-covers-third.png",
        },
        {
          label: "Staying Home",
          image: "../scenarios/11-ground-ball-r1/pre-pitch-staying-home.png",
        },
      ],
    },
    explanation:
      "With R1 only, U1 starts in the middle, reads the ground ball, gets the force play at second, then pivots with the throw to first. Plate stays home and is ready to help administer the dead-ball award.",
    observationPrompt:
      "F6 throws to F4 for the force at second. The batter-runner touches first just before F4 releases a throw that goes into dead-ball territory. Where do you place the runners?",
    observationOptions: [
      {
        text:
          "R1 is out at second, and the batter-runner is awarded first base.",
        note:
          "The force out at second stands, but the batter-runner gets a two-base award from the time F4 released the throw.",
      },
      {
        text:
          "R1 is out at second, and the batter-runner is awarded second base.",
        note:
          "This would be correct only if the batter-runner had not reached first at the time of F4's throw. Here, the batter-runner touched first before the release.",
      },
      {
        text:
          "R1 is out at second, and the batter-runner is awarded third base.",
        note:
          "Correct. The force at second stands. F4's throw was a subsequent play by an infielder, so awards are two bases from time of throw. Because the batter-runner had reached first before the release, award third.",
      },
      {
        text:
          "R1 is out at second, and there is no base award for the batter-runner.",
        note:
          "The force out stands, but F4's throw went into dead-ball territory. The batter-runner must receive the proper two-base award from the time of that throw.",
      },
    ],
    correctObservationIndex: 2,
    observationScoreDetail: {
      correct: "Correctly kept the force out and awarded the batter-runner third.",
      review:
        "Review the difference between the first play by an infielder and a subsequent throw by an infielder, then award from the runner's position at time of throw.",
    },
    ruleSummary: {
      label: "NFHS 8-3-3c",
      title: "Subsequent throw: two bases from time of throw",
      body:
        "R1 is out on the force at second. F4's throw to first is a subsequent play by an infielder because F6's throw to second was the first play. When F4's throw goes into dead-ball territory, award two bases from the time of F4's throw. Since the batter-runner touched first before F4 released the throw, place the batter-runner at third.",
    },
    answerNotes: [
      {
        heading: "Plate",
        bullets: [
          "Move into infield to watch for runner interference at 2nd on an illegal slide.",
          "Observe back end of DP for swipe tag, pulled foot and overthrow. Do not rotate to third base.",
        ],
      },
      {
        heading: "U1",
        bullets: [
          "Turn with the batted ball, facing the ball.",
          "React to the throw and line up to make the call at 2nd on the front end of the possible DP.",
          "Watch for runner interference at 2nd on an illegal slide.",
          "Turn toward 1st as the fielder throws.",
          "Come set, observe the play, make the call.",
          "Has all calls at 1st, 2nd and 3rd.",
        ],
      },
    ],
    paths: [
      {
        role: "P",
        startAnswer: { x: 440, y: 691 },
        routePoints: [
          { x: 440, y: 691 },
          { x: 429, y: 680 },
          { x: 438, y: 617 },
        ],
        waypoints: [{ x: 429, y: 680 }],
        endAnswer: { x: 438, y: 617 },
      },
      {
        role: "U1",
        startAnswer: { x: 470, y: 507 },
        routePoints: [
          { x: 470, y: 507 },
          { x: 467, y: 525 },
          { x: 482, y: 534 },
        ],
        waypoints: [{ x: 467, y: 525 }],
        endAnswer: { x: 482, y: 534 },
      },
    ],
  },
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
