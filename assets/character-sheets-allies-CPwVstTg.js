import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */const n=[{name:"Mirko",title:"Der Banker",timing:"Vor dem Kampf",ability:"Investment Roll",desc:"Mirko würfelt mit beiden Würfeln. Ist die Summe 7 oder höher, verursachen Saschas Treffer in Runde 1 +2 Bonusschaden. Ist die Summe unter 7, verursachen die gegnerischen Treffer in Runde 1 +1 Bonusschaden.",mechanic:"dice"},{name:"Nick",title:"Der Schurke",timing:"TBD",ability:"TBD",desc:"Noch offen.",mechanic:"tbd"},{name:"Jess",title:"Die Amazone",timing:"Einmal pro Kampf",ability:"Staffelwurf",desc:"Jess wirft einen Sandsack zusammen mit Sascha — beide werfen gleichzeitig. Der bessere Treffer zählt.",mechanic:"physical"},{name:"Der Vater",title:"Oberhaupt der Diebesgilde",timing:"Vor dem Kampf",ability:"Bierverkostung",desc:"Sascha wählt eine von zwei Schwierigkeitsstufen. Extrawürfe in Runde 1 werden nicht von Skills beeinflusst.",mechanic:"challenge",deals:[{name:"Normal",cost:0,desc:"Zwei Biere (Kölsch & Alt) mit geschlossenen Augen probieren und erraten, welches welches ist.<br>Richtig → 1 Extrawurf.<br>Falsch → der Gegner erhält 1 Extrawurf."},{name:"Schwer",cost:0,desc:"Zwei Alt-Biere mit geschlossenen Augen probieren und das Füchschen Alt erkennen.<br>Richtig → 2 Extrawürfe.<br>Falsch → der Gegner erhält 1 Extrawurf."}]},{name:"Daniel",title:"Der treue Gefolgsmann",timing:"Einmal pro Kampf",ability:"Leibwächter",desc:"Daniel stellt sich nah an die Zielscheibe. Einmal pro Kampf fängt oder lenkt er den Sandsack des Gegners mit den Händen ab — dieser Wurf zählt als Fehlwurf.",mechanic:"physical"},{name:"Lukas",title:"Der Geschäftsmann",timing:"Vor dem Kampf",ability:"Dubiose Deals",desc:"Lukas bietet Deals an, bei denen Sascha HP für einen Vorteil zahlt. Jeweils einmal pro Kampf.",mechanic:"deal",deals:[{name:"Insider Info",cost:4,desc:"Zahle 4 HP vor dem Kampf → deaktiviere einen Einsatz des ersten aktiven Skills des Gegners für den Kampf."}]}],a=document.querySelector("#app");function l(e){const i={dice:"D",physical:"P",challenge:"C",deal:"$",tbd:"?"};return`<div class="skill-badge ${{dice:"active",physical:"passive",challenge:"active",deal:"active",tbd:"passive"}[e]||"passive"}">${i[e]||"?"}</div>`}function t(e){const i=e.deals?e.deals.map(s=>`<div class="ally-deal">${s.name}${s.cost?` <span class="ally-cost">−${s.cost} HP</span>`:""}: ${s.desc}</div>`).join(""):"";return`
    <div class="skill-slot">
      ${l(e.mechanic)}
      <div class="skill-info">
        <div class="skill-name">${e.name} <span class="skill-duration">${e.title}</span></div>
        <div class="skill-desc"><strong>${e.ability}</strong> (${e.timing})</div>
        <div class="skill-desc">${e.desc}</div>
        ${i?`<div class="ally-deals">${i}</div>`:""}
      </div>
    </div>`}a.innerHTML=`
  <div class="character-card">
    <div class="character-name">Verbündete</div>
    <div class="skills-section">
      <div class="skills-header">Rekrutierte Verbündete</div>
      <div class="skills-list">${n.map(t).join("")}</div>
    </div>
    <div class="ally-legend">
      <div class="skills-header">Legende</div>
      <div class="skill-desc" style="padding:8px 12px;opacity:0.7;">
        <strong>D</strong> = Würfel &nbsp; <strong>P</strong> = Physisch &nbsp; <strong>C</strong> = Herausford. &nbsp; <strong>$</strong> = HP-Deal &nbsp; <strong>?</strong> = TBD
      </div>
    </div>
  </div>`;
