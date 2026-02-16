(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const c of e)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&t(d)}).observe(document,{childList:!0,subtree:!0});function n(e){const c={};return e.integrity&&(c.integrity=e.integrity),e.referrerPolicy&&(c.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?c.credentials="include":e.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function t(e){if(e.ep)return;e.ep=!0;const c=n(e);fetch(e.href,c)}})();const s="coffee-voucher-count",l="coffee-voucher-barcode",m=10;document.querySelector("#app").innerHTML=`
  <img src="/kais-busch-coffee/logo.png" alt="Busch Backstube" class="logo" />
  <h1>Kai's Busch Coffee App</h1>

  <div class="slots-container">
    ${Array.from({length:10},(r,o)=>`
      <div class="slot" data-index="${o}"><span class="empty">${o+1}</span></div>
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
`;let a=parseInt(localStorage.getItem(s)||"0",10);function i(r){document.querySelectorAll(".slot").forEach((t,e)=>{if(e<a){t.classList.add("filled");const c=e===r;t.innerHTML=`<span class="coffee-icon${c?" animate":""}">☕</span>`}else t.classList.remove("filled"),t.innerHTML=`<span class="empty">${e+1}</span>`}),document.getElementById("count").textContent=a;const n=document.getElementById("buy-btn");if(a>=m){if(n.disabled=!0,n.textContent="All 10 coffees used!",!document.querySelector(".completed-banner")){const t=document.createElement("div");t.className="completed-banner",t.textContent="Voucher complete! Enjoy your coffees!",document.getElementById("app").insertBefore(t,document.querySelector(".barcode-section"))}}else{n.disabled=!1,n.textContent="Buy a Coffee";const t=document.querySelector(".completed-banner");t&&t.remove()}}function b(){a<m&&(a++,localStorage.setItem(s,a.toString()),i(a-1))}function p(){confirm("Reset all coffees to 0?")&&(a=0,localStorage.setItem(s,"0"),i())}function y(){document.getElementById("barcode-input").click()}function g(){if(!confirm("Remove the loaded barcode?"))return;localStorage.removeItem(l);const r=document.getElementById("barcode-img"),o=document.getElementById("barcode-placeholder"),n=document.getElementById("clear-barcode-btn");r.src="",r.style.display="none",o.style.display="",n.style.display="none"}function h(r){const o=r.target.files[0];if(!o)return;const n=new FileReader;n.onload=function(t){const e=t.target.result;localStorage.setItem(l,e),f(e)},n.readAsDataURL(o),r.target.value=""}function f(r){const o=document.getElementById("barcode-img"),n=document.getElementById("barcode-placeholder"),t=document.getElementById("clear-barcode-btn");o.src=r,o.style.display="block",n.style.display="none",t.style.display=""}document.getElementById("buy-btn").addEventListener("click",b);document.getElementById("reset-btn").addEventListener("click",p);document.getElementById("load-barcode-btn").addEventListener("click",y);document.getElementById("clear-barcode-btn").addEventListener("click",g);document.getElementById("barcode-input").addEventListener("change",h);const u=localStorage.getItem(l);u&&f(u);i();
