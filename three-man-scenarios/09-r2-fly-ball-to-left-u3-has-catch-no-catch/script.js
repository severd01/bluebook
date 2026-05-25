window.THREE_MAN_SCENARIO = {
  "title": "R2, Fly Ball To Left",
  "system": "3-Man Mechanics",
  "description": "Runner on second fly ball to left.",
  "runners": "Runner on 2nd",
  "outs": "Any Outs",
  "ball": "Fly ball to left field",
  "type": "triple-movement",
  "ballFlightPath": "M 442 664 C 408 560, 344 402, 276 316 C 256 292, 242 280, 228 270",
  "prompt": "Draw the umpire movement paths.",
  "explanation": "",
  "answerNotes": [
    {
      "heading": "Plate",
      "bullets": [
        "Stay home.",
        "Keep the plate available while U3 stays out on the ball."
      ]
    },
    {
      "heading": "U1",
      "bullets": [
        "Be prepared to take all touches and plays at first, second, and third.",
        "Fall back to the working area and let the ball take you to the play.",
        "Watch the runners' touches as the advance unfolds."
      ]
    },
    {
      "heading": "U3",
      "bullets": [
        "Move out on the ball and get the best possible angle for the catch/no-catch.",
        "Come set before the call and give a verbal or visual signal if needed.",
        "Do not return to the infield after going out."
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
          "x": 442,
          "y": 692
        },
        {
          "x": 442,
          "y": 686
        }
      ],
      "waypoints": [
        {
          "x": 442,
          "y": 692
        }
      ],
      "endAnswer": {
        "x": 442,
        "y": 686
      }
    },
    {
      "role": "U1",
      "startAnswer": {
        "x": 462,
        "y": 484
      },
      "routePoints": [
        {
          "x": 462,
          "y": 484
        },
        {
          "x": 456,
          "y": 527
        },
        {
          "x": 373,
          "y": 545
        }
      ],
      "answerSegments": [
        {
          "points": [
            {
              "x": 462,
              "y": 484
            },
            {
              "x": 456,
              "y": 527
            }
          ]
        },
        {
          "points": [
            {
              "x": 456,
              "y": 527
            },
            {
              "x": 373,
              "y": 545
            }
          ],
          "dashed": true
        }
      ],
      "waypoints": [
        {
          "x": 456,
          "y": 527
        }
      ],
      "endAnswer": {
        "x": 373,
        "y": 545
      }
    },
    {
      "role": "U3",
      "startAnswer": {
        "x": 256,
        "y": 592
      },
      "routePoints": [
        {
          "x": 256,
          "y": 592
        },
        {
          "x": 236,
          "y": 534
        },
        {
          "x": 210,
          "y": 386
        }
      ],
      "waypoints": [
        {
          "x": 236,
          "y": 534
        }
      ],
      "endAnswer": {
        "x": 210,
        "y": 386
      }
    }
  ],
  "runnerMarkers": [
    {
      "label": "R2",
      "x": 395,
      "y": 457
    }
  ]
};
