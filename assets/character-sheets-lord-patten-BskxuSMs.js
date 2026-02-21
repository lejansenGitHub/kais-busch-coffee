import"./modulepreload-polyfill-B5Qt9EMX.js";import{S as b}from"./skills-C6ifZiiC.js";import{D as y,L as w,d as k,S as q,I as _,a as U}from"./hero-data-OHhT_rxa.js";const L="hero-state",A=document.querySelector("#app");function T(){try{const s=localStorage.getItem(L);if(s)return JSON.parse(s)}catch{}return structuredClone(y)}function u(){localStorage.setItem(L,JSON.stringify(e))}let e=T();function O(s){return s>.5?"#8b1a1a":s>.25?"#6a1515":"#4a0e0e"}function g(s){return 5+Math.floor(s/2)*5}function I(s){return 1+Math.floor(s/2)}function F(){const s=[{label:"Active — Enemy Debuffs",ids:[]},{label:"Active — Self Buffs",ids:[]},{label:"Passive",ids:[]}];for(const[a,o]of Object.entries(b))o.type==="A"?["advance","double_attack","fine_sack","snipers_gambit","war_cry"].includes(a)?s[1].ids.push(a):s[0].ids.push(a):s[2].ids.push(a);return s}const C={belt:"🦴",arm_protectors:"🛡",pelt:"🧊",small_bag:"👜",drinking_horn:"🥃",sword:"⚔"};function M(s){const a=k(e.level);switch(s){case"belt":return`Outer circle damage reduced by ${a}`;case"arm_protectors":return`Middle circle damage reduced by ${a}`;case"pelt":return`Inner circle damage reduced by ${a}`;case"small_bag":return"+1 skill slot";case"drinking_horn":return`Heal +${g(e.level)} once per fight`;case"sword":return"2 consecutive inner hits = 1 bonus throw";default:return""}}function P(){return Object.entries(U).map(([s,a])=>{const o=e.unlockedItemIds.includes(s),n=o?"item-row":"item-row locked",v=C[s]||"?";let c;o?s==="drinking_horn"&&e.inFight?c=`<button class="drinking-horn-btn" id="drinking-horn-use" ${e.drinkingHornUsed||e.currentHp>=e.maxHp?"disabled":""}>Drink +${g(e.level)}</button>`:s==="sword"&&e.inFight?e.swordBonusThrow?c=`
          <div class="bonus-throw-indicator">
            <span class="bonus-throw-text">Bonus Throw!</span>
            <button class="bonus-throw-use-btn" id="sword-use-bonus">Use</button>
          </div>`:c=`
          <div class="sword-tracker">
            <span class="sword-streak">${e.swordInnerStreak}/2</span>
            <button class="sword-hit-btn inner-hit" id="sword-inner-hit">Inner</button>
            <button class="sword-hit-btn" id="sword-miss">Miss</button>
          </div>`:c="":c=`
        <div class="unlock-form">
          <input class="unlock-input" data-item-id="${s}" type="text" inputmode="numeric" maxlength="4" placeholder="____">
          <button class="item-unlock-btn" data-item-unlock="${s}">Unlock</button>
        </div>`;const r=o?`<div class="item-effect">${M(s)}</div>`:"";return`
      <div class="${n}">
        <div class="item-icon">${v}</div>
        <div class="item-info">
          <div class="item-name">${a.name}</div>
          ${r}
        </div>
        <div class="item-actions">${c}</div>
      </div>`}).join("")}function R(){const s=e.maxHp>0?e.currentHp/e.maxHp:0,a=Math.round(s*100),o=Array.from({length:e.maxSkillSlots},(n,v)=>{const c=e.equippedSkillIds[v];if(!c)return'<div class="skill-slot empty-slot"><span class="empty-slot-text">— Empty —</span></div>';const r=b[c];if(!r)return"";const p=r.type==="A",t=p?"active":"passive",i=e.skillUsage[c]??r.maxUses,l=p?`<button class="skill-use-btn" data-skill-id="${c}" ${i<=0?"disabled":""}>Use<br><span class="btn-uses">${i}/${r.maxUses}</span></button>`:'<span class="skill-counter">&infin;</span>';return`
      <div class="equipped-slot">
        <div class="skill-badge ${t}">${r.type}</div>
        <div class="skill-info">
          <div class="skill-name">${r.name}</div>
          <div class="skill-desc">${r.desc}</div>
          ${r.duration?`<div class="skill-duration">${r.duration} throw${r.duration!==1?"s":""}</div>`:""}
        </div>
        <div class="skill-uses">${l}</div>
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
            <div class="hp-bar-fill" style="width:${a}%;background:${O(s)}"></div>
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
          <span class="stat-value${e.inFight||e.currentHp<=0?" regen-paused":""}">${I(e.level)} HP/min <span class="regen-timer" id="regen-timer"></span></span>
        </div>
      </div>

      <div class="target-section">
        <svg class="target-svg" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="56" fill="#0f0d08" stroke="#27ae60" stroke-width="2" />
          <circle cx="60" cy="60" r="36" fill="#151008" stroke="#f39c12" stroke-width="2" />
          <circle cx="60" cy="60" r="16" fill="#1a120a" stroke="#e74c3c" stroke-width="2" />
        </svg>
        <div class="target-legend">
          <div class="target-row"><span class="target-dot outer"></span><span class="target-zone">Outer</span><span class="target-dmg">${e.damage.outer} dmg${e.unlockedItemIds.includes("belt")?`<span class="dmg-reduction">(-${k(e.level)})</span>`:""}</span></div>
          <div class="target-row"><span class="target-dot middle"></span><span class="target-zone">Middle</span><span class="target-dmg">${e.damage.middle} dmg${e.unlockedItemIds.includes("arm_protectors")?`<span class="dmg-reduction">(-${k(e.level)})</span>`:""}</span></div>
          <div class="target-row"><span class="target-dot inner"></span><span class="target-zone">Inner</span><span class="target-dmg">${e.damage.inner} dmg${e.unlockedItemIds.includes("pelt")?`<span class="dmg-reduction">(-${k(e.level)})</span>`:""}</span></div>
        </div>
      </div>

      <div class="skills-header">Equipped Skills</div>
      <div class="skills-list">${o}</div>

      <div class="hero-actions-row">
        <button class="skill-menu-btn" id="skill-menu-open" ${e.inFight?"disabled":""}>Skill Menu</button>
        <button class="level-up-btn" id="level-up-open" ${e.inFight?"disabled":""}>Level Up</button>
      </div>

      <div class="skills-header">Items</div>
      <div class="items-list">${P()}</div>

      <div class="hero-bottom-row">
        ${e.inFight?'<button class="fight-ended-btn" id="fight-ended">End Fight</button>':'<button class="start-fight-btn" id="start-fight">Start Fight</button>'}
        <button class="heal-btn" id="heal-btn" ${e.currentHp>=e.maxHp||e.inFight?"disabled":""}>Heal +${g(e.level)}</button>
      </div>
      <button class="reset-btn">Reset</button>
    </div>`}function D(){const s=y.story;return`
  <div class="info-overlay" id="story-overlay">
    <div class="info-panel">
      <button class="info-close-btn" id="story-close">&times;</button>
      <h2 class="info-title">${y.name}</h2>
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
  </div>`}const N=`
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
  </div>`;function j(){const s=e.level+1,a=s%5===0,o=s%2===0,n=[];a&&n.push("+1 Action, +1 Skill Slot"),o&&n.push(`Heal increases to +${g(s)}`,`Regen increases to ${I(s)} HP/min`);const v=e.unlockedItemIds.some(p=>["belt","arm_protectors","pelt"].includes(p));a&&v&&n.push(`Damage reduction increases to -${k(s)}`);const c=n.length>0?`<div class="level-up-bonus">${n.join("<br>")}</div>`:"",r=w.map(p=>`<button class="level-up-choice" data-choice="${p.id}">${p.label}</button>`).join("");return`
  <div class="level-up-overlay" id="levelup-overlay">
    <div class="level-up-panel">
      <h2 class="level-up-title">Level Up to ${s}</h2>
      ${c}
      <div class="level-up-choices">${r}</div>
      <button class="level-up-cancel" id="levelup-cancel">Cancel</button>
    </div>
  </div>`}function K(){const s=F();let a=`
  <div class="skill-menu-overlay" id="skillmenu-overlay">
    <div class="skill-menu-panel">
      <button class="skill-menu-close" id="skillmenu-close">&times;</button>
      <h2 class="skill-menu-title">Skills</h2>`;for(const o of s)if(o.ids.length!==0){a+=`<div class="skill-group-header">${o.label}</div>`;for(const n of o.ids){const v=b[n],c=e.unlockedSkillIds.includes(n),r=e.equippedSkillIds.includes(n),p=e.equippedSkillIds.length<e.maxSkillSlots,t=c?"skill-row":"skill-row locked",i=v.type==="A"?"active":"passive";let l;c?r?l=`<button class="unequip-menu-btn" data-menu-unequip="${n}">Unequip</button>`:l=`<button class="equip-btn" data-equip="${n}" ${p?"":"disabled"}>Equip</button>`:l=`
          <div class="unlock-form">
            <input class="unlock-input" data-skill-id="${n}" type="text" inputmode="numeric" maxlength="4" placeholder="____">
            <button class="unlock-btn" data-unlock="${n}">Unlock</button>
          </div>`,a+=`
        <div class="${t}">
          <div class="skill-badge ${i}">${v.type}</div>
          <div class="skill-info">
            <div class="skill-name">${v.name}</div>
            <div class="skill-desc">${v.desc}</div>
          </div>
          <div class="skill-row-actions">${l}</div>
        </div>`}}return a+="</div></div>",a}function d(){A.innerHTML=R()+D()+N+j()+K(),document.querySelectorAll(".hp-btn").forEach(t=>{t.addEventListener("click",()=>{if(t.dataset.dir==="up"){if(e.currentHp>=e.maxHp||!confirm("Undo last hit?"))return;e.currentHp++}t.dataset.dir==="down"&&e.currentHp>0&&e.currentHp--,u(),d()})}),document.querySelectorAll(".skill-use-btn").forEach(t=>{t.addEventListener("click",()=>{const i=t.dataset.skillId,l=b[i];if(!l)return;const m=e.skillUsage[i]??l.maxUses;m>0&&(e.skillUsage[i]=m-1,u(),d())})});const s=document.getElementById("start-fight"),a=document.getElementById("fight-ended");s&&s.addEventListener("click",()=>{confirm("Start a fight? Regeneration will be paused.")&&(e.inFight=!0,u(),d())}),a&&a.addEventListener("click",()=>{confirm("End the current fight? Skill uses will be restored and regeneration will resume.")&&(e.skillUsage={},e.inFight=!1,e.drinkingHornUsed=!1,e.swordInnerStreak=0,e.swordBonusThrow=!1,u(),d())}),document.getElementById("heal-btn").addEventListener("click",()=>{if(e.currentHp>=e.maxHp||e.inFight)return;const t=g(e.level);confirm(`Heal ${t} HP? Only use this if you completed the required action.`)&&(e.currentHp=Math.min(e.currentHp+t,e.maxHp),u(),d())}),document.querySelector(".reset-btn").addEventListener("click",()=>{confirm("WARNING: This will erase ALL progress (level, skills, items). This is for emergencies only. Continue?")&&confirm("Are you absolutely sure? This cannot be undone.")&&(e=structuredClone(y),u(),d())}),E("story-overlay","story-open","story-close"),E("info-overlay","info-open","info-close");const o=document.getElementById("levelup-overlay");document.getElementById("level-up-open").addEventListener("click",()=>{o.classList.add("visible")}),document.getElementById("levelup-cancel").addEventListener("click",()=>{o.classList.remove("visible")}),o.addEventListener("click",t=>{t.target===o&&o.classList.remove("visible")}),document.querySelectorAll(".level-up-choice").forEach(t=>{t.addEventListener("click",()=>{const i=t.dataset.choice,l=w.find(x=>x.id===i);if(!l)return;const m=e.level+1,f=m%5===0,B=f?`
+1 Action, +1 Skill Slot`:"";confirm(`Level up to ${m}?
${l.label}${B}`)&&(l.apply(e),e.level=m,e.levelUpHistory.push(i),f&&(e.actions+=1,e.maxSkillSlots+=1),u(),o.classList.remove("visible"),d())})});const n=document.getElementById("skillmenu-overlay");document.getElementById("skill-menu-open").addEventListener("click",()=>{n.classList.add("visible")}),document.getElementById("skillmenu-close").addEventListener("click",()=>{n.classList.remove("visible")}),n.addEventListener("click",t=>{t.target===n&&n.classList.remove("visible")}),document.querySelectorAll(".unlock-btn").forEach(t=>{t.addEventListener("click",()=>{const i=t.dataset.unlock,l=document.querySelector(`.unlock-input[data-skill-id="${i}"]`),m=l.value.trim(),f=q[i];m===f?(e.unlockedSkillIds.push(i),u(),d(),document.getElementById("skillmenu-overlay").classList.add("visible")):(l.classList.add("error"),l.value="",setTimeout(()=>l.classList.remove("error"),400))})}),document.querySelectorAll(".equip-btn").forEach(t=>{t.addEventListener("click",()=>{const i=t.dataset.equip;if(e.equippedSkillIds.length>=e.maxSkillSlots||e.equippedSkillIds.includes(i))return;e.equippedSkillIds.push(i);const l=b[i];l&&!(i in e.skillUsage)&&(e.skillUsage[i]=l.maxUses),u(),d(),document.getElementById("skillmenu-overlay").classList.add("visible")})}),document.querySelectorAll(".unequip-menu-btn").forEach(t=>{t.addEventListener("click",()=>{const i=t.dataset.menuUnequip;e.equippedSkillIds=e.equippedSkillIds.filter(l=>l!==i),u(),d(),document.getElementById("skillmenu-overlay").classList.add("visible")})}),document.querySelectorAll(".item-unlock-btn").forEach(t=>{t.addEventListener("click",()=>{const i=t.dataset.itemUnlock,l=document.querySelector(`.unlock-input[data-item-id="${i}"]`),m=l.value.trim(),f=_[i];m===f?(e.unlockedItemIds.push(i),i==="small_bag"&&(e.maxSkillSlots+=1),u(),d()):(l.classList.add("error"),l.value="",setTimeout(()=>l.classList.remove("error"),400))})});const v=document.getElementById("drinking-horn-use");v&&v.addEventListener("click",()=>{if(e.drinkingHornUsed||e.currentHp>=e.maxHp)return;const t=g(e.level);e.currentHp=Math.min(e.currentHp+t,e.maxHp),e.drinkingHornUsed=!0,u(),d()});const c=document.getElementById("sword-inner-hit");c&&c.addEventListener("click",()=>{e.swordInnerStreak+=1,e.swordInnerStreak>=2&&(e.swordInnerStreak=0,e.swordBonusThrow=!0),u(),d()});const r=document.getElementById("sword-miss");r&&r.addEventListener("click",()=>{e.swordInnerStreak=0,u(),d()});const p=document.getElementById("sword-use-bonus");p&&p.addEventListener("click",()=>{e.swordBonusThrow=!1,u(),d()}),typeof h<"u"&&$()}function E(s,a,o){const n=document.getElementById(s);document.getElementById(a).addEventListener("click",()=>{n.classList.add("visible")}),document.getElementById(o).addEventListener("click",()=>{n.classList.remove("visible")}),n.addEventListener("click",v=>{v.target===n&&n.classList.remove("visible")})}const H="hero-regen";function z(){try{const s=localStorage.getItem(H);if(s)return JSON.parse(s)}catch{}return{secondsLeft:60}}function S(){localStorage.setItem(H,JSON.stringify(h))}let h=z();function J(){if(e.inFight||e.currentHp<=0){$();return}if(h.secondsLeft--,h.secondsLeft<=0&&(h.secondsLeft=60,e.currentHp<e.maxHp)){const s=I(e.level);e.currentHp=Math.min(e.currentHp+s,e.maxHp),u(),S(),d();return}S(),$()}function $(){const s=document.getElementById("regen-timer");s&&(s.textContent=`(${h.secondsLeft}s)`)}setInterval(J,1e3);d();$();
