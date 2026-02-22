/* empty css              *//* empty css                    */import{S as b,a as y,b as E,I as D}from"./hero-data-B243rthg.js";const z={id:"hubi",name:"Hubi",level:1,actions:1,maxHp:15,currentHp:15,damage:{outer:1,middle:2,inner:4},skills:["advance"],story:{desc:'Hubi ist der Erste, den Lord Patten in dieser fremden Welt antrifft. Er sitzt verwirrt auf einer Bank, dreht eine seltsame Flöte in den Händen und murmelt vor sich hin. Als Lord Patten sich nähert, springt er auf: „Halt! Wer bist du? Komm mir nicht zu nahe!" Ein kurzer Kampf — eher ein Handgemenge — und Hubis Kopf wird wieder klar. „Lord Patten? Oh Mann, ich dachte du wärst ein Räuber! Komm, ich geh mit dir — aber Vorsicht, hier stimmt was nicht."',onHit:'„Hey, nicht so fest!"',onStrike:'„Nimm das!"',onDefeat:'Hubi schüttelt den Kopf, als würde er aus einem Traum erwachen. Dabei fällt ihm die Flöte aus der Tasche und klirrt auf das Kopfsteinpflaster. „Die hatte ich die ganze Zeit bei mir... keine Ahnung woher."'},rewards:[{skill:"advance"},{quest_item:"Flöte"}]},L={id:"hubi-boss",name:"Hubi (Verzaubert)",level:10,actions:3,maxHp:55,currentHp:55,damage:{outer:2,middle:7,inner:11},skills:["heavy_hands","war_cry","fine_sack"],story:{desc:"Die Musik der Flöte hat die Barriere am Schelmenturm durchbrochen — doch sie hat auch Hubi erfasst. Seine Augen sind glasig, sein Blick leer. Die Melodie hallt in seinem Kopf wider und hat seinen Geist völlig übernommen. Er erkennt niemanden mehr — nicht Lord Patten, nicht seine Gefährten. Er steht vor dem Turm wie ein Wächter, der nur einem Befehl gehorcht: Niemand kommt vorbei.",onHit:'„Die Musik... sie hört nicht auf..."',onStrike:'„Ihr... sollt... nicht... durch!"',onDefeat:'Die Melodie verblasst. Hubi sackt auf die Knie, fasst sich an den Kopf. „Was... was ist passiert? Warum tut mir alles weh?" Er blinzelt, erkennt Lord Patten — und sein Blick wird wieder klar.'},rewards:[{item:"pelt"},{skill:"heavy_hands"}]},I={id:"hubi-endboss",name:"Hubi (Stimme der Vernunft)",level:15,actions:3,maxHp:80,currentHp:80,damage:{outer:3,middle:9,inner:14},skills:["blind_fury","war_cry","titans_grip"],story:{desc:'Das Portal nach Hause schimmert am Ende der Altstadt. Hubi steht davor — Arme verschränkt, Blick entschlossen. „Nein. Wir gehen JETZT durch. Sofort. Keine Taverne, kein Umweg, kein Bier." Er kennt Lord Pattens Verlobte, und er weiß: Wenn es um die Hochzeit geht, ist mit ihr nicht zu spaßen. Jede Minute, die sie länger in dieser Welt verbringen, ist eine Minute näher am Untergang. „Mylord, ich sage das als Freund — Eure Verlobte wird uns ALLE umbringen, wenn wir zu spät kommen. Und sie fängt bei MIR an!" Er stellt sich breit vor das Portal. „Ihr wollt in die Taverne? Dann müsst Ihr an mir vorbei."',onHit:'„Sie wird davon erfahren! Das wisst Ihr!"',onStrike:'„Das ist zu Eurem eigenen Besten!"',onDefeat:'Hubi sackt zusammen und seufzt tief. „Na gut. EINE Runde in der Taverne. Aber wenn Eure Verlobte fragt — ich war dagegen. Ich war die ganze Zeit dagegen." Er steht auf, klopft sich ab und murmelt: „Wir sind so was von tot."'}},A={id:"simon",name:"Simon",level:1,actions:1,maxHp:20,currentHp:20,damage:{outer:1,middle:3,inner:5},skills:["blind_fury","advance"],story:{desc:'Sie nennen ihn den Flammenmagier — nicht weil er laut ist, sondern weil man das Feuer erst spürt, wenn es zu spät ist. Simon steht ruhig am Rathausplatz, die Hände glühend, der Blick gelassen. „Du bist also Lord Patten. Ich habe von dir gehört. Aber bevor du weiterziehst, will ich sehen, ob du die Hitze aushalten kannst. Erwarte allerdings nicht mein volles Feuer — das hebe ich mir für später auf."',onHit:'„Das war nur ein Funke. Nicht mehr."',onStrike:'„Spürst du die Hitze? Das ist erst der Anfang."',onDefeat:'„Nicht schlecht. Aber wir sehen uns wieder — und dann brenne ich richtig." Er verschwindet in der Menge, die Glut in seinen Händen noch nicht erloschen.'},reward:{skill:"blind_fury"}},_={id:"simon-strong",name:"Simon (Erwacht)",level:14,actions:3,maxHp:70,currentHp:70,damage:{outer:2,middle:5,inner:9},skills:["blind_fury","advance","snipers_gambit","pushback"],story:{desc:'Simon ist zurückgekehrt — und diesmal brennt er wirklich. Das schwache Glimmen von damals ist einem lodernden Inferno gewichen. Seine Augen glühen, die Luft um ihn flirrt vor Hitze. „Erinnerst du dich? Beim Rathausplatz habe ich gesagt, du wärst noch nicht bereit für mein volles Feuer. Jetzt bist du es. Runde zwei, Lord Patten — diesmal brenne ich alles nieder."',onHit:"„Das Feuer verzeiht keine Fehler.“",onStrike:"„Brenne.“",onDefeat:"„Du hast die Flammen überstanden. Wenige können das von sich behaupten.“ Er verneigt sich knapp, das Feuer in seinen Händen erlischt."}},$={id:"eva",name:"Eva",level:9,actions:2,maxHp:48,currentHp:48,damage:{outer:2,middle:5,inner:9},skills:["double_attack_passive","war_cry","advance"],story:{desc:"Eine schwangere Frau, die jahrelang Getränke für ihren Bruder und seine Freunde geschleppt hat. Nachdem ein tollkühner Held ihr einen Schwangerschaftstee brachte, entdeckte sie einen neuen Energieschub — und sie scheut sich nicht, ihn einzusetzen.",onHit:'„Ich trage für zwei — das heißt, ich schlage doppelt so hart zu."',onStrike:'„Der war vom Baby."',onDefeat:'„Gut. Aber nur, weil ich mich hinsetzen muss."'},reward:{skill:"war_cry"}},M={id:"elena",name:"Elena",level:10,actions:3,maxHp:52,currentHp:52,damage:{outer:2,middle:4,inner:7},skills:["revision","silver_tongue"],story:{desc:"Eine Sprach- und Kunstgelehrte, die Kinder unterrichtet. Sie kennt Sascha seit er klein war — und behandelt ihn immer noch so. Bewaffnet mit Kreide und scharfem Verstand schreibt sie die Regeln nach Belieben um.",onHit:'„Interessante Technik. Dafür gibt’s eine Vier minus."',onStrike:'„Ich hab dir Besseres beigebracht, Sascha."',onDefeat:'„Gut gespielt. Das werte ich als Zusatzleistung."'},reward:{skill:"silver_tongue"}},K={id:"mirko",name:"Mirko",level:7,actions:2,maxHp:40,currentHp:40,damage:{outer:2,middle:5,inner:9},skills:["fortress","iron_ward"],story:{desc:'Mirko wurde durch die Teleportation hierher geschleudert und ist völlig durcheinander — der jüngste der Brüder klammert sich panisch an seinen Geldbeutel und traut keiner Menschenseele. Wenn Lord Patten ihn anspricht, faucht Mirko: „Finger weg von meinem Gold! Keine Ahnung was hier passiert ist, aber du kriegst keinen Heller von mir!" Erst nach einem ordentlichen Kampf wird sein Kopf wieder klar: „Lord Patten? Oh nein — hab ich etwa auf meinen eigenen Lord eingedroschen? Das ist… peinlich. Verbuchen wir das als Betriebsunfall. Ich bin wieder an Eurer Seite."',onHit:'„Das kommt auf deine Rechnung."',onStrike:'„Betrachte das als Investition."',onDefeat:'„Gut. Aber du schuldest mir noch Zinsen."'},rewards:[{skill:"fortress"},{quest_item:"Goldbeutel"}]},x={id:"nick",name:"Nick",level:9,actions:2,maxHp:48,currentHp:48,damage:{outer:2,middle:6,inner:10},skills:["backstab","evasion"],story:{desc:'Nick wurde durch die Teleportation in diese Welt gerissen und ist völlig verwirrt — sein Instinkt schreit Gefahr und er versteckt sich in den Schatten. Wenn Lord Patten sich nähert, zischt Nick aus dem Dunkel: „Keinen Schritt weiter! Ich weiß nicht wer du bist, aber ich hab dich schon dreimal umkreist, bevor du mich bemerkt hast." Erst nach einem Duell kommt er wieder zu Sinnen: „Mylord? Verdammt — Ihr hättet gleich sagen können, dass Ihr es seid. Naja, wenigstens weiß ich jetzt, dass Ihr noch draufhabt. Ich bin wieder Euer Schatten."',onHit:'„Du hast mich nicht mal kommen sehen."',onStrike:'„Zu langsam, Bruder."',onDefeat:'„Du gewinnst diese Runde. Ich bin zurück, bevor du es merkst."'},rewards:[{item:"belt"},{skill:"off_balance"}]},P={id:"jess",name:"Jess",level:4,actions:1,maxHp:28,currentHp:28,damage:{outer:1,middle:2,inner:5},skills:["double_attack_passive","advance"],story:{desc:'Jess wurde durch die Teleportation in diese Welt gerissen und ist völlig aufgedreht — die Verwirrung hat ihren Kampfinstinkt auf Hochtouren gebracht. Wenn Lord Patten sich nähert, geht sie sofort in Kampfstellung: „Ha! Endlich jemand, an dem ich mich abreagieren kann! Keine Ahnung wo ich bin, aber du siehst aus wie eine gute Aufwärmrunde!" Erst nach einem sportlichen Duell legt sich der Nebel: „Oh! Lord Patten! Das war… ein ziemlich guter Kampf, oder? Sorry fürs Draufhauen. Aber hey, jetzt bin ich aufgewärmt — lass uns die anderen finden!"',onHit:'„So sieht Training aus."',onStrike:'„Nicht schnell genug, Bruder."',onDefeat:'„Gutes Match. Beim Rückkampf krieg ich dich."'},reward:{skill:"double_attack"}},B={id:"father",name:"Der Vater",level:8,actions:2,maxHp:45,currentHp:45,damage:{outer:2,middle:6,inner:9},skills:["many_faces","thieves_gambit"],story:{desc:'Der Vater wurde durch die Teleportation hierher geschleudert und ist gefährlich desorientiert — er wechselt zwischen seinen vielen Identitäten und weiß nicht mehr, wer er eigentlich ist. Wenn Lord Patten auf ihn zugeht, mustert er ihn misstrauisch: „Ich kenne dich nicht. Oder doch? Nein. Geh weiter, Fremder, bevor ich vergesse, höflich zu sein." Erst nach einem harten Kampf klart sein Geist auf: „Ah… Lord Patten. Ja, jetzt erinnere ich mich. Oder zumindest der Teil von mir, der sich erinnern will. Gehen wir — bevor ich es mir anders überlege."',onHit:'„Da musst du dir schon mehr einfallen lassen... wer auch immer du glaubst, dass ich bin."',onStrike:'„Eine Lektion von deinem alten Herrn."',onDefeat:'„Gut gemacht. Aber denk dran — du besiegst nie wirklich einen Mann, den du nicht benennen kannst."'},reward:{skill:"tremor"}},N={id:"daniel",name:"Daniel",level:6,actions:2,maxHp:38,currentHp:38,damage:{outer:2,middle:5,inner:8},skills:["fortress","last_stand"],story:{desc:'Daniel wurde durch die Teleportation hierher gerissen und ist völlig verwirrt — er erkennt Lord Patten nicht und hält ihn für einen Feind. Wenn Lord Patten ihn anspricht, knurrt Daniel: „Wer bist du? Bleib mir vom Leib! Ich weiß nicht wo ich bin, aber ich weiche keinen Schritt zurück!" Erst nach einer ordentlichen Tracht Prügel kommt er zur Besinnung: „Mylord…? Mylord! Vergebt mir — ich wusste nicht, was ich tat. Mein Schwert gehört wieder Euch, wie eh und je."',onHit:'„Ich stehe für meinen Lord."',onStrike:'„Für Lord Patten!"',onDefeat:'„Mein Lord… Ich habe versagt. Vorerst."'},reward:{skill:"last_stand"}},T={id:"lukas",name:"Lukas",level:10,actions:3,maxHp:55,currentHp:55,damage:{outer:2,middle:6,inner:10},skills:["dark_deal","snipers_gambit"],story:{desc:'Lukas wurde durch die Teleportation in diese Welt gerissen und ist gefährlich desorientiert — sein sonst so scharfer Verstand ist vernebelt und er vertraut niemandem. Wenn Lord Patten auf ihn zugeht, zischt Lukas: „Noch einen Schritt und wir haben ein Problem. Ich weiß nicht was hier läuft, aber du siehst nicht aus wie jemand, dem ich vertrauen sollte." Erst nach einem harten Duell lichtet sich der Nebel: „Lord Patten. Na klar. Hätte ich mir denken können — nur Ihr seid hartnäckig genug, mich zu schlagen. Gut, ich bin dabei. Aber das hier kostet Euch noch was."',onHit:'„Das ist nur Geschäft."',onStrike:'„Nichts Persönliches. Naja, vielleicht ein bisschen."',onDefeat:'„Du verhandelst hart. Das respektiere ich."'},reward:{skill:"snipers_gambit"}},G={id:"kai-weak",name:"Kai",level:2,actions:1,maxHp:20,currentHp:20,damage:{outer:1,middle:3,inner:5},skills:["trick_shot"],story:{desc:"Ein Showman durch und durch. Kai trägt sein Magic-Deck wie andere ein Schwert — immer griffbereit, immer bereit zu beeindrucken. Er kennt den Wert jeder Karte und erwartet, dass du das auch tust.",onHit:"„Hey, Vorsicht! Da liegen Karten!“",onStrike:"„Das war ein Trick Shot. Hat er gesessen?“",onDefeat:"„Gutes Spiel. Aber im Kartenspielen gewinnst du nie.“"}},W={id:"kai",name:"Kai",level:13,actions:3,maxHp:62,currentHp:62,damage:{outer:2,middle:5,inner:8},skills:["respect_the_cards","trick_shot","crude_sack"],story:{desc:"Ein Showman durch und durch. Kai trägt sein Magic-Deck wie andere ein Schwert — immer griffbereit, immer bereit zu beeindrucken. Er kennt den Wert jeder Karte und erwartet, dass du das auch tust.",onHit:"„Hey, Vorsicht! Da liegen Karten!“",onStrike:"„Das war ein Trick Shot. Hat er gesessen?“",onDefeat:"„Gutes Spiel. Aber im Kartenspielen gewinnst du nie.“"}},C={id:"katta",name:"Katta",level:12,actions:3,maxHp:58,currentHp:58,damage:{outer:2,middle:5,inner:8},skills:["sugar_rush","high_standards"],rewards:[{skill:"high_standards"}],story:{desc:"Eine Meisterin des Genusses mit unfehlbarem Gaumen. Katta kämpft wie sie kocht — elegant, präzise und mit einer Prise Arroganz. Sie akzeptiert nur Perfektion.",onHit:"„Nicht schlecht. Aber da fehlt die Würze.“",onStrike:"„Perfekt abgeschmeckt.“",onDefeat:"„Gut. Du hast Geschmack. Das muss ich anerkennen.“"}},p="character-sheets-state",k={weak:{mult:.6,label:"Weak"},easy:{mult:.8,label:"Easy"},normal:{mult:1,label:"Normal"},hard:{mult:1.2,label:"Hard"},strong:{mult:1.4,label:"Strong"}};function F(i){const r={...i,difficulty:"normal",skills:i.skills.map(t=>{const e=b[t];return{...e,currentUses:e.maxUses}}).sort((t,e)=>(t.type==="A"?0:1)-(e.type==="A"?0:1))};function s(t){if(t.skill){const e=b[t.skill];return{type:"skill",name:e.name,desc:e.desc,code:y[t.skill]}}else if(t.item){const e=E[t.item];return{type:"item",name:e?e.name:t.item,desc:e?e.desc:"",code:D[t.item]}}else if(t.quest_item)return{type:"quest_item",name:t.quest_item}}return i.rewards?r.rewards=i.rewards.map(s):i.reward&&(r.rewards=[s(i.reward)]),r}const c=[z,L,I,A,G,P,x,$,N,K,B,T,M,C,W,_].map(F),w=document.querySelector("#app"),v=w.dataset.character;if(!v)throw new Error("No data-character attribute on #app");const l=c.findIndex(i=>i.id===v);if(l===-1)throw new Error(`Unknown character: ${v}`);const m=3,g="character-sheets-version";function R(){try{if(Number(localStorage.getItem(g)||0)<m)return localStorage.removeItem(p),localStorage.setItem(g,m),structuredClone(c);const r=localStorage.getItem(p);if(r){const s=JSON.parse(r);for(;s.length<c.length;)s.push(structuredClone(c[s.length]));for(let t=0;t<c.length;t++){const e=c[t],n=s[t];if(e){if(n.difficulty??="normal",n.level=e.level,n.actions=e.actions,n.name=e.name,n.story=e.story,n.rewards=e.rewards,n.maxHp=e.maxHp,n.damage={...e.damage},n.skills=e.skills.map(a=>({...a})),n.difficulty!=="normal"){const{mult:a}=k[n.difficulty];n.maxHp=Math.round(e.maxHp*a),n.damage={outer:Math.round(e.damage.outer*a),middle:Math.round(e.damage.middle*a),inner:Math.round(e.damage.inner*a)}}n.currentHp=Math.min(n.currentHp,n.maxHp)}}return s}}catch{}return localStorage.setItem(g,m),structuredClone(c)}function h(){localStorage.setItem(p,JSON.stringify(o))}let o=R();function V(i,r){const s=c[i],{mult:t}=k[r],e=o[i];e.maxHp=Math.round(s.maxHp*t),e.currentHp=e.maxHp,e.damage={outer:Math.round(s.damage.outer*t),middle:Math.round(s.damage.middle*t),inner:Math.round(s.damage.inner*t)},e.skills=s.skills.map(n=>({...n})),e.difficulty=r,h(),u()}function j(i){return i>.5?"#8b1a1a":i>.25?"#6a1515":"#4a0e0e"}function O(i){const r=i.maxHp>0?i.currentHp/i.maxHp:0,s=Math.round(r*100),t=Math.max(3,i.skills.length),e=Array.from({length:t},(n,a)=>{const d=i.skills[a];if(!d)return'<div class="skill-slot empty-slot"><span class="empty-slot-text">— Leer —</span></div>';const f=d.type==="A",H=f?"active":"passive",S=f?`<button class="skill-use-btn" data-skill="${a}" ${d.currentUses<=0?"disabled":""}>Use<br><span class="btn-uses">${d.currentUses}/${d.maxUses}</span></button>`:'<span class="skill-counter">&infin;</span>';return`
      <div class="skill-slot">
        <div class="skill-badge ${H}">${d.type}</div>
        <div class="skill-info">
          <div class="skill-name">${d.name}</div>
          <div class="skill-desc">${d.desc}</div>
          ${d.duration?`<div class="skill-duration">${d.duration} ${d.duration!==1?"Würfe":"Wurf"}</div>`:""}
        </div>
        <div class="skill-uses">${S}</div>
      </div>`}).join("");return`
    <div class="character-card">
      <div class="card-header">
        <div class="character-name">${i.name} <span class="level-badge">Lv. ${i.level}</span></div>
        <div class="header-buttons">
          <button class="info-btn" id="story-open">S</button>
          <button class="info-btn" id="info-open">i</button>
        </div>
      </div>

      <div class="hp-section">
        <div class="hp-bar-wrapper">
          <div class="hp-label">HP</div>
          <div class="hp-bar-track">
            <div class="hp-bar-fill" style="width:${s}%;background:${j(r)}"></div>
            <div class="hp-bar-text">${i.currentHp} / ${i.maxHp}</div>
          </div>
        </div>
        <div class="hp-controls">
          <button class="hp-btn" data-dir="down">&#9660;</button>
          <button class="hp-btn" data-dir="up">&#9650;</button>
        </div>
      </div>

      <div class="actions-line">
        <span class="actions-label">Aktionen pro Runde</span>
        <span class="actions-value">${i.actions}</span>
      </div>

      <div class="target-section">
        <svg class="target-svg" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="56" fill="#0f0d08" stroke="#27ae60" stroke-width="2" />
          <circle cx="60" cy="60" r="36" fill="#151008" stroke="#f39c12" stroke-width="2" />
          <circle cx="60" cy="60" r="16" fill="#1a120a" stroke="#e74c3c" stroke-width="2" />
        </svg>
        <div class="target-legend">
          <div class="target-row"><span class="target-dot outer"></span><span class="target-zone">Außen</span><span class="target-dmg">${i.damage.outer} Schaden</span></div>
          <div class="target-row"><span class="target-dot middle"></span><span class="target-zone">Mitte</span><span class="target-dmg">${i.damage.middle} Schaden</span></div>
          <div class="target-row"><span class="target-dot inner"></span><span class="target-zone">Innen</span><span class="target-dmg">${i.damage.inner} Schaden</span></div>
        </div>
      </div>

      <div class="skills-header">Skills</div>
      <div class="skills-list">${e}</div>

      ${i.rewards?`
      <div class="reward-section">
        <div class="skills-header">Belohnung</div>
        <div class="quest-rewards">
          ${i.rewards.map(n=>`<div class="reward-row">
            <span class="reward-type ${n.type}">${n.type==="skill"?"S":n.type==="quest_item"?"Q":"I"}</span>
            ${n.desc?`<span class="reward-name has-tooltip" tabindex="0">${n.name}<span class="tooltip">${n.desc}</span></span>`:`<span class="reward-name">${n.name}</span>`}
            ${n.code?`<span class="reward-code">${n.code}</span>`:""}
          </div>`).join("")}
        </div>
      </div>`:""}

      <div class="bottom-controls">
        <div class="difficulty-group">
          ${Object.entries(k).map(([n,{label:a}])=>`<button class="difficulty-btn${i.difficulty===n?" active":""}" data-diff="${n}">${a}</button>`).join("")}
        </div>
        <button class="reset-btn">Reset</button>
      </div>
    </div>`}function U(i){const r=i.story||{};return`
  <div class="info-overlay" id="story-overlay">
    <div class="info-panel">
      <button class="info-close-btn" id="story-close">&times;</button>
      <h2 class="info-title">${i.name}</h2>
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
  </div>`}const q=`
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
  </div>`;function u(){const i=o[l],r=c[l];w.innerHTML=O(i)+U(r)+q,document.querySelectorAll(".hp-btn").forEach(e=>{e.addEventListener("click",()=>{const n=o[l];if(e.dataset.dir==="up"){if(n.currentHp>=n.maxHp||!confirm("Letzten Treffer rückgängig machen?"))return;n.currentHp++}e.dataset.dir==="down"&&n.currentHp>0&&n.currentHp--,h(),u()})}),document.querySelectorAll(".skill-use-btn").forEach(e=>{e.addEventListener("click",()=>{const n=o[l].skills[Number(e.dataset.skill)];n.currentUses>0&&(n.currentUses--,h(),u())})}),document.querySelectorAll(".difficulty-btn").forEach(e=>{e.addEventListener("click",()=>{V(l,e.dataset.diff)})}),document.querySelector(".reset-btn").addEventListener("click",()=>{confirm(`${o[l].name} zurücksetzen?`)&&(o[l]=structuredClone(c[l]),o[l].difficulty="normal",h(),u())});const s=document.getElementById("info-overlay");document.getElementById("info-open").addEventListener("click",()=>{s.classList.add("visible")}),document.getElementById("info-close").addEventListener("click",()=>{s.classList.remove("visible")}),s.addEventListener("click",e=>{e.target===s&&s.classList.remove("visible")});const t=document.getElementById("story-overlay");document.getElementById("story-open").addEventListener("click",()=>{t.classList.add("visible")}),document.getElementById("story-close").addEventListener("click",()=>{t.classList.remove("visible")}),t.addEventListener("click",e=>{e.target===t&&t.classList.remove("visible")}),document.querySelectorAll(".has-tooltip").forEach(e=>{e.addEventListener("click",n=>{n.stopPropagation();const a=e.classList.contains("tooltip-active");document.querySelectorAll(".tooltip-active").forEach(d=>d.classList.remove("tooltip-active")),a||e.classList.add("tooltip-active")})}),document.addEventListener("click",()=>{document.querySelectorAll(".tooltip-active").forEach(e=>e.classList.remove("tooltip-active"))})}u();
