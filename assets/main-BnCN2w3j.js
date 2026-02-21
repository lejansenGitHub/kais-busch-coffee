import"./modulepreload-polyfill-B5Qt9EMX.js";const d="coffee-voucher-count",l="coffee-voucher-barcode",i=10;document.querySelector("#app").innerHTML=`
  <img src="/kais-busch-coffee/logo.png" alt="Busch Backstube" class="logo" />
  <h1>Kai's Busch Coffee App</h1>

  <div class="slots-container">
    ${Array.from({length:10},(n,t)=>`
      <div class="slot" data-index="${t}"><span class="empty">${t+1}</span></div>
    `).join("")}
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
`;let c=parseInt(localStorage.getItem(d)||"0",10);function s(n){document.querySelectorAll(".slot").forEach((e,a)=>{if(a<c){e.classList.add("filled");const b=a===n;e.innerHTML=`<span class="coffee-icon${b?" animate":""}">☕</span>`}else e.classList.remove("filled"),e.innerHTML=`<span class="empty">${a+1}</span>`}),document.getElementById("count").textContent=c;const o=document.getElementById("buy-btn");if(c>=i){if(o.disabled=!0,o.textContent="All 10 coffees used!",!document.querySelector(".completed-banner")){const e=document.createElement("div");e.className="completed-banner",e.textContent="Voucher complete! Enjoy your coffees!",document.getElementById("app").insertBefore(e,document.querySelector(".barcode-section"))}}else{o.disabled=!1,o.textContent="Buy a Coffee";const e=document.querySelector(".completed-banner");e&&e.remove()}}function m(){c<i&&(c++,localStorage.setItem(d,c.toString()),s(c-1))}function y(){confirm("Reset all coffees to 0?")&&(c=0,localStorage.setItem(d,"0"),s())}function f(){document.getElementById("barcode-input").click()}function p(){if(!confirm("Remove the loaded barcode?"))return;localStorage.removeItem(l);const n=document.getElementById("barcode-img"),t=document.getElementById("barcode-placeholder"),o=document.getElementById("clear-barcode-btn");n.src="",n.style.display="none",t.style.display="",o.style.display="none"}function g(n){const t=n.target.files[0];if(!t)return;const o=new FileReader;o.onload=function(e){const a=e.target.result;localStorage.setItem(l,a),u(a)},o.readAsDataURL(t),n.target.value=""}function u(n){const t=document.getElementById("barcode-img"),o=document.getElementById("barcode-placeholder"),e=document.getElementById("clear-barcode-btn");t.src=n,t.style.display="block",o.style.display="none",e.style.display=""}document.getElementById("buy-btn").addEventListener("click",m);document.getElementById("reset-btn").addEventListener("click",y);document.getElementById("load-barcode-btn").addEventListener("click",f);document.getElementById("clear-barcode-btn").addEventListener("click",p);document.getElementById("barcode-input").addEventListener("change",g);const r=localStorage.getItem(l);r&&u(r);s();
