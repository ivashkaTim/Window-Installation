(()=>{"use strict";const e=({timing:e,draw:t,duration:n})=>{let l=performance.now();requestAnimationFrame((function o(a){let c=(a-l)/n;c>1&&(c=1);let r=e(c);t(r),c<1&&requestAnimationFrame(o)}))};(e=>{const t=document.querySelectorAll(".days"),n=document.querySelectorAll(".hours"),l=document.querySelectorAll(".minutes"),o=document.querySelectorAll(".seconds"),a=()=>{let e=(new Date("25 november 2021").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}};a().timeRemaining>0&&setInterval((()=>{let e=a();const c=(e,t)=>{e.forEach((e=>{var n;e.textContent=(n=t)>=0&&n<10?"0"+n:n}))};c(t,e.days),c(n,e.hours),c(l,e.minutes),c(o,e.seconds)}),1e3)})(),(()=>{const t=document.querySelector(".balkony #calc"),n=document.getElementById("calc-type"),l=document.getElementById("calc-type-material"),o=document.getElementById("calc-input"),a=document.getElementById("calc-total");t&&t.addEventListener("change",(t=>{t.target!==n&&t.target!==l&&t.target!==o||(()=>{const t=+n.options[n.selectedIndex].value,c=+l.options[l.selectedIndex].value,r=o.value;let d=0;t&&c&&r&&(d=t*c*r),e({duration:500,timing:e=>e,draw(e){a.value=Math.round(e*d)}})})()}))})(),(()=>{const t=document.querySelector(".btn-call"),n=document.querySelector(".header-modal--opened"),l=document.querySelector(".overlay"),o=n.querySelector(".header-modal__close");t.addEventListener("click",(t=>{t.preventDefault(),n.style.opacity="0",n.style.display="block",l.style.opacity="0",l.style.display="block",e({duration:1e3,timing:e=>e,draw(e){n.style.opacity=1*e,l.style.opacity=1*e}})})),o.addEventListener("click",(()=>{l.style.display="none",n.style.display="none"})),l.addEventListener("click",(()=>{l.style.display="none",n.style.display="none"}))})()})();