window.THREE_MAN_SCENARIO = {
  "title": "R2 Ground Ball Or Base Hit",
  "system": "3-Man Mechanics",
  "description": "Runner on second, ball on the ground or through the infield.",
  "runners": "Runner on 2nd",
  "outs": "Any Outs",
  "ball": "Ground ball to the infield or base hit",
  "type": "triple-movement",
  "ballFlightPath": "M 444 665 L 347 466",
  "prompt": "Draw the umpire movement paths.",
  "explanation": "",
  "answerNotes": [
    {
      "heading": "Plate",
      "bullets": [
        "Stay home.",
        "Be ready for any possible play at the plate if the runner scores."
      ]
    },
    {
      "heading": "U1",
      "bullets": [
        "Use the same movement as two-man on the right side.",
        "If the ball gets through the infield, you have all plays at first and second."
      ]
    },
    {
      "heading": "U3",
      "bullets": [
        "Move into position to make the call at third.",
        "Stay ahead of the lead runner and keep the third-base angle open."
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
          "x": 442,
          "y": 692
        },
        {
          "x": 442,
          "y": 686
        }
      ],
      "waypoints": [
        {
          "x": 442,
          "y": 692
        }
      ],
      "endAnswer": {
        "x": 442,
        "y": 686
      }
    },
    {
      "role": "U1",
      "startAnswer": {
        "x": 465,
        "y": 484
      },
      "routePoints": [
        {
          "x": 465,
          "y": 484
        },
        {
          "x": 460,
          "y": 511
        }
      ],
      "waypoints": [],
      "endAnswer": {
        "x": 460,
        "y": 511
      }
    },
    {
      "role": "U3",
      "startAnswer": {
        "x": 272,
        "y": 520
      },
      "routePoints": [
        {
          "x": 272,
          "y": 520
        },
        {
          "x": 289,
          "y": 555
        }
      ],
      "waypoints": [],
      "endAnswer": {
        "x": 289,
        "y": 555
      }
    }
  ],
  "runnerMarkers": [
    {
      "label": "R2",
      "x": 395,
      "y": 457
    }
  ]
};
