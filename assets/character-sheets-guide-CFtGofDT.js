import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */const e=document.createElement("style");e.textContent=`
  .back-link {
    display: inline-block;
    margin-bottom: 16px;
    font-size: 13px;
    font-weight: 700;
    color: #7a6a4a;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .guide-section {
    margin-bottom: 28px;
  }
  .guide-section:last-child {
    margin-bottom: 0;
  }
  .section-title {
    font-size: 16px;
    font-weight: 900;
    color: #c9aa71;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 12px;
    text-shadow: 0 0 6px rgba(201, 170, 113, 0.25);
  }
  .section-subtitle {
    font-size: 13px;
    font-weight: 700;
    color: #a08a60;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 8px;
    margin-top: 16px;
  }
  .guide-text {
    font-family: Georgia, serif;
    font-size: 13px;
    color: #a08a60;
    line-height: 1.7;
    margin-bottom: 10px;
  }
  .guide-text:last-child {
    margin-bottom: 0;
  }
  .guide-text strong {
    color: #c9aa71;
  }
  .guide-divider {
    border: none;
    border-top: 1px solid #2a2010;
    margin: 24px 0;
  }

  /* Equipment cards */
  .equip-grid {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .equip-card {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 12px 14px;
    background: rgba(10, 8, 4, 0.5);
    border: 1px solid #3a2a1a;
    border-radius: 2px;
  }
  .equip-icon {
    font-size: 32px;
    line-height: 1;
    flex-shrink: 0;
    width: 44px;
    text-align: center;
  }
  .equip-info {
    flex: 1;
  }
  .equip-name {
    font-size: 14px;
    font-weight: 700;
    color: #c9aa71;
    margin-bottom: 2px;
  }
  .equip-desc {
    font-family: Georgia, serif;
    font-size: 12px;
    color: #7a6a4a;
    line-height: 1.5;
  }

  /* Target diagram */
  .target-diagram {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
  }
  .target-labels {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 14px;
    width: 100%;
  }
  .target-label-row {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 6px 10px;
    background: rgba(10, 8, 4, 0.5);
    border: 1px solid #2a2010;
    border-radius: 2px;
  }
  .target-color {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .target-color.outer { background: #27ae60; }
  .target-color.middle { background: #f39c12; }
  .target-color.inner { background: #e74c3c; }
  .target-zone-name {
    font-size: 13px;
    font-weight: 700;
    color: #c9aa71;
    flex: 1;
  }
  .target-zone-detail {
    font-family: Georgia, serif;
    font-size: 12px;
    color: #7a6a4a;
    text-align: right;
  }

  /* Bean bag quality */
  .bag-grid {
    display: flex;
    gap: 8px;
    justify-content: center;
  }
  .bag-card {
    flex: 1;
    padding: 12px 8px;
    background: rgba(10, 8, 4, 0.5);
    border: 1px solid #3a2a1a;
    border-radius: 2px;
    text-align: center;
  }
  .bag-card.highlight {
    border-color: #5a4a2a;
    background: rgba(20, 16, 8, 0.6);
  }
  .bag-icon {
    font-size: 28px;
    margin-bottom: 6px;
  }
  .bag-size {
    font-size: 11px;
    font-weight: 700;
    color: #c9aa71;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 2px;
  }
  .bag-label {
    font-family: Georgia, serif;
    font-size: 11px;
    color: #7a6a4a;
    line-height: 1.4;
  }
  .bag-stars {
    font-size: 11px;
    color: #f39c12;
    margin-top: 4px;
  }

  /* Round flow */
  .flow-steps {
    display: flex;
    flex-direction: column;
    gap: 8px;
    counter-reset: step;
  }
  .flow-step {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    padding: 10px 12px;
    background: rgba(10, 8, 4, 0.5);
    border: 1px solid #2a2010;
    border-radius: 2px;
    counter-increment: step;
  }
  .flow-num {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: #1a1408;
    border: 2px solid #5a4a2a;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 900;
    color: #c9aa71;
    flex-shrink: 0;
  }
  .flow-content {
    flex: 1;
  }
  .flow-title {
    font-size: 13px;
    font-weight: 700;
    color: #c9aa71;
    margin-bottom: 2px;
  }
  .flow-desc {
    font-family: Georgia, serif;
    font-size: 12px;
    color: #7a6a4a;
    line-height: 1.5;
  }

  /* Skill examples */
  .skill-example {
    padding: 10px 12px;
    background: rgba(10, 8, 4, 0.5);
    border: 1px solid #2a2010;
    border-radius: 2px;
    margin-bottom: 8px;
  }
  .skill-example:last-child {
    margin-bottom: 0;
  }
  .skill-ex-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;
  }
  .skill-ex-badge {
    width: 20px;
    height: 20px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 900;
    flex-shrink: 0;
  }
  .skill-ex-badge.active {
    background: linear-gradient(180deg, #8b1a1a, #5a1010);
    color: #e0d0a0;
  }
  .skill-ex-badge.passive {
    background: linear-gradient(180deg, #1a3a1a, #0f200f);
    color: #4ade80;
  }
  .skill-ex-name {
    font-size: 13px;
    font-weight: 700;
    color: #c9aa71;
  }
  .skill-ex-desc {
    font-family: Georgia, serif;
    font-size: 12px;
    color: #7a6a4a;
    line-height: 1.5;
  }
  .skill-ex-scenario {
    font-family: Georgia, serif;
    font-size: 12px;
    color: #a08a60;
    font-style: italic;
    margin-top: 6px;
    padding-top: 6px;
    border-top: 1px solid #1a1408;
    line-height: 1.5;
  }

  /* Distance diagram */
  .distance-diagram {
    padding: 16px 12px;
    background: rgba(10, 8, 4, 0.5);
    border: 1px solid #2a2010;
    border-radius: 2px;
    text-align: center;
  }
  .distance-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin-bottom: 8px;
    font-size: 12px;
    color: #7a6a4a;
  }
  .distance-icon {
    font-size: 24px;
  }
  .distance-line {
    flex: 1;
    max-width: 120px;
    height: 2px;
    background: repeating-linear-gradient(90deg, #5a4a2a 0px, #5a4a2a 6px, transparent 6px, transparent 10px);
  }
  .distance-text {
    font-size: 14px;
    font-weight: 900;
    color: #c9aa71;
  }
`;document.head.appendChild(e);const i=document.getElementById("app");i.innerHTML=`
  <a href="../" class="back-link">← Zurück</a>
  <div class="character-card">
    <div class="card-header">
      <div class="character-name">Spielanleitung</div>
    </div>

    <!-- INTRO -->
    <div class="guide-section">
      <div class="guide-text">Willkommen bei <strong>Lord Pattens Abenteuer</strong> — einem Outdoor-Wurfspiel, bei dem du mit Sandsäcken auf eine Zielscheibe wirfst, Quests erfüllst und Gegner besiegst. Diese Anleitung erklärt dir alles, was du wissen musst.</div>
    </div>

    <hr class="guide-divider">

    <!-- EQUIPMENT -->
    <div class="guide-section">
      <div class="section-title">1. Ausrüstung</div>
      <div class="equip-grid">
        <div class="equip-card">
          <div class="equip-icon">🎯</div>
          <div class="equip-info">
            <div class="equip-name">Sandsäcke (3 Größen)</div>
            <div class="equip-desc">Wurfkissen in drei Größen. Du wirfst sie auf die Zielscheibe. Normalerweise nutzt du den großen — Skills können das ändern.</div>
          </div>
        </div>
        <div class="equip-card">
          <div class="equip-icon">🎨</div>
          <div class="equip-info">
            <div class="equip-name">Straßenkreide</div>
            <div class="equip-desc">Mit der Kreide wird die Zielscheibe auf den Boden gemalt — drei Kreise in verschiedenen Größen. Die Kreide wird auch für manche Skills benötigt.</div>
          </div>
        </div>
        <div class="equip-card">
          <div class="equip-icon">🎲</div>
          <div class="equip-info">
            <div class="equip-name">Aufblasbare Würfel</div>
            <div class="equip-desc">Große Schaumstoffwürfel (30 cm). Werden gewürfelt, um die Zugreihenfolge zu bestimmen: Der höhere Wurf beginnt.</div>
          </div>
        </div>
      </div>
    </div>

    <hr class="guide-divider">

    <!-- TARGET -->
    <div class="guide-section">
      <div class="section-title">2. Die Zielscheibe</div>
      <div class="guide-text">Male mit Kreide <strong>drei konzentrische Kreise</strong> auf den Boden. Von außen nach innen wird der Schaden höher:</div>

      <div class="target-diagram">
        <svg viewBox="0 0 220 220" width="200" height="200">
          <circle cx="110" cy="110" r="100" fill="#0f0d08" stroke="#27ae60" stroke-width="3" />
          <text x="110" y="30" text-anchor="middle" fill="#27ae60" font-size="11" font-weight="bold" font-family="Cinzel, serif">100 cm</text>
          <circle cx="110" cy="110" r="65" fill="#151008" stroke="#f39c12" stroke-width="3" />
          <text x="110" y="60" text-anchor="middle" fill="#f39c12" font-size="11" font-weight="bold" font-family="Cinzel, serif">50 cm</text>
          <circle cx="110" cy="110" r="28" fill="#1a120a" stroke="#e74c3c" stroke-width="3" />
          <text x="110" y="100" text-anchor="middle" fill="#e74c3c" font-size="11" font-weight="bold" font-family="Cinzel, serif">20 cm</text>
        </svg>
      </div>

      <div class="target-labels">
        <div class="target-label-row">
          <div class="target-color outer"></div>
          <div class="target-zone-name">Außenkreis</div>
          <div class="target-zone-detail">Ø 100 cm — geringer Schaden</div>
        </div>
        <div class="target-label-row">
          <div class="target-color middle"></div>
          <div class="target-zone-name">Mittelkreis</div>
          <div class="target-zone-detail">Ø 50 cm — mittlerer Schaden</div>
        </div>
        <div class="target-label-row">
          <div class="target-color inner"></div>
          <div class="target-zone-name">Innenkreis</div>
          <div class="target-zone-detail">Ø 20 cm — hoher Schaden</div>
        </div>
      </div>

      <div class="guide-text" style="margin-top: 12px;"><strong>Wichtig:</strong> Wenn ein Sandsack den Rand eines inneren Kreises auch nur leicht berührt, zählt er als diese Zone. Immer <strong>direkt von oben</strong> beurteilen. Landet er außerhalb der Zielscheibe, ist es ein Fehlwurf — kein Schaden.</div>
    </div>

    <hr class="guide-divider">

    <!-- DISTANCE -->
    <div class="guide-section">
      <div class="section-title">3. Entfernung</div>
      <div class="distance-diagram">
        <div class="distance-visual">
          <span class="distance-icon">🧍</span>
          <div class="distance-line"></div>
          <span class="distance-text">5,5 m</span>
          <div class="distance-line"></div>
          <span class="distance-icon">🎯</span>
        </div>
        <div class="guide-text">Beide Spieler werfen von <strong>5,5 Metern Entfernung</strong> auf die Zielscheibe.</div>
      </div>
    </div>

    <hr class="guide-divider">

    <!-- BEAN BAG QUALITY -->
    <div class="guide-section">
      <div class="section-title">4. Sandsack-Qualitäten</div>
      <div class="guide-text">Es gibt <strong>drei Größen</strong> von Sandsäcken. Die mittleren sind am besten — schwerer und liegen präzise, ohne zu verspringen:</div>

      <div class="bag-grid">
        <div class="bag-card">
          <div class="bag-icon">▪️</div>
          <div class="bag-size">Klein</div>
          <div class="bag-label">5×5 cm<br>Zu leicht, verspringt</div>
          <div class="bag-stars">★</div>
        </div>
        <div class="bag-card highlight">
          <div class="bag-icon">◼️</div>
          <div class="bag-size">Mittel</div>
          <div class="bag-label">7×7 cm<br>Schwer, bleibt liegen</div>
          <div class="bag-stars">★★★</div>
        </div>
        <div class="bag-card">
          <div class="bag-icon">⬛</div>
          <div class="bag-size">Groß</div>
          <div class="bag-label">10×10 cm<br>Standard</div>
          <div class="bag-stars">★★</div>
        </div>
      </div>

      <div class="guide-text" style="margin-top: 12px;">Normalerweise wirfst du mit dem <strong>großen</strong> Sandsack (Standard). Manche Skills ändern die Qualität — der mittlere ist eine Verbesserung, der kleine eine Bestrafung.</div>
    </div>

    <hr class="guide-divider">

    <!-- ROUND FLOW -->
    <div class="guide-section">
      <div class="section-title">5. Spielablauf</div>
      <div class="guide-text">Ein Kampf läuft <strong>rundenbasiert</strong> ab. Du und dein Gegner wechseln euch ab:</div>

      <div class="flow-steps">
        <div class="flow-step">
          <div class="flow-num">1</div>
          <div class="flow-content">
            <div class="flow-title">Würfeln</div>
            <div class="flow-desc">Beide Spieler würfeln mit dem aufblasbaren Würfel. Der höhere Wurf beginnt.</div>
          </div>
        </div>
        <div class="flow-step">
          <div class="flow-num">2</div>
          <div class="flow-content">
            <div class="flow-title">Aktionen nutzen</div>
            <div class="flow-desc">Jeder Spieler hat eine bestimmte Anzahl <strong>Aktionen pro Runde</strong> (anfangs 1). Eine Aktion ist entweder ein <strong>Wurf</strong> oder das <strong>Einsetzen eines aktiven Skills</strong>.</div>
          </div>
        </div>
        <div class="flow-step">
          <div class="flow-num">3</div>
          <div class="flow-content">
            <div class="flow-title">Sandsack werfen</div>
            <div class="flow-desc">Wirf deinen Sandsack von 5,5 m auf die Zielscheibe. Wo er landet, bestimmt den Schaden. Der Schaden wird von den HP des Gegners abgezogen.</div>
          </div>
        </div>
        <div class="flow-step">
          <div class="flow-num">4</div>
          <div class="flow-content">
            <div class="flow-title">Gegner ist dran</div>
            <div class="flow-desc">Jetzt macht dein Gegner dasselbe — wirft und/oder nutzt Skills.</div>
          </div>
        </div>
        <div class="flow-step">
          <div class="flow-num">5</div>
          <div class="flow-content">
            <div class="flow-title">Wiederholen</div>
            <div class="flow-desc">Abwechselnd weitermachen, bis die <strong>HP</strong> eines Spielers auf <strong>0</strong> fallen. Wer keine HP mehr hat, verliert den Kampf.</div>
          </div>
        </div>
      </div>
    </div>

    <hr class="guide-divider">

    <!-- SKILLS -->
    <div class="guide-section">
      <div class="section-title">6. Skills</div>
      <div class="guide-text">Jeder Charakter hat bis zu <strong>3 Skill-Slots</strong>. Es gibt zwei Typen:</div>

      <div class="guide-text"><strong>Aktive Skills (A)</strong> — Kosten 1 Aktion. Haben begrenzte Einsätze. Du musst dich entscheiden: Werfen oder Skill einsetzen?</div>
      <div class="guide-text"><strong>Passive Skills (P)</strong> — Immer aktiv. Kosten keine Aktion und wirken dauerhaft.</div>

      <div class="section-subtitle">Beispiele: Aktive Skills</div>

      <div class="skill-example">
        <div class="skill-ex-header">
          <div class="skill-ex-badge active">A</div>
          <div class="skill-ex-name">Heavy Hands</div>
        </div>
        <div class="skill-ex-desc">Gegner muss <strong>Ofenhandschuhe</strong> tragen. Dauer: 3 Würfe.</div>
        <div class="skill-ex-scenario">💡 Szenario: Dein Gegner hat gerade gut getroffen. Du setzt Heavy Hands ein — jetzt muss er die nächsten 3 Würfe mit Ofenhandschuhen werfen. Seine Präzision sinkt drastisch!</div>
      </div>

      <div class="skill-example">
        <div class="skill-ex-header">
          <div class="skill-ex-badge active">A</div>
          <div class="skill-ex-name">Blind Fury</div>
        </div>
        <div class="skill-ex-desc">Gegner muss mit <strong>geschlossenen Augen</strong> werfen. Dauer: 2 Würfe.</div>
        <div class="skill-ex-scenario">💡 Szenario: Ein kritischer Moment — dein Gegner hat noch 8 HP. Du setzt Blind Fury ein. Er muss die nächsten 2 Würfe blind machen — seine Chancen, dich zu treffen, werden minimal.</div>
      </div>

      <div class="skill-example">
        <div class="skill-ex-header">
          <div class="skill-ex-badge active">A</div>
          <div class="skill-ex-name">War Cry</div>
        </div>
        <div class="skill-ex-desc">Du erhältst <strong>+2 Aktionen</strong> in der nächsten Runde.</div>
        <div class="skill-ex-scenario">💡 Szenario: Du hast normalerweise 1 Aktion. Mit War Cry hast du nächste Runde 3 Aktionen — das heißt 3 Würfe hintereinander! Perfekt für einen Burst-Angriff.</div>
      </div>

      <div class="skill-example">
        <div class="skill-ex-header">
          <div class="skill-ex-badge active">A</div>
          <div class="skill-ex-name">Advance</div>
        </div>
        <div class="skill-ex-desc">Du darfst <strong>einen Schritt nach vorne</strong> machen. Dauer: 2 Würfe.</div>
        <div class="skill-ex-scenario">💡 Szenario: Du stehst normalerweise auf 5,5 m. Mit Advance machst du einen großen Schritt nach vorne — du bist jetzt näher dran und triffst leichter. Nach 2 Würfen gehst du zurück.</div>
      </div>

      <div class="section-subtitle">Beispiele: Passive Skills</div>

      <div class="skill-example">
        <div class="skill-ex-header">
          <div class="skill-ex-badge passive">P</div>
          <div class="skill-ex-name">Gold Reserve</div>
        </div>
        <div class="skill-ex-desc">Außenkreis-Treffer des Gegners verursachen <strong>keinen Schaden</strong>.</div>
        <div class="skill-ex-scenario">💡 Szenario: Dein Gegner trifft den Außenkreis? Pech gehabt — 0 Schaden. Er muss mindestens den Mittelkreis treffen, um dir wehzutun. Das macht dich extrem widerstandsfähig.</div>
      </div>

      <div class="skill-example">
        <div class="skill-ex-header">
          <div class="skill-ex-badge passive">P</div>
          <div class="skill-ex-name">Last Stand</div>
        </div>
        <div class="skill-ex-desc">Unter 5 HP verursachen alle deine Treffer <strong>+2 Bonusschaden</strong>.</div>
        <div class="skill-ex-scenario">💡 Szenario: Du hast nur noch 3 HP — aber jetzt zählt jeder deiner Würfe 2 Schaden mehr! Ein Innentreffer, der normalerweise 5 macht, macht jetzt 7. Gefährlich für deinen Gegner!</div>
      </div>
    </div>

    <hr class="guide-divider">

    <!-- DAMAGE & HP -->
    <div class="guide-section">
      <div class="section-title">7. Schaden & HP</div>
      <div class="guide-text">Jeder Charakter hat einen <strong>Schadenswert pro Zone</strong>, der auf seiner Karte steht. Beispiel für einen Level-1-Charakter:</div>

      <div class="target-labels">
        <div class="target-label-row">
          <div class="target-color outer"></div>
          <div class="target-zone-name">Außen</div>
          <div class="target-zone-detail">1 Schaden</div>
        </div>
        <div class="target-label-row">
          <div class="target-color middle"></div>
          <div class="target-zone-name">Mitte</div>
          <div class="target-zone-detail">3 Schaden</div>
        </div>
        <div class="target-label-row">
          <div class="target-color inner"></div>
          <div class="target-zone-name">Innen</div>
          <div class="target-zone-detail">5 Schaden</div>
        </div>
      </div>

      <div class="guide-text" style="margin-top: 12px;"><strong>HP (Lebenspunkte)</strong> zeigen, wie viel Schaden ein Charakter noch aushalten kann. Fallen die HP auf 0, ist der Kampf vorbei.</div>
      <div class="guide-text">Lord Patten startet mit <strong>20 HP</strong> und kann durch Level-Ups mehr bekommen. Gegner haben je nach Stärke zwischen 15 und 55 HP.</div>
    </div>

    <hr class="guide-divider">

    <!-- LEVEL UP & REWARDS -->
    <div class="guide-section">
      <div class="section-title">8. Belohnungen & Level Up</div>
      <div class="guide-text">Nach jedem besiegten Gegner erhältst du einen <strong>Belohnungs-Code</strong>. Diesen gibst du auf Lord Pattens Charakterseite ein, um einen neuen Skill oder ein Item freizuschalten.</div>
      <div class="guide-text">Zusätzlich kannst du nach jedem Kampf ein <strong>Level Up</strong> machen und wählen: Mehr HP, mehr Schaden im Außen-/Mittel-/Innenkreis. Alle 5 Level bekommst du +1 Aktion und +1 Skill-Slot.</div>
      <div class="guide-text">Auch <strong>Quests</strong> (Aufgaben von NPCs) belohnen dich mit Skills oder Items. Die Quest-Seite zeigt die Aufgabe, die Kriterien und den Code.</div>
    </div>

    <hr class="guide-divider">

    <!-- RETRY -->
    <div class="guide-section">
      <div class="section-title">9. Niederlagen & Wiederholung</div>
      <div class="guide-text"><strong>Kampf verloren?</strong> Kein Problem — trinke ein Bier, um dich zu heilen, und fordere deinen Gegner erneut heraus. Du kannst so oft antreten, wie du möchtest.</div>
      <div class="guide-text"><strong>Quest nicht geschafft?</strong> Warte 5 Minuten, dann darfst du es erneut versuchen.</div>
      <div class="guide-text">Lord Patten ist dazu bestimmt zu gewinnen — es ist nur eine Frage der Zeit!</div>
    </div>

  </div>
`;
