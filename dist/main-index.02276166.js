parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ReHp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.navMenu=exports.navLocation=exports.navLinks=exports.navIcons=exports.nav=exports.body=void 0,exports.navToggler=v,exports.navTogglerLocation=c;var e=document.getElementsByClassName("body")[0];exports.body=e;var s=document.getElementsByClassName("nav")[0];exports.nav=s;var t=document.getElementsByClassName("nav-menu")[0];exports.navMenu=t;var n=document.getElementsByClassName("nav-links-body")[0];exports.navLinks=n;var o=document.getElementsByClassName("nav-icons-body")[0];exports.navIcons=o;var a=document.getElementsByClassName("nav-location")[0];function v(){t.addEventListener("click",function(){n.classList.toggle("navActive"),o.classList.toggle("navActive"),t.classList.toggle("menuActive"),s.classList.toggle("navMenuActive"),e.classList.toggle("navBodyActive"),window.scrollTo(0,0)})}function c(){a.addEventListener("click",function(){e.classList.toggle("navLocationActive"),n.classList.remove("navActive"),o.classList.remove("navActive"),t.classList.remove("menuActive"),s.classList.remove("navMenuActive"),e.classList.remove("navBodyActive")})}exports.navLocation=a,v(),c();
},{}],"LPC4":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.contentSlide4=exports.contentSlide3=exports.contentSlide2=exports.contentSlide1=exports.colorWhite=exports.colorRed=void 0,exports.hover1=M,exports.hover2=W,exports.hover3=O,exports.hover4=y,exports.timer=exports.textParagraph4=exports.textParagraph3=exports.textParagraph2=exports.textParagraph1=exports.textInactive=exports.textActive=exports.slideBlock4Position=exports.slideBlock4=exports.slideBlock3Position=exports.slideBlock3=exports.slideBlock2Position=exports.slideBlock2=exports.slideBlock1Position=exports.slideBlock1=exports.slide=exports.media980Px=exports.media1100Px=exports.imgBlock=exports.img=exports.hoverTimeout4=exports.hoverTimeout3=exports.hoverTimeout2=exports.hoverTimeout1=void 0;var e=$(".eqp-slide-hover-1");exports.slideBlock1=e;var o=$(".eqp-slide-hover-2");exports.slideBlock2=o;var t=$(".eqp-slide-hover-3");exports.slideBlock3=t;var s=$(".eqp-slide-hover-4");exports.slideBlock4=s;var r=$(".eqp-slide-text-paragraph-1");exports.textParagraph1=r;var i=$(".eqp-slide-text-paragraph-2");exports.textParagraph2=i;var c=$(".eqp-slide-text-paragraph-3");exports.textParagraph3=c;var a=$(".eqp-slide-text-paragraph-4");exports.textParagraph4=a;var p=$(".eqp-slide-text-block");exports.img=p;var x=$(".slide-bar");exports.slide=x;var l=$(".eqp-slide-text-block");exports.imgBlock=l;var n="-77px";exports.slideBlock1Position=n;var d="-153px";exports.slideBlock2Position=d;var v="-229px";exports.slideBlock3Position=v;var u="-305px";exports.slideBlock4Position=u;var h=window.matchMedia("(min-width: 980px)");exports.media980Px=h;var m=window.matchMedia("(max-width: 1240px)");exports.media1100Px=m;var g="#C52626";exports.colorRed=g;var k="#fff";exports.colorWhite=k;var f="url(Heavy-Weights.jpg)";exports.contentSlide1=f;var P="url(Tons-Of-Weights.jpg)";exports.contentSlide2=P;var T="url(Workout-Machines.jpg)";exports.contentSlide3=T;var b="url(Miles-Of-Cardio.jpg)";exports.contentSlide4=b;var B={color:k,"user-select":"all"};exports.textActive=B;var q={color:"transparent","user-select":"none"};exports.textInactive=q;var S,w,A,C,j="500";function M(){e.hover(function(){h.matches&&(exports.hoverTimeout1=S=setTimeout(function(){x.css("bottom",n),x.css("background-color",g),p.css("background-image",f),x.removeClass("initialActive"),r.css(B),i.css(q),c.css(q),a.css(q),m.matches&&l.css("background-position","inherit")},j))},function(){clearTimeout(S)})}function W(){o.hover(function(){h.matches&&(exports.hoverTimeout2=w=setTimeout(function(){x.css("bottom",d),x.css("background-color",g),p.css("background-image",P),l.css("background-position","50% 50%"),x.removeClass("initialActive"),i.css(B),r.css(q),c.css(q),a.css(q)},j))},function(){clearTimeout(w)})}function O(){t.hover(function(){h.matches&&(exports.hoverTimeout3=A=setTimeout(function(){x.css("bottom",v),x.css("background-color",g),p.css("background-image",T),l.css("background-position","50% 50%"),x.removeClass("initialActive"),c.css(B),r.css(q),i.css(q),a.css(q)},j))},function(){clearTimeout(A)})}function y(){s.hover(function(){h.matches&&(exports.hoverTimeout4=C=setTimeout(function(){x.css("bottom",u),x.css("background-color",g),p.css("background-image",b),l.css("background-position","50% 50%"),x.removeClass("initialActive"),a.css(B),r.css(q),i.css(q),c.css(q)},j))},function(){clearTimeout(C)})}exports.timer=j,exports.hoverTimeout1=S,exports.hoverTimeout2=w,exports.hoverTimeout3=A,exports.hoverTimeout4=C,M(),W(),O(),y();
},{}],"UOQ7":[function(require,module,exports) {
"use strict";var e=require("./nav.js"),r=require("./eqp-block.js");
},{"./nav.js":"ReHp","./eqp-block.js":"LPC4"}]},{},["UOQ7"], null)
//# sourceMappingURL=/main-index.02276166.js.map