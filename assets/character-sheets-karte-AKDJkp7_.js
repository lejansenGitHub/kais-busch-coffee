import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */const e=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1500" font-family="'Segoe UI', Arial, sans-serif">

  <!-- Building block base (dark = buildings) -->
  <rect width="800" height="1500" fill="#d6d0c4" rx="6"/>

  <!-- ==================== STREET NETWORK ==================== -->

  <!-- Horizontal cross streets -->
  <line x1="15" y1="50"   x2="785" y2="50"   stroke="#ece8e0" stroke-width="16" stroke-linecap="round"/>
  <line x1="15" y1="200"  x2="750" y2="200"  stroke="#ece8e0" stroke-width="16" stroke-linecap="round"/>
  <line x1="15" y1="400"  x2="720" y2="400"  stroke="#ece8e0" stroke-width="16" stroke-linecap="round"/>
  <line x1="15" y1="600"  x2="740" y2="600"  stroke="#ece8e0" stroke-width="18" stroke-linecap="round"/>
  <line x1="15" y1="770"  x2="750" y2="770"  stroke="#ece8e0" stroke-width="18" stroke-linecap="round"/>
  <line x1="15" y1="950"  x2="760" y2="950"  stroke="#ece8e0" stroke-width="16" stroke-linecap="round"/>
  <line x1="15" y1="1100" x2="770" y2="1100" stroke="#ece8e0" stroke-width="16" stroke-linecap="round"/>
  <line x1="15" y1="1220" x2="785" y2="1220" stroke="#ece8e0" stroke-width="18" stroke-linecap="round"/>
  <line x1="15" y1="1430" x2="785" y2="1430" stroke="#ece8e0" stroke-width="18" stroke-linecap="round"/>

  <!-- Vertical side streets -->
  <line x1="80"  y1="15"   x2="80"  y2="1485" stroke="#ece8e0" stroke-width="14" stroke-linecap="round"/>
  <line x1="620" y1="15"   x2="640" y2="1485" stroke="#ece8e0" stroke-width="14" stroke-linecap="round"/>
  <line x1="200" y1="50"   x2="220" y2="770"  stroke="#ece8e0" stroke-width="11" stroke-linecap="round"/>
  <line x1="530" y1="400"  x2="540" y2="1220" stroke="#ece8e0" stroke-width="11" stroke-linecap="round"/>

  <!-- ==================== MAIN ROUTE STREETS ==================== -->

  <!-- Alte Schulstrasse (Zone 2) -->
  <line x1="450" y1="1210" x2="390" y2="830" stroke="#f2eee6" stroke-width="90" stroke-linecap="round"/>

  <!-- Turmstrasse (Zone 4) -->
  <line x1="370" y1="700" x2="270" y2="310" stroke="#f2eee6" stroke-width="90" stroke-linecap="round"/>

  <!-- ==================== OPEN AREAS ==================== -->

  <!-- Rathausplatz (Zone 1) -->
  <rect x="80" y="1220" width="440" height="200" rx="12" fill="#f2eee6"/>

  <!-- Schelmenturm Vorplatz (Zone 3) -->
  <ellipse cx="380" cy="770" rx="120" ry="80" fill="#f2eee6"/>

  <!-- Ende der Altstadt (Zone 5) -->
  <ellipse cx="260" cy="240" rx="120" ry="90" fill="#f2eee6"/>

  <!-- ==================== WALKING ROUTE ==================== -->

  <path d="M 400 1230 C 430 1100, 430 1000, 420 900 C 400 800, 380 770, 370 740 C 350 620, 320 470, 270 310 C 260 280, 255 260, 260 245"
        fill="none" stroke="#c0392b" stroke-width="3.5" stroke-dasharray="12 6" opacity="0.5"/>

  <polygon points="425,1050 418,1066 432,1066" fill="#c0392b" opacity="0.55" transform="rotate(-8,425,1058)"/>
  <polygon points="335,550 328,566 342,566" fill="#c0392b" opacity="0.55" transform="rotate(-14,335,558)"/>

  <!-- ==================== STREET LABELS ==================== -->

  <text transform="translate(500,1080) rotate(-78)" fill="#8a7e6e" font-size="16" letter-spacing="4" font-style="italic">Alte Schulstra&#xDF;e</text>
  <text transform="translate(370,530) rotate(-76)" fill="#8a7e6e" font-size="16" letter-spacing="4" font-style="italic">Turmstra&#xDF;e</text>

  <!-- ==================== ZONE LABELS (bold, aligned with streets) ==================== -->

  <text transform="translate(520,1090) rotate(-78)" fill="#5a5248" font-size="15" font-weight="bold" letter-spacing="3">ZONE 2</text>
  <text transform="translate(390,540) rotate(-76)" fill="#5a5248" font-size="15" font-weight="bold" letter-spacing="3">ZONE 4</text>

  <!-- ==================== LANDMARK LABELS ==================== -->

  <!-- START: Rathausplatz -->
  <rect x="550" y="1290" width="200" height="56" rx="6" fill="white" fill-opacity="0.88"/>
  <circle cx="538" cy="1318" r="18" fill="#27ae60" stroke="white" stroke-width="2"/>
  <text x="538" y="1324" text-anchor="middle" fill="white" font-size="14" font-weight="bold">S</text>
  <text x="650" y="1312" text-anchor="middle" fill="#2c3e50" font-size="16" font-weight="bold">Rathausplatz</text>
  <text x="650" y="1332" text-anchor="middle" fill="#95a5a6" font-size="12">Start · Zone 1</text>

  <!-- MIDBOSS: Schelmenturm -->
  <rect x="530" y="745" width="190" height="56" rx="6" fill="white" fill-opacity="0.88"/>
  <circle cx="518" cy="773" r="18" fill="#e67e22" stroke="white" stroke-width="2"/>
  <text x="518" y="779" text-anchor="middle" fill="white" font-size="14" font-weight="bold">M</text>
  <text x="625" y="768" text-anchor="middle" fill="#2c3e50" font-size="16" font-weight="bold">Schelmenturm</text>
  <text x="625" y="788" text-anchor="middle" fill="#95a5a6" font-size="12">Midboss · Zone 3</text>

  <!-- ENDBOSS: Ende der Altstadt -->
  <rect x="410" y="212" width="220" height="56" rx="6" fill="white" fill-opacity="0.88"/>
  <circle cx="398" cy="240" r="18" fill="#c0392b" stroke="white" stroke-width="2"/>
  <text x="398" y="246" text-anchor="middle" fill="white" font-size="14" font-weight="bold">E</text>
  <text x="520" y="235" text-anchor="middle" fill="#2c3e50" font-size="16" font-weight="bold">Ende der Altstadt</text>
  <text x="520" y="255" text-anchor="middle" fill="#95a5a6" font-size="12">Endboss · Zone 5</text>

  <!-- ======================================================== -->
  <!-- ==================== ENCOUNTER MARKERS ================== -->
  <!-- ======================================================== -->

  <!-- ===== ZONE 1 — Rathausplatz (8 encounters, 3 rows) ===== -->

  <!-- Row 1: Quests -->
  <!-- 1. Ingrid (Quest) -->
  <circle cx="160" cy="1255" r="14" fill="#2980b9" stroke="white" stroke-width="1.5"/>
  <text x="160" y="1260" text-anchor="middle" fill="white" font-size="11" font-weight="bold">Q</text>
  <text x="160" y="1238" text-anchor="middle" fill="#2c3e50" font-size="11" font-weight="bold">1. Ingrid</text>

  <!-- 2. Martina (Quest) — MOVED from Zone 2 -->
  <circle cx="300" cy="1255" r="14" fill="#2980b9" stroke="white" stroke-width="1.5"/>
  <text x="300" y="1260" text-anchor="middle" fill="white" font-size="11" font-weight="bold">Q</text>
  <text x="300" y="1238" text-anchor="middle" fill="#2c3e50" font-size="11" font-weight="bold">2. Martina</text>

  <!-- 3. Elena (Quest) — MOVED from Zone 2 -->
  <circle cx="440" cy="1255" r="14" fill="#2980b9" stroke="white" stroke-width="1.5"/>
  <text x="440" y="1260" text-anchor="middle" fill="white" font-size="11" font-weight="bold">Q</text>
  <text x="440" y="1238" text-anchor="middle" fill="#2c3e50" font-size="11" font-weight="bold">3. Elena</text>

  <!-- Row 2: First 3 fights -->
  <!-- 4. Hubi Tutorial (Lv1) -->
  <circle cx="160" cy="1325" r="14" fill="#c0392b" stroke="white" stroke-width="1.5"/>
  <text x="160" y="1330" text-anchor="middle" fill="white" font-size="10" font-weight="bold">Lv1</text>
  <text x="160" y="1308" text-anchor="middle" fill="#2c3e50" font-size="11" font-weight="bold">4. Hubi</text>

  <!-- 5. Simon (Lv1) -->
  <circle cx="300" cy="1325" r="14" fill="#c0392b" stroke="white" stroke-width="1.5"/>
  <text x="300" y="1330" text-anchor="middle" fill="white" font-size="10" font-weight="bold">Lv1</text>
  <text x="300" y="1308" text-anchor="middle" fill="#2c3e50" font-size="11" font-weight="bold">5. Simon</text>

  <!-- 6. Kai weak (Lv2) -->
  <circle cx="440" cy="1325" r="14" fill="#c0392b" stroke="white" stroke-width="1.5"/>
  <text x="440" y="1330" text-anchor="middle" fill="white" font-size="10" font-weight="bold">Lv2</text>
  <text x="440" y="1308" text-anchor="middle" fill="#2c3e50" font-size="11" font-weight="bold">6. Kai</text>

  <!-- Row 3: Last 2 fights -->
  <!-- 7. Jess (Lv4) -->
  <circle cx="220" cy="1395" r="14" fill="#c0392b" stroke="white" stroke-width="1.5"/>
  <text x="220" y="1400" text-anchor="middle" fill="white" font-size="10" font-weight="bold">Lv4</text>
  <text x="220" y="1415" text-anchor="middle" fill="#2c3e50" font-size="11" font-weight="bold">7. Jess</text>

  <!-- 8. Daniel (Lv6) -->
  <circle cx="380" cy="1395" r="14" fill="#c0392b" stroke="white" stroke-width="1.5"/>
  <text x="380" y="1400" text-anchor="middle" fill="white" font-size="10" font-weight="bold">Lv6</text>
  <text x="380" y="1415" text-anchor="middle" fill="#2c3e50" font-size="11" font-weight="bold">8. Daniel</text>

  <!-- ===== ZONE 2 — Alte Schulstra&#xDF;e (6 encounters) ===== -->

  <!-- 9. Eva (Quest) -->
  <circle cx="446" cy="1183" r="14" fill="#2980b9" stroke="white" stroke-width="1.5"/>
  <text x="446" y="1188" text-anchor="middle" fill="white" font-size="11" font-weight="bold">Q</text>
  <text x="446" y="1166" text-anchor="middle" fill="#2c3e50" font-size="11" font-weight="bold">9. Eva</text>

  <!-- 10. Mirko (Lv7) -->
  <circle cx="435" cy="1118" r="14" fill="#c0392b" stroke="white" stroke-width="1.5"/>
  <text x="435" y="1123" text-anchor="middle" fill="white" font-size="10" font-weight="bold">Lv7</text>
  <text x="435" y="1101" text-anchor="middle" fill="#2c3e50" font-size="11" font-weight="bold">10. Mirko</text>

  <!-- 11. Father (Quest) -->
  <circle cx="425" cy="1053" r="14" fill="#2980b9" stroke="white" stroke-width="1.5"/>
  <text x="425" y="1058" text-anchor="middle" fill="white" font-size="11" font-weight="bold">Q</text>
  <text x="425" y="1036" text-anchor="middle" fill="#2c3e50" font-size="11" font-weight="bold">11. Vater</text>

  <!-- 12. Vater (Lv8) -->
  <circle cx="415" cy="987" r="14" fill="#c0392b" stroke="white" stroke-width="1.5"/>
  <text x="415" y="992" text-anchor="middle" fill="white" font-size="10" font-weight="bold">Lv8</text>
  <text x="415" y="970" text-anchor="middle" fill="#2c3e50" font-size="11" font-weight="bold">12. Vater</text>

  <!-- 13. Nick (Lv9) -->
  <circle cx="405" cy="922" r="14" fill="#c0392b" stroke="white" stroke-width="1.5"/>
  <text x="405" y="927" text-anchor="middle" fill="white" font-size="10" font-weight="bold">Lv9</text>
  <text x="405" y="905" text-anchor="middle" fill="#2c3e50" font-size="11" font-weight="bold">13. Nick</text>

  <!-- 14. Lukas (Lv10) -->
  <circle cx="394" cy="857" r="14" fill="#c0392b" stroke="white" stroke-width="1.5"/>
  <text x="394" y="862" text-anchor="middle" fill="white" font-size="10" font-weight="bold">L10</text>
  <text x="394" y="840" text-anchor="middle" fill="#2c3e50" font-size="11" font-weight="bold">14. Lukas</text>

  <!-- ===== ZONE 3 — Schelmenturm Vorplatz (3 encounters) ===== -->

  <!-- 15. Essen (Quest) -->
  <circle cx="310" cy="810" r="14" fill="#2980b9" stroke="white" stroke-width="1.5"/>
  <text x="310" y="815" text-anchor="middle" fill="white" font-size="11" font-weight="bold">Q</text>
  <text x="310" y="830" text-anchor="middle" fill="#2c3e50" font-size="11" font-weight="bold">15. Essen</text>

  <!-- 16. Hubi Barrier (Quest) -->
  <circle cx="390" cy="780" r="14" fill="#2980b9" stroke="white" stroke-width="1.5"/>
  <text x="390" y="785" text-anchor="middle" fill="white" font-size="11" font-weight="bold">Q</text>
  <text x="390" y="800" text-anchor="middle" fill="#2c3e50" font-size="11" font-weight="bold">16. Hubi</text>

  <!-- 17. Hubi Mid-Boss (Lv7) -->
  <circle cx="370" cy="733" r="18" fill="#e67e22" stroke="white" stroke-width="2"/>
  <text x="370" y="739" text-anchor="middle" fill="white" font-size="11" font-weight="bold">Lv7</text>
  <text x="370" y="715" text-anchor="middle" fill="#2c3e50" font-size="11" font-weight="bold">17. Hubi Boss</text>

  <!-- ===== ZONE 4 — Turmstra&#xDF;e (8 encounters) ===== -->

  <!-- 18. Simon Feuer (Quest) — MOVED from Zone 5 -->
  <circle cx="365" cy="680" r="14" fill="#2980b9" stroke="white" stroke-width="1.5"/>
  <text x="365" y="685" text-anchor="middle" fill="white" font-size="11" font-weight="bold">Q</text>
  <text x="365" y="663" text-anchor="middle" fill="#2c3e50" font-size="11" font-weight="bold">18. Simon</text>

  <!-- 19. Hendrik (Quest) — MOVED to start of Zone 4 -->
  <circle cx="353" cy="633" r="14" fill="#2980b9" stroke="white" stroke-width="1.5"/>
  <text x="353" y="638" text-anchor="middle" fill="white" font-size="11" font-weight="bold">Q</text>
  <text x="353" y="616" text-anchor="middle" fill="#2c3e50" font-size="11" font-weight="bold">19. Hendrik</text>

  <!-- 20. Eva (Lv5) -->
  <circle cx="341" cy="586" r="14" fill="#c0392b" stroke="white" stroke-width="1.5"/>
  <text x="341" y="591" text-anchor="middle" fill="white" font-size="10" font-weight="bold">Lv5</text>
  <text x="341" y="569" text-anchor="middle" fill="#2c3e50" font-size="11" font-weight="bold">20. Eva</text>

  <!-- 21. Elena (Lv7) -->
  <circle cx="329" cy="539" r="14" fill="#c0392b" stroke="white" stroke-width="1.5"/>
  <text x="329" y="544" text-anchor="middle" fill="white" font-size="10" font-weight="bold">Lv7</text>
  <text x="329" y="522" text-anchor="middle" fill="#2c3e50" font-size="11" font-weight="bold">21. Elena</text>

  <!-- 22. Katta (Quest) -->
  <circle cx="316" cy="491" r="14" fill="#2980b9" stroke="white" stroke-width="1.5"/>
  <text x="316" y="496" text-anchor="middle" fill="white" font-size="11" font-weight="bold">Q</text>
  <text x="316" y="474" text-anchor="middle" fill="#2c3e50" font-size="11" font-weight="bold">22. Katta</text>

  <!-- 23. Katta (Lv5) -->
  <circle cx="304" cy="444" r="14" fill="#c0392b" stroke="white" stroke-width="1.5"/>
  <text x="304" y="449" text-anchor="middle" fill="white" font-size="10" font-weight="bold">Lv5</text>
  <text x="304" y="427" text-anchor="middle" fill="#2c3e50" font-size="11" font-weight="bold">23. Katta</text>

  <!-- 24. Kai (Quest) -->
  <circle cx="292" cy="396" r="14" fill="#2980b9" stroke="white" stroke-width="1.5"/>
  <text x="292" y="401" text-anchor="middle" fill="white" font-size="11" font-weight="bold">Q</text>
  <text x="292" y="379" text-anchor="middle" fill="#2c3e50" font-size="11" font-weight="bold">24. Kai</text>

  <!-- 25. Kai strong (Lv6) -->
  <circle cx="280" cy="349" r="14" fill="#c0392b" stroke="white" stroke-width="1.5"/>
  <text x="280" y="354" text-anchor="middle" fill="white" font-size="10" font-weight="bold">Lv6</text>
  <text x="280" y="332" text-anchor="middle" fill="#2c3e50" font-size="11" font-weight="bold">25. Kai</text>

  <!-- ===== ZONE 5 — Ende der Altstadt (2 encounters) ===== -->

  <!-- 26. Simon Erwacht (Lv10) -->
  <circle cx="280" cy="250" r="14" fill="#c0392b" stroke="white" stroke-width="1.5"/>
  <text x="280" y="255" text-anchor="middle" fill="white" font-size="10" font-weight="bold">L10</text>
  <text x="280" y="233" text-anchor="middle" fill="#2c3e50" font-size="11" font-weight="bold">26. Simon</text>

  <!-- 27. Hubi Endboss (Lv11) -->
  <circle cx="230" cy="200" r="18" fill="#c0392b" stroke="white" stroke-width="2"/>
  <text x="230" y="206" text-anchor="middle" fill="white" font-size="11" font-weight="bold">L11</text>
  <text x="230" y="182" text-anchor="middle" fill="#2c3e50" font-size="11" font-weight="bold">27. Hubi</text>

  <!-- ==================== LEGEND ==================== -->

  <rect x="595" y="1410" width="190" height="75" rx="6" fill="white" fill-opacity="0.85"/>
  <circle cx="616" cy="1432" r="9" fill="#c0392b"/>
  <text x="632" y="1436" fill="#2c3e50" font-size="11">Kampf</text>
  <circle cx="706" cy="1432" r="9" fill="#2980b9"/>
  <text x="722" y="1436" fill="#2c3e50" font-size="11">Quest</text>
  <circle cx="616" cy="1460" r="9" fill="#e67e22"/>
  <text x="632" y="1464" fill="#2c3e50" font-size="11">Boss</text>
  <circle cx="706" cy="1460" r="9" fill="#27ae60"/>
  <text x="722" y="1464" fill="#2c3e50" font-size="11">Start</text>

  <!-- ==================== MAP TITLE ==================== -->

  <text x="400" y="1490" text-anchor="middle" fill="#7a7060" font-size="14" letter-spacing="2">MONHEIM AM RHEIN · ALTSTADT</text>

</svg>
`,t=document.createElement("style");t.textContent=`
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
  .map-container {
    background: #d6d0c4;
    border-radius: 6px;
    overflow: hidden;
    margin-bottom: 16px;
  }
  .map-container svg {
    display: block;
    width: 100%;
    height: auto;
  }
`;document.head.appendChild(t);const n=document.getElementById("app");n.innerHTML=`
  <a href="../" class="back-link">← Zurück</a>
  <div class="character-card">
    <div class="card-header">
      <div class="character-name">Karte</div>
    </div>
    <div class="map-container">${e}</div>
  </div>
`;
