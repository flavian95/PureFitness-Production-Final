parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"XYEM":[function(require,module,exports) {
var e=document.querySelectorAll(".progress-bar"),r=document.querySelectorAll(".progress-bar-header"),t=document.querySelectorAll(".progress-bar-percent"),n=[1,1,1,1];function o(o){var a=n[o],c=0,i=0;0==c&&(c=1,requestAnimationFrame(function r(){a>=100?(clearInterval(i),c=0):(a+=2,e[o].style.width=a+"%",n[o]=a,requestAnimationFrame(r))}));var s=setInterval(function(){var e=document.querySelector(".progress-bar"),t=document.querySelector(".progress-bar-header");e.offsetWidth>=t.offsetWidth&&(r[o].classList.add("facilityActiveHeader"),clearInterval(s))},10),l=setInterval(function(){document.querySelector(".progress-bar").offsetWidth>="65"&&(t[o].classList.add("facilityTextActive"),clearInterval(l))},10)}document.addEventListener("scroll",function(){var r=window.scrollY,t=window.innerHeight;e.forEach(function(e,n){requestAnimationFrame(function(){!function(e,n){var a=e.offsetTop,c=e.offsetHeight;r+t>a&&r<a+c&&o(n)}(e,n)})})});
},{}]},{},["XYEM"], null)
//# sourceMappingURL=/facility.0b47ea15.js.map