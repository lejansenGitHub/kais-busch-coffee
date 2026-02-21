import"./modulepreload-polyfill-B5Qt9EMX.js";import{S as l}from"./skills-C6ifZiiC.js";import{S as o}from"./hero-data-Cf1XjC3Q.js";const v=document.querySelector("#app"),n=Object.entries(l),c=n.filter(([,e])=>e.type==="A"),u=n.filter(([,e])=>e.type==="P");function p([e,s]){const t=s.type==="A",d=t?"active":"passive",r=t?`${s.maxUses} use${s.maxUses!==1?"s":""}`:"∞",a=o[e];return`
    <div class="skill-slot">
      <div class="skill-badge ${d}">${s.type}</div>
      <div class="skill-info">
        <div class="skill-name">${s.name}${a?` <span class="skill-code">${a}</span>`:""}</div>
        <div class="skill-desc">${s.desc}</div>
        ${s.duration?`<div class="skill-duration">${s.duration} throw${s.duration!==1?"s":""}</div>`:""}
      </div>
      <div class="skill-uses">
        <span class="skill-counter">${r}</span>
      </div>
    </div>`}function i(e,s){return s.length===0?"":`
    <div class="skills-section">
      <div class="skills-header">${e}</div>
      <div class="skills-list">${s.map(p).join("")}</div>
    </div>`}v.innerHTML=`
  <div class="character-card">
    <div class="character-name">Skill Overview</div>
    ${i("Active — Enemy Debuffs",c.filter(([,e])=>e.desc.toLowerCase().includes("enemy")))}
    ${i("Active — Self Buffs",c.filter(([,e])=>!e.desc.toLowerCase().includes("enemy")))}
    ${i("Passive",u)}
  </div>`;
