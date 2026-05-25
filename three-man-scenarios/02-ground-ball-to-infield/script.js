window.THREE_MAN_SCENARIO = {
  "title": "Ground Ball To The Infield",
  "system": "3-Man Mechanics",
  "description": "No runners on, ground ball to the infield with U1 taking the play at first and U3 working toward second.",
  "runners": "No Runners",
  "outs": "Any Outs",
  "ball": "Ground ball to the infield",
  "type": "triple-movement",
  "ballFlightPath": "M 442 666 L 390 514",
  "prompt": "Draw the umpire movement paths.",
  "explanation": "",
  "answerNotes": [
    {
      "heading": "Plate",
      "bullets": [
        "Move up to the 45-foot line trailing the runner.",
        "Be ready for a pulled foot, swipe tag, or runner's lane interference at first.",
        "On an overthrow, observe the ball and determine whether it goes out of play."
      ]
    },
    {
      "heading": "U1",
      "bullets": [
        "Move in and get into position for the call at first base.",
        "Arrive set and stay square to the play.",
        "Own the force play and adjust if the throw pulls the first baseman."
      ]
    },
    {
      "heading": "U3",
      "bullets": [
        "Move toward the second-base cutout.",
        "If the ball is hit to the left side, pause to let the infielder field and throw.",
        "Be responsible for plays at second and third."
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
          "x": 497,
          "y": 604
        }
      ],
      "waypoints": [
        {
          "x": 497,
          "y": 604
        }
      ],
      "endAnswer": {
        "x": 497,
        "y": 604
      }
    },
    {
      "role": "U1",
      "startAnswer": {
        "x": 605,
        "y": 537
      },
      "routePoints": [
        {
          "x": 605,
          "y": 537
        },
        {
          "x": 552,
          "y": 500
        },
        {
          "x": 543,
          "y": 505
        }
      ],
      "waypoints": [
        {
          "x": 552,
          "y": 500
        }
      ],
      "endAnswer": {
        "x": 543,
        "y": 505
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
