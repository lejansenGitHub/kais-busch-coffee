/* empty css              *//* empty css                    */import{S as v,a as H,I as E}from"./hero-data-CpR-MRyC.js";const D={id:"hubi",name:"Hubi",level:1,actions:1,maxHp:15,currentHp:15,damage:{outer:1,middle:2,inner:4},skills:["advance"],story:{desc:'Hubi ist der Erste, den Lord Patten in dieser fremden Welt antrifft. Er sitzt verwirrt auf einer Bank, dreht eine seltsame Flöte in den Händen und murmelt vor sich hin. Als Lord Patten sich nähert, springt er auf: „Halt! Wer bist du? Komm mir nicht zu nahe!" Ein kurzer Kampf — eher ein Handgemenge — und Hubis Kopf wird wieder klar. „Lord Patten? Oh Mann, ich dachte du wärst ein Räuber! Komm, ich geh mit dir — aber Vorsicht, hier stimmt was nicht."',onHit:'„Hey, nicht so fest!"',onStrike:'„Nimm das!"',onDefeat:'Hubi schüttelt den Kopf, als würde er aus einem Traum erwachen. Dabei fällt ihm die Flöte aus der Tasche und klirrt auf das Kopfsteinpflaster. „Die hatte ich die ganze Zeit bei mir... keine Ahnung woher."'},rewards:[{skill:"advance"},{quest_item:"Flöte"}]},L={id:"hubi-boss",name:"Hubi (Verzaubert)",level:7,actions:2,maxHp:45,currentHp:45,damage:{outer:3,middle:10,inner:17},skills:["heavy_hands","war_cry","fine_sack"],story:{desc:"Die Musik der Flöte hat die Barriere am Schelmenturm durchbrochen — doch sie hat auch Hubi erfasst. Seine Augen sind glasig, sein Blick leer. Die Melodie hallt in seinem Kopf wider und hat seinen Geist völlig übernommen. Er erkennt niemanden mehr — nicht Lord Patten, nicht seine Gefährten. Er steht vor dem Turm wie ein Wächter, der nur einem Befehl gehorcht: Niemand kommt vorbei.",onHit:'„Die Musik... sie hört nicht auf..."',onStrike:'„Ihr... sollt... nicht... durch!"',onDefeat:'Die Melodie verblasst. Hubi sackt auf die Knie, fasst sich an den Kopf. „Was... was ist passiert? Warum tut mir alles weh?" Er blinzelt, erkennt Lord Patten — und sein Blick wird wieder klar.'},reward:{skill:"heavy_hands"}},z={id:"hubi-endboss",name:"Hubi (Endgegner)",level:11,actions:2,maxHp:60,currentHp:60,damage:{outer:4,middle:11,inner:19},skills:["blind_fury","war_cry","titans_grip"],story:{desc:'Die dunkle Melodie war nie wirklich verschwunden — sie hat nur gewartet. Am Ende der Altstadt steht Hubi erneut, doch diesmal ist sein Blick nicht leer, sondern brennend. Die Magie hat ihn nicht nur übernommen — sie hat ihn stärker gemacht. Seine Stimme hallt durch die Gasse: „Diesmal lasse ich euch nicht durch. Diesmal bleibt ihr hier — alle." Lord Patten erkennt: Das hier ist der letzte Kampf.',onHit:'„Ihr könnt mich nicht aufhalten. Nicht nochmal."',onStrike:'„Spürt ihr das? Das ist das Ende."',onDefeat:'Die dunkle Energie entweicht in einem letzten Aufschrei. Hubi bricht zusammen, atmet schwer. Als er aufblickt, sind seine Augen wieder klar — klarer als je zuvor. „Es ist vorbei. Diesmal wirklich. Danke, Mylord."'},reward:{item:"pelt"}},_={id:"simon",name:"Simon",level:1,actions:1,maxHp:20,currentHp:20,damage:{outer:1,middle:3,inner:5},skills:["blind_fury","advance"],story:{desc:"Ein ruhiger, aber tödlicher Scharfschütze aus den östlichen Dünen. Simon trifft selten, aber mit verheerender Präzision. Geduld ist seine größte Waffe.",onHit:'„Ist das alles, was du draufhast?"',onStrike:'„Ein Schuss. Ein Treffer."',onDefeat:'„Der Sand wird uns alle irgendwann begraben."'},reward:{skill:"blind_fury"}},I={id:"eva",name:"Eva",level:3,actions:1,maxHp:22,currentHp:22,damage:{outer:1,middle:2,inner:4},skills:["double_attack_passive","war_cry"],story:{desc:"Eine schwangere Frau, die jahrelang Getränke für ihren Bruder und seine Freunde geschleppt hat. Nachdem ein tollkühner Held ihr einen Schwangerschaftstee brachte, entdeckte sie einen neuen Energieschub — und sie scheut sich nicht, ihn einzusetzen.",onHit:'„Ich trage für zwei — das heißt, ich schlage doppelt so hart zu."',onStrike:'„Der war vom Baby."',onDefeat:'„Gut. Aber nur, weil ich mich hinsetzen muss."'},reward:{skill:"war_cry"}},A={id:"elena",name:"Elena",level:5,actions:1,maxHp:35,currentHp:35,damage:{outer:3,middle:8,inner:14},skills:["revision","silver_tongue"],story:{desc:"Eine Sprach- und Kunstgelehrte, die Kinder unterrichtet. Sie kennt Sascha seit er klein war — und behandelt ihn immer noch so. Bewaffnet mit Kreide und scharfem Verstand schreibt sie die Regeln nach Belieben um.",onHit:'„Interessante Technik. Dafür gibt’s eine Vier minus."',onStrike:'„Ich hab dir Besseres beigebracht, Sascha."',onDefeat:'„Gut gespielt. Das werte ich als Zusatzleistung."'},reward:{skill:"silver_tongue"}},$={id:"mirko",name:"Mirko",level:7,actions:1,maxHp:40,currentHp:40,damage:{outer:3,middle:10,inner:17},skills:["gold_reserve","iron_ward"],story:{desc:'Mirko wurde durch die Teleportation hierher geschleudert und ist völlig durcheinander — der jüngste der Brüder klammert sich panisch an seinen Geldbeutel und traut keiner Menschenseele. Wenn Lord Patten ihn anspricht, faucht Mirko: „Finger weg von meinem Gold! Keine Ahnung was hier passiert ist, aber du kriegst keinen Heller von mir!" Erst nach einem ordentlichen Kampf wird sein Kopf wieder klar: „Lord Patten? Oh nein — hab ich etwa auf meinen eigenen Lord eingedroschen? Das ist… peinlich. Verbuchen wir das als Betriebsunfall. Ich bin wieder an Eurer Seite."',onHit:'„Das kommt auf deine Rechnung."',onStrike:'„Betrachte das als Investition."',onDefeat:'„Gut. Aber du schuldest mir noch Zinsen."'},reward:{skill:"gold_reserve"}},K={id:"nick",name:"Nick",level:9,actions:1,maxHp:48,currentHp:48,damage:{outer:4,middle:12,inner:20},skills:["backstab","evasion"],story:{desc:'Nick wurde durch die Teleportation in diese Welt gerissen und ist völlig verwirrt — sein Instinkt schreit Gefahr und er versteckt sich in den Schatten. Wenn Lord Patten sich nähert, zischt Nick aus dem Dunkel: „Keinen Schritt weiter! Ich weiß nicht wer du bist, aber ich hab dich schon dreimal umkreist, bevor du mich bemerkt hast." Erst nach einem Duell kommt er wieder zu Sinnen: „Mylord? Verdammt — Ihr hättet gleich sagen können, dass Ihr es seid. Naja, wenigstens weiß ich jetzt, dass Ihr noch draufhabt. Ich bin wieder Euer Schatten."',onHit:'„Du hast mich nicht mal kommen sehen."',onStrike:'„Zu langsam, Bruder."',onDefeat:'„Du gewinnst diese Runde. Ich bin zurück, bevor du es merkst."'},rewards:[{item:"arm_protectors"},{skill:"off_balance"}]},M={id:"jess",name:"Jess",level:4,actions:1,maxHp:28,currentHp:28,damage:{outer:1,middle:2,inner:5},skills:["double_attack_passive","advance"],story:{desc:'Jess wurde durch die Teleportation in diese Welt gerissen und ist völlig aufgedreht — die Verwirrung hat ihren Kampfinstinkt auf Hochtouren gebracht. Wenn Lord Patten sich nähert, geht sie sofort in Kampfstellung: „Ha! Endlich jemand, an dem ich mich abreagieren kann! Keine Ahnung wo ich bin, aber du siehst aus wie eine gute Aufwärmrunde!" Erst nach einem sportlichen Duell legt sich der Nebel: „Oh! Lord Patten! Das war… ein ziemlich guter Kampf, oder? Sorry fürs Draufhauen. Aber hey, jetzt bin ich aufgewärmt — lass uns die anderen finden!"',onHit:'„So sieht Training aus."',onStrike:'„Nicht schnell genug, Bruder."',onDefeat:'„Gutes Match. Beim Rückkampf krieg ich dich."'},reward:{skill:"double_attack"}},P={id:"father",name:"Der Vater",level:8,actions:1,maxHp:45,currentHp:45,damage:{outer:4,middle:11,inner:18},skills:["many_faces","thieves_gambit"],story:{desc:'Der Vater wurde durch die Teleportation hierher geschleudert und ist gefährlich desorientiert — er wechselt zwischen seinen vielen Identitäten und weiß nicht mehr, wer er eigentlich ist. Wenn Lord Patten auf ihn zugeht, mustert er ihn misstrauisch: „Ich kenne dich nicht. Oder doch? Nein. Geh weiter, Fremder, bevor ich vergesse, höflich zu sein." Erst nach einem harten Kampf klart sein Geist auf: „Ah… Lord Patten. Ja, jetzt erinnere ich mich. Oder zumindest der Teil von mir, der sich erinnern will. Gehen wir — bevor ich es mir anders überlege."',onHit:'„Da musst du dir schon mehr einfallen lassen... wer auch immer du glaubst, dass ich bin."',onStrike:'„Eine Lektion von deinem alten Herrn."',onDefeat:'„Gut gemacht. Aber denk dran — du besiegst nie wirklich einen Mann, den du nicht benennen kannst."'},rewards:[{item:"pelt"},{skill:"tremor"}]},x={id:"daniel",name:"Daniel",level:6,actions:1,maxHp:38,currentHp:38,damage:{outer:3,middle:9,inner:15},skills:["fortress","last_stand"],story:{desc:'Daniel wurde durch die Teleportation hierher gerissen und ist völlig verwirrt — er erkennt Lord Patten nicht und hält ihn für einen Feind. Wenn Lord Patten ihn anspricht, knurrt Daniel: „Wer bist du? Bleib mir vom Leib! Ich weiß nicht wo ich bin, aber ich weiche keinen Schritt zurück!" Erst nach einer ordentlichen Tracht Prügel kommt er zur Besinnung: „Mylord…? Mylord! Vergebt mir — ich wusste nicht, was ich tat. Mein Schwert gehört wieder Euch, wie eh und je."',onHit:'„Ich stehe für meinen Lord."',onStrike:'„Für Lord Patten!"',onDefeat:'„Mein Lord… Ich habe versagt. Vorerst."'},reward:{skill:"last_stand"}},B={id:"lukas",name:"Lukas",level:10,actions:1,maxHp:55,currentHp:55,damage:{outer:6,middle:17,inner:29},skills:["dark_deal","snipers_gambit"],story:{desc:'Lukas wurde durch die Teleportation in diese Welt gerissen und ist gefährlich desorientiert — sein sonst so scharfer Verstand ist vernebelt und er vertraut niemandem. Wenn Lord Patten auf ihn zugeht, zischt Lukas: „Noch einen Schritt und wir haben ein Problem. Ich weiß nicht was hier läuft, aber du siehst nicht aus wie jemand, dem ich vertrauen sollte." Erst nach einem harten Duell lichtet sich der Nebel: „Lord Patten. Na klar. Hätte ich mir denken können — nur Ihr seid hartnäckig genug, mich zu schlagen. Gut, ich bin dabei. Aber das hier kostet Euch noch was."',onHit:'„Das ist nur Geschäft."',onStrike:'„Nichts Persönliches. Naja, vielleicht ein bisschen."',onDefeat:'„Du verhandelst hart. Das respektiere ich."'},reward:{skill:"snipers_gambit"}},N={id:"kai",name:"Kai",level:6,actions:1,maxHp:34,currentHp:34,damage:{outer:3,middle:8,inner:13},skills:["respect_the_cards","trick_shot"],story:{desc:"Ein Showman durch und durch. Kai trägt sein Magic-Deck wie andere ein Schwert — immer griffbereit, immer bereit zu beeindrucken. Er kennt den Wert jeder Karte und erwartet, dass du das auch tust.",onHit:"„Hey, Vorsicht! Da liegen Karten!“",onStrike:"„Das war ein Trick Shot. Hat er gesessen?“",onDefeat:"„Gutes Spiel. Aber im Kartenspielen gewinnst du nie.“"}},G={id:"katta",name:"Katta",level:5,actions:1,maxHp:30,currentHp:30,damage:{outer:2,middle:8,inner:13},skills:["sugar_rush","high_standards"],story:{desc:"Eine Meisterin des Genusses mit unfehlbarem Gaumen. Katta kämpft wie sie kocht — elegant, präzise und mit einer Prise Arroganz. Sie akzeptiert nur Perfektion.",onHit:"„Nicht schlecht. Aber da fehlt die Würze.“",onStrike:"„Perfekt abgeschmeckt.“",onDefeat:"„Gut. Du hast Geschmack. Das muss ich anerkennen.“"}},f="character-sheets-state",b={weak:{mult:.6,label:"Weak"},easy:{mult:.8,label:"Easy"},normal:{mult:1,label:"Normal"},hard:{mult:1.2,label:"Hard"},strong:{mult:1.4,label:"Strong"}};function T(e){const r={...e,difficulty:"normal",skills:e.skills.map(n=>{const i=v[n];return{...i,currentUses:i.maxUses}}).sort((n,i)=>(n.type==="A"?0:1)-(i.type==="A"?0:1))};function t(n){if(n.skill)return{type:"skill",name:v[n.skill].name,code:H[n.skill]};if(n.item)return{type:"item",name:n.item.replace(/_/g," ").replace(/\b\w/g,i=>i.toUpperCase()),code:E[n.item]};if(n.quest_item)return{type:"quest_item",name:n.quest_item}}return e.rewards?r.rewards=e.rewards.map(t):e.reward&&(r.rewards=[t(e.reward)]),r}const d=[D,L,z,_,I,A,$,K,M,P,x,B,N,G].map(T),w=document.querySelector("#app"),g=w.dataset.character;if(!g)throw new Error("No data-character attribute on #app");const l=d.findIndex(e=>e.id===g);if(l===-1)throw new Error(`Unknown character: ${g}`);const m=2,k="character-sheets-version";function W(){try{if(Number(localStorage.getItem(k)||0)<m)return localStorage.removeItem(f),localStorage.setItem(k,m),structuredClone(d);const r=localStorage.getItem(f);if(r){const t=JSON.parse(r);for(let n=t.length;n<d.length;n++)t.push(structuredClone(d[n]));for(let n=0;n<t.length;n++)d[n]&&t[n].difficulty===void 0&&(t[n].difficulty="normal");return t}}catch{}return localStorage.setItem(k,m),structuredClone(d)}function h(){localStorage.setItem(f,JSON.stringify(c))}let c=W();function C(e,r){const t=d[e],{mult:n}=b[r],i=c[e];i.maxHp=Math.round(t.maxHp*n),i.currentHp=i.maxHp,i.damage={outer:Math.round(t.damage.outer*n),middle:Math.round(t.damage.middle*n),inner:Math.round(t.damage.inner*n)},i.skills.forEach((s,o)=>{s.currentUses=t.skills[o].maxUses}),i.difficulty=r,h(),u()}function O(e){return e>.5?"#8b1a1a":e>.25?"#6a1515":"#4a0e0e"}function j(e){const r=e.maxHp>0?e.currentHp/e.maxHp:0,t=Math.round(r*100),i=Array.from({length:3},(s,o)=>{const a=e.skills[o];if(!a)return'<div class="skill-slot empty-slot"><span class="empty-slot-text">— Leer —</span></div>';const p=a.type==="A",S=p?"active":"passive",y=p?`<button class="skill-use-btn" data-skill="${o}" ${a.currentUses<=0?"disabled":""}>Use<br><span class="btn-uses">${a.currentUses}/${a.maxUses}</span></button>`:'<span class="skill-counter">&infin;</span>';return`
      <div class="skill-slot">
        <div class="skill-badge ${S}">${a.type}</div>
        <div class="skill-info">
          <div class="skill-name">${a.name}</div>
          <div class="skill-desc">${a.desc}</div>
          ${a.duration?`<div class="skill-duration">${a.duration} ${a.duration!==1?"Würfe":"Wurf"}</div>`:""}
        </div>
        <div class="skill-uses">${y}</div>
      </div>`}).join("");return`
    <div class="character-card">
      <div class="card-header">
        <div class="character-name">${e.name} <span class="level-badge">Lv. ${e.level}</span></div>
        <div class="header-buttons">
          <button class="info-btn" id="story-open">S</button>
          <button class="info-btn" id="info-open">i</button>
        </div>
      </div>

      <div class="hp-section">
        <div class="hp-bar-wrapper">
          <div class="hp-label">HP</div>
          <div class="hp-bar-track">
            <div class="hp-bar-fill" style="width:${t}%;background:${O(r)}"></div>
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
          <div class="target-row"><span class="target-dot outer"></span><span class="target-zone">Außen</span><span class="target-dmg">${e.damage.outer} Schaden</span></div>
          <div class="target-row"><span class="target-dot middle"></span><span class="target-zone">Mitte</span><span class="target-dmg">${e.damage.middle} Schaden</span></div>
          <div class="target-row"><span class="target-dot inner"></span><span class="target-zone">Innen</span><span class="target-dmg">${e.damage.inner} Schaden</span></div>
        </div>
      </div>

      <div class="skills-header">Skills</div>
      <div class="skills-list">${i}</div>

      ${e.rewards?`
      <div class="reward-section">
        <div class="skills-header">Belohnung</div>
        <div class="quest-rewards">
          ${e.rewards.map(s=>`<div class="reward-row">
            <span class="reward-type ${s.type}">${s.type==="skill"?"S":s.type==="quest_item"?"Q":"I"}</span>
            <span class="reward-name">${s.name}</span>
            ${s.code?`<span class="reward-code">${s.code}</span>`:""}
          </div>`).join("")}
        </div>
      </div>`:""}

      <div class="bottom-controls">
        <div class="difficulty-group">
          ${Object.entries(b).map(([s,{label:o}])=>`<button class="difficulty-btn${e.difficulty===s?" active":""}" data-diff="${s}">${o}</button>`).join("")}
        </div>
        <button class="reset-btn">Reset</button>
      </div>
    </div>`}function R(e){const r=e.story||{};return`
  <div class="info-overlay" id="story-overlay">
    <div class="info-panel">
      <button class="info-close-btn" id="story-close">&times;</button>
      <h2 class="info-title">${e.name}</h2>
      <div class="info-section">
        <p>${r.desc||""}</p>
      </div>
      <div class="info-section">
        <h3>Wenn getroffen</h3>
        <p class="catchphrase">${r.onHit||""}</p>
      </div>
      <div class="info-section">
        <h3>Beim Treffer</h3>
        <p class="catchphrase">${r.onStrike||""}</p>
      </div>
      <div class="info-section">
        <h3>Bei Niederlage</h3>
        <p class="catchphrase">${r.onDefeat||""}</p>
      </div>
    </div>
  </div>`}const U=`
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
  </div>`;function u(){const e=c[l],r=d[l];w.innerHTML=j(e)+R(r)+U,document.querySelectorAll(".hp-btn").forEach(i=>{i.addEventListener("click",()=>{const s=c[l];if(i.dataset.dir==="up"){if(s.currentHp>=s.maxHp||!confirm("Letzten Treffer rückgängig machen?"))return;s.currentHp++}i.dataset.dir==="down"&&s.currentHp>0&&s.currentHp--,h(),u()})}),document.querySelectorAll(".skill-use-btn").forEach(i=>{i.addEventListener("click",()=>{const s=c[l].skills[Number(i.dataset.skill)];s.currentUses>0&&(s.currentUses--,h(),u())})}),document.querySelectorAll(".difficulty-btn").forEach(i=>{i.addEventListener("click",()=>{C(l,i.dataset.diff)})}),document.querySelector(".reset-btn").addEventListener("click",()=>{confirm(`${c[l].name} zurücksetzen?`)&&(c[l]=structuredClone(d[l]),c[l].difficulty="normal",h(),u())});const t=document.getElementById("info-overlay");document.getElementById("info-open").addEventListener("click",()=>{t.classList.add("visible")}),document.getElementById("info-close").addEventListener("click",()=>{t.classList.remove("visible")}),t.addEventListener("click",i=>{i.target===t&&t.classList.remove("visible")});const n=document.getElementById("story-overlay");document.getElementById("story-open").addEventListener("click",()=>{n.classList.add("visible")}),document.getElementById("story-close").addEventListener("click",()=>{n.classList.remove("visible")}),n.addEventListener("click",i=>{i.target===n&&n.classList.remove("visible")})}u();
