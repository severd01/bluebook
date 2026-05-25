window.THREE_MAN_SCENARIO = {
  "title": "R3, fly ball to right field.",
  "system": "3-Man Mechanics",
  "description": "Runner on third, fly ball to right field.",
  "runners": "Runner on 3rd",
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
        "Move to open up your view of the tag at third.",
        "Keep every play at the plate."
      ]
    },
    {
      "heading": "U1",
      "bullets": [
        "Move out on the fly ball and get the best possible angle for the call.",
        "Come set before the decision.",
        "Do not return to the infield after going out."
      ]
    },
    {
      "heading": "U3",
      "bullets": [
        "Quickly move into the working area.",
        "Realize that you now have all touches and plays at every base while U1 stays out."
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
        "x": 604,
        "y": 537
      },
      "routePoints": [
        {
          "x": 604,
          "y": 537
        },
        {
          "x": 632,
          "y": 490
        },
        {
          "x": 666,
          "y": 370
        }
      ],
      "waypoints": [
        {
          "x": 632,
          "y": 490
        }
      ],
      "endAnswer": {
        "x": 666,
        "y": 370
      }
    },
    {
      "role": "U3",
      "startAnswer": {
        "x": 279,
        "y": 542
      },
      "routePoints": [
        {
          "x": 279,
          "y": 542
        },
        {
          "x": 480,
          "y": 533
        }
      ],
      "waypoints": [],
      "endAnswer": {
        "x": 480,
        "y": 533
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
