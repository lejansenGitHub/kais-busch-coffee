import './style.css';
import './quest-style.css';
import { SKILLS } from './skills.js';
import { SKILL_UNLOCK_CODES, ITEM_UNLOCK_CODES } from './hero-data.js';
import hubi from './hubi.js';
import hubiBoss from './hubi-boss.js';
import hubiEndboss from './hubi-endboss.js';
import simon from './simon.js';
import simonStrong from './simon-strong.js';
import eva from './eva.js';
import elena from './elena.js';
import mirko from './mirko.js';
import nick from './nick.js';
import jess from './jess.js';
import father from './father.js';
import daniel from './daniel.js';
import lukas from './lukas.js';
import kaiWeak from './kai-weak.js';
import kai from './kai.js';
import katta from './katta.js';

const STORAGE_KEY = 'character-sheets-state';

const DIFFICULTY = {
  weak:   { mult: 0.6, label: 'Weak' },
  easy:   { mult: 0.8, label: 'Easy' },
  normal: { mult: 1.0, label: 'Normal' },
  hard:   { mult: 1.2, label: 'Hard' },
  strong: { mult: 1.4, label: 'Strong' },
};

function resolveCharacter(raw) {
  const resolved = {
    ...raw,
    difficulty: 'normal',
    skills: raw.skills
      .map(id => {
        const skill = SKILLS[id];
        return { ...skill, currentUses: skill.maxUses };
      })
      .sort((a, b) => (a.type === 'A' ? 0 : 1) - (b.type === 'A' ? 0 : 1)),
  };
  function resolveReward(r) {
    if (r.skill) {
      const skill = SKILLS[r.skill];
      return { type: 'skill', name: skill.name, code: SKILL_UNLOCK_CODES[r.skill] };
    } else if (r.item) {
      return { type: 'item', name: r.item.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()), code: ITEM_UNLOCK_CODES[r.item] };
    } else if (r.quest_item) {
      return { type: 'quest_item', name: r.quest_item };
    }
  }
  if (raw.rewards) {
    resolved.rewards = raw.rewards.map(resolveReward);
  } else if (raw.reward) {
    resolved.rewards = [resolveReward(raw.reward)];
  }
  return resolved;
}

const DEFAULT_CHARACTERS = [hubi, hubiBoss, hubiEndboss, simon, kaiWeak, jess, nick, eva, daniel, mirko, father, lukas, elena, katta, kai, simonStrong].map(resolveCharacter);

const app = document.querySelector('#app');
const characterId = app.dataset.character;
if (!characterId) throw new Error('No data-character attribute on #app');

const charIndex = DEFAULT_CHARACTERS.findIndex(c => c.id === characterId);
if (charIndex === -1) throw new Error(`Unknown character: ${characterId}`);

const STATE_VERSION = 3;
const VERSION_KEY = 'character-sheets-version';

function loadState() {
  try {
    const ver = Number(localStorage.getItem(VERSION_KEY) || 0);
    if (ver < STATE_VERSION) {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.setItem(VERSION_KEY, STATE_VERSION);
      return structuredClone(DEFAULT_CHARACTERS);
    }
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      for (let i = parsed.length; i < DEFAULT_CHARACTERS.length; i++) {
        parsed.push(structuredClone(DEFAULT_CHARACTERS[i]));
      }
      for (let i = 0; i < parsed.length; i++) {
        const def = DEFAULT_CHARACTERS[i];
        if (def && parsed[i].difficulty === undefined) {
          parsed[i].difficulty = 'normal';
        }
      }
      return parsed;
    }
  } catch { /* ignore */ }
  localStorage.setItem(VERSION_KEY, STATE_VERSION);
  return structuredClone(DEFAULT_CHARACTERS);
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(characters));
}

let characters = loadState();

function applyDifficulty(charIdx, key) {
  const base = DEFAULT_CHARACTERS[charIdx];
  const { mult } = DIFFICULTY[key];
  const c = characters[charIdx];
  c.maxHp = Math.round(base.maxHp * mult);
  c.currentHp = c.maxHp;
  c.damage = {
    outer:  Math.round(base.damage.outer * mult),
    middle: Math.round(base.damage.middle * mult),
    inner:  Math.round(base.damage.inner * mult),
  };
  c.skills.forEach((s, i) => {
    s.currentUses = base.skills[i].maxUses;
  });
  c.difficulty = key;
  saveState();
  render();
}

function hpColor(ratio) {
  if (ratio > 0.5) return '#8b1a1a';
  if (ratio > 0.25) return '#6a1515';
  return '#4a0e0e';
}

function renderCard(char) {
  const hpRatio = char.maxHp > 0 ? char.currentHp / char.maxHp : 0;
  const hpPct = Math.round(hpRatio * 100);

  const MAX_SLOTS = Math.max(3, char.skills.length);
  const skillsHtml = Array.from({ length: MAX_SLOTS }, (_, si) => {
    const skill = char.skills[si];
    if (!skill) {
      return `<div class="skill-slot empty-slot"><span class="empty-slot-text">— Leer —</span></div>`;
    }
    const isActive = skill.type === 'A';
    const badgeClass = isActive ? 'active' : 'passive';
    const usesHtml = isActive
      ? `<button class="skill-use-btn" data-skill="${si}" ${skill.currentUses <= 0 ? 'disabled' : ''}>Use<br><span class="btn-uses">${skill.currentUses}/${skill.maxUses}</span></button>`
      : `<span class="skill-counter">&infin;</span>`;

    return `
      <div class="skill-slot">
        <div class="skill-badge ${badgeClass}">${skill.type}</div>
        <div class="skill-info">
          <div class="skill-name">${skill.name}</div>
          <div class="skill-desc">${skill.desc}</div>
          ${skill.duration ? `<div class="skill-duration">${skill.duration} ${skill.duration !== 1 ? 'Würfe' : 'Wurf'}</div>` : ''}
        </div>
        <div class="skill-uses">${usesHtml}</div>
      </div>`;
  }).join('');

  return `
    <div class="character-card">
      <div class="card-header">
        <div class="character-name">${char.name} <span class="level-badge">Lv. ${char.level}</span></div>
        <div class="header-buttons">
          <button class="info-btn" id="story-open">S</button>
          <button class="info-btn" id="info-open">i</button>
        </div>
      </div>

      <div class="hp-section">
        <div class="hp-bar-wrapper">
          <div class="hp-label">HP</div>
          <div class="hp-bar-track">
            <div class="hp-bar-fill" style="width:${hpPct}%;background:${hpColor(hpRatio)}"></div>
            <div class="hp-bar-text">${char.currentHp} / ${char.maxHp}</div>
          </div>
        </div>
        <div class="hp-controls">
          <button class="hp-btn" data-dir="down">&#9660;</button>
          <button class="hp-btn" data-dir="up">&#9650;</button>
        </div>
      </div>

      <div class="actions-line">
        <span class="actions-label">Aktionen pro Runde</span>
        <span class="actions-value">${char.actions}</span>
      </div>

      <div class="target-section">
        <svg class="target-svg" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="56" fill="#0f0d08" stroke="#27ae60" stroke-width="2" />
          <circle cx="60" cy="60" r="36" fill="#151008" stroke="#f39c12" stroke-width="2" />
          <circle cx="60" cy="60" r="16" fill="#1a120a" stroke="#e74c3c" stroke-width="2" />
        </svg>
        <div class="target-legend">
          <div class="target-row"><span class="target-dot outer"></span><span class="target-zone">Außen</span><span class="target-dmg">${char.damage.outer} Schaden</span></div>
          <div class="target-row"><span class="target-dot middle"></span><span class="target-zone">Mitte</span><span class="target-dmg">${char.damage.middle} Schaden</span></div>
          <div class="target-row"><span class="target-dot inner"></span><span class="target-zone">Innen</span><span class="target-dmg">${char.damage.inner} Schaden</span></div>
        </div>
      </div>

      <div class="skills-header">Skills</div>
      <div class="skills-list">${skillsHtml}</div>

      ${char.rewards ? `
      <div class="reward-section">
        <div class="skills-header">Belohnung</div>
        <div class="quest-rewards">
          ${char.rewards.map(r => `<div class="reward-row">
            <span class="reward-type ${r.type}">${r.type === 'skill' ? 'S' : r.type === 'quest_item' ? 'Q' : 'I'}</span>
            <span class="reward-name">${r.name}</span>
            ${r.code ? `<span class="reward-code">${r.code}</span>` : ''}
          </div>`).join('')}
        </div>
      </div>` : ''}

      <div class="bottom-controls">
        <div class="difficulty-group">
          ${Object.entries(DIFFICULTY).map(([key, { label }]) =>
            `<button class="difficulty-btn${char.difficulty === key ? ' active' : ''}" data-diff="${key}">${label}</button>`
          ).join('')}
        </div>
        <button class="reset-btn">Reset</button>
      </div>
    </div>`;
}

function storyHtml(char) {
  const s = char.story || {};
  return `
  <div class="info-overlay" id="story-overlay">
    <div class="info-panel">
      <button class="info-close-btn" id="story-close">&times;</button>
      <h2 class="info-title">${char.name}</h2>
      <div class="info-section">
        <p>${s.desc || ''}</p>
      </div>
      <div class="info-section">
        <h3>Wenn getroffen</h3>
        <p class="catchphrase">${s.onHit || ''}</p>
      </div>
      <div class="info-section">
        <h3>Beim Treffer</h3>
        <p class="catchphrase">${s.onStrike || ''}</p>
      </div>
      <div class="info-section">
        <h3>Bei Niederlage</h3>
        <p class="catchphrase">${s.onDefeat || ''}</p>
      </div>
    </div>
  </div>`;
}

const INFO_HTML = `
  <div class="info-overlay" id="info-overlay">
    <div class="info-panel">
      <button class="info-close-btn" id="info-close">&times;</button>
      <h2 class="info-title">Spielregeln</h2>
      <div class="info-section">
        <h3>Übersicht</h3>
        <p>Rundenbasiertes Duell. Spieler wechseln sich ab. Reduziere die HP deines Gegners auf 0, um zu gewinnen.</p>
      </div>
      <div class="info-section">
        <h3>Zielscheibe</h3>
        <ul>
          <li>Innenkreis: 20 cm Durchmesser — <strong>5 dmg</strong></li>
          <li>Mittelkreis: 50 cm Durchmesser — <strong>3 dmg</strong></li>
          <li>Außenkreis: 100 cm Durchmesser — <strong>1 dmg</strong></li>
        </ul>
        <p>Wenn ein Sandsack einen inneren Kreis auch nur leicht berührt, zählt er als diese Zone. Immer <strong>direkt von oben</strong> beurteilen.</p>
      </div>
      <div class="info-section">
        <h3>Entfernung</h3>
        <p>Spieler stehen <strong>5,5 m</strong> von der Zielscheibe entfernt.</p>
      </div>
      <div class="info-section">
        <h3>Sandsäcke</h3>
        <p>Es gibt 3 Sandsack-Qualitäten, die sich in <strong>Größe, Gewicht und Griffigkeit</strong> unterscheiden. Normalerweise wirft man mit dem mittleren. Skills oder Passives können eine bessere oder schlechtere Qualität erzwingen.</p>
      </div>
      <div class="info-section">
        <h3>Aktionen</h3>
        <p>Pro Runde hat ein Spieler eine bestimmte Anzahl an <strong>Aktionen</strong>. Eine Aktion ist entweder ein <strong>Wurf</strong> oder das <strong>Einsetzen eines Skills</strong>. Double Attack zählt als 1 Aktion.</p>
      </div>
      <div class="info-section">
        <h3>Skills</h3>
        <p>Jeder Spieler hat bis zu 3 Skill-Slots. Aktive Skills (<strong>A</strong>) haben begrenzte Einsätze und kosten 1 Aktion. Passive Skills (<strong>P</strong>) sind immer aktiv.</p>
      </div>
    </div>
  </div>`;

function render() {
  const char = characters[charIndex];
  const defaultChar = DEFAULT_CHARACTERS[charIndex];
  app.innerHTML = renderCard(char) + storyHtml(defaultChar) + INFO_HTML;

  // HP buttons
  document.querySelectorAll('.hp-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const c = characters[charIndex];
      if (btn.dataset.dir === 'up') {
        if (c.currentHp >= c.maxHp) return;
        if (!confirm('Letzten Treffer rückgängig machen?')) return;
        c.currentHp++;
      }
      if (btn.dataset.dir === 'down' && c.currentHp > 0) c.currentHp--;
      saveState();
      render();
    });
  });

  // Skill use buttons
  document.querySelectorAll('.skill-use-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const skill = characters[charIndex].skills[Number(btn.dataset.skill)];
      if (skill.currentUses > 0) {
        skill.currentUses--;
        saveState();
        render();
      }
    });
  });

  // Difficulty buttons
  document.querySelectorAll('.difficulty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyDifficulty(charIndex, btn.dataset.diff);
    });
  });

  // Reset button
  document.querySelector('.reset-btn').addEventListener('click', () => {
    if (confirm(`${characters[charIndex].name} zurücksetzen?`)) {
      characters[charIndex] = structuredClone(DEFAULT_CHARACTERS[charIndex]);
      characters[charIndex].difficulty = 'normal';
      saveState();
      render();
    }
  });

  // Info overlay
  const overlay = document.getElementById('info-overlay');
  document.getElementById('info-open').addEventListener('click', () => {
    overlay.classList.add('visible');
  });
  document.getElementById('info-close').addEventListener('click', () => {
    overlay.classList.remove('visible');
  });
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('visible');
  });

  // Story overlay
  const storyOverlay = document.getElementById('story-overlay');
  document.getElementById('story-open').addEventListener('click', () => {
    storyOverlay.classList.add('visible');
  });
  document.getElementById('story-close').addEventListener('click', () => {
    storyOverlay.classList.remove('visible');
  });
  storyOverlay.addEventListener('click', (e) => {
    if (e.target === storyOverlay) storyOverlay.classList.remove('visible');
  });
}

render();
