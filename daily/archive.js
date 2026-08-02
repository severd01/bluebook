import { formatChallengeDate, getArchivedChallenges } from "./challenge-data.js?v=20260725-fpsr-publish";

const archiveGridEl = document.getElementById("archive-grid");
const lineupChallenges = [
  {
    date: "2026-05-13",
    title: "Player/DH Home Run",
    summary:
      "Jones pinch-ran for Miller and terminated the DH. Later that inning Miller returned unreported and hit a tying 2-run home run. Rule on the appeal.",
    sport: "Baseball",
    mechanics: "Player/DH",
    href: "../managing-scorecard/?date=2026-05-13",
    type: "Rules Challenge",
  },
  {
    date: "2026-05-10",
    title: "Lineup Card Request",
    summary:
      "A coach asks for Jones to hit for Young. Read the A/B/C lineup-card markings and decide whether the reported substitute is eligible.",
    sport: "Baseball",
    mechanics: "Lineup Card",
    href: "../managing-scorecard/?date=2026-05-10",
    type: "Rules Challenge",
  },
];

function renderArchiveCard(challenge) {
  const href = challenge.href || `./?date=${encodeURIComponent(challenge.date)}`;
  const type = challenge.type || "Animated";

  return `
    <article class="archive-card">
      <p class="archive-date">${formatChallengeDate(challenge.date)}</p>
      <h2 class="archive-title">${challenge.title}</h2>
      <p class="archive-copy">${challenge.summary}</p>
      <div class="archive-meta">
        <span class="archive-pill">${challenge.sport}</span>
        <span class="archive-pill">${challenge.mechanics}</span>
        <span class="archive-pill">${type}</span>
      </div>
      <div class="archive-actions">
        <a class="rail-link rail-link-active" href="${href}">Open Challenge</a>
      </div>
    </article>
  `;
}

function renderArchive() {
  if (!archiveGridEl) {
    return;
  }

  const archivedChallenges = [...lineupChallenges, ...getArchivedChallenges(new Date())].sort(
    (a, b) => (a.date < b.date ? 1 : -1)
  );

  if (!archivedChallenges.length) {
    archiveGridEl.innerHTML = `
      <article class="archive-card">
        <p class="archive-date">Archive Building</p>
        <h2 class="archive-title">More daily reps are on the way</h2>
        <p class="archive-copy">
          The archive will populate automatically as we add completed situation challenge entries.
        </p>
        <div class="archive-actions">
          <a class="rail-link rail-link-active" href="./">Back to Today's Situation</a>
        </div>
      </article>
    `;
    return;
  }

  archiveGridEl.innerHTML = archivedChallenges.map(renderArchiveCard).join("");
}

renderArchive();
