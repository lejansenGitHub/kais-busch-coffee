import"./modulepreload-polyfill-B5Qt9EMX.js";import{S as f}from"./skills-C6ifZiiC.js";import{D as g,L as E,S as I}from"./hero-data-Cf1XjC3Q.js";const L="hero-state",H=document.querySelector("#app");function q(){try{const s=localStorage.getItem(L);if(s)return JSON.parse(s)}catch{}return structuredClone(g)}function d(){localStorage.setItem(L,JSON.stringify(e))}let e=q();function w(s){return s>.5?"#8b1a1a":s>.25?"#6a1515":"#4a0e0e"}function k(s){return 5+Math.floor(s/2)*5}function b(s){return 1+Math.floor(s/2)}function x(){const s=[{label:"Active — Enemy Debuffs",ids:[]},{label:"Active — Self Buffs",ids:[]},{label:"Passive",ids:[]}];for(const[a,o]of Object.entries(f))o.type==="A"?["advance","double_attack","fine_sack","snipers_gambit","war_cry"].includes(a)?s[1].ids.push(a):s[0].ids.push(a):s[2].ids.push(a);return s}function A(){const s=e.maxHp>0?e.currentHp/e.maxHp:0,a=Math.round(s*100),o=Array.from({length:e.maxSkillSlots},(n,t)=>{const l=e.equippedSkillIds[t];if(!l)return'<div class="skill-slot empty-slot"><span class="empty-slot-text">— Empty —</span></div>';const i=f[l];if(!i)return"";const c=i.type==="A",u=c?"active":"passive",p=e.skillUsage[l]??i.maxUses,v=c?`<button class="skill-use-btn" data-skill-id="${l}" ${p<=0?"disabled":""}>Use<br><span class="btn-uses">${p}/${i.maxUses}</span></button>`:'<span class="skill-counter">&infin;</span>';return`
      <div class="equipped-slot">
        <div class="skill-badge ${u}">${i.type}</div>
        <div class="skill-info">
          <div class="skill-name">${i.name}</div>
          <div class="skill-desc">${i.desc}</div>
          ${i.duration?`<div class="skill-duration">${i.duration} throw${i.duration!==1?"s":""}</div>`:""}
        </div>
        <div class="skill-uses">${v}</div>
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
            <div class="hp-bar-fill" style="width:${a}%;background:${w(s)}"></div>
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
          <span class="stat-value${e.inFight||e.currentHp<=0?" regen-paused":""}">${b(e.level)} HP/min <span class="regen-timer" id="regen-timer"></span></span>
        </div>
      </div>

      <div class="target-section">
        <svg class="target-svg" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="56" fill="#0f0d08" stroke="#27ae60" stroke-width="2" />
          <circle cx="60" cy="60" r="36" fill="#151008" stroke="#f39c12" stroke-width="2" />
          <circle cx="60" cy="60" r="16" fill="#1a120a" stroke="#e74c3c" stroke-width="2" />
        </svg>
        <div class="target-legend">
          <div class="target-row"><span class="target-dot outer"></span><span class="target-zone">Outer</span><span class="target-dmg">${e.damage.outer} dmg</span></div>
          <div class="target-row"><span class="target-dot middle"></span><span class="target-zone">Middle</span><span class="target-dmg">${e.damage.middle} dmg</span></div>
          <div class="target-row"><span class="target-dot inner"></span><span class="target-zone">Inner</span><span class="target-dmg">${e.damage.inner} dmg</span></div>
        </div>
      </div>

      <div class="skills-header">Equipped Skills</div>
      <div class="skills-list">${o}</div>

      <div class="hero-actions-row">
        <button class="skill-menu-btn" id="skill-menu-open">Skill Menu</button>
        <button class="level-up-btn" id="level-up-open">Level Up</button>
      </div>

      <div class="skills-header">Items</div>
      <div class="items-placeholder">Coming soon</div>

      <div class="hero-bottom-row">
        ${e.inFight?'<button class="fight-ended-btn" id="fight-ended">End Fight</button>':'<button class="start-fight-btn" id="start-fight">Start Fight</button>'}
        <button class="heal-btn" id="heal-btn" ${e.currentHp>=e.maxHp||e.inFight?"disabled":""}>Heal +${k(e.level)}</button>
      </div>
      <button class="reset-btn">Reset</button>
    </div>`}function B(){const s=g.story;return`
  <div class="info-overlay" id="story-overlay">
    <div class="info-panel">
      <button class="info-close-btn" id="story-close">&times;</button>
      <h2 class="info-title">${g.name}</h2>
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
  </div>`}const U=`
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
  </div>`;function O(){const s=e.level+1,a=s%5===0,o=s%2===0,n=[];a&&n.push("+1 Action, +1 Skill Slot"),o&&n.push(`Heal increases to +${k(s)}`,`Regen increases to ${b(s)} HP/min`);const t=n.length>0?`<div class="level-up-bonus">${n.join("<br>")}</div>`:"",l=E.map(i=>`<button class="level-up-choice" data-choice="${i.id}">${i.label}</button>`).join("");return`
  <div class="level-up-overlay" id="levelup-overlay">
    <div class="level-up-panel">
      <h2 class="level-up-title">Level Up to ${s}</h2>
      ${t}
      <div class="level-up-choices">${l}</div>
      <button class="level-up-cancel" id="levelup-cancel">Cancel</button>
    </div>
  </div>`}function _(){const s=x();let a=`
  <div class="skill-menu-overlay" id="skillmenu-overlay">
    <div class="skill-menu-panel">
      <button class="skill-menu-close" id="skillmenu-close">&times;</button>
      <h2 class="skill-menu-title">Skills</h2>`;for(const o of s)if(o.ids.length!==0){a+=`<div class="skill-group-header">${o.label}</div>`;for(const n of o.ids){const t=f[n],l=e.unlockedSkillIds.includes(n),i=e.equippedSkillIds.includes(n),c=e.equippedSkillIds.length<e.maxSkillSlots,u=l?"skill-row":"skill-row locked",p=t.type==="A"?"active":"passive";let v;l?i?v=`<button class="unequip-menu-btn" data-menu-unequip="${n}">Unequip</button>`:v=`<button class="equip-btn" data-equip="${n}" ${c?"":"disabled"}>Equip</button>`:v=`
          <div class="unlock-form">
            <input class="unlock-input" data-skill-id="${n}" type="text" inputmode="numeric" maxlength="4" placeholder="____">
            <button class="unlock-btn" data-unlock="${n}">Unlock</button>
          </div>`,a+=`
        <div class="${u}">
          <div class="skill-badge ${p}">${t.type}</div>
          <div class="skill-info">
            <div class="skill-name">${t.name}</div>
            <div class="skill-desc">${t.desc}</div>
          </div>
          <div class="skill-row-actions">${v}</div>
        </div>`}}return a+="</div></div>",a}function r(){H.innerHTML=A()+B()+U+O()+_(),document.querySelectorAll(".hp-btn").forEach(t=>{t.addEventListener("click",()=>{if(t.dataset.dir==="up"){if(e.currentHp>=e.maxHp||!confirm("Undo last hit?"))return;e.currentHp++}t.dataset.dir==="down"&&e.currentHp>0&&e.currentHp--,d(),r()})}),document.querySelectorAll(".skill-use-btn").forEach(t=>{t.addEventListener("click",()=>{const l=t.dataset.skillId,i=f[l];if(!i)return;const c=e.skillUsage[l]??i.maxUses;c>0&&(e.skillUsage[l]=c-1,d(),r())})});const s=document.getElementById("start-fight"),a=document.getElementById("fight-ended");s&&s.addEventListener("click",()=>{confirm("Start a fight? Regeneration will be paused.")&&(e.inFight=!0,d(),r())}),a&&a.addEventListener("click",()=>{confirm("End the current fight? Skill uses will be restored and regeneration will resume.")&&(e.skillUsage={},e.inFight=!1,d(),r())}),document.getElementById("heal-btn").addEventListener("click",()=>{if(e.currentHp>=e.maxHp||e.inFight)return;const t=k(e.level);confirm(`Heal ${t} HP? Only use this if you completed the required action.`)&&(e.currentHp=Math.min(e.currentHp+t,e.maxHp),d(),r())}),document.querySelector(".reset-btn").addEventListener("click",()=>{confirm("WARNING: This will erase ALL progress (level, skills, items). This is for emergencies only. Continue?")&&confirm("Are you absolutely sure? This cannot be undone.")&&(e=structuredClone(g),d(),r())}),y("story-overlay","story-open","story-close"),y("info-overlay","info-open","info-close");const o=document.getElementById("levelup-overlay");document.getElementById("level-up-open").addEventListener("click",()=>{o.classList.add("visible")}),document.getElementById("levelup-cancel").addEventListener("click",()=>{o.classList.remove("visible")}),o.addEventListener("click",t=>{t.target===o&&o.classList.remove("visible")}),document.querySelectorAll(".level-up-choice").forEach(t=>{t.addEventListener("click",()=>{const l=t.dataset.choice,i=E.find(v=>v.id===l);if(!i)return;const c=e.level+1,u=c%5===0,p=u?`
+1 Action, +1 Skill Slot`:"";confirm(`Level up to ${c}?
${i.label}${p}`)&&(i.apply(e),e.level=c,e.levelUpHistory.push(l),u&&(e.actions+=1,e.maxSkillSlots+=1),d(),o.classList.remove("visible"),r())})});const n=document.getElementById("skillmenu-overlay");document.getElementById("skill-menu-open").addEventListener("click",()=>{n.classList.add("visible")}),document.getElementById("skillmenu-close").addEventListener("click",()=>{n.classList.remove("visible")}),n.addEventListener("click",t=>{t.target===n&&n.classList.remove("visible")}),document.querySelectorAll(".unlock-btn").forEach(t=>{t.addEventListener("click",()=>{const l=t.dataset.unlock,i=document.querySelector(`.unlock-input[data-skill-id="${l}"]`),c=i.value.trim(),u=I[l];c===u?(e.unlockedSkillIds.push(l),d(),r(),document.getElementById("skillmenu-overlay").classList.add("visible")):(i.classList.add("error"),i.value="",setTimeout(()=>i.classList.remove("error"),400))})}),document.querySelectorAll(".equip-btn").forEach(t=>{t.addEventListener("click",()=>{const l=t.dataset.equip;if(e.equippedSkillIds.length>=e.maxSkillSlots||e.equippedSkillIds.includes(l))return;e.equippedSkillIds.push(l);const i=f[l];i&&!(l in e.skillUsage)&&(e.skillUsage[l]=i.maxUses),d(),r(),document.getElementById("skillmenu-overlay").classList.add("visible")})}),document.querySelectorAll(".unequip-menu-btn").forEach(t=>{t.addEventListener("click",()=>{const l=t.dataset.menuUnequip;e.equippedSkillIds=e.equippedSkillIds.filter(i=>i!==l),d(),r(),document.getElementById("skillmenu-overlay").classList.add("visible")})}),typeof m<"u"&&h()}function y(s,a,o){const n=document.getElementById(s);document.getElementById(a).addEventListener("click",()=>{n.classList.add("visible")}),document.getElementById(o).addEventListener("click",()=>{n.classList.remove("visible")}),n.addEventListener("click",t=>{t.target===n&&n.classList.remove("visible")})}const $="hero-regen";function C(){try{const s=localStorage.getItem($);if(s)return JSON.parse(s)}catch{}return{secondsLeft:60}}function S(){localStorage.setItem($,JSON.stringify(m))}let m=C();function T(){if(e.inFight||e.currentHp<=0){h();return}if(m.secondsLeft--,m.secondsLeft<=0&&(m.secondsLeft=60,e.currentHp<e.maxHp)){const s=b(e.level);e.currentHp=Math.min(e.currentHp+s,e.maxHp),d(),S(),r();return}S(),h()}function h(){const s=document.getElementById("regen-timer");s&&(s.textContent=`(${m.secondsLeft}s)`)}setInterval(T,1e3);r();h();
