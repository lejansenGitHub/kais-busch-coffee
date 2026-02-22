import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */const A=document.createElement("style");A.textContent=`
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

  /* Illustration panels */
  .illust-panel {
    background: rgba(10, 8, 4, 0.5);
    border: 1px solid #3a2a1a;
    border-radius: 4px;
    padding: 8px;
    margin-bottom: 12px;
  }
  .illust-panel svg {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: auto;
  }
  .illust-label {
    font-size: 12px;
    font-weight: 700;
    color: #a08a60;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 6px;
    margin-top: 12px;
  }
  .illust-panel { cursor: zoom-in; }

  /* Fullscreen zoom overlay */
  .zoom-overlay {
    display: none;
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: rgba(0,0,0,0.92);
    touch-action: none;
    user-select: none;
    -webkit-user-select: none;
    overflow: hidden;
  }
  .zoom-overlay.visible { display: block; }
  .zoom-content {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .zoom-content svg {
    transform-origin: 0 0;
    pointer-events: none;
  }
  .zoom-close {
    position: fixed;
    top: 12px;
    right: 12px;
    z-index: 10000;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    background: rgba(255,255,255,0.2);
    color: #fff;
    font-size: 24px;
    line-height: 1;
    cursor: pointer;
  }
`;document.head.appendChild(A);const P=document.getElementById("app");P.innerHTML=`
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

    <!-- BEISPIELKAMPF ILLUSTRATIONEN -->
    <div class="guide-section">
      <div class="section-title">Beispielkampf</div>
      <div class="guide-text">So läuft ein typischer Kampf ab — Schritt für Schritt:</div>

      <div class="illust-label">1. Aufstellung</div>
      <div class="illust-panel">
        <svg viewBox="0 0 380 220" xmlns="http://www.w3.org/2000/svg">
          <rect width="380" height="220" fill="#0a0804"/>
          <circle cx="345" cy="11" r="5" fill="none" stroke="#c9aa71" stroke-width="1.5"/>
          <text x="355" y="15" fill="#c9aa71" font-size="9" font-family="Georgia, serif">Du</text>
          <circle cx="345" cy="25" r="5" fill="none" stroke="#e74c3c" stroke-width="1.5"/>
          <text x="355" y="29" fill="#e74c3c" font-size="9" font-family="Georgia, serif">Gegner</text>
          <text x="190" y="18" text-anchor="middle" fill="#7a6a4a" font-size="11" font-weight="bold" font-family="Georgia, serif" letter-spacing="2">AUFSTELLUNG</text>
          <line x1="20" y1="175" x2="360" y2="175" stroke="#2a2010" stroke-width="1"/>
          <line x1="110" y1="145" x2="110" y2="185" stroke="#c9aa71" stroke-width="2" stroke-dasharray="5,3"/>
          <text x="110" y="200" text-anchor="middle" fill="#c9aa71" font-size="9" font-weight="bold" font-family="Georgia, serif">WURFLINIE</text>
          <line x1="120" y1="160" x2="255" y2="160" stroke="#5a4a2a" stroke-width="1" stroke-dasharray="4,3"/>
          <text x="188" y="155" text-anchor="middle" fill="#a08a60" font-size="11" font-weight="bold" font-family="Georgia, serif">5,5 m</text>
          <g transform="translate(70, 42)">
            <circle cx="0" cy="0" r="11" fill="none" stroke="#c9aa71" stroke-width="2.5"/>
            <circle cx="-3" cy="-2" r="1.5" fill="#c9aa71"/>
            <circle cx="4" cy="-2" r="1.5" fill="#c9aa71"/>
            <path d="M-4 3 Q0 8 4 3" fill="none" stroke="#c9aa71" stroke-width="1.5"/>
            <path d="M-9 -11 L-6 -17 L-2 -11 L0 -19 L2 -11 L6 -17 L9 -11" fill="none" stroke="#c9aa71" stroke-width="2"/>
            <line x1="0" y1="11" x2="0" y2="45" stroke="#c9aa71" stroke-width="2.5"/>
            <line x1="0" y1="23" x2="-16" y2="36" stroke="#c9aa71" stroke-width="2.5"/>
            <line x1="0" y1="23" x2="16" y2="36" stroke="#c9aa71" stroke-width="2.5"/>
            <line x1="0" y1="45" x2="-12" y2="68" stroke="#c9aa71" stroke-width="2.5"/>
            <line x1="0" y1="45" x2="12" y2="68" stroke="#c9aa71" stroke-width="2.5"/>
          </g>
          <g transform="translate(45, 47)">
            <circle cx="0" cy="0" r="10" fill="none" stroke="#e74c3c" stroke-width="2.5"/>
            <line x1="-7" y1="-6" x2="-2" y2="-3" stroke="#e74c3c" stroke-width="1.5"/>
            <line x1="7" y1="-6" x2="2" y2="-3" stroke="#e74c3c" stroke-width="1.5"/>
            <circle cx="-4" cy="-1" r="1.5" fill="#e74c3c"/>
            <circle cx="4" cy="-1" r="1.5" fill="#e74c3c"/>
            <path d="M-4 4 Q0 1 4 4" fill="none" stroke="#e74c3c" stroke-width="1.5"/>
            <line x1="0" y1="10" x2="0" y2="42" stroke="#e74c3c" stroke-width="2.5"/>
            <line x1="0" y1="22" x2="-14" y2="34" stroke="#e74c3c" stroke-width="2.5"/>
            <line x1="0" y1="22" x2="14" y2="34" stroke="#e74c3c" stroke-width="2.5"/>
            <line x1="0" y1="42" x2="-11" y2="63" stroke="#e74c3c" stroke-width="2.5"/>
            <line x1="0" y1="42" x2="11" y2="63" stroke="#e74c3c" stroke-width="2.5"/>
          </g>
          <text x="60" y="132" text-anchor="middle" fill="#c9aa71" font-size="9" font-weight="bold" font-family="Georgia, serif">↓ dahinter stehen!</text>
          <ellipse cx="280" cy="168" rx="40" ry="12" fill="#0f0d08" stroke="#27ae60" stroke-width="2"/>
          <ellipse cx="280" cy="168" rx="25" ry="7.5" fill="#151008" stroke="#f39c12" stroke-width="2"/>
          <ellipse cx="280" cy="168" rx="10" ry="3" fill="#1a120a" stroke="#e74c3c" stroke-width="2"/>
          <text x="280" y="210" text-anchor="middle" fill="#7a6a4a" font-size="9" font-family="Georgia, serif">ZIELSCHEIBE</text>
        </svg>
      </div>

      <div class="illust-label">2. Würfeln</div>
      <div class="illust-panel">
        <svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="380" height="200" fill="#0a0804"/>
          <circle cx="345" cy="11" r="5" fill="none" stroke="#c9aa71" stroke-width="1.5"/>
          <text x="355" y="15" fill="#c9aa71" font-size="9" font-family="Georgia, serif">Du</text>
          <circle cx="345" cy="25" r="5" fill="none" stroke="#e74c3c" stroke-width="1.5"/>
          <text x="355" y="29" fill="#e74c3c" font-size="9" font-family="Georgia, serif">Gegner</text>
          <text x="190" y="22" text-anchor="middle" fill="#7a6a4a" font-size="11" font-weight="bold" font-family="Georgia, serif" letter-spacing="2">WÜRFELN</text>
          <circle cx="70" cy="110" r="10" fill="none" stroke="#c9aa71" stroke-width="2"/>
          <line x1="70" y1="120" x2="70" y2="150" stroke="#c9aa71" stroke-width="2"/>
          <line x1="70" y1="130" x2="55" y2="142" stroke="#c9aa71" stroke-width="2"/>
          <line x1="70" y1="130" x2="95" y2="115" stroke="#c9aa71" stroke-width="2"/>
          <line x1="70" y1="150" x2="58" y2="170" stroke="#c9aa71" stroke-width="2"/>
          <line x1="70" y1="150" x2="82" y2="170" stroke="#c9aa71" stroke-width="2"/>
          <rect x="95" y="85" width="40" height="40" rx="6" fill="#1a1408" stroke="#c9aa71" stroke-width="2.5"/>
          <circle cx="108" cy="98" r="3" fill="#c9aa71"/>
          <circle cx="122" cy="98" r="3" fill="#c9aa71"/>
          <circle cx="108" cy="112" r="3" fill="#c9aa71"/>
          <circle cx="122" cy="112" r="3" fill="#c9aa71"/>
          <circle cx="115" cy="105" r="3" fill="#c9aa71"/>
          <text x="115" y="145" text-anchor="middle" fill="#c9aa71" font-size="22" font-weight="bold" font-family="Georgia, serif">5</text>
          <text x="190" y="115" text-anchor="middle" fill="#5a4a2a" font-size="16" font-weight="bold" font-family="Georgia, serif">VS</text>
          <circle cx="310" cy="110" r="10" fill="none" stroke="#e74c3c" stroke-width="2"/>
          <line x1="310" y1="120" x2="310" y2="150" stroke="#e74c3c" stroke-width="2"/>
          <line x1="310" y1="130" x2="325" y2="142" stroke="#e74c3c" stroke-width="2"/>
          <line x1="310" y1="130" x2="285" y2="115" stroke="#e74c3c" stroke-width="2"/>
          <line x1="310" y1="150" x2="298" y2="170" stroke="#e74c3c" stroke-width="2"/>
          <line x1="310" y1="150" x2="322" y2="170" stroke="#e74c3c" stroke-width="2"/>
          <rect x="245" y="85" width="40" height="40" rx="6" fill="#1a0808" stroke="#e74c3c" stroke-width="2.5"/>
          <circle cx="258" cy="98" r="3" fill="#e74c3c"/>
          <circle cx="272" cy="98" r="3" fill="#e74c3c"/>
          <circle cx="265" cy="112" r="3" fill="#e74c3c"/>
          <text x="265" y="145" text-anchor="middle" fill="#e74c3c" font-size="22" font-weight="bold" font-family="Georgia, serif">3</text>
          <defs>
            <marker id="arrowGold" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <path d="M0,0 L8,3 L0,6" fill="#c9aa71"/>
            </marker>
          </defs>
          <path d="M150 175 L115 175" stroke="#c9aa71" stroke-width="2" fill="none" marker-end="url(#arrowGold)"/>
          <text x="190" y="180" text-anchor="middle" fill="#c9aa71" font-size="12" font-weight="bold" font-family="Georgia, serif">Beginnt!</text>
        </svg>
      </div>

      <div class="illust-label">3. Sandsack werfen</div>
      <div class="illust-panel">
        <svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="380" height="200" fill="#0a0804"/>
          <circle cx="345" cy="11" r="5" fill="none" stroke="#c9aa71" stroke-width="1.5"/>
          <text x="355" y="15" fill="#c9aa71" font-size="9" font-family="Georgia, serif">Du</text>
          <circle cx="345" cy="25" r="5" fill="none" stroke="#e74c3c" stroke-width="1.5"/>
          <text x="355" y="29" fill="#e74c3c" font-size="9" font-family="Georgia, serif">Gegner</text>
          <text x="190" y="22" text-anchor="middle" fill="#7a6a4a" font-size="11" font-weight="bold" font-family="Georgia, serif" letter-spacing="2">SANDSACK WERFEN</text>
          <line x1="20" y1="170" x2="360" y2="170" stroke="#2a2010" stroke-width="1"/>
          <line x1="95" y1="145" x2="95" y2="178" stroke="#c9aa71" stroke-width="1.5" stroke-dasharray="4,3"/>
          <circle cx="60" cy="90" r="10" fill="none" stroke="#c9aa71" stroke-width="2.5"/>
          <line x1="60" y1="100" x2="68" y2="138" stroke="#c9aa71" stroke-width="2.5"/>
          <line x1="63" y1="112" x2="42" y2="125" stroke="#c9aa71" stroke-width="2.5"/>
          <line x1="63" y1="112" x2="90" y2="85" stroke="#c9aa71" stroke-width="2.5"/>
          <line x1="68" y1="138" x2="48" y2="170" stroke="#c9aa71" stroke-width="2.5"/>
          <line x1="68" y1="138" x2="85" y2="170" stroke="#c9aa71" stroke-width="2.5"/>
          <rect x="168" y="62" width="14" height="14" rx="2" fill="#8b6914" stroke="#c9aa71" stroke-width="1.5"/>
          <path d="M92 82 Q140 30 175 69" fill="none" stroke="#c9aa71" stroke-width="1.5" stroke-dasharray="5,4"/>
          <path d="M182 69 Q240 110 290 155" fill="none" stroke="#c9aa71" stroke-width="1.5" stroke-dasharray="5,4" opacity="0.5"/>
          <line x1="85" y1="78" x2="95" y2="74" stroke="#c9aa71" stroke-width="1" opacity="0.5"/>
          <line x1="83" y1="84" x2="93" y2="82" stroke="#c9aa71" stroke-width="1" opacity="0.5"/>
          <line x1="86" y1="90" x2="94" y2="89" stroke="#c9aa71" stroke-width="1" opacity="0.5"/>
          <ellipse cx="300" cy="163" rx="40" ry="12" fill="#0f0d08" stroke="#27ae60" stroke-width="2"/>
          <ellipse cx="300" cy="163" rx="25" ry="7.5" fill="#151008" stroke="#f39c12" stroke-width="2"/>
          <ellipse cx="300" cy="163" rx="10" ry="3" fill="#1a120a" stroke="#e74c3c" stroke-width="2"/>
          <text x="140" y="52" fill="#7a6a4a" font-size="10" font-style="italic" font-family="Georgia, serif" transform="rotate(-15, 140, 52)">swoosh!</text>
        </svg>
      </div>

      <div class="illust-label">4. Treffer — Innenkreis!</div>
      <div class="illust-panel">
        <svg viewBox="0 0 380 230" xmlns="http://www.w3.org/2000/svg">
          <rect width="380" height="230" fill="#0a0804"/>
          <circle cx="345" cy="11" r="5" fill="none" stroke="#c9aa71" stroke-width="1.5"/>
          <text x="355" y="15" fill="#c9aa71" font-size="9" font-family="Georgia, serif">Du</text>
          <circle cx="345" cy="25" r="5" fill="none" stroke="#e74c3c" stroke-width="1.5"/>
          <text x="355" y="29" fill="#e74c3c" font-size="9" font-family="Georgia, serif">Gegner</text>
          <text x="190" y="22" text-anchor="middle" fill="#e74c3c" font-size="12" font-weight="bold" font-family="Georgia, serif" letter-spacing="2">TREFFER!</text>
          <circle cx="130" cy="105" r="55" fill="#0f0d08" stroke="#27ae60" stroke-width="2.5"/>
          <circle cx="130" cy="105" r="35" fill="#151008" stroke="#f39c12" stroke-width="2.5"/>
          <circle cx="130" cy="105" r="15" fill="#1a120a" stroke="#e74c3c" stroke-width="2.5"/>
          <rect x="137" y="94" width="16" height="16" rx="2" fill="#8b6914" stroke="#c9aa71" stroke-width="2"/>
          <line x1="155" y1="88" x2="165" y2="80" stroke="#e74c3c" stroke-width="1.5"/>
          <line x1="158" y1="97" x2="169" y2="93" stroke="#e74c3c" stroke-width="1.5"/>
          <line x1="142" y1="85" x2="146" y2="75" stroke="#e74c3c" stroke-width="1.5"/>
          <defs>
            <marker id="arrowRed" markerWidth="8" markerHeight="6" refX="0" refY="3" orient="auto">
              <path d="M8,0 L0,3 L8,6" fill="#e74c3c"/>
            </marker>
          </defs>
          <line x1="88" y1="140" x2="135" y2="112" stroke="#e74c3c" stroke-width="1" stroke-dasharray="3,2" marker-end="url(#arrowRed)"/>
          <text x="130" y="175" text-anchor="middle" fill="#e74c3c" font-size="11" font-weight="bold" font-family="Georgia, serif">INNENKREIS</text>
          <rect x="18" y="188" width="210" height="32" rx="3" fill="#1a1408" stroke="#5a4a2a" stroke-width="1"/>
          <text x="123" y="202" text-anchor="middle" fill="#a08a60" font-size="8.5" font-style="italic" font-family="Georgia, serif">Berührt der Sandsack den Rand eines</text>
          <text x="123" y="214" text-anchor="middle" fill="#a08a60" font-size="8.5" font-style="italic" font-family="Georgia, serif">inneren Kreises, zählt die bessere Zone!</text>
          <g transform="translate(295, 45)">
            <circle cx="0" cy="0" r="10" fill="none" stroke="#e74c3c" stroke-width="2"/>
            <text x="0" y="4" text-anchor="middle" fill="#e74c3c" font-size="10" font-family="Georgia, serif">×_×</text>
            <line x1="0" y1="10" x2="0" y2="38" stroke="#e74c3c" stroke-width="2"/>
            <line x1="0" y1="20" x2="-15" y2="12" stroke="#e74c3c" stroke-width="2"/>
            <line x1="0" y1="20" x2="15" y2="12" stroke="#e74c3c" stroke-width="2"/>
            <line x1="0" y1="38" x2="-10" y2="55" stroke="#e74c3c" stroke-width="2"/>
            <line x1="0" y1="38" x2="10" y2="55" stroke="#e74c3c" stroke-width="2"/>
          </g>
          <text x="295" y="125" text-anchor="middle" fill="#e74c3c" font-size="24" font-weight="bold" font-family="Georgia, serif">-5 HP</text>
          <text x="255" y="146" fill="#7a6a4a" font-size="9" font-family="Georgia, serif">HP:</text>
          <rect x="270" y="138" width="80" height="12" rx="2" fill="#1a1408" stroke="#3a2a1a" stroke-width="1"/>
          <rect x="271" y="139" width="59" height="10" rx="1" fill="#27ae60"/>
          <text x="310" y="148" text-anchor="middle" fill="#0a0804" font-size="8" font-weight="bold" font-family="Georgia, serif">15 / 20</text>
        </svg>
      </div>

      <div class="illust-label">5. Skill einsetzen</div>
      <div class="illust-panel">
        <svg viewBox="0 0 380 240" xmlns="http://www.w3.org/2000/svg">
          <rect width="380" height="240" fill="#0a0804"/>
          <circle cx="345" cy="11" r="5" fill="none" stroke="#c9aa71" stroke-width="1.5"/>
          <text x="355" y="15" fill="#c9aa71" font-size="9" font-family="Georgia, serif">Du</text>
          <circle cx="345" cy="25" r="5" fill="none" stroke="#e74c3c" stroke-width="1.5"/>
          <text x="355" y="29" fill="#e74c3c" font-size="9" font-family="Georgia, serif">Gegner</text>
          <text x="190" y="22" text-anchor="middle" fill="#7a6a4a" font-size="11" font-weight="bold" font-family="Georgia, serif" letter-spacing="2">SKILL EINSETZEN</text>
          <g transform="translate(90, 55)">
            <circle cx="0" cy="25" r="48" fill="none" stroke="#c9aa71" stroke-width="1" opacity="0.2"/>
            <circle cx="0" cy="25" r="40" fill="none" stroke="#c9aa71" stroke-width="1" opacity="0.35"/>
            <circle cx="0" cy="0" r="10" fill="none" stroke="#c9aa71" stroke-width="2.5"/>
            <circle cx="-4" cy="-2" r="1.5" fill="#c9aa71"/>
            <circle cx="4" cy="-2" r="1.5" fill="#c9aa71"/>
            <line x1="0" y1="10" x2="0" y2="42" stroke="#c9aa71" stroke-width="2.5"/>
            <line x1="0" y1="22" x2="-20" y2="10" stroke="#c9aa71" stroke-width="2.5"/>
            <line x1="0" y1="22" x2="20" y2="10" stroke="#c9aa71" stroke-width="2.5"/>
            <line x1="0" y1="42" x2="-12" y2="62" stroke="#c9aa71" stroke-width="2.5"/>
            <line x1="0" y1="42" x2="12" y2="62" stroke="#c9aa71" stroke-width="2.5"/>
            <text x="-22" y="2" fill="#c9aa71" font-size="10">✦</text>
            <text x="18" y="-2" fill="#c9aa71" font-size="8">✦</text>
            <text x="-8" y="-14" fill="#c9aa71" font-size="6">✦</text>
          </g>
          <rect x="55" y="40" width="22" height="22" rx="3" fill="#8b1a1a" stroke="#c9aa71" stroke-width="1.5"/>
          <text x="66" y="56" text-anchor="middle" fill="#e0d0a0" font-size="13" font-weight="bold" font-family="Georgia, serif">A</text>
          <rect x="125" y="42" width="120" height="28" rx="4" fill="#1a1408" stroke="#5a4a2a" stroke-width="1.5"/>
          <polygon points="125,54 115,58 125,62" fill="#1a1408" stroke="#5a4a2a" stroke-width="1.5"/>
          <polygon points="126,55 118,58 126,61" fill="#1a1408"/>
          <text x="185" y="60" text-anchor="middle" fill="#c9aa71" font-size="11" font-weight="bold" font-family="Georgia, serif">Heavy Hands!</text>
          <defs>
            <marker id="arrowG2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <path d="M0,0 L8,3 L0,6" fill="#c9aa71"/>
            </marker>
          </defs>
          <path d="M248 58 L268 58" stroke="#c9aa71" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arrowG2)"/>
          <g transform="translate(300, 55)">
            <circle cx="0" cy="0" r="10" fill="none" stroke="#e74c3c" stroke-width="2"/>
            <text x="0" y="4" text-anchor="middle" fill="#e74c3c" font-size="9" font-family="Georgia, serif">?!</text>
            <line x1="0" y1="10" x2="0" y2="42" stroke="#e74c3c" stroke-width="2"/>
            <line x1="0" y1="22" x2="-18" y2="32" stroke="#e74c3c" stroke-width="2"/>
            <line x1="0" y1="22" x2="18" y2="32" stroke="#e74c3c" stroke-width="2"/>
            <ellipse cx="-22" cy="36" rx="10" ry="8" fill="#8b4513" stroke="#a0522d" stroke-width="1.5"/>
            <ellipse cx="22" cy="36" rx="10" ry="8" fill="#8b4513" stroke="#a0522d" stroke-width="1.5"/>
            <line x1="0" y1="42" x2="-10" y2="62" stroke="#e74c3c" stroke-width="2"/>
            <line x1="0" y1="42" x2="10" y2="62" stroke="#e74c3c" stroke-width="2"/>
          </g>
          <text x="300" y="140" text-anchor="middle" fill="#7a6a4a" font-size="10" font-family="Georgia, serif">Dauer: 3 Würfe</text>
          <rect x="20" y="158" width="340" height="70" rx="4" fill="#1a1408" stroke="#5a4a2a" stroke-width="1"/>
          <text x="190" y="175" text-anchor="middle" fill="#c9aa71" font-size="10" font-weight="bold" font-family="Georgia, serif">WAS MACHT HEAVY HANDS?</text>
          <text x="190" y="192" text-anchor="middle" fill="#a08a60" font-size="9" font-family="Georgia, serif">Der Gegner muss echte Ofenhandschuhe anziehen</text>
          <text x="190" y="205" text-anchor="middle" fill="#a08a60" font-size="9" font-family="Georgia, serif">und damit werfen! Die klobigen Handschuhe machen</text>
          <text x="190" y="218" text-anchor="middle" fill="#a08a60" font-size="9" font-family="Georgia, serif">präzises Werfen fast unmöglich. Dauer: 3 Würfe.</text>
        </svg>
      </div>

      <div class="illust-label">6. Sieg!</div>
      <div class="illust-panel">
        <svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="380" height="200" fill="#0a0804"/>
          <circle cx="345" cy="11" r="5" fill="none" stroke="#c9aa71" stroke-width="1.5"/>
          <text x="355" y="15" fill="#c9aa71" font-size="9" font-family="Georgia, serif">Du</text>
          <circle cx="345" cy="25" r="5" fill="none" stroke="#e74c3c" stroke-width="1.5"/>
          <text x="355" y="29" fill="#e74c3c" font-size="9" font-family="Georgia, serif">Gegner</text>
          <text x="190" y="24" text-anchor="middle" fill="#c9aa71" font-size="16" font-weight="bold" font-family="Georgia, serif" letter-spacing="3">SIEG!</text>
          <text x="140" y="20" fill="#f39c12" font-size="10">✦</text>
          <text x="235" y="18" fill="#f39c12" font-size="8">✦</text>
          <text x="160" y="38" fill="#c9aa71" font-size="6">✦</text>
          <text x="220" y="36" fill="#c9aa71" font-size="7">✦</text>
          <g transform="translate(120, 60)">
            <circle cx="0" cy="0" r="12" fill="none" stroke="#c9aa71" stroke-width="2.5"/>
            <circle cx="-4" cy="-2" r="1.5" fill="#c9aa71"/>
            <circle cx="4" cy="-2" r="1.5" fill="#c9aa71"/>
            <path d="M-5 4 Q0 10 5 4" fill="none" stroke="#c9aa71" stroke-width="1.5"/>
            <path d="M-10 -12 L-7 -18 L-3 -12 L0 -20 L3 -12 L7 -18 L10 -12" fill="none" stroke="#c9aa71" stroke-width="2"/>
            <line x1="0" y1="12" x2="0" y2="48" stroke="#c9aa71" stroke-width="2.5"/>
            <line x1="0" y1="24" x2="-22" y2="6" stroke="#c9aa71" stroke-width="2.5"/>
            <line x1="0" y1="24" x2="22" y2="6" stroke="#c9aa71" stroke-width="2.5"/>
            <line x1="0" y1="48" x2="-14" y2="70" stroke="#c9aa71" stroke-width="2.5"/>
            <line x1="0" y1="48" x2="14" y2="70" stroke="#c9aa71" stroke-width="2.5"/>
          </g>
          <g transform="translate(260, 105)">
            <circle cx="0" cy="0" r="9" fill="none" stroke="#e74c3c" stroke-width="2" opacity="0.6"/>
            <line x1="-5" y1="-3" x2="-1" y2="1" stroke="#e74c3c" stroke-width="1.5" opacity="0.6"/>
            <line x1="-1" y1="-3" x2="-5" y2="1" stroke="#e74c3c" stroke-width="1.5" opacity="0.6"/>
            <line x1="1" y1="-3" x2="5" y2="1" stroke="#e74c3c" stroke-width="1.5" opacity="0.6"/>
            <line x1="5" y1="-3" x2="1" y2="1" stroke="#e74c3c" stroke-width="1.5" opacity="0.6"/>
            <line x1="9" y1="0" x2="45" y2="5" stroke="#e74c3c" stroke-width="2" opacity="0.6"/>
            <line x1="22" y1="2" x2="18" y2="15" stroke="#e74c3c" stroke-width="2" opacity="0.6"/>
            <line x1="22" y1="2" x2="26" y2="-12" stroke="#e74c3c" stroke-width="2" opacity="0.6"/>
            <line x1="45" y1="5" x2="52" y2="18" stroke="#e74c3c" stroke-width="2" opacity="0.6"/>
            <line x1="45" y1="5" x2="55" y2="-5" stroke="#e74c3c" stroke-width="2" opacity="0.6"/>
            <rect x="-15" y="25" width="70" height="10" rx="2" fill="#1a1408" stroke="#3a2a1a" stroke-width="1"/>
            <text x="20" y="33" text-anchor="middle" fill="#e74c3c" font-size="7" font-weight="bold" font-family="Georgia, serif">0 / 20 HP</text>
          </g>
          <g transform="translate(30, 145)">
            <rect x="0" y="0" width="145" height="40" rx="4" fill="#1a1408" stroke="#5a4a2a" stroke-width="1.5"/>
            <text x="72" y="16" text-anchor="middle" fill="#c9aa71" font-size="9" font-weight="bold" font-family="Georgia, serif">BELOHNUNG</text>
            <text x="72" y="32" text-anchor="middle" fill="#f39c12" font-size="12" font-weight="bold" font-family="monospace">CODE: ****</text>
          </g>
          <g transform="translate(195, 145)">
            <rect x="0" y="0" width="100" height="40" rx="4" fill="#1a1408" stroke="#27ae60" stroke-width="1.5"/>
            <text x="50" y="16" text-anchor="middle" fill="#27ae60" font-size="9" font-weight="bold" font-family="Georgia, serif">LEVEL UP!</text>
            <text x="50" y="32" text-anchor="middle" fill="#a08a60" font-size="10" font-family="Georgia, serif">+HP / +Schaden</text>
          </g>
        </svg>
      </div>
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
          <div class="skill-ex-name">Fortress</div>
        </div>
        <div class="skill-ex-desc">Außenkreis-Treffer des Gegners verursachen <strong>3 Schaden weniger</strong>.</div>
        <div class="skill-ex-scenario">💡 Szenario: Dein Gegner trifft den Außenkreis? Fortress reduziert den Schaden um 3! Bei schwachen Gegnern kann das den Treffer fast wertlos machen.</div>
      </div>

      <div class="skill-example">
        <div class="skill-ex-header">
          <div class="skill-ex-badge passive">P</div>
          <div class="skill-ex-name">Last Stand</div>
        </div>
        <div class="skill-ex-desc">Unter 10 HP verursachen alle deine Treffer <strong>+2 Bonusschaden</strong>.</div>
        <div class="skill-ex-scenario">💡 Szenario: Du hast nur noch 3 HP — aber jetzt zählt jeder deiner Würfe 2 Schaden mehr! Ein Innentreffer, der normalerweise 5 macht, macht jetzt 7. Gefährlich für deinen Gegner!</div>
      </div>
    </div>

    <hr class="guide-divider">

    <!-- ALLIES -->
    <div class="guide-section">
      <div class="section-title">7. Verbündete</div>
      <div class="guide-text">Im Laufe des Abenteuers schließen sich Lord Patten <strong>Verbündete</strong> an. Jeder Verbündete hat eine <strong>einzigartige Fähigkeit</strong>, mit der er im Kampf helfen kann.</div>

      <div class="guide-text"><strong>Regeln:</strong></div>
      <div class="guide-text">• Pro Kampf darf Sascha <strong>einen Verbündeten</strong> auswählen, der mit seiner Fähigkeit hilft.</div>
      <div class="guide-text">• Sascha muss dies <strong>bei Kampfbeginn aktiv festlegen</strong> — vor dem ersten Wurf. Wenn er es vergisst oder nicht nutzt: <strong>Pech gehabt.</strong></div>
      <div class="guide-text">• Pro Kampf kann nur <strong>ein</strong> Verbündeter helfen, nicht mehrere.</div>

      <div class="section-subtitle">Ausnahme: Nick</div>
      <div class="guide-text">Nick ist ein Schurke — er handelt <strong>auf eigene Faust</strong>. Er muss nicht von Sascha angefordert werden und zählt nicht als gewählter Verbündeter. Nick darf seinen <strong>Schattenwurf</strong> jederzeit einsetzen (2× im gesamten Spiel), auch zusätzlich zu einem anderen Verbündeten.</div>
    </div>

    <hr class="guide-divider">

    <!-- DAMAGE & HP -->
    <div class="guide-section">
      <div class="section-title">8. Schaden & HP</div>
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
      <div class="section-title">9. Belohnungen & Level Up</div>
      <div class="guide-text">Nach jedem besiegten Gegner erhältst du einen <strong>Belohnungs-Code</strong>. Diesen gibst du auf Lord Pattens Charakterseite ein, um einen neuen Skill oder ein Item freizuschalten.</div>
      <div class="guide-text">Zusätzlich kannst du nach jedem Kampf ein <strong>Level Up</strong> machen und wählen: Mehr HP, mehr Schaden im Außen-/Mittel-/Innenkreis. Alle 5 Level bekommst du +1 Aktion und +1 Skill-Slot.</div>
      <div class="guide-text">Auch <strong>Quests</strong> (Aufgaben von NPCs) belohnen dich mit Skills oder Items. Die Quest-Seite zeigt die Aufgabe, die Kriterien und den Code.</div>
    </div>

    <hr class="guide-divider">

    <!-- QUEST-NPCs -->
    <div class="guide-section">
      <div class="section-title">10. Quest-NPCs erkennen</div>
      <div class="guide-text">Nicht alle Begegnungen sind Kämpfe — manche Personen bieten <strong>Quests</strong> an. Du erkennst Quest-NPCs daran, dass sie ein <strong>Schild mit einem großen „!“</strong> hochhalten.</div>
      <div class="guide-text">Wenn du ein „!“ siehst, geh auf die Person zu und höre dir ihre Aufgabe an. Nach Abschluss der Quest erhältst du einen Belohnungs-Code.</div>
      <div class="guide-text"><strong>Tipp:</strong> Halte die Augen offen — Quests belohnen dich oft mit mächtigen Skills oder seltenen Items, die dir im nächsten Kampf den Vorteil verschaffen.</div>
    </div>

    <hr class="guide-divider">

    <!-- RETRY -->
    <div class="guide-section">
      <div class="section-title">11. Niederlagen & Wiederholung</div>
      <div class="guide-text"><strong>Kampf verloren?</strong> Kein Problem — trinke ein Bier, um dich zu heilen, und fordere deinen Gegner erneut heraus. Du kannst so oft antreten, wie du möchtest.</div>
      <div class="guide-text"><strong>Quest nicht geschafft?</strong> Warte 5 Minuten, dann darfst du es erneut versuchen.</div>
      <div class="guide-text">Lord Patten ist dazu bestimmt zu gewinnen — es ist nur eine Frage der Zeit!</div>
    </div>

  </div>
`;const r=document.createElement("div");r.className="zoom-overlay";r.innerHTML='<button class="zoom-close">×</button><div class="zoom-content"></div>';document.body.appendChild(r);const c=r.querySelector(".zoom-content");let o=1,s=0,a=0,u=0,v=0,d=null;function M(){const e=window.innerWidth,t=window.innerHeight,n=u*o,l=v*o;n<=e?s=(e-n)/2:s=Math.max(e-n,Math.min(0,s)),l<=t?a=(t-l)/2:a=Math.max(t-l,Math.min(0,a))}function g(){d&&(M(),d.style.transform=`translate(${s}px, ${a}px) scale(${o})`,d.style.width=u+"px",d.style.height=v+"px")}function H(e){const t=e.cloneNode(!0);t.removeAttribute("width"),t.removeAttribute("height"),c.innerHTML="",c.style.display="block",c.appendChild(t),d=t;const n=window.innerWidth,l=window.innerHeight,f=t.viewBox.baseVal,h=f&&f.width&&f.height?f.width/f.height:16/9,x=20;(n-x*2)/h<=l-x*2?(u=n-x*2,v=u/h):(v=l-x*2,u=v*h),o=1,s=0,a=0,g(),r.classList.add("visible")}function L(){r.classList.remove("visible"),d=null}function E(e,t,n){e=Math.max(1,Math.min(6,e));const l=e/o;s=t-l*(t-s),a=n-l*(n-a),o=e,g()}r.querySelector(".zoom-close").addEventListener("click",e=>{e.stopPropagation(),L()});let b=!1;r.addEventListener("touchstart",()=>{b=!1},{passive:!0});r.addEventListener("touchmove",()=>{b=!0},{passive:!0});let i=null,p=1,k=0,y=0;c.addEventListener("touchstart",e=>{d&&(e.touches.length===2?(e.preventDefault(),i=Array.from(e.touches).map(t=>({x:t.clientX,y:t.clientY})),p=o,k=s,y=a):e.touches.length===1&&o>1.01&&(e.preventDefault(),i=[{x:e.touches[0].clientX,y:e.touches[0].clientY}],k=s,y=a))},{passive:!1});c.addEventListener("touchmove",e=>{if(!(!i||!d))if(e.preventDefault(),e.touches.length===2&&i.length===2){const t=Array.from(e.touches).map(G=>({x:G.clientX,y:G.clientY})),n=Math.hypot(i[1].x-i[0].x,i[1].y-i[0].y),l=Math.hypot(t[1].x-t[0].x,t[1].y-t[0].y),f=Math.max(1,Math.min(6,p*(l/n))),h=(i[0].x+i[1].x)/2,x=(i[0].y+i[1].y)/2,D=(t[0].x+t[1].x)/2,W=(t[0].y+t[1].y)/2,S=f/p;s=k+(D-h)+h*(1-S),a=y+(W-x)+x*(1-S),o=f,g()}else e.touches.length===1&&i.length===1&&(s=k+(e.touches[0].clientX-i[0].x),a=y+(e.touches[0].clientY-i[0].y),g())},{passive:!1});c.addEventListener("touchend",e=>{if(i=null,e.touches.length>0||b)return;const t=Date.now();if(t-m<300){if(o>1.5)o=1,s=0,a=0,g();else{const n=e.changedTouches[0].clientX,l=e.changedTouches[0].clientY;E(3,n,l)}m=0}else m=t});let m=0;c.addEventListener("touchcancel",()=>{i=null});r.addEventListener("click",e=>{(e.target===r||e.target===c)&&L()});r.addEventListener("wheel",e=>{if(!d)return;e.preventDefault();const t=e.deltaY<0?1.2:1/1.2;E(o*t,e.clientX,e.clientY)},{passive:!1});let z=!1,w={x:0,y:0};c.addEventListener("mousedown",e=>{!d||o<=1.01||(z=!0,w={x:e.clientX-s,y:e.clientY-a},r.style.cursor="grabbing")});window.addEventListener("mousemove",e=>{z&&(s=e.clientX-w.x,a=e.clientY-w.y,g())});window.addEventListener("mouseup",()=>{z=!1,r.style.cursor=""});document.querySelectorAll(".illust-panel").forEach(e=>{const t=e.querySelector("svg");t&&e.addEventListener("click",()=>H(t))});
