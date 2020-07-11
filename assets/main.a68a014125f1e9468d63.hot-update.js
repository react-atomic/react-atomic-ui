webpackHotUpdate("main",{

/***/ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/molecules/BasePopup.js":
/*!*************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/build/es/ui/molecules/BasePopup.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/possibleConstructorReturn */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/possibleConstructorReturn.js");
/* harmony import */ var reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/getPrototypeOf */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/getPrototypeOf.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);








function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}



var BasePopup = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(BasePopup, _PureComponent);

  var _super = _createSuper(BasePopup);

  function BasePopup() {
    var _this;

    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BasePopup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      hasError: false
    });

    return _this;
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BasePopup, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      var onError = this.props.onError;

      if (onError) {
        callfunc(onError, [error, info]);
      } else {
        console.error([error, info]);
      }

      this.setState({
        hasError: true
      });
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        hasError: true
      };
    }
  }]);

  return BasePopup;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(BasePopup, "defaultProps", {
  name: 'default'
});

/* harmony default export */ __webpack_exports__["default"] = (BasePopup);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../../../../react-atomic-ui/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/molecules/PopupFloatEl.js":
/*!****************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/build/es/ui/molecules/PopupFloatEl.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/possibleConstructorReturn */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/possibleConstructorReturn.js");
/* harmony import */ var reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/getPrototypeOf */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/getPrototypeOf.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-atomic-molecule */ "../react-atomic-organism/packages/organism-react-popup/node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var get_window_offset__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! get-window-offset */ "../react-atomic-organism/packages/organism-react-popup/node_modules/get-window-offset/build/es/src/index.js");
/* harmony import */ var to_percent_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! to-percent-js */ "../react-atomic-organism/packages/organism-react-popup/node_modules/to-percent-js/build/es/src/index.js");
/* harmony import */ var _molecules_PopupOverlay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../molecules/PopupOverlay */ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/molecules/PopupOverlay.js");









function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}







var PopupFloatEl = /*#__PURE__*/function (_PopupOverlay) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(PopupFloatEl, _PopupOverlay);

  var _super = _createSuper(PopupFloatEl);

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(PopupFloatEl, [{
    key: "getFloatEl",

    /**
     * For monitor window resize
     */

    /**
     * For extend class
     */
    value: function getFloatEl() {
      return this.floatEl;
    }
  }]);

  function PopupFloatEl(props) {
    var _this;

    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PopupFloatEl);

    _this = _super.call(this, props); // Need exted state form parent class (PopupOverlay)

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "_mount", false);

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleResize", function () {
      _this.handleMoveTo();
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleMoveTo", function () {
      var targetEl = _this.props.targetEl;

      if (!document.body.contains(targetEl)) {
        return;
      }

      var pos = _this.calPos();

      if (!pos) {
        return;
      }

      var diffTop = Math.abs(pos.top - Object(to_percent_js__WEBPACK_IMPORTED_MODULE_11__["toInt"])(_this.floatTop));
      var diffLeft = Math.abs(pos.left - Object(to_percent_js__WEBPACK_IMPORTED_MODULE_11__["toInt"])(_this.floatLeft));

      if (1 >= diffTop && 1 >= diffLeft && pos.width === _this.floatWidth && pos.height === _this.floatHeight && pos.className === _this.floatClassName) {
        return;
      }

      _this.floatTop = pos.top;
      _this.floatLeft = pos.left;
      _this.floatWidth = pos.width;
      _this.floatHeight = pos.height;
      _this.floatClassName = pos.className;

      if (_this._mount) {
        _this.setState(pos);
      }
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "calPos", function () {
      var _this$props = _this.props,
          targetEl = _this$props.targetEl,
          alignParams = _this$props.alignParams;
      var winInfo = Object(get_window_offset__WEBPACK_IMPORTED_MODULE_10__["default"])(targetEl);

      if (!_this.floatEl || !targetEl || !winInfo) {
        return false;
      }

      var info = Object(get_window_offset__WEBPACK_IMPORTED_MODULE_10__["alignUI"])(targetEl, _this.floatEl, alignParams, winInfo);

      if (!info) {
        console.error('can not get alignUI info');
        return;
      }

      var move = info.move,
          loc = info.loc;
      var result = {
        top: move[1],
        left: move[0],
        className: Object(get_window_offset__WEBPACK_IMPORTED_MODULE_10__["getPositionString"])(loc)
      };
      return result;
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "setFloatEl", function (el) {
      if (el) {
        _this.floatEl = el;
      }

      setTimeout(function () {
        return _this.handleMoveTo();
      });
    });

    _this.state = Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.state, {
      refCb: _this.setFloatEl
    });
    return _this;
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(PopupFloatEl, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._mount = true;
      window.addEventListener('resize', this.handleResize);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      this.handleMoveTo();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._mount = false;
      window.removeEventListener('resize', this.handleResize);
    }
  }]);

  return PopupFloatEl;
}(_molecules_PopupOverlay__WEBPACK_IMPORTED_MODULE_12__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(PopupFloatEl, "defaultProps", {
  style: {
    position: 'absolute',
    right: 'auto'
  },
  name: 'float',
  className: 'popup'
});

/* harmony default export */ __webpack_exports__["default"] = (PopupFloatEl);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../../../../react-atomic-ui/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/molecules/PopupModal.js":
/*!**************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/build/es/ui/molecules/PopupModal.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/extends */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/extends.js");
/* harmony import */ var reshow_runtime_es_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/typeof */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/typeof.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutProperties */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/objectWithoutProperties.js");
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reshow-runtime/es/helpers/possibleConstructorReturn */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/possibleConstructorReturn.js");
/* harmony import */ var reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reshow-runtime/es/helpers/getPrototypeOf */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/getPrototypeOf.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-atomic-molecule */ "../react-atomic-organism/packages/organism-react-popup/node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var organism_react_animate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! organism-react-animate */ "../react-atomic-organism/packages/organism-react-popup/node_modules/organism-react-animate/build/es/src/index.js");
/* harmony import */ var get_scroll_info__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! get-scroll-info */ "../react-atomic-organism/packages/organism-react-popup/node_modules/get-scroll-info/build/es/src/index.js");
/* harmony import */ var getoffset__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! getoffset */ "../react-atomic-organism/packages/organism-react-popup/node_modules/getoffset/build/es/src/index.js");
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! get-object-value */ "../react-atomic-organism/packages/organism-react-popup/node_modules/get-object-value/build/es/src/index.js");
/* harmony import */ var array_merge__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! array.merge */ "../react-atomic-organism/packages/organism-react-popup/node_modules/array.merge/build/es/src/index.js");
/* harmony import */ var class_lib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! class-lib */ "../react-atomic-organism/packages/organism-react-popup/node_modules/class-lib/build/src/index.js");
/* harmony import */ var class_lib__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(class_lib__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var call_func__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! call-func */ "../react-atomic-organism/packages/organism-react-popup/node_modules/call-func/build/es/src/index.js");
/* harmony import */ var win_doc__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! win-doc */ "../react-atomic-organism/packages/organism-react-popup/node_modules/win-doc/build/es/src/index.js");
/* harmony import */ var reshow_constant__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! reshow-constant */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-constant/build/es/index.js");
/* harmony import */ var _molecules_PopupOverlay__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../molecules/PopupOverlay */ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/molecules/PopupOverlay.js");
/* harmony import */ var _src_popupDispatcher__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../src/popupDispatcher */ "../react-atomic-organism/packages/organism-react-popup/build/es/src/popupDispatcher.js");












function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}














/**
 * 1. if you need trace show: true
 * it extend from PopupOverlay
 *
 * 2. if you don't auto append Content component
 * you could pass center or content to equla false
 */

var PopupModal = /*#__PURE__*/function (_PopupOverlay) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(PopupModal, _PopupOverlay);

  var _super = _createSuper(PopupModal);

  function PopupModal() {
    var _this;

    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, PopupModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_timer", null);

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_mount", false);

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleClick", function () {
      return _this.close();
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleModalRefCb", function (el) {
      return _this.el = el;
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleModalClick", function (cb) {
      return function (e) {
        e.stopPropagation();
        Object(call_func__WEBPACK_IMPORTED_MODULE_19__["default"])(cb, [e]);
      };
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "reCalculate", function () {
      _this._timer = setTimeout(function () {
        if (_this.el) {
          var domInfo = Object(getoffset__WEBPACK_IMPORTED_MODULE_15__["default"])(_this.el);

          if (domInfo) {
            var domHalfHeight = domInfo.h / 2;
            var marginTop = Math.floor(1 - domHalfHeight);

            var _getScrollInfo = Object(get_scroll_info__WEBPACK_IMPORTED_MODULE_14__["default"])(),
                scrollNodeHeight = _getScrollInfo.scrollNodeHeight;

            var maskStyle = {};

            if (domInfo.h * 3 > scrollNodeHeight) {
              marginTop = 0;
            }

            if (domInfo.h + 30 > scrollNodeHeight) {
              maskStyle = Styles.flexAlignTop;
            }

            var _this$state = _this.state,
                orgModalStyle = _this$state.modalStyle,
                orgMaskStyle = _this$state.maskStyle;

            if (_this._mount && (Object(get_object_value__WEBPACK_IMPORTED_MODULE_16__["default"])(orgModalStyle, ['marginTop']) !== marginTop || Object(get_object_value__WEBPACK_IMPORTED_MODULE_16__["default"])(orgMaskStyle, ['justifyContent']) !== maskStyle.justifyContent)) {
              _this.setState(function (_ref) {
                var modalStyle = _ref.modalStyle;
                modalStyle = Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, modalStyle, {
                  marginTop: marginTop
                });
                return {
                  maskStyle: maskStyle,
                  modalStyle: modalStyle
                };
              });
            }
          }
        }
      });
    });

    return _this;
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(PopupModal, [{
    key: "close",
    value: function close() {
      Object(_src_popupDispatcher__WEBPACK_IMPORTED_MODULE_23__["popupDispatch"])({
        type: 'dom/closeOne',
        params: {
          popup: this
        }
      });
    }
  }, {
    key: "lockScreen",
    value: function lockScreen() {
      var _this$props = this.props,
          modal = _this$props.modal,
          toPool = _this$props.toPool;
      var oDoc = Object(win_doc__WEBPACK_IMPORTED_MODULE_20__["doc"])();
      Object(win_doc__WEBPACK_IMPORTED_MODULE_20__["win"])().addEventListener('resize', this.reCalculate);
      var body = oDoc.body;
      var addBodyClass = Object(class_lib__WEBPACK_IMPORTED_MODULE_18__["mixClass"])(body.className, {
        scrolling: this.props.maskScroll
      }, 'dimmable', 'dimmed');

      if (!toPool) {
        body.className = addBodyClass;
      }
    }
  }, {
    key: "resetBodyClassName",
    value: function resetBodyClassName() {
      var toPool = this.props.toPool;
      var body = Object(win_doc__WEBPACK_IMPORTED_MODULE_20__["doc"])().body;

      if (!toPool && body) {
        var bodyClass = body.className;
        bodyClass = Object(class_lib__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(bodyClass, 'dimmable');
        bodyClass = Object(class_lib__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(bodyClass, 'scrolling');
        bodyClass = Object(class_lib__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(bodyClass, 'dimmed');
        body.className = bodyClass;
      }
    }
  }, {
    key: "detach",
    value: function detach() {
      /**
       * closeCallback will deprecate
       */
      if (Object(class_lib__WEBPACK_IMPORTED_MODULE_18__["hasClass"])(Object(get_object_value__WEBPACK_IMPORTED_MODULE_16__["default"])(Object(win_doc__WEBPACK_IMPORTED_MODULE_20__["doc"])(), ['body', 'className']), 'dimmed')) {
        var _this$props2 = this.props,
            closeCallback = _this$props2.closeCallback,
            onClose = _this$props2.onClose; //settimeout is for fixed cant setstate during render error

        setTimeout(function () {
          return Object(call_func__WEBPACK_IMPORTED_MODULE_19__["default"])(onClose || closeCallback);
        });
      } // do detach (need put after onClose else will make modal can't appear again)


      clearTimeout(this._timer);
      this.resetBodyClassName();
      Object(win_doc__WEBPACK_IMPORTED_MODULE_20__["win"])().removeEventListener('resize', this.reCalculate);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this._mount = true;
      setTimeout(function () {
        return _this2.reCalculate();
      }, 300);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var _this3 = this;

      setTimeout(function () {
        return _this3.reCalculate();
      }, 300);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._mount = false;
      this.detach();
    }
  }, {
    key: "shouldShow",
    value: function shouldShow(show) {
      var _this$state2 = this.state,
          stateModalStyle = _this$state2.modalStyle,
          stateMaskStyle = _this$state2.maskStyle;

      var _this$props3 = this.props,
          disableClose = _this$props3.disableClose,
          scrolling = _this$props3.scrolling,
          appear = _this$props3.appear,
          enter = _this$props3.enter,
          leave = _this$props3.leave,
          style = _this$props3.style,
          styles = _this$props3.styles,
          contentStyle = _this$props3.contentStyle,
          modal = _this$props3.modal,
          modalClassName = _this$props3.modalClassName,
          modalStyle = _this$props3.modalStyle,
          mask = _this$props3.mask,
          maskScroll = _this$props3.maskScroll,
          toPool = _this$props3.toPool,
          closeEl = _this$props3.closeEl,
          closeCallback = _this$props3.closeCallback,
          onClose = _this$props3.onClose,
          className = _this$props3.className,
          contentClassName = _this$props3.contentClassName,
          name = _this$props3.name,
          id = _this$props3.id,
          others = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$props3, ["disableClose", "scrolling", "appear", "enter", "leave", "style", "styles", "contentStyle", "modal", "modalClassName", "modalStyle", "mask", "maskScroll", "toPool", "closeEl", "closeCallback", "onClose", "className", "contentClassName", "name", "id"]);

      var containerClick = null;
      var thisCloseEl;
      var content = '';

      if (show) {
        this.lockScreen();

        if (!closeEl) {
          if (!disableClose) {
            containerClick = this.handleClick;
          }
        } else {
          thisCloseEl = Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_12__["build"])(closeEl)({
            onClick: this.handleClick,
            key: 'close',
            style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({
              zIndex: 1001,
              position: 'fixed'
            }, closeEl.props.style)
          });
        }

        var thisModal = modal;

        if (reshow_constant__WEBPACK_IMPORTED_MODULE_21__["UNDEFINED"] === Object(reshow_runtime_es_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(thisModal)) {
          thisModal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_12__["Dimmer"], Object(reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, others, {
            isModal: "true",
            className: Object(class_lib__WEBPACK_IMPORTED_MODULE_18__["mixClass"])({
              scrolling: scrolling
            }, modalClassName),
            show: show,
            contentStyle: contentStyle
          }));
        }

        if (Object(react__WEBPACK_IMPORTED_MODULE_11__["isValidElement"])(thisModal)) {
          var orgModalOnClick = Object(get_object_value__WEBPACK_IMPORTED_MODULE_16__["default"])(thisModal, ['props', 'onClick']);
          thisModal = Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_12__["build"])(thisModal)({
            refCb: this.handleModalRefCb,
            onClick: this.handleModalClick(orgModalOnClick),
            styles: Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_12__["reactStyle"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, Styles.modal, {}, modalStyle, {}, stateModalStyle), false, false)
          });
        }

        if (mask) {
          var thisStyles = Object(array_merge__WEBPACK_IMPORTED_MODULE_17__["default"])(Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_12__["reactStyle"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, Styles.background, {}, style, {}, stateMaskStyle), false, false), styles);
          content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_12__["Dimmer"], {
            className: Object(class_lib__WEBPACK_IMPORTED_MODULE_18__["mixClass"])('page modals', contentClassName),
            show: show,
            center: false,
            styles: thisStyles,
            styleOrder: 1,
            onClick: containerClick,
            key: "modals"
          }, thisModal);
        } else {
          content = thisModal;
        }
      } else {
        this.detach();
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_12__["SemanticUI"], {
        ui: false,
        className: className,
        name: name,
        id: id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(organism_react_animate__WEBPACK_IMPORTED_MODULE_13__["default"], {
        appear: appear,
        enter: enter,
        leave: leave
      }, content), thisCloseEl);
    }
  }]);

  return PopupModal;
}(_molecules_PopupOverlay__WEBPACK_IMPORTED_MODULE_22__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(PopupModal, "defaultProps", {
  mask: true,
  maskScroll: false,
  scrolling: false,
  name: 'modal',
  disableClose: false
});

/* harmony default export */ __webpack_exports__["default"] = (PopupModal);
var Styles = {
  flexAlignTop: {
    justifyContent: 'flex-start',
    WebkitBoxPack: 'start',
    MsFlexPack: 'start'
  },
  background: {
    overflow: 'auto',
    boxSizing: 'border-box'
  },
  modal: {
    boxSizing: 'border-box',
    right: 'auto',
    bottom: 'auto',
    transition: ['all 500ms ease']
  }
};

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../../../../react-atomic-ui/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/molecules/PopupOverlay.js":
/*!****************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/build/es/ui/molecules/PopupOverlay.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/extends */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/extends.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutProperties */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/objectWithoutProperties.js");
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/possibleConstructorReturn */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/possibleConstructorReturn.js");
/* harmony import */ var reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reshow-runtime/es/helpers/getPrototypeOf */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/getPrototypeOf.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reshow_return__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reshow-return */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-return/build/es/src/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-atomic-molecule */ "../react-atomic-organism/packages/organism-react-popup/node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! get-object-value */ "../react-atomic-organism/packages/organism-react-popup/node_modules/get-object-value/build/es/src/index.js");
/* harmony import */ var get_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! get-style */ "../react-atomic-organism/packages/organism-react-popup/node_modules/get-style/build/src/index.js");
/* harmony import */ var get_style__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(get_style__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _molecules_BasePopup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../molecules/BasePopup */ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/molecules/BasePopup.js");
/* harmony import */ var _src_stores_popupStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../src/stores/popupStore */ "../react-atomic-organism/packages/organism-react-popup/build/es/src/stores/popupStore.js");









function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}









var PopupOverlay = /*#__PURE__*/function (_BasePopup) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(PopupOverlay, _BasePopup);

  var _super = _createSuper(PopupOverlay);

  function PopupOverlay() {
    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, PopupOverlay);

    return _super.apply(this, arguments);
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(PopupOverlay, [{
    key: "resetStyle",
    value: function resetStyle(key, thisStyle) {
      var _this = this;

      var value = Object(get_object_value__WEBPACK_IMPORTED_MODULE_11__["default"])(this.state, [key], function () {
        return Object(get_object_value__WEBPACK_IMPORTED_MODULE_11__["default"])(_this.props, [key]);
      });

      if ('undefined' !== typeof value) {
        thisStyle[key] = value + 'px';
      }
    }
  }, {
    key: "renderOverlay",
    value: function renderOverlay(props) {
      var className = props.className,
          others = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["className"]);

      var classes = Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_10__["mixClass"])('popup', className);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_10__["SemanticUI"], Object(reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, others, {
        className: classes
      }));
    }
  }, {
    key: "shouldShow",
    value: function shouldShow(show) {
      var _this2 = this;

      if (!show) {
        return null;
      }

      var _this$props = this.props,
          targetEl = _this$props.targetEl,
          toPool = _this$props.toPool,
          alignParams = _this$props.alignParams,
          isFollowTransform = _this$props.isFollowTransform,
          className = _this$props.className,
          style = _this$props.style,
          group = _this$props.group,
          others = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$props, ["targetEl", "toPool", "alignParams", "isFollowTransform", "className", "style", "group"]);
      /* <!-- Handle Style */


      var thisStyle = Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style);

      this.resetStyle('top', thisStyle);
      this.resetStyle('left', thisStyle);
      this.resetStyle('width', thisStyle);
      this.resetStyle('height', thisStyle);

      if (targetEl && isFollowTransform) {
        thisStyle.transform = get_style__WEBPACK_IMPORTED_MODULE_12___default()(targetEl, 'transform');
      }

      others.style = thisStyle;
      /*  Handle Style --> */

      var refCb = Object(get_object_value__WEBPACK_IMPORTED_MODULE_11__["default"])(this.state, ['refCb'], function () {
        return Object(get_object_value__WEBPACK_IMPORTED_MODULE_11__["default"])(_this2.props, ['refCb']);
      });

      if (refCb) {
        others.refCb = refCb;
      }

      others.className = Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_10__["mixClass"])(className, Object(get_object_value__WEBPACK_IMPORTED_MODULE_11__["default"])(this, ['state', 'className']), 'visible');
      return this.renderOverlay(others);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.state.hasError) {
        return null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reshow_return__WEBPACK_IMPORTED_MODULE_9__["default"], {
        stores: [_src_stores_popupStore__WEBPACK_IMPORTED_MODULE_14__["default"]],
        initStates: ['shows']
      }, function (_ref) {
        var shows = _ref.shows;
        var show = Object(get_object_value__WEBPACK_IMPORTED_MODULE_11__["default"])(shows, [_this3.props.name]);
        return _this3.shouldShow(show);
      });
    }
  }]);

  return PopupOverlay;
}(_molecules_BasePopup__WEBPACK_IMPORTED_MODULE_13__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (PopupOverlay);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../../../../react-atomic-ui/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=main.a68a014125f1e9468d63.hot-update.js.map