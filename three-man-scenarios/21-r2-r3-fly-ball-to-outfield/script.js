window.THREE_MAN_SCENARIO = {
  "title": "R2,R3, Trouble Fly Ball to Left",
  "system": "3-Man Mechanics",
  "description": "Runners on second and third, outfield fly ball with U3 reading trouble.",
  "runners": "Runners on 2nd and 3rd",
  "outs": "Any Outs",
  "ball": "Fly ball to the outfield",
  "type": "triple-movement",
  "ballFlightPath": "M 442 670 L 223 202",
  "prompt": "Draw the umpire movement paths.",
  "explanation": "",
  "answerNotes": [
    {
      "heading": "Plate",
      "bullets": [
        "If U3 goes out, get into position to line up the tag of R3.",
        "If U3 does not go out, stay aware of R3 leaving early and be ready to help if needed."
      ]
    },
    {
      "heading": "U1",
      "bullets": [
        "Have all plays at first and second.",
        "If U3 goes out, also have all plays at third."
      ]
    },
    {
      "heading": "U3",
      "bullets": [
        "Pause, read, and react.",
        "If the ball is trouble, go out and stay out.",
        "If not trouble, line up the tag of R3 while still maintaining catch/no-catch responsibility."
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
        "x": 472,
        "y": 493
      },
      "routePoints": [
        {
          "x": 472,
          "y": 493
        },
        {
          "x": 459,
          "y": 521
        }
      ],
      "waypoints": [],
      "endAnswer": {
        "x": 459,
        "y": 521
      }
    },
    {
      "role": "U3",
      "startAnswer": {
        "x": 262,
        "y": 516
      },
      "routePoints": [
        {
          "x": 262,
          "y": 516
        },
        {
          "x": 276,
          "y": 330
        }
      ],
      "waypoints": [],
      "endAnswer": {
        "x": 276,
        "y": 330
      }
    }
  ],
  "runnerMarkers": [
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
