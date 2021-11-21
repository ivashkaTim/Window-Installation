(()=>{"use strict";const e=({timing:e,draw:t,duration:l})=>{let n=performance.now();requestAnimationFrame((function c(o){let s=(o-n)/l;s>1&&(s=1);let a=e(s);t(a),s<1&&requestAnimationFrame(c)}))},t=(e,t)=>{e.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(t,"")}))}))},l=({formId:e,someElem:l=[]})=>{const n=document.querySelector(e),c=document.querySelectorAll(".user-name"),o=document.querySelectorAll(".user-phone");try{n.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=n.querySelectorAll("input"),t=new FormData(n),c={};t.forEach(((e,t)=>{c[t]=e}));try{l.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?c[e.id]=t.textContent:"input"===e.type&&(c[e.id]=t.value)}))}catch(e){}var o;(()=>{let e=!1;const t=n.querySelector(".user-name"),l=n.querySelector(".user-phone");return t.value.length>2&&l.value.length>6&&(e=!0),e})()?(o=c,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{e.forEach((e=>{e.value=""}))})):alert("false")})()}))}catch(e){}t(o,/[^\+0-9]$/g),t(c,/[^a-zA-Zа-яА-яёЁ\s]+$/g)};(e=>{const t=document.querySelectorAll(".days"),l=document.querySelectorAll(".hours"),n=document.querySelectorAll(".minutes"),c=document.querySelectorAll(".seconds"),o=()=>{let e=(new Date("25 november 2021").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}};o().timeRemaining>0&&setInterval((()=>{let e=o();const s=(e,t)=>{e.forEach((e=>{var l;e.textContent=(l=t)>=0&&l<10?"0"+l:l}))};s(t,e.days),s(l,e.hours),s(n,e.minutes),s(c,e.seconds)}),1e3)})(),(()=>{const t=document.querySelector(".balkony #calc"),l=document.getElementById("calc-type"),n=document.getElementById("calc-type-material"),c=document.getElementById("calc-input"),o=document.getElementById("calc-total");t&&t.addEventListener("change",(t=>{t.target!==l&&t.target!==n&&t.target!==c||(()=>{const t=+l.options[l.selectedIndex].value,s=+n.options[n.selectedIndex].value,a=c.value;let r=0;t&&s&&a&&(r=t*s*a),e({duration:500,timing:e=>e,draw(e){o.value=Math.round(e*r)}})})()}))})(),(()=>{const e=document.getElementById("services"),t=e.querySelectorAll(".col-lg-6"),l=e.querySelector(".services__arrow--right"),n=e.querySelector(".services__arrow--left");let c=0;l.addEventListener("click",(()=>{t[c].classList.remove("active"),screen.width>576&&t[c+1].classList.remove("active"),c++,screen.width>576&&c++,c>=t.length&&(c=0),t[c].classList.add("active"),screen.width>576&&t[c+1].classList.add("active")})),n.addEventListener("click",(()=>{t[c].classList.remove("active"),screen.width>576&&t[c+1].classList.remove("active"),c--,c<0&&(c=t.length-1),t[c].classList.add("active"),screen.width>576&&(c--,c<0&&(c=t.length-1),t[c].classList.add("active"))})),screen.width>576?(t[c].classList.add("active"),t[c+1].classList.add("active")):screen.width<576&&t[c].classList.add("active")})(),(()=>{const t=document.querySelector(".btn-call"),l=document.querySelector(".header-modal--opened"),n=document.querySelector(".overlay"),c=l.querySelector(".header-modal__close");t.addEventListener("click",(t=>{t.preventDefault(),l.style.opacity="0",l.style.display="block",n.style.opacity="0",n.style.display="block",e({duration:1e3,timing:e=>e,draw(e){l.style.opacity=1*e,n.style.opacity=1*e}})})),c.addEventListener("click",(()=>{n.style.display="none",l.style.display="none"})),n.addEventListener("click",(()=>{n.style.display="none",l.style.display="none"}))})(),(()=>{const t=document.querySelectorAll(".service-button"),l=document.querySelector(".services-modal "),n=document.querySelector(".overlay"),c=document.querySelector(".services-modal__close");t.forEach((t=>{t.addEventListener("click",(t=>{t.preventDefault(),l.style.opacity="0",l.style.display="block",n.style.opacity="0",n.style.display="block",e({duration:1e3,timing:e=>e,draw(e){l.style.opacity=1*e,n.style.opacity=1*e}})}))})),c.addEventListener("click",(()=>{l.style.display="none",n.style.display="none"})),n.addEventListener("click",(()=>{l.style.display="none",n.style.display="none"}))})(),(()=>{const t=document.createElement("div"),l=document.querySelector("#documents"),n=document.createElement("img");t.classList.add("overlay"),l.appendChild(t),t.style.justifyContent="center",t.style.alignItems="center",t.style.zIndex=10,t.style.display="none",n.style.maxHeight="80%",t.appendChild(n),l.addEventListener("click",(l=>{if(l.preventDefault(),l.target.classList.contains("document-overlay")){t.style.display="flex",t.style.opacity="0";const c=l.target.parentNode.getAttribute("href");n.setAttribute("src",c),e({duration:1e3,timing:e=>e,draw(e){t.style.opacity=1*e}})}l.target.matches("div.overlay")&&(t.style.display="none")}))})(),(()=>{const e=document.querySelector("body"),t=document.querySelector(".smooth-scroll"),l=document.getElementById("benefits").getBoundingClientRect();t.style.opacity="0",document.addEventListener("scroll",(()=>{window.scrollY>l.y?(t.style.display="block",t.style.opacity="1"):(t.style.display="none",t.style.opacity="0")})),t.addEventListener("click",(()=>{e.scrollIntoView({block:"center",behavior:"smooth"})}))})(),l({formId:".action-form",someElem:[{type:"input",id:"calc-total"}]}),l({formId:".action-form2",someElem:[{type:"input",id:"calc-total"}]})})();