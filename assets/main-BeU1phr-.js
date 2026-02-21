/* empty css              */import{S as k}from"./skills-BCIO2OGx.js";const b={id:"lennart",name:"Lennart",actions:2,maxHp:20,currentHp:20,skills:["blind_fury","pushback"],story:{desc:"A relentless tactician who fights with cunning over brute force. Once a scout in the northern marches, he learned that the best throw is the one your enemy never sees coming.",onHit:`"You felt that one, didn't you?"`,onStrike:'"Calculated."',onDefeat:`"I'll remember this... and I don't forget."`}},w={id:"simon",name:"Simon",actions:1,maxHp:20,currentHp:20,skills:["blind_fury","advance"],story:{desc:"A quiet but deadly marksman from the eastern dunes. Simon strikes rarely but with devastating precision. Patience is his greatest weapon.",onHit:`"Is that all you've got?"`,onStrike:'"One shot. One kill."',onDefeat:'"The sand will bury us all eventually."'}},H={id:"hubi",name:"Hubi",actions:1,maxHp:20,currentHp:20,skills:["heavy_hands","fine_sack","advance"],story:{desc:"A resourceful tinkerer who turned kitchen tools into weapons of war. Hubi compensates for raw power with clever gear and creative positioning.",onHit:`"That's going to leave a mark..."`,onStrike:`"Oven mitts can't save you now!"`,onDefeat:'"Back to the workshop..."'}},S={id:"eva",name:"Eva",actions:1,maxHp:15,currentHp:15,skills:["double_attack_passive","war_cry"],story:{desc:"A pregnant woman who spent years fetching drinks for her brother and his friends. After a foolish hero brought her a pregnancy tea, she discovered a new surge of energy — and she’s not afraid to use it.",onHit:'"I’m carrying for two — that means I hit twice as hard."',onStrike:'"That one’s from the baby."',onDefeat:'"Fine. But only because I need to sit down."'}},E={id:"elena",name:"Elena",actions:1,maxHp:20,currentHp:20,skills:["revision","silver_tongue"],story:{desc:"A scholar of languages and art who teaches children for a living. She has known Sascha since he was a boy — and she still treats him like one. Armed with chalk and a sharp wit, she rewrites the rules as she goes.",onHit:'"Interesting technique. I’ll give you a C minus."',onStrike:'"I taught you better than this, Sascha."',onDefeat:'"Well played. I’ll mark this as extra credit."'}},m="character-sheets-state";function A(e){return{...e,skills:e.skills.map(s=>{const t=k[s];return{...t,currentUses:t.maxUses}}).sort((s,t)=>(s.type==="A"?0:1)-(t.type==="A"?0:1))}}const d=[b,w,H,S,E].map(A),f=document.querySelector("#app"),v=f.dataset.character;if(!v)throw new Error("No data-character attribute on #app");const r=d.findIndex(e=>e.id===v);if(r===-1)throw new Error(`Unknown character: ${v}`);function I(){try{const e=localStorage.getItem(m);if(e)return JSON.parse(e)}catch{}return structuredClone(d)}function u(){localStorage.setItem(m,JSON.stringify(l))}let l=I();function $(e){return e>.5?"#8b1a1a":e>.25?"#6a1515":"#4a0e0e"}function L(e){const s=e.maxHp>0?e.currentHp/e.maxHp:0,t=Math.round(s*100),n=Array.from({length:3},(i,h)=>{const a=e.skills[h];if(!a)return'<div class="skill-slot empty-slot"><span class="empty-slot-text">— Empty —</span></div>';const p=a.type==="A",g=p?"active":"passive",y=p?`<button class="skill-use-btn" data-skill="${h}" ${a.currentUses<=0?"disabled":""}>Use<br><span class="btn-uses">${a.currentUses}/${a.maxUses}</span></button>`:'<span class="skill-counter">&infin;</span>';return`
      <div class="skill-slot">
        <div class="skill-badge ${g}">${a.type}</div>
        <div class="skill-info">
          <div class="skill-name">${a.name}</div>
          <div class="skill-desc">${a.desc}</div>
          ${a.duration?`<div class="skill-duration">${a.duration} throw${a.duration!==1?"s":""}</div>`:""}
        </div>
        <div class="skill-uses">${y}</div>
      </div>`}).join("");return`
    <div class="character-card">
      <div class="card-header">
        <div class="character-name">${e.name}</div>
        <div class="header-buttons">
          <button class="info-btn" id="story-open">S</button>
          <button class="info-btn" id="info-open">i</button>
        </div>
      </div>

      <div class="hp-section">
        <div class="hp-bar-wrapper">
          <div class="hp-label">HP</div>
          <div class="hp-bar-track">
            <div class="hp-bar-fill" style="width:${t}%;background:${$(s)}"></div>
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
          <div class="target-row"><span class="target-dot outer"></span><span class="target-zone">Outer</span><span class="target-dmg">1 dmg</span></div>
          <div class="target-row"><span class="target-dot middle"></span><span class="target-zone">Middle</span><span class="target-dmg">3 dmg</span></div>
          <div class="target-row"><span class="target-dot inner"></span><span class="target-zone">Inner</span><span class="target-dmg">5 dmg</span></div>
        </div>
      </div>

      <div class="skills-header">Skills</div>
      <div class="skills-list">${n}</div>

      <button class="reset-btn">Reset</button>
    </div>`}function x(e){const s=e.story||{};return`
  <div class="info-overlay" id="story-overlay">
    <div class="info-panel">
      <button class="info-close-btn" id="story-close">&times;</button>
      <h2 class="info-title">${e.name}</h2>
      <div class="info-section">
        <p>${s.desc||""}</p>
      </div>
      <div class="info-section">
        <h3>When Hit</h3>
        <p class="catchphrase">${s.onHit||""}</p>
      </div>
      <div class="info-section">
        <h3>When Striking</h3>
        <p class="catchphrase">${s.onStrike||""}</p>
      </div>
      <div class="info-section">
        <h3>On Defeat</h3>
        <p class="catchphrase">${s.onDefeat||""}</p>
      </div>
    </div>
  </div>`}const O=`
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
          <li>Inner circle: 20 cm diameter — <strong>5 dmg</strong></li>
          <li>Middle circle: 50 cm diameter — <strong>3 dmg</strong></li>
          <li>Outer circle: 100 cm diameter — <strong>1 dmg</strong></li>
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
  </div>`;function c(){const e=l[r],s=d[r];f.innerHTML=L(e)+x(s)+O,document.querySelectorAll(".hp-btn").forEach(n=>{n.addEventListener("click",()=>{const i=l[r];if(n.dataset.dir==="up"){if(i.currentHp>=i.maxHp||!confirm("Undo last hit?"))return;i.currentHp++}n.dataset.dir==="down"&&i.currentHp>0&&i.currentHp--,u(),c()})}),document.querySelectorAll(".skill-use-btn").forEach(n=>{n.addEventListener("click",()=>{const i=l[r].skills[Number(n.dataset.skill)];i.currentUses>0&&(i.currentUses--,u(),c())})}),document.querySelector(".reset-btn").addEventListener("click",()=>{confirm(`Reset ${l[r].name} to defaults?`)&&(l[r]=structuredClone(d[r]),u(),c())});const t=document.getElementById("info-overlay");document.getElementById("info-open").addEventListener("click",()=>{t.classList.add("visible")}),document.getElementById("info-close").addEventListener("click",()=>{t.classList.remove("visible")}),t.addEventListener("click",n=>{n.target===t&&t.classList.remove("visible")});const o=document.getElementById("story-overlay");document.getElementById("story-open").addEventListener("click",()=>{o.classList.add("visible")}),document.getElementById("story-close").addEventListener("click",()=>{o.classList.remove("visible")}),o.addEventListener("click",n=>{n.target===o&&o.classList.remove("visible")})}c();
