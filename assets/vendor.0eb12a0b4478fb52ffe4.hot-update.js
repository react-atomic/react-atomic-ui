webpackHotUpdate("vendor",{

/***/ "../react-atomic-organism/packages/organism-react-popup/node_modules/keyframe-css/index.es.js":
/*!****************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/node_modules/keyframe-css/index.es.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! get-object-value */ "../react-atomic-organism/packages/organism-react-popup/node_modules/get-object-value/build/es/src/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-atomic-molecule */ "../react-atomic-organism/packages/organism-react-popup/node_modules/react-atomic-molecule/build/es/src/index.js");




var inject = {};
var c = 0;

var processCss = function processCss(css) {
  css = Object(get_object_value__WEBPACK_IMPORTED_MODULE_0__["getDefault"])(css);
  var keys = Object.keys(css);

  if (keys.length) {
    keys.forEach(function (key) {
      css[key].push('keyframe-' + key + '-' + c);
      react_atomic_molecule__WEBPACK_IMPORTED_MODULE_1__["reactStyle"].apply(null, css[key]);
      c++;
    });
    Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_1__["injectStyle"])();
  }
};

var getKeyframeCss = function getKeyframeCss(key) {
  if (inject[key]) {
    return;
  }

  switch (key) {
    case 'candleInTheWind':
      __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.t.bind(null, /*! ./candleInTheWind */ "../react-atomic-organism/packages/organism-react-popup/node_modules/keyframe-css/candleInTheWind.js", 7)).then(function (css) {
        return processCss(css);
      });
      break;

    case 'fadeIn':
      __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.t.bind(null, /*! ./fadeIn */ "../react-atomic-organism/packages/organism-react-popup/node_modules/keyframe-css/fadeIn.js", 7)).then(function (css) {
        return processCss(css);
      });
      break;

    case 'fadeInUp':
      __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.t.bind(null, /*! ./fadeInUp */ "../react-atomic-organism/packages/organism-react-popup/node_modules/keyframe-css/fadeInUp.js", 7)).then(function (css) {
        return processCss(css);
      });
      break;

    case 'fadeInUpBig':
      __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.t.bind(null, /*! ./fadeInUpBig */ "../react-atomic-organism/packages/organism-react-popup/node_modules/keyframe-css/fadeInUpBig.js", 7)).then(function (css) {
        return processCss(css);
      });
      break;

    case 'fadeInRight':
      __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.t.bind(null, /*! ./fadeInRight */ "../react-atomic-organism/packages/organism-react-popup/node_modules/keyframe-css/fadeInRight.js", 7)).then(function (css) {
        return processCss(css);
      });
      break;

    case 'fadeInDown':
      __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.t.bind(null, /*! ./fadeInDown */ "../react-atomic-organism/packages/organism-react-popup/node_modules/keyframe-css/fadeInDown.js", 7)).then(function (css) {
        return processCss(css);
      });
      break;

    case 'fadeInLeft':
      __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.t.bind(null, /*! ./fadeInLeft */ "../react-atomic-organism/packages/organism-react-popup/node_modules/keyframe-css/fadeInLeft.js", 7)).then(function (css) {
        return processCss(css);
      });
      break;

    case 'fadeOut':
      __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.t.bind(null, /*! ./fadeOut */ "../react-atomic-organism/packages/organism-react-popup/node_modules/keyframe-css/fadeOut.js", 7)).then(function (css) {
        return processCss(css);
      });
      break;

    case 'fadeOutUp':
      __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.t.bind(null, /*! ./fadeOutUp */ "../react-atomic-organism/packages/organism-react-popup/node_modules/keyframe-css/fadeOutUp.js", 7)).then(function (css) {
        return processCss(css);
      });
      break;

    case 'fadeOutRight':
      __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.t.bind(null, /*! ./fadeOutRight */ "../react-atomic-organism/packages/organism-react-popup/node_modules/keyframe-css/fadeOutRight.js", 7)).then(function (css) {
        return processCss(css);
      });
      break;

    case 'fadeOutDown':
      __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.t.bind(null, /*! ./fadeOutDown */ "../react-atomic-organism/packages/organism-react-popup/node_modules/keyframe-css/fadeOutDown.js", 7)).then(function (css) {
        return processCss(css);
      });
      break;

    case 'fadeOutLeft':
      __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.t.bind(null, /*! ./fadeOutLeft */ "../react-atomic-organism/packages/organism-react-popup/node_modules/keyframe-css/fadeOutLeft.js", 7)).then(function (css) {
        return processCss(css);
      });
      break;

    case 'pulsate':
      __webpack_require__.e(/*! import() */ 15).then(__webpack_require__.t.bind(null, /*! ./pulsate */ "../react-atomic-organism/packages/organism-react-popup/node_modules/keyframe-css/pulsate.js", 7)).then(function (css) {
        return processCss(css);
      });
      break;

    case 'spin':
      __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.t.bind(null, /*! ./spin */ "../react-atomic-organism/packages/organism-react-popup/node_modules/keyframe-css/spin.js", 7)).then(function (css) {
        return processCss(css);
      });
      break;
  }

  inject[key] = true;
};

/* harmony default export */ __webpack_exports__["default"] = (getKeyframeCss);


/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/node_modules/memoize-one/dist/memoize-one.esm.js":
/*!***************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (newInputs[i] !== lastInputs[i]) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeOne);


/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/node_modules/object-assign/index.js":
/*!**************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/node_modules/object-assign/index.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/node_modules/organism-react-animate/build/es/src/getChildMapping.js":
/*!**********************************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/node_modules/organism-react-animate/build/es/src/getChildMapping.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var getChildMapping = function getChildMapping(children, mapFn) {
  var mapper = function mapper(child, key) {
    return mapFn ? mapFn(child, key) : child;
  };

  var result = {};

  if (children) {
    // map for auto assign child.key
    react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, function (c) {
      return c;
    }).forEach(function (child) {
      if (!child) {
        return;
      }

      result[child.key] = mapper(child, child.key);
    });
  }

  return result;
};

/* harmony default export */ __webpack_exports__["default"] = (getChildMapping);

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/node_modules/organism-react-animate/build/es/src/index.js":
/*!************************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/node_modules/organism-react-animate/build/es/src/index.js ***!
  \************************************************************************************************************************/
/*! exports provided: default, Image, AnimateGroup, Replace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_organisms_Animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/organisms/Animate */ "../react-atomic-organism/packages/organism-react-popup/node_modules/organism-react-animate/build/es/ui/organisms/Animate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ui_organisms_Animate__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ui_organisms_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/organisms/Image */ "../react-atomic-organism/packages/organism-react-popup/node_modules/organism-react-animate/build/es/ui/organisms/Image.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _ui_organisms_Image__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ui_organisms_AnimateGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/organisms/AnimateGroup */ "../react-atomic-organism/packages/organism-react-popup/node_modules/organism-react-animate/build/es/ui/organisms/AnimateGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimateGroup", function() { return _ui_organisms_AnimateGroup__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ui_organisms_Replace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/organisms/Replace */ "../react-atomic-organism/packages/organism-react-popup/node_modules/organism-react-animate/build/es/ui/organisms/Replace.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Replace", function() { return _ui_organisms_Replace__WEBPACK_IMPORTED_MODULE_3__["default"]; });

// Default





/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/node_modules/organism-react-animate/build/es/ui/organisms/Animate.js":
/*!***********************************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/node_modules/organism-react-animate/build/es/ui/organisms/Animate.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/extends */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/extends.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutProperties */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/objectWithoutProperties.js");
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/possibleConstructorReturn */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/possibleConstructorReturn.js");
/* harmony import */ var reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/getPrototypeOf */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/getPrototypeOf.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _AnimateGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AnimateGroup */ "../react-atomic-organism/packages/organism-react-popup/node_modules/organism-react-animate/build/es/ui/organisms/AnimateGroup.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-atomic-molecule */ "../react-atomic-organism/packages/organism-react-popup/node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var keyframe_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! keyframe-css */ "../react-atomic-organism/packages/organism-react-popup/node_modules/keyframe-css/index.es.js");














var inject = {};

var Animate =
/*#__PURE__*/
function (_Component) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Animate, _Component);

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(Animate, [{
    key: "init",
    value: function init(key, ani, timeout) {
      Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_12__["reactStyle"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({
        animationName: [ani],
        animationDuration: [timeout * 1 + 30 + 'ms']
      }, Styles.linear), '.' + key, key); // Need locate after reactStyle, for inject latest style in getKeyframe function

      Object(keyframe_css__WEBPACK_IMPORTED_MODULE_13__["default"])(ani);
      inject[key] = true;
    }
  }, {
    key: "parseAniValue",
    value: function parseAniValue(s) {
      var data = s.split('-');
      var name = data[0];
      var timeout = 500;
      var delay = 0;

      if (!isNaN(data[1])) {
        timeout = parseInt(data[1], 10);
      }

      if (!isNaN(data[2])) {
        delay = parseInt(data[2], 10);
      }

      var key = [name, timeout, delay].join('-');
      return {
        className: key + ' ' + name,
        key: key,
        name: name,
        timeout: timeout,
        delay: delay
      };
    }
  }, {
    key: "update",
    value: function update(props) {
      var appear = props.appear,
          enter = props.enter,
          leave = props.leave;
      var data;

      if (appear) {
        data = this.parseAniValue(appear);
        this.appear = data.name;
        this.appearKey = data.key;
        this.appearTimeout = data.timeout;
        this.appearDelay = data.delay;
        this.appearClass = data.className;
      }

      if (enter) {
        data = this.parseAniValue(enter);
        this.enter = data.name;
        this.enterKey = data.key;
        this.enterTimeout = data.timeout;
        this.enterDelay = data.delay;
        this.enterClass = data.className;
      }

      if (leave) {
        data = this.parseAniValue(leave);
        this.leave = data.name;
        this.leaveKey = data.key;
        this.leaveTimeout = data.timeout;
        this.leaveDelay = data.delay;
        this.leaveClass = data.className;
      }
    }
  }, {
    key: "updateClient",
    value: function updateClient(props) {
      if ('undefined' === typeof document) {
        return;
      }

      var appear = props.appear,
          enter = props.enter,
          leave = props.leave;

      if (appear) {
        if (!inject[this.appearKey]) {
          this.init(this.appearKey, this.appear, this.appearTimeout);
        }
      }

      if (enter) {
        if (!inject[this.enterKey]) {
          this.init(this.enterKey, this.enter, this.enterTimeout);
        }
      }

      if (leave) {
        if (!inject[this.leaveKey]) {
          this.init(this.leaveKey, this.leave, this.leaveTimeout);
        }
      }
    }
  }]);

  function Animate(props) {
    var _this;

    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Animate);

    _this = Object(reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Animate).call(this, props));

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      receive: false
    });

    _this.update(props);

    return _this;
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(Animate, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var receive = nextState.receive;

      if (receive !== this.state.receive) {
        this.update(nextProps);
        this.updateClient(nextProps);
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateClient(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          appear = _this$props.appear,
          enter = _this$props.enter,
          leave = _this$props.leave,
          others = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["appear", "enter", "leave"]);

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_AnimateGroup__WEBPACK_IMPORTED_MODULE_11__["default"], Object(reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        timeout: {
          appear: this.appearTimeout,
          enter: this.enterTimeout,
          exit: this.leaveTimeout
        },
        delay: {
          appear: this.appearDelay,
          enter: this.enterDelay,
          exit: this.leaveDelay
        },
        classNames: {
          appear: this.appearClass,
          enter: this.enterClass,
          exit: this.leaveClass
        },
        appear: !!appear,
        enter: !!enter,
        exit: !!leave
      }, others));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      return {
        receive: !prevState.receive
      };
    }
  }]);

  return Animate;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Animate, "defaultProps", {
  component: react_atomic_molecule__WEBPACK_IMPORTED_MODULE_12__["SemanticUI"],
  appear: null,
  enter: null,
  leave: null
});

/* harmony default export */ __webpack_exports__["default"] = (Animate);
var Styles = {
  linear: {
    animationIterationCount: [1],
    animationTimingFunction: ['linear']
  }
};

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/node_modules/organism-react-animate/build/es/ui/organisms/AnimateGroup.js":
/*!****************************************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/node_modules/organism-react-animate/build/es/ui/organisms/AnimateGroup.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/slicedToArray */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/slicedToArray.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutProperties */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-atomic-molecule */ "../react-atomic-organism/packages/organism-react-popup/node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! get-object-value */ "../react-atomic-organism/packages/organism-react-popup/node_modules/get-object-value/build/es/src/index.js");
/* harmony import */ var call_func__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! call-func */ "../react-atomic-organism/packages/organism-react-popup/node_modules/call-func/build/es/src/index.js");
/* harmony import */ var _organisms_CSSTransition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../organisms/CSSTransition */ "../react-atomic-organism/packages/organism-react-popup/node_modules/organism-react-animate/build/es/ui/organisms/CSSTransition.js");
/* harmony import */ var _src_getChildMapping__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/getChildMapping */ "../react-atomic-organism/packages/organism-react-popup/node_modules/organism-react-animate/build/es/src/getChildMapping.js");









var keys = Object.keys;

var getAniProps = function getAniProps(props, enterToAppear) {
  var timeout = props.timeout,
      delay = props.delay,
      classNames = props.classNames,
      mountOnEnter = props.mountOnEnter,
      unmountOnExit = props.unmountOnExit,
      enter = props.enter,
      exit = props.exit,
      addEndListener = props.addEndListener,
      onEnter = props.onEnter,
      onEntering = props.onEntering,
      onEntered = props.onEntered,
      onExit = props.onExit,
      onExiting = props.onExiting;
  var appear = props.appear;

  if (enterToAppear && classNames && classNames.enter) {
    classNames.appear = classNames.enter;
    delay.appear = delay.enter;
    timeout.appear = timeout.enter;
    appear = true;
  }
  /* not assign onExited, because call at handleExited */


  var aniProps = {
    timeout: timeout,
    delay: delay,
    classNames: classNames,
    mountOnEnter: mountOnEnter,
    unmountOnExit: unmountOnExit,
    appear: appear,
    enter: enter,
    exit: exit,
    addEndListener: addEndListener,
    onEnter: onEnter,
    onEntering: onEntering,
    onEntered: onEntered,
    onExit: onExit,
    onExiting: onExiting,
    "in": props["in"]
  };
  return aniProps;
};

var buildCSSTransition = Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["build"])(_organisms_CSSTransition__WEBPACK_IMPORTED_MODULE_7__["default"]);

var AnimateGroup = function AnimateGroup(props) {
  var className = props.className,
      component = props.component,
      lazy = props.lazy,
      onExited = props.onExited,
      style = props.style,
      otherProps = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["className", "component", "lazy", "onExited", "style"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      _useState2 = Object(reshow_runtime_es_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      children = _useState2[0],
      setChildren = _useState2[1];

  var aniProps = getAniProps(otherProps, true);
  keys(aniProps).forEach(function (key) {
    return delete otherProps[key];
  });
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var _isClean = false;

    var _exitTimeout;

    var _enterTimeout;

    var handleExited = function handleExited(child) {
      return function (node) {
        Object(call_func__WEBPACK_IMPORTED_MODULE_6__["default"])(onExited, [node]);

        if (_isClean) {
          return;
        }

        _exitTimeout = setTimeout(function () {
          return setChildren(function (children) {
            delete children[child.key];
            return Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, children);
          });
        });
      };
    };

    var prevChildMapping = children || {};
    var nextChildMapping = Object(_src_getChildMapping__WEBPACK_IMPORTED_MODULE_8__["default"])(otherProps.children, function (child, key) {
      return buildCSSTransition(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, child.props, {}, aniProps, {
        key: Object(get_object_value__WEBPACK_IMPORTED_MODULE_5__["default"])(child, ['props', 'name'], key),
        onExited: handleExited(child)
      }), child);
    });

    var allChildMapping = Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevChildMapping, {}, nextChildMapping);

    keys(allChildMapping).forEach(function (key) {
      var child = allChildMapping[key];
      var hasPrev = key in prevChildMapping;
      var hasNext = key in nextChildMapping;
      var prevChild = prevChildMapping[key];
      var isLeaving = !Object(get_object_value__WEBPACK_IMPORTED_MODULE_5__["default"])(prevChild, ['props', 'in']);

      if (!hasNext && hasPrev) {
        // Will Exit
        if (!isLeaving) {
          allChildMapping[key] = Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["build"])(child)({
            "in": false
          });
        } else {
          delete allChildMapping[key];
        }
      }
    });

    if (!children) {
      _enterTimeout = setTimeout(function () {
        return setChildren(allChildMapping);
      }, lazy);
    } else {
      setChildren(allChildMapping);
    }

    return function () {
      clearTimeout(_exitTimeout);
      clearTimeout(_enterTimeout);
      _isClean = true;
    };
  }, [props]);
  return Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    otherProps.style = Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
      overflow: 'hidden'
    }, style);
    otherProps.className = Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["mixClass"])(className, 'animate-group-container');
    return Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["build"])(component)(otherProps, keys(children || {}).map(function (key) {
      return children[key];
    }));
  }, [children]);
};

AnimateGroup.defaultProps = {
  lazy: 150,
  component: 'div',
  unmountOnExit: true,
  "in": true
};
/* harmony default export */ __webpack_exports__["default"] = (AnimateGroup);

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/node_modules/organism-react-animate/build/es/ui/organisms/CSSTransition.js":
/*!*****************************************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/node_modules/organism-react-animate/build/es/ui/organisms/CSSTransition.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/extends */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/extends.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutProperties */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _organisms_Transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../organisms/Transition */ "../react-atomic-organism/packages/organism-react-popup/node_modules/organism-react-animate/build/es/ui/organisms/Transition.js");
/* harmony import */ var class_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! class-lib */ "../react-atomic-organism/packages/organism-react-popup/node_modules/class-lib/build/src/index.js");
/* harmony import */ var class_lib__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(class_lib__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! get-object-value */ "../react-atomic-organism/packages/organism-react-popup/node_modules/get-object-value/build/es/src/index.js");
/* harmony import */ var call_func__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! call-func */ "../react-atomic-organism/packages/organism-react-popup/node_modules/call-func/build/es/src/index.js");



var _this = undefined;







var getValue = function getValue(arr, isAppear, isExit, defaultValue) {
  var index = isExit ? 'exit' : isAppear ? 'appear' : 'enter';
  return Object(get_object_value__WEBPACK_IMPORTED_MODULE_5__["default"])(arr, [index], defaultValue);
};

var FUNCTION = 'function';

var handleStart = function handleStart(classList, handler, delay, isExit, ing, node, isAppear) {
  if (!node || !node.style) {
    return;
  }

  if (!isExit && !ing) {
    node.style.visibility = 'hidden';
  }

  var thisDelay = getValue(delay, isAppear, isExit, 0);
  setTimeout(function () {
    if (!ing) {
      node.style.visibility = 'inherit';
      var thisClass = getValue(classList, isAppear, isExit);

      if (thisClass && !ing) {
        node.className = Object(class_lib__WEBPACK_IMPORTED_MODULE_4__["mixClass"])(node.className, thisClass);
      }
    }

    Object(call_func__WEBPACK_IMPORTED_MODULE_6__["default"])(handler, [node, isAppear]);
  }, thisDelay);
};

var handleFinish = function handleFinish(classList, handler, isExit, node, isAppear) {
  if (node) {
    if (isExit) {
      node.style.visibility = 'hidden';
    } else if (node.getAttribute('data-status') === 'entered') {
      node.style.visibility = 'inherit';
    }

    var thisClass = getValue(classList, isAppear, isExit);

    if (thisClass) {
      node.className = Object(class_lib__WEBPACK_IMPORTED_MODULE_4__["removeClass"])(node.className, thisClass);
    }
  }

  Object(call_func__WEBPACK_IMPORTED_MODULE_6__["default"])(handler, [node, isAppear]);
};

var CSSTransition = function CSSTransition(_ref) {
  var classNames = _ref.classNames,
      delay = _ref.delay,
      isCompiled = _ref.isCompiled,
      isCSSTransition = _ref.isCSSTransition,
      onEnter = _ref.onEnter,
      onEntering = _ref.onEntering,
      onEntered = _ref.onEntered,
      onExit = _ref.onExit,
      onExiting = _ref.onExiting,
      onExited = _ref.onExited,
      props = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["classNames", "delay", "isCompiled", "isCSSTransition", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_Transition__WEBPACK_IMPORTED_MODULE_3__["default"], Object(reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    onEnter: handleStart.bind(_this, classNames, onEnter, delay, false, false),
    onEntering: handleStart.bind(_this, classNames, onEntering, delay, false, true),
    onEntered: handleFinish.bind(_this, classNames, onEntered, false),
    onExit: handleStart.bind(_this, classNames, onExit, delay, true, false),
    onExiting: handleStart.bind(_this, classNames, onExiting, delay, true, true),
    onExited: handleFinish.bind(_this, classNames, onExited, true)
  }));
};

CSSTransition.defaultProps = {
  isCSSTransition: true,
  isCompiled: false,
  "in": true
};
/* harmony default export */ __webpack_exports__["default"] = (CSSTransition);

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/node_modules/organism-react-animate/build/es/ui/organisms/Image.js":
/*!*********************************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/node_modules/organism-react-animate/build/es/ui/organisms/Image.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/extends */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/extends.js");
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/possibleConstructorReturn */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/possibleConstructorReturn.js");
/* harmony import */ var reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/getPrototypeOf */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/getPrototypeOf.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutProperties */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-atomic-molecule */ "../react-atomic-organism/packages/organism-react-popup/node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! get-object-value */ "../react-atomic-organism/packages/organism-react-popup/node_modules/get-object-value/build/es/src/index.js");
/* harmony import */ var _organisms_Animate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../organisms/Animate */ "../react-atomic-organism/packages/organism-react-popup/node_modules/organism-react-animate/build/es/ui/organisms/Animate.js");













var image = function image(props) {
  var animate = props.animate,
      leaveStyle = props.leaveStyle,
      others = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__["default"])(props, ["animate", "leaveStyle"]);

  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_9__["Image"], others);
};

var AnimateImage =
/*#__PURE__*/
function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AnimateImage, _PureComponent);

  function AnimateImage(props) {
    var _this;

    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AnimateImage);

    _this = Object(reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(AnimateImage).call(this, props));
    _this.state = {
      image: image(props)
    };
    return _this;
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AnimateImage, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var props = this.props;
      var animate = props.animate,
          src = props.src,
          leaveStyle = props.leaveStyle;

      if (src === prevProps.src || 'undefined' === typeof window) {
        return;
      }

      var self = this;
      var oImg = new window.Image();
      self.setState({
        style: leaveStyle
      });

      oImg.onload = function () {
        self.setState({
          image: null
        });
        var delay = 100;

        if (animate.leave) {
          delay += Object(get_object_value__WEBPACK_IMPORTED_MODULE_10__["default"])(self, ['aniEl', 'leaveTimeout'], 0);
        }

        setTimeout(function () {
          self.setState({
            image: image(props),
            style: null
          });
        }, delay);
      };

      oImg.src = src;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var animate = this.props.animate;
      var _this$state = this.state,
          image = _this$state.image,
          style = _this$state.style;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_organisms_Animate__WEBPACK_IMPORTED_MODULE_11__["default"], Object(reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, animate, {
        style: style,
        ref: function ref(o) {
          return _this2.aniEl = o;
        }
      }), image);
    }
  }]);

  return AnimateImage;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(AnimateImage, "defaultProps", {
  animate: {
    enter: 'fadeIn-300',
    leave: 'fadeOut-300'
  },
  leaveStyle: {
    opacity: '.1'
  }
});

/* harmony default export */ __webpack_exports__["default"] = (AnimateImage);

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/node_modules/organism-react-animate/build/es/ui/organisms/Replace.js":
/*!***********************************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/node_modules/organism-react-animate/build/es/ui/organisms/Replace.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/extends */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/extends.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutProperties */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/objectWithoutProperties.js");
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/possibleConstructorReturn */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/possibleConstructorReturn.js");
/* harmony import */ var reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/getPrototypeOf */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/getPrototypeOf.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _organisms_Animate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../organisms/Animate */ "../react-atomic-organism/packages/organism-react-popup/node_modules/organism-react-animate/build/es/ui/organisms/Animate.js");












var Replace =
/*#__PURE__*/
function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Replace, _PureComponent);

  function Replace() {
    var _getPrototypeOf2;

    var _this;

    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Replace);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Replace)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      no: 0,
      childs: {}
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleExited", function (node) {
      if (_this.props.onExited) {
        _this.props.onExited(node);
      }

      setTimeout(function () {
        return _this.setState({
          no: _this.next
        });
      });
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleNext", function () {
      if (_this._time) {
        clearTimeout(_this._time);
      }

      var interval = _this.props.interval;

      _this.setState(function (_ref) {
        var no = _ref.no,
            childs = _ref.childs;

        if (null !== no) {
          no++;

          if (no >= childs.length) {
            no = 0;
          }

          _this.next = no;
          return {
            no: null
          };
        } else {
          return {
            no: _this.next
          };
        }
      });

      _this._time = setTimeout(_this.handleNext, interval);
    });

    return _this;
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Replace, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._time) {
        clearTimeout(this._time);
      }

      var interval = this.props.interval;
      this._time = setTimeout(this.handleNext, interval);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this._time);
      this._time = null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          interval = _this$props.interval,
          props = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["interval"]);

      var _this$state = this.state,
          no = _this$state.no,
          childs = _this$state.childs;
      var show;

      if (no !== null && childs[no]) {
        show = childs[no];
      } else {
        show = null;
      }

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_organisms_Animate__WEBPACK_IMPORTED_MODULE_10__["default"], Object(reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        onExited: this.handleExited
      }), show);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var children = nextProps.children;

      if (children === prevState.prevChildren) {
        return null;
      }

      var childs = [];
      react__WEBPACK_IMPORTED_MODULE_9__["Children"].map(children, function (c) {
        return c;
      }).forEach(function (child, key) {
        return childs[key] = child;
      });
      return {
        childs: childs,
        prevChildren: children
      };
    }
  }]);

  return Replace;
}(react__WEBPACK_IMPORTED_MODULE_9__["PureComponent"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Replace, "defaultProps", {
  interval: 5000
});

/* harmony default export */ __webpack_exports__["default"] = (Replace);

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/node_modules/organism-react-animate/build/es/ui/organisms/Transition.js":
/*!**************************************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/node_modules/organism-react-animate/build/es/ui/organisms/Transition.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: UNMOUNTED, EXITSTART, EXITING, EXITED, ENTERSTART, ENTERING, ENTERED, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNMOUNTED", function() { return UNMOUNTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITSTART", function() { return EXITSTART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITING", function() { return EXITING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITED", function() { return EXITED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERSTART", function() { return ENTERSTART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERING", function() { return ENTERING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERED", function() { return ENTERED; });
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/slicedToArray */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/slicedToArray.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutProperties */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-atomic-molecule */ "../react-atomic-organism/packages/organism-react-popup/node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var call_func__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! call-func */ "../react-atomic-organism/packages/organism-react-popup/node_modules/call-func/build/es/src/index.js");






var keys = Object.keys;
var UNMOUNTED = 'unmounted';
var EXITSTART = 'exit-start';
var EXITING = 'exiting';
var EXITED = 'exited';
var ENTERSTART = 'enter-start';
var ENTERING = 'entering';
var ENTERED = 'entered';

var reducer = function reducer(state, action) {
  keys(action).forEach(function (key) {
    return state[key] = action[key];
  });
  return state;
};

var getTimeouts = function getTimeouts(timeout) {
  var exit, enter, appear;
  exit = enter = appear = timeout;

  if (timeout != null && typeof timeout !== 'number') {
    exit = timeout.exit;
    enter = timeout.enter; // TODO: remove fallback for next major

    appear = timeout.appear !== undefined ? timeout.appear : enter;
  }

  return {
    exit: exit,
    enter: enter,
    appear: appear
  };
};

var setNextCallback = function setNextCallback(callback) {
  var active = true;

  var nextCallback = function nextCallback(event) {
    if (active) {
      Object(call_func__WEBPACK_IMPORTED_MODULE_5__["default"])(callback, [event]);
    }

    nextCallback.reset();
  };

  nextCallback.reset = function () {
    active = false;
  };

  return nextCallback;
};

var cancelNextCallback = function cancelNextCallback(state, dispatch) {
  if (state.nextCallback !== null) {
    state.nextCallback.reset();
    dispatch({
      nextCallback: null
    });
  }
};

var Transition = function Transition(_ref) {
  var component = _ref.component,
      children = _ref.children,
      mountOnEnter = _ref.mountOnEnter,
      unmountOnExit = _ref.unmountOnExit,
      appear = _ref.appear,
      enter = _ref.enter,
      exit = _ref.exit,
      timeout = _ref.timeout,
      addEndListener = _ref.addEndListener,
      onEnter = _ref.onEnter,
      onEntering = _ref.onEntering,
      onEntered = _ref.onEntered,
      onExit = _ref.onExit,
      onExiting = _ref.onExiting,
      onExited = _ref.onExited,
      props = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["component", "children", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"]);

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(reducer, {
    "in": null,
    callbackWith: null,
    nextCallback: null,
    init: false,
    node: false
  }),
      _useReducer2 = Object(reshow_runtime_es_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(function () {
    var thisAppear = appear;
    var initialStatus;

    if (props["in"]) {
      if (thisAppear) {
        initialStatus = EXITED;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (unmountOnExit || mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    return initialStatus;
  }),
      _useState2 = Object(reshow_runtime_es_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      status = _useState2[0],
      setStatus = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (state.callbackWith === status) {
      Object(call_func__WEBPACK_IMPORTED_MODULE_5__["default"])(state.nextCallback, [status]);
    }

    var safeSetState = function safeSetState(nextStatus, callback) {
      // This shouldn't be necessary, but there are weird race conditions with
      // setState callbacks and unmounting in testing, so always make sure that
      // we can cancel any pending setState callbacks after we unmount.
      dispatch({
        callbackWith: nextStatus,
        nextCallback: callback ? setNextCallback(callback) : null
      });
      setStatus(nextStatus);
    };

    var onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
      if (state.timer) {
        clearTimeout(state.timer);
      }

      var callback = setNextCallback(function () {
        Object(call_func__WEBPACK_IMPORTED_MODULE_5__["default"])(handler);
        Object(call_func__WEBPACK_IMPORTED_MODULE_5__["default"])(addEndListener, [{
          node: node,
          state: state,
          status: status
        }]);
      });
      dispatch({
        nextCallback: callback,
        timer: setTimeout(function () {
          return Object(call_func__WEBPACK_IMPORTED_MODULE_5__["default"])(state.nextCallback, ['onTransitionEnd']);
        }, timeout || 0)
      });
    };

    var perform = function perform(_ref2) {
      var step1 = _ref2.step1,
          step1Cb = _ref2.step1Cb,
          step2 = _ref2.step2,
          step2Cb = _ref2.step2Cb,
          step3 = _ref2.step3,
          step3Cb = _ref2.step3Cb,
          goToLast = _ref2.goToLast,
          isAppear = _ref2.isAppear,
          timeout = _ref2.timeout;

      var last = function last() {
        onTransitionEnd(state.node, timeout, function () {
          safeSetState(step3, function () {
            return Object(call_func__WEBPACK_IMPORTED_MODULE_5__["default"])(step3Cb, [state.node, isAppear]);
          });
        });
      };

      if (goToLast) {
        last();
      } else {
        safeSetState(step1, function () {
          Object(call_func__WEBPACK_IMPORTED_MODULE_5__["default"])(step1Cb, [state.node, isAppear]);
          safeSetState(step2, function () {
            Object(call_func__WEBPACK_IMPORTED_MODULE_5__["default"])(step2Cb, [state.node, isAppear]);
            last();
          });
        });
      }
    };

    var updateStatus = function updateStatus(mounting, nextStatus) {
      if (nextStatus !== null) {
        // nextStatus will always be ENTERING or EXITING.
        cancelNextCallback(state, dispatch);
        var timeouts = getTimeouts(timeout);

        if (nextStatus === ENTERING) {
          perform({
            step1: ENTERSTART,
            step1Cb: onEnter,
            step2: ENTERING,
            step2Cb: onEntering,
            step3: ENTERED,
            step3Cb: onEntered,
            goToLast: mounting && !appear || !mounting && !enter,
            isAppear: mounting,
            timeout: mounting ? timeouts.appear : timeouts.enter
          });
        } else {
          perform({
            step1: EXITSTART,
            step1Cb: onExit,
            step2: EXITING,
            step2Cb: onExiting,
            step3: EXITED,
            step3Cb: onExited,
            goToLast: !exit,
            timeout: timeouts.exit
          });
        }
      } else if (unmountOnExit && status === EXITED) {
        safeSetState(UNMOUNTED);
      }
    };

    var nextStatus = null;
    var mounting = null;

    if (state["in"] !== props["in"]) {
      mounting = false;
      dispatch({
        "in": props["in"]
      });

      if (props["in"]) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        } else if (!state.init) {
          dispatch({
            init: true
          });

          if (appear) {
            nextStatus = ENTERING;
            mounting = true;
          }
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    updateStatus(mounting, nextStatus);
    return function () {
      // useEffect clean
      if (state.timer) {
        clearTimeout(state.timer);
      }
    };
  }, [props["in"], status]);
  return Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    var myChild = undefined;

    if (status !== UNMOUNTED) {
      var nextProps = Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props);

      delete nextProps["in"];
      myChild = Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["build"])(children)(nextProps);
    }

    return Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["build"])(component)({
      'data-status': status,
      refCb: function refCb(el) {
        return dispatch({
          node: el
        });
      }
    }, myChild);
  }, [props]);
};

Transition.defaultProps = {
  component: react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["SemanticUI"],
  "in": false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: false,
  onEntering: false,
  onEntered: false,
  onExit: false,
  onExiting: false,
  onExited: false
};
/* harmony default export */ __webpack_exports__["default"] = (Transition);

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/node_modules/prop-types/checkPropTypes.js":
/*!********************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/node_modules/prop-types/checkPropTypes.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../react-atomic-organism/packages/organism-react-popup/node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/node_modules/prop-types/factoryWithTypeCheckers.js":
/*!*****************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "../react-atomic-organism/packages/organism-react-popup/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "../react-atomic-organism/packages/organism-react-popup/node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../react-atomic-organism/packages/organism-react-popup/node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "../react-atomic-organism/packages/organism-react-popup/node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/node_modules/prop-types/index.js":
/*!***********************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/node_modules/prop-types/index.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "../react-atomic-organism/packages/organism-react-popup/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "../react-atomic-organism/packages/organism-react-popup/node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!******************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/node_modules/react-is/cjs/react-is.development.js":
/*!****************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/node_modules/react-is/cjs/react-is.development.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/node_modules/react-is/index.js":
/*!*********************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/node_modules/react-is/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../react-atomic-organism/packages/organism-react-popup/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-return/build/es/src/index.js":
/*!***************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-return/build/es/src/index.js ***!
  \***************************************************************************************************************/
/*! exports provided: toJS, returnOptions, default, ReturnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toJS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toJS */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-return/build/es/src/toJS.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toJS", function() { return _toJS__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _returnOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./returnOptions */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-return/build/es/src/returnOptions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "returnOptions", function() { return _returnOptions__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ui_organisms_Return__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/organisms/Return */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-return/build/es/ui/organisms/Return.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ui_organisms_Return__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReturnComponent", function() { return _ui_organisms_Return__WEBPACK_IMPORTED_MODULE_2__["ReturnComponent"]; });





/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-return/build/es/src/returnOptions.js":
/*!***********************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-return/build/es/src/returnOptions.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/toConsumableArray */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/toConsumableArray.js");
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! get-object-value */ "../react-atomic-organism/packages/organism-react-popup/node_modules/get-object-value/build/es/src/index.js");
/* harmony import */ var call_func__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! call-func */ "../react-atomic-organism/packages/organism-react-popup/node_modules/call-func/build/es/src/index.js");
/* harmony import */ var _toJS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toJS */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-return/build/es/src/toJS.js");




var keys = Object.keys;
var isArray = Array.isArray;

var getImmutable = function getImmutable(immutable) {
  return function (data) {
    return !immutable ? Object(_toJS__WEBPACK_IMPORTED_MODULE_3__["default"])(data) : data;
  };
};

var storeLocator = function storeLocator(props) {
  return props.stores;
};

var globalStoreLocator = function globalStoreLocator(props) {
  return null;
};

var getMapIn = function getMapIn(map, path) {
  return map && map.getIn ? map.getIn(path) : undefined;
};

var reset = function reset(props, more) {
  ['immutable', 'initStates', 'pathStates', 'stores', 'storeLocator', 'globalStoreLocator'].concat(Object(reshow_runtime_es_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(more || [])).forEach(function (key) {
    return delete props[key];
  });
  return props;
};

var defaultProps = {
  initStates: [],
  pathStates: {},
  immutable: false,
  storeLocator: storeLocator,
  globalStoreLocator: globalStoreLocator
};

var getStores = function getStores(props) {
  return Object(call_func__WEBPACK_IMPORTED_MODULE_2__["default"])(props.storeLocator || storeLocator, [props]);
};

var calculateState = function calculateState(prevState, props) {
  /**
   * Why not support multi stores?
   * Because multi stores need handle complex data merge.
   * If that case need create custom calculateState functoin.
   */
  var thisStore = (getStores(props) || [])[0];

  if (!thisStore) {
    throw new Error('Store not found, Please check getStores function.');
  }

  var initStates = props.initStates,
      pathStates = props.pathStates,
      globalStoreLocator = props.globalStoreLocator,
      propsImmutable = props.immutable;
  var storeState = thisStore.getState();
  var thisThemePath = storeState.get('themePath');
  var globalStore = Object(call_func__WEBPACK_IMPORTED_MODULE_2__["default"])(globalStoreLocator, [props]);

  if (thisThemePath && globalStore && globalStore.path !== thisThemePath) {
    return prevState;
  }

  var immutable = propsImmutable || storeState.get('immutable');
  var results = {};

  if (immutable) {
    results.immutable = immutable;
  }

  var toImmutable = getImmutable(immutable);

  if (isArray(initStates)) {
    initStates.forEach(function (key) {
      var data = storeState.get(key);
      results[key] = toImmutable(data);
    });
  } else if (initStates) {
    keys(initStates).forEach(function (key) {
      var data = storeState.get(key);
      var newKey = null != initStates[key] ? initStates[key] : key;
      results[newKey] = toImmutable(data);
    });
  }

  keys(pathStates || {}).forEach(function (key) {
    var thisPath = pathStates[key];
    results[key] = immutable ? getMapIn(Object(get_object_value__WEBPACK_IMPORTED_MODULE_1__["default"])(results, [thisPath[0]]), thisPath.slice(1)) : Object(get_object_value__WEBPACK_IMPORTED_MODULE_1__["default"])(results, thisPath);
  });
  return results;
};

var options = {
  defaultProps: defaultProps,
  getStores: getStores,
  calculateState: calculateState,
  reset: reset
};
/* harmony default export */ __webpack_exports__["default"] = (options);

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-return/build/es/src/toJS.js":
/*!**************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-return/build/es/src/toJS.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! get-object-value */ "../react-atomic-organism/packages/organism-react-popup/node_modules/get-object-value/build/es/src/index.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! memoize-one */ "../react-atomic-organism/packages/organism-react-popup/node_modules/memoize-one/dist/memoize-one.esm.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(function (data) {
  return Object(get_object_value__WEBPACK_IMPORTED_MODULE_0__["toJS"])(data);
}));

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-return/build/es/ui/organisms/Return.js":
/*!*************************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-return/build/es/ui/organisms/Return.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default, ReturnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnComponent", function() { return ReturnComponent; });
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutProperties */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reshow_build__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-build */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-build/build/es/src/index.js");
/* harmony import */ var reshow_flux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-flux */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-flux/build/es/index.js");
/* harmony import */ var _src_returnOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/returnOptions */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-return/build/es/src/returnOptions.js");






var ReturnComponent = function ReturnComponent(_ref) {
  var children = _ref.children,
      props = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["children"]);

  return Object(reshow_build__WEBPACK_IMPORTED_MODULE_2__["default"])(children)(_src_returnOptions__WEBPACK_IMPORTED_MODULE_4__["default"].reset(props));
};

ReturnComponent.displayName = 'Return';
/* harmony default export */ __webpack_exports__["default"] = (Object(reshow_flux__WEBPACK_IMPORTED_MODULE_3__["connectHook"])(ReturnComponent, _src_returnOptions__WEBPACK_IMPORTED_MODULE_4__["default"]));


/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/helpers/defineProperty.js":
/*!********************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/helpers/defineProperty.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty = function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _default = _defineProperty;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/helpers/extends.js":
/*!*************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/helpers/extends.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends = Object.assign || function (target) {
  for (var i = 1, j = arguments.length; i < j; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _default = _extends;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/helpers/interopRequireDefault.js":
/*!***************************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/helpers/interopRequireDefault.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _interopRequireDefault;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = exports.default;

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/helpers/objectWithoutProperties.js":
/*!*****************************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/helpers/objectWithoutProperties.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var objectWithoutProperties = function objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var _default = objectWithoutProperties;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/node_modules/ricon/X.js":
/*!**************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/node_modules/ricon/X.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/extends */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/defineProperty */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/objectWithoutProperties */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "../react-atomic-organism/packages/organism-react-popup/node_modules/react-atomic-molecule/build/es/src/index.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
    containerStyle = _objectSpread({}, containerStyle, {}, Styles.absolute);
  }

  return _react["default"].createElement(_reactAtomicMolecule.SemanticUI, (0, _extends2["default"])({
    className: classes
  }, others, {
    style: _objectSpread({
      width: size,
      height: size
    }, containerStyle, {}, style)
  }), _react["default"].createElement(_reactAtomicMolecule.SemanticUI, {
    styles: injects.line,
    style: lineStyle
  }, _react["default"].createElement(_reactAtomicMolecule.SemanticUI, {
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

/***/ })

})
//# sourceMappingURL=vendor.0eb12a0b4478fb52ffe4.hot-update.js.map