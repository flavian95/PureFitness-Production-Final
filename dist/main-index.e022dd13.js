// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/nav.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navMenu = exports.navLocation = exports.navLinks = exports.navIcons = exports.nav = exports.body = void 0;
exports.navToggler = navToggler;
exports.navTogglerLocation = navTogglerLocation;
var body = document.getElementsByClassName('body')[0];
exports.body = body;
var nav = document.getElementsByClassName('nav')[0];
exports.nav = nav;
var navMenu = document.getElementsByClassName('nav-menu')[0];
exports.navMenu = navMenu;
var navLinks = document.getElementsByClassName('nav-links-body')[0];
exports.navLinks = navLinks;
var navIcons = document.getElementsByClassName('nav-icons-body')[0];
exports.navIcons = navIcons;
var navLocation = document.getElementsByClassName('nav-location')[0];
exports.navLocation = navLocation;
function navToggler() {
  navMenu.addEventListener('click', function () {
    navLinks.classList.toggle('navActive');
    navIcons.classList.toggle('navActive');
    navMenu.classList.toggle('menuActive');
    nav.classList.toggle('navMenuActive');
    body.classList.toggle('navBodyActive');
    window.scrollTo(0, 0);
  });
}
navToggler();
function navTogglerLocation() {
  navLocation.addEventListener('click', function () {
    body.classList.toggle('navLocationActive');
    navLinks.classList.remove('navActive');
    navIcons.classList.remove('navActive');
    navMenu.classList.remove('menuActive');
    nav.classList.remove('navMenuActive');
    body.classList.remove('navBodyActive');
  });
}
navTogglerLocation();
},{}],"src/eqp-block.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contentSlide4 = exports.contentSlide3 = exports.contentSlide2 = exports.contentSlide1 = exports.colorWhite = exports.colorRed = void 0;
exports.hover1 = hover1;
exports.hover2 = hover2;
exports.hover3 = hover3;
exports.hover4 = hover4;
exports.imgBlock = exports.img = exports.hoverTimeout4 = exports.hoverTimeout3 = exports.hoverTimeout2 = exports.hoverTimeout1 = void 0;
exports.imgLoad1 = imgLoad1;
exports.imgLoad2 = imgLoad2;
exports.imgLoad3 = imgLoad3;
exports.imgLoad4 = imgLoad4;
exports.timer = exports.textParagraph4 = exports.textParagraph3 = exports.textParagraph2 = exports.textParagraph1 = exports.textInactive = exports.textActive = exports.slideBlock4Position = exports.slideBlock4 = exports.slideBlock3Position = exports.slideBlock3 = exports.slideBlock2Position = exports.slideBlock2 = exports.slideBlock1Position = exports.slideBlock1 = exports.slide = exports.media980Px = exports.media1100Px = void 0;
var slideBlock1 = $('.eqp-slide-hover-1');
exports.slideBlock1 = slideBlock1;
var slideBlock2 = $('.eqp-slide-hover-2');
exports.slideBlock2 = slideBlock2;
var slideBlock3 = $('.eqp-slide-hover-3');
exports.slideBlock3 = slideBlock3;
var slideBlock4 = $('.eqp-slide-hover-4');
exports.slideBlock4 = slideBlock4;
var textParagraph1 = $('.eqp-slide-text-paragraph-1');
exports.textParagraph1 = textParagraph1;
var textParagraph2 = $('.eqp-slide-text-paragraph-2');
exports.textParagraph2 = textParagraph2;
var textParagraph3 = $('.eqp-slide-text-paragraph-3');
exports.textParagraph3 = textParagraph3;
var textParagraph4 = $('.eqp-slide-text-paragraph-4');
exports.textParagraph4 = textParagraph4;
var img = $('.eqp-slide-text-block');
exports.img = img;
var slide = $('.slide-bar');
exports.slide = slide;
var imgBlock = $('.eqp-slide-text-block');
exports.imgBlock = imgBlock;
var slideBlock1Position = '-77px';
exports.slideBlock1Position = slideBlock1Position;
var slideBlock2Position = '-153px';
exports.slideBlock2Position = slideBlock2Position;
var slideBlock3Position = '-229px';
exports.slideBlock3Position = slideBlock3Position;
var slideBlock4Position = '-305px';
exports.slideBlock4Position = slideBlock4Position;
var media980Px = window.matchMedia('(min-width: 980px)');
exports.media980Px = media980Px;
var media1100Px = window.matchMedia('(max-width: 1240px)');
exports.media1100Px = media1100Px;
var colorRed = '#C52626';
exports.colorRed = colorRed;
var colorWhite = '#fff';
exports.colorWhite = colorWhite;
var contentSlide1 = 'url(Heavy-Weights.5d29ddfe.jpg)';
exports.contentSlide1 = contentSlide1;
var contentSlide2 = 'url(Tons-Of-Weights.e87ab1e3.jpg)';
exports.contentSlide2 = contentSlide2;
var contentSlide3 = 'url(Workout-Machines.030c08a7.jpg)';
exports.contentSlide3 = contentSlide3;
var contentSlide4 = 'url(Miles-Of-Cardio.61dc1ed0.jpg)';
exports.contentSlide4 = contentSlide4;
var textActive = {
  "color": colorWhite,
  "user-select": "all"
};
exports.textActive = textActive;
var textInactive = {
  "color": "transparent",
  "user-select": "none"
};
exports.textInactive = textInactive;
var timer = '500';
exports.timer = timer;
var hoverTimeout1;
exports.hoverTimeout1 = hoverTimeout1;
var hoverTimeout2;
exports.hoverTimeout2 = hoverTimeout2;
var hoverTimeout3;
exports.hoverTimeout3 = hoverTimeout3;
var hoverTimeout4;
exports.hoverTimeout4 = hoverTimeout4;
function imgLoad1() {
  slideBlock1.hover(function () {
    var img1Load = new Image();
    img1Load.src = 'Heavy-Weights.5d29ddfe.jpg';
  });
}
imgLoad1();
function hover1() {
  slideBlock1.hover(function () {
    if (media980Px.matches) {
      exports.hoverTimeout1 = hoverTimeout1 = setTimeout(function () {
        slide.css("bottom", slideBlock1Position);
        slide.css("background-color", colorRed);
        img.css("background-image", contentSlide1);
        slide.removeClass('initialActive');
        textParagraph1.css(textActive);
        textParagraph2.css(textInactive);
        textParagraph3.css(textInactive);
        textParagraph4.css(textInactive);
        if (media1100Px.matches) {
          imgBlock.css("background-position", "inherit");
        }
      }, timer);
    }
  }, function () {
    clearTimeout(hoverTimeout1);
  });
}
hover1();
function imgLoad2() {
  slideBlock2.hover(function () {
    var img2Load = new Image();
    img2Load.src = 'Tons-Of-Weights.e87ab1e3.jpg';
  });
}
imgLoad2();
function hover2() {
  slideBlock2.hover(function () {
    if (media980Px.matches) {
      exports.hoverTimeout2 = hoverTimeout2 = setTimeout(function () {
        slide.css("bottom", slideBlock2Position);
        slide.css("background-color", colorRed);
        img.css("background-image", contentSlide2);
        imgBlock.css("background-position", "50% 50%");
        slide.removeClass('initialActive');
        textParagraph2.css(textActive);
        textParagraph1.css(textInactive);
        textParagraph3.css(textInactive);
        textParagraph4.css(textInactive);
      }, timer);
    }
  }, function () {
    clearTimeout(hoverTimeout2);
  });
}
hover2();
function imgLoad3() {
  slideBlock3.hover(function () {
    var img3Load = new Image();
    img3Load.src = 'Workout-Machines.030c08a7.jpg';
  });
}
imgLoad3();
function hover3() {
  slideBlock3.hover(function () {
    if (media980Px.matches) {
      exports.hoverTimeout3 = hoverTimeout3 = setTimeout(function () {
        slide.css("bottom", slideBlock3Position);
        slide.css("background-color", colorRed);
        img.css("background-image", contentSlide3);
        imgBlock.css("background-position", "50% 50%");
        slide.removeClass('initialActive');
        textParagraph3.css(textActive);
        textParagraph1.css(textInactive);
        textParagraph2.css(textInactive);
        textParagraph4.css(textInactive);
      }, timer);
    }
  }, function () {
    clearTimeout(hoverTimeout3);
  });
}
hover3();
function imgLoad4() {
  slideBlock4.hover(function () {
    var img4Load = new Image();
    img4Load.src = 'Miles-Of-Cardio.61dc1ed0.jpg';
  });
}
imgLoad4();
function hover4() {
  slideBlock4.hover(function () {
    if (media980Px.matches) {
      exports.hoverTimeout4 = hoverTimeout4 = setTimeout(function () {
        slide.css("bottom", slideBlock4Position);
        slide.css("background-color", colorRed);
        img.css("background-image", contentSlide4);
        imgBlock.css("background-position", "50% 50%");
        slide.removeClass('initialActive');
        textParagraph4.css(textActive);
        textParagraph1.css(textInactive);
        textParagraph2.css(textInactive);
        textParagraph3.css(textInactive);
      }, timer);
    }
  }, function () {
    clearTimeout(hoverTimeout4);
  });
}
hover4();
},{}],"src/main-index.js":[function(require,module,exports) {
"use strict";

var _nav = require("./nav.js");
var _eqpBlock = require("./eqp-block.js");
},{"./nav.js":"src/nav.js","./eqp-block.js":"src/eqp-block.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55005" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/main-index.js"], null)
//# sourceMappingURL=/main-index.e022dd13.js.map