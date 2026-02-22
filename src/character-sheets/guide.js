import './style.css';

const style = document.createElement('style');
style.textContent = `
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
`;
document.head.appendChild(style);

const app = document.getElementById('app');
app.innerHTML = `
  <a href="../" class="back-link">\u2190 Zur\u00fcck</a>
  <div class="character-card">
    <div class="card-header">
      <div class="character-name">Spielanleitung</div>
    </div>

    <!-- INTRO -->
    <div class="guide-section">
      <div class="guide-text">Willkommen bei <strong>Lord Pattens Abenteuer</strong> \u2014 einem Outdoor-Wurfspiel, bei dem du mit Sands\u00e4cken auf eine Zielscheibe wirfst, Quests erf\u00fcllst und Gegner besiegst. Diese Anleitung erkl\u00e4rt dir alles, was du wissen musst.</div>
    </div>

    <hr class="guide-divider">

    <!-- EQUIPMENT -->
    <div class="guide-section">
      <div class="section-title">1. Ausr\u00fcstung</div>
      <div class="equip-grid">
        <div class="equip-card">
          <div class="equip-icon">\u{1F3AF}</div>
          <div class="equip-info">
            <div class="equip-name">Sands\u00e4cke (3 Gr\u00f6\u00dfen)</div>
            <div class="equip-desc">Wurfkissen in drei Gr\u00f6\u00dfen. Du wirfst sie auf die Zielscheibe. Normalerweise nutzt du den gro\u00dfen \u2014 Skills k\u00f6nnen das \u00e4ndern.</div>
          </div>
        </div>
        <div class="equip-card">
          <div class="equip-icon">\u{1F3A8}</div>
          <div class="equip-info">
            <div class="equip-name">Stra\u00dfenkreide</div>
            <div class="equip-desc">Mit der Kreide wird die Zielscheibe auf den Boden gemalt \u2014 drei Kreise in verschiedenen Gr\u00f6\u00dfen. Die Kreide wird auch f\u00fcr manche Skills ben\u00f6tigt.</div>
          </div>
        </div>
        <div class="equip-card">
          <div class="equip-icon">\u{1F3B2}</div>
          <div class="equip-info">
            <div class="equip-name">Aufblasbare W\u00fcrfel</div>
            <div class="equip-desc">Gro\u00dfe Schaumstoffw\u00fcrfel (30 cm). Werden gew\u00fcrfelt, um die Zugreihenfolge zu bestimmen: Der h\u00f6here Wurf beginnt.</div>
          </div>
        </div>
      </div>
    </div>

    <hr class="guide-divider">

    <!-- TARGET -->
    <div class="guide-section">
      <div class="section-title">2. Die Zielscheibe</div>
      <div class="guide-text">Male mit Kreide <strong>drei konzentrische Kreise</strong> auf den Boden. Von au\u00dfen nach innen wird der Schaden h\u00f6her:</div>

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
          <div class="target-zone-name">Au\u00dfenkreis</div>
          <div class="target-zone-detail">\u00d8 100 cm \u2014 geringer Schaden</div>
        </div>
        <div class="target-label-row">
          <div class="target-color middle"></div>
          <div class="target-zone-name">Mittelkreis</div>
          <div class="target-zone-detail">\u00d8 50 cm \u2014 mittlerer Schaden</div>
        </div>
        <div class="target-label-row">
          <div class="target-color inner"></div>
          <div class="target-zone-name">Innenkreis</div>
          <div class="target-zone-detail">\u00d8 20 cm \u2014 hoher Schaden</div>
        </div>
      </div>

      <div class="guide-text" style="margin-top: 12px;"><strong>Wichtig:</strong> Wenn ein Sandsack den Rand eines inneren Kreises auch nur leicht ber\u00fchrt, z\u00e4hlt er als diese Zone. Immer <strong>direkt von oben</strong> beurteilen. Landet er au\u00dferhalb der Zielscheibe, ist es ein Fehlwurf \u2014 kein Schaden.</div>
    </div>

    <hr class="guide-divider">

    <!-- DISTANCE -->
    <div class="guide-section">
      <div class="section-title">3. Entfernung</div>
      <div class="distance-diagram">
        <div class="distance-visual">
          <span class="distance-icon">\u{1F9CD}</span>
          <div class="distance-line"></div>
          <span class="distance-text">5,5 m</span>
          <div class="distance-line"></div>
          <span class="distance-icon">\u{1F3AF}</span>
        </div>
        <div class="guide-text">Beide Spieler werfen von <strong>5,5 Metern Entfernung</strong> auf die Zielscheibe.</div>
      </div>
    </div>

    <hr class="guide-divider">

    <!-- BEAN BAG QUALITY -->
    <div class="guide-section">
      <div class="section-title">4. Sandsack-Qualit\u00e4ten</div>
      <div class="guide-text">Es gibt <strong>drei Gr\u00f6\u00dfen</strong> von Sands\u00e4cken. Die mittleren sind am besten \u2014 schwerer und liegen pr\u00e4zise, ohne zu verspringen:</div>

      <div class="bag-grid">
        <div class="bag-card">
          <div class="bag-icon">\u25AA\uFE0F</div>
          <div class="bag-size">Klein</div>
          <div class="bag-label">5\u00d75 cm<br>Zu leicht, verspringt</div>
          <div class="bag-stars">\u2605</div>
        </div>
        <div class="bag-card highlight">
          <div class="bag-icon">\u25FC\uFE0F</div>
          <div class="bag-size">Mittel</div>
          <div class="bag-label">7\u00d77 cm<br>Schwer, bleibt liegen</div>
          <div class="bag-stars">\u2605\u2605\u2605</div>
        </div>
        <div class="bag-card">
          <div class="bag-icon">\u2B1B</div>
          <div class="bag-size">Gro\u00df</div>
          <div class="bag-label">10\u00d710 cm<br>Standard</div>
          <div class="bag-stars">\u2605\u2605</div>
        </div>
      </div>

      <div class="guide-text" style="margin-top: 12px;">Normalerweise wirfst du mit dem <strong>gro\u00dfen</strong> Sandsack (Standard). Manche Skills \u00e4ndern die Qualit\u00e4t \u2014 der mittlere ist eine Verbesserung, der kleine eine Bestrafung.</div>
    </div>

    <hr class="guide-divider">

    <!-- ROUND FLOW -->
    <div class="guide-section">
      <div class="section-title">5. Spielablauf</div>
      <div class="guide-text">Ein Kampf l\u00e4uft <strong>rundenbasiert</strong> ab. Du und dein Gegner wechseln euch ab:</div>

      <div class="flow-steps">
        <div class="flow-step">
          <div class="flow-num">1</div>
          <div class="flow-content">
            <div class="flow-title">W\u00fcrfeln</div>
            <div class="flow-desc">Beide Spieler w\u00fcrfeln mit dem aufblasbaren W\u00fcrfel. Der h\u00f6here Wurf beginnt.</div>
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
            <div class="flow-desc">Jetzt macht dein Gegner dasselbe \u2014 wirft und/oder nutzt Skills.</div>
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

      <div class="guide-text"><strong>Aktive Skills (A)</strong> \u2014 Kosten 1 Aktion. Haben begrenzte Eins\u00e4tze. Du musst dich entscheiden: Werfen oder Skill einsetzen?</div>
      <div class="guide-text"><strong>Passive Skills (P)</strong> \u2014 Immer aktiv. Kosten keine Aktion und wirken dauerhaft.</div>

      <div class="section-subtitle">Beispiele: Aktive Skills</div>

      <div class="skill-example">
        <div class="skill-ex-header">
          <div class="skill-ex-badge active">A</div>
          <div class="skill-ex-name">Heavy Hands</div>
        </div>
        <div class="skill-ex-desc">Gegner muss <strong>Ofenhandschuhe</strong> tragen. Dauer: 3 W\u00fcrfe.</div>
        <div class="skill-ex-scenario">\u{1F4A1} Szenario: Dein Gegner hat gerade gut getroffen. Du setzt Heavy Hands ein \u2014 jetzt muss er die n\u00e4chsten 3 W\u00fcrfe mit Ofenhandschuhen werfen. Seine Pr\u00e4zision sinkt drastisch!</div>
      </div>

      <div class="skill-example">
        <div class="skill-ex-header">
          <div class="skill-ex-badge active">A</div>
          <div class="skill-ex-name">Blind Fury</div>
        </div>
        <div class="skill-ex-desc">Gegner muss mit <strong>geschlossenen Augen</strong> werfen. Dauer: 2 W\u00fcrfe.</div>
        <div class="skill-ex-scenario">\u{1F4A1} Szenario: Ein kritischer Moment \u2014 dein Gegner hat noch 8 HP. Du setzt Blind Fury ein. Er muss die n\u00e4chsten 2 W\u00fcrfe blind machen \u2014 seine Chancen, dich zu treffen, werden minimal.</div>
      </div>

      <div class="skill-example">
        <div class="skill-ex-header">
          <div class="skill-ex-badge active">A</div>
          <div class="skill-ex-name">War Cry</div>
        </div>
        <div class="skill-ex-desc">Du erh\u00e4ltst <strong>+2 Aktionen</strong> in der n\u00e4chsten Runde.</div>
        <div class="skill-ex-scenario">\u{1F4A1} Szenario: Du hast normalerweise 1 Aktion. Mit War Cry hast du n\u00e4chste Runde 3 Aktionen \u2014 das hei\u00dft 3 W\u00fcrfe hintereinander! Perfekt f\u00fcr einen Burst-Angriff.</div>
      </div>

      <div class="skill-example">
        <div class="skill-ex-header">
          <div class="skill-ex-badge active">A</div>
          <div class="skill-ex-name">Advance</div>
        </div>
        <div class="skill-ex-desc">Du darfst <strong>einen Schritt nach vorne</strong> machen. Dauer: 2 W\u00fcrfe.</div>
        <div class="skill-ex-scenario">\u{1F4A1} Szenario: Du stehst normalerweise auf 5,5 m. Mit Advance machst du einen gro\u00dfen Schritt nach vorne \u2014 du bist jetzt n\u00e4her dran und triffst leichter. Nach 2 W\u00fcrfen gehst du zur\u00fcck.</div>
      </div>

      <div class="section-subtitle">Beispiele: Passive Skills</div>

      <div class="skill-example">
        <div class="skill-ex-header">
          <div class="skill-ex-badge passive">P</div>
          <div class="skill-ex-name">Gold Reserve</div>
        </div>
        <div class="skill-ex-desc">Au\u00dfenkreis-Treffer des Gegners verursachen <strong>keinen Schaden</strong>.</div>
        <div class="skill-ex-scenario">\u{1F4A1} Szenario: Dein Gegner trifft den Au\u00dfenkreis? Pech gehabt \u2014 0 Schaden. Er muss mindestens den Mittelkreis treffen, um dir wehzutun. Das macht dich extrem widerstandsf\u00e4hig.</div>
      </div>

      <div class="skill-example">
        <div class="skill-ex-header">
          <div class="skill-ex-badge passive">P</div>
          <div class="skill-ex-name">Last Stand</div>
        </div>
        <div class="skill-ex-desc">Unter 5 HP verursachen alle deine Treffer <strong>+2 Bonusschaden</strong>.</div>
        <div class="skill-ex-scenario">\u{1F4A1} Szenario: Du hast nur noch 3 HP \u2014 aber jetzt z\u00e4hlt jeder deiner W\u00fcrfe 2 Schaden mehr! Ein Innentreffer, der normalerweise 5 macht, macht jetzt 7. Gef\u00e4hrlich f\u00fcr deinen Gegner!</div>
      </div>
    </div>

    <hr class="guide-divider">

    <!-- DAMAGE & HP -->
    <div class="guide-section">
      <div class="section-title">7. Schaden & HP</div>
      <div class="guide-text">Jeder Charakter hat einen <strong>Schadenswert pro Zone</strong>, der auf seiner Karte steht. Beispiel f\u00fcr einen Level-1-Charakter:</div>

      <div class="target-labels">
        <div class="target-label-row">
          <div class="target-color outer"></div>
          <div class="target-zone-name">Au\u00dfen</div>
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
      <div class="guide-text">Lord Patten startet mit <strong>20 HP</strong> und kann durch Level-Ups mehr bekommen. Gegner haben je nach St\u00e4rke zwischen 15 und 55 HP.</div>
    </div>

    <hr class="guide-divider">

    <!-- LEVEL UP & REWARDS -->
    <div class="guide-section">
      <div class="section-title">8. Belohnungen & Level Up</div>
      <div class="guide-text">Nach jedem besiegten Gegner erh\u00e4ltst du einen <strong>Belohnungs-Code</strong>. Diesen gibst du auf Lord Pattens Charakterseite ein, um einen neuen Skill oder ein Item freizuschalten.</div>
      <div class="guide-text">Zus\u00e4tzlich kannst du nach jedem Kampf ein <strong>Level Up</strong> machen und w\u00e4hlen: Mehr HP, mehr Schaden im Au\u00dfen-/Mittel-/Innenkreis. Alle 5 Level bekommst du +1 Aktion und +1 Skill-Slot.</div>
      <div class="guide-text">Auch <strong>Quests</strong> (Aufgaben von NPCs) belohnen dich mit Skills oder Items. Die Quest-Seite zeigt die Aufgabe, die Kriterien und den Code.</div>
    </div>

    <hr class="guide-divider">

    <!-- RETRY -->
    <div class="guide-section">
      <div class="section-title">9. Niederlagen & Wiederholung</div>
      <div class="guide-text"><strong>Kampf verloren?</strong> Kein Problem \u2014 trinke ein Bier, um dich zu heilen, und fordere deinen Gegner erneut heraus. Du kannst so oft antreten, wie du m\u00f6chtest.</div>
      <div class="guide-text"><strong>Quest nicht geschafft?</strong> Warte 5 Minuten, dann darfst du es erneut versuchen.</div>
      <div class="guide-text">Lord Patten ist dazu bestimmt zu gewinnen \u2014 es ist nur eine Frage der Zeit!</div>
    </div>

  </div>
`;
