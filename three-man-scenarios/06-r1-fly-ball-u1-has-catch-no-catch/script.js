window.THREE_MAN_SCENARIO = {
  "title": "R1, Fly Ball Right Field",
  "system": "3-Man Mechanics",
  "description": "Runner on first, fly ball right field.",
  "runners": "Runner on 1st",
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
        "Move up the line and watch the batter-runner touch first.",
        "Watch for a quick throw back if the ball is caught.",
        "Be ready to continue toward third and then home if the runner advances."
      ]
    },
    {
      "heading": "U1",
      "bullets": [
        "Move into position to get the best possible angle for the catch/no-catch.",
        "Signal the decision if needed.",
        "Stay out after taking the play in the outfield."
      ]
    },
    {
      "heading": "U3",
      "bullets": [
        "Fall back into the working area and watch the play develop.",
        "Be prepared to take all touches and plays at second, and help with first if needed."
      ]
    }
  ],
  "paths": [
    {
      "role": "P",
      "startAnswer": {
        "x": 441,
        "y": 696
      },
      "routePoints": [
        {
          "x": 441,
          "y": 696
        },
        {
          "x": 500,
          "y": 586
        },
        {
          "x": 375,
          "y": 583
        }
      ],
      "waypoints": [
        {
          "x": 500,
          "y": 586
        }
      ],
      "endAnswer": {
        "x": 375,
        "y": 583
      }
    },
    {
      "role": "U1",
      "startAnswer": {
        "x": 626,
        "y": 512
      },
      "routePoints": [
        {
          "x": 626,
          "y": 512
        },
        {
          "x": 671,
          "y": 380
        }
      ],
      "waypoints": [],
      "endAnswer": {
        "x": 671,
        "y": 380
      }
    },
    {
      "role": "U3",
      "startAnswer": {
        "x": 407,
        "y": 490
      },
      "routePoints": [
        {
          "x": 407,
          "y": 490
        },
        {
          "x": 426,
          "y": 515
        },
        {
          "x": 497,
          "y": 567
        }
      ],
      "answerSegments": [
        {
          "points": [
            {
              "x": 407,
              "y": 490
            },
            {
              "x": 426,
              "y": 515
            }
          ]
        },
        {
          "points": [
            {
              "x": 426,
              "y": 515
            },
            {
              "x": 497,
              "y": 567
            }
          ],
          "dashed": true
        }
      ],
      "waypoints": [
        {
          "x": 426,
          "y": 515
        }
      ],
      "endAnswer": {
        "x": 497,
        "y": 567
      }
    }
  ],
  "runnerMarkers": [
    {
      "label": "R1",
      "x": 542,
      "y": 502
    }
  ]
};
