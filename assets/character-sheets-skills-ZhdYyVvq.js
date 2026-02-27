import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{S as t,b as r,I as v,a as u}from"./hero-data-DJLJyFI5.js";import{E as o,R as f,S as p}from"./skill-categories-BKt7MNVS.js";const $=document.querySelector("#app");function k(i,s){return s.type==="P"?"passive":o.includes(i)?"debuff":f.includes(i)?"rogue":p.includes(i)?"buff":s.desc.toLowerCase().includes("gegner")?"debuff":"buff"}const a={debuff:[],buff:[],rogue:[],passive:[]};for(const[i,s]of Object.entries(t))a[k(i,s)].push([i,s]);function m([i,s]){const e=s.type==="A",l=e?"active":"passive",n=e?`${s.maxUses} ${s.maxUses!==1?"Einsätze":"Einsatz"}`:"∞",c=u[i];return`
    <div class="skill-slot">
      <div class="skill-badge ${l}">${s.type}</div>
      <div class="skill-info">
        <div class="skill-name">${s.name}${c?` <span class="skill-code">${c}</span>`:""}</div>
        <div class="skill-desc">${s.desc}</div>
        ${s.duration?`<div class="skill-duration">${s.duration} ${s.duration!==1?"Würfe":"Wurf"}</div>`:""}
      </div>
      <div class="skill-uses">
        <span class="skill-counter">${n}</span>
      </div>
    </div>`}function d(i,s){return s.length===0?"":`
    <div class="skills-section">
      <div class="skills-header">${i}</div>
      <div class="skills-list">${s.map(m).join("")}</div>
    </div>`}const S=Object.entries(r).map(([i,s])=>{const e=v[i];return`
    <div class="skill-slot">
      <div class="skill-badge passive">I</div>
      <div class="skill-info">
        <div class="skill-name">${s.name}${e?` <span class="skill-code">${e}</span>`:""}</div>
        <div class="skill-desc">${s.desc}</div>
      </div>
    </div>`}).join("");$.innerHTML=`
  <div class="character-card">
    <div class="character-name">Skill-Übersicht</div>
    ${d("Aktiv — Gegner-Debuffs",a.debuff)}
    ${d("Aktiv — Selbst-Buffs",a.buff)}
    ${d("Aktiv — Schurke",a.rogue)}
    ${d("Passive",a.passive)}
    <div class="skills-section">
      <div class="skills-header">Items</div>
      <div class="skills-list">${S}</div>
    </div>
  </div>`;
