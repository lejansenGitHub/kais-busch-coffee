import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{S as E}from"./skills-BSq-BA_X.js";import{D as w,L as q,d as $,S as F,I as C,a as M}from"./hero-data-D1MqVU-7.js";const A="hero-state",R=document.querySelector("#app");function P(){try{const s=localStorage.getItem(A);if(s){const t=JSON.parse(s);return t.unlockedItemIds||(t.unlockedItemIds=[]),t.drinkingHornUsed===void 0&&(t.drinkingHornUsed=!1),t.swordInnerStreak===void 0&&(t.swordInnerStreak=0),t.swordBonusThrow===void 0&&(t.swordBonusThrow=!1),t}}catch{}return structuredClone(w)}function m(){localStorage.setItem(A,JSON.stringify(e))}let e=P();function D(s){return s>.5?"#8b1a1a":s>.25?"#6a1515":"#4a0e0e"}function k(s){return 5+Math.floor(s/2)*5}function B(s){return 1+Math.floor(s/2)}function N(){const s=[{label:"Active — Enemy Debuffs",ids:[]},{label:"Active — Self Buffs",ids:[]},{label:"Passive",ids:[]}];for(const[t,d]of Object.entries(E))d.type==="A"?["advance","double_attack","fine_sack","snipers_gambit","war_cry"].includes(t)?s[1].ids.push(t):s[0].ids.push(t):s[2].ids.push(t);return s}const H={belt:"🦴",arm_protectors:"🛡",pelt:"🧊",small_bag:"👜",drinking_horn:"🥃",sword:"⚔"};function j(s){const t=$(e.level);switch(s){case"belt":return`Outer circle damage reduced by ${t}`;case"arm_protectors":return`Middle circle damage reduced by ${t}`;case"pelt":return`Inner circle damage reduced by ${t}`;case"small_bag":return"+1 skill slot";case"drinking_horn":return`Heal +${k(e.level)} once per fight`;case"sword":return"2 consecutive inner hits = 1 bonus throw";default:return""}}function K(){return Object.entries(M).map(([s,t])=>{const d=e.unlockedItemIds.includes(s),n=d?"item-row":"item-row locked",u=H[s]||"?";let c;d?c="":c=`
        <div class="unlock-form">
          <input class="unlock-input" data-item-id="${s}" type="text" inputmode="numeric" maxlength="4" placeholder="____">
          <button class="item-unlock-btn" data-item-unlock="${s}">Unlock</button>
        </div>`;const o=d?`<div class="item-effect">${j(s)}</div>`:"";return`
      <div class="${n}">
        <div class="item-icon">${u}</div>
        <div class="item-info">
          <div class="item-name">${t.name}</div>
          ${o}
        </div>
        <div class="item-actions">${c}</div>
      </div>`}).join("")}function x(){const s=[];if(e.unlockedItemIds.includes("drinking_horn")){const t=e.drinkingHornUsed||e.currentHp>=e.maxHp;s.push(`
      <div class="item-row">
        <div class="item-icon">${H.drinking_horn}</div>
        <div class="item-info">
          <div class="item-name">Drinking Horn</div>
          <div class="item-effect">${e.drinkingHornUsed?"Used this fight":`Heal +${k(e.level)}`}</div>
        </div>
        <div class="item-actions">
          <button class="drinking-horn-btn" id="drinking-horn-use" ${t?"disabled":""}>Drink</button>
        </div>
      </div>`)}if(e.unlockedItemIds.includes("sword")){let t;e.swordBonusThrow?t=`
        <div class="bonus-throw-indicator">
          <span class="bonus-throw-text">Bonus Throw!</span>
          <button class="bonus-throw-use-btn" id="sword-use-bonus">Use</button>
        </div>`:t=`
        <div class="sword-tracker">
          <span class="sword-streak">${e.swordInnerStreak}/2</span>
          <button class="sword-hit-btn inner-hit" id="sword-inner-hit">Inner</button>
          <button class="sword-hit-btn" id="sword-miss">Miss</button>
        </div>`,s.push(`
      <div class="item-row">
        <div class="item-icon">${H.sword}</div>
        <div class="item-info">
          <div class="item-name">Sword</div>
          <div class="item-effect">2 consecutive inner hits = bonus throw</div>
        </div>
        <div class="item-actions">${t}</div>
      </div>`)}return s.join("")}function z(){const s=e.maxHp>0?e.currentHp/e.maxHp:0,t=Math.round(s*100),d=Array.from({length:e.maxSkillSlots},(n,u)=>{const c=e.equippedSkillIds[u];if(!c)return'<div class="skill-slot empty-slot"><span class="empty-slot-text">— Empty —</span></div>';const o=E[c];if(!o)return"";const f=o.type==="A",g=f?"active":"passive",h=e.skillUsage[c]??o.maxUses,p=f?`<button class="skill-use-btn" data-skill-id="${c}" ${h<=0?"disabled":""}>Use<br><span class="btn-uses">${h}/${o.maxUses}</span></button>`:'<span class="skill-counter">&infin;</span>';return`
      <div class="equipped-slot">
        <div class="skill-badge ${g}">${o.type}</div>
        <div class="skill-info">
          <div class="skill-name">${o.name}</div>
          <div class="skill-desc">${o.desc}</div>
          ${o.duration?`<div class="skill-duration">${o.duration} throw${o.duration!==1?"s":""}</div>`:""}
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
            <div class="hp-bar-fill" style="width:${t}%;background:${D(s)}"></div>
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
          <span class="stat-label">Actions</span>
          <span class="stat-value">${e.actions}/round</span>
        </div>
        <div class="stat-block">
          <span class="stat-label">Regen${e.inFight||e.currentHp<=0?" (paused)":""}</span>
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
          <div class="target-row"><span class="target-dot outer"></span><span class="target-zone">Outer</span><span class="target-dmg">${e.damage.outer} dmg${e.unlockedItemIds.includes("belt")?`<span class="dmg-reduction">(-${$(e.level)})</span>`:""}</span></div>
          <div class="target-row"><span class="target-dot middle"></span><span class="target-zone">Middle</span><span class="target-dmg">${e.damage.middle} dmg${e.unlockedItemIds.includes("arm_protectors")?`<span class="dmg-reduction">(-${$(e.level)})</span>`:""}</span></div>
          <div class="target-row"><span class="target-dot inner"></span><span class="target-zone">Inner</span><span class="target-dmg">${e.damage.inner} dmg${e.unlockedItemIds.includes("pelt")?`<span class="dmg-reduction">(-${$(e.level)})</span>`:""}</span></div>
        </div>
      </div>

      <div class="skills-header">Equipped Skills</div>
      <div class="skills-list">${d}</div>

      <div class="hero-actions-row">
        <button class="skill-menu-btn" id="skill-menu-open" ${e.inFight?"disabled":""}>Skill Menu</button>
        <button class="skill-menu-btn" id="item-menu-open" ${e.inFight?"disabled":""}>Item Menu</button>
        <button class="level-up-btn" id="level-up-open" ${e.inFight?"disabled":""}>Level Up</button>
      </div>

      <div class="hero-bottom-row">
        ${e.inFight?'<button class="fight-ended-btn" id="fight-ended">End Fight</button>':'<button class="start-fight-btn" id="start-fight">Start Fight</button>'}
        <button class="heal-btn" id="heal-btn" ${e.currentHp>=e.maxHp||e.inFight?"disabled":""}>Heal +${k(e.level)}</button>
      </div>

      ${e.inFight&&x()?`
        <div class="skills-header">Active Items</div>
        <div class="items-list">${x()}</div>
      `:""}

      <button class="reset-btn">Reset</button>
    </div>`}function J(){const s=w.story;return`
  <div class="info-overlay" id="story-overlay">
    <div class="info-panel">
      <button class="info-close-btn" id="story-close">&times;</button>
      <h2 class="info-title">${w.name}</h2>
      <div class="info-section">
        <p>${s.desc}</p>
      </div>
      <div class="info-section">
        <h3>When Hit</h3>
        <p class="catchphrase">${s.onHit}</p>
      </div>
      <div class="info-section">
        <h3>When Striking</h3>
        <p class="catchphrase">${s.onStrike}</p>
      </div>
      <div class="info-section">
        <h3>On Defeat</h3>
        <p class="catchphrase">${s.onDefeat}</p>
      </div>
    </div>
  </div>`}const G=`
  <div class="info-overlay" id="info-overlay">
    <div class="info-panel">
      <button class="info-close-btn" id="info-close">&times;</button>
      <h2 class="info-title">Game Rules</h2>
      <div class="info-section">
        <h3>Overview</h3>
        <p>Turn-based duel. Players alternate rounds. Reduce your opponent's HP to 0 to win.</p>
      </div>
      <div class="info-section">
        <h3>Target</h3>
        <ul>
          <li>Inner circle: 20 cm diameter — <strong>5 dmg</strong> (base)</li>
          <li>Middle circle: 50 cm diameter — <strong>3 dmg</strong> (base)</li>
          <li>Outer circle: 100 cm diameter — <strong>1 dmg</strong> (base)</li>
        </ul>
        <p>If a sandsack touches a more inner circle even slightly, it counts as that zone. Judge by looking <strong>directly from above</strong>.</p>
      </div>
      <div class="info-section">
        <h3>Distance</h3>
        <p>Players stand <strong>5.5 m</strong> away from the target.</p>
      </div>
      <div class="info-section">
        <h3>Sandsacks</h3>
        <p>There are 3 sandsack qualities that differ in <strong>size, weight, and grip</strong>. Normally you throw with the medium one. Skills or passives can force the better or worse quality.</p>
      </div>
      <div class="info-section">
        <h3>Actions</h3>
        <p>Each round a player has a number of <strong>actions</strong>. An action is either a <strong>throw</strong> or <strong>using a skill</strong>. Double Attack counts as 1 action.</p>
      </div>
      <div class="info-section">
        <h3>Skills</h3>
        <p>Each player has up to 3 skill slots. Active skills (<strong>A</strong>) have limited uses and cost 1 action to activate. Passive skills (<strong>P</strong>) are always in effect.</p>
      </div>
    </div>
  </div>`;function W(){const s=e.level+1,t=q.map(d=>`<button class="level-up-choice" data-choice="${d.id}">${d.label}</button>`).join("");return`
  <div class="level-up-overlay" id="levelup-overlay">
    <div class="level-up-panel">
      <h2 class="level-up-title">Level Up to ${s}</h2>
      <div class="level-up-choices">${t}</div>
      <button class="level-up-cancel" id="levelup-cancel">Cancel</button>
    </div>
  </div>`}function Y(){const s=N();let t=`
  <div class="skill-menu-overlay" id="skillmenu-overlay">
    <div class="skill-menu-panel">
      <button class="skill-menu-close" id="skillmenu-close">&times;</button>
      <h2 class="skill-menu-title">Skills</h2>`;for(const d of s)if(d.ids.length!==0){t+=`<div class="skill-group-header">${d.label}</div>`;for(const n of d.ids){const u=E[n],c=e.unlockedSkillIds.includes(n),o=e.equippedSkillIds.includes(n),f=e.equippedSkillIds.length<e.maxSkillSlots,g=c?"skill-row":"skill-row locked",h=u.type==="A"?"active":"passive";let p;c?o?p=`<button class="unequip-menu-btn" data-menu-unequip="${n}">Unequip</button>`:p=`<button class="equip-btn" data-equip="${n}" ${f?"":"disabled"}>Equip</button>`:p=`
          <div class="unlock-form">
            <input class="unlock-input" data-skill-id="${n}" type="text" inputmode="numeric" maxlength="4" placeholder="____">
            <button class="unlock-btn" data-unlock="${n}">Unlock</button>
          </div>`,t+=`
        <div class="${g}">
          <div class="skill-badge ${h}">${u.type}</div>
          <div class="skill-info">
            <div class="skill-name">${u.name}</div>
            <div class="skill-desc">${u.desc}</div>
          </div>
          <div class="skill-row-actions">${p}</div>
        </div>`}}return t+="</div></div>",t}function V(){return`
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
      <h2 class="info-title">Level ${e.level} Reached!</h2>
      <div class="info-section">
        <ul>${s.map(t=>`<li>${t}</li>`).join("")}</ul>
      </div>
    </div>
  </div>`}function r(s){R.innerHTML=z()+J()+G+W()+Y()+V()+Q(s),document.querySelectorAll(".hp-btn").forEach(i=>{i.addEventListener("click",()=>{if(i.dataset.dir==="up"){if(e.currentHp>=e.maxHp||!confirm("Undo last hit?"))return;e.currentHp++}i.dataset.dir==="down"&&e.currentHp>0&&e.currentHp--,m(),r()})}),document.querySelectorAll(".skill-use-btn").forEach(i=>{i.addEventListener("click",()=>{const l=i.dataset.skillId,a=E[l];if(!a)return;const v=e.skillUsage[l]??a.maxUses;v>0&&(e.skillUsage[l]=v-1,m(),r())})});const t=document.getElementById("start-fight"),d=document.getElementById("fight-ended");t&&t.addEventListener("click",()=>{confirm("Start a fight? Regeneration will be paused.")&&(e.inFight=!0,m(),r())}),d&&d.addEventListener("click",()=>{confirm("End the current fight? Skill uses will be restored and regeneration will resume.")&&(e.skillUsage={},e.inFight=!1,e.drinkingHornUsed=!1,e.swordInnerStreak=0,e.swordBonusThrow=!1,m(),r())}),document.getElementById("heal-btn").addEventListener("click",()=>{if(e.currentHp>=e.maxHp||e.inFight)return;const i=k(e.level);confirm(`Heal ${i} HP? Only use this if you completed the required action.`)&&(e.currentHp=Math.min(e.currentHp+i,e.maxHp),m(),r())}),document.querySelector(".reset-btn").addEventListener("click",()=>{confirm("WARNING: This will erase ALL progress (level, skills, items). This is for emergencies only. Continue?")&&confirm("Are you absolutely sure? This cannot be undone.")&&(e=structuredClone(w),m(),r())}),U("story-overlay","story-open","story-close"),U("info-overlay","info-open","info-close");const n=document.getElementById("levelup-overlay");document.getElementById("level-up-open").addEventListener("click",()=>{n.classList.add("visible")}),document.getElementById("levelup-cancel").addEventListener("click",()=>{n.classList.remove("visible")}),n.addEventListener("click",i=>{i.target===n&&n.classList.remove("visible")}),document.querySelectorAll(".level-up-choice").forEach(i=>{i.addEventListener("click",()=>{const l=i.dataset.choice,a=q.find(L=>L.id===l);if(!a)return;const v=e.level+1,b=v%5===0;if(!confirm(`Level up to ${v}?
${a.label}`))return;a.apply(e),e.level=v,e.levelUpHistory.push(l);const y=[a.label];b&&(e.actions+=1,e.maxSkillSlots+=1,y.push("+1 Action, +1 Skill Slot")),v%2===0&&(y.push(`Heal increases to +${k(v)}`),y.push(`Regen increases to ${B(v)} HP/min`));const O=e.unlockedItemIds.some(L=>["belt","arm_protectors","pelt"].includes(L));b&&O&&y.push(`Damage reduction increases to -${$(v)}`),e.unlockedItemIds.includes("drinking_horn")&&v%2===0&&y.push(`Drinking Horn heal increases to +${k(v)}`),m(),n.classList.remove("visible"),r(y),document.getElementById("levelup-summary-overlay")?.classList.add("visible")})});const u=document.getElementById("skillmenu-overlay");document.getElementById("skill-menu-open").addEventListener("click",()=>{u.classList.add("visible")}),document.getElementById("skillmenu-close").addEventListener("click",()=>{u.classList.remove("visible")}),u.addEventListener("click",i=>{i.target===u&&u.classList.remove("visible")});const c=document.getElementById("itemmenu-overlay");document.getElementById("item-menu-open").addEventListener("click",()=>{c.classList.add("visible")}),document.getElementById("itemmenu-close").addEventListener("click",()=>{c.classList.remove("visible")}),c.addEventListener("click",i=>{i.target===c&&c.classList.remove("visible")});const o=document.getElementById("levelup-summary-overlay");o&&(document.getElementById("levelup-summary-close").addEventListener("click",()=>{o.classList.remove("visible")}),o.addEventListener("click",i=>{i.target===o&&o.classList.remove("visible")})),document.querySelectorAll(".unlock-btn").forEach(i=>{i.addEventListener("click",()=>{const l=i.dataset.unlock,a=document.querySelector(`.unlock-input[data-skill-id="${l}"]`),v=a.value.trim(),b=F[l];v===b?(e.unlockedSkillIds.push(l),m(),r(),document.getElementById("skillmenu-overlay").classList.add("visible")):(a.classList.add("error"),a.value="",setTimeout(()=>a.classList.remove("error"),400))})}),document.querySelectorAll(".equip-btn").forEach(i=>{i.addEventListener("click",()=>{const l=i.dataset.equip;if(e.equippedSkillIds.length>=e.maxSkillSlots||e.equippedSkillIds.includes(l))return;e.equippedSkillIds.push(l);const a=E[l];a&&!(l in e.skillUsage)&&(e.skillUsage[l]=a.maxUses),m(),r(),document.getElementById("skillmenu-overlay").classList.add("visible")})}),document.querySelectorAll(".unequip-menu-btn").forEach(i=>{i.addEventListener("click",()=>{const l=i.dataset.menuUnequip;e.equippedSkillIds=e.equippedSkillIds.filter(a=>a!==l),m(),r(),document.getElementById("skillmenu-overlay").classList.add("visible")})}),document.querySelectorAll(".item-unlock-btn").forEach(i=>{i.addEventListener("click",()=>{const l=i.dataset.itemUnlock,a=document.querySelector(`.unlock-input[data-item-id="${l}"]`),v=a.value.trim(),b=C[l];v===b?(e.unlockedItemIds.push(l),l==="small_bag"&&(e.maxSkillSlots+=1),m(),r(),document.getElementById("itemmenu-overlay").classList.add("visible")):(a.classList.add("error"),a.value="",setTimeout(()=>a.classList.remove("error"),400))})});const f=document.getElementById("drinking-horn-use");f&&f.addEventListener("click",()=>{if(e.drinkingHornUsed||e.currentHp>=e.maxHp)return;const i=k(e.level);e.currentHp=Math.min(e.currentHp+i,e.maxHp),e.drinkingHornUsed=!0,m(),r()});const g=document.getElementById("sword-inner-hit");g&&g.addEventListener("click",()=>{e.swordInnerStreak+=1,e.swordInnerStreak>=2&&(e.swordInnerStreak=0,e.swordBonusThrow=!0),m(),r()});const h=document.getElementById("sword-miss");h&&h.addEventListener("click",()=>{e.swordInnerStreak=0,m(),r()});const p=document.getElementById("sword-use-bonus");p&&p.addEventListener("click",()=>{e.swordBonusThrow=!1,m(),r()}),typeof I<"u"&&S()}function U(s,t,d){const n=document.getElementById(s);document.getElementById(t).addEventListener("click",()=>{n.classList.add("visible")}),document.getElementById(d).addEventListener("click",()=>{n.classList.remove("visible")}),n.addEventListener("click",u=>{u.target===n&&n.classList.remove("visible")})}const T="hero-regen";function X(){try{const s=localStorage.getItem(T);if(s)return JSON.parse(s)}catch{}return{secondsLeft:60}}function _(){localStorage.setItem(T,JSON.stringify(I))}let I=X();function Z(){if(e.inFight||e.currentHp<=0){S();return}if(I.secondsLeft--,I.secondsLeft<=0&&(I.secondsLeft=60,e.currentHp<e.maxHp)){const s=B(e.level);e.currentHp=Math.min(e.currentHp+s,e.maxHp),m(),_(),r();return}_(),S()}function S(){const s=document.getElementById("regen-timer");s&&(s.textContent=`(${I.secondsLeft}s)`)}setInterval(Z,1e3);r();S();
