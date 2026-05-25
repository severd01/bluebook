window.THREE_MAN_SCENARIO = {
  "title": "R3 Ground Ball",
  "system": "3-Man Mechanics",
  "description": "Runner on third, ground ball.",
  "runners": "Runner on 3rd",
  "outs": "Any Outs",
  "ball": "Ground ball",
  "type": "triple-movement",
  "ballFlightPath": "M 440 669 L 364 462",
  "prompt": "Draw the umpire movement paths.",
  "explanation": "",
  "answerNotes": [
    {
      "heading": "Plate",
      "bullets": [
        "Remain home and observe the play.",
        "Be alert for quick plays at the plate."
      ]
    },
    {
      "heading": "U1",
      "bullets": [
        "Take normal position for the play at first.",
        "If U3 is required to stay at third, move into the infield and stay ahead of the batter-runner."
      ]
    },
    {
      "heading": "U3",
      "bullets": [
        "Initially take a few steps toward the coach's box anticipating a play at third.",
        "Remain alert for a rundown between third and home.",
        "If the runner scores without a play, move into the middle for all plays at second and third."
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
        "x": 617,
        "y": 518
      },
      "routePoints": [
        {
          "x": 617,
          "y": 518
        },
        {
          "x": 564,
          "y": 481
        },
        {
          "x": 487,
          "y": 512
        }
      ],
      "answerSegments": [
        {
          "points": [
            {
              "x": 617,
              "y": 518
            },
            {
              "x": 564,
              "y": 481
            }
          ]
        },
        {
          "points": [
            {
              "x": 564,
              "y": 481
            },
            {
              "x": 487,
              "y": 512
            }
          ],
          "dashed": true
        }
      ],
      "waypoints": [
        {
          "x": 564,
          "y": 481
        }
      ],
      "endAnswer": {
        "x": 487,
        "y": 512
      }
    },
    {
      "role": "U3",
      "startAnswer": {
        "x": 250,
        "y": 502
      },
      "routePoints": [
        {
          "x": 250,
          "y": 502
        },
        {
          "x": 256,
          "y": 552
        },
        {
          "x": 433,
          "y": 507
        }
      ],
      "answerSegments": [
        {
          "points": [
            {
              "x": 250,
              "y": 502
            },
            {
              "x": 256,
              "y": 552
            }
          ]
        },
        {
          "points": [
            {
              "x": 256,
              "y": 552
            },
            {
              "x": 433,
              "y": 507
            }
          ],
          "dashed": true
        }
      ],
      "waypoints": [
        {
          "x": 256,
          "y": 552
        }
      ],
      "endAnswer": {
        "x": 433,
        "y": 507
      }
    }
  ],
  "runnerMarkers": [
    {
      "label": "R3",
      "x": 340,
      "y": 599
    }
  ]
};
