/* empty css              */import{S as b}from"./skills-8NvhyNFW.js";const S={id:"lennart",name:"Lennart",actions:2,maxHp:20,currentHp:20,skills:["blind_fury","pushback"],story:{desc:"Ein unerbittlicher Taktiker, der mit Gerissenheit statt roher Gewalt kämpft. Einst Späher in den nördlichen Marken, lernte er, dass der beste Wurf der ist, den der Gegner nie kommen sieht.",onHit:'„Das hast du gespürt, oder?"',onStrike:'„Berechnet."',onDefeat:'„Ich werde mich daran erinnern... und ich vergesse nicht."'}},y={id:"simon",name:"Simon",actions:1,maxHp:20,currentHp:20,skills:["blind_fury","advance"],story:{desc:"Ein ruhiger, aber tödlicher Scharfschütze aus den östlichen Dünen. Simon trifft selten, aber mit verheerender Präzision. Geduld ist seine größte Waffe.",onHit:'„Ist das alles, was du draufhast?"',onStrike:'„Ein Schuss. Ein Treffer."',onDefeat:'„Der Sand wird uns alle irgendwann begraben."'}},H={id:"hubi",name:"Hubi",actions:1,maxHp:20,currentHp:20,skills:["heavy_hands","fine_sack","advance"],story:{desc:"Ein einfallsreicher Tüftler, der Küchengeräte in Kriegswaffen verwandelte. Hubi gleicht fehlende Rohkraft mit cleverer Ausrüstung und kreativer Positionierung aus.",onHit:'„Das hinterlässt eine Delle..."',onStrike:'„Ofenhandschuhe retten dich jetzt auch nicht mehr!"',onDefeat:'„Zurück in die Werkstatt..."'}},w={id:"eva",name:"Eva",actions:1,maxHp:15,currentHp:15,skills:["double_attack_passive","war_cry"],story:{desc:"Eine schwangere Frau, die jahrelang Getränke für ihren Bruder und seine Freunde geschleppt hat. Nachdem ein tollkühner Held ihr einen Schwangerschaftstee brachte, entdeckte sie einen neuen Energieschub — und sie scheut sich nicht, ihn einzusetzen.",onHit:'„Ich trage für zwei — das heißt, ich schlage doppelt so hart zu."',onStrike:'„Der war vom Baby."',onDefeat:'„Gut. Aber nur, weil ich mich hinsetzen muss."'}},E={id:"elena",name:"Elena",actions:1,maxHp:20,currentHp:20,skills:["revision","silver_tongue"],story:{desc:"Eine Sprach- und Kunstgelehrte, die Kinder unterrichtet. Sie kennt Sascha seit er klein war — und behandelt ihn immer noch so. Bewaffnet mit Kreide und scharfem Verstand schreibt sie die Regeln nach Belieben um.",onHit:'„Interessante Technik. Dafür gibt’s eine Vier minus."',onStrike:'„Ich hab dir Besseres beigebracht, Sascha."',onDefeat:'„Gut gespielt. Das werte ich als Zusatzleistung."'}},D={id:"mirko",name:"Mirko",actions:1,maxHp:20,currentHp:20,skills:["gold_reserve","iron_ward"],story:{desc:"Saschas jüngerer Bruder, der sich Gold und Zahlen statt Schwertern zuwandte. Banker von Beruf, glaubt Mirko, dass jeder Kampf seinen Preis hat — und er ist immer bereit zu kassieren.",onHit:'„Das kommt auf deine Rechnung."',onStrike:'„Betrachte das als Investition."',onDefeat:'„Gut. Aber du schuldest mir noch Zinsen."'}},z={id:"nick",name:"Nick",actions:1,maxHp:20,currentHp:20,skills:["backstab","evasion"],story:{desc:"Der Jüngste der Brüder. Nick wählte die Schatten statt das Rampenlicht. Schnell, gerissen und unmöglich zu fassen — er schlägt zu, wo man es am wenigsten erwartet.",onHit:'„Du hast mich nicht mal kommen sehen."',onStrike:'„Zu langsam, Bruder."',onDefeat:'„Du gewinnst diese Runde. Ich bin zurück, bevor du es merkst."'}},A={id:"jess",name:"Jess",actions:1,maxHp:20,currentHp:20,skills:["double_attack_passive","advance"],story:{desc:"Saschas jüngere Schwester, eine im Wettkampf geschmiedete Amazone. Ihre Athletik ist legendär — was andere mit Technik erreichen, schafft sie mit purem physischen Talent.",onHit:'„So sieht Training aus."',onStrike:'„Nicht schnell genug, Bruder."',onDefeat:'„Gutes Match. Beim Rückkampf krieg ich dich."'}},L={id:"father",name:"Der Vater",actions:1,maxHp:20,currentHp:20,skills:["many_faces","thieves_gambit"],story:{desc:"Manche nennen ihn Kalle. Andere kennen ihn als Karl-Heinz. Das Oberhaupt der Diebesgilde trägt viele Namen — und keiner davon ist sein echter. Nicht mal seine Kinder kennen die Wahrheit.",onHit:'„Da musst du dir schon mehr einfallen lassen... wer auch immer du glaubst, dass ich bin."',onStrike:'„Eine Lektion von deinem alten Herrn."',onDefeat:'„Gut gemacht. Aber denk dran — du besiegst nie wirklich einen Mann, den du nicht benennen kannst."'}},I={id:"daniel",name:"Daniel",actions:1,maxHp:20,currentHp:20,skills:["fortress","last_stand"],story:{desc:"Ein treuer Freund und standhafter Gefolgsmann von Lord Patten. Daniels Hingabe ist unerschütterlich — wo andere fliehen, hält er stand. Seine Stärke wächst, je verzweifelter die Lage wird.",onHit:'„Ich stehe für meinen Lord."',onStrike:'„Für Lord Patten!"',onDefeat:'„Mein Lord… Ich habe versagt. Vorerst."'}},$={id:"lukas",name:"Lukas",actions:1,maxHp:20,currentHp:20,skills:["dark_deal","snipers_gambit"],story:{desc:"Ein mysteriöser Geschäftsmann, dessen wahre Talente im Verborgenen liegen. Lukas scheint immer ein Angebot zu haben, das man nicht ablehnen kann — und einen Trick, den man nicht kommen sieht.",onHit:'„Das ist nur Geschäft."',onStrike:'„Nichts Persönliches. Naja, vielleicht ein bisschen."',onDefeat:'„Du verhandelst hart. Das respektiere ich."'}},p="character-sheets-state";function x(e){return{...e,skills:e.skills.map(n=>{const s=b[n];return{...s,currentUses:s.maxUses}}).sort((n,s)=>(n.type==="A"?0:1)-(s.type==="A"?0:1))}}const o=[S,y,H,w,E,D,z,A,L,I,$].map(x),k=document.querySelector("#app"),u=k.dataset.character;if(!u)throw new Error("No data-character attribute on #app");const a=o.findIndex(e=>e.id===u);if(a===-1)throw new Error(`Unknown character: ${u}`);function B(){try{const e=localStorage.getItem(p);if(e)return JSON.parse(e)}catch{}return structuredClone(o)}function h(){localStorage.setItem(p,JSON.stringify(l))}let l=B();function _(e){return e>.5?"#8b1a1a":e>.25?"#6a1515":"#4a0e0e"}function G(e){const n=e.maxHp>0?e.currentHp/e.maxHp:0,s=Math.round(n*100),t=Array.from({length:3},(r,m)=>{const i=e.skills[m];if(!i)return'<div class="skill-slot empty-slot"><span class="empty-slot-text">— Leer —</span></div>';const v=i.type==="A",f=v?"active":"passive",g=v?`<button class="skill-use-btn" data-skill="${m}" ${i.currentUses<=0?"disabled":""}>Use<br><span class="btn-uses">${i.currentUses}/${i.maxUses}</span></button>`:'<span class="skill-counter">&infin;</span>';return`
      <div class="skill-slot">
        <div class="skill-badge ${f}">${i.type}</div>
        <div class="skill-info">
          <div class="skill-name">${i.name}</div>
          <div class="skill-desc">${i.desc}</div>
          ${i.duration?`<div class="skill-duration">${i.duration} ${i.duration!==1?"Würfe":"Wurf"}</div>`:""}
        </div>
        <div class="skill-uses">${g}</div>
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
            <div class="hp-bar-fill" style="width:${s}%;background:${_(n)}"></div>
            <div class="hp-bar-text">${e.currentHp} / ${e.maxHp}</div>
          </div>
        </div>
        <div class="hp-controls">
          <button class="hp-btn" data-dir="down">&#9660;</button>
          <button class="hp-btn" data-dir="up">&#9650;</button>
        </div>
      </div>

      <div class="actions-line">
        <span class="actions-label">Aktionen pro Runde</span>
        <span class="actions-value">${e.actions}</span>
      </div>

      <div class="target-section">
        <svg class="target-svg" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="56" fill="#0f0d08" stroke="#27ae60" stroke-width="2" />
          <circle cx="60" cy="60" r="36" fill="#151008" stroke="#f39c12" stroke-width="2" />
          <circle cx="60" cy="60" r="16" fill="#1a120a" stroke="#e74c3c" stroke-width="2" />
        </svg>
        <div class="target-legend">
          <div class="target-row"><span class="target-dot outer"></span><span class="target-zone">Außen</span><span class="target-dmg">1 dmg</span></div>
          <div class="target-row"><span class="target-dot middle"></span><span class="target-zone">Mitte</span><span class="target-dmg">3 dmg</span></div>
          <div class="target-row"><span class="target-dot inner"></span><span class="target-zone">Innen</span><span class="target-dmg">5 dmg</span></div>
        </div>
      </div>

      <div class="skills-header">Skills</div>
      <div class="skills-list">${t}</div>

      <button class="reset-btn">Reset</button>
    </div>`}function T(e){const n=e.story||{};return`
  <div class="info-overlay" id="story-overlay">
    <div class="info-panel">
      <button class="info-close-btn" id="story-close">&times;</button>
      <h2 class="info-title">${e.name}</h2>
      <div class="info-section">
        <p>${n.desc||""}</p>
      </div>
      <div class="info-section">
        <h3>Wenn getroffen</h3>
        <p class="catchphrase">${n.onHit||""}</p>
      </div>
      <div class="info-section">
        <h3>Beim Treffer</h3>
        <p class="catchphrase">${n.onStrike||""}</p>
      </div>
      <div class="info-section">
        <h3>Bei Niederlage</h3>
        <p class="catchphrase">${n.onDefeat||""}</p>
      </div>
    </div>
  </div>`}const N=`
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
          <li>Innenkreis: 20 cm Durchmesser — <strong>5 dmg</strong></li>
          <li>Mittelkreis: 50 cm Durchmesser — <strong>3 dmg</strong></li>
          <li>Außenkreis: 100 cm Durchmesser — <strong>1 dmg</strong></li>
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
  </div>`;function d(){const e=l[a],n=o[a];k.innerHTML=G(e)+T(n)+N,document.querySelectorAll(".hp-btn").forEach(t=>{t.addEventListener("click",()=>{const r=l[a];if(t.dataset.dir==="up"){if(r.currentHp>=r.maxHp||!confirm("Letzten Treffer rückgängig machen?"))return;r.currentHp++}t.dataset.dir==="down"&&r.currentHp>0&&r.currentHp--,h(),d()})}),document.querySelectorAll(".skill-use-btn").forEach(t=>{t.addEventListener("click",()=>{const r=l[a].skills[Number(t.dataset.skill)];r.currentUses>0&&(r.currentUses--,h(),d())})}),document.querySelector(".reset-btn").addEventListener("click",()=>{confirm(`${l[a].name} zurücksetzen?`)&&(l[a]=structuredClone(o[a]),h(),d())});const s=document.getElementById("info-overlay");document.getElementById("info-open").addEventListener("click",()=>{s.classList.add("visible")}),document.getElementById("info-close").addEventListener("click",()=>{s.classList.remove("visible")}),s.addEventListener("click",t=>{t.target===s&&s.classList.remove("visible")});const c=document.getElementById("story-overlay");document.getElementById("story-open").addEventListener("click",()=>{c.classList.add("visible")}),document.getElementById("story-close").addEventListener("click",()=>{c.classList.remove("visible")}),c.addEventListener("click",t=>{t.target===c&&c.classList.remove("visible")})}d();
