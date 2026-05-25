window.THREE_MAN_SCENARIO = {
  "title": "R1,R2,R3, base hit to center.",
  "system": "3-Man Mechanics",
  "description": "Bases loaded, base hit.",
  "runners": "Bases Loaded",
  "outs": "Any Outs",
  "ball": "Base hit to the outfield",
  "type": "triple-movement",
  "ballFlightPath": "M 442 664 C 470 560, 545 418, 610 350 C 628 330, 642 320, 654 312",
  "prompt": "Draw the umpire movement paths.",
  "explanation": "",
  "answerNotes": [
    {
      "heading": "Plate",
      "bullets": [
        "Observe the touch of third by R2.",
        "Get into position for a possible play at the plate."
      ]
    },
    {
      "heading": "U1",
      "bullets": [
        "Move into the infield and pivot observing the batter-runner's touch of first.",
        "Be prepared to take the runner back into first.",
        "Stay ahead of the batter-runner and move into the second-base cutout if the batter-runner commits to second."
      ]
    },
    {
      "heading": "U3",
      "bullets": [
        "Observe touches at second and make all calls on plays on R2 and R1 at second.",
        "Move into position to make all calls on plays at third.",
        "Stay ahead of R1 and move into the third-base cutout when R1 commits."
      ]
    }
  ],
  "paths": [
    {
      "role": "P",
      "startAnswer": {
        "x": 444,
        "y": 700
      },
      "routePoints": [
        {
          "x": 444,
          "y": 700
        },
        {
          "x": 444,
          "y": 701
        }
      ],
      "waypoints": [],
      "endAnswer": {
        "x": 444,
        "y": 701
      }
    },
    {
      "role": "U1",
      "startAnswer": {
        "x": 604,
        "y": 530
      },
      "routePoints": [
        {
          "x": 604,
          "y": 530
        },
        {
          "x": 512,
          "y": 537
        },
        {
          "x": 440,
          "y": 495
        }
      ],
      "answerSegments": [
        {
          "points": [
            {
              "x": 604,
              "y": 530
            },
            {
              "x": 512,
              "y": 537
            }
          ]
        },
        {
          "points": [
            {
              "x": 512,
              "y": 537
            },
            {
              "x": 440,
              "y": 495
            }
          ],
          "dashed": true
        }
      ],
      "waypoints": [
        {
          "x": 512,
          "y": 537
        }
      ],
      "endAnswer": {
        "x": 440,
        "y": 495
      }
    },
    {
      "role": "U3",
      "startAnswer": {
        "x": 420,
        "y": 490
      },
      "routePoints": [
        {
          "x": 420,
          "y": 490
        },
        {
          "x": 427,
          "y": 518
        },
        {
          "x": 366,
          "y": 552
        }
      ],
      "answerSegments": [
        {
          "points": [
            {
              "x": 420,
              "y": 490
            },
            {
              "x": 427,
              "y": 518
            }
          ]
        },
        {
          "points": [
            {
              "x": 427,
              "y": 518
            },
            {
              "x": 366,
              "y": 552
            }
          ],
          "dashed": true
        }
      ],
      "waypoints": [
        {
          "x": 427,
          "y": 518
        }
      ],
      "endAnswer": {
        "x": 366,
        "y": 552
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
