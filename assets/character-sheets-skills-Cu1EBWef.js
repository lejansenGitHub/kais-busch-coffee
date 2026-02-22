import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{S as r,b as l,I as v,a as o}from"./hero-data-CvuzS0MW.js";const u=document.querySelector("#app"),f=["blind_fury","repulsion","pushback","iron_ward","off_balance","heavy_hands","freeze","crude_sack","tremor","vertigo","revision"],p=["advance","double_attack","fine_sack","snipers_gambit","war_cry","high_standards"],b=["backstab","thieves_gambit","dark_deal"];function k(i,s){return s.type==="P"?"passive":f.includes(i)?"debuff":b.includes(i)?"rogue":p.includes(i)?"buff":s.desc.toLowerCase().includes("gegner")?"debuff":"buff"}const a={debuff:[],buff:[],rogue:[],passive:[]};for(const[i,s]of Object.entries(r))a[k(i,s)].push([i,s]);function $([i,s]){const e=s.type==="A",n=e?"active":"passive",t=e?`${s.maxUses} ${s.maxUses!==1?"Einsätze":"Einsatz"}`:"∞",c=o[i];return`
    <div class="skill-slot">
      <div class="skill-badge ${n}">${s.type}</div>
      <div class="skill-info">
        <div class="skill-name">${s.name}${c?` <span class="skill-code">${c}</span>`:""}</div>
        <div class="skill-desc">${s.desc}</div>
        ${s.duration?`<div class="skill-duration">${s.duration} ${s.duration!==1?"Würfe":"Wurf"}</div>`:""}
      </div>
      <div class="skill-uses">
        <span class="skill-counter">${t}</span>
      </div>
    </div>`}function d(i,s){return s.length===0?"":`
    <div class="skills-section">
      <div class="skills-header">${i}</div>
      <div class="skills-list">${s.map($).join("")}</div>
    </div>`}const _=Object.entries(l).map(([i,s])=>{const e=v[i];return`
    <div class="skill-slot">
      <div class="skill-badge passive">I</div>
      <div class="skill-info">
        <div class="skill-name">${s.name}${e?` <span class="skill-code">${e}</span>`:""}</div>
        <div class="skill-desc">${s.desc}</div>
      </div>
    </div>`}).join("");u.innerHTML=`
  <div class="character-card">
    <div class="character-name">Skill-Übersicht</div>
    ${d("Aktiv — Gegner-Debuffs",a.debuff)}
    ${d("Aktiv — Selbst-Buffs",a.buff)}
    ${d("Aktiv — Schurke",a.rogue)}
    ${d("Passive",a.passive)}
    <div class="skills-section">
      <div class="skills-header">Items</div>
      <div class="skills-list">${_}</div>
    </div>
  </div>`;
