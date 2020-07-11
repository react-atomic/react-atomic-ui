webpackHotUpdate("vendor",{

/***/ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/array.dedup/build/src/index.js":
/*!**************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-spotlight/node_modules/array.dedup/build/src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var dedup = function dedup(array) {
    if (!array || !array.filter) {
        return array;
    }
    return array.filter(function (item, pos, arr) {
        return arr.indexOf(item) === pos;
    });
};

exports.default = dedup;
module.exports = exports['default'];

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/class-lib/build/src/getClassReg.js":
/*!******************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-spotlight/node_modules/class-lib/build/src/getClassReg.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getSafeReg = __webpack_require__(/*! get-safe-reg */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/get-safe-reg/build/es/src/index.js");

var _getSafeReg2 = _interopRequireDefault(_getSafeReg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getRegString = function getRegString(name) {
  return '(?:^|\\s+)' + (0, _getSafeReg2.default)(name) + '(?:\\s+|$)';
};

var cache = (0, _getSafeReg.cacheReg)({})(getRegString);

exports.default = function (name) {
  return cache(name);
};

module.exports = exports['default'];

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/class-lib/build/src/hasClass.js":
/*!***************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-spotlight/node_modules/class-lib/build/src/hasClass.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getClassReg = __webpack_require__(/*! ./getClassReg */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/class-lib/build/src/getClassReg.js");

var _getClassReg2 = _interopRequireDefault(_getClassReg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasClass = function hasClass(classes, name) {
    return (0, _getClassReg2.default)(name).test(classes);
};

exports.default = hasClass;
module.exports = exports['default'];

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/class-lib/build/src/index.js":
/*!************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-spotlight/node_modules/class-lib/build/src/index.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixClass = __webpack_require__(/*! ./mixClass */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/class-lib/build/src/mixClass.js");

Object.defineProperty(exports, 'mixClass', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mixClass).default;
  }
});

var _hasClass = __webpack_require__(/*! ./hasClass */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/class-lib/build/src/hasClass.js");

Object.defineProperty(exports, 'hasClass', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_hasClass).default;
  }
});

var _removeClass = __webpack_require__(/*! ./removeClass */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/class-lib/build/src/removeClass.js");

Object.defineProperty(exports, 'removeClass', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_removeClass).default;
  }
});

var _toggleClass = __webpack_require__(/*! ./toggleClass */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/class-lib/build/src/toggleClass.js");

Object.defineProperty(exports, 'toggleClass', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toggleClass).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/class-lib/build/src/mixClass.js":
/*!***************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-spotlight/node_modules/class-lib/build/src/mixClass.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _array = __webpack_require__(/*! array.dedup */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/array.dedup/build/src/index.js");

var _array2 = _interopRequireDefault(_array);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isArray = Array.isArray;
var keys = Object.keys;

var mixClass = function mixClass() {
    var classes = [];
    var args = arguments;
    keys(args).forEach(function (key) {
        var arg = args[key];
        if (!arg) {
            return;
        }
        var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);
        if (argType === 'string' || argType === 'number') {
            classes.push(arg);
        } else if (isArray(arg)) {
            classes.push(mixClass.apply(null, arg));
        } else if (argType === 'object') {
            keys(arg).forEach(function (k) {
                if (arg[k]) {
                    classes.push(k);
                }
            });
        }
    });
    var cookClasses = [];
    classes.forEach(function (c) {
        return cookClasses = cookClasses.concat(c.split(' '));
    });
    return (0, _array2.default)(cookClasses).join(' ');
};

exports.default = mixClass;
module.exports = exports['default'];

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/class-lib/build/src/removeClass.js":
/*!******************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-spotlight/node_modules/class-lib/build/src/removeClass.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getClassReg = __webpack_require__(/*! ./getClassReg */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/class-lib/build/src/getClassReg.js");

var _getClassReg2 = _interopRequireDefault(_getClassReg);

var _hasClass = __webpack_require__(/*! ./hasClass */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/class-lib/build/src/hasClass.js");

var _hasClass2 = _interopRequireDefault(_hasClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var removeClass = function removeClass(classes, name) {
    if (classes && (0, _hasClass2.default)(classes, name)) {
        classes = classes.replace((0, _getClassReg2.default)(name), ' ').replace(/(^\s+)|\s+$/g, '');
        if ((0, _hasClass2.default)(classes, name)) {
            // in case of multiple adjacent
            classes = removeClass(classes, name);
        }
    }
    return classes;
};

exports.default = removeClass;
module.exports = exports['default'];

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/class-lib/build/src/toggleClass.js":
/*!******************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-spotlight/node_modules/class-lib/build/src/toggleClass.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hasClass = __webpack_require__(/*! ./hasClass */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/class-lib/build/src/hasClass.js");

var _hasClass2 = _interopRequireDefault(_hasClass);

var _removeClass = __webpack_require__(/*! ./removeClass */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/class-lib/build/src/removeClass.js");

var _removeClass2 = _interopRequireDefault(_removeClass);

var _mixClass = __webpack_require__(/*! ./mixClass */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/class-lib/build/src/mixClass.js");

var _mixClass2 = _interopRequireDefault(_mixClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toggleClass = function toggleClass(classes, name) {
    if ((0, _hasClass2.default)(classes, name)) {
        classes = (0, _removeClass2.default)(classes, name);
    } else {
        classes = (0, _mixClass2.default)(classes, name);
    }
    return classes;
};

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/css-query-selector/build/es/src/index.js":
/*!************************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-spotlight/node_modules/css-query-selector/build/es/src/index.js ***!
  \************************************************************************************************************************/
/*! exports provided: default, queryAll, queryAncestor, queryEl, queryOne, queryFrom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return queryAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAncestor", function() { return queryAncestor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryEl", function() { return queryEl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryOne", function() { return queryOne; });
/* harmony import */ var _queryFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./queryFrom */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/css-query-selector/build/es/src/queryFrom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryFrom", function() { return _queryFrom__WEBPACK_IMPORTED_MODULE_0__["default"]; });


/* harmony default export */ __webpack_exports__["default"] = (_queryFrom__WEBPACK_IMPORTED_MODULE_0__["defaultQuery"]);
var queryAll = _queryFrom__WEBPACK_IMPORTED_MODULE_0__["defaultQuery"].all,
    queryAncestor = _queryFrom__WEBPACK_IMPORTED_MODULE_0__["defaultQuery"].ancestor,
    queryEl = _queryFrom__WEBPACK_IMPORTED_MODULE_0__["defaultQuery"].el,
    queryOne = _queryFrom__WEBPACK_IMPORTED_MODULE_0__["defaultQuery"].one;


/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/css-query-selector/build/es/src/queryFrom.js":
/*!****************************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-spotlight/node_modules/css-query-selector/build/es/src/queryFrom.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default, defaultQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultQuery", function() { return defaultQuery; });
/* harmony import */ var reshow_runtime_es_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/typeof */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/reshow-runtime/es/helpers/typeof.js");
/* harmony import */ var reshow_runtime_es_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/toConsumableArray */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/reshow-runtime/es/helpers/toConsumableArray.js");
/* harmony import */ var win_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! win-doc */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/win-doc/build/es/src/index.js");
/* harmony import */ var reshow_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-constant */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/reshow-constant/build/es/index.js");





var arrayFrom = function arrayFrom(a) {
  return Object(reshow_runtime_es_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(a);
};

var queryFrom = function queryFrom(base) {
  var doc;

  switch (Object(reshow_runtime_es_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(base)) {
    case reshow_constant__WEBPACK_IMPORTED_MODULE_3__["FUNCTION"]:
      doc = base;
      break;

    default:
      doc = function doc() {
        return defaultQuery.el(base);
      };

      break;
  }

  var queryOne = function queryOne(sel) {
    return doc().querySelector(sel);
  };

  var queryAll = function queryAll(sel) {
    return arrayFrom(doc().querySelectorAll(sel));
  };

  var queryEl = function queryEl(el) {
    return reshow_constant__WEBPACK_IMPORTED_MODULE_3__["STRING"] === Object(reshow_runtime_es_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(el) ? queryOne(el) : el;
  };

  var queryAncestor = function queryAncestor(el, ancestor) {
    el = queryEl(el);

    var findHit = function findHit(all) {
      var hit = false;
      all.some(function (p) {
        if (p.contains(el) && !p.isSameNode(el)) {
          hit = p;
          return true;
        } else {
          return false;
        }
      });
      return hit;
    };

    var lastHit;
    var hit;
    var all = queryAll(ancestor);
    hit = findHit(all);

    while (hit) {
      lastHit = hit;
      all = hit.querySelectorAll(ancestor);

      if (all) {
        hit = findHit(arrayFrom(all));
      } else {
        break;
      }
    }

    return lastHit;
  };

  return {
    all: queryAll,
    ancestor: queryAncestor,
    el: queryEl,
    one: queryOne
  };
};

var defaultQuery = queryFrom(win_doc__WEBPACK_IMPORTED_MODULE_2__["doc"]);
/* harmony default export */ __webpack_exports__["default"] = (queryFrom);


/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/get-safe-reg/build/es/src/index.js":
/*!******************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-spotlight/node_modules/get-safe-reg/build/es/src/index.js ***!
  \******************************************************************************************************************/
/*! exports provided: default, cacheReg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheReg", function() { return cacheReg; });
var esc = /[|\\{}()[\]^$+*?.]/g;

var getSafeReg = function getSafeReg(name) {
  return name.replace(esc, '\\$&');
};

var cacheReg = function cacheReg(cache) {
  return function (regString, flags) {
    return function (name) {
      if (!cache[name]) {
        cache[name] = new RegExp(regString(name), flags);
      }

      return cache[name];
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (getSafeReg);


/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/get-style/build/src/index.js":
/*!************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-spotlight/node_modules/get-style/build/src/index.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var getStyle = function getStyle(el, styleKey) {
    if ('undefined' === typeof document) {
        return;
    }
    var doc = document;
    var styleValue = '';
    if (el.currentStyle) {
        styleValue = el.currentStyle[styleKey];
    } else if (doc.defaultView && doc.defaultView.getComputedStyle) {
        styleValue = doc.defaultView.getComputedStyle(el, null).getPropertyValue(styleKey);
    }
    if (styleValue && styleValue.toLowerCase) {
        return styleValue.toLowerCase();
    } else {
        return styleValue;
    }
};

exports.default = getStyle;
module.exports = exports['default'];

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/reshow-constant/build/es/index.js":
/*!*****************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-spotlight/node_modules/reshow-constant/build/es/index.js ***!
  \*****************************************************************************************************************/
/*! exports provided: UNDEFINED, FUNCTION, OBJECT, DEFAULT, STRING, SYMBOL, SCRIPT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNDEFINED", function() { return UNDEFINED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FUNCTION", function() { return FUNCTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBJECT", function() { return OBJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT", function() { return DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STRING", function() { return STRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYMBOL", function() { return SYMBOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCRIPT", function() { return SCRIPT; });
var UNDEFINED = 'undefined';
var FUNCTION = 'function';
var OBJECT = 'object';
var DEFAULT = 'default';
var STRING = 'string';
var SYMBOL = 'symbol';
var SCRIPT = 'script';

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/reshow-runtime/es/helpers/getTypeOf.js":
/*!**********************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-spotlight/node_modules/reshow-runtime/es/helpers/getTypeOf.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-constant */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/reshow-constant/build/es/index.js");

var types = '|number|boolean|' + reshow_constant__WEBPACK_IMPORTED_MODULE_0__["STRING"] + '|' + reshow_constant__WEBPACK_IMPORTED_MODULE_0__["OBJECT"] + '|' + reshow_constant__WEBPACK_IMPORTED_MODULE_0__["FUNCTION"] + '|' + reshow_constant__WEBPACK_IMPORTED_MODULE_0__["UNDEFINED"] + '|';
/**
 * Do not use this.
 * The class name not reliable after code compress.
 */

var toBase = function toBase(type, name) {
  if (-1 === types.indexOf('|' + type + '|')) {
    if (!name) {
      name = type;
    }

    return name;
  } else {
    return type;
  }
};

var getTypeIs = function getTypeIs(val, name) {
  var type = Object.prototype.toString.call(val).replace(/^\[object\s(.*)\]$/, '$1').toLowerCase();
  return toBase(type, name);
};

var getTypeOf = function getTypeOf(val, name) {
  if (null == val) {
    return getTypeIs(val, name);
  }

  try {
    var type = Object.getPrototypeOf(val).constructor.name.toLowerCase();
    return toBase(type, name);
  } catch (ex) {
    return getTypeIs(val, name);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (getTypeOf);

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/reshow-runtime/es/helpers/toConsumableArray.js":
/*!******************************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-spotlight/node_modules/reshow-runtime/es/helpers/toConsumableArray.js ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var toConsumableArray = function toConsumableArray(arr) {
  if (Array.isArray(arr) || !Array.from) {
    for (var i = 0, arr2 = Array(arr.length), j = arr.length; i < j; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return Array.from(arr);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (toConsumableArray);

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/reshow-runtime/es/helpers/typeof.js":
/*!*******************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-spotlight/node_modules/reshow-runtime/es/helpers/typeof.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getTypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTypeOf */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/reshow-runtime/es/helpers/getTypeOf.js");
/* harmony import */ var reshow_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-constant */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/reshow-constant/build/es/index.js");



var _typeof = function _typeof(o) {
  return reshow_constant__WEBPACK_IMPORTED_MODULE_1__["SYMBOL"] === Object(_getTypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(o) ? reshow_constant__WEBPACK_IMPORTED_MODULE_1__["SYMBOL"] : Object(_getTypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(o, reshow_constant__WEBPACK_IMPORTED_MODULE_1__["OBJECT"]);
};

/* harmony default export */ __webpack_exports__["default"] = (_typeof);

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/win-doc/build/es/src/index.js":
/*!*************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-spotlight/node_modules/win-doc/build/es/src/index.js ***!
  \*************************************************************************************************************/
/*! exports provided: doc, win */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doc", function() { return doc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "win", function() { return win; });
/**
 * !!Important!! do not use reshow-constant here
 * Bable will transpile it to double undefined
 */
var doc = function doc(w) {
  w = w || win();
  return 'undefined' !== typeof w.document ? w.document : {
    __null: true
  };
};

var win = function win() {
  return 'undefined' !== typeof window ? window : {
    __null: true
  };
};



/***/ })

})
//# sourceMappingURL=vendor.7ba0a014d161ae036311.hot-update.js.map