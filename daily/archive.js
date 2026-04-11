import { formatChallengeDate, getArchivedChallenges } from "./challenge-data.js";

const archiveGridEl = document.getElementById("archive-grid");

function renderArchiveCard(challenge) {
  return `
    <article class="archive-card">
      <p class="archive-date">${formatChallengeDate(challenge.date)}</p>
      <h2 class="archive-title">${challenge.title}</h2>
      <p class="archive-copy">${challenge.summary}</p>
      <div class="archive-meta">
        <span class="archive-pill">${challenge.sport}</span>
        <span class="archive-pill">${challenge.mechanics}</span>
        <span class="archive-pill">Animated</span>
      </div>
      <div class="archive-actions">
        <a class="rail-link rail-link-active" href="./?date=${encodeURIComponent(challenge.date)}">Open Challenge</a>
      </div>
    </article>
  `;
}

function renderArchive() {
  if (!archiveGridEl) {
    return;
  }

  const archivedChallenges = getArchivedChallenges(new Date());

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
