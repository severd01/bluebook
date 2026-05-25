window.THREE_MAN_SCENARIO = {
  "title": "Base Hit, No Runners",
  "system": "3-Man Mechanics",
  "description": "No runners on, base hit to left field.",
  "runners": "No Runners",
  "outs": "Any Outs",
  "ball": "Base hit to the outfield",
  "type": "triple-movement",
  "ballFlightPath": "M 442 664 Q 383 441 258 270",
  "prompt": "Draw the umpire movement paths.",
  "explanation": "",
  "answerNotes": [
    {
      "heading": "Plate",
      "bullets": [
        "Move out on the batted ball.",
        "Be prepared to take the runner into third.",
        "Communicate with U3 if he starts to come up the line so the coverage stays clean."
      ]
    },
    {
      "heading": "U1",
      "bullets": [
        "Move into the infield and pivot on the batter-runner's touch of first.",
        "Take the batter-runner into second if U3 misses the rotation.",
        "Once U3 is set for second, remain at first and be prepared to cover the plate if P leaves."
      ]
    },
    {
      "heading": "U3",
      "bullets": [
        "Move into the infield to observe all touches and make all calls at second.",
        "Do not retreat to third; P has the runner advancing there.",
        "Stay inside and own the middle of the diamond."
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
          "x": 419,
          "y": 617
        },
        {
          "x": 365,
          "y": 564
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
              "x": 419,
              "y": 617
            }
          ]
        },
        {
          "points": [
            {
              "x": 419,
              "y": 617
            },
            {
              "x": 365,
              "y": 564
            }
          ],
          "dashed": true
        }
      ],
      "waypoints": [
        {
          "x": 419,
          "y": 617
        }
      ],
      "endAnswer": {
        "x": 365,
        "y": 564
      }
    },
    {
      "role": "U1",
      "startAnswer": {
        "x": 605,
        "y": 542
      },
      "routePoints": [
        {
          "x": 605,
          "y": 542
        },
        {
          "x": 499,
          "y": 527
        },
        {
          "x": 470,
          "y": 672
        }
      ],
      "answerSegments": [
        {
          "points": [
            {
              "x": 605,
              "y": 542
            },
            {
              "x": 499,
              "y": 527
            }
          ]
        },
        {
          "points": [
            {
              "x": 499,
              "y": 527
            },
            {
              "x": 470,
              "y": 672
            }
          ],
          "dashed": true
        }
      ],
      "waypoints": [
        {
          "x": 499,
          "y": 527
        }
      ],
      "endAnswer": {
        "x": 470,
        "y": 672
      }
    },
    {
      "role": "U3",
      "startAnswer": {
        "x": 280,
        "y": 537
      },
      "routePoints": [
        {
          "x": 280,
          "y": 537
        },
        {
          "x": 338,
          "y": 520
        },
        {
          "x": 438,
          "y": 486
        }
      ],
      "waypoints": [
        {
          "x": 338,
          "y": 520
        }
      ],
      "endAnswer": {
        "x": 438,
        "y": 486
      }
    }
  ],
  "runnerMarkers": []
};
