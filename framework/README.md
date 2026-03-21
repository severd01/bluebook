## Standard Framework

Use `framework/standard-2man` as the base for new scenarios.

### Create a new scenario from framework

```bash
cp -R framework/standard-2man scenarios/03-your-scenario-name
```

Then edit `script.js` in the new scenario folder:
- Scenario metadata (`title`, `description`, `runners`, `outs`, `ball`)
- `ballFlightPath`
- `answerNotes`
- `paths` (P and U1 start, route, and end points)
