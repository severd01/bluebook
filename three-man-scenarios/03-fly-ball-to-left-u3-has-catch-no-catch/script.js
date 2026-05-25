window.THREE_MAN_SCENARIO = {
  "title": "Fly ball to left",
  "system": "3-Man Mechanics",
  "description": "No runners on, fly ball to left field.",
  "runners": "No Runners",
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
        "Move out on the batted ball.",
        "Watch the play develop and be prepared to take a play at the plate.",
        "Stay available instead of chasing the ball into the outfield."
      ]
    },
    {
      "heading": "U1",
      "bullets": [
        "Move into the infield and pivot on the batter-runner's touch of first.",
        "Be prepared to take the batter-runner into second and third.",
        "Keep the play in front of you as U3 stays out on the ball."
      ]
    },
    {
      "heading": "U3",
      "bullets": [
        "Move into the outfield to make the catch/no-catch call.",
        "Do not retreat back to third after going out.",
        "Come set before the decision and own the play."
      ]
    }
  ],
  "paths": [
    {
      "role": "P",
      "startAnswer": {
        "x": 444,
        "y": 696
      },
      "routePoints": [
        {
          "x": 444,
          "y": 696
        },
        {
          "x": 423,
          "y": 617
        }
      ],
      "waypoints": [
        {
          "x": 423,
          "y": 617
        }
      ],
      "endAnswer": {
        "x": 423,
        "y": 617
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
          "x": 520,
          "y": 536
        },
        {
          "x": 456,
          "y": 500
        },
        {
          "x": 401,
          "y": 537
        }
      ],
      "waypoints": [
        {
          "x": 520,
          "y": 536
        },
        {
          "x": 456,
          "y": 500
        }
      ],
      "endAnswer": {
        "x": 401,
        "y": 537
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
          "x": 256,
          "y": 474
        },
        {
          "x": 234,
          "y": 370
        }
      ],
      "waypoints": [
        {
          "x": 256,
          "y": 474
        }
      ],
      "endAnswer": {
        "x": 234,
        "y": 370
      }
    }
  ],
  "runnerMarkers": []
};
