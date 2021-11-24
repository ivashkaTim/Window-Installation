(()=>{"use strict";const e=({timing:e,draw:t,duration:l})=>{let n=performance.now();requestAnimationFrame((function o(s){let c=(s-n)/l;c>1&&(c=1);let a=e(c);t(a),c<1&&requestAnimationFrame(o)}))},t=(e,t)=>{e.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(t,"")}))}))},l=(e,t,l,n,o)=>{const s=document.getElementById(e),c=s.querySelectorAll(l),a=s.querySelector(n),r=s.querySelector(o);let i=!0,d=0;const m=()=>{c.forEach((e=>{e.classList.contains("active")?e.classList.remove("active"):e.classList.contains("active")||e.classList.add("active")}))};a.addEventListener("click",(()=>{i?m():(c[d].classList.remove("active"),d++,d>=c.length&&(d=0),c[d].classList.add("active"))})),r.addEventListener("click",(()=>{i?m():(c[d].classList.remove("active"),d--,d<0&&(d=c.length-1),c[d].classList.add("active"))})),(()=>{if(screen.width>576)for(let e=0;e<c.length&&(c[e].classList.add("active"),!(e>=t-1));e++);else screen.width<576&&(c[d].classList.add("active"),i=!1)})()},n=({formId:e,someElem:l=[]})=>{const n=document.querySelector(e),o=document.querySelectorAll(".user-name"),s=document.querySelectorAll(".user-phone");try{n.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=n.querySelectorAll("input"),t=new FormData(n),o={};t.forEach(((e,t)=>{o[t]=e}));try{l.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?o[e.id]=t.textContent:"input"===e.type&&(o[e.id]=t.value)}))}catch(e){}var s;(()=>{let e=!1;const t=n.querySelector(".user-name"),l=n.querySelector(".user-phone");return t.value.length<2&&t.classList.add("invalid"),l.value.length<6&&l.classList.add("invalid"),t.value.length>2&&l.value.length>6&&(e=!0),e})()&&(s=o,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{e.forEach((e=>{e.value=""}))}))})()})),n.addEventListener("click",(e=>{(e.target.closest(".user-name")||e.target.closest(".user-phone"))&&e.target.classList.remove("invalid")}))}catch(e){}t(s,/[^\+0-9]$/g),t(o,/[^a-zA-Zа-яА-яёЁ\s]+$/g)};(e=>{const t=document.querySelectorAll(".days"),l=document.querySelectorAll(".hours"),n=document.querySelectorAll(".minutes"),o=document.querySelectorAll(".seconds"),s=()=>{const e=(new Date("27 november 2021").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}};s().timeRemaining>0&&setInterval((()=>{const e=s(),c=(e,t)=>{e.forEach((e=>{var l;e.textContent=(l=t)>=0&&l<10?"0"+l:l}))};c(t,e.days),c(l,e.hours),c(n,e.minutes),c(o,e.seconds)}),1e3)})(),(()=>{const t=document.querySelector(".balkony #calc"),l=document.getElementById("calc-type"),n=document.getElementById("calc-type-material"),o=document.getElementById("calc-input"),s=document.getElementById("calc-total");t&&t.addEventListener("change",(t=>{t.target!==l&&t.target!==n&&t.target!==o||(()=>{const t=+l.options[l.selectedIndex].value,c=+n.options[n.selectedIndex].value,a=o.value;let r=0;t&&c&&a&&(r=t*c*a),e({duration:500,timing:e=>e,draw(e){s.value=Math.round(e*r)}})})()}))})(),l("benefits",3,".benefits__item",".benefits__arrow--right",".benefits__arrow--left"),l("services",2,".col-lg-6",".services__arrow--right",".services__arrow--left"),(()=>{const t=document.querySelector(".btn-call"),l=document.querySelector(".header-modal--opened"),n=document.querySelector(".overlay"),o=l.querySelector(".header-modal__close");t.addEventListener("click",(t=>{t.preventDefault(),l.style.opacity="0",l.style.display="block",n.style.opacity="0",n.style.display="block",e({duration:1e3,timing:e=>e,draw(e){l.style.opacity=1*e,n.style.opacity=1*e}})})),o.addEventListener("click",(()=>{n.style.display="none",l.style.display="none"})),n.addEventListener("click",(()=>{n.style.display="none",l.style.display="none"}))})(),(()=>{const t=document.querySelectorAll(".service-button"),l=document.querySelector(".services-modal "),n=document.querySelector(".overlay"),o=document.querySelector(".services-modal__close");t.forEach((t=>{t.addEventListener("click",(t=>{t.preventDefault(),l.style.opacity="0",l.style.display="block",n.style.opacity="0",n.style.display="block",e({duration:1e3,timing:e=>e,draw(e){l.style.opacity=1*e,n.style.opacity=1*e}})}))})),o.addEventListener("click",(()=>{l.style.display="none",n.style.display="none"})),n.addEventListener("click",(()=>{l.style.display="none",n.style.display="none"}))})(),(()=>{const t=document.createElement("div"),l=document.querySelector("#documents"),n=document.createElement("img");t.classList.add("overlay"),l.appendChild(t),t.style.justifyContent="center",t.style.alignItems="center",t.style.zIndex=10,t.style.display="none",n.style.maxHeight="80%",t.appendChild(n),l.addEventListener("click",(l=>{if(l.preventDefault(),l.target.classList.contains("document-overlay")){t.style.display="flex",t.style.opacity="0";const o=l.target.parentNode.getAttribute("href");n.setAttribute("src",o),e({duration:1e3,timing:e=>e,draw(e){t.style.opacity=1*e}})}l.target.matches("div.overlay")&&(t.style.display="none")}))})(),(()=>{const e=document.querySelector("body"),t=document.querySelector(".smooth-scroll");document.addEventListener("scroll",(()=>{window.scrollY>500?t.style.display="block":window.scrollY<500&&(t.style.display="none")})),t.addEventListener("click",(t=>{e.scrollIntoView({block:"center",behavior:"smooth"})}))})(),n({formId:".action-form",someElem:[{type:"input",id:"calc-total"}]}),n({formId:".action-form2",someElem:[{type:"input",id:"calc-total"}]}),(()=>{const e=document.querySelector(".comments-container");fetch("../comments.json").then((e=>e.json())).then((t=>{(t=>{let l=0;setInterval((()=>{l>t.length-1&&(l=0),document.querySelectorAll(".comment-item")[0].remove();const n=document.createElement("div");n.classList.add("review-margin-bottom","row","comment-item"),e.appendChild(n),n.innerHTML=`<div class="col-xs-3 col-sm-2"><div class="review-user"><img src="${t[l].image}" alt="" class="img-responsive avatar"></div></div><div class="col-xs-9 col-sm-9"><div class="review-inner review-green review-arrow review-arrow-left"><p class="text-normal">${t[l].author}</p><p>${t[l].comment}</p></div></div>`,l++}),5e3)})(t.comments)}))})()})();