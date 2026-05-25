window.THREE_MAN_SCENARIO = {
  "title": "R3, Fly Ball to left field.",
  "system": "3-Man Mechanics",
  "description": "Runner on third, fly ball to left field.",
  "runners": "Runner on 3rd",
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
        "Move to observe R3's tag.",
        "Move back into position for a possible play at the plate.",
        "Stay ready for the scoring attempt."
      ]
    },
    {
      "heading": "U1",
      "bullets": [
        "Immediately run into the infield.",
        "Watch the batter-runner touch first and get into the working area.",
        "Be ready for a quick throw back to third on the tag."
      ]
    },
    {
      "heading": "U3",
      "bullets": [
        "Move out on the ball and get the best possible angle for the catch/no-catch.",
        "Come set before the decision and give a verbal or visual signal if needed.",
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
        "x": 613,
        "y": 518
      },
      "routePoints": [
        {
          "x": 613,
          "y": 518
        },
        {
          "x": 420,
          "y": 521
        }
      ],
      "waypoints": [],
      "endAnswer": {
        "x": 420,
        "y": 521
      }
    },
    {
      "role": "U3",
      "startAnswer": {
        "x": 249,
        "y": 502
      },
      "routePoints": [
        {
          "x": 249,
          "y": 502
        },
        {
          "x": 226,
          "y": 356
        }
      ],
      "waypoints": [],
      "endAnswer": {
        "x": 226,
        "y": 356
      }
    }
  ],
  "runnerMarkers": [
    {
      "label": "R3",
      "x": 343,
      "y": 598
    }
  ]
};
