window.THREE_MAN_SCENARIO = {
  "title": "R1 Ground Ball",
  "system": "3-Man Mechanics",
  "description": "Runner on first, ground ball.",
  "runners": "Runner on 1st",
  "outs": "Any Outs",
  "ball": "Ground ball",
  "type": "triple-movement",
  "ballFlightPath": "M 442 666 L 365 468",
  "prompt": "Draw the umpire movement paths.",
  "explanation": "",
  "answerNotes": [
    {
      "heading": "Plate",
      "bullets": [
        "Move up the first-base line to help with a pulled foot and overthrows.",
        "Stay alert for the runner's lane if the play tightens at first."
      ]
    },
    {
      "heading": "U1",
      "bullets": [
        "Get into position for the play at first.",
        "Increase your distance from first because your starting spot begins closer than with no runners."
      ]
    },
    {
      "heading": "U3",
      "bullets": [
        "Move into position for the play at second.",
        "Use slow timing on the play at second and watch for pulled foot, dropped ball, and interference."
      ]
    }
  ],
  "paths": [
    {
      "role": "P",
      "startAnswer": {
        "x": 442,
        "y": 695
      },
      "routePoints": [
        {
          "x": 442,
          "y": 695
        },
        {
          "x": 521,
          "y": 616
        }
      ],
      "waypoints": [],
      "endAnswer": {
        "x": 521,
        "y": 616
      }
    },
    {
      "role": "U1",
      "startAnswer": {
        "x": 629,
        "y": 511
      },
      "routePoints": [
        {
          "x": 629,
          "y": 511
        },
        {
          "x": 588,
          "y": 491
        }
      ],
      "waypoints": [],
      "endAnswer": {
        "x": 588,
        "y": 491
      }
    },
    {
      "role": "U3",
      "startAnswer": {
        "x": 399,
        "y": 493
      },
      "routePoints": [
        {
          "x": 399,
          "y": 493
        },
        {
          "x": 438,
          "y": 502
        }
      ],
      "answerSegments": [
        {
          "points": [
            {
              "x": 399,
              "y": 493
            },
            {
              "x": 438,
              "y": 502
            }
          ],
          "dashed": true
        }
      ],
      "waypoints": [],
      "endAnswer": {
        "x": 438,
        "y": 502
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
