import"./modulepreload-polyfill-B5Qt9EMX.js";import{S as m}from"./skills-Bw_GagAK.js";const h={id:"lord-patten",name:"Lord Patten",level:1,maxHp:20,currentHp:20,actions:1,damage:{outer:1,middle:3,inner:5},maxSkillSlots:1,unlockedSkillIds:[],equippedSkillIds:[],skillUsage:{},inFight:!1,levelUpHistory:[],items:[],story:{desc:"A noble warrior of unyielding resolve. Once exiled from the courts of the High Keep, he wanders the land seeking worthy foes — and a good cup of coffee.",onHit:`"Is that all you've got?"`,onStrike:'"For honor."',onDefeat:`"This isn't over. Not by a long shot."`}},$={blind_fury:"4812",repulsion:"7391",pushback:"2650",iron_ward:"8174",off_balance:"5923",heavy_hands:"3046",freeze:"6287",crude_sack:"1435",tremor:"9768",shake:"5102",vertigo:"8341",weighted_sack:"2079",advance:"6514",double_attack:"3897",fine_sack:"7243",snipers_gambit:"4086",war_cry:"1952",sturdy_arm:"8625",worn_grip:"3471",titans_grip:"7908",last_stand:"5236",fortress:"9014",intimidate:"2763",inspire:"6180"},y=[{id:"hp10",label:"+10 HP",apply(s){s.maxHp+=10,s.currentHp+=10}},{id:"inner5",label:"+5 Inner damage",apply(s){s.damage.inner+=5}},{id:"inner2_middle2",label:"+2 Inner, +2 Middle damage",apply(s){s.damage.inner+=2,s.damage.middle+=2}},{id:"all1",label:"+1 All zones damage",apply(s){s.damage.outer+=1,s.damage.middle+=1,s.damage.inner+=1}}],S="hero-state",L=document.querySelector("#app");function H(){try{const s=localStorage.getItem(S);if(s)return JSON.parse(s)}catch{}return structuredClone(h)}function r(){localStorage.setItem(S,JSON.stringify(e))}let e=H();function I(s){return s>.5?"#8b1a1a":s>.25?"#6a1515":"#4a0e0e"}function f(s){return 5+Math.floor(s/2)*5}function k(s){return 1+Math.floor(s/2)}function w(){const s=[{label:"Active — Enemy Debuffs",ids:[]},{label:"Active — Self Buffs",ids:[]},{label:"Passive",ids:[]}];for(const[a,o]of Object.entries(m))o.type==="A"?["advance","double_attack","fine_sack","snipers_gambit","war_cry"].includes(a)?s[1].ids.push(a):s[0].ids.push(a):s[2].ids.push(a);return s}function q(){const s=e.maxHp>0?e.currentHp/e.maxHp:0,a=Math.round(s*100),o=Array.from({length:e.maxSkillSlots},(n,t)=>{const l=e.equippedSkillIds[t];if(!l)return'<div class="skill-slot empty-slot"><span class="empty-slot-text">— Empty —</span></div>';const i=m[l];if(!i)return"";const c=i.type==="A",u=c?"active":"passive",p=e.skillUsage[l]??i.maxUses,v=c?`<button class="skill-use-btn" data-skill-id="${l}" ${p<=0?"disabled":""}>Use<br><span class="btn-uses">${p}/${i.maxUses}</span></button>`:'<span class="skill-counter">&infin;</span>';return`
      <div class="equipped-slot">
        <div class="skill-badge ${u}">${i.type}</div>
        <div class="skill-info">
          <div class="skill-name">${i.name}</div>
          <div class="skill-desc">${i.desc}</div>
          ${i.duration?`<div class="skill-duration">${i.duration} throw${i.duration!==1?"s":""}</div>`:""}
        </div>
        <div class="skill-uses">${v}</div>
        <button class="unequip-btn" data-unequip="${l}">&times;</button>
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
            <div class="hp-bar-fill" style="width:${a}%;background:${I(s)}"></div>
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
          <span class="stat-label">Regen${e.inFight?" (paused)":""}</span>
          <span class="stat-value${e.inFight?" regen-paused":""}">${k(e.level)} HP/min <span class="regen-timer" id="regen-timer"></span></span>
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
        <button class="heal-btn" id="heal-btn" ${e.currentHp>=e.maxHp||e.inFight?"disabled":""}>Heal +${f(e.level)}</button>
      </div>
      <button class="reset-btn">Reset</button>
    </div>`}function x(){const s=h.story;return`
  <div class="info-overlay" id="story-overlay">
    <div class="info-panel">
      <button class="info-close-btn" id="story-close">&times;</button>
      <h2 class="info-title">${h.name}</h2>
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
  </div>`}const _=`
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
  </div>`;function A(){const s=e.level+1,a=s%5===0,o=s%2===0,n=[];a&&n.push("+1 Action, +1 Skill Slot"),o&&n.push(`Heal increases to +${f(s)}`,`Regen increases to ${k(s)} HP/min`);const t=n.length>0?`<div class="level-up-bonus">${n.join("<br>")}</div>`:"",l=y.map(i=>`<button class="level-up-choice" data-choice="${i.id}">${i.label}</button>`).join("");return`
  <div class="level-up-overlay" id="levelup-overlay">
    <div class="level-up-panel">
      <h2 class="level-up-title">Level Up to ${s}</h2>
      ${t}
      <div class="level-up-choices">${l}</div>
      <button class="level-up-cancel" id="levelup-cancel">Cancel</button>
    </div>
  </div>`}function B(){const s=w();let a=`
  <div class="skill-menu-overlay" id="skillmenu-overlay">
    <div class="skill-menu-panel">
      <button class="skill-menu-close" id="skillmenu-close">&times;</button>
      <h2 class="skill-menu-title">Skills</h2>`;for(const o of s)if(o.ids.length!==0){a+=`<div class="skill-group-header">${o.label}</div>`;for(const n of o.ids){const t=m[n],l=e.unlockedSkillIds.includes(n),i=e.equippedSkillIds.includes(n),c=e.equippedSkillIds.length<e.maxSkillSlots,u=l?"skill-row":"skill-row locked",p=t.type==="A"?"active":"passive";let v;l?i?v='<span class="equipped-badge">Equipped</span>':v=`<button class="equip-btn" data-equip="${n}" ${c?"":"disabled"}>Equip</button>`:v=`
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
        </div>`}}return a+="</div></div>",a}function d(){L.innerHTML=q()+x()+_+A()+B(),document.querySelectorAll(".hp-btn").forEach(t=>{t.addEventListener("click",()=>{if(t.dataset.dir==="up"){if(e.currentHp>=e.maxHp||!confirm("Undo last hit?"))return;e.currentHp++}t.dataset.dir==="down"&&e.currentHp>0&&e.currentHp--,r(),d()})}),document.querySelectorAll(".skill-use-btn").forEach(t=>{t.addEventListener("click",()=>{const l=t.dataset.skillId,i=m[l];if(!i)return;const c=e.skillUsage[l]??i.maxUses;c>0&&(e.skillUsage[l]=c-1,r(),d())})}),document.querySelectorAll(".unequip-btn").forEach(t=>{t.addEventListener("click",()=>{const l=t.dataset.unequip;e.equippedSkillIds=e.equippedSkillIds.filter(i=>i!==l),r(),d()})});const s=document.getElementById("start-fight"),a=document.getElementById("fight-ended");s&&s.addEventListener("click",()=>{confirm("Start a fight? Regeneration will be paused.")&&(e.inFight=!0,r(),d())}),a&&a.addEventListener("click",()=>{confirm("End the current fight? Skill uses will be restored and regeneration will resume.")&&(e.skillUsage={},e.inFight=!1,r(),d())}),document.getElementById("heal-btn").addEventListener("click",()=>{if(e.currentHp>=e.maxHp||e.inFight)return;const t=f(e.level);confirm(`Heal ${t} HP? Only use this if you completed the required action.`)&&(e.currentHp=Math.min(e.currentHp+t,e.maxHp),r(),d())}),document.querySelector(".reset-btn").addEventListener("click",()=>{confirm("WARNING: This will erase ALL progress (level, skills, items). This is for emergencies only. Continue?")&&confirm("Are you absolutely sure? This cannot be undone.")&&(e=structuredClone(h),r(),d())}),b("story-overlay","story-open","story-close"),b("info-overlay","info-open","info-close");const o=document.getElementById("levelup-overlay");document.getElementById("level-up-open").addEventListener("click",()=>{o.classList.add("visible")}),document.getElementById("levelup-cancel").addEventListener("click",()=>{o.classList.remove("visible")}),o.addEventListener("click",t=>{t.target===o&&o.classList.remove("visible")}),document.querySelectorAll(".level-up-choice").forEach(t=>{t.addEventListener("click",()=>{const l=t.dataset.choice,i=y.find(v=>v.id===l);if(!i)return;const c=e.level+1,u=c%5===0,p=u?`
+1 Action, +1 Skill Slot`:"";confirm(`Level up to ${c}?
${i.label}${p}`)&&(i.apply(e),e.level=c,e.levelUpHistory.push(l),u&&(e.actions+=1,e.maxSkillSlots+=1),r(),o.classList.remove("visible"),d())})});const n=document.getElementById("skillmenu-overlay");document.getElementById("skill-menu-open").addEventListener("click",()=>{n.classList.add("visible")}),document.getElementById("skillmenu-close").addEventListener("click",()=>{n.classList.remove("visible")}),n.addEventListener("click",t=>{t.target===n&&n.classList.remove("visible")}),document.querySelectorAll(".unlock-btn").forEach(t=>{t.addEventListener("click",()=>{const l=t.dataset.unlock,i=document.querySelector(`.unlock-input[data-skill-id="${l}"]`),c=i.value.trim(),u=$[l];c===u?(e.unlockedSkillIds.push(l),r(),d(),document.getElementById("skillmenu-overlay").classList.add("visible")):(i.classList.add("error"),i.value="",setTimeout(()=>i.classList.remove("error"),400))})}),document.querySelectorAll(".equip-btn").forEach(t=>{t.addEventListener("click",()=>{const l=t.dataset.equip;if(e.equippedSkillIds.length>=e.maxSkillSlots||e.equippedSkillIds.includes(l))return;e.equippedSkillIds.push(l);const i=m[l];i&&!(l in e.skillUsage)&&(e.skillUsage[l]=i.maxUses),r(),d(),document.getElementById("skillmenu-overlay").classList.add("visible")})})}function b(s,a,o){const n=document.getElementById(s);document.getElementById(a).addEventListener("click",()=>{n.classList.add("visible")}),document.getElementById(o).addEventListener("click",()=>{n.classList.remove("visible")}),n.addEventListener("click",t=>{t.target===n&&n.classList.remove("visible")})}let g=60;function U(){if(g--,g<=0&&(g=60,!e.inFight&&e.currentHp<e.maxHp)){const s=k(e.level);e.currentHp=Math.min(e.currentHp+s,e.maxHp),r(),d();return}E()}function E(){const s=document.getElementById("regen-timer");s&&(s.textContent=`(${g}s)`)}setInterval(U,1e3);d();E();
