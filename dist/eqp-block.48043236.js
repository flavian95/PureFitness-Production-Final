parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"LPC4":[function(require,module,exports) {
var s,e,c,o,i=$(".eqp-slide-hover-1"),t=$(".eqp-slide-hover-2"),a=$(".eqp-slide-hover-3"),r=$(".eqp-slide-hover-4"),n=$(".eqp-slide-text-paragraph-1"),l=$(".eqp-slide-text-paragraph-2"),u=$(".eqp-slide-text-paragraph-3"),m=$(".eqp-slide-text-paragraph-4"),p=$(".eqp-slide-text-block"),d=$(".slide-bar"),g=$(".eqp-slide-text-block"),h="-77px",b="-153px",v="-229px",f="-305px",k=window.matchMedia("(min-width: 980px)"),x=window.matchMedia("(max-width: 1240px)"),q="#C52626",T="#fff",w="url(../../img/Heavy-Weights.jpg)",C="url(../../img/Tons-Of-Weights.jpg)",j="url(../../img/Workout-Machines.jpg)",A="url(../../img/Miles-Of-Cardio.jpg)",M={color:T,"user-select":"all"},W={color:"transparent","user-select":"none"},O="500";i.hover(function(){k.matches&&(s=setTimeout(function(){d.css("bottom",h),d.css("background-color",q),p.css("background-image",w),d.removeClass("initialActive"),n.css(M),l.css(W),u.css(W),m.css(W),x.matches&&g.css("background-position","inherit")},O))},function(){clearTimeout(s)}),t.hover(function(){k.matches&&(e=setTimeout(function(){d.css("bottom",b),d.css("background-color",q),p.css("background-image",C),g.css("background-position","50% 50%"),d.removeClass("initialActive"),l.css(M),n.css(W),u.css(W),m.css(W)},O))},function(){clearTimeout(e)}),a.hover(function(){k.matches&&(c=setTimeout(function(){d.css("bottom",v),d.css("background-color",q),p.css("background-image",j),g.css("background-position","50% 50%"),d.removeClass("initialActive"),u.css(M),n.css(W),l.css(W),m.css(W)},O))},function(){clearTimeout(c)}),r.hover(function(){k.matches&&(o=setTimeout(function(){d.css("bottom",f),d.css("background-color",q),p.css("background-image",A),g.css("background-position","50% 50%"),d.removeClass("initialActive"),m.css(M),n.css(W),l.css(W),u.css(W)},O))},function(){clearTimeout(o)});
},{}]},{},["LPC4"], null)
//# sourceMappingURL=/eqp-block.48043236.js.map