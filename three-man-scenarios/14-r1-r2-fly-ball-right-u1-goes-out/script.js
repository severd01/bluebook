window.THREE_MAN_SCENARIO = {
  "title": "R1,R2, Fly Ball to Right Field",
  "system": "3-Man Mechanics",
  "description": "Runners on first and second, trouble ball to right.",
  "runners": "Runners on 1st and 2nd",
  "outs": "Any Outs",
  "ball": "Trouble ball to right field",
  "type": "triple-movement",
  "ballFlightPath": "M 442 664 C 470 560, 545 390, 612 314 C 630 294, 642 282, 650 276",
  "prompt": "Draw the umpire movement paths.",
  "explanation": "",
  "answerNotes": [
    {
      "heading": "Plate",
      "bullets": [
        "Move up the third-base line in foul territory.",
        "If R2 tags and a play develops at third, move into the cutout for the play.",
        "Retreat home if R2 advances to third without a play."
      ]
    },
    {
      "heading": "U1",
      "bullets": [
        "Pause, read, and react.",
        "If the ball is a trouble ball, go out and be set for the catch/no-catch."
      ]
    },
    {
      "heading": "U3",
      "bullets": [
        "Revert to two-man mechanics.",
        "Move to the working area and take the tag-ups of both runners.",
        "Have plays at all bases except the play at third if R2 tags and goes."
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
        "y": 507
      },
      "routePoints": [
        {
          "x": 631,
          "y": 507
        },
        {
          "x": 643,
          "y": 367
        }
      ],
      "waypoints": [],
      "endAnswer": {
        "x": 643,
        "y": 367
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
