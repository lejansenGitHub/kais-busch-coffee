import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{b as v,I as r,S as o,a as p}from"./hero-data-Z-D_VRqm.js";const $=document.querySelector("#app"),c=Object.entries(o),d=c.filter(([,i])=>i.type==="A"),u=c.filter(([,i])=>i.type==="P");function k([i,s]){const e=s.type==="A",t=e?"active":"passive",n=e?`${s.maxUses} ${s.maxUses!==1?"Einsätze":"Einsatz"}`:"∞",l=p[i];return`
    <div class="skill-slot">
      <div class="skill-badge ${t}">${s.type}</div>
      <div class="skill-info">
        <div class="skill-name">${s.name}${l?` <span class="skill-code">${l}</span>`:""}</div>
        <div class="skill-desc">${s.desc}</div>
        ${s.duration?`<div class="skill-duration">${s.duration} ${s.duration!==1?"Würfe":"Wurf"}</div>`:""}
      </div>
      <div class="skill-uses">
        <span class="skill-counter">${n}</span>
      </div>
    </div>`}function a(i,s){return s.length===0?"":`
    <div class="skills-section">
      <div class="skills-header">${i}</div>
      <div class="skills-list">${s.map(k).join("")}</div>
    </div>`}const m=Object.entries(v).map(([i,s])=>{const e=r[i];return`
    <div class="skill-slot">
      <div class="skill-badge passive">I</div>
      <div class="skill-info">
        <div class="skill-name">${s.name}${e?` <span class="skill-code">${e}</span>`:""}</div>
        <div class="skill-desc">${s.desc}</div>
      </div>
    </div>`}).join("");$.innerHTML=`
  <div class="character-card">
    <div class="character-name">Skill-Übersicht</div>
    ${a("Aktiv — Gegner",d.filter(([,i])=>i.desc.toLowerCase().includes("gegner")))}
    ${a("Aktiv — Selbst",d.filter(([,i])=>!i.desc.toLowerCase().includes("gegner")))}
    ${a("Passive",u)}
    <div class="skills-section">
      <div class="skills-header">Items</div>
      <div class="skills-list">${m}</div>
    </div>
  </div>`;
