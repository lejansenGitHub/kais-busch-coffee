import './style.css';
import { SKILLS } from './skills.js';
import { SKILL_UNLOCK_CODES, ITEMS, ITEM_UNLOCK_CODES } from './hero-data.js';

const app = document.querySelector('#app');

const entries = Object.entries(SKILLS);
const active = entries.filter(([, s]) => s.type === 'A');
const passive = entries.filter(([, s]) => s.type === 'P');

function renderSkill([id, skill]) {
  const isActive = skill.type === 'A';
  const badgeClass = isActive ? 'active' : 'passive';
  const usesText = isActive ? `${skill.maxUses} ${skill.maxUses !== 1 ? 'Einsätze' : 'Einsatz'}` : '\u221E';
  const code = SKILL_UNLOCK_CODES[id];

  return `
    <div class="skill-slot">
      <div class="skill-badge ${badgeClass}">${skill.type}</div>
      <div class="skill-info">
        <div class="skill-name">${skill.name}${code ? ` <span class="skill-code">${code}</span>` : ''}</div>
        <div class="skill-desc">${skill.desc}</div>
        ${skill.duration ? `<div class="skill-duration">${skill.duration} ${skill.duration !== 1 ? 'Würfe' : 'Wurf'}</div>` : ''}
      </div>
      <div class="skill-uses">
        <span class="skill-counter">${usesText}</span>
      </div>
    </div>`;
}

function renderSection(title, skills) {
  if (skills.length === 0) return '';
  return `
    <div class="skills-section">
      <div class="skills-header">${title}</div>
      <div class="skills-list">${skills.map(renderSkill).join('')}</div>
    </div>`;
}

const itemsHtml = Object.entries(ITEMS).map(([id, item]) => {
  const code = ITEM_UNLOCK_CODES[id];
  return `
    <div class="skill-slot">
      <div class="skill-badge passive">I</div>
      <div class="skill-info">
        <div class="skill-name">${item.name}${code ? ` <span class="skill-code">${code}</span>` : ''}</div>
        <div class="skill-desc">${item.desc}</div>
      </div>
    </div>`;
}).join('');

app.innerHTML = `
  <div class="character-card">
    <div class="character-name">Skill-Übersicht</div>
    ${renderSection('Aktiv — Gegner', active.filter(([, s]) => s.desc.toLowerCase().includes('gegner')))}
    ${renderSection('Aktiv — Selbst', active.filter(([, s]) => !s.desc.toLowerCase().includes('gegner')))}
    ${renderSection('Passive', passive)}
    <div class="skills-section">
      <div class="skills-header">Items</div>
      <div class="skills-list">${itemsHtml}</div>
    </div>
  </div>`;
