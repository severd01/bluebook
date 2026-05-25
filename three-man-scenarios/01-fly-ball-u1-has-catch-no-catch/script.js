window.THREE_MAN_SCENARIO = {
  "title": "Fly ball right field, no runners",
  "system": "3-Man Mechanics",
  "description": "No runners, no outs, fly ball to right field.",
  "runners": "No Runners",
  "outs": "No Outs",
  "ball": "Fly ball to right field",
  "type": "triple-movement",
  "ballFlightPath": "M 442 664 C 470 560, 545 390, 612 314 C 630 294, 642 282, 650 276",
  "prompt": "Draw the umpire movement paths.",
  "explanation": "",
  "answerNotes": [
    {
      "heading": "Plate",
      "bullets": [
        "Move out on the batted ball to fill in behind U1.",
        "Observe the batter-runner's touch of first and take the runner back into first if needed.",
        "Return to the plate when the batter-runner touches second."
      ]
    },
    {
      "heading": "U1",
      "bullets": [
        "Move out on the fly ball and get the best possible angle for the catch/no-catch.",
        "Come set before making the call.",
        "Do not return to the infield after taking the play in the outfield."
      ]
    },
    {
      "heading": "U3",
      "bullets": [
        "Move into the infield to observe touches and handle plays at second and third.",
        "Read the batter-runner and let the ball take you to any developing play on the bases."
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
          "x": 426,
          "y": 668
        },
        {
          "x": 531,
          "y": 574
        }
      ],
      "waypoints": [
        {
          "x": 426,
          "y": 668
        }
      ],
      "endAnswer": {
        "x": 531,
        "y": 574
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
          "x": 622,
          "y": 488
        },
        {
          "x": 650,
          "y": 372
        }
      ],
      "waypoints": [
        {
          "x": 622,
          "y": 488
        }
      ],
      "endAnswer": {
        "x": 650,
        "y": 372
      }
    },
    {
      "role": "U3",
      "startAnswer": {
        "x": 281,
        "y": 543
      },
      "routePoints": [
        {
          "x": 281,
          "y": 543
        },
        {
          "x": 435,
          "y": 490
        }
      ],
      "waypoints": [],
      "endAnswer": {
        "x": 435,
        "y": 490
      }
    }
  ],
  "runnerMarkers": []
};
