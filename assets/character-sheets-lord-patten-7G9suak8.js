import"./modulepreload-polyfill-B5Qt9EMX.js";import{S as p}from"./skills-Bw_GagAK.js";const h={id:"lord-patten",name:"Lord Patten",level:1,maxHp:20,currentHp:20,actions:1,damage:{outer:1,middle:3,inner:5},maxSkillSlots:1,unlockedSkillIds:[],equippedSkillIds:[],skillUsage:{},levelUpHistory:[],items:[],story:{desc:"A noble warrior of unyielding resolve. Once exiled from the courts of the High Keep, he wanders the land seeking worthy foes — and a good cup of coffee.",onHit:`"Is that all you've got?"`,onStrike:'"For honor."',onDefeat:`"This isn't over. Not by a long shot."`}},y={blind_fury:"4812",repulsion:"7391",pushback:"2650",iron_ward:"8174",off_balance:"5923",heavy_hands:"3046",freeze:"6287",crude_sack:"1435",tremor:"9768",shake:"5102",vertigo:"8341",weighted_sack:"2079",advance:"6514",double_attack:"3897",fine_sack:"7243",snipers_gambit:"4086",war_cry:"1952",sturdy_arm:"8625",worn_grip:"3471",titans_grip:"7908",last_stand:"5236",fortress:"9014",intimidate:"2763",inspire:"6180"},g=[{id:"hp10",label:"+10 HP",apply(s){s.maxHp+=10,s.currentHp+=10}},{id:"inner5",label:"+5 Inner damage",apply(s){s.damage.inner+=5}},{id:"inner2_middle2",label:"+2 Inner, +2 Middle damage",apply(s){s.damage.inner+=2,s.damage.middle+=2}},{id:"all1",label:"+1 All zones damage",apply(s){s.damage.outer+=1,s.damage.middle+=1,s.damage.inner+=1}}],b="hero-state",S=document.querySelector("#app");function E(){try{const s=localStorage.getItem(b);if(s)return JSON.parse(s)}catch{}return structuredClone(h)}function d(){localStorage.setItem(b,JSON.stringify(e))}let e=E();function L(s){return s>.5?"#8b1a1a":s>.25?"#6a1515":"#4a0e0e"}function f(s){return 5+Math.floor(s/2)*5}function $(){const s=[{label:"Active — Enemy Debuffs",ids:[]},{label:"Active — Self Buffs",ids:[]},{label:"Passive",ids:[]}];for(const[n,l]of Object.entries(p))l.type==="A"?["advance","double_attack","fine_sack","snipers_gambit","war_cry"].includes(n)?s[1].ids.push(n):s[0].ids.push(n):s[2].ids.push(n);return s}function H(){const s=e.maxHp>0?e.currentHp/e.maxHp:0,n=Math.round(s*100),l=Array.from({length:e.maxSkillSlots},(t,i)=>{const o=e.equippedSkillIds[i];if(!o)return'<div class="skill-slot empty-slot"><span class="empty-slot-text">— Empty —</span></div>';const a=p[o];if(!a)return"";const r=a.type==="A",v=r?"active":"passive",m=e.skillUsage[o]??a.maxUses,u=r?`<button class="skill-use-btn" data-skill-id="${o}" ${m<=0?"disabled":""}>Use<br><span class="btn-uses">${m}/${a.maxUses}</span></button>`:'<span class="skill-counter">&infin;</span>';return`
      <div class="equipped-slot">
        <div class="skill-badge ${v}">${a.type}</div>
        <div class="skill-info">
          <div class="skill-name">${a.name}</div>
          <div class="skill-desc">${a.desc}</div>
          ${a.duration?`<div class="skill-duration">${a.duration} throw${a.duration!==1?"s":""}</div>`:""}
        </div>
        <div class="skill-uses">${u}</div>
        <button class="unequip-btn" data-unequip="${o}">&times;</button>
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
            <div class="hp-bar-fill" style="width:${n}%;background:${L(s)}"></div>
            <div class="hp-bar-text">${e.currentHp} / ${e.maxHp}</div>
          </div>
        </div>
        <div class="hp-controls">
          <button class="hp-btn" data-dir="down">&#9660;</button>
          <button class="hp-btn" data-dir="up">&#9650;</button>
        </div>
      </div>

      <div class="actions-line">
        <span class="actions-label">Actions per round</span>
        <span class="actions-value">${e.actions}</span>
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
      <div class="skills-list">${l}</div>

      <div class="hero-actions-row">
        <button class="skill-menu-btn" id="skill-menu-open">Skill Menu</button>
        <button class="level-up-btn" id="level-up-open">Level Up</button>
      </div>

      <div class="skills-header">Items</div>
      <div class="items-placeholder">Coming soon</div>

      <div class="hero-bottom-row">
        <button class="fight-ended-btn" id="fight-ended">Fight Ended</button>
        <button class="heal-btn" id="heal-btn" ${e.currentHp>=e.maxHp?"disabled":""}>Heal +${f(e.level)}</button>
      </div>
      <button class="reset-btn">Reset</button>
    </div>`}function I(){const s=h.story;return`
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
  </div>`}const w=`
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
  </div>`;function q(){const s=e.level+1,n=s%5===0,l=s%2===0,t=[];n&&t.push("+1 Action, +1 Skill Slot"),l&&t.push(`Heal increases to +${f(s)}`);const i=t.length>0?`<div class="level-up-bonus">${t.join("<br>")}</div>`:"",o=g.map(a=>`<button class="level-up-choice" data-choice="${a.id}">${a.label}</button>`).join("");return`
  <div class="level-up-overlay" id="levelup-overlay">
    <div class="level-up-panel">
      <h2 class="level-up-title">Level Up to ${s}</h2>
      ${i}
      <div class="level-up-choices">${o}</div>
      <button class="level-up-cancel" id="levelup-cancel">Cancel</button>
    </div>
  </div>`}function x(){const s=$();let n=`
  <div class="skill-menu-overlay" id="skillmenu-overlay">
    <div class="skill-menu-panel">
      <button class="skill-menu-close" id="skillmenu-close">&times;</button>
      <h2 class="skill-menu-title">Skills</h2>`;for(const l of s)if(l.ids.length!==0){n+=`<div class="skill-group-header">${l.label}</div>`;for(const t of l.ids){const i=p[t],o=e.unlockedSkillIds.includes(t),a=e.equippedSkillIds.includes(t),r=e.equippedSkillIds.length<e.maxSkillSlots,v=o?"skill-row":"skill-row locked",m=i.type==="A"?"active":"passive";let u;o?a?u='<span class="equipped-badge">Equipped</span>':u=`<button class="equip-btn" data-equip="${t}" ${r?"":"disabled"}>Equip</button>`:u=`
          <div class="unlock-form">
            <input class="unlock-input" data-skill-id="${t}" type="text" inputmode="numeric" maxlength="4" placeholder="____">
            <button class="unlock-btn" data-unlock="${t}">Unlock</button>
          </div>`,n+=`
        <div class="${v}">
          <div class="skill-badge ${m}">${i.type}</div>
          <div class="skill-info">
            <div class="skill-name">${i.name}</div>
            <div class="skill-desc">${i.desc}</div>
          </div>
          <div class="skill-row-actions">${u}</div>
        </div>`}}return n+="</div></div>",n}function c(){S.innerHTML=H()+I()+w+q()+x(),document.querySelectorAll(".hp-btn").forEach(l=>{l.addEventListener("click",()=>{if(l.dataset.dir==="up"){if(e.currentHp>=e.maxHp||!confirm("Undo last hit?"))return;e.currentHp++}l.dataset.dir==="down"&&e.currentHp>0&&e.currentHp--,d(),c()})}),document.querySelectorAll(".skill-use-btn").forEach(l=>{l.addEventListener("click",()=>{const t=l.dataset.skillId,i=p[t];if(!i)return;const o=e.skillUsage[t]??i.maxUses;o>0&&(e.skillUsage[t]=o-1,d(),c())})}),document.querySelectorAll(".unequip-btn").forEach(l=>{l.addEventListener("click",()=>{const t=l.dataset.unequip;e.equippedSkillIds=e.equippedSkillIds.filter(i=>i!==t),d(),c()})}),document.getElementById("fight-ended").addEventListener("click",()=>{confirm("End the current fight? Skill uses will be restored and HP reset to max.")&&(e.skillUsage={},e.currentHp=e.maxHp,d(),c())}),document.getElementById("heal-btn").addEventListener("click",()=>{if(e.currentHp>=e.maxHp)return;const l=f(e.level);confirm(`Heal ${l} HP? Only use this if you completed the required action.`)&&(e.currentHp=Math.min(e.currentHp+l,e.maxHp),d(),c())}),document.querySelector(".reset-btn").addEventListener("click",()=>{confirm("WARNING: This will erase ALL progress (level, skills, items). This is for emergencies only. Continue?")&&confirm("Are you absolutely sure? This cannot be undone.")&&(e=structuredClone(h),d(),c())}),k("story-overlay","story-open","story-close"),k("info-overlay","info-open","info-close");const s=document.getElementById("levelup-overlay");document.getElementById("level-up-open").addEventListener("click",()=>{s.classList.add("visible")}),document.getElementById("levelup-cancel").addEventListener("click",()=>{s.classList.remove("visible")}),s.addEventListener("click",l=>{l.target===s&&s.classList.remove("visible")}),document.querySelectorAll(".level-up-choice").forEach(l=>{l.addEventListener("click",()=>{const t=l.dataset.choice,i=g.find(v=>v.id===t);if(!i)return;const o=e.level+1,a=o%5===0,r=a?`
+1 Action, +1 Skill Slot`:"";confirm(`Level up to ${o}?
${i.label}${r}`)&&(i.apply(e),e.level=o,e.levelUpHistory.push(t),a&&(e.actions+=1,e.maxSkillSlots+=1),d(),s.classList.remove("visible"),c())})});const n=document.getElementById("skillmenu-overlay");document.getElementById("skill-menu-open").addEventListener("click",()=>{n.classList.add("visible")}),document.getElementById("skillmenu-close").addEventListener("click",()=>{n.classList.remove("visible")}),n.addEventListener("click",l=>{l.target===n&&n.classList.remove("visible")}),document.querySelectorAll(".unlock-btn").forEach(l=>{l.addEventListener("click",()=>{const t=l.dataset.unlock,i=document.querySelector(`.unlock-input[data-skill-id="${t}"]`),o=i.value.trim(),a=y[t];o===a?(e.unlockedSkillIds.push(t),d(),c(),document.getElementById("skillmenu-overlay").classList.add("visible")):(i.classList.add("error"),i.value="",setTimeout(()=>i.classList.remove("error"),400))})}),document.querySelectorAll(".equip-btn").forEach(l=>{l.addEventListener("click",()=>{const t=l.dataset.equip;if(e.equippedSkillIds.length>=e.maxSkillSlots||e.equippedSkillIds.includes(t))return;e.equippedSkillIds.push(t);const i=p[t];i&&!(t in e.skillUsage)&&(e.skillUsage[t]=i.maxUses),d(),c(),document.getElementById("skillmenu-overlay").classList.add("visible")})})}function k(s,n,l){const t=document.getElementById(s);document.getElementById(n).addEventListener("click",()=>{t.classList.add("visible")}),document.getElementById(l).addEventListener("click",()=>{t.classList.remove("visible")}),t.addEventListener("click",i=>{i.target===t&&t.classList.remove("visible")})}c();
