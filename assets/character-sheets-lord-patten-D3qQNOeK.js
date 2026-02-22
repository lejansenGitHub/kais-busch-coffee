import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{D as $,S as E,L as x,d as S,a as q,I as z,b as C}from"./hero-data-B8v1JvdX.js";const F="hero-state",D=document.querySelector("#app");function O(){try{const s=localStorage.getItem(F);if(s){const t=JSON.parse(s);return t.unlockedItemIds||(t.unlockedItemIds=[]),t.drinkingHornUsed===void 0&&(t.drinkingHornUsed=!1),t.swordInnerStreak===void 0&&(t.swordInnerStreak=0),t.swordBonusThrow===void 0&&(t.swordBonusThrow=!1),t}}catch{}return structuredClone($)}function m(){localStorage.setItem(F,JSON.stringify(e))}let e=O();function R(s){return s>.5?"#8b1a1a":s>.25?"#6a1515":"#4a0e0e"}function g(s){return 5+Math.floor(s/2)*5}function B(s){return 1+Math.floor(s/2)}function N(){const s=["blind_fury","repulsion","pushback","iron_ward","off_balance","heavy_hands","freeze","crude_sack","tremor","vertigo","revision","sugar_rush","respect_the_cards"],t=["advance","double_attack","fine_sack","snipers_gambit","war_cry","high_standards","trick_shot"],c=["backstab","thieves_gambit","dark_deal"],i=[{label:"Aktiv — Gegner-Debuffs",ids:[]},{label:"Aktiv — Selbst-Buffs",ids:[]},{label:"Aktiv — Schurke",ids:[]},{label:"Passive",ids:[]}];for(const l of Object.keys(q)){const a=E[l];a&&(a.type==="P"?i[3].ids.push(l):s.includes(l)?i[0].ids.push(l):t.includes(l)?i[1].ids.push(l):c.includes(l)?i[2].ids.push(l):a.desc.toLowerCase().includes("gegner")?i[0].ids.push(l):i[1].ids.push(l))}return i}const H={belt:"🦴",arm_protectors:"🛡",pelt:"🧊",small_bag:"👜",drinking_horn:"🥃",sword:"⚔"};function P(s){const t=S(e.level);switch(s){case"belt":return`Außenkreis-Schaden reduziert um ${t}`;case"arm_protectors":return`Mittelkreis-Schaden reduziert um ${t}`;case"pelt":return`Innenkreis-Schaden reduziert um ${t}`;case"small_bag":return"+1 Skill-Slot";case"drinking_horn":return`Heilen +${g(e.level)} einmal pro Kampf`;case"sword":return"2 aufeinanderfolgende Innentreffer = 1 Bonuswurf";default:return""}}function K(){return Object.entries(C).map(([s,t])=>{const c=e.unlockedItemIds.includes(s),i=c?"item-row":"item-row locked",l=H[s]||"?";let a;c?a="":a=`
        <div class="unlock-form">
          <input class="unlock-input" data-item-id="${s}" type="text" inputmode="numeric" maxlength="4" placeholder="____">
          <button class="item-unlock-btn" data-item-unlock="${s}">Unlock</button>
        </div>`;const o=c?`<div class="item-effect">${P(s)}</div>`:"";return`
      <div class="${i}">
        <div class="item-icon">${l}</div>
        <div class="item-info">
          <div class="item-name">${t.name}</div>
          ${o}
        </div>
        <div class="item-actions">${a}</div>
      </div>`}).join("")}function _(){const s=[];if(e.unlockedItemIds.includes("drinking_horn")){const t=e.drinkingHornUsed||e.currentHp>=e.maxHp;s.push(`
      <div class="item-row">
        <div class="item-icon">${H.drinking_horn}</div>
        <div class="item-info">
          <div class="item-name">Drinking Horn</div>
          <div class="item-effect">${e.drinkingHornUsed?"Bereits benutzt":`Heilen +${g(e.level)}`}</div>
        </div>
        <div class="item-actions">
          <button class="drinking-horn-btn" id="drinking-horn-use" ${t?"disabled":""}>Trinken</button>
        </div>
      </div>`)}if(e.unlockedItemIds.includes("sword")){let t;e.swordBonusThrow?t=`
        <div class="bonus-throw-indicator">
          <span class="bonus-throw-text">Bonuswurf!</span>
          <button class="bonus-throw-use-btn" id="sword-use-bonus">Use</button>
        </div>`:t=`
        <div class="sword-tracker">
          <span class="sword-streak">${e.swordInnerStreak}/2</span>
          <button class="sword-hit-btn inner-hit" id="sword-inner-hit">Inner</button>
          <button class="sword-hit-btn" id="sword-miss">Daneben</button>
        </div>`,s.push(`
      <div class="item-row">
        <div class="item-icon">${H.sword}</div>
        <div class="item-info">
          <div class="item-name">Sword</div>
          <div class="item-effect">2 aufeinanderfolgende Innentreffer = Bonuswurf</div>
        </div>
        <div class="item-actions">${t}</div>
      </div>`)}return s.join("")}function G(){const s=e.maxHp>0?e.currentHp/e.maxHp:0,t=Math.round(s*100),c=Array.from({length:e.maxSkillSlots},(i,l)=>{const a=e.equippedSkillIds[l];if(!a)return'<div class="skill-slot empty-slot"><span class="empty-slot-text">— Leer —</span></div>';const o=E[a];if(!o)return"";const f=o.type==="A",b=f?"active":"passive",k=e.skillUsage[a]??o.maxUses,p=f?`<button class="skill-use-btn" data-skill-id="${a}" ${k<=0?"disabled":""}>Use<br><span class="btn-uses">${k}/${o.maxUses}</span></button>`:'<span class="skill-counter">&infin;</span>';return`
      <div class="equipped-slot">
        <div class="skill-badge ${b}">${o.type}</div>
        <div class="skill-info">
          <div class="skill-name">${o.name}</div>
          <div class="skill-desc">${o.desc}</div>
          ${o.duration?`<div class="skill-duration">${o.duration} ${o.duration!==1?"Würfe":"Wurf"}</div>`:""}
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
            <div class="hp-bar-fill" style="width:${t}%;background:${R(s)}"></div>
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
          <span class="stat-value${e.inFight||e.currentHp<=0?" regen-paused":""}">${B(e.level)} HP/min <span class="regen-timer" id="regen-timer"></span></span>
        </div>
      </div>

      <div class="target-section">
        <svg class="target-svg" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="56" fill="#0f0d08" stroke="#27ae60" stroke-width="2" />
          <circle cx="60" cy="60" r="36" fill="#151008" stroke="#f39c12" stroke-width="2" />
          <circle cx="60" cy="60" r="16" fill="#1a120a" stroke="#e74c3c" stroke-width="2" />
        </svg>
        <div class="target-legend">
          <div class="target-row"><span class="target-dot outer"></span><span class="target-zone">Außen</span><span class="target-dmg">${e.damage.outer} dmg${e.unlockedItemIds.includes("belt")?`<span class="dmg-reduction">(-${S(e.level)})</span>`:""}</span></div>
          <div class="target-row"><span class="target-dot middle"></span><span class="target-zone">Mitte</span><span class="target-dmg">${e.damage.middle} dmg${e.unlockedItemIds.includes("arm_protectors")?`<span class="dmg-reduction">(-${S(e.level)})</span>`:""}</span></div>
          <div class="target-row"><span class="target-dot inner"></span><span class="target-zone">Innen</span><span class="target-dmg">${e.damage.inner} dmg${e.unlockedItemIds.includes("pelt")?`<span class="dmg-reduction">(-${S(e.level)})</span>`:""}</span></div>
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
        <button class="heal-btn" id="heal-btn" ${e.currentHp>=e.maxHp||e.inFight?"disabled":""}>Heilen +${g(e.level)}</button>
      </div>

      ${e.inFight&&_()?`
        <div class="skills-header">Aktive Items</div>
        <div class="items-list">${_()}</div>
      `:""}

      <button class="reset-btn">Reset</button>
    </div>`}function j(){const s=$.story;return`
  <div class="info-overlay" id="story-overlay">
    <div class="info-panel">
      <button class="info-close-btn" id="story-close">&times;</button>
      <h2 class="info-title">${$.name}</h2>
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
  </div>`}const W=`
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
  </div>`;function J(){const s=e.level+1,t=x.map(c=>`<button class="level-up-choice" data-choice="${c.id}">${c.label}</button>`).join("");return`
  <div class="level-up-overlay" id="levelup-overlay">
    <div class="level-up-panel">
      <h2 class="level-up-title">Level Up auf ${s}</h2>
      <div class="level-up-choices">${t}</div>
      <button class="level-up-cancel" id="levelup-cancel">Abbrechen</button>
    </div>
  </div>`}function Y(){const s=N();let t=`
  <div class="skill-menu-overlay" id="skillmenu-overlay">
    <div class="skill-menu-panel">
      <button class="skill-menu-close" id="skillmenu-close">&times;</button>
      <h2 class="skill-menu-title">Skills</h2>`;for(const c of s)if(c.ids.length!==0){t+=`<div class="skill-group-header">${c.label}</div>`;for(const i of c.ids){const l=E[i],a=e.unlockedSkillIds.includes(i),o=e.equippedSkillIds.includes(i),f=e.equippedSkillIds.length<e.maxSkillSlots,b=a?"skill-row":"skill-row locked",k=l.type==="A"?"active":"passive";let p;a?o?p=`<button class="unequip-menu-btn" data-menu-unequip="${i}">Unequip</button>`:p=`<button class="equip-btn" data-equip="${i}" ${f?"":"disabled"}>Equip</button>`:p=`
          <div class="unlock-form">
            <input class="unlock-input" data-skill-id="${i}" type="text" inputmode="numeric" maxlength="4" placeholder="____">
            <button class="unlock-btn" data-unlock="${i}">Unlock</button>
          </div>`,t+=`
        <div class="${b}">
          <div class="skill-badge ${k}">${l.type}</div>
          <div class="skill-info">
            <div class="skill-name">${l.name}</div>
            <div class="skill-desc">${l.desc}</div>
          </div>
          <div class="skill-row-actions">${p}</div>
        </div>`}}return t+="</div></div>",t}function Z(){return`
  <div class="skill-menu-overlay" id="itemmenu-overlay">
    <div class="skill-menu-panel">
      <button class="skill-menu-close" id="itemmenu-close">&times;</button>
      <h2 class="skill-menu-title">Items</h2>
      <div class="items-list">${K()}</div>
    </div>
  </div>`}function Q(s){return!s||s.length===0?"":`
  <div class="info-overlay" id="levelup-summary-overlay">
    <div class="info-panel">
      <button class="info-close-btn" id="levelup-summary-close">&times;</button>
      <h2 class="info-title">Level ${e.level} erreicht!</h2>
      <div class="info-section">
        <ul>${s.map(t=>`<li>${t}</li>`).join("")}</ul>
      </div>
    </div>
  </div>`}function u(s){D.innerHTML=G()+j()+W+J()+Y()+Z()+Q(s),document.querySelectorAll(".hp-btn").forEach(n=>{n.addEventListener("click",()=>{if(n.dataset.dir==="up"){if(e.currentHp>=e.maxHp||!confirm("Letzten Treffer rückgängig machen?"))return;e.currentHp++}n.dataset.dir==="down"&&e.currentHp>0&&e.currentHp--,m(),u()})}),document.querySelectorAll(".skill-use-btn").forEach(n=>{n.addEventListener("click",()=>{const r=n.dataset.skillId,d=E[r];if(!d)return;const v=e.skillUsage[r]??d.maxUses;v>0&&(e.skillUsage[r]=v-1,m(),u())})});const t=document.getElementById("start-fight"),c=document.getElementById("fight-ended");t&&t.addEventListener("click",()=>{confirm("Kampf starten? Regeneration wird pausiert.")&&(e.inFight=!0,m(),u())}),c&&c.addEventListener("click",()=>{confirm("Kampf beenden? Skill-Einsätze werden wiederhergestellt und Regeneration wird fortgesetzt.")&&(e.skillUsage={},e.inFight=!1,e.drinkingHornUsed=!1,e.swordInnerStreak=0,e.swordBonusThrow=!1,m(),u())}),document.getElementById("heal-btn").addEventListener("click",()=>{if(e.currentHp>=e.maxHp||e.inFight)return;const n=g(e.level);confirm(`${n} HP heilen? Nur verwenden, wenn die erforderliche Aktion abgeschlossen wurde.`)&&(e.currentHp=Math.min(e.currentHp+n,e.maxHp),m(),u())}),document.querySelector(".reset-btn").addEventListener("click",()=>{confirm("WARNUNG: Dies löscht den GESAMTEN Fortschritt (Level, Skills, Items). Nur für Notfälle. Fortfahren?")&&confirm("Bist du absolut sicher? Dies kann nicht rückgängig gemacht werden.")&&(e=structuredClone($),m(),u())}),A("story-overlay","story-open","story-close"),A("info-overlay","info-open","info-close");const i=document.getElementById("levelup-overlay");document.getElementById("level-up-open").addEventListener("click",()=>{i.classList.add("visible")}),document.getElementById("levelup-cancel").addEventListener("click",()=>{i.classList.remove("visible")}),i.addEventListener("click",n=>{n.target===i&&i.classList.remove("visible")}),document.querySelectorAll(".level-up-choice").forEach(n=>{n.addEventListener("click",()=>{const r=n.dataset.choice,d=x.find(L=>L.id===r);if(!d)return;const v=e.level+1,I=v%5===0;if(!confirm(`Level Up auf ${v}?
${d.label}`))return;d.apply(e),e.level=v,e.levelUpHistory.push(r);const h=[d.label];I&&(e.maxSkillSlots+=1,e.actions<3?(e.actions+=1,h.push("+1 Aktion, +1 Skill-Slot")):h.push("+1 Skill-Slot")),v%2===0&&(h.push(`Heilen steigt auf +${g(v)}`),h.push(`Regen steigt auf ${B(v)} HP/min`));const M=e.unlockedItemIds.some(L=>["belt","arm_protectors","pelt"].includes(L));I&&M&&h.push(`Schadensreduktion steigt auf -${S(v)}`),e.unlockedItemIds.includes("drinking_horn")&&v%2===0&&h.push(`Drinking Horn Heilung steigt auf +${g(v)}`),m(),i.classList.remove("visible"),u(h),document.getElementById("levelup-summary-overlay")?.classList.add("visible")})});const l=document.getElementById("skillmenu-overlay");document.getElementById("skill-menu-open").addEventListener("click",()=>{l.classList.add("visible")}),document.getElementById("skillmenu-close").addEventListener("click",()=>{l.classList.remove("visible")}),l.addEventListener("click",n=>{n.target===l&&l.classList.remove("visible")});const a=document.getElementById("itemmenu-overlay");document.getElementById("item-menu-open").addEventListener("click",()=>{a.classList.add("visible")}),document.getElementById("itemmenu-close").addEventListener("click",()=>{a.classList.remove("visible")}),a.addEventListener("click",n=>{n.target===a&&a.classList.remove("visible")});const o=document.getElementById("levelup-summary-overlay");o&&(document.getElementById("levelup-summary-close").addEventListener("click",()=>{o.classList.remove("visible")}),o.addEventListener("click",n=>{n.target===o&&o.classList.remove("visible")})),document.querySelectorAll(".unlock-btn").forEach(n=>{n.addEventListener("click",()=>{const r=n.dataset.unlock,d=document.querySelector(`.unlock-input[data-skill-id="${r}"]`),v=d.value.trim(),I=q[r];v===I?(e.unlockedSkillIds.push(r),m(),u(),document.getElementById("skillmenu-overlay").classList.add("visible")):(d.classList.add("error"),d.value="",setTimeout(()=>d.classList.remove("error"),400))})}),document.querySelectorAll(".equip-btn").forEach(n=>{n.addEventListener("click",()=>{const r=n.dataset.equip;if(e.equippedSkillIds.length>=e.maxSkillSlots||e.equippedSkillIds.includes(r))return;e.equippedSkillIds.push(r);const d=E[r];d&&!(r in e.skillUsage)&&(e.skillUsage[r]=d.maxUses),m(),u(),document.getElementById("skillmenu-overlay").classList.add("visible")})}),document.querySelectorAll(".unequip-menu-btn").forEach(n=>{n.addEventListener("click",()=>{const r=n.dataset.menuUnequip;e.equippedSkillIds=e.equippedSkillIds.filter(d=>d!==r),m(),u(),document.getElementById("skillmenu-overlay").classList.add("visible")})}),document.querySelectorAll(".item-unlock-btn").forEach(n=>{n.addEventListener("click",()=>{const r=n.dataset.itemUnlock,d=document.querySelector(`.unlock-input[data-item-id="${r}"]`),v=d.value.trim(),I=z[r];v===I?(e.unlockedItemIds.push(r),r==="small_bag"&&(e.maxSkillSlots+=1),m(),u(),document.getElementById("itemmenu-overlay").classList.add("visible")):(d.classList.add("error"),d.value="",setTimeout(()=>d.classList.remove("error"),400))})});const f=document.getElementById("drinking-horn-use");f&&f.addEventListener("click",()=>{if(e.drinkingHornUsed||e.currentHp>=e.maxHp)return;const n=g(e.level);e.currentHp=Math.min(e.currentHp+n,e.maxHp),e.drinkingHornUsed=!0,m(),u()});const b=document.getElementById("sword-inner-hit");b&&b.addEventListener("click",()=>{e.swordInnerStreak+=1,e.swordInnerStreak>=2&&(e.swordInnerStreak=0,e.swordBonusThrow=!0),m(),u()});const k=document.getElementById("sword-miss");k&&k.addEventListener("click",()=>{e.swordInnerStreak=0,m(),u()});const p=document.getElementById("sword-use-bonus");p&&p.addEventListener("click",()=>{e.swordBonusThrow=!1,m(),u()}),typeof y<"u"&&w()}function A(s,t,c){const i=document.getElementById(s);document.getElementById(t).addEventListener("click",()=>{i.classList.add("visible")}),document.getElementById(c).addEventListener("click",()=>{i.classList.remove("visible")}),i.addEventListener("click",l=>{l.target===i&&i.classList.remove("visible")})}const T="hero-regen";function V(){try{const s=localStorage.getItem(T);if(s)return JSON.parse(s)}catch{}return{secondsLeft:60}}function U(){localStorage.setItem(T,JSON.stringify(y))}let y=V();function X(){if(e.inFight||e.currentHp<=0){w();return}if(y.secondsLeft--,y.secondsLeft<=0&&(y.secondsLeft=60,e.currentHp<e.maxHp)){const s=B(e.level);e.currentHp=Math.min(e.currentHp+s,e.maxHp),m(),U(),u();return}U(),w()}function w(){const s=document.getElementById("regen-timer");s&&(s.textContent=`(${y.secondsLeft}s)`)}setInterval(X,1e3);u();w();
