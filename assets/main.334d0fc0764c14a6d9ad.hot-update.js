webpackHotUpdate("main",{

/***/ "../react-atomic-organism/packages/organism-react-popup/build/es/src/stores/popupStore.js":
/*!************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/build/es/src/stores/popupStore.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/typeof */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/typeof.js");
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/possibleConstructorReturn */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/possibleConstructorReturn.js");
/* harmony import */ var reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/getPrototypeOf */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/getPrototypeOf.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! immutable */ "../react-atomic-organism/packages/organism-react-popup/node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reshow_flux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reshow-flux */ "../react-atomic-organism/packages/organism-react-popup/node_modules/reshow-flux/build/es/index.js");
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! get-object-value */ "../react-atomic-organism/packages/organism-react-popup/node_modules/get-object-value/build/es/src/index.js");
/* harmony import */ var set_object_value__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! set-object-value */ "../react-atomic-organism/packages/organism-react-popup/node_modules/set-object-value/build/es/src/index.js");
/* harmony import */ var _popupDispatcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../popupDispatcher */ "../react-atomic-organism/packages/organism-react-popup/build/es/src/popupDispatcher.js");









function _createSuper(Derived) {
  return function () {
    var Super = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived),
        result;

    if (_isNativeReflectConstruct()) {
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






var groups = {};
var SHOW_KEY = 'shows';
var NODE_KEY = 'nodes';
var keys = Object.keys;
var isArray = Array.isArray;

var PopupStore = /*#__PURE__*/function (_ReduceStore) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PopupStore, _ReduceStore);

  var _super = _createSuper(PopupStore);

  function PopupStore() {
    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PopupStore);

    return _super.apply(this, arguments);
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PopupStore, [{
    key: "getInitialState",
    value: function getInitialState() {
      return Object(immutable__WEBPACK_IMPORTED_MODULE_6__["Map"])({
        shows: Object(immutable__WEBPACK_IMPORTED_MODULE_6__["Map"])(),
        nodes: Object(immutable__WEBPACK_IMPORTED_MODULE_6__["Map"])()
      });
    }
  }, {
    key: "updateDom",
    value: function updateDom(state, action) {
      var popupNode = Object(get_object_value__WEBPACK_IMPORTED_MODULE_8__["default"])(action, ['params', 'popup']);
      var key = Object(get_object_value__WEBPACK_IMPORTED_MODULE_8__["default"])(popupNode, ['props', 'name'], 'default');

      if (key !== Object(get_object_value__WEBPACK_IMPORTED_MODULE_8__["default"])(popupNode, ['props', 'name'])) {
        console.warn({
          Warn: 'Popup Key not consistence, you use a default key. you should assign name to each specific popup element.',
          PopUpKey: Object(get_object_value__WEBPACK_IMPORTED_MODULE_8__["default"])(popupNode, ['props', 'name']),
          ActualKey: key
        });
      }

      var shows = state.get(SHOW_KEY).set(key, true);
      var nodes = state.get(NODE_KEY).set(key, popupNode);
      var nodeGroups = Object(get_object_value__WEBPACK_IMPORTED_MODULE_8__["default"])(popupNode, ['props', 'group']);

      if (nodeGroups) {
        if (!isArray(nodeGroups)) {
          nodeGroups = [nodeGroups];
        }

        nodeGroups.forEach(function (nodegroup) {
          return Object(set_object_value__WEBPACK_IMPORTED_MODULE_9__["default"])(groups, [nodegroup, key], true);
        });
      }

      return state.set(SHOW_KEY, shows).set(NODE_KEY, nodes);
    }
  }, {
    key: "getKey",
    value: function getKey(action) {
      var popup = Object(get_object_value__WEBPACK_IMPORTED_MODULE_8__["default"])(action, ['params', 'popup'], 'default');
      var key;

      if ('object' === Object(reshow_runtime_es_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(popup)) {
        key = Object(get_object_value__WEBPACK_IMPORTED_MODULE_8__["default"])(popup, ['props', 'name'], popup);
      } else {
        key = popup;
      }

      return key;
    }
  }, {
    key: "closeAll",
    value: function closeAll(state, action) {
      return state.set(SHOW_KEY, Object(immutable__WEBPACK_IMPORTED_MODULE_6__["Map"])());
    }
  }, {
    key: "closeOne",
    value: function closeOne(state, action) {
      var key = this.getKey(action);
      var shows = state.get(SHOW_KEY)["delete"](key);
      return state.set(SHOW_KEY, shows);
    }
  }, {
    key: "closeGroup",
    value: function closeGroup(state, action) {
      var groupKey = Object(get_object_value__WEBPACK_IMPORTED_MODULE_8__["default"])(action, ['params', 'group']);
      var group = Object(get_object_value__WEBPACK_IMPORTED_MODULE_8__["default"])(groups, [groupKey]);
      var shows = state.get(SHOW_KEY);

      if (group) {
        keys(group).forEach(function (key) {
          shows = shows["delete"](key);
        });
      }

      return state.set(SHOW_KEY, shows);
    }
  }, {
    key: "cleanAll",
    value: function cleanAll(state, action) {
      return state.set(SHOW_KEY, Object(immutable__WEBPACK_IMPORTED_MODULE_6__["Map"])()).set(NODE_KEY, Object(immutable__WEBPACK_IMPORTED_MODULE_6__["Map"])());
    }
  }, {
    key: "cleanOne",
    value: function cleanOne(state, action) {
      var key = this.getKey(action);
      var nodes = state.get(NODE_KEY)["delete"](key);
      var shows = state.get(SHOW_KEY)["delete"](key);
      return state.set(NODE_KEY, nodes).set(SHOW_KEY, shows);
    }
  }, {
    key: "cleanGroup",
    value: function cleanGroup(state, action) {
      var groupKey = Object(get_object_value__WEBPACK_IMPORTED_MODULE_8__["default"])(action, ['params', 'group']);
      var group = Object(get_object_value__WEBPACK_IMPORTED_MODULE_8__["default"])(groups, [groupKey]);

      if (group) {
        var nodes = state.get(NODE_KEY);
        var shows = state.get(SHOW_KEY);
        keys(group).forEach(function (key) {
          nodes = nodes["delete"](key);
          shows = shows["delete"](key);
        });
        return state.set(NODE_KEY, nodes).set(SHOW_KEY, shows);
      } else {
        return state;
      }
    }
  }, {
    key: "reduce",
    value: function reduce(state, action) {
      switch (action.type) {
        case 'dom/update':
          return this.updateDom(state, action);

        case 'dom/closeAll':
          return this.closeAll(state, action);

        case 'dom/cleanAll':
          return this.cleanAll(state, action);

        case 'dom/closeOne':
          return this.closeOne(state, action);

        case 'dom/cleanOne':
          return this.cleanOne(state, action);

        case 'dom/closeGroup':
          return this.closeGroup(state, action);

        case 'dom/cleanGroup':
          return this.cleanGroup(state, action);

        case 'config/set':
          return state.merge(action.params);

        default:
          return state;
      }
    }
  }]);

  return PopupStore;
}(reshow_flux__WEBPACK_IMPORTED_MODULE_7__["ReduceStore"]); // Export a singleton instance of the store, could do this some other way if
// you want to avoid singletons.


var instance = new PopupStore(_popupDispatcher__WEBPACK_IMPORTED_MODULE_10__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

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
  return function () {
    var Super = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived),
        result;

    if (_isNativeReflectConstruct()) {
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
  return function () {
    var Super = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived),
        result;

    if (_isNativeReflectConstruct()) {
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
//# sourceMappingURL=main.334d0fc0764c14a6d9ad.hot-update.js.map