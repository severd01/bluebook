window.THREE_MAN_SCENARIO = {
  "title": "R1 R2 Fly Ball Left",
  "system": "3-Man Mechanics",
  "description": "Runners on first and second, fly ball to left.",
  "runners": "Runners on 1st and 2nd",
  "outs": "Any Outs",
  "ball": "Fly ball to left field",
  "type": "triple-movement",
  "ballFlightPath": "M 442 664 C 408 560, 344 402, 276 316 C 256 292, 242 280, 228 270",
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
        "Move into the infield.",
        "If the ball is caught, rotate home if R2 commits to third.",
        "If the ball is not caught, stay ahead of the batter-runner and take the batter-runner into second."
      ]
    },
    {
      "heading": "U3",
      "bullets": [
        "Move to the working area and have the tag-up of R2.",
        "If the ball is caught, keep plays at second and first once U1 rotates home.",
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
        "x": 609,
        "y": 528
      },
      "routePoints": [
        {
          "x": 609,
          "y": 528
        },
        {
          "x": 501,
          "y": 533
        },
        {
          "x": 466,
          "y": 696
        }
      ],
      "answerSegments": [
        {
          "points": [
            {
              "x": 609,
              "y": 528
            },
            {
              "x": 501,
              "y": 533
            }
          ]
        },
        {
          "points": [
            {
              "x": 501,
              "y": 533
            },
            {
              "x": 466,
              "y": 696
            }
          ],
          "dashed": true
        }
      ],
      "waypoints": [
        {
          "x": 501,
          "y": 533
        }
      ],
      "endAnswer": {
        "x": 466,
        "y": 696
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
