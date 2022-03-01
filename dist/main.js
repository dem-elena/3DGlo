(()=>{"use strict";const e=()=>{document.querySelectorAll("input.calc-item");const e=document.querySelectorAll("input[type='tel']"),t=document.querySelector(".mess"),n=document.querySelectorAll("input[type='text']"),o=document.querySelectorAll("input[type='email']"),a=e=>{let t=/^[\s\-]+|[\s\-]+$/;return e=e.replace(t,""),t=/\s{2,}/g,e.replace(t," ")};t.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я\s\-]/g,"")})),t.addEventListener("blur",(e=>{e.target.value=a(e.target.value)})),e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\d\(\-\)]+$/g,"")}))})),n.forEach((e=>{if(e.classList.contains("calc-item"))e.classList.contains("calc-item")&&e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}));else{let t=/[^а-яА-Я\s\-]/g;e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(t,"")})),e.addEventListener("blur",(e=>{let t;e.target.value=a(e.target.value),t=/^[а-яА-Я]|\s[а-яА-Я]/g,e.target.value=e.target.value.replace(t,(e=>e.toUpperCase()))}))}})),o.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^a-zA-Z\d\-\.\_\!\~\*\'\@]/g,"")}))}))};e();const t=e;(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),a=document.createElement("span");a.textContent="00";const l=document.createElement("span");l.textContent=":",t.insertAdjacentElement("beforebegin",l),l.insertAdjacentElement("beforebegin",a);let r=setInterval((()=>{let l=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3,n=Math.floor(t/3600/24),o=Math.floor(t/3600%24),a=Math.floor(t/60%60),l=Math.floor(t%60);return n=n<10?"0"+n:n,o=o<10?"0"+o:o,a=a<10?"0"+a:a,l=l<10?"0"+l:l,{timeRemaining:t,hours:o,minutes:a,seconds:l,days:n}})();a.textContent=l.days,t.textContent=l.hours,n.textContent=l.minutes,o.textContent=l.seconds,l.timeRemaining>0||(clearInterval(r),a.textContent="00",t.textContent="00",n.textContent="00",o.textContent="00")}),1e3)})("08 march 2022"),(()=>{const e=document.querySelector("body");let t=document.documentElement.clientWidth;document.querySelector(".menu");const n=document.querySelector("menu"),o=(n.querySelector(".close-btn"),n.querySelectorAll("ul>li>a"),e=>{t=document.documentElement.clientWidth,t>768?e?n.classList.add("active-menu"):n.classList.remove("active-menu"):n.style.transform?n.style.transform="":n.style.transform="translateX(0)"});e.addEventListener("click",(e=>{e.target.closest(".menu")?o(!0):(e.target.classList.contains("close-btn")||!e.target.closest(".active-menu")||e.target.matches(".active-menu>ul>li>a"))&&o(!1)}))})(),(()=>{let e=document.documentElement.clientWidth;const t=document.querySelector(".popup"),n=t.querySelector(".popup-content"),o=document.querySelectorAll(".popup-btn");t.querySelector(".popup-close");let a,l=0;const r=()=>{l++,l<30?(n.style.left=2*l+"%",a=requestAnimationFrame(r)):(cancelAnimationFrame(a),l=0)};o.forEach((o=>{o.addEventListener("click",(()=>{e=document.documentElement.clientWidth,n.style.left="1%",t.style.display="block",e>768&&(a=requestAnimationFrame(r))}))})),t.addEventListener("click",(e=>{e.target.closest("popup-content")&&!e.target.classList.contains("popup-close")||(t.style.display="none",l=0)}))})(),t(),(()=>{const e=document.querySelectorAll(".service-tab"),t=document.querySelector(".service-header"),n=document.querySelectorAll(".service-header-tab");t.addEventListener("click",(t=>{if(t.target.closest(".service-header-tab")){const o=t.target.closest(".service-header-tab");n.forEach(((t,n)=>{t===o?(t.classList.add("active"),e[n].classList.remove("d-none")):(t.classList.remove("active"),e[n].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),n=document.querySelector(".portfolio-dots");let o,a,l=0;const r=(e,t,n)=>{e[t].classList.remove(n)},c=(e,t,n)=>{e[t].classList.add(n)},s=()=>{r(t,l,"portfolio-item-active"),r(o,l,"dot-active"),l++,l>=t.length&&(l=0),c(t,l,"portfolio-item-active"),c(o,l,"dot-active")},i=(e=2e3)=>{a=setInterval(s,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(r(t,l,"portfolio-item-active"),r(o,l,"dot-active"),e.target.matches("#arrow-right")?l++:e.target.matches("#arrow-left")?l--:e.target.classList.contains("dot")&&o.forEach(((t,n)=>{e.target===t&&(l=n)})),l>=t.length?l=0:l<0&&(l=t.length-1),c(t,l,"portfolio-item-active"),c(o,l,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(a)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&i(2e3)}),!0),(()=>{let e=t.length;for(let t=0;t<e;t++){let e;e=document.createElement("li"),e.classList.add("dot"),n.append(e)}o=document.querySelectorAll(".dot"),o[0].classList.add("dot-active")})(),i(2e3)})()})();