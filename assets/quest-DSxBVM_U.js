/* empty css              */const r={ingrid:{name:"Ingrid",title:"The Keeper of the Pantry",portrait:"🧔‍♀️",intro:"An old woman with a long memory and a well-stocked kitchen. She speaks of the past with a mix of fondness and exasperation.",quests:[{title:"The Ice Cream of Reconciliation",task:`Many years ago, a lot of young men regularly ate yoghurts with pearls from my fridge and Aldi baguettes with salami from our storage. To make peace with the past, I need a young man like you to bring me my favorite ice cream. Can you solve the riddle to find out the correct kind?

<em>I grow in a shell upon the tree,
Squirrels hoard me greedily.
Crack me open, roast me fine —
In Nutella I truly shine.
What flavor ice cream must you bring?</em>`,criteria:["The correct ice cream was bought and delivered to Ingrid"],rewards:[{type:"skill",name:"Freeze",code:"6287"}]}]},eva:{name:"Eva",title:"The Bladesmith",portrait:"⚒",intro:"A stout bladesmith who forges weapons in the old style. She respects strength and precision above all else.",quests:[{title:"Prove Your Aim",task:"Eva won’t forge for just anyone. She demands a demonstration of skill — hit the target with precision to earn her respect.",criteria:["Land 3 inner circle hits in a single fight","Win a duel using only 1 action per round"],rewards:[{type:"skill",name:"Sniper's Gambit",code:"4086"}]},{title:"Retrieve the Star-Iron Ore",task:"Eva knows of a Star-Iron deposit deep in the Ember Mines. Retrieve a chunk of ore from the mines, but beware the fire drakes that nest there.",criteria:["Win a duel against an opponent with more HP than you","Use at least 3 different skills during a single fight"],rewards:[{type:"skill",name:"Titan's Grip",code:"7908"}]},{title:"Temper the Blade",task:"The Star-Iron is ready. Eva needs you to keep the forge fires burning while she works — fend off the raiders who have been targeting the smithy.",criteria:["Win 3 duels total for Eva’s quest line"],rewards:[{type:"item",name:"Sword",code:"6724"}]}]}},i=document.querySelector("#app"),n=i.dataset.character,t=r[n];t?i.innerHTML=`
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
