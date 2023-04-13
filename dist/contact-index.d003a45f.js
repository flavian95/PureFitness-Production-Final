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
})({"src/contact-nav.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navMenu = exports.navLinks = exports.navIcons = exports.nav = exports.header = exports.body = void 0;
exports.navToggler = navToggler;
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
var header = document.getElementsByClassName('header')[0];
exports.header = header;
function navToggler() {
  navMenu.addEventListener('click', function () {
    navLinks.classList.toggle('navActive');
    navIcons.classList.toggle('navActive');
    navMenu.classList.toggle('menuActive');
    nav.classList.toggle('navMenuActive');
    body.classList.toggle('navBodyActive');
    window.scrollTo(0, 0);
    header.classList.toggle('headerNavActive');
  });
}
navToggler();
},{}],"src/contact.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.btnBody = exports.btn = void 0;
exports.checkFormValidity = checkFormValidity;
exports.contact = contact;
exports.inputName = exports.inputMessage = exports.inputErrorName = exports.inputErrorMsg = exports.inputErrorEmail = exports.inputEmail = exports.contactInput = exports.contactHeader = void 0;
exports.isValidEmail = isValidEmail;
exports.startReload = startReload;
exports.textContact = void 0;
var btn = document.querySelector('.btn-contact');
exports.btn = btn;
var btnBody = document.querySelector('.contact-btn-body');
exports.btnBody = btnBody;
var inputName = document.querySelector('.contact-input-1');
exports.inputName = inputName;
var inputEmail = document.querySelector('.contact-input-2');
exports.inputEmail = inputEmail;
var inputMessage = document.querySelector('.contact-input-3');
exports.inputMessage = inputMessage;
var inputErrorName = document.querySelector('.contact-error-1');
exports.inputErrorName = inputErrorName;
var inputErrorEmail = document.querySelector('.contact-error-2');
exports.inputErrorEmail = inputErrorEmail;
var inputErrorMsg = document.querySelector('.contact-error-3');
exports.inputErrorMsg = inputErrorMsg;
var contactHeader = document.querySelector('.contact-header-1');
exports.contactHeader = contactHeader;
var contactInput = document.querySelectorAll('.contact-input');
exports.contactInput = contactInput;
var textContact = document.querySelector('.text-contact');
exports.textContact = textContact;
function contact() {
  btn.addEventListener('click', function () {
    event.preventDefault();
    checkFormValidity();
    if (!btn.classList.contains('activeBtn')) {
      contactInterval = setInterval(function () {
        if (inputName.value.trim() === '') {
          inputErrorName.classList.add('contactError');
          inputErrorName.classList.add('contactErrorActive');
          inputName.classList.add('contactInputActive');
        } else {
          inputErrorName.classList.remove('contactError');
          inputErrorName.classList.remove('contactErrorActive');
          inputName.classList.remove('contactInputActive');
        }
        if (inputEmail.value.trim() === '') {
          inputErrorEmail.textContent = 'This field is required';
          inputErrorEmail.classList.add('contactError');
          inputErrorEmail.classList.add('contactErrorActive');
          inputEmail.classList.add('contactInputActive');
        } else if (!isValidEmail(inputEmail.value.trim())) {
          inputErrorEmail.textContent = 'Please enter a valid email address.';
          inputErrorEmail.classList.add('contactError');
          inputErrorEmail.classList.add('contactErrorActive');
          inputEmail.classList.add('contactInputActive');
        } else {
          inputErrorEmail.classList.remove('contactError');
          inputErrorEmail.classList.remove('contactErrorActive');
          inputEmail.classList.remove('contactInputActive');
        }
        if (inputMessage.value.trim() === '') {
          inputErrorMsg.classList.add('contactError');
          inputErrorMsg.classList.add('contactErrorActive');
          inputMessage.classList.add('contactInputActive');
        } else {
          inputErrorMsg.classList.remove('contactError');
          inputErrorMsg.classList.remove('contactErrorActive');
          inputMessage.classList.remove('contactInputActive');
        }
      }, 100);
    }
  });
}
contact();
function isValidEmail(email) {
  var regex = /^\S+@\S+\.\S+$/;
  return regex.test(email);
}
function checkFormValidity() {
  if (inputName.value.trim().length >= 1 && inputEmail.value.trim().length >= 1 && inputMessage.value.trim().length >= 1 && !inputErrorName.classList.contains('contactErrorActive') && !inputName.classList.contains('contactInputActive') && !inputErrorEmail.classList.contains('contactErrorActive') && !inputEmail.classList.contains('contactInputActive') && !inputErrorMsg.classList.contains('contactErrorActive') && !inputMessage.classList.contains('contactInputActive') && isValidEmail(inputEmail.value.trim())) {
    btn.textContent = 'Sending...';
    clearInterval('contactInterval');
    btn.classList.add('btnActive');
    startReload();
  }
}
function startReload() {
  var params = new URLSearchParams();
  params.set('textContactActive', 'true');
  params.set('inputActive', 'true');
  params.set('btnActive', 'true');
  var url = "".concat(location.pathname, "?").concat(params.toString());
  location.replace(url);
}
document.addEventListener('DOMContentLoaded', function () {
  var params = new URLSearchParams(location.search);
  if (params.get('textContactActive') === 'true') {
    textContact.classList.add('textContactActive');
  }
  if (params.get('inputActive') === 'true') {
    contactInput.forEach(function (input) {
      return input.classList.add('inputActive');
    });
  }
  if (params.get('btnActive') === 'true') {
    btnBody.classList.add('btnActive');
  }
});
},{}],"src/contact-index.js":[function(require,module,exports) {
"use strict";

var _contactNav = require("./contact-nav.js");
var _contact = require("./contact.js");
},{"./contact-nav.js":"src/contact-nav.js","./contact.js":"src/contact.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/contact-index.js"], null)
//# sourceMappingURL=/contact-index.d003a45f.js.map