/* empty css              */const a={ingrid:{name:"Ingrid",title:"Die Hüterin der Vorratskammer",portrait:"🧔‍♀️",intro:"Eine alte Frau mit langem Gedächtnis und einer gut bestückten Küche. Sie spricht von der Vergangenheit mit einer Mischung aus Zuneigung und Verzweiflung.",quests:[{title:"Das Eis der Versöhnung",task:`Vor vielen Jahren haben sich junge Männer regelmäßig Joghurts mit Perlen aus meinem Kühlschrank und Aldi-Baguettes mit Salami aus unserem Vorrat genommen. Um Frieden mit der Vergangenheit zu schließen, brauche ich einen jungen Mann wie dich, der mir mein Lieblingseis bringt. Kannst du das Rätsel lösen, um die richtige Sorte herauszufinden?

<em>I grow in a shell upon the tree,
Squirrels hoard me greedily.
Crack me open, roast me fine —
In Nutella I truly shine.
What flavor ice cream must you bring?</em>`,criteria:["Das richtige Eis wurde gekauft und Ingrid gebracht"],rewards:[{type:"skill",name:"Freeze",code:"6287"}]}]},eva:{name:"Eva",title:"Die werdende Schwester",portrait:"🤰",intro:"Eva erwartet ihr erstes Kind. Jahrelang hat sie brav Getränke und Snacks zu ihrem Bruder und seinen wilden Freunden gebracht — jetzt sollte ihr mal jemand etwas bringen.",quests:[{title:"Eine ordentliche Tasse Tee",task:"Damals hat Eva unzählige Abende damit verbracht, Getränke zu ihrem Bruder und seinen Kumpels zu schleppen. Niemand hat je daran gedacht, sich zu revanchieren. Nun, die Zeiten haben sich geändert — Eva ist schwanger und könnte wirklich eine warme Tasse Tee gebrauchen. Kein Kaffee, kein Alkohol, kein Quatsch. Einfach ein guter, beruhigender Tee, der für sie und das Kleine sicher ist. Zeit, die Rollen zu tauschen, findest du nicht?",criteria:["Ein koffeinfreier Tee, geeignet für Schwangere, wurde gekauft und Eva gebracht"],rewards:[{type:"item",name:"Drinking Horn",code:"8037"}]}]},elena:{name:"Elena",title:"Die Gelehrte",portrait:"📚",intro:"Eine Sprach- und Kunstgelehrte, die Kinder unterrichtet. Elena kennt Sascha seit er jung war. Sie glaubt, dass wahre Stärke aus Verständnis kommt — und sie hat vor, das zu beweisen.",quests:[{title:"Die Sprachprüfung",task:`Elena ist bereit, ihr Wissen zu teilen, aber nur wenn du beweist, dass du sprachübergreifend denken kannst. Sie gibt dir drei englische Sätze, in denen jeweils ein deutsches Wort als Wortspiel versteckt ist. Löse alle drei und verdiene dir ihren Respekt.

<em>Riddle 1:
"She brought a GIFT to the party, but everyone avoided drinking it."
What German word is hidden here?</em>

<em>Riddle 2:
"Be KIND to the little ones — they're only children after all."
What German word is hidden here?</em>

<em>Riddle 3:
"She wanted to TAG along, but only during daylight."
What German word is hidden here?</em>`,criteria:["Alle drei deutschen Wörter wurden korrekt erraten und Elena gesagt"],rewards:[{type:"skill",name:"Insight",code:"7835"}]}]}},r=document.querySelector("#app"),s=r.dataset.character,n=a[s];n?r.innerHTML=`
    <div class="character-card">
      <div class="card-header">
        <div class="character-name">${n.name}</div>
      </div>

      <div class="quest-intro">
        <div class="quest-portrait">${n.portrait}</div>
        <div class="quest-intro-text">
          <div class="quest-title-line">${n.title}</div>
          <p>${n.intro}</p>
        </div>
      </div>

      ${n.quests.map((i,t)=>`
        <div class="quest-block">
          <div class="quest-number">Quest ${t+1}</div>
          <div class="quest-name">${i.title}</div>

          <div class="quest-section">
            <div class="quest-section-label">Aufgabe</div>
            <p class="quest-text">${i.task}</p>
          </div>

          <div class="quest-section">
            <div class="quest-section-label">Abnahmekriterien</div>
            <ul class="quest-criteria">
              ${i.criteria.map(e=>`<li>${e}</li>`).join("")}
            </ul>
          </div>

          <div class="quest-section">
            <div class="quest-section-label">Belohnungen</div>
            <div class="quest-rewards">
              ${i.rewards.map(e=>`
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
    </div>`:r.innerHTML="<p>Unbekannter Quest-Charakter.</p>";
