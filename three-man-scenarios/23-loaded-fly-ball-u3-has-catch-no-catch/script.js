window.THREE_MAN_SCENARIO = {
  "title": "R1,R2,R3, fly ball to left center.",
  "system": "3-Man Mechanics",
  "description": "Bases loaded, fly ball.",
  "runners": "Bases Loaded",
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
        "Line up the tag of R3 at third base.",
        "Get into position for any plays at the plate."
      ]
    },
    {
      "heading": "U1",
      "bullets": [
        "Move into the infield.",
        "Be responsible for the tag-up of R1.",
        "Be prepared to take R1 back into first or the batter-runner into first or second if the ball is dropped."
      ]
    },
    {
      "heading": "U3",
      "bullets": [
        "Move into position to get the best possible angle for the catch/no-catch.",
        "Also be responsible for the tag-up of R2.",
        "Have plays on R2 and R1 at second and all plays at third."
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
        "x": 621,
        "y": 516
      },
      "routePoints": [
        {
          "x": 621,
          "y": 516
        },
        {
          "x": 510,
          "y": 539
        },
        {
          "x": 489,
          "y": 523
        }
      ],
      "waypoints": [
        {
          "x": 510,
          "y": 539
        }
      ],
      "endAnswer": {
        "x": 489,
        "y": 523
      }
    },
    {
      "role": "U3",
      "startAnswer": {
        "x": 416,
        "y": 500
      },
      "routePoints": [
        {
          "x": 416,
          "y": 500
        },
        {
          "x": 427,
          "y": 521
        }
      ],
      "waypoints": [],
      "endAnswer": {
        "x": 427,
        "y": 521
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
