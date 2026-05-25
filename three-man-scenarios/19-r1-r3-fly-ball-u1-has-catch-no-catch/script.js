window.THREE_MAN_SCENARIO = {
  "title": "R1,R3, Trouble ball",
  "system": "3-Man Mechanics",
  "description": "Runners on first and third, fly ball with U1 reading trouble.",
  "runners": "Runners on 1st and 3rd",
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
        "Return home because there are no rotations at the plate."
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
        "If U1 goes out, also take all plays at first and the tag-up of R1."
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
        "x": 604,
        "y": 537
      },
      "routePoints": [
        {
          "x": 604,
          "y": 537
        },
        {
          "x": 632,
          "y": 490
        },
        {
          "x": 666,
          "y": 370
        }
      ],
      "waypoints": [
        {
          "x": 632,
          "y": 490
        }
      ],
      "endAnswer": {
        "x": 666,
        "y": 370
      }
    },
    {
      "role": "U3",
      "startAnswer": {
        "x": 409,
        "y": 507
      },
      "routePoints": [
        {
          "x": 409,
          "y": 507
        },
        {
          "x": 409,
          "y": 508
        }
      ],
      "waypoints": [],
      "endAnswer": {
        "x": 409,
        "y": 508
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
      "label": "R3",
      "x": 343,
      "y": 596
    }
  ]
};
