(()=>{"use strict";const e=({timing:e,draw:t,duration:l})=>{let o=performance.now();requestAnimationFrame((function n(c){let s=(c-o)/l;s>1&&(s=1);let a=e(s);t(a),s<1&&requestAnimationFrame(n)}))},t=(e,t)=>{e.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(t,"")}))}))},l=(e,t,l,o,n)=>{const c=document.getElementById(e),s=c.querySelectorAll(l),a=c.querySelector(o),r=c.querySelector(n);let i=!0,d=0;const y=()=>{s.forEach((e=>{e.classList.contains("active")?e.classList.remove("active"):e.classList.contains("active")||e.classList.add("active")}))};a.addEventListener("click",(()=>{i?y():(s[d].classList.remove("active"),d++,d>=s.length&&(d=0),s[d].classList.add("active"))})),r.addEventListener("click",(()=>{i?y():(s[d].classList.remove("active"),d--,d<0&&(d=s.length-1),s[d].classList.add("active"))})),(()=>{if(screen.width>576)for(let e=0;e<s.length&&(s[e].classList.add("active"),!(e>=t-1));e++);else screen.width<576&&(s[d].classList.add("active"),i=!1)})()},o=({formId:e,someElem:l=[]})=>{const o=document.querySelector(e),n=document.querySelectorAll(".user-name"),c=document.querySelectorAll(".user-phone");try{o.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=o.querySelectorAll("input"),t=new FormData(o),n={};t.forEach(((e,t)=>{n[t]=e}));try{l.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?n[e.id]=t.textContent:"input"===e.type&&(n[e.id]=t.value)}))}catch(e){}var c;(()=>{let e=!1;const t=o.querySelector(".user-name"),l=o.querySelector(".user-phone");return t.value.length<2&&(t.style.border="1px solid red"),l.value.length<6&&(l.style.border="1px solid red"),t.value.length>2&&l.value.length>6&&(e=!0),e})()&&(c=n,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{e.forEach((e=>{e.value="",e.style.border="1px solid #dfdfdf"}))}))})()}))}catch(e){}t(c,/[^\+0-9]$/g),t(n,/[^a-zA-Zа-яА-яёЁ\s]+$/g)};(e=>{const t=document.querySelectorAll(".days"),l=document.querySelectorAll(".hours"),o=document.querySelectorAll(".minutes"),n=document.querySelectorAll(".seconds"),c=()=>{let e=(new Date("25 november 2021").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}};c().timeRemaining>0&&setInterval((()=>{let e=c();const s=(e,t)=>{e.forEach((e=>{var l;e.textContent=(l=t)>=0&&l<10?"0"+l:l}))};s(t,e.days),s(l,e.hours),s(o,e.minutes),s(n,e.seconds)}),1e3)})(),(()=>{const t=document.querySelector(".balkony #calc"),l=document.getElementById("calc-type"),o=document.getElementById("calc-type-material"),n=document.getElementById("calc-input"),c=document.getElementById("calc-total");t&&t.addEventListener("change",(t=>{t.target!==l&&t.target!==o&&t.target!==n||(()=>{const t=+l.options[l.selectedIndex].value,s=+o.options[o.selectedIndex].value,a=n.value;let r=0;t&&s&&a&&(r=t*s*a),e({duration:500,timing:e=>e,draw(e){c.value=Math.round(e*r)}})})()}))})(),l("benefits",3,".benefits__item",".benefits__arrow--right",".benefits__arrow--left"),l("services",2,".col-lg-6",".services__arrow--right",".services__arrow--left"),(()=>{const t=document.querySelector(".btn-call"),l=document.querySelector(".header-modal--opened"),o=document.querySelector(".overlay"),n=l.querySelector(".header-modal__close");t.addEventListener("click",(t=>{t.preventDefault(),l.style.opacity="0",l.style.display="block",o.style.opacity="0",o.style.display="block",e({duration:1e3,timing:e=>e,draw(e){l.style.opacity=1*e,o.style.opacity=1*e}})})),n.addEventListener("click",(()=>{o.style.display="none",l.style.display="none"})),o.addEventListener("click",(()=>{o.style.display="none",l.style.display="none"}))})(),(()=>{const t=document.querySelectorAll(".service-button"),l=document.querySelector(".services-modal "),o=document.querySelector(".overlay"),n=document.querySelector(".services-modal__close");t.forEach((t=>{t.addEventListener("click",(t=>{t.preventDefault(),l.style.opacity="0",l.style.display="block",o.style.opacity="0",o.style.display="block",e({duration:1e3,timing:e=>e,draw(e){l.style.opacity=1*e,o.style.opacity=1*e}})}))})),n.addEventListener("click",(()=>{l.style.display="none",o.style.display="none"})),o.addEventListener("click",(()=>{l.style.display="none",o.style.display="none"}))})(),(()=>{const t=document.createElement("div"),l=document.querySelector("#documents"),o=document.createElement("img");t.classList.add("overlay"),l.appendChild(t),t.style.justifyContent="center",t.style.alignItems="center",t.style.zIndex=10,t.style.display="none",o.style.maxHeight="80%",t.appendChild(o),l.addEventListener("click",(l=>{if(l.preventDefault(),l.target.classList.contains("document-overlay")){t.style.display="flex",t.style.opacity="0";const n=l.target.parentNode.getAttribute("href");o.setAttribute("src",n),e({duration:1e3,timing:e=>e,draw(e){t.style.opacity=1*e}})}l.target.matches("div.overlay")&&(t.style.display="none")}))})(),(()=>{const e=document.querySelector("body"),t=document.querySelector(".smooth-scroll");document.addEventListener("scroll",(()=>{window.scrollY>500?t.style.display="block":window.scrollY<500&&(t.style.display="none")})),t.addEventListener("click",(t=>{e.scrollIntoView({block:"center",behavior:"smooth"})}))})(),o({formId:".action-form",someElem:[{type:"input",id:"calc-total"}]}),o({formId:".action-form2",someElem:[{type:"input",id:"calc-total"}]})})();