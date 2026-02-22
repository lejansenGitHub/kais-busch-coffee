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
  }
  .zoom-overlay.visible { display: flex; align-items: center; justify-content: center; }
  .zoom-overlay svg {
    max-width: 100vw;
    max-height: 100vh;
    transform-origin: 0 0;
  }
  .zoom-close {
    position: fixed;
    top: 12px;
    right: 12px;
    z-index: 10000;
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 50%;
    background: rgba(255,255,255,0.15);
    color: #fff;
    font-size: 22px;
    line-height: 1;
    cursor: pointer;
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

    <!-- BEISPIELKAMPF ILLUSTRATIONEN -->
    <div class="guide-section">
      <div class="section-title">Beispielkampf</div>
      <div class="guide-text">So l\u00e4uft ein typischer Kampf ab \u2014 Schritt f\u00fcr Schritt:</div>

      <div class="illust-label">1. Aufstellung</div>
      <div class="illust-panel">
        <svg viewBox="0 0 380 220" xmlns="http://www.w3.org/2000/svg">
          <rect width="380" height="220" fill="#0a0804"/>
          <circle cx="290" cy="14" r="5" fill="none" stroke="#c9aa71" stroke-width="1.5"/>
          <text x="300" y="18" fill="#c9aa71" font-size="9" font-family="Georgia, serif">= Du</text>
          <circle cx="335" cy="14" r="5" fill="none" stroke="#e74c3c" stroke-width="1.5"/>
          <text x="345" y="18" fill="#e74c3c" font-size="9" font-family="Georgia, serif">= Gegner</text>
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
          <text x="60" y="132" text-anchor="middle" fill="#c9aa71" font-size="9" font-weight="bold" font-family="Georgia, serif">\u2193 dahinter stehen!</text>
          <ellipse cx="280" cy="168" rx="40" ry="12" fill="#0f0d08" stroke="#27ae60" stroke-width="2"/>
          <ellipse cx="280" cy="168" rx="25" ry="7.5" fill="#151008" stroke="#f39c12" stroke-width="2"/>
          <ellipse cx="280" cy="168" rx="10" ry="3" fill="#1a120a" stroke="#e74c3c" stroke-width="2"/>
          <text x="280" y="210" text-anchor="middle" fill="#7a6a4a" font-size="9" font-family="Georgia, serif">ZIELSCHEIBE</text>
        </svg>
      </div>

      <div class="illust-label">2. W\u00fcrfeln</div>
      <div class="illust-panel">
        <svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="380" height="200" fill="#0a0804"/>
          <circle cx="290" cy="14" r="5" fill="none" stroke="#c9aa71" stroke-width="1.5"/>
          <text x="300" y="18" fill="#c9aa71" font-size="9" font-family="Georgia, serif">= Du</text>
          <circle cx="335" cy="14" r="5" fill="none" stroke="#e74c3c" stroke-width="1.5"/>
          <text x="345" y="18" fill="#e74c3c" font-size="9" font-family="Georgia, serif">= Gegner</text>
          <text x="190" y="22" text-anchor="middle" fill="#7a6a4a" font-size="11" font-weight="bold" font-family="Georgia, serif" letter-spacing="2">W\u00dcRFELN</text>
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
          <circle cx="290" cy="14" r="5" fill="none" stroke="#c9aa71" stroke-width="1.5"/>
          <text x="300" y="18" fill="#c9aa71" font-size="9" font-family="Georgia, serif">= Du</text>
          <circle cx="335" cy="14" r="5" fill="none" stroke="#e74c3c" stroke-width="1.5"/>
          <text x="345" y="18" fill="#e74c3c" font-size="9" font-family="Georgia, serif">= Gegner</text>
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

      <div class="illust-label">4. Treffer \u2014 Innenkreis!</div>
      <div class="illust-panel">
        <svg viewBox="0 0 380 230" xmlns="http://www.w3.org/2000/svg">
          <rect width="380" height="230" fill="#0a0804"/>
          <circle cx="290" cy="14" r="5" fill="none" stroke="#c9aa71" stroke-width="1.5"/>
          <text x="300" y="18" fill="#c9aa71" font-size="9" font-family="Georgia, serif">= Du</text>
          <circle cx="335" cy="14" r="5" fill="none" stroke="#e74c3c" stroke-width="1.5"/>
          <text x="345" y="18" fill="#e74c3c" font-size="9" font-family="Georgia, serif">= Gegner</text>
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
          <text x="123" y="202" text-anchor="middle" fill="#a08a60" font-size="8.5" font-style="italic" font-family="Georgia, serif">Ber\u00fchrt der Sandsack den Rand eines</text>
          <text x="123" y="214" text-anchor="middle" fill="#a08a60" font-size="8.5" font-style="italic" font-family="Georgia, serif">inneren Kreises, z\u00e4hlt die bessere Zone!</text>
          <g transform="translate(295, 45)">
            <circle cx="0" cy="0" r="10" fill="none" stroke="#e74c3c" stroke-width="2"/>
            <text x="0" y="4" text-anchor="middle" fill="#e74c3c" font-size="10" font-family="Georgia, serif">\u00d7_\u00d7</text>
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
          <circle cx="290" cy="14" r="5" fill="none" stroke="#c9aa71" stroke-width="1.5"/>
          <text x="300" y="18" fill="#c9aa71" font-size="9" font-family="Georgia, serif">= Du</text>
          <circle cx="335" cy="14" r="5" fill="none" stroke="#e74c3c" stroke-width="1.5"/>
          <text x="345" y="18" fill="#e74c3c" font-size="9" font-family="Georgia, serif">= Gegner</text>
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
            <text x="-22" y="2" fill="#c9aa71" font-size="10">\u2726</text>
            <text x="18" y="-2" fill="#c9aa71" font-size="8">\u2726</text>
            <text x="-8" y="-14" fill="#c9aa71" font-size="6">\u2726</text>
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
          <text x="300" y="140" text-anchor="middle" fill="#7a6a4a" font-size="10" font-family="Georgia, serif">Dauer: 3 W\u00fcrfe</text>
          <rect x="20" y="158" width="340" height="70" rx="4" fill="#1a1408" stroke="#5a4a2a" stroke-width="1"/>
          <text x="190" y="175" text-anchor="middle" fill="#c9aa71" font-size="10" font-weight="bold" font-family="Georgia, serif">WAS MACHT HEAVY HANDS?</text>
          <text x="190" y="192" text-anchor="middle" fill="#a08a60" font-size="9" font-family="Georgia, serif">Der Gegner muss echte Ofenhandschuhe anziehen</text>
          <text x="190" y="205" text-anchor="middle" fill="#a08a60" font-size="9" font-family="Georgia, serif">und damit werfen! Die klobigen Handschuhe machen</text>
          <text x="190" y="218" text-anchor="middle" fill="#a08a60" font-size="9" font-family="Georgia, serif">pr\u00e4zises Werfen fast unm\u00f6glich. Dauer: 3 W\u00fcrfe.</text>
        </svg>
      </div>

      <div class="illust-label">6. Sieg!</div>
      <div class="illust-panel">
        <svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="380" height="200" fill="#0a0804"/>
          <circle cx="290" cy="14" r="5" fill="none" stroke="#c9aa71" stroke-width="1.5"/>
          <text x="300" y="18" fill="#c9aa71" font-size="9" font-family="Georgia, serif">= Du</text>
          <circle cx="335" cy="14" r="5" fill="none" stroke="#e74c3c" stroke-width="1.5"/>
          <text x="345" y="18" fill="#e74c3c" font-size="9" font-family="Georgia, serif">= Gegner</text>
          <text x="190" y="24" text-anchor="middle" fill="#c9aa71" font-size="16" font-weight="bold" font-family="Georgia, serif" letter-spacing="3">SIEG!</text>
          <text x="140" y="20" fill="#f39c12" font-size="10">\u2726</text>
          <text x="235" y="18" fill="#f39c12" font-size="8">\u2726</text>
          <text x="160" y="38" fill="#c9aa71" font-size="6">\u2726</text>
          <text x="220" y="36" fill="#c9aa71" font-size="7">\u2726</text>
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
        <div class="skill-ex-desc">Unter 10 HP verursachen alle deine Treffer <strong>+2 Bonusschaden</strong>.</div>
        <div class="skill-ex-scenario">\u{1F4A1} Szenario: Du hast nur noch 3 HP \u2014 aber jetzt z\u00e4hlt jeder deiner W\u00fcrfe 2 Schaden mehr! Ein Innentreffer, der normalerweise 5 macht, macht jetzt 7. Gef\u00e4hrlich f\u00fcr deinen Gegner!</div>
      </div>
    </div>

    <hr class="guide-divider">

    <!-- ALLIES -->
    <div class="guide-section">
      <div class="section-title">7. Verb\u00fcndete</div>
      <div class="guide-text">Im Laufe des Abenteuers schlie\u00dfen sich Lord Patten <strong>Verb\u00fcndete</strong> an. Jeder Verb\u00fcndete hat eine <strong>einzigartige F\u00e4higkeit</strong>, mit der er im Kampf helfen kann.</div>

      <div class="guide-text"><strong>Regeln:</strong></div>
      <div class="guide-text">\u2022 Pro Kampf darf Sascha <strong>einen Verb\u00fcndeten</strong> ausw\u00e4hlen, der mit seiner F\u00e4higkeit hilft.</div>
      <div class="guide-text">\u2022 Sascha muss dies <strong>bei Kampfbeginn aktiv festlegen</strong> \u2014 vor dem ersten Wurf. Wenn er es vergisst oder nicht nutzt: <strong>Pech gehabt.</strong></div>
      <div class="guide-text">\u2022 Pro Kampf kann nur <strong>ein</strong> Verb\u00fcndeter helfen, nicht mehrere.</div>

      <div class="section-subtitle">Ausnahme: Nick</div>
      <div class="guide-text">Nick ist ein Schurke \u2014 er handelt <strong>auf eigene Faust</strong>. Er muss nicht von Sascha angefordert werden und z\u00e4hlt nicht als gew\u00e4hlter Verb\u00fcndeter. Nick darf seinen <strong>Schattenwurf</strong> jederzeit einsetzen (2\u00d7 im gesamten Spiel), auch zus\u00e4tzlich zu einem anderen Verb\u00fcndeten.</div>
    </div>

    <hr class="guide-divider">

    <!-- DAMAGE & HP -->
    <div class="guide-section">
      <div class="section-title">8. Schaden & HP</div>
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
      <div class="section-title">9. Belohnungen & Level Up</div>
      <div class="guide-text">Nach jedem besiegten Gegner erh\u00e4ltst du einen <strong>Belohnungs-Code</strong>. Diesen gibst du auf Lord Pattens Charakterseite ein, um einen neuen Skill oder ein Item freizuschalten.</div>
      <div class="guide-text">Zus\u00e4tzlich kannst du nach jedem Kampf ein <strong>Level Up</strong> machen und w\u00e4hlen: Mehr HP, mehr Schaden im Au\u00dfen-/Mittel-/Innenkreis. Alle 5 Level bekommst du +1 Aktion und +1 Skill-Slot.</div>
      <div class="guide-text">Auch <strong>Quests</strong> (Aufgaben von NPCs) belohnen dich mit Skills oder Items. Die Quest-Seite zeigt die Aufgabe, die Kriterien und den Code.</div>
    </div>

    <hr class="guide-divider">

    <!-- QUEST-NPCs -->
    <div class="guide-section">
      <div class="section-title">10. Quest-NPCs erkennen</div>
      <div class="guide-text">Nicht alle Begegnungen sind K\u00e4mpfe \u2014 manche Personen bieten <strong>Quests</strong> an. Du erkennst Quest-NPCs daran, dass sie ein <strong>Schild mit einem gro\u00dfen \u201e!\u201c</strong> hochhalten.</div>
      <div class="guide-text">Wenn du ein \u201e!\u201c siehst, geh auf die Person zu und h\u00f6re dir ihre Aufgabe an. Nach Abschluss der Quest erh\u00e4ltst du einen Belohnungs-Code.</div>
      <div class="guide-text"><strong>Tipp:</strong> Halte die Augen offen \u2014 Quests belohnen dich oft mit m\u00e4chtigen Skills oder seltenen Items, die dir im n\u00e4chsten Kampf den Vorteil verschaffen.</div>
    </div>

    <hr class="guide-divider">

    <!-- RETRY -->
    <div class="guide-section">
      <div class="section-title">11. Niederlagen & Wiederholung</div>
      <div class="guide-text"><strong>Kampf verloren?</strong> Kein Problem \u2014 trinke ein Bier, um dich zu heilen, und fordere deinen Gegner erneut heraus. Du kannst so oft antreten, wie du m\u00f6chtest.</div>
      <div class="guide-text"><strong>Quest nicht geschafft?</strong> Warte 5 Minuten, dann darfst du es erneut versuchen.</div>
      <div class="guide-text">Lord Patten ist dazu bestimmt zu gewinnen \u2014 es ist nur eine Frage der Zeit!</div>
    </div>

  </div>
`;

// --- Zoomable illustrations ---
const overlay = document.createElement('div');
overlay.className = 'zoom-overlay';
overlay.innerHTML = '<button class="zoom-close">\u00d7</button><div class="zoom-content"></div>';
document.body.appendChild(overlay);

const zoomContent = overlay.querySelector('.zoom-content');
let zScale = 1, zTX = 0, zTY = 0, zSvg = null;

function zApply() {
  if (!zSvg) return;
  const ow = overlay.clientWidth, oh = overlay.clientHeight;
  const vb = zSvg.viewBox.baseVal;
  const aspect = vb.width / vb.height;
  const fitW = ow, fitH = ow / aspect;
  const sw = fitW * zScale, sh = fitH * zScale;
  const minX = Math.min(0, ow - sw), minY = Math.min(0, oh - sh);
  zTX = Math.max(minX, Math.min(0, zTX));
  zTY = Math.max(minY, Math.min(0, zTY));
  zSvg.style.width = sw + 'px';
  zSvg.style.height = sh + 'px';
  zSvg.style.transform = `translate(${zTX}px, ${zTY}px)`;
}

function zOpen(svgEl) {
  const clone = svgEl.cloneNode(true);
  clone.removeAttribute('width');
  clone.removeAttribute('height');
  clone.style.width = '100%';
  clone.style.height = 'auto';
  clone.style.maxWidth = '100vw';
  clone.style.maxHeight = '100vh';
  zoomContent.innerHTML = '';
  zoomContent.appendChild(clone);
  zSvg = clone;
  zScale = 1; zTX = 0; zTY = 0;
  zApply();
  overlay.classList.add('visible');
}

function zClose() {
  overlay.classList.remove('visible');
  zSvg = null;
}

overlay.querySelector('.zoom-close').addEventListener('click', zClose);
overlay.addEventListener('click', (e) => { if (e.target === overlay) zClose(); });

// Pinch zoom + pan on overlay
let zt0 = null, zStartScale = 1, zStartTX = 0, zStartTY = 0;

overlay.addEventListener('touchstart', (e) => {
  if (!zSvg) return;
  if (e.touches.length === 2) {
    e.preventDefault();
    zt0 = Array.from(e.touches).map(t => ({ x: t.clientX, y: t.clientY }));
    zStartScale = zScale; zStartTX = zTX; zStartTY = zTY;
  } else if (e.touches.length === 1 && zScale > 1) {
    e.preventDefault();
    zt0 = [{ x: e.touches[0].clientX, y: e.touches[0].clientY }];
    zStartTX = zTX; zStartTY = zTY;
  }
}, { passive: false });

overlay.addEventListener('touchmove', (e) => {
  if (!zt0 || !zSvg) return;
  e.preventDefault();
  if (e.touches.length === 2 && zt0.length === 2) {
    const cur = Array.from(e.touches).map(t => ({ x: t.clientX, y: t.clientY }));
    const d0 = Math.hypot(zt0[1].x - zt0[0].x, zt0[1].y - zt0[0].y);
    const d1 = Math.hypot(cur[1].x - cur[0].x, cur[1].y - cur[0].y);
    const ns = Math.max(1, Math.min(6, zStartScale * (d1 / d0)));
    const cx0 = (zt0[0].x + zt0[1].x) / 2, cy0 = (zt0[0].y + zt0[1].y) / 2;
    const mcx = (cur[0].x + cur[1].x) / 2, mcy = (cur[0].y + cur[1].y) / 2;
    const ratio = ns / zStartScale;
    zTX = zStartTX + (mcx - cx0) + cx0 * (1 - ratio);
    zTY = zStartTY + (mcy - cy0) + cy0 * (1 - ratio);
    zScale = ns;
    zApply();
  } else if (e.touches.length === 1 && zt0.length === 1) {
    zTX = zStartTX + (e.touches[0].clientX - zt0[0].x);
    zTY = zStartTY + (e.touches[0].clientY - zt0[0].y);
    zApply();
  }
}, { passive: false });

overlay.addEventListener('touchend', () => { zt0 = null; });

// Double-tap to zoom in/reset
let lastTap = 0;
overlay.addEventListener('touchend', (e) => {
  if (e.touches.length > 0) return;
  const now = Date.now();
  if (now - lastTap < 300) {
    if (zScale > 1.5) { zScale = 1; zTX = 0; zTY = 0; }
    else { zScale = 3; zTX = -(overlay.clientWidth); zTY = -(overlay.clientHeight); }
    zApply();
  }
  lastTap = now;
});

// Mouse wheel zoom
overlay.addEventListener('wheel', (e) => {
  if (!zSvg) return;
  e.preventDefault();
  const factor = e.deltaY < 0 ? 1.2 : 1 / 1.2;
  const ns = Math.max(1, Math.min(6, zScale * factor));
  const ratio = ns / zScale;
  const cx = e.clientX, cy = e.clientY;
  zTX = cx - ratio * (cx - zTX);
  zTY = cy - ratio * (cy - zTY);
  zScale = ns;
  zApply();
}, { passive: false });

// Click panels to open
document.querySelectorAll('.illust-panel').forEach(panel => {
  const svg = panel.querySelector('svg');
  if (svg) panel.addEventListener('click', () => zOpen(svg));
});
