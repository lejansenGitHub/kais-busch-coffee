import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */const a=[{name:"Mirko",title:"The Banker",timing:"Before the fight",ability:"Investment Roll",desc:"Mirko rolls both dice. If the sum is 7 or higher, Sascha's hits deal +2 bonus damage in round 1. If the sum is under 7, the enemy's hits deal +1 bonus damage in round 1.",mechanic:"dice"},{name:"Nick",title:"The Rogue",timing:"TBD",ability:"TBD",desc:"To be decided.",mechanic:"tbd"},{name:"Jess",title:"The Amazon",timing:"Once per fight",ability:"Relay Throw",desc:"Jess throws a sandsack alongside Sascha — both throw at the same time. The better hit counts.",mechanic:"physical"},{name:"The Father",title:"Head of the Thieves' Guild",timing:"Before the fight",ability:"Beer Tasting Challenge",desc:"The Father presents two beers. Sascha must taste both with closed eyes and guess which one is the Kölsch and which one the Alt. If correct, Sascha gets one extra throw in round 1 that is not affected by any skills.",mechanic:"challenge"},{name:"Daniel",title:"The Loyal Subject",timing:"Once per fight",ability:"Bodyguard",desc:"Daniel physically stands near the target. Once per fight, he catches or deflects the enemy’s sandsack with his hands — that throw counts as a miss.",mechanic:"physical"},{name:"Lukas",title:"The Businessman",timing:"Before the fight",ability:"Shady Deals",desc:"Lukas offers deals where Sascha pays HP for a benefit. Once per fight each.",mechanic:"deal",deals:[{name:"Insider Info",cost:4,desc:"Pay 4 HP before the fight → disable one usage of the enemy’s first active skill for the fight."},{name:"Deal 2",cost:0,desc:"To be decided."},{name:"Deal 3",cost:0,desc:"To be decided."}]}],t=document.querySelector("#app");function n(e){const i={dice:"D",physical:"P",challenge:"C",deal:"$",tbd:"?"};return`<div class="skill-badge ${{dice:"active",physical:"passive",challenge:"active",deal:"active",tbd:"passive"}[e]||"passive"}">${i[e]||"?"}</div>`}function c(e){const i=e.deals?e.deals.map(s=>`<div class="ally-deal">${s.name}${s.cost?` <span class="ally-cost">−${s.cost} HP</span>`:""}: ${s.desc}</div>`).join(""):"";return`
    <div class="skill-slot">
      ${n(e.mechanic)}
      <div class="skill-info">
        <div class="skill-name">${e.name} <span class="skill-duration">${e.title}</span></div>
        <div class="skill-desc"><strong>${e.ability}</strong> (${e.timing})</div>
        <div class="skill-desc">${e.desc}</div>
        ${i?`<div class="ally-deals">${i}</div>`:""}
      </div>
    </div>`}t.innerHTML=`
  <div class="character-card">
    <div class="character-name">Ally Abilities</div>
    <div class="skills-section">
      <div class="skills-header">Recruited Allies</div>
      <div class="skills-list">${a.map(c).join("")}</div>
    </div>
    <div class="ally-legend">
      <div class="skills-header">Legend</div>
      <div class="skill-desc" style="padding:8px 12px;opacity:0.7;">
        <strong>D</strong> = Dice &nbsp; <strong>P</strong> = Physical &nbsp; <strong>C</strong> = Challenge &nbsp; <strong>$</strong> = HP Deal &nbsp; <strong>?</strong> = TBD
      </div>
    </div>
  </div>`;
