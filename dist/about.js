(()=>{"use strict";var e=document.getElementsByClassName("body")[0],t=document.getElementsByClassName("nav")[0],s=document.getElementsByClassName("nav-menu")[0],n=document.getElementsByClassName("nav-links-body")[0],a=document.getElementsByClassName("nav-icons-body")[0],r=document.getElementsByClassName("header")[0];s.addEventListener("click",(function(){n.classList.toggle("navActive"),a.classList.toggle("navActive"),s.classList.toggle("menuActive"),t.classList.toggle("navMenuActive"),e.classList.toggle("navBodyActive"),window.scrollTo(0,0),r.classList.toggle("headerNavActive")}));var o=document.querySelectorAll(".progress-bar"),c=document.querySelectorAll(".progress-bar-header"),l=document.querySelectorAll(".progress-bar-percent"),i=[1,1,1,1];function d(e){var t=i[e],s=0;0==s&&(s=1,requestAnimationFrame((function n(){t>=100?(clearInterval(0),s=0):(t+=2,o[e].style.width=t+"%",i[e]=t,requestAnimationFrame(n))})));var n=setInterval((function(){var t=document.querySelector(".progress-bar"),s=document.querySelector(".progress-bar-header");t.offsetWidth>=s.offsetWidth&&(c[e].classList.add("facilityActiveHeader"),clearInterval(n))}),10),a=setInterval((function(){document.querySelector(".progress-bar").offsetWidth>="65"&&(l[e].classList.add("facilityTextActive"),clearInterval(a))}),10)}d(),document.addEventListener("scroll",(function(){var e=window.scrollY,t=window.innerHeight;o.forEach((function(s,n){requestAnimationFrame((function(){!function(s,n){var a=s.offsetTop,r=s.offsetHeight;e+t>a&&e<a+r&&d(n)}(s,n)}))}))}))})();