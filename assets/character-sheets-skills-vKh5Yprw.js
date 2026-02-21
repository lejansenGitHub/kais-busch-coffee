import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{S as v}from"./skills-BCIO2OGx.js";import{a as r,I as o,S as p}from"./hero-data-BXE2rqB7.js";const $=document.querySelector("#app"),d=Object.entries(v),c=d.filter(([,i])=>i.type==="A"),m=d.filter(([,i])=>i.type==="P");function u([i,s]){const e=s.type==="A",t=e?"active":"passive",n=e?`${s.maxUses} use${s.maxUses!==1?"s":""}`:"∞",l=p[i];return`
    <div class="skill-slot">
      <div class="skill-badge ${t}">${s.type}</div>
      <div class="skill-info">
        <div class="skill-name">${s.name}${l?` <span class="skill-code">${l}</span>`:""}</div>
        <div class="skill-desc">${s.desc}</div>
        ${s.duration?`<div class="skill-duration">${s.duration} throw${s.duration!==1?"s":""}</div>`:""}
      </div>
      <div class="skill-uses">
        <span class="skill-counter">${n}</span>
      </div>
    </div>`}function a(i,s){return s.length===0?"":`
    <div class="skills-section">
      <div class="skills-header">${i}</div>
      <div class="skills-list">${s.map(u).join("")}</div>
    </div>`}const f=Object.entries(r).map(([i,s])=>{const e=o[i];return`
    <div class="skill-slot">
      <div class="skill-badge passive">I</div>
      <div class="skill-info">
        <div class="skill-name">${s.name}${e?` <span class="skill-code">${e}</span>`:""}</div>
        <div class="skill-desc">${s.desc}</div>
      </div>
    </div>`}).join("");$.innerHTML=`
  <div class="character-card">
    <div class="character-name">Skill Overview</div>
    ${a("Active — Enemy Debuffs",c.filter(([,i])=>i.desc.toLowerCase().includes("enemy")))}
    ${a("Active — Self Buffs",c.filter(([,i])=>!i.desc.toLowerCase().includes("enemy")))}
    ${a("Passive",m)}
    <div class="skills-section">
      <div class="skills-header">Items</div>
      <div class="skills-list">${f}</div>
    </div>
  </div>`;
