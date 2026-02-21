/* empty css              */const i={ingrid:{name:"Ingrid",title:"The Keeper of the Pantry",portrait:"🧔‍♀️",intro:"An old woman with a long memory and a well-stocked kitchen. She speaks of the past with a mix of fondness and exasperation.",quests:[{title:"The Ice Cream of Reconciliation",task:`Many years ago, a lot of young men regularly ate yoghurts with pearls from my fridge and Aldi baguettes with salami from our storage. To make peace with the past, I need a young man like you to bring me my favorite ice cream. Can you solve the riddle to find out the correct kind?

<em>I grow in a shell upon the tree,
Squirrels hoard me greedily.
Crack me open, roast me fine —
In Nutella I truly shine.
What flavor ice cream must you bring?</em>`,criteria:["The correct ice cream was bought and delivered to Ingrid"],rewards:[{type:"skill",name:"Freeze",code:"6287"}]}]},eva:{name:"Eva",title:"The Expecting Sister",portrait:"🤰",intro:"Eva is expecting her first child. For years she dutifully carried drinks and snacks to her brother and his rowdy friends — now, for once, someone ought to bring something to her.",quests:[{title:"A Proper Cup of Tea",task:"Back in the day, Eva spent countless evenings hauling beverages to her brother and his mates. Nobody ever thought to return the favor. Well, times have changed — Eva is pregnant and could really use a warm cup of tea. No coffee, no alcohol, no nonsense. Just a good, soothing tea that’s safe for her and the little one. Time to switch roles, wouldn’t you say?",criteria:["A caffeine-free tea suitable for pregnant women was bought and delivered to Eva"],rewards:[{type:"item",name:"Drinking Horn",code:"8037"}]}]},elena:{name:"Elena",title:"The Scholar",portrait:"📚",intro:"A scholar of languages and art who teaches children for a living. Elena has known Sascha since he was young. She believes that true strength comes from understanding — and she intends to prove it.",quests:[{title:"The Language Trial",task:`Elena is willing to share her knowledge, but only if you prove you can think across languages. She gives you three English sentences, each hiding a German word through a pun. Solve all three and earn her respect.

<em>Riddle 1:
"I saw a man KNOCKING on the door, but he was really just playing with his bones."
What German word is hidden here?</em>

<em>Riddle 2:
"The baker said: I FEEL like a loaf today."
What German word is hidden here?</em>

<em>Riddle 3:
"She wanted to TAG along, but only during daylight."
What German word is hidden here?</em>`,criteria:["All three German words were correctly guessed and spoken to Elena"],rewards:[{type:"skill",name:"Insight",code:"7835"}]}]}},s=document.querySelector("#app"),r=s.dataset.character,a=i[r];a?s.innerHTML=`
    <div class="character-card">
      <div class="card-header">
        <div class="character-name">${a.name}</div>
      </div>

      <div class="quest-intro">
        <div class="quest-portrait">${a.portrait}</div>
        <div class="quest-intro-text">
          <div class="quest-title-line">${a.title}</div>
          <p>${a.intro}</p>
        </div>
      </div>

      ${a.quests.map((t,n)=>`
        <div class="quest-block">
          <div class="quest-number">Quest ${n+1}</div>
          <div class="quest-name">${t.title}</div>

          <div class="quest-section">
            <div class="quest-section-label">Task</div>
            <p class="quest-text">${t.task}</p>
          </div>

          <div class="quest-section">
            <div class="quest-section-label">Acceptance Criteria</div>
            <ul class="quest-criteria">
              ${t.criteria.map(e=>`<li>${e}</li>`).join("")}
            </ul>
          </div>

          <div class="quest-section">
            <div class="quest-section-label">Rewards</div>
            <div class="quest-rewards">
              ${t.rewards.map(e=>`
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
    </div>`:s.innerHTML="<p>Unknown quest character.</p>";
