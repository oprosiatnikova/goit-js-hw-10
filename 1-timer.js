import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as h,i as y}from"./assets/vendor-BbbuE1sJ.js";const a=document.getElementById("datetime-picker"),n=document.querySelector("[data-start]");let s=null;n.disabled=!0;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(y.error({title:"Error",message:"Please choose a date in the future"}),n.disabled=!0):(s=t,n.disabled=!1)}};h(a,p);function S(e){const i=Math.floor(e/864e5),l=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:i,hours:l,minutes:m,seconds:f}}function r(e){return String(e).padStart(2,"0")}function c({days:e,hours:t,minutes:o,seconds:d}){document.querySelector("[data-days]").textContent=r(e),document.querySelector("[data-hours]").textContent=r(t),document.querySelector("[data-minutes]").textContent=r(o),document.querySelector("[data-seconds]").textContent=r(d)}let u=null;n.addEventListener("click",()=>{s&&(a.disabled=!0,n.disabled=!0,u=setInterval(()=>{const t=s-new Date;if(t<=0){clearInterval(u),c({days:0,hours:0,minutes:0,seconds:0}),a.disabled=!1;return}const o=S(t);c(o)},1e3))});
//# sourceMappingURL=1-timer.js.map
