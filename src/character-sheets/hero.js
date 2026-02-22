import './style.css';
import './hero-style.css';
import { SKILLS } from './skills.js';
import { DEFAULT_HERO_STATE, SKILL_UNLOCK_CODES, LEVEL_UP_CHOICES, ITEMS, ITEM_UNLOCK_CODES, dmgReduction } from './hero-data.js';

const STORAGE_KEY = 'hero-state';
const app = document.querySelector('#app');

// ---------------------------------------------------------------------------
// State management
// ---------------------------------------------------------------------------

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      // Migrate old state missing item fields
      if (!parsed.unlockedItemIds) parsed.unlockedItemIds = [];
      if (parsed.drinkingHornUsed === undefined) parsed.drinkingHornUsed = false;
      if (parsed.swordInnerStreak === undefined) parsed.swordInnerStreak = 0;
      if (parsed.swordBonusThrow === undefined) parsed.swordBonusThrow = false;
      return parsed;
    }
  } catch { /* ignore */ }
  return structuredClone(DEFAULT_HERO_STATE);
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let state = loadState();

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function hpColor(ratio) {
  if (ratio > 0.5) return '#8b1a1a';
  if (ratio > 0.25) return '#6a1515';
  return '#4a0e0e';
}

function healAmount(level) {
  return 5 + Math.floor(level / 2) * 5;
}

function regenPerMinute(level) {
  return 1 + Math.floor(level / 2);
}

/** Group skills by category for the skill menu. */
function groupedSkills() {
  const groups = [
    { label: 'Aktiv \u2014 Gegner', ids: [] },
    { label: 'Aktiv \u2014 Selbst', ids: [] },
    { label: 'Passive', ids: [] },
  ];
  for (const id of Object.keys(SKILL_UNLOCK_CODES)) {
    const skill = SKILLS[id];
    if (!skill) continue;
    if (skill.type === 'A') {
      const selfBuffIds = ['advance', 'double_attack', 'fine_sack', 'snipers_gambit', 'war_cry'];
      if (selfBuffIds.includes(id)) groups[1].ids.push(id);
      else groups[0].ids.push(id);
    } else {
      groups[2].ids.push(id);
    }
  }
  return groups;
}

// ---------------------------------------------------------------------------
// Item icon map
// ---------------------------------------------------------------------------

const ITEM_ICONS = {
  belt: '\u{1F9B4}',           // bone → belt
  arm_protectors: '\u{1F6E1}', // shield
  pelt: '\u{1F9CA}',           // ice → fur
  small_bag: '\u{1F45C}',      // handbag
  drinking_horn: '\u{1F943}',  // tumbler glass
  sword: '\u{2694}',           // crossed swords
};

// ---------------------------------------------------------------------------
// Rendering — items section
// ---------------------------------------------------------------------------

function itemEffectText(id) {
  const n = dmgReduction(state.level);
  switch (id) {
    case 'belt':           return `Außenkreis-Schaden reduziert um ${n}`;
    case 'arm_protectors': return `Mittelkreis-Schaden reduziert um ${n}`;
    case 'pelt':           return `Innenkreis-Schaden reduziert um ${n}`;
    case 'small_bag':      return '+1 Skill-Slot';
    case 'drinking_horn':  return `Heilen +${healAmount(state.level)} einmal pro Kampf`;
    case 'sword':          return '2 aufeinanderfolgende Innentreffer = 1 Bonuswurf';
    default:               return '';
  }
}

function renderItems() {
  return Object.entries(ITEMS).map(([id, item]) => {
    const unlocked = state.unlockedItemIds.includes(id);
    const rowClass = unlocked ? 'item-row' : 'item-row locked';
    const icon = ITEM_ICONS[id] || '?';

    let actionHtml;
    if (!unlocked) {
      actionHtml = `
        <div class="unlock-form">
          <input class="unlock-input" data-item-id="${id}" type="text" inputmode="numeric" maxlength="4" placeholder="____">
          <button class="item-unlock-btn" data-item-unlock="${id}">Unlock</button>
        </div>`;
    } else {
      actionHtml = '';
    }

    const effectText = unlocked ? `<div class="item-effect">${itemEffectText(id)}</div>` : '';

    return `
      <div class="${rowClass}">
        <div class="item-icon">${icon}</div>
        <div class="item-info">
          <div class="item-name">${item.name}</div>
          ${effectText}
        </div>
        <div class="item-actions">${actionHtml}</div>
      </div>`;
  }).join('');
}

function renderFightItems() {
  const parts = [];

  if (state.unlockedItemIds.includes('drinking_horn')) {
    const disabled = state.drinkingHornUsed || state.currentHp >= state.maxHp;
    parts.push(`
      <div class="item-row">
        <div class="item-icon">${ITEM_ICONS.drinking_horn}</div>
        <div class="item-info">
          <div class="item-name">Drinking Horn</div>
          <div class="item-effect">${state.drinkingHornUsed ? 'Bereits benutzt' : `Heilen +${healAmount(state.level)}`}</div>
        </div>
        <div class="item-actions">
          <button class="drinking-horn-btn" id="drinking-horn-use" ${disabled ? 'disabled' : ''}>Trinken</button>
        </div>
      </div>`);
  }

  if (state.unlockedItemIds.includes('sword')) {
    let swordAction;
    if (state.swordBonusThrow) {
      swordAction = `
        <div class="bonus-throw-indicator">
          <span class="bonus-throw-text">Bonuswurf!</span>
          <button class="bonus-throw-use-btn" id="sword-use-bonus">Use</button>
        </div>`;
    } else {
      swordAction = `
        <div class="sword-tracker">
          <span class="sword-streak">${state.swordInnerStreak}/2</span>
          <button class="sword-hit-btn inner-hit" id="sword-inner-hit">Inner</button>
          <button class="sword-hit-btn" id="sword-miss">Daneben</button>
        </div>`;
    }
    parts.push(`
      <div class="item-row">
        <div class="item-icon">${ITEM_ICONS.sword}</div>
        <div class="item-info">
          <div class="item-name">Sword</div>
          <div class="item-effect">2 aufeinanderfolgende Innentreffer = Bonuswurf</div>
        </div>
        <div class="item-actions">${swordAction}</div>
      </div>`);
  }

  return parts.join('');
}

// ---------------------------------------------------------------------------
// Rendering — main card
// ---------------------------------------------------------------------------

function renderCard() {
  const hpRatio = state.maxHp > 0 ? state.currentHp / state.maxHp : 0;
  const hpPct = Math.round(hpRatio * 100);

  const equippedHtml = Array.from({ length: state.maxSkillSlots }, (_, i) => {
    const skillId = state.equippedSkillIds[i];
    if (!skillId) {
      return `<div class="skill-slot empty-slot"><span class="empty-slot-text">\u2014 Leer \u2014</span></div>`;
    }
    const skill = SKILLS[skillId];
    if (!skill) return '';
    const isActive = skill.type === 'A';
    const badgeClass = isActive ? 'active' : 'passive';
    const uses = state.skillUsage[skillId] ?? skill.maxUses;

    const usesHtml = isActive
      ? `<button class="skill-use-btn" data-skill-id="${skillId}" ${uses <= 0 ? 'disabled' : ''}>Use<br><span class="btn-uses">${uses}/${skill.maxUses}</span></button>`
      : `<span class="skill-counter">&infin;</span>`;

    return `
      <div class="equipped-slot">
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
        <div class="character-name">Lord Patten <span class="level-badge">Lv. ${state.level}</span></div>
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
            <div class="hp-bar-text">${state.currentHp} / ${state.maxHp}</div>
          </div>
        </div>
        <div class="hp-controls">
          <button class="hp-btn" data-dir="down">&#9660;</button>
          <button class="hp-btn" data-dir="up">&#9650;</button>
        </div>
      </div>

      <div class="stats-row">
        <div class="stat-block">
          <span class="stat-label">Aktionen</span>
          <span class="stat-value">${state.actions}/Runde</span>
        </div>
        <div class="stat-block">
          <span class="stat-label">Regen${state.inFight || state.currentHp <= 0 ? ' (pausiert)' : ''}</span>
          <span class="stat-value${state.inFight || state.currentHp <= 0 ? ' regen-paused' : ''}">${regenPerMinute(state.level)} HP/min <span class="regen-timer" id="regen-timer"></span></span>
        </div>
      </div>

      <div class="target-section">
        <svg class="target-svg" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="56" fill="#0f0d08" stroke="#27ae60" stroke-width="2" />
          <circle cx="60" cy="60" r="36" fill="#151008" stroke="#f39c12" stroke-width="2" />
          <circle cx="60" cy="60" r="16" fill="#1a120a" stroke="#e74c3c" stroke-width="2" />
        </svg>
        <div class="target-legend">
          <div class="target-row"><span class="target-dot outer"></span><span class="target-zone">Außen</span><span class="target-dmg">${state.damage.outer} dmg${state.unlockedItemIds.includes('belt') ? `<span class="dmg-reduction">(-${dmgReduction(state.level)})</span>` : ''}</span></div>
          <div class="target-row"><span class="target-dot middle"></span><span class="target-zone">Mitte</span><span class="target-dmg">${state.damage.middle} dmg${state.unlockedItemIds.includes('arm_protectors') ? `<span class="dmg-reduction">(-${dmgReduction(state.level)})</span>` : ''}</span></div>
          <div class="target-row"><span class="target-dot inner"></span><span class="target-zone">Innen</span><span class="target-dmg">${state.damage.inner} dmg${state.unlockedItemIds.includes('pelt') ? `<span class="dmg-reduction">(-${dmgReduction(state.level)})</span>` : ''}</span></div>
        </div>
      </div>

      <div class="skills-header">Ausgerüstete Skills</div>
      <div class="skills-list">${equippedHtml}</div>

      <div class="hero-actions-row">
        <button class="skill-menu-btn" id="skill-menu-open" ${state.inFight ? 'disabled' : ''}>Skill Menu</button>
        <button class="skill-menu-btn" id="item-menu-open" ${state.inFight ? 'disabled' : ''}>Item Menu</button>
        <button class="level-up-btn" id="level-up-open" ${state.inFight ? 'disabled' : ''}>Level Up</button>
      </div>

      <div class="hero-bottom-row">
        ${state.inFight
          ? `<button class="fight-ended-btn" id="fight-ended">Kampf beenden</button>`
          : `<button class="start-fight-btn" id="start-fight">Kampf starten</button>`
        }
        <button class="heal-btn" id="heal-btn" ${state.currentHp >= state.maxHp || state.inFight ? 'disabled' : ''}>Heilen +${healAmount(state.level)}</button>
      </div>

      ${state.inFight && renderFightItems() ? `
        <div class="skills-header">Aktive Items</div>
        <div class="items-list">${renderFightItems()}</div>
      ` : ''}

      <button class="reset-btn">Reset</button>
    </div>`;
}

// ---------------------------------------------------------------------------
// Rendering — story overlay
// ---------------------------------------------------------------------------

function storyHtml() {
  const s = DEFAULT_HERO_STATE.story;
  return `
  <div class="info-overlay" id="story-overlay">
    <div class="info-panel">
      <button class="info-close-btn" id="story-close">&times;</button>
      <h2 class="info-title">${DEFAULT_HERO_STATE.name}</h2>
      <div class="info-section">
        <p>${s.desc}</p>
      </div>
      <div class="info-section">
        <h3>Wenn getroffen</h3>
        <p class="catchphrase">${s.onHit}</p>
      </div>
      <div class="info-section">
        <h3>Beim Treffer</h3>
        <p class="catchphrase">${s.onStrike}</p>
      </div>
      <div class="info-section">
        <h3>Bei Niederlage</h3>
        <p class="catchphrase">${s.onDefeat}</p>
      </div>
    </div>
  </div>`;
}

// ---------------------------------------------------------------------------
// Rendering — info overlay (game rules)
// ---------------------------------------------------------------------------

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
          <li>Innenkreis: 20 cm Durchmesser \u2014 <strong>5 dmg</strong> (Basis)</li>
          <li>Mittelkreis: 50 cm Durchmesser \u2014 <strong>3 dmg</strong> (Basis)</li>
          <li>Außenkreis: 100 cm Durchmesser \u2014 <strong>1 dmg</strong> (Basis)</li>
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

// ---------------------------------------------------------------------------
// Rendering — level-up overlay
// ---------------------------------------------------------------------------

function levelUpHtml() {
  const nextLevel = state.level + 1;

  const choicesHtml = LEVEL_UP_CHOICES.map(c =>
    `<button class="level-up-choice" data-choice="${c.id}">${c.label}</button>`
  ).join('');

  return `
  <div class="level-up-overlay" id="levelup-overlay">
    <div class="level-up-panel">
      <h2 class="level-up-title">Level Up auf ${nextLevel}</h2>
      <div class="level-up-choices">${choicesHtml}</div>
      <button class="level-up-cancel" id="levelup-cancel">Abbrechen</button>
    </div>
  </div>`;
}

// ---------------------------------------------------------------------------
// Rendering — skill menu overlay
// ---------------------------------------------------------------------------

function skillMenuHtml() {
  const groups = groupedSkills();

  let html = `
  <div class="skill-menu-overlay" id="skillmenu-overlay">
    <div class="skill-menu-panel">
      <button class="skill-menu-close" id="skillmenu-close">&times;</button>
      <h2 class="skill-menu-title">Skills</h2>`;

  for (const group of groups) {
    if (group.ids.length === 0) continue;
    html += `<div class="skill-group-header">${group.label}</div>`;
    for (const id of group.ids) {
      const skill = SKILLS[id];
      const isUnlocked = state.unlockedSkillIds.includes(id);
      const isEquipped = state.equippedSkillIds.includes(id);
      const slotsAvailable = state.equippedSkillIds.length < state.maxSkillSlots;
      const rowClass = isUnlocked ? 'skill-row' : 'skill-row locked';
      const badgeClass = skill.type === 'A' ? 'active' : 'passive';

      let actionHtml;
      if (!isUnlocked) {
        actionHtml = `
          <div class="unlock-form">
            <input class="unlock-input" data-skill-id="${id}" type="text" inputmode="numeric" maxlength="4" placeholder="____">
            <button class="unlock-btn" data-unlock="${id}">Unlock</button>
          </div>`;
      } else if (isEquipped) {
        actionHtml = `<button class="unequip-menu-btn" data-menu-unequip="${id}">Unequip</button>`;
      } else {
        actionHtml = `<button class="equip-btn" data-equip="${id}" ${!slotsAvailable ? 'disabled' : ''}>Equip</button>`;
      }

      html += `
        <div class="${rowClass}">
          <div class="skill-badge ${badgeClass}">${skill.type}</div>
          <div class="skill-info">
            <div class="skill-name">${skill.name}</div>
            <div class="skill-desc">${skill.desc}</div>
          </div>
          <div class="skill-row-actions">${actionHtml}</div>
        </div>`;
    }
  }

  html += `</div></div>`;
  return html;
}

// ---------------------------------------------------------------------------
// Rendering — item menu overlay
// ---------------------------------------------------------------------------

function itemMenuHtml() {
  let html = `
  <div class="skill-menu-overlay" id="itemmenu-overlay">
    <div class="skill-menu-panel">
      <button class="skill-menu-close" id="itemmenu-close">&times;</button>
      <h2 class="skill-menu-title">Items</h2>
      <div class="items-list">${renderItems()}</div>
    </div>
  </div>`;
  return html;
}

// ---------------------------------------------------------------------------
// Rendering — level-up summary overlay
// ---------------------------------------------------------------------------

function levelUpSummaryHtml(summaryLines) {
  if (!summaryLines || summaryLines.length === 0) return '';
  return `
  <div class="info-overlay" id="levelup-summary-overlay">
    <div class="info-panel">
      <button class="info-close-btn" id="levelup-summary-close">&times;</button>
      <h2 class="info-title">Level ${state.level} erreicht!</h2>
      <div class="info-section">
        <ul>${summaryLines.map(l => `<li>${l}</li>`).join('')}</ul>
      </div>
    </div>
  </div>`;
}

// ---------------------------------------------------------------------------
// Main render + event binding
// ---------------------------------------------------------------------------

function render(levelUpSummary) {
  app.innerHTML = renderCard() + storyHtml() + INFO_HTML + levelUpHtml() + skillMenuHtml() + itemMenuHtml() + levelUpSummaryHtml(levelUpSummary);

  // HP buttons
  document.querySelectorAll('.hp-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.dir === 'up') {
        if (state.currentHp >= state.maxHp) return;
        if (!confirm('Letzten Treffer rückgängig machen?')) return;
        state.currentHp++;
      }
      if (btn.dataset.dir === 'down' && state.currentHp > 0) state.currentHp--;
      saveState();
      render();
    });
  });

  // Skill use buttons (equipped skills)
  document.querySelectorAll('.skill-use-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const skillId = btn.dataset.skillId;
      const skill = SKILLS[skillId];
      if (!skill) return;
      const uses = state.skillUsage[skillId] ?? skill.maxUses;
      if (uses > 0) {
        state.skillUsage[skillId] = uses - 1;
        saveState();
        render();
      }
    });
  });


  // Start / End Fight
  const startFightBtn = document.getElementById('start-fight');
  const endFightBtn = document.getElementById('fight-ended');

  if (startFightBtn) {
    startFightBtn.addEventListener('click', () => {
      if (!confirm('Kampf starten? Regeneration wird pausiert.')) return;
      state.inFight = true;
      saveState();
      render();
    });
  }

  if (endFightBtn) {
    endFightBtn.addEventListener('click', () => {
      if (!confirm('Kampf beenden? Skill-Einsätze werden wiederhergestellt und Regeneration wird fortgesetzt.')) return;
      state.skillUsage = {};
      state.inFight = false;
      state.drinkingHornUsed = false;
      state.swordInnerStreak = 0;
      state.swordBonusThrow = false;
      saveState();
      render();
    });
  }

  // Heal (only outside fights)
  document.getElementById('heal-btn').addEventListener('click', () => {
    if (state.currentHp >= state.maxHp || state.inFight) return;
    const heal = healAmount(state.level);
    if (!confirm(`${heal} HP heilen? Nur verwenden, wenn die erforderliche Aktion abgeschlossen wurde.`)) return;
    state.currentHp = Math.min(state.currentHp + heal, state.maxHp);
    saveState();
    render();
  });

  // Reset — double confirmation (emergency only)
  document.querySelector('.reset-btn').addEventListener('click', () => {
    if (!confirm('WARNUNG: Dies löscht den GESAMTEN Fortschritt (Level, Skills, Items). Nur für Notfälle. Fortfahren?')) return;
    if (!confirm('Bist du absolut sicher? Dies kann nicht rückgängig gemacht werden.')) return;
    state = structuredClone(DEFAULT_HERO_STATE);
    saveState();
    render();
  });

  // --- Overlays ---

  // Story overlay
  bindOverlay('story-overlay', 'story-open', 'story-close');

  // Info overlay
  bindOverlay('info-overlay', 'info-open', 'info-close');

  // Level-up overlay
  const levelupOverlay = document.getElementById('levelup-overlay');
  document.getElementById('level-up-open').addEventListener('click', () => {
    levelupOverlay.classList.add('visible');
  });
  document.getElementById('levelup-cancel').addEventListener('click', () => {
    levelupOverlay.classList.remove('visible');
  });
  levelupOverlay.addEventListener('click', (e) => {
    if (e.target === levelupOverlay) levelupOverlay.classList.remove('visible');
  });

  // Level-up choice buttons
  document.querySelectorAll('.level-up-choice').forEach(btn => {
    btn.addEventListener('click', () => {
      const choiceId = btn.dataset.choice;
      const choice = LEVEL_UP_CHOICES.find(c => c.id === choiceId);
      if (!choice) return;

      const nextLevel = state.level + 1;
      const isBonusLevel = nextLevel % 5 === 0;

      if (!confirm(`Level Up auf ${nextLevel}?\n${choice.label}`)) return;

      choice.apply(state);
      state.level = nextLevel;
      state.levelUpHistory.push(choiceId);

      const summary = [choice.label];
      if (isBonusLevel) {
        state.maxSkillSlots += 1;
        if (state.actions < 3) {
          state.actions += 1;
          summary.push('+1 Aktion, +1 Skill-Slot');
        } else {
          summary.push('+1 Skill-Slot');
        }
      }
      if (nextLevel % 2 === 0) {
        summary.push(`Heilen steigt auf +${healAmount(nextLevel)}`);
        summary.push(`Regen steigt auf ${regenPerMinute(nextLevel)} HP/min`);
      }
      const hasProtectionItem = state.unlockedItemIds.some(id => ['belt', 'arm_protectors', 'pelt'].includes(id));
      if (isBonusLevel && hasProtectionItem) {
        summary.push(`Schadensreduktion steigt auf -${dmgReduction(nextLevel)}`);
      }
      if (state.unlockedItemIds.includes('drinking_horn') && nextLevel % 2 === 0) {
        summary.push(`Drinking Horn Heilung steigt auf +${healAmount(nextLevel)}`);
      }

      saveState();
      levelupOverlay.classList.remove('visible');
      render(summary);
      // Show the summary overlay
      document.getElementById('levelup-summary-overlay')?.classList.add('visible');
    });
  });

  // Skill menu overlay
  const skillmenuOverlay = document.getElementById('skillmenu-overlay');
  document.getElementById('skill-menu-open').addEventListener('click', () => {
    skillmenuOverlay.classList.add('visible');
  });
  document.getElementById('skillmenu-close').addEventListener('click', () => {
    skillmenuOverlay.classList.remove('visible');
  });
  skillmenuOverlay.addEventListener('click', (e) => {
    if (e.target === skillmenuOverlay) skillmenuOverlay.classList.remove('visible');
  });

  // Item menu overlay
  const itemmenuOverlay = document.getElementById('itemmenu-overlay');
  document.getElementById('item-menu-open').addEventListener('click', () => {
    itemmenuOverlay.classList.add('visible');
  });
  document.getElementById('itemmenu-close').addEventListener('click', () => {
    itemmenuOverlay.classList.remove('visible');
  });
  itemmenuOverlay.addEventListener('click', (e) => {
    if (e.target === itemmenuOverlay) itemmenuOverlay.classList.remove('visible');
  });

  // Level-up summary overlay
  const levelupSummary = document.getElementById('levelup-summary-overlay');
  if (levelupSummary) {
    document.getElementById('levelup-summary-close').addEventListener('click', () => {
      levelupSummary.classList.remove('visible');
    });
    levelupSummary.addEventListener('click', (ev) => {
      if (ev.target === levelupSummary) levelupSummary.classList.remove('visible');
    });
  }

  // Unlock buttons
  document.querySelectorAll('.unlock-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const skillId = btn.dataset.unlock;
      const input = document.querySelector(`.unlock-input[data-skill-id="${skillId}"]`);
      const code = input.value.trim();
      const correctCode = SKILL_UNLOCK_CODES[skillId];

      if (code === correctCode) {
        state.unlockedSkillIds.push(skillId);
        saveState();
        render();
        // Re-open skill menu after re-render
        document.getElementById('skillmenu-overlay').classList.add('visible');
      } else {
        input.classList.add('error');
        input.value = '';
        setTimeout(() => input.classList.remove('error'), 400);
      }
    });
  });

  // Equip buttons
  document.querySelectorAll('.equip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const skillId = btn.dataset.equip;
      if (state.equippedSkillIds.length >= state.maxSkillSlots) return;
      if (state.equippedSkillIds.includes(skillId)) return;

      state.equippedSkillIds.push(skillId);
      // Initialise usage if not already tracked
      const skill = SKILLS[skillId];
      if (skill && !(skillId in state.skillUsage)) {
        state.skillUsage[skillId] = skill.maxUses;
      }
      saveState();
      render();
      // Re-open skill menu after re-render
      document.getElementById('skillmenu-overlay').classList.add('visible');
    });
  });

  // Unequip from skill menu
  document.querySelectorAll('.unequip-menu-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const skillId = btn.dataset.menuUnequip;
      state.equippedSkillIds = state.equippedSkillIds.filter(id => id !== skillId);
      saveState();
      render();
      document.getElementById('skillmenu-overlay').classList.add('visible');
    });
  });

  // --- Item events ---

  // Item unlock buttons
  document.querySelectorAll('.item-unlock-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const itemId = btn.dataset.itemUnlock;
      const input = document.querySelector(`.unlock-input[data-item-id="${itemId}"]`);
      const code = input.value.trim();
      const correctCode = ITEM_UNLOCK_CODES[itemId];

      if (code === correctCode) {
        state.unlockedItemIds.push(itemId);
        // Small bag gives +1 skill slot on unlock
        if (itemId === 'small_bag') {
          state.maxSkillSlots += 1;
        }
        saveState();
        render();
        // Re-open item menu after re-render
        document.getElementById('itemmenu-overlay').classList.add('visible');
      } else {
        input.classList.add('error');
        input.value = '';
        setTimeout(() => input.classList.remove('error'), 400);
      }
    });
  });

  // Drinking horn — heal during fight
  const drinkBtn = document.getElementById('drinking-horn-use');
  if (drinkBtn) {
    drinkBtn.addEventListener('click', () => {
      if (state.drinkingHornUsed || state.currentHp >= state.maxHp) return;
      const heal = healAmount(state.level);
      state.currentHp = Math.min(state.currentHp + heal, state.maxHp);
      state.drinkingHornUsed = true;
      saveState();
      render();
    });
  }

  // Sword — inner hit
  const swordInnerBtn = document.getElementById('sword-inner-hit');
  if (swordInnerBtn) {
    swordInnerBtn.addEventListener('click', () => {
      state.swordInnerStreak += 1;
      if (state.swordInnerStreak >= 2) {
        state.swordInnerStreak = 0;
        state.swordBonusThrow = true;
      }
      saveState();
      render();
    });
  }

  // Sword — miss (non-inner hit, resets streak)
  const swordMissBtn = document.getElementById('sword-miss');
  if (swordMissBtn) {
    swordMissBtn.addEventListener('click', () => {
      state.swordInnerStreak = 0;
      saveState();
      render();
    });
  }

  // Sword — use bonus throw
  const swordUseBonusBtn = document.getElementById('sword-use-bonus');
  if (swordUseBonusBtn) {
    swordUseBonusBtn.addEventListener('click', () => {
      state.swordBonusThrow = false;
      saveState();
      render();
    });
  }

  // Keep regen timer in sync after re-render
  if (typeof regenState !== 'undefined') updateTimerDisplay();
}

// ---------------------------------------------------------------------------
// Overlay helper
// ---------------------------------------------------------------------------

function bindOverlay(overlayId, openId, closeId) {
  const overlay = document.getElementById(overlayId);
  document.getElementById(openId).addEventListener('click', () => {
    overlay.classList.add('visible');
  });
  document.getElementById(closeId).addEventListener('click', () => {
    overlay.classList.remove('visible');
  });
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('visible');
  });
}

// ---------------------------------------------------------------------------
// HP Regeneration — persisted countdown, pauses during fights
// ---------------------------------------------------------------------------

const REGEN_KEY = 'hero-regen';

function loadRegen() {
  try {
    const saved = localStorage.getItem(REGEN_KEY);
    if (saved) return JSON.parse(saved);
  } catch { /* ignore */ }
  return { secondsLeft: 60 };
}

function saveRegen() {
  localStorage.setItem(REGEN_KEY, JSON.stringify(regenState));
}

let regenState = loadRegen();

function tickRegen() {
  if (state.inFight || state.currentHp <= 0) {
    updateTimerDisplay();
    return;
  }

  regenState.secondsLeft--;
  if (regenState.secondsLeft <= 0) {
    regenState.secondsLeft = 60;
    if (state.currentHp < state.maxHp) {
      const regen = regenPerMinute(state.level);
      state.currentHp = Math.min(state.currentHp + regen, state.maxHp);
      saveState();
      saveRegen();
      render();
      return;
    }
  }
  saveRegen();
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const el = document.getElementById('regen-timer');
  if (!el) return;
  el.textContent = `(${regenState.secondsLeft}s)`;
}

setInterval(tickRegen, 1000);

// ---------------------------------------------------------------------------
// Boot
// ---------------------------------------------------------------------------

render();
updateTimerDisplay();
