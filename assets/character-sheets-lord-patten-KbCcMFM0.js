import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{D as I,S as E,L as q,a as F,I as M,b as C}from"./hero-data-D7zU9HUg.js";import{E as O,S as N,R}from"./skill-categories-BKt7MNVS.js";const B="hero-state",L="hero-state-version",H=1,z=document.querySelector("#app");function P(){try{const t=localStorage.getItem(L);if(String(t)!==String(H))return localStorage.removeItem(B),localStorage.setItem(L,H),structuredClone(I);const s=localStorage.getItem(B);if(s)return{...structuredClone(I),...JSON.parse(s)}}catch{}return localStorage.setItem(L,H),structuredClone(I)}function v(){localStorage.setItem(B,JSON.stringify(e))}let e=P();function K(t){return t>.5?"#8b1a1a":t>.25?"#6a1515":"#4a0e0e"}function h(t){return 5+Math.floor(t/2)*5}function x(t){return 1+Math.floor(t/2)}function G(){const t=[{label:"Aktiv — Gegner-Debuffs",ids:[]},{label:"Aktiv — Selbst-Buffs",ids:[]},{label:"Aktiv — Schurke",ids:[]},{label:"Passive",ids:[]}];for(const s of Object.keys(F)){const r=E[s];r&&(r.type==="P"?t[3].ids.push(s):O.includes(s)?t[0].ids.push(s):N.includes(s)?t[1].ids.push(s):R.includes(s)?t[2].ids.push(s):r.desc.toLowerCase().includes("gegner")?t[0].ids.push(s):t[1].ids.push(s))}return t}const A={belt:"🦴",arm_protectors:"🛡",pelt:"🧊",small_bag:"👜",drinking_horn:"🥃",sword:"⚔"};function j(t){switch(t){case"belt":return"Außenkreis-Schaden reduziert um 1";case"arm_protectors":return"Mittelkreis-Schaden reduziert um 1";case"pelt":return"Innenkreis-Schaden reduziert um 1";case"small_bag":return"+1 Skill-Slot";case"drinking_horn":return`Heilen +${h(e.level)} einmal pro Kampf`;case"sword":return"2 aufeinanderfolgende Innentreffer = 1 Bonuswurf";default:return""}}function W(){return Object.entries(C).map(([t,s])=>{const r=e.unlockedItemIds.includes(t),i=r?"item-row":"item-row locked",u=A[t]||"?";let c;r?c="":c=`
        <div class="unlock-form">
          <input class="unlock-input" data-item-id="${t}" type="text" inputmode="numeric" maxlength="4" placeholder="____">
          <button class="item-unlock-btn" data-item-unlock="${t}">Unlock</button>
        </div>`;const o=r?`<div class="item-effect">${j(t)}</div>`:"";return`
      <div class="${i}">
        <div class="item-icon">${u}</div>
        <div class="item-info">
          <div class="item-name">${s.name}</div>
          ${o}
        </div>
        <div class="item-actions">${c}</div>
      </div>`}).join("")}function J(){const t=[];if(e.unlockedItemIds.includes("drinking_horn")){const s=e.drinkingHornUsed||e.currentHp>=e.maxHp;t.push(`
      <div class="item-row">
        <div class="item-icon">${A.drinking_horn}</div>
        <div class="item-info">
          <div class="item-name">Drinking Horn</div>
          <div class="item-effect">${e.drinkingHornUsed?"Bereits benutzt":`Heilen +${h(e.level)}`}</div>
        </div>
        <div class="item-actions">
          <button class="drinking-horn-btn" id="drinking-horn-use" ${s?"disabled":""}>Trinken</button>
        </div>
      </div>`)}if(e.unlockedItemIds.includes("sword")){let s;e.swordBonusThrow?s=`
        <div class="bonus-throw-indicator">
          <span class="bonus-throw-text">Bonuswurf!</span>
          <button class="bonus-throw-use-btn" id="sword-use-bonus">Use</button>
        </div>`:s=`
        <div class="sword-tracker">
          <span class="sword-streak">${e.swordInnerStreak}/2</span>
          <button class="sword-hit-btn inner-hit" id="sword-inner-hit">Inner</button>
          <button class="sword-hit-btn" id="sword-miss">Daneben</button>
        </div>`,t.push(`
      <div class="item-row">
        <div class="item-icon">${A.sword}</div>
        <div class="item-info">
          <div class="item-name">Sword</div>
          <div class="item-effect">2 aufeinanderfolgende Innentreffer = Bonuswurf</div>
        </div>
        <div class="item-actions">${s}</div>
      </div>`)}return t.join("")}function V(){const t=e.maxHp>0?e.currentHp/e.maxHp:0,s=Math.round(t*100),r=Array.from({length:e.maxSkillSlots},(i,u)=>{const c=e.equippedSkillIds[u];if(!c)return'<div class="skill-slot empty-slot"><span class="empty-slot-text">— Leer —</span></div>';const o=E[c];if(!o)return"";const f=o.type==="A",b=f?"active":"passive",g=e.skillUsage[c]??o.maxUses,k=f?`<button class="skill-use-btn" data-skill-id="${c}" ${g<=0?"disabled":""}>Use<br><span class="btn-uses">${g}/${o.maxUses}</span></button>`:'<span class="skill-counter">&infin;</span>';return`
      <div class="equipped-slot">
        <div class="skill-badge ${b}">${o.type}</div>
        <div class="skill-info">
          <div class="skill-name">${o.name}</div>
          <div class="skill-desc">${o.desc}</div>
          ${o.duration?`<div class="skill-duration">${o.duration} ${o.duration!==1?"Würfe":"Wurf"}</div>`:""}
        </div>
        <div class="skill-uses">${k}</div>
      </div>`}).join("");return`
    <div class="character-card">
      <div class="card-header">
        <div class="character-name">Lord Patten <span class="level-badge">Lv. ${e.level}</span></div>
        <div class="header-buttons">
          <button class="info-btn" id="story-open">S</button>
          <button class="info-btn" id="info-open">i</button>
        </div>
      </div>

      <div class="hp-section">
        <div class="hp-bar-wrapper">
          <div class="hp-label">HP</div>
          <div class="hp-bar-track">
            <div class="hp-bar-fill" style="width:${s}%;background:${K(t)}"></div>
            <div class="hp-bar-text">${e.currentHp} / ${e.maxHp}</div>
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
          <span class="stat-value">${e.actions}/Runde</span>
        </div>
        <div class="stat-block">
          <span class="stat-label">Regen${e.inFight||e.currentHp<=0?" (pausiert)":""}</span>
          <span class="stat-value${e.inFight||e.currentHp<=0?" regen-paused":""}">${x(e.level)} HP/min <span class="regen-timer" id="regen-timer"></span></span>
        </div>
      </div>

      <div class="target-section">
        <svg class="target-svg" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="56" fill="#0f0d08" stroke="#27ae60" stroke-width="2" />
          <circle cx="60" cy="60" r="36" fill="#151008" stroke="#f39c12" stroke-width="2" />
          <circle cx="60" cy="60" r="16" fill="#1a120a" stroke="#e74c3c" stroke-width="2" />
        </svg>
        <div class="target-legend">
          <div class="target-row"><span class="target-dot outer"></span><span class="target-zone">Außen</span><span class="target-dmg">${e.damage.outer} dmg${e.unlockedItemIds.includes("belt")?'<span class="dmg-reduction">(-1)</span>':""}</span></div>
          <div class="target-row"><span class="target-dot middle"></span><span class="target-zone">Mitte</span><span class="target-dmg">${e.damage.middle} dmg${e.unlockedItemIds.includes("arm_protectors")?'<span class="dmg-reduction">(-1)</span>':""}</span></div>
          <div class="target-row"><span class="target-dot inner"></span><span class="target-zone">Innen</span><span class="target-dmg">${e.damage.inner} dmg${e.unlockedItemIds.includes("pelt")?'<span class="dmg-reduction">(-1)</span>':""}</span></div>
        </div>
      </div>

      <div class="skills-header">Ausgerüstete Skills</div>
      <div class="skills-list">${r}</div>

      <div class="hero-actions-row">
        <button class="skill-menu-btn" id="skill-menu-open" ${e.inFight?"disabled":""}>Skill Menu</button>
        <button class="skill-menu-btn" id="item-menu-open" ${e.inFight?"disabled":""}>Item Menu</button>
        <button class="level-up-btn" id="level-up-open" ${e.inFight||e.level>=16?"disabled":""}>Level Up</button>
      </div>

      <div class="hero-bottom-row">
        ${e.inFight?'<button class="fight-ended-btn" id="fight-ended">Kampf beenden</button>':'<button class="start-fight-btn" id="start-fight">Kampf starten</button>'}
        <button class="heal-btn" id="heal-btn" ${e.currentHp>=e.maxHp||e.inFight?"disabled":""}>Heilen +${h(e.level)}</button>
      </div>

      ${(()=>{const i=e.inFight&&J();return i?`
        <div class="skills-header">Aktive Items</div>
        <div class="items-list">${i}</div>
      `:""})()}

      <button class="reset-btn">Reset</button>
    </div>`}function Y(){const t=I.story;return`
  <div class="info-overlay" id="story-overlay">
    <div class="info-panel">
      <button class="info-close-btn" id="story-close">&times;</button>
      <h2 class="info-title">${I.name}</h2>
      <div class="info-section">
        <p>${t.desc}</p>
      </div>
      <div class="info-section">
        <h3>Wenn getroffen</h3>
        <p class="catchphrase">${t.onHit}</p>
      </div>
      <div class="info-section">
        <h3>Beim Treffer</h3>
        <p class="catchphrase">${t.onStrike}</p>
      </div>
      <div class="info-section">
        <h3>Bei Niederlage</h3>
        <p class="catchphrase">${t.onDefeat}</p>
      </div>
    </div>
  </div>`}const Z=`
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
          <li>Innenkreis: 20 cm Durchmesser — <strong>5 dmg</strong> (Basis)</li>
          <li>Mittelkreis: 50 cm Durchmesser — <strong>3 dmg</strong> (Basis)</li>
          <li>Außenkreis: 100 cm Durchmesser — <strong>1 dmg</strong> (Basis)</li>
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
  </div>`;function Q(){const t=e.level+1,s=q.map(r=>`<button class="level-up-choice" data-choice="${r.id}">${r.label}</button>`).join("");return`
  <div class="level-up-overlay" id="levelup-overlay">
    <div class="level-up-panel">
      <h2 class="level-up-title">Level Up auf ${t}</h2>
      <div class="level-up-choices">${s}</div>
      <button class="level-up-cancel" id="levelup-cancel">Abbrechen</button>
    </div>
  </div>`}function X(){const t=G();let s=`
  <div class="skill-menu-overlay" id="skillmenu-overlay">
    <div class="skill-menu-panel">
      <button class="skill-menu-close" id="skillmenu-close">&times;</button>
      <h2 class="skill-menu-title">Skills</h2>`;for(const r of t)if(r.ids.length!==0){s+=`<div class="skill-group-header">${r.label}</div>`;for(const i of r.ids){const u=E[i],c=e.unlockedSkillIds.includes(i),o=e.equippedSkillIds.includes(i),f=e.equippedSkillIds.length<e.maxSkillSlots,b=c?"skill-row":"skill-row locked",g=u.type==="A"?"active":"passive";let k;c?o?k=`<button class="unequip-menu-btn" data-menu-unequip="${i}">Unequip</button>`:k=`<button class="equip-btn" data-equip="${i}" ${f?"":"disabled"}>Equip</button>`:k=`
          <div class="unlock-form">
            <input class="unlock-input" data-skill-id="${i}" type="text" inputmode="numeric" maxlength="4" placeholder="____">
            <button class="unlock-btn" data-unlock="${i}">Unlock</button>
          </div>`,s+=`
        <div class="${b}">
          <div class="skill-badge ${g}">${u.type}</div>
          <div class="skill-info">
            <div class="skill-name">${u.name}</div>
            <div class="skill-desc">${u.desc}</div>
          </div>
          <div class="skill-row-actions">${k}</div>
        </div>`}}return s+="</div></div>",s}function ee(){return`
  <div class="skill-menu-overlay" id="itemmenu-overlay">
    <div class="skill-menu-panel">
      <button class="skill-menu-close" id="itemmenu-close">&times;</button>
      <h2 class="skill-menu-title">Items</h2>
      <div class="items-list">${W()}</div>
    </div>
  </div>`}function te(t){return!t||t.length===0?"":`
  <div class="info-overlay" id="levelup-summary-overlay">
    <div class="info-panel">
      <button class="info-close-btn" id="levelup-summary-close">&times;</button>
      <h2 class="info-title">Level ${e.level} erreicht!</h2>
      <div class="info-section">
        <ul>${t.map(s=>`<li>${s}</li>`).join("")}</ul>
      </div>
    </div>
  </div>`}function se(){return e.currentHp>0?"":`
  <div class="info-overlay visible" id="defeat-overlay">
    <div class="info-panel">
      <button class="info-close-btn" id="defeat-close">&times;</button>
      <h2 class="info-title">Niederlage!</h2>
      <div class="info-section">
        <p>Lord Patten ist gefallen — aber noch nicht besiegt. Trink ein Bier, heile dich und fordere deinen Gegner erneut heraus!</p>
      </div>
    </div>
  </div>`}function d(t){z.innerHTML=V()+Y()+Z+Q()+X()+ee()+te(t)+se(),document.querySelectorAll(".hp-btn").forEach(n=>{n.addEventListener("click",()=>{if(n.dataset.dir==="up"){if(e.currentHp>=e.maxHp||!confirm("Letzten Treffer rückgängig machen?"))return;e.currentHp++}n.dataset.dir==="down"&&e.currentHp>0&&e.currentHp--,v(),d()})}),document.querySelectorAll(".skill-use-btn").forEach(n=>{n.addEventListener("click",()=>{const l=n.dataset.skillId,a=E[l];if(!a)return;const p=e.skillUsage[l]??a.maxUses;p>0&&(e.skillUsage[l]=p-1,v(),d())})});const s=document.getElementById("start-fight"),r=document.getElementById("fight-ended");s&&s.addEventListener("click",()=>{confirm("Kampf starten? Regeneration wird pausiert.")&&(e.inFight=!0,m.remainingAtPause=Math.max(0,m.nextTickAt-Date.now()),w(),v(),d())}),r&&r.addEventListener("click",()=>{confirm("Kampf beenden? Skill-Einsätze werden wiederhergestellt und Regeneration wird fortgesetzt.")&&(e.skillUsage={},e.inFight=!1,e.drinkingHornUsed=!1,e.swordInnerStreak=0,e.swordBonusThrow=!1,m.nextTickAt=Date.now()+(m.remainingAtPause??6e4),delete m.remainingAtPause,w(),v(),d())}),document.getElementById("heal-btn").addEventListener("click",()=>{if(e.currentHp>=e.maxHp||e.inFight)return;const n=h(e.level);confirm(`${n} HP heilen? Nur verwenden, wenn die erforderliche Aktion abgeschlossen wurde.`)&&(e.currentHp=Math.min(e.currentHp+n,e.maxHp),v(),d())}),document.querySelector(".reset-btn").addEventListener("click",()=>{confirm("WARNUNG: Dies löscht den GESAMTEN Fortschritt (Level, Skills, Items). Nur für Notfälle. Fortfahren?")&&confirm("Bist du absolut sicher? Dies kann nicht rückgängig gemacht werden.")&&(e=structuredClone(I),localStorage.removeItem(_),m={nextTickAt:Date.now()+6e4},v(),d())}),T("story-overlay","story-open","story-close"),T("info-overlay","info-open","info-close");const i=document.getElementById("levelup-overlay");document.getElementById("level-up-open").addEventListener("click",()=>{i.classList.add("visible")}),document.getElementById("levelup-cancel").addEventListener("click",()=>{i.classList.remove("visible")}),i.addEventListener("click",n=>{n.target===i&&i.classList.remove("visible")}),document.querySelectorAll(".level-up-choice").forEach(n=>{n.addEventListener("click",()=>{const l=n.dataset.choice,a=q.find(D=>D.id===l);if(!a)return;const p=e.level+1,y=p%5===0;if(!confirm(`Level Up auf ${p}?
${a.label}`))return;a.apply(e),e.level=p,e.levelUpHistory.push(l);const S=[a.label];y&&(e.maxSkillSlots+=1,e.actions<3?(e.actions+=1,S.push("+1 Aktion, +1 Skill-Slot")):S.push("+1 Skill-Slot")),p%2===0&&(S.push(`Heilen steigt auf +${h(p)}`),S.push(`Regen steigt auf ${x(p)} HP/min`)),e.unlockedItemIds.includes("drinking_horn")&&p%2===0&&S.push(`Drinking Horn Heilung steigt auf +${h(p)}`),v(),i.classList.remove("visible"),d(S),document.getElementById("levelup-summary-overlay")?.classList.add("visible")})});const u=document.getElementById("skillmenu-overlay");document.getElementById("skill-menu-open").addEventListener("click",()=>{u.classList.add("visible")}),document.getElementById("skillmenu-close").addEventListener("click",()=>{u.classList.remove("visible")}),u.addEventListener("click",n=>{n.target===u&&u.classList.remove("visible")});const c=document.getElementById("itemmenu-overlay");document.getElementById("item-menu-open").addEventListener("click",()=>{c.classList.add("visible")}),document.getElementById("itemmenu-close").addEventListener("click",()=>{c.classList.remove("visible")}),c.addEventListener("click",n=>{n.target===c&&c.classList.remove("visible")});const o=document.getElementById("defeat-overlay");o&&(document.getElementById("defeat-close").addEventListener("click",()=>{o.classList.remove("visible")}),o.addEventListener("click",n=>{n.target===o&&o.classList.remove("visible")}));const f=document.getElementById("levelup-summary-overlay");f&&(document.getElementById("levelup-summary-close").addEventListener("click",()=>{f.classList.remove("visible")}),f.addEventListener("click",n=>{n.target===f&&f.classList.remove("visible")})),document.querySelectorAll(".unlock-btn").forEach(n=>{n.addEventListener("click",()=>{const l=n.dataset.unlock,a=document.querySelector(`.unlock-input[data-skill-id="${l}"]`),p=a.value.trim(),y=F[l];if(p===y){if(e.unlockedSkillIds.includes(l))return;e.unlockedSkillIds.push(l),v(),d(),document.getElementById("skillmenu-overlay").classList.add("visible")}else a.classList.add("error"),a.value="",setTimeout(()=>a.classList.remove("error"),400)})}),document.querySelectorAll(".equip-btn").forEach(n=>{n.addEventListener("click",()=>{const l=n.dataset.equip;if(e.equippedSkillIds.length>=e.maxSkillSlots||e.equippedSkillIds.includes(l))return;e.equippedSkillIds.push(l);const a=E[l];a&&!(l in e.skillUsage)&&(e.skillUsage[l]=a.maxUses),v(),d(),document.getElementById("skillmenu-overlay").classList.add("visible")})}),document.querySelectorAll(".unequip-menu-btn").forEach(n=>{n.addEventListener("click",()=>{const l=n.dataset.menuUnequip;e.equippedSkillIds=e.equippedSkillIds.filter(a=>a!==l),v(),d(),document.getElementById("skillmenu-overlay").classList.add("visible")})}),document.querySelectorAll(".item-unlock-btn").forEach(n=>{n.addEventListener("click",()=>{const l=n.dataset.itemUnlock,a=document.querySelector(`.unlock-input[data-item-id="${l}"]`),p=a.value.trim(),y=M[l];if(p===y){if(e.unlockedItemIds.includes(l))return;e.unlockedItemIds.push(l),l==="small_bag"&&(e.maxSkillSlots+=1),v(),d(),document.getElementById("itemmenu-overlay").classList.add("visible")}else a.classList.add("error"),a.value="",setTimeout(()=>a.classList.remove("error"),400)})});const b=document.getElementById("drinking-horn-use");b&&b.addEventListener("click",()=>{if(e.drinkingHornUsed||e.currentHp>=e.maxHp)return;const n=h(e.level);e.currentHp=Math.min(e.currentHp+n,e.maxHp),e.drinkingHornUsed=!0,v(),d()});const g=document.getElementById("sword-inner-hit");g&&g.addEventListener("click",()=>{e.swordInnerStreak+=1,e.swordInnerStreak>=2&&(e.swordInnerStreak=0,e.swordBonusThrow=!0),v(),d()});const k=document.getElementById("sword-miss");k&&k.addEventListener("click",()=>{e.swordInnerStreak=0,v(),d()});const U=document.getElementById("sword-use-bonus");U&&U.addEventListener("click",()=>{e.swordBonusThrow=!1,v(),d()}),typeof m<"u"&&$()}function T(t,s,r){const i=document.getElementById(t);document.getElementById(s).addEventListener("click",()=>{i.classList.add("visible")}),document.getElementById(r).addEventListener("click",()=>{i.classList.remove("visible")}),i.addEventListener("click",u=>{u.target===i&&i.classList.remove("visible")})}const _="hero-regen";function ne(){try{const t=localStorage.getItem(_);if(t)return JSON.parse(t)}catch{}return{nextTickAt:Date.now()+6e4}}function w(){localStorage.setItem(_,JSON.stringify(m))}let m=ne();m.secondsLeft!=null&&m.nextTickAt==null&&(m={nextTickAt:Date.now()+m.secondsLeft*1e3},w());function ie(){if(e.inFight||e.currentHp<=0){$();return}const t=Date.now();if(t>=m.nextTickAt){if(m.nextTickAt=t+6e4,e.currentHp<e.maxHp){const s=x(e.level);e.currentHp=Math.min(e.currentHp+s,e.maxHp),v(),w(),d();return}w()}$()}function $(){const t=document.getElementById("regen-timer");if(!t)return;if(e.inFight||e.currentHp<=0){const r=Math.max(0,Math.ceil((m.remainingAtPause??0)/1e3));t.textContent=`(${r}s)`;return}const s=Math.max(0,Math.ceil((m.nextTickAt-Date.now())/1e3));t.textContent=`(${s}s)`}setInterval(ie,1e3);d();$();
