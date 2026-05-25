window.THREE_MAN_SCENARIO = {
  "title": "R1, Fly Ball to Left Field",
  "system": "3-Man Mechanics",
  "description": "R1, fly ball to left field",
  "runners": "Runner on 1st",
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
        "Move up the third-base line to take the runner into third.",
        "Stay available for any continuation beyond second.",
        "Let U3 stay with the ball and U1 manage first-base responsibility."
      ]
    },
    {
      "heading": "U1",
      "bullets": [
        "Line up R1's tag and get the best angle possible.",
        "Be prepared to take R1 back into first or the batter-runner into first.",
        "Release only if the play carries away from you and the crew needs the plate covered."
      ]
    },
    {
      "heading": "U3",
      "bullets": [
        "Move into position to get the best possible angle for the catch/no-catch.",
        "If needed, give a visual and verbal signal on the catch/no-catch.",
        "Be prepared to take touches and plays at second and third."
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
          "x": 392,
          "y": 652
        },
        {
          "x": 330,
          "y": 606
        }
      ],
      "waypoints": [
        {
          "x": 392,
          "y": 652
        }
      ],
      "endAnswer": {
        "x": 330,
        "y": 606
      }
    },
    {
      "role": "U1",
      "startAnswer": {
        "x": 628,
        "y": 517
      },
      "routePoints": [
        {
          "x": 628,
          "y": 517
        },
        {
          "x": 623,
          "y": 532
        },
        {
          "x": 466,
          "y": 666
        }
      ],
      "answerSegments": [
        {
          "points": [
            {
              "x": 628,
              "y": 517
            },
            {
              "x": 623,
              "y": 532
            }
          ]
        },
        {
          "points": [
            {
              "x": 623,
              "y": 532
            },
            {
              "x": 466,
              "y": 666
            }
          ],
          "dashed": true
        }
      ],
      "waypoints": [
        {
          "x": 623,
          "y": 532
        }
      ],
      "endAnswer": {
        "x": 466,
        "y": 666
      }
    },
    {
      "role": "U3",
      "startAnswer": {
        "x": 410,
        "y": 484
      },
      "routePoints": [
        {
          "x": 410,
          "y": 484
        },
        {
          "x": 430,
          "y": 527
        }
      ],
      "answerSegments": [
        {
          "points": [
            {
              "x": 410,
              "y": 484
            },
            {
              "x": 430,
              "y": 527
            }
          ],
          "dashed": true
        }
      ],
      "waypoints": [],
      "endAnswer": {
        "x": 430,
        "y": 527
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
