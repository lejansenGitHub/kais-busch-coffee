import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{S as n,b as l,I as o,a as v}from"./hero-data-B8v1JvdX.js";const u=document.querySelector("#app"),f=["blind_fury","repulsion","pushback","iron_ward","off_balance","heavy_hands","freeze","crude_sack","tremor","vertigo","revision","sugar_rush","respect_the_cards"],p=["advance","double_attack","fine_sack","snipers_gambit","war_cry","high_standards","trick_shot"],b=["backstab","thieves_gambit","dark_deal"];function k(e,s){return s.type==="P"?"passive":f.includes(e)?"debuff":b.includes(e)?"rogue":p.includes(e)?"buff":s.desc.toLowerCase().includes("gegner")?"debuff":"buff"}const a={debuff:[],buff:[],rogue:[],passive:[]};for(const[e,s]of Object.entries(n))a[k(e,s)].push([e,s]);function _([e,s]){const i=s.type==="A",t=i?"active":"passive",r=i?`${s.maxUses} ${s.maxUses!==1?"Einsätze":"Einsatz"}`:"∞",d=v[e];return`
    <div class="skill-slot">
      <div class="skill-badge ${t}">${s.type}</div>
      <div class="skill-info">
        <div class="skill-name">${s.name}${d?` <span class="skill-code">${d}</span>`:""}</div>
        <div class="skill-desc">${s.desc}</div>
        ${s.duration?`<div class="skill-duration">${s.duration} ${s.duration!==1?"Würfe":"Wurf"}</div>`:""}
      </div>
      <div class="skill-uses">
        <span class="skill-counter">${r}</span>
      </div>
    </div>`}function c(e,s){return s.length===0?"":`
    <div class="skills-section">
      <div class="skills-header">${e}</div>
      <div class="skills-list">${s.map(_).join("")}</div>
    </div>`}const $=Object.entries(l).map(([e,s])=>{const i=o[e];return`
    <div class="skill-slot">
      <div class="skill-badge passive">I</div>
      <div class="skill-info">
        <div class="skill-name">${s.name}${i?` <span class="skill-code">${i}</span>`:""}</div>
        <div class="skill-desc">${s.desc}</div>
      </div>
    </div>`}).join("");u.innerHTML=`
  <div class="character-card">
    <div class="character-name">Skill-Übersicht</div>
    ${c("Aktiv — Gegner-Debuffs",a.debuff)}
    ${c("Aktiv — Selbst-Buffs",a.buff)}
    ${c("Aktiv — Schurke",a.rogue)}
    ${c("Passive",a.passive)}
    <div class="skills-section">
      <div class="skills-header">Items</div>
      <div class="skills-list">${$}</div>
    </div>
  </div>`;
