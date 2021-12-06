webpackHotUpdate("vendor",{

/***/ "./node_modules/array.polyfill/build/es/src/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/array.polyfill/build/es/src/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/hill/git/react-atomic-ui/node_modules/array.polyfill/build/es/src/index.js'");

/***/ }),

/***/ "./node_modules/es6-promise/auto.js":
/*!******************************************!*\
  !*** ./node_modules/es6-promise/auto.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// This file can be required in Browserify and Node.js for automatic polyfill
// To use it:  require('es6-promise/auto');

module.exports = __webpack_require__(/*! ./ */ "./node_modules/es6-promise/dist/es6-promise.js").polyfill();


/***/ }),

/***/ "./node_modules/es6-promise/dist/es6-promise.js":
/*!******************************************************!*\
  !*** ./node_modules/es6-promise/dist/es6-promise.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/hill/git/react-atomic-ui/node_modules/es6-promise/dist/es6-promise.js'");

/***/ }),

/***/ "./node_modules/keyframe-css/breath.js":
/*!*********************************************!*\
  !*** ./node_modules/keyframe-css/breath.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aniName = exports["default"] = void 0;
var aniName = 'pulsate';
exports.aniName = aniName;
var css = {
  breath: [[{
    transform: ['scale(1)']
  }, {
    opacity: 0.7,
    transform: ['scale(.75)']
  }, {
    opacity: 0.9,
    transform: ['scale(1)']
  }], ["@keyframes ".concat(aniName), '0%', '45%', '100%']]
};
var _default = css;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/keyframe-css/pulsate.js":
/*!**********************************************!*\
  !*** ./node_modules/keyframe-css/pulsate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aniName = exports["default"] = void 0;
var aniName = 'pulsate';
exports.aniName = aniName;
var css = {
  pulsate: [[{
    transform: ['scale(0.1, 0.1)'],
    opacity: 0,
    filter: 'alpha(opacity=0)',
    msFilter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)'
  }, {
    opacity: 1,
    filter: 'none',
    msFilter: 'none'
  }, {
    transform: ['scale(1.2, 1.2)'],
    filter: 'alpha(opacity=0)',
    msFilter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)'
  }], ["@keyframes ".concat(aniName), '0%', '50%', '100%']]
};
var _default = css;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/keyframe-css/spin.js":
/*!*******************************************!*\
  !*** ./node_modules/keyframe-css/spin.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var css = {
  spin: [[{
    transform: ['rotateZ(0deg)']
  }, {
    transform: ['rotateZ(360deg)']
  }], ['@keyframes spin', '0%', '100%']]
};
var _default = css;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react-dom/cjs/react-dom.development.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom.development.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/hill/git/react-atomic-ui/node_modules/react-dom/cjs/react-dom.development.js'");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (true) {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-dom.development.js */ "./node_modules/react-dom/cjs/react-dom.development.js");
}


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.development.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-runtime.development.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/hill/git/react-atomic-ui/node_modules/react/cjs/react-jsx-runtime.development.js'");

/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/hill/git/react-atomic-ui/node_modules/react/cjs/react.development.js'");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/react/jsx-runtime.js":
/*!*******************************************!*\
  !*** ./node_modules/react/jsx-runtime.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.development.js */ "./node_modules/react/cjs/react-jsx-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/reshow-app/client.js":
/*!*******************************************!*\
  !*** ./node_modules/reshow-app/client.js ***!
  \*******************************************/
/*! exports provided: default, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var setimmediate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
/* harmony import */ var setimmediate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(setimmediate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var array_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! array.polyfill */ "./node_modules/array.polyfill/build/es/src/index.js");
/* harmony import */ var array_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(array_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var es6_promise_auto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! es6-promise/auto */ "./node_modules/es6-promise/auto.js");
/* harmony import */ var es6_promise_auto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(es6_promise_auto__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reshow_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-worker */ "./node_modules/reshow-worker/build/es/index.js");
/* harmony import */ var organism_react_ajax__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! organism-react-ajax */ "./node_modules/organism-react-ajax/build/es/src/index.js");
/* harmony import */ var reshow_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reshow-url */ "./node_modules/reshow-url/build/es/src/index.js");
/* harmony import */ var win_doc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! win-doc */ "./node_modules/win-doc/build/es/src/index.js");
/* harmony import */ var reshow_build__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reshow-build */ "./node_modules/reshow-build/build/es/src/index.js");


 // for webpack promise fixed









var render = function render(oApp, dom) {
  return (dom.innerHTML && react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.hydrate ? react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.render)(oApp, dom);
};

var update = function update(json) {
  return Object(organism_react_ajax__WEBPACK_IMPORTED_MODULE_6__["ajaxDispatch"])("callback", {
    json: json
  });
};

var bInitWorker = false;

var client = function client(rawApp, selector) {
  var app = Object(reshow_build__WEBPACK_IMPORTED_MODULE_9__["default"])(rawApp);
  setImmediate(function () {
    Object(win_doc__WEBPACK_IMPORTED_MODULE_8__["win"])().Reshow = {
      render: render,
      app: app,
      update: update
    };
    var data = {};

    if ("undefined" !== typeof REACT_DATA) {
      data = REACT_DATA;
    }

    var appSelector = selector || "#app";
    var attachDom = Object(win_doc__WEBPACK_IMPORTED_MODULE_8__["doc"])().querySelector(appSelector);

    if (attachDom) {
      render(app(data), attachDom);
    }

    if (!bInitWorker) {
      Object(reshow_worker__WEBPACK_IMPORTED_MODULE_5__["default"])();
      bInitWorker = true;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (client);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/reshow-build/build/es/src/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/reshow-build/build/es/src/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/hill/git/react-atomic-ui/node_modules/reshow-build/build/es/src/index.js'");

/***/ }),

/***/ "./node_modules/reshow-runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/reshow-runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/hill/git/react-atomic-ui/node_modules/reshow-runtime/helpers/extends.js'");

/***/ }),

/***/ "./node_modules/reshow-runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/reshow-runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/hill/git/react-atomic-ui/node_modules/reshow-runtime/helpers/interopRequireWildcard.js'");

/***/ }),

/***/ "./node_modules/reshow-runtime/helpers/objectSpread2.js":
/*!**************************************************************!*\
  !*** ./node_modules/reshow-runtime/helpers/objectSpread2.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/hill/git/react-atomic-ui/node_modules/reshow-runtime/helpers/objectSpread2.js'");

/***/ }),

/***/ "./node_modules/reshow-runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/reshow-runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/hill/git/react-atomic-ui/node_modules/reshow-runtime/helpers/objectWithoutProperties.js'");

/***/ }),

/***/ "./node_modules/reshow-worker/build/es/index.js":
/*!******************************************************!*\
  !*** ./node_modules/reshow-worker/build/es/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/hill/git/react-atomic-ui/node_modules/reshow-worker/build/es/index.js'");

/***/ }),

/***/ "./node_modules/ricon/AccessTime.js":
/*!******************************************!*\
  !*** ./node_modules/ricon/AccessTime.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/objectWithoutProperties */ "./node_modules/reshow-runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Svg = _interopRequireDefault(__webpack_require__(/*! ./Svg */ "./node_modules/ricon/Svg.js"));

var _Path = _interopRequireDefault(__webpack_require__(/*! ./Path */ "./node_modules/ricon/Path.js"));

var _ref2 = /*#__PURE__*/_react["default"].createElement(_Path["default"], {
  d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
});

var AccessTime = function AccessTime(_ref) {
  var type = _ref.type,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["type"]);
  var d;
  var finger;

  switch (type) {
    case 'update':
      d = 'M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z';
      break;

    case 'fill':
      d = 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z';
      break;

    default:
      d = 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z';
      finger = _ref2;
      break;
  }

  return /*#__PURE__*/_react["default"].createElement(_Svg["default"], props, /*#__PURE__*/_react["default"].createElement(_Path["default"], {
    d: d
  }), finger);
};

var _default = AccessTime;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Account.js":
/*!***************************************!*\
  !*** ./node_modules/ricon/Account.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/objectWithoutProperties */ "./node_modules/reshow-runtime/helpers/objectWithoutProperties.js"));

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "./node_modules/ricon/base.js"));

var Account = function Account(_ref) {
  var type = _ref.type,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["type"]);
  var d;

  switch (type) {
    case 'supervisor':
      d = 'M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z';
      break;

    case 'circle':
      d = 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z';
      break;

    default:
      d = 'M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z';
      break;
  }

  return (0, _base["default"])('Account')(d)(props);
};

var _default = Account;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Add.js":
/*!***********************************!*\
  !*** ./node_modules/ricon/Add.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "./node_modules/ricon/base.js"));

var d = {
  _: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z',
  box: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z',
  circle: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z',
  circleOutline: 'M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'
};

var _default = (0, _base["default"])('Add')(d);

exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/BarChart.js":
/*!****************************************!*\
  !*** ./node_modules/ricon/BarChart.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "./node_modules/ricon/base.js"));

var d = 'M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z';

var _default = (0, _base["default"])('BarChart')(d);

exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Blur.js":
/*!************************************!*\
  !*** ./node_modules/ricon/Blur.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "./node_modules/ricon/base.js"));

var d = 'M6 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-3 .5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm15 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM14 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm-11 10c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 7c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-17c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM10 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm8 .5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3 8.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM14 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-4-12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 8.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4-4.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-4c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z';

var _default = (0, _base["default"])('Blur')(d);

exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Build.js":
/*!*************************************!*\
  !*** ./node_modules/ricon/Build.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "./node_modules/ricon/base.js"));

var d = 'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z';

var _default = (0, _base["default"])('Build')(d);

exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Calendar.js":
/*!****************************************!*\
  !*** ./node_modules/ricon/Calendar.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/objectWithoutProperties */ "./node_modules/reshow-runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Svg = _interopRequireDefault(__webpack_require__(/*! ./Svg */ "./node_modules/ricon/Svg.js"));

var _Path = _interopRequireDefault(__webpack_require__(/*! ./Path */ "./node_modules/ricon/Path.js"));

var _ref2 = /*#__PURE__*/_react["default"].createElement(_Path["default"], {
  d: "M113.8,22.905h-13.514v-5.406c0-3.215-2.631-5.845-5.846-5.845s-5.844,2.63-5.844,5.845v5.406H50.406v-5.406  c0-3.215-2.63-5.845-5.845-5.845s-5.845,2.63-5.845,5.845v5.406H25.202c-5.533,0-10.035,4.501-10.035,10.034v74.122  c0,5.533,4.501,10.034,10.035,10.034h79.632c10.478,0,19-8.522,19-19V32.939C123.834,27.406,119.333,22.905,113.8,22.905z   M25.202,30.905h13.521c0.077,3.149,2.671,5.702,5.838,5.702c3.166,0,5.759-2.553,5.837-5.702h38.205  c0.078,3.149,2.67,5.702,5.837,5.702s5.761-2.553,5.839-5.702H113.8c1.104,0,2.034,0.932,2.034,2.034v15.624H23.167V32.939  C23.167,31.836,24.099,30.905,25.202,30.905z M23.167,107.061V56.438h92.667V91.5H99.487l-0.12,17.595H25.202  C24.099,109.095,23.167,108.163,23.167,107.061z M107.37,108.788l0.064-9.288h8.299C115.148,104.058,111.77,107.744,107.37,108.788z  "
});

var Calendar = function Calendar(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);
  return /*#__PURE__*/_react["default"].createElement(_Svg["default"], props, _ref2, /*#__PURE__*/_react["default"].createElement("text", {
    style: Styles.label,
    transform: "translate(65, 47)"
  }, /*#__PURE__*/_react["default"].createElement("tspan", {
    x: "0",
    dy: "1em",
    textAnchor: "middle"
  }, children)));
};

Calendar.defaultProps = {
  viewBox: '0 0 139 139',
  children: ('0' + new Date().getDate()).slice(-2)
};
var _default = Calendar;
exports["default"] = _default;
var Styles = {
  label: {
    fontSize: '3.5rem',
    fontWeight: 900
  }
};
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/ChevronRight.js":
/*!********************************************!*\
  !*** ./node_modules/ricon/ChevronRight.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var _ref = /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, {
  atom: "path",
  d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
});

var ChevronRight = function ChevronRight(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, props, _ref);
};

ChevronRight.defaultProps = {
  viewBox: '0 0 24 24',
  atom: 'svg',
  width: '100%'
};
var _default = ChevronRight;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Circle.js":
/*!**************************************!*\
  !*** ./node_modules/ricon/Circle.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/extends */ "./node_modules/reshow-runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var Circle = function Circle(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, (0, _extends2["default"])({
    atom: "circle"
  }, props));
};

var _default = Circle;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/CircleLoading.js":
/*!*********************************************!*\
  !*** ./node_modules/ricon/CircleLoading.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/extends */ "./node_modules/reshow-runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/objectWithoutProperties */ "./node_modules/reshow-runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Svg = _interopRequireDefault(__webpack_require__(/*! ./Svg */ "./node_modules/ricon/Svg.js"));

var _G = _interopRequireDefault(__webpack_require__(/*! ./G */ "./node_modules/ricon/G.js"));

var _Circle = _interopRequireDefault(__webpack_require__(/*! ./Circle */ "./node_modules/ricon/Circle.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var Circle = function Circle(_ref) {
  var rotate = _ref.rotate,
      delay = _ref.delay,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["rotate", "delay"]);

  if (rotate) {
    rotate = " rotate(".concat(rotate, " 0 13)");
  } else {
    rotate = '';
  }

  var circleStyle = {};

  if (delay) {
    circleStyle.animationDelay = delay + 's';
  }

  return /*#__PURE__*/_react["default"].createElement(_G["default"], {
    transform: "translate(16, 3)".concat(rotate)
  }, /*#__PURE__*/_react["default"].createElement(_Circle["default"], {
    r: "3",
    style: circleStyle,
    styles: injects.loading
  }));
};

var _ref2 = /*#__PURE__*/_react["default"].createElement(Circle, null);

var _ref3 = /*#__PURE__*/_react["default"].createElement(Circle, {
  rotate: 45,
  delay: 0.125
});

var _ref4 = /*#__PURE__*/_react["default"].createElement(Circle, {
  rotate: 90,
  delay: 0.25
});

var _ref5 = /*#__PURE__*/_react["default"].createElement(Circle, {
  rotate: 135,
  delay: 0.375
});

var _ref6 = /*#__PURE__*/_react["default"].createElement(Circle, {
  rotate: 180,
  delay: 0.5
});

var _ref7 = /*#__PURE__*/_react["default"].createElement(Circle, {
  rotate: 225,
  delay: 0.625
});

var _ref8 = /*#__PURE__*/_react["default"].createElement(Circle, {
  rotate: 270,
  delay: 0.75
});

var _ref9 = /*#__PURE__*/_react["default"].createElement(Circle, {
  rotate: 315,
  delay: 0.875
});

var CircleLoading = function CircleLoading(props) {
  injects = (0, _reactAtomicMolecule.lazyInject)(injects, InjectStyles);
  return /*#__PURE__*/_react["default"].createElement(_Svg["default"], (0, _extends2["default"])({}, props, {
    viewBox: "0 0 32 32"
  }), _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9);
};

var _default = CircleLoading;
exports["default"] = _default;
var injects;
var InjectStyles = {
  loading: [{
    animation: ['scale-ani 1s infinite linear']
  }],
  scaleAni: [[{
    transform: ['scale(1)']
  }, {
    transform: ['scale(0)']
  }], ['@keyframes scale-ani', '0%', '100%']]
};
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Code.js":
/*!************************************!*\
  !*** ./node_modules/ricon/Code.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var _ref = /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, {
  atom: "path",
  d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
});

var Code = function Code(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, props, _ref);
};

Code.defaultProps = {
  viewBox: '0 0 24 24',
  atom: 'svg',
  width: '100%'
};
var _default = Code;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Dashboard.js":
/*!*****************************************!*\
  !*** ./node_modules/ricon/Dashboard.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Svg = _interopRequireDefault(__webpack_require__(/*! ./Svg */ "./node_modules/ricon/Svg.js"));

var _Path = _interopRequireDefault(__webpack_require__(/*! ./Path */ "./node_modules/ricon/Path.js"));

var _ref = /*#__PURE__*/_react["default"].createElement(_Path["default"], {
  d: "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"
});

var Dashboard = function Dashboard(props) {
  return /*#__PURE__*/_react["default"].createElement(_Svg["default"], props, _ref);
};

var _default = Dashboard;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Delete.js":
/*!**************************************!*\
  !*** ./node_modules/ricon/Delete.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/objectWithoutProperties */ "./node_modules/reshow-runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Svg = _interopRequireDefault(__webpack_require__(/*! ./Svg */ "./node_modules/ricon/Svg.js"));

var _Path = _interopRequireDefault(__webpack_require__(/*! ./Path */ "./node_modules/ricon/Path.js"));

var same = 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12z';

var Delete = function Delete(_ref) {
  var type = _ref.type,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["type"]);
  return /*#__PURE__*/_react["default"].createElement(_Svg["default"], props, function () {
    var d;

    switch (type) {
      case 'forever':
        d = same + 'm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z';
        break;

      case 'sweep':
        d = 'M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z';
        break;

      default:
        d = same + 'M19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z';
        break;
    }

    return /*#__PURE__*/_react["default"].createElement(_Path["default"], {
      d: d
    });
  }());
};

var _default = Delete;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Description.js":
/*!*******************************************!*\
  !*** ./node_modules/ricon/Description.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var _ref = /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, {
  atom: "path",
  d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
});

var IcoDescription = function IcoDescription(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, props, _ref);
};

IcoDescription.defaultProps = {
  viewBox: '0 0 24 24',
  atom: 'svg',
  width: '100%'
};
var _default = IcoDescription;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Device.js":
/*!**************************************!*\
  !*** ./node_modules/ricon/Device.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/objectWithoutProperties */ "./node_modules/reshow-runtime/helpers/objectWithoutProperties.js"));

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "./node_modules/ricon/base.js"));

var Device = function Device(_ref) {
  var type = _ref.type,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["type"]);
  var d;

  switch (type) {
    case 'desktop':
      d = 'M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z';
      break;

    case 'tablet':
      d = 'M18.5 0h-14C3.12 0 2 1.12 2 2.5v19C2 22.88 3.12 24 4.5 24h14c1.38 0 2.5-1.12 2.5-2.5v-19C21 1.12 19.88 0 18.5 0zm-7 23c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7.5-4H4V3h15v16z';
      break;

    case 'phone':
      d = 'M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z';
      break;
  }

  return (0, _base["default"])('Device')(d)(props);
};

var _default = Device;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Download.js":
/*!****************************************!*\
  !*** ./node_modules/ricon/Download.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/objectWithoutProperties */ "./node_modules/reshow-runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Svg = _interopRequireDefault(__webpack_require__(/*! ./Svg */ "./node_modules/ricon/Svg.js"));

var _Path = _interopRequireDefault(__webpack_require__(/*! ./Path */ "./node_modules/ricon/Path.js"));

var Downlod = function Downlod(_ref) {
  var type = _ref.type,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["type"]);
  return /*#__PURE__*/_react["default"].createElement(_Svg["default"], props, function () {
    var d;

    switch (type) {
      case 'file':
        d = 'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z';
        break;

      case 'cloud':
      default:
        d = 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z';
        break;
    }

    return /*#__PURE__*/_react["default"].createElement(_Path["default"], {
      d: d
    });
  }());
};

var _default = Downlod;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Dropdown.js":
/*!****************************************!*\
  !*** ./node_modules/ricon/Dropdown.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ArrowPath = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/extends */ "./node_modules/reshow-runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/objectWithoutProperties */ "./node_modules/reshow-runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Svg = _interopRequireDefault(__webpack_require__(/*! ./Svg */ "./node_modules/ricon/Svg.js"));

var _Path = _interopRequireDefault(__webpack_require__(/*! ./Path */ "./node_modules/ricon/Path.js"));

var ArrowPath = function ArrowPath(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 5 : _ref$size,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["size"]);
  return /*#__PURE__*/_react["default"].createElement(_Path["default"], (0, _extends2["default"])({
    d: "M".concat(Math.ceil((24 - size * 2) / 2), " ").concat(Math.ceil((24 - size) / 2), "l").concat(size, " ").concat(size, " ").concat(size, "-").concat(size, "z")
  }, props));
};

exports.ArrowPath = ArrowPath;

var Dropdown = function Dropdown(_ref2) {
  var type = _ref2.type,
      props = (0, _objectWithoutProperties2["default"])(_ref2, ["type"]);
  var transform = null;

  switch (type) {
    case "up":
      transform = "rotate(180,12,13)";
      break;

    case "left":
      transform = "rotate(90,12,13)";
      break;

    case "right":
      transform = "rotate(270,12,13)";
      break;
  }

  return /*#__PURE__*/_react["default"].createElement(_Svg["default"], props, /*#__PURE__*/_react["default"].createElement(ArrowPath, {
    transform: transform
  }));
};

var _default = Dropdown;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/ricon/Edit.js":
/*!************************************!*\
  !*** ./node_modules/ricon/Edit.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "./node_modules/ricon/base.js"));

var d = 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z';

var _default = (0, _base["default"])('Edit')(d);

exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Email.js":
/*!*************************************!*\
  !*** ./node_modules/ricon/Email.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var _Path = _interopRequireDefault(__webpack_require__(/*! ./Path */ "./node_modules/ricon/Path.js"));

var _ref = /*#__PURE__*/_react["default"].createElement(_Path["default"], {
  d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
});

var Email = function Email(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, props, _ref);
};

Email.defaultProps = {
  viewBox: '0 0 24 24',
  atom: 'svg',
  width: '100%'
};
var _default = Email;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Error.js":
/*!*************************************!*\
  !*** ./node_modules/ricon/Error.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var _ref = /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, {
  atom: "path",
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
});

var Error = function Error(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, props, _ref);
};

Error.defaultProps = {
  viewBox: '0 0 24 24',
  atom: 'svg',
  width: '100%'
};
var _default = Error;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Exit.js":
/*!************************************!*\
  !*** ./node_modules/ricon/Exit.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var _Path = _interopRequireDefault(__webpack_require__(/*! ./Path */ "./node_modules/ricon/Path.js"));

var _ref = /*#__PURE__*/_react["default"].createElement(_Path["default"], {
  d: "M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
});

var Exit = function Exit(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, props, _ref);
};

Exit.defaultProps = {
  viewBox: '0 0 24 24',
  atom: 'svg',
  width: '100%'
};
var _default = Exit;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Facebook.js":
/*!****************************************!*\
  !*** ./node_modules/ricon/Facebook.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var _ref = /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, {
  atom: "path",
  d: "M13,10h3v3h-3v7h-3v-7H7v-3h3V8.745c0-1.189,0.374-2.691,1.118-3.512C11.862,4.41,12.791,4,13.904,4H16v3h-2.1 C13.402,7,13,7.402,13,7.899V10z"
});

var Facebook = function Facebook(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, props, _ref);
};

Facebook.defaultProps = {
  viewBox: '0 0 24 24',
  atom: 'svg',
  width: '100%'
};
var _default = Facebook;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/FacebookMessage.js":
/*!***********************************************!*\
  !*** ./node_modules/ricon/FacebookMessage.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var _ref = /*#__PURE__*/_react["default"].createElement("g", {
  transform: "translate(0,160) scale(0.1,-0.1)",
  stroke: "none"
}, /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, {
  atom: "path",
  fill: "#5a73ad",
  d: "M183 1574 c-60 -22 -126 -84 -154 -146 l-24 -53 0 -581 0 -580 30 -59 c36 -70 93 -118 167 -140 77 -22 1119 -22 1196 0 74 22 131 70 167 140 l30 59 0 580 0 581 -24 53 c-29 64 -95 125 -158 146 -67 23 -1165 23 -1230 0z m1182 -639 l0 -330 -82 -3 -83 -3 0 -84 c0 -47 -3 -85 -8 -85 -4 0 -45 38 -92 85 l-84 85 -281 2 -280 3 -3 320 c-1 176 0 326 3 333 3 10 99 12 457 10 l453 -3 0 -330z m-945 -200 c0 -142 1 -155 19 -165 12 -6 109 -10 245 -10 l226 0 0 -69 c0 -108 14 -101 -188 -101 l-177 0 -92 -92 -93 -93 0 92 0 92 -62 3 -63 3 -3 235 c-1 129 0 240 2 247 4 9 32 13 96 13 l90 0 0 -155z"
}), /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, {
  atom: "path",
  fill: "#5a73ad",
  d: "M780 1008 c-30 -35 -79 -92 -110 -127 -30 -36 -50 -62 -45 -59 6 3 52 31 103 62 51 31 95 56 98 56 3 0 38 -29 78 -65 l72 -64 109 109 c61 61 107 110 103 110 -4 0 -54 -22 -111 -49 l-105 -49 -69 70 -69 69 -54 -63z"
}));

var FBMessage = function FBMessage(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, props, _ref);
};

FBMessage.defaultProps = {
  viewBox: '0 0 160 160',
  atom: 'svg',
  width: '100%'
};
var _default = FBMessage;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/FeaturedPlayList.js":
/*!************************************************!*\
  !*** ./node_modules/ricon/FeaturedPlayList.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var _Path = _interopRequireDefault(__webpack_require__(/*! ./Path */ "./node_modules/ricon/Path.js"));

var _ref = /*#__PURE__*/_react["default"].createElement(_Path["default"], {
  d: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 8H3V9h9v2zm0-4H3V5h9v2z"
});

var FeaturedPlayList = function FeaturedPlayList(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, props, _ref);
};

FeaturedPlayList.defaultProps = {
  viewBox: '0 0 24 24',
  atom: 'svg',
  width: '100%'
};
var _default = FeaturedPlayList;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/File.js":
/*!************************************!*\
  !*** ./node_modules/ricon/File.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/extends */ "./node_modules/reshow-runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/objectWithoutProperties */ "./node_modules/reshow-runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Svg = _interopRequireDefault(__webpack_require__(/*! ./Svg */ "./node_modules/ricon/Svg.js"));

var _Path = _interopRequireDefault(__webpack_require__(/*! ./Path */ "./node_modules/ricon/Path.js"));

var File = function File(_ref) {
  var children = _ref.children,
      background = _ref.background,
      shadowColor = _ref.shadowColor,
      labelBackground = _ref.labelBackground,
      labelColor = _ref.labelColor,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children", "background", "shadowColor", "labelBackground", "labelColor"]);
  return /*#__PURE__*/_react["default"].createElement(_Svg["default"], (0, _extends2["default"])({
    viewBox: "0 0 26 26"
  }, props), /*#__PURE__*/_react["default"].createElement(_Path["default"], {
    d: "m8 3.4c-1.1046 0-2 0.9-2 2v8 4 6c0 1.1 0.8954 2 2 2h14c1.105 0 2-0.9 2-2v-6-4-4l-6-6h-10z",
    fill: shadowColor
  }), /*#__PURE__*/_react["default"].createElement(_Path["default"], {
    d: "m8 2.4c-1.1046 0-2 0.9-2 2v8 4 6c0 1.1 0.8954 2 2 2h14c1.105 0 2-0.9 2-2v-6-4-4l-6-6h-10z",
    fill: background,
    stroke: shadowColor
  }), /*#__PURE__*/_react["default"].createElement(_Path["default"], {
    d: "m24 8.4-6-6v4c0 1.1 0.895 2 2 2h4z",
    fill: shadowColor
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    width: "20",
    height: "10.5",
    y: "11",
    x: "1",
    rx: "1",
    fill: labelBackground
  }), /*#__PURE__*/_react["default"].createElement("text", {
    fill: labelColor,
    style: Styles.label,
    transform: "translate(10.5, 11)"
  }, /*#__PURE__*/_react["default"].createElement("tspan", {
    x: "0",
    dy: "1em",
    textAnchor: "middle"
  }, children)));
};

File.defaultProps = {
  background: '#e1e1e1',
  shadowColor: '#7f7f7f',
  labelBackground: '#000',
  labelColor: '#fff'
};
var _default = File;
exports["default"] = _default;
var Styles = {
  label: {
    fontFamily: 'PoiretOne-Regular, Poiret One',
    fontSize: 9
  }
};
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/G.js":
/*!*********************************!*\
  !*** ./node_modules/ricon/G.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/extends */ "./node_modules/reshow-runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var G = function G(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, (0, _extends2["default"])({
    atom: "g"
  }, props));
};

var _default = G;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Git.js":
/*!***********************************!*\
  !*** ./node_modules/ricon/Git.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var _ref = /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, {
  atom: "path",
  d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
});

var Git = function Git(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, props, _ref);
};

Git.defaultProps = {
  viewBox: '0 0 16 16',
  atom: 'svg',
  width: '100%'
};
var _default = Git;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Hamburger.js":
/*!*****************************************!*\
  !*** ./node_modules/ricon/Hamburger.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/objectWithoutProperties */ "./node_modules/reshow-runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Svg = _interopRequireDefault(__webpack_require__(/*! ./Svg */ "./node_modules/ricon/Svg.js"));

var _Path = _interopRequireDefault(__webpack_require__(/*! ./Path */ "./node_modules/ricon/Path.js"));

var _G = _interopRequireDefault(__webpack_require__(/*! ./G */ "./node_modules/ricon/G.js"));

var Hamburger = function Hamburger(_ref) {
  var line1 = _ref.line1,
      line2 = _ref.line2,
      line3 = _ref.line3,
      transform = _ref.transform,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["line1", "line2", "line3", "transform"]);
  return /*#__PURE__*/_react["default"].createElement(_Svg["default"], props, /*#__PURE__*/_react["default"].createElement(_G["default"], {
    transform: transform
  }, /*#__PURE__*/_react["default"].createElement(_Path["default"], {
    styles: line1,
    d: "M3,6v2h18V6H3z"
  }), /*#__PURE__*/_react["default"].createElement(_Path["default"], {
    styles: line2,
    d: "M3,13h18v-2H3V13z"
  }), /*#__PURE__*/_react["default"].createElement(_Path["default"], {
    styles: line3,
    d: "M3,18h18v-2H3V18z"
  })));
};

var _default = Hamburger;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/HamburgerToArrow.js":
/*!************************************************!*\
  !*** ./node_modules/ricon/HamburgerToArrow.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _HamburgerTransform = _interopRequireDefault(__webpack_require__(/*! ./HamburgerTransform */ "./node_modules/ricon/HamburgerTransform.js"));

var Styles = {
  line: {
    transform: ['rotate(360deg)'],
    transition: ['transform 300ms cubic-bezier(.4,0,.2,1), visibility 0s linear .21s']
  },
  line1: {
    transform: ['translateX(3px) translateY(5px)']
  },
  line2: {
    transform: ['rotate(39deg) translateX(9px) translateY(-6.5px)']
  },
  line3: {
    transform: ['rotate(-40deg) translateX(-7px) translateY(-4px)']
  }
};

var _default = (0, _HamburgerTransform["default"])(Styles);

exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/HamburgerToX.js":
/*!********************************************!*\
  !*** ./node_modules/ricon/HamburgerToX.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _HamburgerTransform = _interopRequireDefault(__webpack_require__(/*! ./HamburgerTransform */ "./node_modules/ricon/HamburgerTransform.js"));

var Styles = {
  line: {
    transition: ['transform 300ms cubic-bezier(.4,0,.2,1), visibility 0s linear 150ms']
  },
  line1: {
    transform: ['rotate(45deg) translateX(4.5px) translateY(-6px)']
  },
  line2: {
    visibility: 'hidden'
  },
  line3: {
    transform: ['rotate(-45deg) translateX(-13px) translateY(-1px)']
  }
};

var _default = (0, _HamburgerTransform["default"])(Styles);

exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/HamburgerTransform.js":
/*!**************************************************!*\
  !*** ./node_modules/ricon/HamburgerTransform.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/extends */ "./node_modules/reshow-runtime/helpers/extends.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/objectSpread2 */ "./node_modules/reshow-runtime/helpers/objectSpread2.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/objectWithoutProperties */ "./node_modules/reshow-runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var _Hamburger = _interopRequireDefault(__webpack_require__(/*! ./Hamburger */ "./node_modules/ricon/Hamburger.js"));

var HamburgerTransform = function HamburgerTransform(Styles) {
  var Transform = function Transform(props) {
    var on = props.on,
        right = props.right,
        others = (0, _objectWithoutProperties2["default"])(props, ["on", "right"]);
    var styleLine1 = Styles.line;
    var styleLine2 = Styles.line;
    var styleLine3 = Styles.line;

    if (right) {
      others.transform = 'translate(24, 24) rotate(180)';
    }

    if (on) {
      styleLine1 = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, Styles.line), Styles.line1);
      styleLine2 = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, Styles.line), Styles.line2);
      styleLine3 = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, Styles.line), Styles.line3);
    }

    return /*#__PURE__*/_react["default"].createElement(_Hamburger["default"], (0, _extends2["default"])({}, others, {
      line1: (0, _reactAtomicMolecule.reactStyle)(styleLine1, null, false),
      line2: (0, _reactAtomicMolecule.reactStyle)(styleLine2, null, false),
      line3: (0, _reactAtomicMolecule.reactStyle)(styleLine3, null, false)
    }));
  };

  return Transform;
};

var _default = HamburgerTransform;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Help.js":
/*!************************************!*\
  !*** ./node_modules/ricon/Help.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var _Path = _interopRequireDefault(__webpack_require__(/*! ./Path */ "./node_modules/ricon/Path.js"));

var _ref = /*#__PURE__*/_react["default"].createElement(_Path["default"], {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
});

var Help = function Help(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, props, _ref);
};

Help.defaultProps = {
  viewBox: '0 0 24 24',
  atom: 'svg',
  width: '100%'
};
var _default = Help;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Home.js":
/*!************************************!*\
  !*** ./node_modules/ricon/Home.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var _Path = _interopRequireDefault(__webpack_require__(/*! ./Path */ "./node_modules/ricon/Path.js"));

var _ref = /*#__PURE__*/_react["default"].createElement(_Path["default"], {
  d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
});

var Home = function Home(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, props, _ref);
};

Home.defaultProps = {
  viewBox: '0 0 24 24',
  atom: 'svg',
  width: '100%'
};
var _default = Home;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Link.js":
/*!************************************!*\
  !*** ./node_modules/ricon/Link.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var _Path = _interopRequireDefault(__webpack_require__(/*! ./Path */ "./node_modules/ricon/Path.js"));

var _ref = /*#__PURE__*/_react["default"].createElement(_Path["default"], {
  d: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
});

var Link = function Link(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, props, _ref);
};

Link.defaultProps = {
  viewBox: '0 0 24 24',
  atom: 'svg',
  width: '100%'
};
var _default = Link;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Monetization.js":
/*!********************************************!*\
  !*** ./node_modules/ricon/Monetization.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/objectWithoutProperties */ "./node_modules/reshow-runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Svg = _interopRequireDefault(__webpack_require__(/*! ./Svg */ "./node_modules/ricon/Svg.js"));

var _Path = _interopRequireDefault(__webpack_require__(/*! ./Path */ "./node_modules/ricon/Path.js"));

var circle = 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z';
var sign = 'M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z';

var Monetization = function Monetization(_ref) {
  var type = _ref.type,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["type"]);
  var d;

  switch (type) {
    case 'sign':
      d = sign;
      break;

    default:
      d = circle;
      break;
  }

  return /*#__PURE__*/_react["default"].createElement(_Svg["default"], props, /*#__PURE__*/_react["default"].createElement(_Path["default"], {
    d: d
  }));
};

var _default = Monetization;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/MyLocation.js":
/*!******************************************!*\
  !*** ./node_modules/ricon/MyLocation.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/extends */ "./node_modules/reshow-runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/objectWithoutProperties */ "./node_modules/reshow-runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var _spin = _interopRequireDefault(__webpack_require__(/*! keyframe-css/spin */ "./node_modules/keyframe-css/spin.js"));

var _ref = /*#__PURE__*/_react["default"].createElement("path", {
  d: "M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06c-1.13.12-2.19.46-3.16.97l1.5 1.5C10.16 5.19 11.06 5 12 5c3.87 0 7 3.13 7 7 0 .94-.19 1.84-.52 2.65l1.5 1.5c.5-.96.84-2.02.97-3.15H23v-2h-2.06zM3 4.27l2.04 2.04C3.97 7.62 3.25 9.23 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c1.77-.2 3.38-.91 4.69-1.98L19.73 21 21 19.73 4.27 3 3 4.27zm13.27 13.27C15.09 18.45 13.61 19 12 19c-3.87 0-7-3.13-7-7 0-1.61.55-3.09 1.46-4.27l9.81 9.81z"
});

var Off = function Off(props) {
  return _ref;
};

var _ref2 = /*#__PURE__*/_react["default"].createElement("path", {
  d: "M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"
});

var On = function On(props) {
  return _ref2;
};

var _ref3 = /*#__PURE__*/_react["default"].createElement("path", {
  d: "M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"
});

var Fixed = function Fixed(props) {
  return _ref3;
};

var _ref4 = /*#__PURE__*/_react["default"].createElement(Off, null);

var _ref5 = /*#__PURE__*/_react["default"].createElement(On, null);

var _ref6 = /*#__PURE__*/_react["default"].createElement(Fixed, null);

var MyLocation = function MyLocation(props) {
  var type = props.type,
      loading = props.loading,
      others = (0, _objectWithoutProperties2["default"])(props, ["type", "loading"]);
  injects = (0, _reactAtomicMolecule.lazyInject)(injects, InjectStyles);
  var styles = null;
  var path = null;

  switch (type) {
    case 'off':
      path = _ref4;
      break;

    case 'on':
      path = _ref5;
      break;

    case 'fixed':
      path = _ref6;
      break;
  }

  if (loading) {
    styles = [injects.loading];
  }

  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, (0, _extends2["default"])({
    styles: styles
  }, others), path);
};

MyLocation.defaultProps = {
  type: 'fixed',
  viewBox: '0 0 24 24',
  atom: 'svg',
  width: '100%'
};
var _default = MyLocation;
exports["default"] = _default;
var injects;
var InjectStyles = {
  loading: [{
    animation: ['spin 1s infinite linear']
  }],
  spin: _spin["default"].spin
};
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Notification.js":
/*!********************************************!*\
  !*** ./node_modules/ricon/Notification.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/objectWithoutProperties */ "./node_modules/reshow-runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var _Path = _interopRequireDefault(__webpack_require__(/*! ./Path */ "./node_modules/ricon/Path.js"));

var samePath1 = 'c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68';
var samePath = samePath1 + 'C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2';

var Notification = function Notification(_ref) {
  var type = _ref.type,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["type"]);
  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, props, function () {
    var d;

    switch (type) {
      case 'active':
        d = 'M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11' + samePath + 'v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z';
        break;

      case 'none':
        d = 'M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5' + samePath + 'zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z';
        break;

      case 'off':
        d = 'M20 18.69L7.84 6.14 5.27 3.49 4 4.76l2.8 2.8v.01c-.52.99-.8 2.16-.8 3.42v5l-2 2v1h13.73l2 2L21 19.72l-1-1.03zM12 22c1.11 0 2-.89 2-2h-4c0 1.11.89 2 2 2zm6-7.32V11' + samePath1 + 'c-.15.03-.29.08-.42.12-.1.03-.2.07-.3.11h-.01c-.01 0-.01 0-.02.01-.23.09-.46.2-.68.31 0 0-.01 0-.01.01L18 14.68z';
        break;

      case 'paused':
        d = 'M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5' + samePath + 'zm-3.5-6.2l-2.8 3.4h2.8V15h-5v-1.8l2.8-3.4H9.5V8h5v1.8z';
        break;

      default:
        d = 'M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5' + samePath + 'z';
        break;
    }

    return /*#__PURE__*/_react["default"].createElement(_Path["default"], {
      d: d
    });
  }());
};

Notification.defaultProps = {
  viewBox: '0 0 24 24',
  atom: 'svg',
  width: '100%'
};
var _default = Notification;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Npm.js":
/*!***********************************!*\
  !*** ./node_modules/ricon/Npm.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var _ref = /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, {
  atom: "path",
  d: "M269 3186 c-99 -27 -193 -106 -243 -205 l-26 -50 0 -1332 0 -1331 31 -59 c40 -75 102 -132 187 -172 l67 -32 1255 -3 c911 -2 1271 0 1315 8 119 23 224 102 282 211 l28 54 0 1325 0 1325 -29 54 c-42 80 -128 163 -201 192 l-60 24 -1280 2 c-992 1 -1290 -1 -1326 -11z m1311 -1386 l0 -600 200 0 200 0 0 600 0 600 200 0 200 0 0 -800 0 -800 -800 0 -800 0 0 800 0 800 400 0 400 0 0 -600z"
});

var Npm = function Npm(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, props, _ref);
};

Npm.defaultProps = {
  viewBox: '0 0 3200 3200',
  fill: '#b93131',
  atom: 'svg',
  width: '100%'
};
var _default = Npm;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Path.js":
/*!************************************!*\
  !*** ./node_modules/ricon/Path.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/extends */ "./node_modules/reshow-runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var Path = function Path(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, (0, _extends2["default"])({
    atom: "path"
  }, props));
};

var _default = Path;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Person.js":
/*!**************************************!*\
  !*** ./node_modules/ricon/Person.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/objectWithoutProperties */ "./node_modules/reshow-runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var _Path = _interopRequireDefault(__webpack_require__(/*! ./Path */ "./node_modules/ricon/Path.js"));

var samePath = 'M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4';

var Person = function Person(_ref) {
  var type = _ref.type,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["type"]);
  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, props, function () {
    var d;

    switch (type) {
      case 'add':
        d = '4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z';
        break;

      default:
        d = '4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z';
        break;
    }

    return /*#__PURE__*/_react["default"].createElement(_Path["default"], {
      d: samePath + ' ' + d
    });
  }());
};

Person.defaultProps = {
  viewBox: '0 0 24 24',
  atom: 'svg',
  width: '100%'
};
var _default = Person;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Phone.js":
/*!*************************************!*\
  !*** ./node_modules/ricon/Phone.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var _ref = /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, {
  atom: "path",
  d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
});

var Phone = function Phone(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, props, _ref);
};

Phone.defaultProps = {
  viewBox: '0 0 24 24',
  atom: 'svg',
  width: '100%'
};
var _default = Phone;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Pin.js":
/*!***********************************!*\
  !*** ./node_modules/ricon/Pin.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/extends */ "./node_modules/reshow-runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/objectWithoutProperties */ "./node_modules/reshow-runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var Pin = function Pin(props) {
  var open = props.open,
      header = props.header,
      children = props.children,
      label = props.label,
      others = (0, _objectWithoutProperties2["default"])(props, ["open", "header", "children", "label"]);
  injects = (0, _reactAtomicMolecule.lazyInject)(injects, InjectStyles);
  var pinStyles = [injects.pin];
  var pinContent = null;

  if (open) {
    pinStyles = [injects.pin, injects.pinOpen];
    var thisHeader = null;

    if (header) {
      thisHeader = /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.Header, {
        style: Styles.header
      }, header);
    }

    pinContent = /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.Card, {
      style: {
        background: pinOpenBackground
      }
    }, /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.Content, null, thisHeader, children));
  }

  var thisLabel = label ? /*#__PURE__*/_react["default"].createElement("div", {
    style: Styles.label
  }, label) : /*#__PURE__*/_react["default"].createElement("div", {
    style: Styles.point
  });
  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, (0, _extends2["default"])({
    style: Styles.container
  }, others), /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, {
    styles: pinStyles
  }, pinContent), thisLabel);
};

var _default = Pin;
exports["default"] = _default;
var pinOpenBackground = '#c4c1cd';
var Styles = {
  container: {
    position: 'relative',
    display: 'inline-block'
  },
  header: {
    marginLeft: '20px'
  },
  label: {
    position: 'absolute',
    top: '7px',
    left: '-16px'
  },
  point: {
    width: '14px',
    height: '14px',
    margin: '8px 0 0 8px',
    background: '#2f2f2f',
    position: 'absolute',
    top: 0,
    borderRadius: '50%'
  }
};
var injects;
var InjectStyles = {
  pin: [{
    width: '30px',
    height: '30px',
    borderRadius: ['50% 50% 50% 0'],
    background: '#89849b',
    transform: ['rotate(-45deg)'],
    transition: ['all 0.25s ease-in-out']
  }],
  pinOpen: [{
    width: '250px',
    height: 'auto',
    borderRadius: ['5px'],
    transform: ['rotate(0)']
  }]
};
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Play.js":
/*!************************************!*\
  !*** ./node_modules/ricon/Play.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/objectWithoutProperties */ "./node_modules/reshow-runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Svg = _interopRequireDefault(__webpack_require__(/*! ./Svg */ "./node_modules/ricon/Svg.js"));

var _Path = _interopRequireDefault(__webpack_require__(/*! ./Path */ "./node_modules/ricon/Path.js"));

var Play = function Play(_ref) {
  var fgColor = _ref.fgColor,
      bgColor = _ref.bgColor,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["fgColor", "bgColor"]);
  return /*#__PURE__*/_react["default"].createElement(_Svg["default"], props, /*#__PURE__*/_react["default"].createElement(_Path["default"], {
    d: "M12 20c4.41 0 8-3.59 8-8s-3.59-8-8-8-8 3.59-8 8 3.59 8 8 8zM10 7.5l6 4.5-6 4.5v-9z",
    opacity: ".3",
    fill: bgColor
  }), /*#__PURE__*/_react["default"].createElement(_Path["default"], {
    d: "M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm0-18c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8zm-2 3.5v9l6-4.5z",
    fill: fgColor
  }));
};

var _default = Play;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/PlayListAdd.js":
/*!*******************************************!*\
  !*** ./node_modules/ricon/PlayListAdd.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var _Path = _interopRequireDefault(__webpack_require__(/*! ./Path */ "./node_modules/ricon/Path.js"));

var _ref = /*#__PURE__*/_react["default"].createElement(_Path["default"], {
  d: "M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"
});

var PlayListAdd = function PlayListAdd(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, props, _ref);
};

PlayListAdd.defaultProps = {
  viewBox: '0 0 24 24',
  atom: 'svg',
  width: '100%'
};
var _default = PlayListAdd;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Pulse.js":
/*!*************************************!*\
  !*** ./node_modules/ricon/Pulse.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! reshow-runtime/helpers/interopRequireWildcard */ "./node_modules/reshow-runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/objectSpread2 */ "./node_modules/reshow-runtime/helpers/objectSpread2.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var _pulsate = _interopRequireDefault(__webpack_require__(/*! keyframe-css/pulsate */ "./node_modules/keyframe-css/pulsate.js"));

var _breath = _interopRequireDefault(__webpack_require__(/*! keyframe-css/breath */ "./node_modules/keyframe-css/breath.js"));

var Pulse = function Pulse(_ref) {
  var style = _ref.style,
      pointStyle = _ref.pointStyle,
      ringStyle = _ref.ringStyle;
  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, {
    style: style
  }, /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, {
    styles: [injects.pulsePoint, pointStyle]
  }), /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, {
    styles: [injects.pulseRing, ringStyle]
  }));
};

var PulseIcon = function PulseIcon(_ref2) {
  var style = _ref2.style,
      pointColor = _ref2.pointColor,
      pointRotateX = _ref2.pointRotateX,
      ringColor = _ref2.ringColor,
      animation = _ref2.animation;
  var pointStyle = (0, _reactAtomicMolecule.reactStyle)({
    background: pointColor,
    transform: ['translate(-50%,-50%) rotateX(' + pointRotateX + 'deg)']
  }, null, false);
  var ringStyle = (0, _reactAtomicMolecule.reactStyle)({
    boxShadow: ['0 0 1px 2px ' + ringColor],
    animation: [animation + ' 1s ease-out'],
    animationIterationCount: ['infinite']
  }, null, false);
  injects = (0, _reactAtomicMolecule.lazyInject)(injects, InjectStyles);
  return /*#__PURE__*/_react["default"].createElement(Pulse, {
    style: (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, Styles.pulse), style),
    pointStyle: pointStyle,
    ringStyle: ringStyle
  });
};

PulseIcon.defaultProps = {
  pointColor: 'rgba(5,80,255,0.9)',
  pointRotateX: 0,
  ringColor: '#89849b',
  animation: 'pulsate'
};
var _default = PulseIcon;
exports["default"] = _default;
var Styles = {
  pulse: {
    position: 'relative',
    zIndex: 1,
    display: 'inline-block',
    width: 40,
    height: 40
  }
};
var injects;
var InjectStyles = {
  pulsePoint: [{
    borderRadius: ['50%'],
    height: 14,
    width: 14,
    position: 'absolute',
    top: '50%',
    left: '50%'
  }],
  pulseRing: [{
    borderRadius: ['50%'],
    height: '100%',
    opacity: 0,
    filter: 'alpha(opacity=0)',
    msFilter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)'
  }],
  pulsateKeyframe: _pulsate["default"].pulsate,
  breathKeyframe: _breath["default"].breath
};
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Refresh.js":
/*!***************************************!*\
  !*** ./node_modules/ricon/Refresh.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Svg = _interopRequireDefault(__webpack_require__(/*! ./Svg */ "./node_modules/ricon/Svg.js"));

var _Path = _interopRequireDefault(__webpack_require__(/*! ./Path */ "./node_modules/ricon/Path.js"));

var _ref = /*#__PURE__*/_react["default"].createElement(_Svg["default"], null, /*#__PURE__*/_react["default"].createElement(_Path["default"], {
  d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
}));

var Refresh = function Refresh(props) {
  return _ref;
};

var _default = Refresh;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Reply.js":
/*!*************************************!*\
  !*** ./node_modules/ricon/Reply.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/objectSpread2 */ "./node_modules/reshow-runtime/helpers/objectSpread2.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/objectWithoutProperties */ "./node_modules/reshow-runtime/helpers/objectWithoutProperties.js"));

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "./node_modules/ricon/base.js"));

var Reply = function Reply(_ref) {
  var type = _ref.type,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["type"]);
  var d = 'M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z';

  switch (type) {
    case 'right':
      props.style = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, props.style), {}, {
        transform: 'scaleX(-1)'
      });
      break;
  }

  return (0, _base["default"])('Reply')(d)(props);
};

var _default = Reply;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Search.js":
/*!**************************************!*\
  !*** ./node_modules/ricon/Search.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "./node_modules/ricon/base.js"));

var d = 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z';

var _default = (0, _base["default"])('Search')(d);

exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Settings.js":
/*!****************************************!*\
  !*** ./node_modules/ricon/Settings.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/objectWithoutProperties */ "./node_modules/reshow-runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Svg = _interopRequireDefault(__webpack_require__(/*! ./Svg */ "./node_modules/ricon/Svg.js"));

var _Path = _interopRequireDefault(__webpack_require__(/*! ./Path */ "./node_modules/ricon/Path.js"));

var Settings = function Settings(_ref) {
  var type = _ref.type,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["type"]);
  var d = null;

  switch (type) {
    case 'square':
      d = 'M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z';
      break;

    default:
      d = 'M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z';
      break;
  }

  return /*#__PURE__*/_react["default"].createElement(_Svg["default"], props, /*#__PURE__*/_react["default"].createElement(_Path["default"], {
    d: d
  }));
};

var _default = Settings;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Shopee.js":
/*!**************************************!*\
  !*** ./node_modules/ricon/Shopee.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var _Path = _interopRequireDefault(__webpack_require__(/*! ./Path */ "./node_modules/ricon/Path.js"));

var _ref = /*#__PURE__*/_react["default"].createElement(_Path["default"], {
  d: "m54.9 17.7h-13.1c-.1-5.7-3.1-17.7-12.4-17.7-10.3-.1-12.4 12.9-12.5 17.7h-13.1c-3.5 0-2.9 3.6-2.9 3.6l2.5 34.9s-.1 7.7 6.7 7.9h38.6c6.5-.4 6.6-7.9 6.6-7.9l2.6-34.9c0-.1.6-3.8-3-3.6zm-25.5-14.5c8.2.2 9 13.4 9.1 14.5h-18.3c0-1.1.6-14.3 9.2-14.5zm9.1 47.9c-1 1.8-2.9 3-4.9 3.6-4.5 1.3-9.4-.1-13-2.9-.5-.4-.7-.9-.4-1.5.3-.5 1-.8 1.5-.4 3.7 2.8 9.3 4.4 13.4 1.7 1.7-1.1 2.6-3.3 1.9-5.3-.6-1.9-2.4-3.1-4-4-2.1-1.2-4.4-1.7-6.6-2.7-1.9-.9-3.8-2.2-4.8-4.1-1.2-2.4-.4-5.3 1.4-7.2 3.6-3.8 9.9-3.2 13.9-.4 1.1.8.1 2.7-1.1 1.9-2-1.4-4.8-2.3-7.3-1.9-2.7.4-5.6 2.6-5.2 5.7.3 1.9 2.3 3.2 3.9 4 .8.4 1.6.8 2.5 1 3.2 1 6.9 2.7 8.7 5.8 1.3 2 1.2 4.6.1 6.7z"
});

var Shopee = function Shopee(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, props, _ref);
};

Shopee.defaultProps = {
  viewBox: '0 0 65 65',
  atom: 'svg',
  width: '100%',
  fill: '#ff5722'
};
var _default = Shopee;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/ShoppingCart.js":
/*!********************************************!*\
  !*** ./node_modules/ricon/ShoppingCart.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var _ref = /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, {
  atom: "path",
  d: "M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
});

var ShoppingCart = function ShoppingCart(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, props, _ref);
};

ShoppingCart.defaultProps = {
  viewBox: '0 0 24 24',
  atom: 'svg',
  width: '100%'
};
var _default = ShoppingCart;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Sort.js":
/*!************************************!*\
  !*** ./node_modules/ricon/Sort.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Svg = _interopRequireDefault(__webpack_require__(/*! ./Svg */ "./node_modules/ricon/Svg.js"));

var _Dropdown = __webpack_require__(/*! ./Dropdown */ "./node_modules/ricon/Dropdown.js");

var _ref = /*#__PURE__*/_react["default"].createElement(_Dropdown.ArrowPath, {
  transform: "rotate(180,12,9) translate(0,-3)"
});

var _ref2 = /*#__PURE__*/_react["default"].createElement(_Dropdown.ArrowPath, {
  transform: "translate(0,3)"
});

var Sort = function Sort(props) {
  return /*#__PURE__*/_react["default"].createElement(_Svg["default"], props, _ref, _ref2);
};

var _default = Sort;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Svg.js":
/*!***********************************!*\
  !*** ./node_modules/ricon/Svg.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var Svg = function Svg(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, props);
};

Svg.defaultProps = {
  ui: false,
  viewBox: '0 0 24 24',
  atom: 'svg',
  width: '100%'
};
var _default = Svg;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Sync.js":
/*!************************************!*\
  !*** ./node_modules/ricon/Sync.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/objectWithoutProperties */ "./node_modules/reshow-runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var _Path = _interopRequireDefault(__webpack_require__(/*! ./Path */ "./node_modules/ricon/Path.js"));

var Sync = function Sync(_ref) {
  var type = _ref.type,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["type"]);
  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, props, function () {
    var d;

    switch (type) {
      case 'disabled':
        d = 'M10 6.35V4.26c-.8.21-1.55.54-2.23.96l1.46 1.46c.25-.12.5-.24.77-.33zm-7.14-.94l2.36 2.36C4.45 8.99 4 10.44 4 12c0 2.21.91 4.2 2.36 5.64L4 20h6v-6l-2.24 2.24C6.68 15.15 6 13.66 6 12c0-1 .25-1.94.68-2.77l8.08 8.08c-.25.13-.5.25-.77.34v2.09c.8-.21 1.55-.54 2.23-.96l2.36 2.36 1.27-1.27L4.14 4.14 2.86 5.41zM20 4h-6v6l2.24-2.24C17.32 8.85 18 10.34 18 12c0 1-.25 1.94-.68 2.77l1.46 1.46C19.55 15.01 20 13.56 20 12c0-2.21-.91-4.2-2.36-5.64L20 4z';
        break;

      case 'problem':
        d = 'M3 12c0 2.21.91 4.2 2.36 5.64L3 20h6v-6l-2.24 2.24C5.68 15.15 5 13.66 5 12c0-2.61 1.67-4.83 4-5.65V4.26C5.55 5.15 3 8.27 3 12zm8 5h2v-2h-2v2zM21 4h-6v6l2.24-2.24C18.32 8.85 19 10.34 19 12c0 2.61-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74 0-2.21-.91-4.2-2.36-5.64L21 4zm-10 9h2V7h-2v6z';
        break;

      default:
        d = 'M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z';
        break;
    }

    return /*#__PURE__*/_react["default"].createElement(_Path["default"], {
      d: d
    });
  }());
};

Sync.defaultProps = {
  viewBox: '0 0 24 24',
  atom: 'svg',
  width: '100%'
};
var _default = Sync;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Timer.js":
/*!*************************************!*\
  !*** ./node_modules/ricon/Timer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/objectWithoutProperties */ "./node_modules/reshow-runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var _Path = _interopRequireDefault(__webpack_require__(/*! ./Path */ "./node_modules/ricon/Path.js"));

var Timer = function Timer(_ref) {
  var type = _ref.type,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["type"]);
  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, props, function () {
    var d;

    switch (type) {
      case 'off':
        d = 'M19.04 4.55l-1.42 1.42C16.07 4.74 14.12 4 12 4c-1.83 0-3.53.55-4.95 1.48l1.46 1.46C9.53 6.35 10.73 6 12 6c3.87 0 7 3.13 7 7 0 1.27-.35 2.47-.94 3.49l1.45 1.45C20.45 16.53 21 14.83 21 13c0-2.12-.74-4.07-1.97-5.61l1.42-1.42-1.41-1.42zM15 1H9v2h6V1zm-4 8.44l2 2V8h-2v1.44zM3.02 4L1.75 5.27 4.5 8.03C3.55 9.45 3 11.16 3 13c0 4.97 4.02 9 9 9 1.84 0 3.55-.55 4.98-1.5l2.5 2.5 1.27-1.27-7.71-7.71L3.02 4zM12 20c-3.87 0-7-3.13-7-7 0-1.28.35-2.48.95-3.52l9.56 9.56c-1.03.61-2.23.96-3.51.96z';
        break;

      default:
        d = 'M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z';
        break;
    }

    return /*#__PURE__*/_react["default"].createElement(_Path["default"], {
      d: d
    });
  }());
};

Timer.defaultProps = {
  viewBox: '0 0 24 24',
  atom: 'svg',
  width: '100%'
};
var _default = Timer;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/TouchApp.js":
/*!****************************************!*\
  !*** ./node_modules/ricon/TouchApp.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "./node_modules/ricon/base.js"));

var TouchApp = function TouchApp(props) {
  var d = "M9,11.24V7.5C9,6.12,10.12,5,11.5,5S14,6.12,14,7.5v3.74c1.21-0.81,2-2.18,2-3.74C16,5.01,13.99,3,11.5,3S7,5.01,7,7.5 C7,9.06,7.79,10.43,9,11.24z M18.84,15.87l-4.54-2.26c-0.17-0.07-0.35-0.11-0.54-0.11H13v-6C13,6.67,12.33,6,11.5,6 S10,6.67,10,7.5v10.74c-3.6-0.76-3.54-0.75-3.67-0.75c-0.31,0-0.59,0.13-0.79,0.33l-0.79,0.8l4.94,4.94 C9.96,23.83,10.34,24,10.75,24h6.79c0.75,0,1.33-0.55,1.44-1.28l0.75-5.27c0.01-0.07,0.02-0.14,0.02-0.2 C19.75,16.63,19.37,16.09,18.84,15.87z";
  return (0, _base["default"])("TouchApp")(d)(props);
};

var _default = TouchApp;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/VerifiedUser.js":
/*!********************************************!*\
  !*** ./node_modules/ricon/VerifiedUser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var _Path = _interopRequireDefault(__webpack_require__(/*! ./Path */ "./node_modules/ricon/Path.js"));

var _ref = /*#__PURE__*/_react["default"].createElement(_Path["default"], {
  d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"
});

var VerifiedUser = function VerifiedUser(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, props, _ref);
};

VerifiedUser.defaultProps = {
  viewBox: '0 0 24 24',
  atom: 'svg',
  width: '100%'
};
var _default = VerifiedUser;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Video.js":
/*!*************************************!*\
  !*** ./node_modules/ricon/Video.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var _Path = _interopRequireDefault(__webpack_require__(/*! ./Path */ "./node_modules/ricon/Path.js"));

var _ref = /*#__PURE__*/_react["default"].createElement(_Path["default"], {
  d: "M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7z"
});

var Video = function Video(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, props, _ref);
};

Video.defaultProps = {
  viewBox: '0 0 24 24',
  atom: 'svg',
  width: '100%'
};
var _default = Video;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/ViewModule.js":
/*!******************************************!*\
  !*** ./node_modules/ricon/ViewModule.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "./node_modules/ricon/base.js"));

var ViewModule = function ViewModule(props) {
  var d = "M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z";
  return (0, _base["default"])("ViewModule")(d)(props);
};

var _default = ViewModule;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Visibility.js":
/*!******************************************!*\
  !*** ./node_modules/ricon/Visibility.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "./node_modules/ricon/base.js"));

var Visibility = function Visibility(props) {
  var d = "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z";
  return (0, _base["default"])("Visibility")(d)(props);
};

var _default = Visibility;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Wallet.js":
/*!**************************************!*\
  !*** ./node_modules/ricon/Wallet.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var _Path = _interopRequireDefault(__webpack_require__(/*! ./Path */ "./node_modules/ricon/Path.js"));

var _ref = /*#__PURE__*/_react["default"].createElement(_Path["default"], {
  d: "M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
});

var Wallet = function Wallet(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, props, _ref);
};

Wallet.defaultProps = {
  viewBox: '0 0 24 24',
  atom: 'svg',
  width: '100%'
};
var _default = Wallet;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Warning.js":
/*!***************************************!*\
  !*** ./node_modules/ricon/Warning.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var _ref = /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, {
  atom: "path",
  d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
});

var Warning = function Warning(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, props, _ref);
};

Warning.defaultProps = {
  viewBox: '0 0 24 24',
  atom: 'svg',
  width: '100%'
};
var _default = Warning;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/Wifi.js":
/*!************************************!*\
  !*** ./node_modules/ricon/Wifi.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var _Path = _interopRequireDefault(__webpack_require__(/*! ./Path */ "./node_modules/ricon/Path.js"));

var _ref = /*#__PURE__*/_react["default"].createElement(_Path["default"], {
  d: "M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"
});

var Wifi = function Wifi(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, props, _ref);
};

Wifi.defaultProps = {
  viewBox: '0 0 24 24',
  atom: 'svg',
  width: '100%'
};
var _default = Wifi;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/X.js":
/*!*********************************!*\
  !*** ./node_modules/ricon/X.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/extends */ "./node_modules/reshow-runtime/helpers/extends.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/objectSpread2 */ "./node_modules/reshow-runtime/helpers/objectSpread2.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/objectWithoutProperties */ "./node_modules/reshow-runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var injects;

var ICON_X = function ICON_X(props) {
  injects = (0, _reactAtomicMolecule.lazyInject)(injects, InjectStyles);
  var position = props.position,
      weight = props.weight,
      size = props.size,
      className = props.className,
      color = props.color,
      style = props.style,
      others = (0, _objectWithoutProperties2["default"])(props, ["position", "weight", "size", "className", "color", "style"]);
  var classes = (0, _reactAtomicMolecule.mixClass)(className, 'icon', 'x');
  var lineStyle = {
    width: weight,
    height: size,
    background: color
  };
  var containerStyle = Styles.container;

  if ('absolute' === position) {
    containerStyle = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, containerStyle), Styles.absolute);
  }

  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, (0, _extends2["default"])({
    className: classes
  }, others, {
    style: (0, _objectSpread2["default"])((0, _objectSpread2["default"])({
      width: size,
      height: size
    }, containerStyle), style)
  }), /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, {
    styles: injects.line,
    style: lineStyle
  }, /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, {
    styles: injects.line2,
    style: lineStyle
  })));
};

ICON_X.defaultProps = {
  style: {},
  size: '1rem',
  weight: '.2rem',
  color: '#333',
  position: 'absolute'
};
var _default = ICON_X;
exports["default"] = _default;
var Styles = {
  container: {
    background: 'transparent',
    position: 'relative',
    cursor: 'pointer'
  },
  absolute: {
    position: 'absolute',
    top: '5px',
    right: '5px'
  }
};
var InjectStyles = {
  line: [{
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: ['translate(-50%,-50%) rotate(45deg)']
  }],
  line2: [{
    transform: ['rotate(90deg)']
  }]
};
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/ZoomIn.js":
/*!**************************************!*\
  !*** ./node_modules/ricon/ZoomIn.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

var _ref = /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, {
  atom: "path",
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
});

var _ref2 = /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, {
  atom: "path",
  d: "M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"
});

var ZoomIn = function ZoomIn(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, props, _ref, _ref2);
};

ZoomIn.defaultProps = {
  viewBox: '0 0 24 24',
  atom: 'svg',
  width: '100%'
};
var _default = ZoomIn;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/ricon/base.js":
/*!************************************!*\
  !*** ./node_modules/ricon/base.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "./node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/extends */ "./node_modules/reshow-runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/objectWithoutProperties */ "./node_modules/reshow-runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Svg = _interopRequireDefault(__webpack_require__(/*! ./Svg */ "./node_modules/ricon/Svg.js"));

var _Path = _interopRequireDefault(__webpack_require__(/*! ./Path */ "./node_modules/ricon/Path.js"));

var base = function base(displayName) {
  return function (d) {
    var Element = function Element(_ref) {
      var type = _ref.type,
          props = (0, _objectWithoutProperties2["default"])(_ref, ["type"]);
      return /*#__PURE__*/_react["default"].createElement(_Svg["default"], (0, _extends2["default"])({}, props, {
        "data-name": displayName
      }), /*#__PURE__*/_react["default"].createElement(_Path["default"], {
        d: d[type] || d['_'] || d
      }));
    };

    Element.displayName = displayName;
    return Element;
  };
};

var _default = base;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/win-doc/build/es/src/index.js":
/*!****************************************************!*\
  !*** ./node_modules/win-doc/build/es/src/index.js ***!
  \****************************************************/
/*! exports provided: doc, win */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/hill/git/react-atomic-ui/node_modules/win-doc/build/es/src/index.js'");

/***/ })

})
//# sourceMappingURL=vendor.30e5b70e43b3e40fa598.hot.js.map