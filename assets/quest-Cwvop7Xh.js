/* empty css              */const r={ingrid:{name:"Ingrid",title:"The Herbalist",portrait:"🌿",intro:"A weathered herbalist who tends the meadows beyond the village walls. She speaks little but watches everything.",quests:[{title:"Gather the Moonpetals",task:"Ingrid needs 5 Moonpetal flowers that only bloom at dusk. Venture to the eastern clearing and collect them before nightfall. Beware — the clearing is guarded by thorned creepers.",criteria:["Hit the inner circle at least once during a fight","Win a duel without using any skills"],rewards:[{type:"skill",name:"Iron Ward",code:"8174"},{type:"skill",name:"Advance",code:"6514"}]},{title:"Brew the Warding Tonic",task:"With the Moonpetals gathered, Ingrid can brew a Warding Tonic — but she also needs venom from a cave spider. Defeat the spider nest in the northern caves and bring back a vial of venom.",criteria:["Win a duel while below 10 HP at some point during the fight","Deal at least 8 damage in a single round"],rewards:[{type:"skill",name:"Fortress",code:"9014"},{type:"skill",name:"Last Stand",code:"5236"}]},{title:"Deliver to the Watchtower",task:"The Warding Tonic must be delivered to the sentinels at the northern watchtower before the next siege. Travel through the Ashwood and deliver it safely.",criteria:["Win 2 duels in a row without losing"],rewards:[{type:"item",name:"Belt",code:"3841"},{type:"item",name:"Pelt",code:"9263"}]}]},eva:{name:"Eva",title:"The Bladesmith",portrait:"⚒",intro:"A stout bladesmith who forges weapons in the old style. She respects strength and precision above all else.",quests:[{title:"Prove Your Aim",task:"Eva won’t forge for just anyone. She demands a demonstration of skill — hit the target with precision to earn her respect.",criteria:["Land 3 inner circle hits in a single fight","Win a duel using only 1 action per round"],rewards:[{type:"skill",name:"Sniper's Gambit",code:"4086"},{type:"skill",name:"Fine Sack",code:"7243"}]},{title:"Retrieve the Star-Iron Ore",task:"Eva knows of a Star-Iron deposit deep in the Ember Mines. Retrieve a chunk of ore from the mines, but beware the fire drakes that nest there.",criteria:["Win a duel against an opponent with more HP than you","Use at least 3 different skills during a single fight"],rewards:[{type:"skill",name:"Titan's Grip",code:"7908"},{type:"skill",name:"War Cry",code:"1952"}]},{title:"Temper the Blade",task:"The Star-Iron is ready. Eva needs you to keep the forge fires burning while she works — fend off the raiders who have been targeting the smithy.",criteria:["Win 3 duels total for Eva’s quest line"],rewards:[{type:"item",name:"Sword",code:"6724"},{type:"item",name:"Arm Protectors",code:"7152"}]}]}},i=document.querySelector("#app"),n=i.dataset.character,t=r[n];t?i.innerHTML=`
    <div class="character-card">
      <div class="card-header">
        <div class="character-name">${t.name}</div>
      </div>

      <div class="quest-intro">
        <div class="quest-portrait">${t.portrait}</div>
        <div class="quest-intro-text">
          <div class="quest-title-line">${t.title}</div>
          <p>${t.intro}</p>
        </div>
      </div>

      ${t.quests.map((a,s)=>`
        <div class="quest-block">
          <div class="quest-number">Quest ${s+1}</div>
          <div class="quest-name">${a.title}</div>

          <div class="quest-section">
            <div class="quest-section-label">Task</div>
            <p class="quest-text">${a.task}</p>
          </div>

          <div class="quest-section">
            <div class="quest-section-label">Acceptance Criteria</div>
            <ul class="quest-criteria">
              ${a.criteria.map(e=>`<li>${e}</li>`).join("")}
            </ul>
          </div>

          <div class="quest-section">
            <div class="quest-section-label">Rewards</div>
            <div class="quest-rewards">
              ${a.rewards.map(e=>`
                <div class="reward-row">
                  <span class="reward-type ${e.type}">${e.type==="skill"?"S":"I"}</span>
                  <span class="reward-name">${e.name}</span>
                  <span class="reward-code">${e.code}</span>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      `).join("")}
    </div>`:i.innerHTML="<p>Unknown quest character.</p>";
