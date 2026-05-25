window.THREE_MAN_SCENARIO = {
  "title": "R3 Base Hit",
  "system": "3-Man Mechanics",
  "description": "Runner on third, base hit.",
  "runners": "Runner on 3rd",
  "outs": "Any Outs",
  "ball": "Base hit to the outfield",
  "type": "triple-movement",
  "ballFlightPath": "M 442 664 C 470 560, 545 418, 610 350 C 628 330, 642 320, 654 312",
  "prompt": "Draw the umpire movement paths.",
  "explanation": "",
  "answerNotes": [
    {
      "heading": "Plate",
      "bullets": [
        "Remain home and observe the play.",
        "Be ready for a possible play at the plate."
      ]
    },
    {
      "heading": "U1",
      "bullets": [
        "Move into the infield and pivot on the batter-runner's touch of first.",
        "Be prepared to take the batter-runner into second if U3 misses the rotation.",
        "Once U3 is set, remain with first-base responsibility."
      ]
    },
    {
      "heading": "U3",
      "bullets": [
        "Move into the infield to observe all touches and make all calls at second.",
        "Also keep third if the batter-runner attempts to advance there."
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
        "x": 604,
        "y": 537
      },
      "routePoints": [
        {
          "x": 604,
          "y": 537
        },
        {
          "x": 522,
          "y": 536
        },
        {
          "x": 486,
          "y": 525
        }
      ],
      "waypoints": [
        {
          "x": 522,
          "y": 536
        }
      ],
      "endAnswer": {
        "x": 486,
        "y": 525
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
  "runnerMarkers": [
    {
      "label": "R3",
      "x": 343,
      "y": 598
    }
  ]
};
