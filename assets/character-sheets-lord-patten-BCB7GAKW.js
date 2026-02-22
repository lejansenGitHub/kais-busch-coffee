import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{D as E,S as $,L as C,d as y,a as M,I as z,b as D}from"./hero-data-CvuzS0MW.js";const _="hero-state",H="hero-state-version",B=1,R=document.querySelector("#app");function N(){try{const s=localStorage.getItem(H);if(String(s)!==String(B))return localStorage.removeItem(_),localStorage.setItem(H,B),structuredClone(E);const n=localStorage.getItem(_);if(n)return JSON.parse(n)}catch{}return localStorage.setItem(H,B),structuredClone(E)}function m(){localStorage.setItem(_,JSON.stringify(e))}let e=N();function P(s){return s>.5?"#8b1a1a":s>.25?"#6a1515":"#4a0e0e"}function h(s){return 5+Math.floor(s/2)*5}function U(s){return 1+Math.floor(s/2)}function K(){const s=["blind_fury","repulsion","pushback","iron_ward","off_balance","heavy_hands","freeze","crude_sack","tremor","vertigo","revision"],n=["advance","double_attack","fine_sack","snipers_gambit","war_cry","high_standards"],c=["backstab","thieves_gambit","dark_deal"],i=[{label:"Aktiv — Gegner-Debuffs",ids:[]},{label:"Aktiv — Selbst-Buffs",ids:[]},{label:"Aktiv — Schurke",ids:[]},{label:"Passive",ids:[]}];for(const l of Object.keys(M)){const o=$[l];o&&(o.type==="P"?i[3].ids.push(l):s.includes(l)?i[0].ids.push(l):n.includes(l)?i[1].ids.push(l):c.includes(l)?i[2].ids.push(l):o.desc.toLowerCase().includes("gegner")?i[0].ids.push(l):i[1].ids.push(l))}return i}const A={belt:"🦴",arm_protectors:"🛡",pelt:"🧊",small_bag:"👜",drinking_horn:"🥃",sword:"⚔"};function G(s){const n=y(e.level);switch(s){case"belt":return`Außenkreis-Schaden reduziert um ${n}`;case"arm_protectors":return`Mittelkreis-Schaden reduziert um ${n}`;case"pelt":return`Innenkreis-Schaden reduziert um ${n}`;case"small_bag":return"+1 Skill-Slot";case"drinking_horn":return`Heilen +${h(e.level)} einmal pro Kampf`;case"sword":return"2 aufeinanderfolgende Innentreffer = 1 Bonuswurf";default:return""}}function j(){return Object.entries(D).map(([s,n])=>{const c=e.unlockedItemIds.includes(s),i=c?"item-row":"item-row locked",l=A[s]||"?";let o;c?o="":o=`
        <div class="unlock-form">
          <input class="unlock-input" data-item-id="${s}" type="text" inputmode="numeric" maxlength="4" placeholder="____">
          <button class="item-unlock-btn" data-item-unlock="${s}">Unlock</button>
        </div>`;const d=c?`<div class="item-effect">${G(s)}</div>`:"";return`
      <div class="${i}">
        <div class="item-icon">${l}</div>
        <div class="item-info">
          <div class="item-name">${n.name}</div>
          ${d}
        </div>
        <div class="item-actions">${o}</div>
      </div>`}).join("")}function q(){const s=[];if(e.unlockedItemIds.includes("drinking_horn")){const n=e.drinkingHornUsed||e.currentHp>=e.maxHp;s.push(`
      <div class="item-row">
        <div class="item-icon">${A.drinking_horn}</div>
        <div class="item-info">
          <div class="item-name">Drinking Horn</div>
          <div class="item-effect">${e.drinkingHornUsed?"Bereits benutzt":`Heilen +${h(e.level)}`}</div>
        </div>
        <div class="item-actions">
          <button class="drinking-horn-btn" id="drinking-horn-use" ${n?"disabled":""}>Trinken</button>
        </div>
      </div>`)}if(e.unlockedItemIds.includes("sword")){let n;e.swordBonusThrow?n=`
        <div class="bonus-throw-indicator">
          <span class="bonus-throw-text">Bonuswurf!</span>
          <button class="bonus-throw-use-btn" id="sword-use-bonus">Use</button>
        </div>`:n=`
        <div class="sword-tracker">
          <span class="sword-streak">${e.swordInnerStreak}/2</span>
          <button class="sword-hit-btn inner-hit" id="sword-inner-hit">Inner</button>
          <button class="sword-hit-btn" id="sword-miss">Daneben</button>
        </div>`,s.push(`
      <div class="item-row">
        <div class="item-icon">${A.sword}</div>
        <div class="item-info">
          <div class="item-name">Sword</div>
          <div class="item-effect">2 aufeinanderfolgende Innentreffer = Bonuswurf</div>
        </div>
        <div class="item-actions">${n}</div>
      </div>`)}return s.join("")}function W(){const s=e.maxHp>0?e.currentHp/e.maxHp:0,n=Math.round(s*100),c=Array.from({length:e.maxSkillSlots},(i,l)=>{const o=e.equippedSkillIds[l];if(!o)return'<div class="skill-slot empty-slot"><span class="empty-slot-text">— Leer —</span></div>';const d=$[o];if(!d)return"";const f=d.type==="A",S=f?"active":"passive",k=e.skillUsage[o]??d.maxUses,p=f?`<button class="skill-use-btn" data-skill-id="${o}" ${k<=0?"disabled":""}>Use<br><span class="btn-uses">${k}/${d.maxUses}</span></button>`:'<span class="skill-counter">&infin;</span>';return`
      <div class="equipped-slot">
        <div class="skill-badge ${S}">${d.type}</div>
        <div class="skill-info">
          <div class="skill-name">${d.name}</div>
          <div class="skill-desc">${d.desc}</div>
          ${d.duration?`<div class="skill-duration">${d.duration} ${d.duration!==1?"Würfe":"Wurf"}</div>`:""}
        </div>
        <div class="skill-uses">${p}</div>
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
            <div class="hp-bar-fill" style="width:${n}%;background:${P(s)}"></div>
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
          <span class="stat-value${e.inFight||e.currentHp<=0?" regen-paused":""}">${U(e.level)} HP/min <span class="regen-timer" id="regen-timer"></span></span>
        </div>
      </div>

      <div class="target-section">
        <svg class="target-svg" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="56" fill="#0f0d08" stroke="#27ae60" stroke-width="2" />
          <circle cx="60" cy="60" r="36" fill="#151008" stroke="#f39c12" stroke-width="2" />
          <circle cx="60" cy="60" r="16" fill="#1a120a" stroke="#e74c3c" stroke-width="2" />
        </svg>
        <div class="target-legend">
          <div class="target-row"><span class="target-dot outer"></span><span class="target-zone">Außen</span><span class="target-dmg">${e.damage.outer} dmg${e.unlockedItemIds.includes("belt")?`<span class="dmg-reduction">(-${y(e.level)})</span>`:""}</span></div>
          <div class="target-row"><span class="target-dot middle"></span><span class="target-zone">Mitte</span><span class="target-dmg">${e.damage.middle} dmg${e.unlockedItemIds.includes("arm_protectors")?`<span class="dmg-reduction">(-${y(e.level)})</span>`:""}</span></div>
          <div class="target-row"><span class="target-dot inner"></span><span class="target-zone">Innen</span><span class="target-dmg">${e.damage.inner} dmg${e.unlockedItemIds.includes("pelt")?`<span class="dmg-reduction">(-${y(e.level)})</span>`:""}</span></div>
        </div>
      </div>

      <div class="skills-header">Ausgerüstete Skills</div>
      <div class="skills-list">${c}</div>

      <div class="hero-actions-row">
        <button class="skill-menu-btn" id="skill-menu-open" ${e.inFight?"disabled":""}>Skill Menu</button>
        <button class="skill-menu-btn" id="item-menu-open" ${e.inFight?"disabled":""}>Item Menu</button>
        <button class="level-up-btn" id="level-up-open" ${e.inFight?"disabled":""}>Level Up</button>
      </div>

      <div class="hero-bottom-row">
        ${e.inFight?'<button class="fight-ended-btn" id="fight-ended">Kampf beenden</button>':'<button class="start-fight-btn" id="start-fight">Kampf starten</button>'}
        <button class="heal-btn" id="heal-btn" ${e.currentHp>=e.maxHp||e.inFight?"disabled":""}>Heilen +${h(e.level)}</button>
      </div>

      ${e.inFight&&q()?`
        <div class="skills-header">Aktive Items</div>
        <div class="items-list">${q()}</div>
      `:""}

      <button class="reset-btn">Reset</button>
    </div>`}function J(){const s=E.story;return`
  <div class="info-overlay" id="story-overlay">
    <div class="info-panel">
      <button class="info-close-btn" id="story-close">&times;</button>
      <h2 class="info-title">${E.name}</h2>
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
  </div>`}const V=`
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
  </div>`;function Y(){const s=e.level+1,n=C.map(c=>`<button class="level-up-choice" data-choice="${c.id}">${c.label}</button>`).join("");return`
  <div class="level-up-overlay" id="levelup-overlay">
    <div class="level-up-panel">
      <h2 class="level-up-title">Level Up auf ${s}</h2>
      <div class="level-up-choices">${n}</div>
      <button class="level-up-cancel" id="levelup-cancel">Abbrechen</button>
    </div>
  </div>`}function Z(){const s=K();let n=`
  <div class="skill-menu-overlay" id="skillmenu-overlay">
    <div class="skill-menu-panel">
      <button class="skill-menu-close" id="skillmenu-close">&times;</button>
      <h2 class="skill-menu-title">Skills</h2>`;for(const c of s)if(c.ids.length!==0){n+=`<div class="skill-group-header">${c.label}</div>`;for(const i of c.ids){const l=$[i],o=e.unlockedSkillIds.includes(i),d=e.equippedSkillIds.includes(i),f=e.equippedSkillIds.length<e.maxSkillSlots,S=o?"skill-row":"skill-row locked",k=l.type==="A"?"active":"passive";let p;o?d?p=`<button class="unequip-menu-btn" data-menu-unequip="${i}">Unequip</button>`:p=`<button class="equip-btn" data-equip="${i}" ${f?"":"disabled"}>Equip</button>`:p=`
          <div class="unlock-form">
            <input class="unlock-input" data-skill-id="${i}" type="text" inputmode="numeric" maxlength="4" placeholder="____">
            <button class="unlock-btn" data-unlock="${i}">Unlock</button>
          </div>`,n+=`
        <div class="${S}">
          <div class="skill-badge ${k}">${l.type}</div>
          <div class="skill-info">
            <div class="skill-name">${l.name}</div>
            <div class="skill-desc">${l.desc}</div>
          </div>
          <div class="skill-row-actions">${p}</div>
        </div>`}}return n+="</div></div>",n}function Q(){return`
  <div class="skill-menu-overlay" id="itemmenu-overlay">
    <div class="skill-menu-panel">
      <button class="skill-menu-close" id="itemmenu-close">&times;</button>
      <h2 class="skill-menu-title">Items</h2>
      <div class="items-list">${j()}</div>
    </div>
  </div>`}function X(s){return!s||s.length===0?"":`
  <div class="info-overlay" id="levelup-summary-overlay">
    <div class="info-panel">
      <button class="info-close-btn" id="levelup-summary-close">&times;</button>
      <h2 class="info-title">Level ${e.level} erreicht!</h2>
      <div class="info-section">
        <ul>${s.map(n=>`<li>${n}</li>`).join("")}</ul>
      </div>
    </div>
  </div>`}function u(s){R.innerHTML=W()+J()+V+Y()+Z()+Q()+X(s),document.querySelectorAll(".hp-btn").forEach(t=>{t.addEventListener("click",()=>{if(t.dataset.dir==="up"){if(e.currentHp>=e.maxHp||!confirm("Letzten Treffer rückgängig machen?"))return;e.currentHp++}t.dataset.dir==="down"&&e.currentHp>0&&e.currentHp--,m(),u()})}),document.querySelectorAll(".skill-use-btn").forEach(t=>{t.addEventListener("click",()=>{const r=t.dataset.skillId,a=$[r];if(!a)return;const v=e.skillUsage[r]??a.maxUses;v>0&&(e.skillUsage[r]=v-1,m(),u())})});const n=document.getElementById("start-fight"),c=document.getElementById("fight-ended");n&&n.addEventListener("click",()=>{confirm("Kampf starten? Regeneration wird pausiert.")&&(e.inFight=!0,m(),u())}),c&&c.addEventListener("click",()=>{confirm("Kampf beenden? Skill-Einsätze werden wiederhergestellt und Regeneration wird fortgesetzt.")&&(e.skillUsage={},e.inFight=!1,e.drinkingHornUsed=!1,e.swordInnerStreak=0,e.swordBonusThrow=!1,m(),u())}),document.getElementById("heal-btn").addEventListener("click",()=>{if(e.currentHp>=e.maxHp||e.inFight)return;const t=h(e.level);confirm(`${t} HP heilen? Nur verwenden, wenn die erforderliche Aktion abgeschlossen wurde.`)&&(e.currentHp=Math.min(e.currentHp+t,e.maxHp),m(),u())}),document.querySelector(".reset-btn").addEventListener("click",()=>{confirm("WARNUNG: Dies löscht den GESAMTEN Fortschritt (Level, Skills, Items). Nur für Notfälle. Fortfahren?")&&confirm("Bist du absolut sicher? Dies kann nicht rückgängig gemacht werden.")&&(e=structuredClone(E),localStorage.removeItem(x),b={secondsLeft:60},m(),u())}),F("story-overlay","story-open","story-close"),F("info-overlay","info-open","info-close");const i=document.getElementById("levelup-overlay");document.getElementById("level-up-open").addEventListener("click",()=>{i.classList.add("visible")}),document.getElementById("levelup-cancel").addEventListener("click",()=>{i.classList.remove("visible")}),i.addEventListener("click",t=>{t.target===i&&i.classList.remove("visible")}),document.querySelectorAll(".level-up-choice").forEach(t=>{t.addEventListener("click",()=>{const r=t.dataset.choice,a=C.find(w=>w.id===r);if(!a)return;const v=e.level+1,I=v%5===0;if(!confirm(`Level Up auf ${v}?
${a.label}`))return;a.apply(e),e.level=v,e.levelUpHistory.push(r);const g=[a.label];I&&(e.maxSkillSlots+=1,e.actions<3?(e.actions+=1,g.push("+1 Aktion, +1 Skill-Slot")):g.push("+1 Skill-Slot")),v%2===0&&(g.push(`Heilen steigt auf +${h(v)}`),g.push(`Regen steigt auf ${U(v)} HP/min`));const O=e.unlockedItemIds.some(w=>["belt","arm_protectors","pelt"].includes(w));I&&O&&g.push(`Schadensreduktion steigt auf -${y(v)}`),e.unlockedItemIds.includes("drinking_horn")&&v%2===0&&g.push(`Drinking Horn Heilung steigt auf +${h(v)}`),m(),i.classList.remove("visible"),u(g),document.getElementById("levelup-summary-overlay")?.classList.add("visible")})});const l=document.getElementById("skillmenu-overlay");document.getElementById("skill-menu-open").addEventListener("click",()=>{l.classList.add("visible")}),document.getElementById("skillmenu-close").addEventListener("click",()=>{l.classList.remove("visible")}),l.addEventListener("click",t=>{t.target===l&&l.classList.remove("visible")});const o=document.getElementById("itemmenu-overlay");document.getElementById("item-menu-open").addEventListener("click",()=>{o.classList.add("visible")}),document.getElementById("itemmenu-close").addEventListener("click",()=>{o.classList.remove("visible")}),o.addEventListener("click",t=>{t.target===o&&o.classList.remove("visible")});const d=document.getElementById("levelup-summary-overlay");d&&(document.getElementById("levelup-summary-close").addEventListener("click",()=>{d.classList.remove("visible")}),d.addEventListener("click",t=>{t.target===d&&d.classList.remove("visible")})),document.querySelectorAll(".unlock-btn").forEach(t=>{t.addEventListener("click",()=>{const r=t.dataset.unlock,a=document.querySelector(`.unlock-input[data-skill-id="${r}"]`),v=a.value.trim(),I=M[r];if(v===I){if(e.unlockedSkillIds.includes(r))return;e.unlockedSkillIds.push(r),m(),u(),document.getElementById("skillmenu-overlay").classList.add("visible")}else a.classList.add("error"),a.value="",setTimeout(()=>a.classList.remove("error"),400)})}),document.querySelectorAll(".equip-btn").forEach(t=>{t.addEventListener("click",()=>{const r=t.dataset.equip;if(e.equippedSkillIds.length>=e.maxSkillSlots||e.equippedSkillIds.includes(r))return;e.equippedSkillIds.push(r);const a=$[r];a&&!(r in e.skillUsage)&&(e.skillUsage[r]=a.maxUses),m(),u(),document.getElementById("skillmenu-overlay").classList.add("visible")})}),document.querySelectorAll(".unequip-menu-btn").forEach(t=>{t.addEventListener("click",()=>{const r=t.dataset.menuUnequip;e.equippedSkillIds=e.equippedSkillIds.filter(a=>a!==r),m(),u(),document.getElementById("skillmenu-overlay").classList.add("visible")})}),document.querySelectorAll(".item-unlock-btn").forEach(t=>{t.addEventListener("click",()=>{const r=t.dataset.itemUnlock,a=document.querySelector(`.unlock-input[data-item-id="${r}"]`),v=a.value.trim(),I=z[r];if(v===I){if(e.unlockedItemIds.includes(r))return;e.unlockedItemIds.push(r),r==="small_bag"&&(e.maxSkillSlots+=1),m(),u(),document.getElementById("itemmenu-overlay").classList.add("visible")}else a.classList.add("error"),a.value="",setTimeout(()=>a.classList.remove("error"),400)})});const f=document.getElementById("drinking-horn-use");f&&f.addEventListener("click",()=>{if(e.drinkingHornUsed||e.currentHp>=e.maxHp)return;const t=h(e.level);e.currentHp=Math.min(e.currentHp+t,e.maxHp),e.drinkingHornUsed=!0,m(),u()});const S=document.getElementById("sword-inner-hit");S&&S.addEventListener("click",()=>{e.swordInnerStreak+=1,e.swordInnerStreak>=2&&(e.swordInnerStreak=0,e.swordBonusThrow=!0),m(),u()});const k=document.getElementById("sword-miss");k&&k.addEventListener("click",()=>{e.swordInnerStreak=0,m(),u()});const p=document.getElementById("sword-use-bonus");p&&p.addEventListener("click",()=>{e.swordBonusThrow=!1,m(),u()}),typeof b<"u"&&L()}function F(s,n,c){const i=document.getElementById(s);document.getElementById(n).addEventListener("click",()=>{i.classList.add("visible")}),document.getElementById(c).addEventListener("click",()=>{i.classList.remove("visible")}),i.addEventListener("click",l=>{l.target===i&&i.classList.remove("visible")})}const x="hero-regen";function ee(){try{const s=localStorage.getItem(x);if(s)return JSON.parse(s)}catch{}return{secondsLeft:60}}function T(){localStorage.setItem(x,JSON.stringify(b))}let b=ee();function se(){if(e.inFight||e.currentHp<=0){L();return}if(b.secondsLeft--,b.secondsLeft<=0&&(b.secondsLeft=60,e.currentHp<e.maxHp)){const s=U(e.level);e.currentHp=Math.min(e.currentHp+s,e.maxHp),m(),T(),u();return}T(),L()}function L(){const s=document.getElementById("regen-timer");s&&(s.textContent=`(${b.secondsLeft}s)`)}setInterval(se,1e3);u();L();
