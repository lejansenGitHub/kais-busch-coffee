/* empty css              *//* empty css                    */import{S as v,a as y,I as E}from"./hero-data-B8v1JvdX.js";const D={id:"hubi",name:"Hubi",level:1,actions:1,maxHp:15,currentHp:15,damage:{outer:1,middle:2,inner:4},skills:["advance"],story:{desc:'Hubi ist der Erste, den Lord Patten in dieser fremden Welt antrifft. Er sitzt verwirrt auf einer Bank, dreht eine seltsame Flöte in den Händen und murmelt vor sich hin. Als Lord Patten sich nähert, springt er auf: „Halt! Wer bist du? Komm mir nicht zu nahe!" Ein kurzer Kampf — eher ein Handgemenge — und Hubis Kopf wird wieder klar. „Lord Patten? Oh Mann, ich dachte du wärst ein Räuber! Komm, ich geh mit dir — aber Vorsicht, hier stimmt was nicht."',onHit:'„Hey, nicht so fest!"',onStrike:'„Nimm das!"',onDefeat:'Hubi schüttelt den Kopf, als würde er aus einem Traum erwachen. Dabei fällt ihm die Flöte aus der Tasche und klirrt auf das Kopfsteinpflaster. „Die hatte ich die ganze Zeit bei mir... keine Ahnung woher."'},rewards:[{skill:"advance"},{quest_item:"Flöte"}]},z={id:"hubi-boss",name:"Hubi (Verzaubert)",level:10,actions:3,maxHp:55,currentHp:55,damage:{outer:2,middle:7,inner:11},skills:["heavy_hands","war_cry","fine_sack"],story:{desc:"Die Musik der Flöte hat die Barriere am Schelmenturm durchbrochen — doch sie hat auch Hubi erfasst. Seine Augen sind glasig, sein Blick leer. Die Melodie hallt in seinem Kopf wider und hat seinen Geist völlig übernommen. Er erkennt niemanden mehr — nicht Lord Patten, nicht seine Gefährten. Er steht vor dem Turm wie ein Wächter, der nur einem Befehl gehorcht: Niemand kommt vorbei.",onHit:'„Die Musik... sie hört nicht auf..."',onStrike:'„Ihr... sollt... nicht... durch!"',onDefeat:'Die Melodie verblasst. Hubi sackt auf die Knie, fasst sich an den Kopf. „Was... was ist passiert? Warum tut mir alles weh?" Er blinzelt, erkennt Lord Patten — und sein Blick wird wieder klar.'},rewards:[{item:"pelt"},{skill:"heavy_hands"}]},L={id:"hubi-endboss",name:"Hubi (Stimme der Vernunft)",level:15,actions:3,maxHp:80,currentHp:80,damage:{outer:3,middle:9,inner:14},skills:["blind_fury","war_cry","titans_grip"],story:{desc:'Das Portal nach Hause schimmert am Ende der Altstadt. Hubi steht davor — Arme verschränkt, Blick entschlossen. „Nein. Wir gehen JETZT durch. Sofort. Keine Taverne, kein Umweg, kein Bier." Er kennt Lord Pattens Verlobte, und er weiß: Wenn es um die Hochzeit geht, ist mit ihr nicht zu spaßen. Jede Minute, die sie länger in dieser Welt verbringen, ist eine Minute näher am Untergang. „Mylord, ich sage das als Freund — Eure Verlobte wird uns ALLE umbringen, wenn wir zu spät kommen. Und sie fängt bei MIR an!" Er stellt sich breit vor das Portal. „Ihr wollt in die Taverne? Dann müsst Ihr an mir vorbei."',onHit:'„Sie wird davon erfahren! Das wisst Ihr!"',onStrike:'„Das ist zu Eurem eigenen Besten!"',onDefeat:'Hubi sackt zusammen und seufzt tief. „Na gut. EINE Runde in der Taverne. Aber wenn Eure Verlobte fragt — ich war dagegen. Ich war die ganze Zeit dagegen." Er steht auf, klopft sich ab und murmelt: „Wir sind so was von tot."'}},I={id:"simon",name:"Simon",level:1,actions:1,maxHp:20,currentHp:20,damage:{outer:1,middle:3,inner:5},skills:["blind_fury","advance"],story:{desc:'Sie nennen ihn den Flammenmagier — nicht weil er laut ist, sondern weil man das Feuer erst spürt, wenn es zu spät ist. Simon steht ruhig am Rathausplatz, die Hände glühend, der Blick gelassen. „Du bist also Lord Patten. Ich habe von dir gehört. Aber bevor du weiterziehst, will ich sehen, ob du die Hitze aushalten kannst. Erwarte allerdings nicht mein volles Feuer — das hebe ich mir für später auf."',onHit:'„Das war nur ein Funke. Nicht mehr."',onStrike:'„Spürst du die Hitze? Das ist erst der Anfang."',onDefeat:'„Nicht schlecht. Aber wir sehen uns wieder — und dann brenne ich richtig." Er verschwindet in der Menge, die Glut in seinen Händen noch nicht erloschen.'},reward:{skill:"blind_fury"}},_={id:"simon-strong",name:"Simon (Erwacht)",level:14,actions:3,maxHp:70,currentHp:70,damage:{outer:2,middle:5,inner:9},skills:["blind_fury","advance","snipers_gambit","pushback"],story:{desc:'Simon ist zurückgekehrt — und diesmal brennt er wirklich. Das schwache Glimmen von damals ist einem lodernden Inferno gewichen. Seine Augen glühen, die Luft um ihn flirrt vor Hitze. „Erinnerst du dich? Beim Rathausplatz habe ich gesagt, du wärst noch nicht bereit für mein volles Feuer. Jetzt bist du es. Runde zwei, Lord Patten — diesmal brenne ich alles nieder."',onHit:"„Das Feuer verzeiht keine Fehler.“",onStrike:"„Brenne.“",onDefeat:"„Du hast die Flammen überstanden. Wenige können das von sich behaupten.“ Er verneigt sich knapp, das Feuer in seinen Händen erlischt."}},A={id:"eva",name:"Eva",level:9,actions:2,maxHp:48,currentHp:48,damage:{outer:2,middle:5,inner:9},skills:["double_attack_passive","war_cry","advance"],story:{desc:"Eine schwangere Frau, die jahrelang Getränke für ihren Bruder und seine Freunde geschleppt hat. Nachdem ein tollkühner Held ihr einen Schwangerschaftstee brachte, entdeckte sie einen neuen Energieschub — und sie scheut sich nicht, ihn einzusetzen.",onHit:'„Ich trage für zwei — das heißt, ich schlage doppelt so hart zu."',onStrike:'„Der war vom Baby."',onDefeat:'„Gut. Aber nur, weil ich mich hinsetzen muss."'},reward:{skill:"war_cry"}},K={id:"elena",name:"Elena",level:10,actions:3,maxHp:52,currentHp:52,damage:{outer:2,middle:4,inner:7},skills:["revision","silver_tongue"],story:{desc:"Eine Sprach- und Kunstgelehrte, die Kinder unterrichtet. Sie kennt Sascha seit er klein war — und behandelt ihn immer noch so. Bewaffnet mit Kreide und scharfem Verstand schreibt sie die Regeln nach Belieben um.",onHit:'„Interessante Technik. Dafür gibt’s eine Vier minus."',onStrike:'„Ich hab dir Besseres beigebracht, Sascha."',onDefeat:'„Gut gespielt. Das werte ich als Zusatzleistung."'},reward:{skill:"silver_tongue"}},$={id:"mirko",name:"Mirko",level:7,actions:2,maxHp:40,currentHp:40,damage:{outer:2,middle:5,inner:9},skills:["fortress","iron_ward"],story:{desc:'Mirko wurde durch die Teleportation hierher geschleudert und ist völlig durcheinander — der jüngste der Brüder klammert sich panisch an seinen Geldbeutel und traut keiner Menschenseele. Wenn Lord Patten ihn anspricht, faucht Mirko: „Finger weg von meinem Gold! Keine Ahnung was hier passiert ist, aber du kriegst keinen Heller von mir!" Erst nach einem ordentlichen Kampf wird sein Kopf wieder klar: „Lord Patten? Oh nein — hab ich etwa auf meinen eigenen Lord eingedroschen? Das ist… peinlich. Verbuchen wir das als Betriebsunfall. Ich bin wieder an Eurer Seite."',onHit:'„Das kommt auf deine Rechnung."',onStrike:'„Betrachte das als Investition."',onDefeat:'„Gut. Aber du schuldest mir noch Zinsen."'},rewards:[{skill:"fortress"},{quest_item:"Goldbeutel"}]},M={id:"nick",name:"Nick",level:9,actions:2,maxHp:48,currentHp:48,damage:{outer:2,middle:6,inner:10},skills:["backstab","evasion"],story:{desc:'Nick wurde durch die Teleportation in diese Welt gerissen und ist völlig verwirrt — sein Instinkt schreit Gefahr und er versteckt sich in den Schatten. Wenn Lord Patten sich nähert, zischt Nick aus dem Dunkel: „Keinen Schritt weiter! Ich weiß nicht wer du bist, aber ich hab dich schon dreimal umkreist, bevor du mich bemerkt hast." Erst nach einem Duell kommt er wieder zu Sinnen: „Mylord? Verdammt — Ihr hättet gleich sagen können, dass Ihr es seid. Naja, wenigstens weiß ich jetzt, dass Ihr noch draufhabt. Ich bin wieder Euer Schatten."',onHit:'„Du hast mich nicht mal kommen sehen."',onStrike:'„Zu langsam, Bruder."',onDefeat:'„Du gewinnst diese Runde. Ich bin zurück, bevor du es merkst."'},rewards:[{item:"arm_protectors"},{skill:"off_balance"}]},B={id:"jess",name:"Jess",level:4,actions:1,maxHp:28,currentHp:28,damage:{outer:1,middle:2,inner:5},skills:["double_attack_passive","advance"],story:{desc:'Jess wurde durch die Teleportation in diese Welt gerissen und ist völlig aufgedreht — die Verwirrung hat ihren Kampfinstinkt auf Hochtouren gebracht. Wenn Lord Patten sich nähert, geht sie sofort in Kampfstellung: „Ha! Endlich jemand, an dem ich mich abreagieren kann! Keine Ahnung wo ich bin, aber du siehst aus wie eine gute Aufwärmrunde!" Erst nach einem sportlichen Duell legt sich der Nebel: „Oh! Lord Patten! Das war… ein ziemlich guter Kampf, oder? Sorry fürs Draufhauen. Aber hey, jetzt bin ich aufgewärmt — lass uns die anderen finden!"',onHit:'„So sieht Training aus."',onStrike:'„Nicht schnell genug, Bruder."',onDefeat:'„Gutes Match. Beim Rückkampf krieg ich dich."'},reward:{skill:"double_attack"}},P={id:"father",name:"Der Vater",level:8,actions:2,maxHp:45,currentHp:45,damage:{outer:2,middle:6,inner:9},skills:["many_faces","thieves_gambit"],story:{desc:'Der Vater wurde durch die Teleportation hierher geschleudert und ist gefährlich desorientiert — er wechselt zwischen seinen vielen Identitäten und weiß nicht mehr, wer er eigentlich ist. Wenn Lord Patten auf ihn zugeht, mustert er ihn misstrauisch: „Ich kenne dich nicht. Oder doch? Nein. Geh weiter, Fremder, bevor ich vergesse, höflich zu sein." Erst nach einem harten Kampf klart sein Geist auf: „Ah… Lord Patten. Ja, jetzt erinnere ich mich. Oder zumindest der Teil von mir, der sich erinnern will. Gehen wir — bevor ich es mir anders überlege."',onHit:'„Da musst du dir schon mehr einfallen lassen... wer auch immer du glaubst, dass ich bin."',onStrike:'„Eine Lektion von deinem alten Herrn."',onDefeat:'„Gut gemacht. Aber denk dran — du besiegst nie wirklich einen Mann, den du nicht benennen kannst."'},reward:{skill:"tremor"}},x={id:"daniel",name:"Daniel",level:6,actions:2,maxHp:38,currentHp:38,damage:{outer:2,middle:5,inner:8},skills:["fortress","last_stand"],story:{desc:'Daniel wurde durch die Teleportation hierher gerissen und ist völlig verwirrt — er erkennt Lord Patten nicht und hält ihn für einen Feind. Wenn Lord Patten ihn anspricht, knurrt Daniel: „Wer bist du? Bleib mir vom Leib! Ich weiß nicht wo ich bin, aber ich weiche keinen Schritt zurück!" Erst nach einer ordentlichen Tracht Prügel kommt er zur Besinnung: „Mylord…? Mylord! Vergebt mir — ich wusste nicht, was ich tat. Mein Schwert gehört wieder Euch, wie eh und je."',onHit:'„Ich stehe für meinen Lord."',onStrike:'„Für Lord Patten!"',onDefeat:'„Mein Lord… Ich habe versagt. Vorerst."'},reward:{skill:"last_stand"}},N={id:"lukas",name:"Lukas",level:10,actions:3,maxHp:55,currentHp:55,damage:{outer:2,middle:6,inner:10},skills:["dark_deal","snipers_gambit"],story:{desc:'Lukas wurde durch die Teleportation in diese Welt gerissen und ist gefährlich desorientiert — sein sonst so scharfer Verstand ist vernebelt und er vertraut niemandem. Wenn Lord Patten auf ihn zugeht, zischt Lukas: „Noch einen Schritt und wir haben ein Problem. Ich weiß nicht was hier läuft, aber du siehst nicht aus wie jemand, dem ich vertrauen sollte." Erst nach einem harten Duell lichtet sich der Nebel: „Lord Patten. Na klar. Hätte ich mir denken können — nur Ihr seid hartnäckig genug, mich zu schlagen. Gut, ich bin dabei. Aber das hier kostet Euch noch was."',onHit:'„Das ist nur Geschäft."',onStrike:'„Nichts Persönliches. Naja, vielleicht ein bisschen."',onDefeat:'„Du verhandelst hart. Das respektiere ich."'},reward:{skill:"snipers_gambit"}},T={id:"kai-weak",name:"Kai",level:2,actions:1,maxHp:20,currentHp:20,damage:{outer:1,middle:3,inner:5},skills:["trick_shot"],story:{desc:"Ein Showman durch und durch. Kai trägt sein Magic-Deck wie andere ein Schwert — immer griffbereit, immer bereit zu beeindrucken. Er kennt den Wert jeder Karte und erwartet, dass du das auch tust.",onHit:"„Hey, Vorsicht! Da liegen Karten!“",onStrike:"„Das war ein Trick Shot. Hat er gesessen?“",onDefeat:"„Gutes Spiel. Aber im Kartenspielen gewinnst du nie.“"}},G={id:"kai",name:"Kai",level:13,actions:3,maxHp:62,currentHp:62,damage:{outer:2,middle:5,inner:8},skills:["respect_the_cards","trick_shot","crude_sack"],story:{desc:"Ein Showman durch und durch. Kai trägt sein Magic-Deck wie andere ein Schwert — immer griffbereit, immer bereit zu beeindrucken. Er kennt den Wert jeder Karte und erwartet, dass du das auch tust.",onHit:"„Hey, Vorsicht! Da liegen Karten!“",onStrike:"„Das war ein Trick Shot. Hat er gesessen?“",onDefeat:"„Gutes Spiel. Aber im Kartenspielen gewinnst du nie.“"}},W={id:"katta",name:"Katta",level:12,actions:3,maxHp:58,currentHp:58,damage:{outer:2,middle:5,inner:8},skills:["sugar_rush","high_standards"],story:{desc:"Eine Meisterin des Genusses mit unfehlbarem Gaumen. Katta kämpft wie sie kocht — elegant, präzise und mit einer Prise Arroganz. Sie akzeptiert nur Perfektion.",onHit:"„Nicht schlecht. Aber da fehlt die Würze.“",onStrike:"„Perfekt abgeschmeckt.“",onDefeat:"„Gut. Du hast Geschmack. Das muss ich anerkennen.“"}},k="character-sheets-state",b={weak:{mult:.6,label:"Weak"},easy:{mult:.8,label:"Easy"},normal:{mult:1,label:"Normal"},hard:{mult:1.2,label:"Hard"},strong:{mult:1.4,label:"Strong"}};function C(e){const r={...e,difficulty:"normal",skills:e.skills.map(n=>{const i=v[n];return{...i,currentUses:i.maxUses}}).sort((n,i)=>(n.type==="A"?0:1)-(i.type==="A"?0:1))};function t(n){if(n.skill)return{type:"skill",name:v[n.skill].name,code:y[n.skill]};if(n.item)return{type:"item",name:n.item.replace(/_/g," ").replace(/\b\w/g,i=>i.toUpperCase()),code:E[n.item]};if(n.quest_item)return{type:"quest_item",name:n.quest_item}}return e.rewards?r.rewards=e.rewards.map(t):e.reward&&(r.rewards=[t(e.reward)]),r}const l=[D,z,L,I,T,B,M,A,x,$,P,N,K,W,G,_].map(C),w=document.querySelector("#app"),p=w.dataset.character;if(!p)throw new Error("No data-character attribute on #app");const d=l.findIndex(e=>e.id===p);if(d===-1)throw new Error(`Unknown character: ${p}`);const m=3,g="character-sheets-version";function F(){try{if(Number(localStorage.getItem(g)||0)<m)return localStorage.removeItem(k),localStorage.setItem(g,m),structuredClone(l);const r=localStorage.getItem(k);if(r){const t=JSON.parse(r);for(let n=t.length;n<l.length;n++)t.push(structuredClone(l[n]));for(let n=0;n<t.length;n++)l[n]&&t[n].difficulty===void 0&&(t[n].difficulty="normal");return t}}catch{}return localStorage.setItem(g,m),structuredClone(l)}function h(){localStorage.setItem(k,JSON.stringify(c))}let c=F();function R(e,r){const t=l[e],{mult:n}=b[r],i=c[e];i.maxHp=Math.round(t.maxHp*n),i.currentHp=i.maxHp,i.damage={outer:Math.round(t.damage.outer*n),middle:Math.round(t.damage.middle*n),inner:Math.round(t.damage.inner*n)},i.skills.forEach((s,o)=>{s.currentUses=t.skills[o].maxUses}),i.difficulty=r,h(),u()}function V(e){return e>.5?"#8b1a1a":e>.25?"#6a1515":"#4a0e0e"}function U(e){const r=e.maxHp>0?e.currentHp/e.maxHp:0,t=Math.round(r*100),n=Math.max(3,e.skills.length),i=Array.from({length:n},(s,o)=>{const a=e.skills[o];if(!a)return'<div class="skill-slot empty-slot"><span class="empty-slot-text">— Leer —</span></div>';const f=a.type==="A",H=f?"active":"passive",S=f?`<button class="skill-use-btn" data-skill="${o}" ${a.currentUses<=0?"disabled":""}>Use<br><span class="btn-uses">${a.currentUses}/${a.maxUses}</span></button>`:'<span class="skill-counter">&infin;</span>';return`
      <div class="skill-slot">
        <div class="skill-badge ${H}">${a.type}</div>
        <div class="skill-info">
          <div class="skill-name">${a.name}</div>
          <div class="skill-desc">${a.desc}</div>
          ${a.duration?`<div class="skill-duration">${a.duration} ${a.duration!==1?"Würfe":"Wurf"}</div>`:""}
        </div>
        <div class="skill-uses">${S}</div>
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
            <div class="hp-bar-fill" style="width:${t}%;background:${V(r)}"></div>
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
    </div>`}function j(e){const r=e.story||{};return`
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
  </div>`}const O=`
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
  </div>`;function u(){const e=c[d],r=l[d];w.innerHTML=U(e)+j(r)+O,document.querySelectorAll(".hp-btn").forEach(i=>{i.addEventListener("click",()=>{const s=c[d];if(i.dataset.dir==="up"){if(s.currentHp>=s.maxHp||!confirm("Letzten Treffer rückgängig machen?"))return;s.currentHp++}i.dataset.dir==="down"&&s.currentHp>0&&s.currentHp--,h(),u()})}),document.querySelectorAll(".skill-use-btn").forEach(i=>{i.addEventListener("click",()=>{const s=c[d].skills[Number(i.dataset.skill)];s.currentUses>0&&(s.currentUses--,h(),u())})}),document.querySelectorAll(".difficulty-btn").forEach(i=>{i.addEventListener("click",()=>{R(d,i.dataset.diff)})}),document.querySelector(".reset-btn").addEventListener("click",()=>{confirm(`${c[d].name} zurücksetzen?`)&&(c[d]=structuredClone(l[d]),c[d].difficulty="normal",h(),u())});const t=document.getElementById("info-overlay");document.getElementById("info-open").addEventListener("click",()=>{t.classList.add("visible")}),document.getElementById("info-close").addEventListener("click",()=>{t.classList.remove("visible")}),t.addEventListener("click",i=>{i.target===t&&t.classList.remove("visible")});const n=document.getElementById("story-overlay");document.getElementById("story-open").addEventListener("click",()=>{n.classList.add("visible")}),document.getElementById("story-close").addEventListener("click",()=>{n.classList.remove("visible")}),n.addEventListener("click",i=>{i.target===n&&n.classList.remove("visible")})}u();
