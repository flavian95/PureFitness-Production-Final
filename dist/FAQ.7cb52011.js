parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Bq0b":[function(require,module,exports) {
!function(){"use strict";var e=document.getElementsByClassName("body")[0],t=document.getElementsByClassName("nav")[0],s=document.getElementsByClassName("nav-menu")[0],n=document.getElementsByClassName("nav-links-body")[0],c=document.getElementsByClassName("nav-icons-body")[0],l=document.getElementsByClassName("header")[0];s.addEventListener("click",function(){n.classList.toggle("navActive"),c.classList.toggle("navActive"),s.classList.toggle("menuActive"),t.classList.toggle("navMenuActive"),e.classList.toggle("navBodyActive"),window.scrollTo(0,0),l.classList.toggle("mainNavActive")});var a=document.querySelectorAll(".frequently-asked-questions-icon"),o=document.querySelectorAll(".frequently-asked-questions-2"),i=document.querySelectorAll(".frequently-asked-questions-header"),d=document.querySelectorAll(".frequently-asked-questions-1"),u=document.querySelectorAll(".frequently-asked-questions-body");function r(e,t){var s=parseInt(e.dataset.counter)||0;o[t].classList.toggle("bodyActive"),d[t].classList.toggle("headerActive"),u[t].classList.toggle("headerBodyActive"),0===s?(a[t].classList.add("iconActive1"),a[t].classList.remove("iconActive2"),s=1):(a[t].classList.add("iconActive2"),a[t].classList.remove("iconActive1"),s=0),e.dataset.counter=s}a.forEach(function(e,t){e.addEventListener("click",function(){r(e,t)})}),i.forEach(function(e,t){e.addEventListener("click",function(){r(e,t)})})}();
},{}]},{},["Bq0b"], null)
//# sourceMappingURL=/FAQ.7cb52011.js.map