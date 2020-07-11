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
/* harmony import */ var reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/extends */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/extends.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutProperties */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/objectWithoutProperties.js");
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reshow-runtime/es/helpers/possibleConstructorReturn */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/possibleConstructorReturn.js");
/* harmony import */ var reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reshow-runtime/es/helpers/getPrototypeOf */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/getPrototypeOf.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-atomic-molecule */ "../react-atomic-organism/packages/organism-react-popup/node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var get_window_offset__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! get-window-offset */ "../react-atomic-organism/packages/organism-react-popup/node_modules/get-window-offset/build/es/src/index.js");
/* harmony import */ var to_percent_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! to-percent-js */ "../react-atomic-organism/packages/organism-react-popup/node_modules/to-percent-js/build/es/src/index.js");
/* harmony import */ var _molecules_PopupOverlay__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../molecules/PopupOverlay */ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/molecules/PopupOverlay.js");











function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result);
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
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(PopupFloatEl, _PopupOverlay);

  var _super = _createSuper(PopupFloatEl);

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(PopupFloatEl, [{
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
  }, {
    key: "renderOverlay",
    value: function renderOverlay(props) {
      var className = props.className,
          others = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["className"]);

      var classes = Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_11__["mixClass"])('popup', className);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_11__["SemanticUI"], Object(reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, others, {
        className: classes
      }));
    }
  }]);

  function PopupFloatEl(props) {
    var _this;

    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, PopupFloatEl);

    _this = _super.call(this, props); // Need exted state form parent class (PopupOverlay)

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_mount", false);

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleResize", function () {
      _this.handleMoveTo();
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleMoveTo", function () {
      console.log('ccccccccc');

      if (_this.state && !_this.state.show) {
        return;
      }

      var targetEl = _this.props.targetEl;

      if (!document.body.contains(targetEl)) {
        return;
      }

      var pos = _this.calPos();

      if (!pos) {
        return;
      }

      var diffTop = Math.abs(pos.top - Object(to_percent_js__WEBPACK_IMPORTED_MODULE_13__["toInt"])(_this.floatTop));
      var diffLeft = Math.abs(pos.left - Object(to_percent_js__WEBPACK_IMPORTED_MODULE_13__["toInt"])(_this.floatLeft));

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

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "calPos", function () {
      var _this$props = _this.props,
          targetEl = _this$props.targetEl,
          alignParams = _this$props.alignParams;
      var winInfo = Object(get_window_offset__WEBPACK_IMPORTED_MODULE_12__["default"])(targetEl);

      if (!_this.floatEl || !targetEl || !winInfo) {
        return false;
      }

      var info = Object(get_window_offset__WEBPACK_IMPORTED_MODULE_12__["alignUI"])(targetEl, _this.floatEl, alignParams, winInfo);

      if (!info) {
        console.error('can not get alignUI info');
        return;
      }

      var move = info.move,
          loc = info.loc;
      var result = {
        top: move[1],
        left: move[0],
        className: Object(get_window_offset__WEBPACK_IMPORTED_MODULE_12__["getPositionString"])(loc)
      };
      return result;
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "setFloatEl", function (el) {
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

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(PopupFloatEl, [{
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
}(_molecules_PopupOverlay__WEBPACK_IMPORTED_MODULE_14__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(PopupFloatEl, "defaultProps", {
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

/***/ })

})
//# sourceMappingURL=main.5484280b05c9921be625.hot-update.js.map