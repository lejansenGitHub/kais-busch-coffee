import './style.css';
import mapSvg from '../../altstadt-map.svg?raw';

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
  .map-container {
    background: #d6d0c4;
    border-radius: 6px;
    overflow: hidden;
    margin-bottom: 16px;
    touch-action: none;
    user-select: none;
    -webkit-user-select: none;
    cursor: grab;
  }
  .map-container.grabbing { cursor: grabbing; }
  .map-container svg {
    display: block;
    width: 100%;
    height: auto;
    transform-origin: 0 0;
    pointer-events: none;
  }
  .map-controls {
    display: flex;
    gap: 8px;
    justify-content: center;
    margin-bottom: 12px;
  }
  .map-controls button {
    width: 40px;
    height: 40px;
    border: 2px solid #7a6a4a;
    border-radius: 6px;
    background: #f5f0e6;
    color: #4a3c28;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .map-controls button:active { background: #e8e0d0; }
`;
document.head.appendChild(style);

const app = document.getElementById('app');
app.innerHTML = `
  <a href="../" class="back-link">\u2190 Zur\u00fcck</a>
  <div class="character-card">
    <div class="card-header">
      <div class="character-name">Karte</div>
    </div>
    <div class="map-controls">
      <button id="zoom-in">+</button>
      <button id="zoom-reset">1:1</button>
      <button id="zoom-out">\u2212</button>
    </div>
    <div class="map-container" id="map-container">${mapSvg}</div>
  </div>
`;

// --- Pinch-zoom + pan ---
const container = document.getElementById('map-container');
const svg = container.querySelector('svg');

let scale = 1;
let translateX = 0;
let translateY = 0;
const MIN_SCALE = 1;
const MAX_SCALE = 5;

function applyTransform() {
  // Clamp pan so map doesn't leave the viewport
  const cw = container.clientWidth;
  const ch = container.clientHeight;
  const sw = svg.getBoundingClientRect().width / scale * scale;
  const sh = svg.getBoundingClientRect().height / scale * scale;
  const svgW = cw * scale;
  const svgH = (svg.viewBox.baseVal.height / svg.viewBox.baseVal.width) * cw * scale;

  const minX = Math.min(0, cw - svgW);
  const minY = Math.min(0, ch - svgH);
  translateX = Math.max(minX, Math.min(0, translateX));
  translateY = Math.max(minY, Math.min(0, translateY));

  svg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
}

function zoomAt(newScale, cx, cy) {
  newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, newScale));
  const ratio = newScale / scale;
  translateX = cx - ratio * (cx - translateX);
  translateY = cy - ratio * (cy - translateY);
  scale = newScale;
  applyTransform();
}

function resetZoom() {
  scale = 1;
  translateX = 0;
  translateY = 0;
  applyTransform();
}

// Button controls
document.getElementById('zoom-in').addEventListener('click', () => {
  const r = container.getBoundingClientRect();
  zoomAt(scale * 1.4, r.width / 2, r.height / 2);
});
document.getElementById('zoom-out').addEventListener('click', () => {
  const r = container.getBoundingClientRect();
  zoomAt(scale / 1.4, r.width / 2, r.height / 2);
});
document.getElementById('zoom-reset').addEventListener('click', resetZoom);

// Touch: pinch-zoom + pan
let touches0 = null;
let startScale = 1;
let startTX = 0;
let startTY = 0;

container.addEventListener('touchstart', (e) => {
  if (e.touches.length === 2) {
    e.preventDefault();
    touches0 = Array.from(e.touches).map(t => ({ x: t.clientX, y: t.clientY }));
    startScale = scale;
    startTX = translateX;
    startTY = translateY;
  } else if (e.touches.length === 1 && scale > 1) {
    e.preventDefault();
    touches0 = [{ x: e.touches[0].clientX, y: e.touches[0].clientY }];
    startTX = translateX;
    startTY = translateY;
  }
}, { passive: false });

container.addEventListener('touchmove', (e) => {
  if (!touches0) return;
  e.preventDefault();

  if (e.touches.length === 2 && touches0.length === 2) {
    const cur = Array.from(e.touches).map(t => ({ x: t.clientX, y: t.clientY }));
    const d0 = Math.hypot(touches0[1].x - touches0[0].x, touches0[1].y - touches0[0].y);
    const d1 = Math.hypot(cur[1].x - cur[0].x, cur[1].y - cur[0].y);
    const newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, startScale * (d1 / d0)));

    const rect = container.getBoundingClientRect();
    // Midpoint of initial touch pair (relative to container)
    const cx0 = (touches0[0].x + touches0[1].x) / 2 - rect.left;
    const cy0 = (touches0[0].y + touches0[1].y) / 2 - rect.top;
    // Midpoint movement (pan while pinching)
    const mcx = (cur[0].x + cur[1].x) / 2;
    const mcy = (cur[0].y + cur[1].y) / 2;
    const mcx0 = (touches0[0].x + touches0[1].x) / 2;
    const mcy0 = (touches0[0].y + touches0[1].y) / 2;

    const ratio = newScale / startScale;
    translateX = startTX + (mcx - mcx0) + cx0 * (1 - ratio);
    translateY = startTY + (mcy - mcy0) + cy0 * (1 - ratio);
    scale = newScale;
    applyTransform();
  } else if (e.touches.length === 1 && touches0.length === 1) {
    translateX = startTX + (e.touches[0].clientX - touches0[0].x);
    translateY = startTY + (e.touches[0].clientY - touches0[0].y);
    applyTransform();
  }
}, { passive: false });

container.addEventListener('touchend', () => { touches0 = null; });
container.addEventListener('touchcancel', () => { touches0 = null; });

// Mouse: drag to pan + wheel to zoom
let dragging = false;
let dragStart = { x: 0, y: 0 };

container.addEventListener('mousedown', (e) => {
  if (scale <= 1) return;
  dragging = true;
  dragStart = { x: e.clientX - translateX, y: e.clientY - translateY };
  container.classList.add('grabbing');
});

window.addEventListener('mousemove', (e) => {
  if (!dragging) return;
  translateX = e.clientX - dragStart.x;
  translateY = e.clientY - dragStart.y;
  applyTransform();
});

window.addEventListener('mouseup', () => {
  dragging = false;
  container.classList.remove('grabbing');
});

container.addEventListener('wheel', (e) => {
  e.preventDefault();
  const rect = container.getBoundingClientRect();
  const cx = e.clientX - rect.left;
  const cy = e.clientY - rect.top;
  const factor = e.deltaY < 0 ? 1.15 : 1 / 1.15;
  zoomAt(scale * factor, cx, cy);
}, { passive: false });
