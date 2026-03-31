const situations = [
  {
    title: "Reported substitution into the 5 spot",
    focus: "Substitution bookkeeping",
    context: "Bottom 3rd, no outs, visitors batting.",
    prompt:
      "The coach reports that #18 Jones bats for #12 Smith in the 5th slot and will play center field. Update the lineup card correctly before the next pitch.",
    actionTypes: ["substitute"],
    lineup: [
      slot(1, "Reed", "4", "SS"),
      slot(2, "Davis", "7", "C"),
      slot(3, "Miller", "21", "P"),
      slot(4, "Lopez", "11", "1B"),
      slot(5, "Smith", "12", "CF"),
      slot(6, "Turner", "8", "3B"),
      slot(7, "Young", "3", "RF"),
      slot(8, "Brooks", "14", "LF"),
      slot(9, "Carter", "2", "2B"),
    ],
    bench: [
      benchPlayer("Jones", "18", "CF"),
      benchPlayer("Allen", "16", "INF"),
      benchPlayer("Price", "19", "OF"),
    ],
    expected(state) {
      const row = state.lineup.find((item) => item.slot === 5);
      const latestIncident = state.incidents.at(-1);
      const hasBenchMove = !state.bench.some((player) => player.number === "18");
      return (
        row.current.name === "Jones" &&
        row.current.number === "18" &&
        row.current.position === "CF" &&
        row.history.some((item) => item.number === "12" && item.name === "Smith") &&
        hasBenchMove &&
        latestIncident?.type === "substitute"
      );
    },
    successTitle: "Correct substitution.",
    successBody:
      "Jones is now occupying Smith's batting slot, Smith is marked out of the game, and the card shows exactly who entered and for whom.",
    helpBody:
      "A legal substitute should replace the current player in the same batting slot, with the replaced player tracked in the row history.",
  },
  {
    title: "Courtesy runner for the pitcher",
    focus: "Courtesy runner tracking",
    context: "Top 5th, one out, pitcher reached first base.",
    prompt:
      "The offense requests #3 Young as a courtesy runner for pitcher #21 Miller. Record the courtesy runner without substituting the pitcher out of the game.",
    actionTypes: ["courtesy"],
    lineup: [
      slot(1, "Reed", "4", "SS"),
      slot(2, "Davis", "7", "C"),
      slot(3, "Miller", "21", "P"),
      slot(4, "Lopez", "11", "1B"),
      slot(5, "Smith", "12", "CF"),
      slot(6, "Turner", "8", "3B"),
      slot(7, "Brooks", "14", "LF"),
      slot(8, "Price", "19", "RF"),
      slot(9, "Carter", "2", "2B"),
    ],
    bench: [
      benchPlayer("Young", "3", "CR option"),
      benchPlayer("Allen", "16", "INF"),
    ],
    expected(state) {
      const row = state.lineup.find((item) => item.slot === 3);
      const latestIncident = state.incidents.at(-1);
      return (
        row.current.name === "Miller" &&
        row.courtesyRunner?.name === "Young" &&
        row.courtesyRunner?.number === "3" &&
        latestIncident?.type === "courtesy"
      );
    },
    successTitle: "Courtesy runner logged correctly.",
    successBody:
      "The pitcher remains in the game and the courtesy-runner note sits on the pitcher's batting slot rather than being recorded as a substitution.",
    helpBody:
      "Courtesy runners belong in the game notes for the current player. The batter's slot stays with the original pitcher or catcher.",
  },
  {
    title: "Batting out of order appeal",
    focus: "Out-of-order resolution",
    context: "Top 6th, defense appeals before the next pitch.",
    prompt:
      "The defense appeals batting out of order. #24 Wilson just completed his at-bat, but #18 Jones was the proper batter in the 5th slot. Record the incident and identify the proper slot.",
    actionTypes: ["boo"],
    lineup: [
      slot(1, "Reed", "4", "SS"),
      slot(2, "Davis", "7", "C"),
      slot(3, "Miller", "21", "P"),
      slot(4, "Lopez", "11", "1B"),
      slot(5, "Jones", "18", "CF", { role: "sub" }),
      slot(6, "Turner", "8", "3B"),
      slot(7, "Wilson", "24", "RF"),
      slot(8, "Brooks", "14", "LF"),
      slot(9, "Carter", "2", "2B"),
    ],
    bench: [
      benchPlayer("Allen", "16", "INF"),
    ],
    expected(state) {
      const latestIncident = state.incidents.at(-1);
      return (
        latestIncident?.type === "boo" &&
        latestIncident.properSlot === 5 &&
        latestIncident.improperBatterNumber === "24"
      );
    },
    successTitle: "Out-of-order note is right.",
    successBody:
      "You tied the appeal to the proper batting slot and captured the improper batter who completed the at-bat. That gives the crew a clean record of the ruling.",
    helpBody:
      "This prototype treats batting out of order as an incident-log decision: identify the proper slot and the improper batter who finished the at-bat.",
  },
  {
    title: "DH is terminated",
    focus: "Player / DH management",
    context: "Top 7th, no outs, coach changes the pitcher.",
    prompt:
      "The lineup lists #33 Harper as DH for pitcher #21 Miller. The coach now says Harper will take the mound and pitch. Update the card to show the DH has been terminated and Harper now occupies that batting slot as the pitcher.",
    actionTypes: ["terminate-dh"],
    lineup: [
      slot(1, "Reed", "4", "SS"),
      slot(2, "Davis", "7", "C"),
      slot(3, "Lopez", "11", "1B"),
      slot(4, "Turner", "8", "3B"),
      slot(5, "Harper", "33", "DH", {
        role: "dh",
        dhFor: { name: "Miller", number: "21", position: "P" },
      }),
      slot(6, "Jones", "18", "CF"),
      slot(7, "Brooks", "14", "LF"),
      slot(8, "Price", "19", "RF"),
      slot(9, "Carter", "2", "2B"),
    ],
    bench: [
      benchPlayer("Allen", "16", "INF"),
      benchPlayer("Young", "3", "OF"),
    ],
    expected(state) {
      const row = state.lineup.find((item) => item.slot === 5);
      const latestIncident = state.incidents.at(-1);
      return (
        row.current.name === "Harper" &&
        row.current.position === "P" &&
        !row.current.dhFor &&
        row.current.role !== "dh" &&
        latestIncident?.type === "terminate-dh"
      );
    },
    successTitle: "DH terminated correctly.",
    successBody:
      "Harper is now just the player in the batting slot and pitcher on defense. The DH relationship is gone, which is exactly what the card needs to show.",
    helpBody:
      "When the offensive player moves into a defensive role in that batting slot, the DH relationship ends. The lineup card should reflect one player occupying the slot.",
  },
];

const scenarioIndexEl = document.getElementById("scenario-index");
const scoreLineEl = document.getElementById("score-line");
const scenarioTitleEl = document.getElementById("scenario-title");
const scenarioPromptEl = document.getElementById("scenario-prompt");
const scenarioFocusEl = document.getElementById("scenario-focus");
const scenarioContextEl = document.getElementById("scenario-context");
const selectedSlotChipEl = document.getElementById("selected-slot-chip");
const editorTitleEl = document.getElementById("editor-title");
const paperCoachEl = document.getElementById("paper-coach");
const actionTabsEl = document.getElementById("action-tabs");
const actionFormEl = document.getElementById("action-form");
const feedbackTitleEl = document.getElementById("feedback-title");
const feedbackBodyEl = document.getElementById("feedback-body");
const feedbackCardEl = document.querySelector(".feedback-card");
const lineupRowsEl = document.getElementById("lineup-rows");
const benchListEl = document.getElementById("bench-list");
const incidentLogEl = document.getElementById("incident-log");
const applyBtn = document.getElementById("apply-btn");
const resetBtn = document.getElementById("reset-btn");
const checkBtn = document.getElementById("check-btn");
const nextBtn = document.getElementById("next-btn");

let score = 0;
let attempts = 0;
let currentIndex = 0;
let selectedSlot = null;
let activeAction = null;
let state = null;

function slot(slotNumber, name, number, position, options = {}) {
  return {
    slot: slotNumber,
    current: {
      name,
      number,
      position,
      role: options.role || "starter",
      dhFor: options.dhFor || null,
    },
    history: [],
    courtesyRunner: null,
  };
}

function benchPlayer(name, number, label) {
  return { name, number, label };
}

function cloneSituation(situation) {
  return {
    lineup: situation.lineup.map((row) => ({
      ...row,
      current: { ...row.current, dhFor: row.current.dhFor ? { ...row.current.dhFor } : null },
      history: row.history.map((item) => ({ ...item })),
      courtesyRunner: row.courtesyRunner ? { ...row.courtesyRunner } : null,
    })),
    bench: situation.bench.map((player) => ({ ...player })),
    incidents: [],
  };
}

function getCurrentSituation() {
  return situations[currentIndex];
}

function render() {
  const situation = getCurrentSituation();

  scenarioIndexEl.textContent = `${currentIndex + 1} / ${situations.length}`;
  scoreLineEl.textContent = `${score} / ${attempts}`;
  scenarioTitleEl.textContent = situation.title;
  scenarioPromptEl.textContent = situation.prompt;
  scenarioFocusEl.textContent = situation.focus;
  scenarioContextEl.textContent = situation.context;
  paperCoachEl.textContent = "HC — Coach Tom";
  nextBtn.disabled = currentIndex === situations.length - 1;

  renderActionTabs();
  renderForm();
  renderLineup();
  renderBench();
  renderIncidents();
}

function renderActionTabs() {
  const labels = {
    substitute: "Substitute",
    courtesy: "Courtesy Runner",
    boo: "Batting Out Of Order",
    "terminate-dh": "Terminate DH",
  };

  actionTabsEl.innerHTML = getCurrentSituation().actionTypes
    .map(
      (type) => `
        <button
          class="action-tab ${type === activeAction ? "active" : ""}"
          type="button"
          data-action="${type}"
        >
          ${labels[type]}
        </button>
      `
    )
    .join("");

  actionTabsEl.querySelectorAll(".action-tab").forEach((button) => {
    button.addEventListener("click", () => {
      activeAction = button.dataset.action;
      renderActionTabs();
      renderForm();
    });
  });
}

function renderForm() {
  const row = selectedSlot ? state.lineup.find((item) => item.slot === selectedSlot) : null;

  if (!row) {
    selectedSlotChipEl.textContent = "No slot selected";
    editorTitleEl.textContent = "Select a lineup row";
    actionFormEl.innerHTML = `
      <p class="empty-state">Click a batting slot on the lineup card, then choose the guided action for this situation.</p>
    `;
    return;
  }

  selectedSlotChipEl.textContent = `Slot ${row.slot}`;
  editorTitleEl.textContent = `${row.current.name} #${row.current.number}`;

  if (activeAction === "substitute") {
    actionFormEl.innerHTML = `
      <div class="form-grid">
        <div class="form-field">
          <label for="sub-player">Replacement</label>
          <select id="sub-player">
            ${state.bench
              .map(
                (player) =>
                  `<option value="${player.number}">${player.name} #${player.number} (${player.label})</option>`
              )
              .join("")}
          </select>
        </div>
        <div class="form-field">
          <label for="sub-position">Position</label>
          <select id="sub-position">
            ${["P", "C", "1B", "2B", "3B", "SS", "LF", "CF", "RF", "DH"]
              .map((position) => `<option value="${position}">${position}</option>`)
              .join("")}
          </select>
        </div>
      </div>
    `;

    document.getElementById("sub-position").value = row.current.position;
    return;
  }

  if (activeAction === "courtesy") {
    actionFormEl.innerHTML = `
      <div class="form-grid">
        <div class="form-field">
          <label for="cr-player">Courtesy runner</label>
          <select id="cr-player">
            ${state.bench
              .map(
                (player) =>
                  `<option value="${player.number}">${player.name} #${player.number} (${player.label})</option>`
              )
              .join("")}
          </select>
        </div>
        <div class="form-field">
          <label>Current player</label>
          <span>${row.current.name} #${row.current.number} (${row.current.position})</span>
        </div>
      </div>
    `;
    return;
  }

  if (activeAction === "boo") {
    actionFormEl.innerHTML = `
      <div class="form-grid">
        <div class="form-field">
          <label for="boo-proper-slot">Proper batter slot</label>
          <select id="boo-proper-slot">
            ${state.lineup
              .map((item) => `<option value="${item.slot}">Slot ${item.slot} - ${item.current.name}</option>`)
              .join("")}
          </select>
        </div>
        <div class="form-field">
          <label for="boo-improper">Improper batter</label>
          <select id="boo-improper">
            ${state.lineup
              .map(
                (item) =>
                  `<option value="${item.current.number}">${item.current.name} #${item.current.number}</option>`
              )
              .join("")}
          </select>
        </div>
      </div>
    `;
    return;
  }

  if (activeAction === "terminate-dh") {
    actionFormEl.innerHTML = `
      <div class="form-grid">
        <div class="form-field">
          <label for="dh-position">New defensive position</label>
          <select id="dh-position">
            ${["P", "C", "1B", "2B", "3B", "SS", "LF", "CF", "RF"]
              .map((position) => `<option value="${position}">${position}</option>`)
              .join("")}
          </select>
        </div>
        <div class="form-field">
          <label>Current row</label>
          <span>${row.current.name} #${row.current.number} is listed as DH for ${formatDhFor(row.current.dhFor)}</span>
        </div>
      </div>
    `;
    return;
  }

  actionFormEl.innerHTML = `<p class="empty-state">Choose an action type above.</p>`;
}

function renderLineup() {
  lineupRowsEl.innerHTML = state.lineup
    .map((row) => {
      const primaryTag = row.current.role === "dh"
        ? `<span class="sub-pill is-dh">DH</span>`
        : row.current.role === "sub"
          ? `<span class="sub-pill">Sub</span>`
          : "";
      const courtesyTag = row.courtesyRunner
        ? `<span class="sub-pill is-courtesy">CR ${row.courtesyRunner.number}</span>`
        : "";
      const starterMeta = [];
      if (row.current.position) starterMeta.push(row.current.position);
      if (row.current.dhFor) starterMeta.push(`for ${row.current.dhFor.name} #${row.current.dhFor.number}`);
      const currentSubText = row.history.length
        ? row.history
            .map((item) => `${item.name} #${item.number}`)
            .join(" / ")
        : "—";
      const subNumberText = row.history.length ? row.history[0].number : "—";
      const currentNumber = row.current.number || "—";
      const currentPosition = row.current.position || "—";

      return `
        <button class="lineup-row ${row.slot === selectedSlot ? "selected" : ""}" type="button" data-slot="${row.slot}">
          <div class="lineup-row-cell"><span class="slot-number">${row.slot}</span></div>
          <div class="lineup-row-cell"><span class="player-number-short">${currentNumber}</span></div>
          <div class="lineup-row-cell is-stack">
            <p class="starter-name">${row.current.name}</p>
            <p class="starter-meta">${starterMeta.join(" · ") || currentPosition}</p>
            <div class="row-tagline">
              ${primaryTag}
              ${courtesyTag}
            </div>
          </div>
          <div class="lineup-row-cell"><span class="sub-number">${subNumberText}</span></div>
          <div class="lineup-row-cell is-stack">
            <p class="starter-name">${currentSubText}</p>
            <p class="sub-meta">${row.history.length ? "Previous player(s) in this slot" : "No substitutions yet"}</p>
          </div>
        </button>
      `;
    })
    .join("");

  lineupRowsEl.querySelectorAll(".lineup-row").forEach((button) => {
    button.addEventListener("click", () => {
      selectedSlot = Number(button.dataset.slot);
      if (!activeAction) {
        activeAction = getCurrentSituation().actionTypes[0];
      }
      render();
    });
  });
}

function renderBench() {
  benchListEl.innerHTML = state.bench.length
    ? state.bench
        .map(
          (player) => `
            <div class="bench-pill">
              <strong>${player.number}</strong>
              <span>${player.name}${player.label ? ` — ${player.label}` : ""}</span>
            </div>
          `
        )
        .join("")
    : `<p class="empty-state">No unused players left for this situation.</p>`;
}

function renderIncidents() {
  incidentLogEl.innerHTML = state.incidents.length
    ? state.incidents
        .map(
          (incident, index) => `
            <div class="incident-item">
              <p><strong>Note ${index + 1}.</strong> ${incident.summary}</p>
            </div>
          `
        )
        .join("")
    : `
      <div class="incident-item incident-item-empty"><p>Game notes area is empty.</p></div>
      <div class="incident-item incident-item-empty"><p>Add lineup actions to create a paper trail.</p></div>
      <div class="incident-item incident-item-empty"><p>Warnings, conferences, and substitutions can be documented here.</p></div>
    `;
}

function formatDhFor(dhFor) {
  if (!dhFor) return "nobody";
  return `${dhFor.name} #${dhFor.number} (${dhFor.position})`;
}

function setFeedback(title, body, tone = "") {
  feedbackTitleEl.textContent = title;
  feedbackBodyEl.textContent = body;
  feedbackCardEl.classList.remove("is-correct", "is-partial", "is-wrong");
  if (tone) {
    feedbackCardEl.classList.add(tone);
  }
}

function consumeBench(number) {
  const index = state.bench.findIndex((player) => player.number === number);
  if (index === -1) {
    return null;
  }
  return state.bench.splice(index, 1)[0];
}

function applyCurrentAction() {
  if (!selectedSlot) {
    setFeedback("Select a lineup slot first.", "The action editor works off a specific batting slot.", "is-wrong");
    return;
  }

  const row = state.lineup.find((item) => item.slot === selectedSlot);
  if (!row || !activeAction) {
    setFeedback("Choose an action first.", "Pick the update you want to apply to the selected row.", "is-wrong");
    return;
  }

  if (activeAction === "substitute") {
    const number = document.getElementById("sub-player").value;
    const position = document.getElementById("sub-position").value;
    const player = consumeBench(number);
    if (!player) {
      setFeedback("That player is no longer available.", "Choose a different bench player.", "is-wrong");
      return;
    }

    row.history.unshift({ ...row.current });
    row.current = {
      name: player.name,
      number: player.number,
      position,
      role: "sub",
      dhFor: null,
    };
    row.courtesyRunner = null;
    state.incidents.push({
      type: "substitute",
      summary: `${player.name} #${player.number} entered for ${row.history[0].name} in slot ${row.slot} and is now playing ${position}.`,
    });
    setFeedback("Substitution applied.", "The batting slot now shows the new player and preserves who left the game.");
  }

  if (activeAction === "courtesy") {
    const number = document.getElementById("cr-player").value;
    const player = state.bench.find((item) => item.number === number);
    if (!player) {
      setFeedback("Choose an available courtesy runner.", "The bench list should show who can be used here.", "is-wrong");
      return;
    }

    row.courtesyRunner = { name: player.name, number: player.number };
    state.incidents.push({
      type: "courtesy",
      summary: `${player.name} #${player.number} was recorded as a courtesy runner for ${row.current.name} in slot ${row.slot}.`,
    });
    setFeedback("Courtesy runner noted.", "The batting slot stays with the original player; the courtesy runner is just logged.");
  }

  if (activeAction === "boo") {
    const properSlot = Number(document.getElementById("boo-proper-slot").value);
    const improperBatterNumber = document.getElementById("boo-improper").value;
    const improperBatter = state.lineup.find((item) => item.current.number === improperBatterNumber)?.current;

    state.incidents.push({
      type: "boo",
      properSlot,
      improperBatterNumber,
      summary: `Batting out of order appeal logged: proper batter was slot ${properSlot}; improper batter was ${improperBatter?.name || "Unknown"} #${improperBatterNumber}.`,
    });
    setFeedback("Incident logged.", "The card now records the proper batting slot and the improper batter involved.");
  }

  if (activeAction === "terminate-dh") {
    const position = document.getElementById("dh-position").value;
    const previousDhFor = row.current.dhFor;
    row.current = {
      name: row.current.name,
      number: row.current.number,
      position,
      role: "starter",
      dhFor: null,
    };
    state.incidents.push({
      type: "terminate-dh",
      summary: `DH terminated in slot ${row.slot}: ${row.current.name} #${row.current.number} is now the ${position}, replacing ${formatDhFor(previousDhFor)} defensively.`,
    });
    setFeedback("DH relationship ended.", "That row now belongs to one player only, which is what the lineup card should show.");
  }

  render();
}

function checkWork() {
  const situation = getCurrentSituation();
  attempts += 1;
  if (situation.expected(state)) {
    score += 1;
    setFeedback(situation.successTitle, situation.successBody, "is-correct");
  } else {
    const hasWork = state.incidents.length || state.lineup.some((row) => row.history.length || row.courtesyRunner);
    setFeedback(
      hasWork ? "Close, but not there yet." : "Nothing has been recorded yet.",
      situation.helpBody,
      hasWork ? "is-partial" : "is-wrong"
    );
  }
  scoreLineEl.textContent = `${score} / ${attempts}`;
}

function resetSituation() {
  state = cloneSituation(getCurrentSituation());
  selectedSlot = null;
  activeAction = getCurrentSituation().actionTypes[0];
  setFeedback(
    "Choose a lineup slot to begin.",
    "This prototype uses guided actions so we can focus on lineup-card logic first."
  );
  render();
}

function nextSituation() {
  currentIndex = (currentIndex + 1) % situations.length;
  resetSituation();
}

applyBtn.addEventListener("click", applyCurrentAction);
resetBtn.addEventListener("click", resetSituation);
checkBtn.addEventListener("click", checkWork);
nextBtn.addEventListener("click", nextSituation);

resetSituation();
