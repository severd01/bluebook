window.THREE_MAN_SCENARIO = {
  "title": "R1,R3, Fly Ball",
  "system": "3-Man Mechanics",
  "description": "Runners on first and third, fly ball.",
  "runners": "Runners on 1st and 3rd",
  "outs": "Any Outs",
  "ball": "Fly ball to the outfield",
  "type": "triple-movement",
  "ballFlightPath": "M 442 664 C 408 560, 344 402, 276 316 C 256 292, 242 280, 228 270",
  "prompt": "Draw the umpire movement paths.",
  "explanation": "",
  "answerNotes": [
    {
      "heading": "Plate",
      "bullets": [
        "Line up the tag of R3 at third base.",
        "Get into position for any plays at the plate."
      ]
    },
    {
      "heading": "U1",
      "bullets": [
        "Move into the infield.",
        "Be prepared to take R1 back into first or the batter-runner into first or second if the ball is dropped."
      ]
    },
    {
      "heading": "U3",
      "bullets": [
        "Move into position to get the best possible angle for the catch/no-catch.",
        "Give a visual and audible signal if needed.",
        "Have the play on R1 at second and all plays at third."
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
          "x": 522,
          "y": 536
        },
        {
          "x": 486,
          "y": 525
        }
      ],
      "waypoints": [
        {
          "x": 522,
          "y": 536
        }
      ],
      "endAnswer": {
        "x": 486,
        "y": 525
      }
    },
    {
      "role": "U3",
      "startAnswer": {
        "x": 413,
        "y": 500
      },
      "routePoints": [
        {
          "x": 413,
          "y": 500
        },
        {
          "x": 432,
          "y": 518
        }
      ],
      "waypoints": [],
      "endAnswer": {
        "x": 432,
        "y": 518
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
