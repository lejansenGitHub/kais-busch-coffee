import './style.css';

const STORAGE_KEY = 'coffee-voucher-count';
const BARCODE_KEY = 'coffee-voucher-barcode';
const MAX_COFFEES = 10;

// Build HTML
document.querySelector('#app').innerHTML = `
  <img src="${import.meta.env.BASE_URL}logo.png" alt="Busch Backstube" class="logo" />
  <h1>Kai's Busch Coffee App</h1>

  <div class="slots-container">
    ${Array.from({ length: 10 }, (_, i) => `
      <div class="slot" data-index="${i}"><span class="empty">${i + 1}</span></div>
    `).join('')}
  </div>

  <div class="counter-text"><span id="count">0</span> / 10 coffees</div>

  <div class="barcode-section">
    <h2>Voucher Code</h2>
    <div id="barcode-area" class="barcode-area">
      <img id="barcode-img" src="" alt="Voucher barcode" style="display:none;" />
      <p id="barcode-placeholder" class="barcode-placeholder">No barcode loaded yet.<br>Use the button below to load one.</p>
    </div>
    <div class="barcode-buttons">
      <button id="load-barcode-btn" class="btn btn-secondary">Load Barcode / QR Code</button>
      <button id="clear-barcode-btn" class="btn btn-clear" style="display:none;">Clear</button>
    </div>
    <input type="file" id="barcode-input" accept="image/*" style="display:none;" />
  </div>

  <div class="action-section">
    <button id="buy-btn" class="btn btn-primary">Buy a Coffee</button>
    <button id="reset-btn" class="btn btn-danger">Reset</button>
  </div>
`;

let count = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);

function renderSlots(animateIndex) {
  const slots = document.querySelectorAll('.slot');
  slots.forEach((slot, i) => {
    if (i < count) {
      slot.classList.add('filled');
      const shouldAnimate = i === animateIndex;
      slot.innerHTML = `<span class="coffee-icon${shouldAnimate ? ' animate' : ''}">\u2615</span>`;
    } else {
      slot.classList.remove('filled');
      slot.innerHTML = `<span class="empty">${i + 1}</span>`;
    }
  });

  document.getElementById('count').textContent = count;

  const buyBtn = document.getElementById('buy-btn');
  if (count >= MAX_COFFEES) {
    buyBtn.disabled = true;
    buyBtn.textContent = 'All 10 coffees used!';
    if (!document.querySelector('.completed-banner')) {
      const banner = document.createElement('div');
      banner.className = 'completed-banner';
      banner.textContent = 'Voucher complete! Enjoy your coffees!';
      const app = document.getElementById('app');
      app.insertBefore(banner, document.querySelector('.barcode-section'));
    }
  } else {
    buyBtn.disabled = false;
    buyBtn.textContent = 'Buy a Coffee';
    const banner = document.querySelector('.completed-banner');
    if (banner) banner.remove();
  }
}

function buyCoffee() {
  if (count < MAX_COFFEES) {
    count++;
    localStorage.setItem(STORAGE_KEY, count.toString());
    renderSlots(count - 1);
  }
}

function resetVoucher() {
  if (confirm('Reset all coffees to 0?')) {
    count = 0;
    localStorage.setItem(STORAGE_KEY, '0');
    renderSlots();
  }
}

function loadBarcode() {
  document.getElementById('barcode-input').click();
}

function clearBarcode() {
  if (!confirm('Remove the loaded barcode?')) return;
  localStorage.removeItem(BARCODE_KEY);
  const img = document.getElementById('barcode-img');
  const placeholder = document.getElementById('barcode-placeholder');
  const clearBtn = document.getElementById('clear-barcode-btn');
  img.src = '';
  img.style.display = 'none';
  placeholder.style.display = '';
  clearBtn.style.display = 'none';
}

function handleBarcodeFile(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const dataUrl = e.target.result;
    localStorage.setItem(BARCODE_KEY, dataUrl);
    showBarcode(dataUrl);
  };
  reader.readAsDataURL(file);
  // Reset input so the same file can be re-selected
  event.target.value = '';
}

function showBarcode(dataUrl) {
  const img = document.getElementById('barcode-img');
  const placeholder = document.getElementById('barcode-placeholder');
  const clearBtn = document.getElementById('clear-barcode-btn');
  img.src = dataUrl;
  img.style.display = 'block';
  placeholder.style.display = 'none';
  clearBtn.style.display = '';
}

// Event listeners
document.getElementById('buy-btn').addEventListener('click', buyCoffee);
document.getElementById('reset-btn').addEventListener('click', resetVoucher);
document.getElementById('load-barcode-btn').addEventListener('click', loadBarcode);
document.getElementById('clear-barcode-btn').addEventListener('click', clearBarcode);
document.getElementById('barcode-input').addEventListener('change', handleBarcodeFile);

// Restore barcode from storage
const savedBarcode = localStorage.getItem(BARCODE_KEY);
if (savedBarcode) {
  showBarcode(savedBarcode);
}

renderSlots();
