window.THREE_MAN_SCENARIO = {
  "title": "R1 R2 Fly Ball Right, U1 Stays In",
  "system": "3-Man Mechanics",
  "description": "Runners on first and second, routine fly ball to right with U1 not going out.",
  "runners": "Runners on 1st and 2nd",
  "outs": "Any Outs",
  "ball": "Routine fly ball to right field",
  "type": "triple-movement",
  "ballFlightPath": "M 442 664 C 470 560, 545 390, 612 314 C 630 294, 642 282, 650 276",
  "prompt": "Draw the umpire movement paths.",
  "explanation": "",
  "answerNotes": [
    {
      "heading": "Plate",
      "bullets": [
        "Move up the third-base line in foul territory.",
        "If the ball is caught, move all the way to third for any possible play.",
        "Retreat home if the ball is not caught."
      ]
    },
    {
      "heading": "U1",
      "bullets": [
        "Pause, read, and react.",
        "If the ball is not a trouble ball, remain behind first lining up a possible tag.",
        "If the ball is caught, rotate home if R2 commits to third."
      ]
    },
    {
      "heading": "U3",
      "bullets": [
        "Move to the working area and have the tag-up of R2.",
        "If the ball is caught, take plays at second and at first once U1 rotates home.",
        "If the ball is not caught, take R2 into third."
      ]
    }
  ],
  "paths": [
    {
      "role": "P",
      "startAnswer": {
        "x": 442,
        "y": 696
      },
      "routePoints": [
        {
          "x": 442,
          "y": 696
        },
        {
          "x": 352,
          "y": 606
        },
        {
          "x": 366,
          "y": 566
        }
      ],
      "answerSegments": [
        {
          "points": [
            {
              "x": 442,
              "y": 696
            },
            {
              "x": 352,
              "y": 606
            }
          ]
        },
        {
          "points": [
            {
              "x": 352,
              "y": 606
            },
            {
              "x": 366,
              "y": 566
            }
          ],
          "dashed": true
        }
      ],
      "waypoints": [
        {
          "x": 352,
          "y": 606
        }
      ],
      "endAnswer": {
        "x": 366,
        "y": 566
      }
    },
    {
      "role": "U1",
      "startAnswer": {
        "x": 631,
        "y": 511
      },
      "routePoints": [
        {
          "x": 631,
          "y": 511
        },
        {
          "x": 607,
          "y": 556
        }
      ],
      "waypoints": [],
      "endAnswer": {
        "x": 607,
        "y": 556
      }
    },
    {
      "role": "U3",
      "startAnswer": {
        "x": 406,
        "y": 504
      },
      "routePoints": [
        {
          "x": 406,
          "y": 504
        },
        {
          "x": 435,
          "y": 519
        },
        {
          "x": 479,
          "y": 519
        }
      ],
      "answerSegments": [
        {
          "points": [
            {
              "x": 406,
              "y": 504
            },
            {
              "x": 435,
              "y": 519
            }
          ]
        },
        {
          "points": [
            {
              "x": 435,
              "y": 519
            },
            {
              "x": 479,
              "y": 519
            }
          ],
          "dashed": true
        }
      ],
      "waypoints": [
        {
          "x": 435,
          "y": 519
        }
      ],
      "endAnswer": {
        "x": 479,
        "y": 519
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
    }
  ]
};
