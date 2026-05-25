window.THREE_MAN_SCENARIO = {
  "title": "R2,R3, Ground Ball",
  "system": "3-Man Mechanics",
  "description": "Runners on second and third, ball on the ground or through the infield.",
  "runners": "Runners on 2nd and 3rd",
  "outs": "Any Outs",
  "ball": "Ground ball to the infield or base hit",
  "type": "triple-movement",
  "ballFlightPath": "M 442 664 L 321 393",
  "prompt": "Draw the umpire movement paths.",
  "explanation": "",
  "answerNotes": [
    {
      "heading": "Plate",
      "bullets": [
        "Immediately get into position for a possible play at the plate.",
        "Stay locked in on the scoring attempt."
      ]
    },
    {
      "heading": "U1",
      "bullets": [
        "Use the same movement as two-man.",
        "If the ball gets through the infield, you have all plays at first and second."
      ]
    },
    {
      "heading": "U3",
      "bullets": [
        "Move into position to make the call at third.",
        "Stay with the lead runner and keep the cutout clean."
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
          "x": 432,
          "y": 688
        },
        {
          "x": 442,
          "y": 682
        }
      ],
      "waypoints": [
        {
          "x": 432,
          "y": 688
        }
      ],
      "endAnswer": {
        "x": 442,
        "y": 682
      }
    },
    {
      "role": "U1",
      "startAnswer": {
        "x": 468,
        "y": 490
      },
      "routePoints": [
        {
          "x": 468,
          "y": 490
        },
        {
          "x": 475,
          "y": 519
        }
      ],
      "waypoints": [],
      "endAnswer": {
        "x": 475,
        "y": 519
      }
    },
    {
      "role": "U3",
      "startAnswer": {
        "x": 265,
        "y": 519
      },
      "routePoints": [
        {
          "x": 265,
          "y": 519
        },
        {
          "x": 262,
          "y": 563
        }
      ],
      "waypoints": [],
      "endAnswer": {
        "x": 262,
        "y": 563
      }
    }
  ],
  "runnerMarkers": [
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
