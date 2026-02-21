import"./modulepreload-polyfill-B5Qt9EMX.js";import{S as p}from"./skills-Bw_GagAK.js";const k={id:"lord-patten",name:"Lord Patten",level:1,maxHp:20,currentHp:20,actions:1,damage:{outer:1,middle:3,inner:5},maxSkillSlots:1,unlockedSkillIds:[],equippedSkillIds:[],skillUsage:{},levelUpHistory:[],items:[],story:{desc:"A noble warrior of unyielding resolve. Once exiled from the courts of the High Keep, he wanders the land seeking worthy foes — and a good cup of coffee.",onHit:`"Is that all you've got?"`,onStrike:'"For honor."',onDefeat:`"This isn't over. Not by a long shot."`}},b={blind_fury:"4812",repulsion:"7391",pushback:"2650",iron_ward:"8174",off_balance:"5923",heavy_hands:"3046",freeze:"6287",crude_sack:"1435",tremor:"9768",shake:"5102",vertigo:"8341",weighted_sack:"2079",advance:"6514",double_attack:"3897",fine_sack:"7243",snipers_gambit:"4086",war_cry:"1952",sturdy_arm:"8625",worn_grip:"3471",titans_grip:"7908",last_stand:"5236",fortress:"9014",intimidate:"2763",inspire:"6180"},g=[{id:"hp10",label:"+10 HP",apply(e){e.maxHp+=10,e.currentHp+=10}},{id:"inner5",label:"+5 Inner damage",apply(e){e.damage.inner+=5}},{id:"inner2_middle2",label:"+2 Inner, +2 Middle damage",apply(e){e.damage.inner+=2,e.damage.middle+=2}},{id:"all1",label:"+1 All zones damage",apply(e){e.damage.outer+=1,e.damage.middle+=1,e.damage.inner+=1}}],h="hero-state",y=document.querySelector("#app");function S(){try{const e=localStorage.getItem(h);if(e)return JSON.parse(e)}catch{}return structuredClone(k)}function d(){localStorage.setItem(h,JSON.stringify(s))}let s=S();function L(e){return e>.5?"#8b1a1a":e>.25?"#6a1515":"#4a0e0e"}function E(){const e=[{label:"Active — Enemy Debuffs",ids:[]},{label:"Active — Self Buffs",ids:[]},{label:"Passive",ids:[]}];for(const[n,t]of Object.entries(p))t.type==="A"?["advance","double_attack","fine_sack","snipers_gambit","war_cry"].includes(n)?e[1].ids.push(n):e[0].ids.push(n):e[2].ids.push(n);return e}function $(){const e=s.maxHp>0?s.currentHp/s.maxHp:0,n=Math.round(e*100),t=Array.from({length:s.maxSkillSlots},(l,i)=>{const a=s.equippedSkillIds[i];if(!a)return'<div class="skill-slot empty-slot"><span class="empty-slot-text">— Empty —</span></div>';const o=p[a];if(!o)return"";const r=o.type==="A",v=r?"active":"passive",m=s.skillUsage[a]??o.maxUses,u=r?`<button class="skill-use-btn" data-skill-id="${a}" ${m<=0?"disabled":""}>Use<br><span class="btn-uses">${m}/${o.maxUses}</span></button>`:'<span class="skill-counter">&infin;</span>';return`
      <div class="equipped-slot">
        <div class="skill-badge ${v}">${o.type}</div>
        <div class="skill-info">
          <div class="skill-name">${o.name}</div>
          <div class="skill-desc">${o.desc}</div>
          ${o.duration?`<div class="skill-duration">${o.duration} throw${o.duration!==1?"s":""}</div>`:""}
        </div>
        <div class="skill-uses">${u}</div>
        <button class="unequip-btn" data-unequip="${a}">&times;</button>
      </div>`}).join("");return`
    <div class="character-card">
      <div class="card-header">
        <div class="character-name">Lord Patten <span class="level-badge">Lv. ${s.level}</span></div>
        <div class="header-buttons">
          <button class="info-btn" id="story-open">S</button>
          <button class="info-btn" id="info-open">i</button>
        </div>
      </div>

      <div class="hp-section">
        <div class="hp-bar-wrapper">
          <div class="hp-label">HP</div>
          <div class="hp-bar-track">
            <div class="hp-bar-fill" style="width:${n}%;background:${L(e)}"></div>
            <div class="hp-bar-text">${s.currentHp} / ${s.maxHp}</div>
          </div>
        </div>
        <div class="hp-controls">
          <button class="hp-btn" data-dir="down">&#9660;</button>
          <button class="hp-btn" data-dir="up">&#9650;</button>
        </div>
      </div>

      <div class="actions-line">
        <span class="actions-label">Actions per round</span>
        <span class="actions-value">${s.actions}</span>
      </div>

      <div class="target-section">
        <svg class="target-svg" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="56" fill="#0f0d08" stroke="#27ae60" stroke-width="2" />
          <circle cx="60" cy="60" r="36" fill="#151008" stroke="#f39c12" stroke-width="2" />
          <circle cx="60" cy="60" r="16" fill="#1a120a" stroke="#e74c3c" stroke-width="2" />
        </svg>
        <div class="target-legend">
          <div class="target-row"><span class="target-dot outer"></span><span class="target-zone">Outer</span><span class="target-dmg">${s.damage.outer} dmg</span></div>
          <div class="target-row"><span class="target-dot middle"></span><span class="target-zone">Middle</span><span class="target-dmg">${s.damage.middle} dmg</span></div>
          <div class="target-row"><span class="target-dot inner"></span><span class="target-zone">Inner</span><span class="target-dmg">${s.damage.inner} dmg</span></div>
        </div>
      </div>

      <div class="skills-header">Equipped Skills</div>
      <div class="skills-list">${t}</div>

      <div class="hero-actions-row">
        <button class="skill-menu-btn" id="skill-menu-open">Skill Menu</button>
        <button class="level-up-btn" id="level-up-open">Level Up</button>
      </div>

      <div class="skills-header">Items</div>
      <div class="items-placeholder">Coming soon</div>

      <button class="reset-btn">Reset</button>
    </div>`}function I(){const e=k.story;return`
  <div class="info-overlay" id="story-overlay">
    <div class="info-panel">
      <button class="info-close-btn" id="story-close">&times;</button>
      <h2 class="info-title">${k.name}</h2>
      <div class="info-section">
        <p>${e.desc}</p>
      </div>
      <div class="info-section">
        <h3>When Hit</h3>
        <p class="catchphrase">${e.onHit}</p>
      </div>
      <div class="info-section">
        <h3>When Striking</h3>
        <p class="catchphrase">${e.onStrike}</p>
      </div>
      <div class="info-section">
        <h3>On Defeat</h3>
        <p class="catchphrase">${e.onDefeat}</p>
      </div>
    </div>
  </div>`}const q=`
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
  </div>`;function w(){const e=s.level+1,t=e%5===0?'<div class="level-up-bonus">Bonus: +1 Action, +1 Skill Slot</div>':"",l=g.map(i=>`<button class="level-up-choice" data-choice="${i.id}">${i.label}</button>`).join("");return`
  <div class="level-up-overlay" id="levelup-overlay">
    <div class="level-up-panel">
      <h2 class="level-up-title">Level Up to ${e}</h2>
      ${t}
      <div class="level-up-choices">${l}</div>
      <button class="level-up-cancel" id="levelup-cancel">Cancel</button>
    </div>
  </div>`}function H(){const e=E();let n=`
  <div class="skill-menu-overlay" id="skillmenu-overlay">
    <div class="skill-menu-panel">
      <button class="skill-menu-close" id="skillmenu-close">&times;</button>
      <h2 class="skill-menu-title">Skills</h2>`;for(const t of e)if(t.ids.length!==0){n+=`<div class="skill-group-header">${t.label}</div>`;for(const l of t.ids){const i=p[l],a=s.unlockedSkillIds.includes(l),o=s.equippedSkillIds.includes(l),r=s.equippedSkillIds.length<s.maxSkillSlots,v=a?"skill-row":"skill-row locked",m=i.type==="A"?"active":"passive";let u;a?o?u='<span class="equipped-badge">Equipped</span>':u=`<button class="equip-btn" data-equip="${l}" ${r?"":"disabled"}>Equip</button>`:u=`
          <div class="unlock-form">
            <input class="unlock-input" data-skill-id="${l}" type="text" inputmode="numeric" maxlength="4" placeholder="____">
            <button class="unlock-btn" data-unlock="${l}">Unlock</button>
          </div>`,n+=`
        <div class="${v}">
          <div class="skill-badge ${m}">${i.type}</div>
          <div class="skill-info">
            <div class="skill-name">${i.name}</div>
            <div class="skill-desc">${i.desc}</div>
          </div>
          <div class="skill-row-actions">${u}</div>
        </div>`}}return n+="</div></div>",n}function c(){y.innerHTML=$()+I()+q+w()+H(),document.querySelectorAll(".hp-btn").forEach(t=>{t.addEventListener("click",()=>{if(t.dataset.dir==="up"){if(s.currentHp>=s.maxHp||!confirm("Undo last hit?"))return;s.currentHp++}t.dataset.dir==="down"&&s.currentHp>0&&s.currentHp--,d(),c()})}),document.querySelectorAll(".skill-use-btn").forEach(t=>{t.addEventListener("click",()=>{const l=t.dataset.skillId,i=p[l];if(!i)return;const a=s.skillUsage[l]??i.maxUses;a>0&&(s.skillUsage[l]=a-1,d(),c())})}),document.querySelectorAll(".unequip-btn").forEach(t=>{t.addEventListener("click",()=>{const l=t.dataset.unequip;s.equippedSkillIds=s.equippedSkillIds.filter(i=>i!==l),d(),c()})}),document.querySelector(".reset-btn").addEventListener("click",()=>{confirm("Reset Lord Patten to level 1 defaults? All progress will be lost.")&&(s=structuredClone(k),d(),c())}),f("story-overlay","story-open","story-close"),f("info-overlay","info-open","info-close");const e=document.getElementById("levelup-overlay");document.getElementById("level-up-open").addEventListener("click",()=>{e.classList.add("visible")}),document.getElementById("levelup-cancel").addEventListener("click",()=>{e.classList.remove("visible")}),e.addEventListener("click",t=>{t.target===e&&e.classList.remove("visible")}),document.querySelectorAll(".level-up-choice").forEach(t=>{t.addEventListener("click",()=>{const l=t.dataset.choice,i=g.find(v=>v.id===l);if(!i)return;const a=s.level+1,o=a%5===0,r=o?`
+1 Action, +1 Skill Slot`:"";confirm(`Level up to ${a}?
${i.label}${r}`)&&(i.apply(s),s.level=a,s.levelUpHistory.push(l),o&&(s.actions+=1,s.maxSkillSlots+=1),d(),e.classList.remove("visible"),c())})});const n=document.getElementById("skillmenu-overlay");document.getElementById("skill-menu-open").addEventListener("click",()=>{n.classList.add("visible")}),document.getElementById("skillmenu-close").addEventListener("click",()=>{n.classList.remove("visible")}),n.addEventListener("click",t=>{t.target===n&&n.classList.remove("visible")}),document.querySelectorAll(".unlock-btn").forEach(t=>{t.addEventListener("click",()=>{const l=t.dataset.unlock,i=document.querySelector(`.unlock-input[data-skill-id="${l}"]`),a=i.value.trim(),o=b[l];a===o?(s.unlockedSkillIds.push(l),d(),c(),document.getElementById("skillmenu-overlay").classList.add("visible")):(i.classList.add("error"),i.value="",setTimeout(()=>i.classList.remove("error"),400))})}),document.querySelectorAll(".equip-btn").forEach(t=>{t.addEventListener("click",()=>{const l=t.dataset.equip;if(s.equippedSkillIds.length>=s.maxSkillSlots||s.equippedSkillIds.includes(l))return;s.equippedSkillIds.push(l);const i=p[l];i&&!(l in s.skillUsage)&&(s.skillUsage[l]=i.maxUses),d(),c(),document.getElementById("skillmenu-overlay").classList.add("visible")})})}function f(e,n,t){const l=document.getElementById(e);document.getElementById(n).addEventListener("click",()=>{l.classList.add("visible")}),document.getElementById(t).addEventListener("click",()=>{l.classList.remove("visible")}),l.addEventListener("click",i=>{i.target===l&&l.classList.remove("visible")})}c();
