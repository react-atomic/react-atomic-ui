webpackHotUpdate("vendor",{

/***/ "./node_modules/organism-react-spotlight/build/es/ui/molecules/LightBox.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/organism-react-spotlight/build/es/ui/molecules/LightBox.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/extends */ "./node_modules/reshow-runtime/es/helpers/extends.js");
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutProperties */ "./node_modules/reshow-runtime/es/helpers/objectWithoutProperties.js");
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "./node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "./node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reshow-runtime/es/helpers/possibleConstructorReturn */ "./node_modules/reshow-runtime/es/helpers/possibleConstructorReturn.js");
/* harmony import */ var reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reshow-runtime/es/helpers/getPrototypeOf */ "./node_modules/reshow-runtime/es/helpers/getPrototypeOf.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "./node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var organism_react_popup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! organism-react-popup */ "../react-atomic-organism/packages/organism-react-popup/build/es/src/index.js");
/* harmony import */ var getoffset__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! getoffset */ "./node_modules/getoffset/build/es/src/index.js");
/* harmony import */ var get_window_offset__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! get-window-offset */ "./node_modules/get-window-offset/build/es/src/index.js");
/* harmony import */ var array_merge__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! array.merge */ "./node_modules/array.merge/build/es/src/index.js");











function _createSuper(Derived) { return function () { var Super = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var LightBox = /*#__PURE__*/function (_PopupFloatEl) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(LightBox, _PopupFloatEl);

  var _super = _createSuper(LightBox);

  function LightBox() {
    var _this;

    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, LightBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "calPos", function () {
      var _this$props = _this.props,
          targetEl = _this$props.targetEl,
          padding = _this$props.padding;
      var pos = Object(getoffset__WEBPACK_IMPORTED_MODULE_13__["default"])(targetEl, Object(get_window_offset__WEBPACK_IMPORTED_MODULE_14__["isFixed"])(targetEl));
      console.log({
        pos: pos
      });
      var width = pos.right - pos.left + padding * 2;
      var height = pos.bottom - pos.top + padding * 2;
      var top = pos.top - padding;
      var left = pos.left - padding;
      return {
        top: top,
        left: left,
        width: width,
        height: height
      };
    });

    return _this;
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(LightBox, [{
    key: "renderOverlay",
    value: function renderOverlay(props) {
      var wh = props.wh,
          styles = props.styles,
          style = props.style,
          className = props.className,
          others = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["wh", "styles", "style", "className"]);

      var thisStyles = Object(array_merge__WEBPACK_IMPORTED_MODULE_15__["default"])(Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_11__["reactStyle"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Styles.container, {}, style), null, false), styles);
      var classes = Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_11__["mixClass"])(props.name, className, 'react-spotlight-box');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_11__["SemanticUI"], Object(reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, others, {
        className: classes,
        styles: thisStyles
      }));
    }
  }]);

  return LightBox;
}(organism_react_popup__WEBPACK_IMPORTED_MODULE_12__["PopupFloatEl"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(LightBox, "defaultProps", {
  padding: 5
});

LightBox.displayName = 'LightBox';
var Styles = {
  container: {
    borderRadius: 4,
    position: 'absolute',
    boxShadow: ['0 2px 15px rgba(0,0,0,.4)'],
    zIndex: 99998,
    backgroundColor: 'rgba(255,255,255,.9)'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (LightBox);

/***/ }),

/***/ "./node_modules/organism-react-spotlight/build/es/ui/organisms/Spotlight.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/organism-react-spotlight/build/es/ui/organisms/Spotlight.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/extends */ "./node_modules/reshow-runtime/es/helpers/extends.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutProperties */ "./node_modules/reshow-runtime/es/helpers/objectWithoutProperties.js");
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "./node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "./node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/possibleConstructorReturn */ "./node_modules/reshow-runtime/es/helpers/possibleConstructorReturn.js");
/* harmony import */ var reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reshow-runtime/es/helpers/getPrototypeOf */ "./node_modules/reshow-runtime/es/helpers/getPrototypeOf.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "./node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var getoffset__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! getoffset */ "./node_modules/getoffset/build/es/src/index.js");
/* harmony import */ var organism_react_popup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! organism-react-popup */ "../react-atomic-organism/packages/organism-react-popup/build/es/src/index.js");
/* harmony import */ var get_window_offset__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! get-window-offset */ "./node_modules/get-window-offset/build/es/src/index.js");
/* harmony import */ var _molecules_LightBox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../molecules/LightBox */ "./node_modules/organism-react-spotlight/build/es/ui/molecules/LightBox.js");
/* harmony import */ var _src_cleanZIndex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../src/cleanZIndex */ "./node_modules/organism-react-spotlight/build/es/src/cleanZIndex.js");
/* harmony import */ var _src_cleanClass__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../src/cleanClass */ "./node_modules/organism-react-spotlight/build/es/src/cleanClass.js");
/* harmony import */ var _src_showEl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../src/showEl */ "./node_modules/organism-react-spotlight/build/es/src/showEl.js");









function _createSuper(Derived) { return function () { var Super = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










var injects;
var nodeId = 0;

var SpotlightEl = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(SpotlightEl, _PureComponent);

  var _super = _createSuper(SpotlightEl);

  function SpotlightEl() {
    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, SpotlightEl);

    return _super.apply(this, arguments);
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(SpotlightEl, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      Object(_src_cleanClass__WEBPACK_IMPORTED_MODULE_15__["default"])('react-spotlight-show-el');
      Object(_src_cleanClass__WEBPACK_IMPORTED_MODULE_15__["default"])('react-spotlight-relative');
      Object(_src_cleanClass__WEBPACK_IMPORTED_MODULE_15__["default"])('react-spotlight-clean-zindex');
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          targetEl = _this$props.targetEl,
          props = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$props, ["name", "targetEl"]);

      Object(_src_cleanZIndex__WEBPACK_IMPORTED_MODULE_14__["default"])(targetEl);
      var thisStyles = [injects.lightBox];
      var isFixedNode = Object(get_window_offset__WEBPACK_IMPORTED_MODULE_12__["isFixed"])(targetEl);
      Object(_src_showEl__WEBPACK_IMPORTED_MODULE_16__["default"])(targetEl);

      if (isFixedNode) {
        thisStyles.push(injects.fixed);
      }

      var nodePos = Object(getoffset__WEBPACK_IMPORTED_MODULE_10__["default"])(targetEl, isFixedNode);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_9__["SemanticUI"], {
        key: name,
        name: name
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_11__["PopupModal"], Object(reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
        name: name,
        modal: null,
        styles: injects.modal
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_molecules_LightBox__WEBPACK_IMPORTED_MODULE_13__["default"], {
        wh: [nodePos.w, nodePos.h],
        targetEl: targetEl,
        name: name,
        styles: thisStyles
      }));
    }
  }]);

  return SpotlightEl;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

var Spotlight = /*#__PURE__*/function (_PureComponent2) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Spotlight, _PureComponent2);

  var _super2 = _createSuper(Spotlight);

  function Spotlight(props) {
    var _this;

    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Spotlight);

    _this = _super2.call(this, props);
    injects = Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_9__["lazyInject"])(injects, InjectStyles);
    return _this;
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Spotlight, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          targetEl = _this$props2.targetEl,
          props = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$props2, ["targetEl"]);

      if (!targetEl) {
        console.warn(['Need assign targetEl', targetEl]);
        return null;
      }

      if (!targetEl.id) {
        targetEl.id = 'spotlight-el-' + nodeId;
        nodeId++;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_11__["DisplayPopupEl"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(SpotlightEl, Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        targetEl: targetEl,
        name: targetEl.id
      })));
    }
  }]);

  return Spotlight;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Spotlight);
var InjectStyles = {
  lightBox: [{
    transitionDuration: '500ms',
    transitionProperty: 'all'
  }],
  modal: [{
    background: ['-webkit-radial-gradient(center,ellipse cover,rgba(0,0,0,0.4) 0,rgba(0,0,0,0.9) 100%)', 'radial-gradient(center,ellipse cover,rgba(0,0,0,0.4) 0,rgba(0,0,0,0.9) 100%)'],
    height: '200%'
  }],
  fixed: [{
    position: 'fixed !important'
  }, '.react-spotlight-fixed', 'react-spotlight-fixed'],
  showEl: [{
    zIndex: '99999 !important'
  }, '.react-spotlight-show-el', 'react-spotlight-show-el'],
  relative: [{
    position: 'relative !important'
  }, '.react-spotlight-relative', 'react-spotlight-relative']
};

/***/ })

})
//# sourceMappingURL=vendor.841b4454dd2d536de57e.hot-update.js.map