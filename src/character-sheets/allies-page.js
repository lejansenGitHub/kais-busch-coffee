import './style.css';
import { ALLIES } from './ally-data.js';

const app = document.querySelector('#app');

function mechanicBadge(m) {
  const labels = { dice: 'D', physical: 'P', challenge: 'C', deal: '$', tbd: '?' };
  const classes = { dice: 'active', physical: 'passive', challenge: 'active', deal: 'active', tbd: 'passive' };
  return `<div class="skill-badge ${classes[m] || 'passive'}">${labels[m] || '?'}</div>`;
}

function renderAlly(ally) {
  const dealsHtml = ally.deals
    ? ally.deals.map(d =>
        `<div class="ally-deal">${d.name}${d.cost ? ` <span class="ally-cost">\u2212${d.cost} HP</span>` : ''}: ${d.desc}</div>`
      ).join('')
    : '';

  return `
    <div class="skill-slot">
      ${mechanicBadge(ally.mechanic)}
      <div class="skill-info">
        <div class="skill-name">${ally.name} <span class="skill-duration">${ally.title}</span></div>
        <div class="skill-desc"><strong>${ally.ability}</strong> (${ally.timing})</div>
        <div class="skill-desc">${ally.desc}</div>
        ${dealsHtml ? `<div class="ally-deals">${dealsHtml}</div>` : ''}
      </div>
    </div>`;
}

app.innerHTML = `
  <div class="character-card">
    <div class="character-name">Verbündete</div>
    <div class="skills-section">
      <div class="skills-header">Rekrutierte Verbündete</div>
      <div class="skills-list">${ALLIES.map(renderAlly).join('')}</div>
    </div>
    <div class="ally-legend">
      <div class="skills-header">Legende</div>
      <div class="skill-desc" style="padding:8px 12px;opacity:0.7;">
        <strong>D</strong> = Würfel &nbsp; <strong>P</strong> = Physisch &nbsp; <strong>C</strong> = Herausford. &nbsp; <strong>$</strong> = HP-Deal &nbsp; <strong>?</strong> = TBD
      </div>
    </div>
  </div>`;
