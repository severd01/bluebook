window.THREE_MAN_SCENARIO = {
  "title": "R1, R2, R3, routine fly ball to right.",
  "system": "3-Man Mechanics",
  "description": "Bases loaded, fly ball with U1 reading routine fly ball.",
  "runners": "Bases Loaded",
  "outs": "Any Outs",
  "ball": "Fly ball to right field",
  "type": "triple-movement",
  "ballFlightPath": "M 442 664 C 470 560, 545 390, 612 314 C 630 294, 642 282, 650 276",
  "prompt": "Draw the umpire movement paths.",
  "explanation": "",
  "answerNotes": [
    {
      "heading": "Plate",
      "bullets": [
        "Line up the tag of R3 at third.",
        "Get into position for a possible play at the plate."
      ]
    },
    {
      "heading": "U1",
      "bullets": [
        "Pause, read, and react.",
        "If the ball is a trouble ball, go out and do not return to the infield.",
        "If it is routine, move toward the coach's box to line up R1's possible tag and take all plays at first."
      ]
    },
    {
      "heading": "U3",
      "bullets": [
        "Be prepared to take all touches and plays at second and all plays at third.",
        "If U1 goes out, also take all plays at first and the tag-ups of R2 and R1."
      ]
    }
  ],
  "paths": [
    {
      "role": "P",
      "startAnswer": {
        "x": 442,
        "y": 693
      },
      "routePoints": [
        {
          "x": 442,
          "y": 693
        },
        {
          "x": 414,
          "y": 695
        },
        {
          "x": 441,
          "y": 704
        }
      ],
      "answerSegments": [
        {
          "points": [
            {
              "x": 442,
              "y": 693
            },
            {
              "x": 414,
              "y": 695
            }
          ]
        },
        {
          "points": [
            {
              "x": 414,
              "y": 695
            },
            {
              "x": 441,
              "y": 704
            }
          ],
          "dashed": true
        }
      ],
      "waypoints": [
        {
          "x": 414,
          "y": 695
        }
      ],
      "endAnswer": {
        "x": 441,
        "y": 704
      }
    },
    {
      "role": "U1",
      "startAnswer": {
        "x": 605,
        "y": 540
      },
      "routePoints": [
        {
          "x": 605,
          "y": 540
        },
        {
          "x": 583,
          "y": 577
        }
      ],
      "waypoints": [],
      "endAnswer": {
        "x": 583,
        "y": 577
      }
    },
    {
      "role": "U3",
      "startAnswer": {
        "x": 418,
        "y": 497
      },
      "routePoints": [
        {
          "x": 418,
          "y": 497
        },
        {
          "x": 430,
          "y": 511
        },
        {
          "x": 402,
          "y": 511
        }
      ],
      "answerSegments": [
        {
          "points": [
            {
              "x": 418,
              "y": 497
            },
            {
              "x": 430,
              "y": 511
            }
          ]
        },
        {
          "points": [
            {
              "x": 430,
              "y": 511
            },
            {
              "x": 402,
              "y": 511
            }
          ],
          "dashed": true
        }
      ],
      "waypoints": [
        {
          "x": 430,
          "y": 511
        }
      ],
      "endAnswer": {
        "x": 402,
        "y": 511
      }
    }
  ],
  "runnerMarkers": [
    {
      "label": "R1",
      "x": 538,
      "y": 504
    },
    {
      "label": "R2",
      "x": 385,
      "y": 453
    },
    {
      "label": "R3",
      "x": 343,
      "y": 596
    }
  ]
};
