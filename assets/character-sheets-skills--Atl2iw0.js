import"./modulepreload-polyfill-B5Qt9EMX.js";import{S as r}from"./skills-Bw_GagAK.js";const v=document.querySelector("#app"),c=Object.entries(r),a=c.filter(([,e])=>e.type==="A"),l=c.filter(([,e])=>e.type==="P");function o([e,s]){const t=s.type==="A",d=t?"active":"passive",n=t?`${s.maxUses} use${s.maxUses!==1?"s":""}`:"∞";return`
    <div class="skill-slot">
      <div class="skill-badge ${d}">${s.type}</div>
      <div class="skill-info">
        <div class="skill-name">${s.name}</div>
        <div class="skill-desc">${s.desc}</div>
        ${s.duration?`<div class="skill-duration">${s.duration} throw${s.duration!==1?"s":""}</div>`:""}
      </div>
      <div class="skill-uses">
        <span class="skill-counter">${n}</span>
      </div>
    </div>`}function i(e,s){return s.length===0?"":`
    <div class="skills-section">
      <div class="skills-header">${e}</div>
      <div class="skills-list">${s.map(o).join("")}</div>
    </div>`}v.innerHTML=`
  <div class="character-card">
    <div class="character-name">Skill Overview</div>
    ${i("Active — Enemy Debuffs",a.filter(([,e])=>e.desc.toLowerCase().includes("enemy")))}
    ${i("Active — Self Buffs",a.filter(([,e])=>!e.desc.toLowerCase().includes("enemy")))}
    ${i("Passive",l)}
  </div>`;
