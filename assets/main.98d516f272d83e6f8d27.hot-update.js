webpackHotUpdate("main",{

/***/ "../react-atomic-organism/packages/organism-react-carousel/build/es/ui/organisms/Carousel.js":
/*!***************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-carousel/build/es/ui/organisms/Carousel.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/extends */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/extends.js");
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutProperties */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/objectWithoutProperties.js");
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reshow-runtime/es/helpers/possibleConstructorReturn */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/possibleConstructorReturn.js");
/* harmony import */ var reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reshow-runtime/es/helpers/getPrototypeOf */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/getPrototypeOf.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-atomic-molecule */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! get-object-value */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/get-object-value/build/es/src/index.js");











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





var Carousel = /*#__PURE__*/function (_Component) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Carousel, _Component);

  var _super = _createSuper(Carousel);

  function Carousel() {
    var _this;

    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Carousel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleEnter", function () {
      var hoverStyle = Object(get_object_value__WEBPACK_IMPORTED_MODULE_12__["default"])(_this.props, ['hoverStyle']);

      if (hoverStyle) {
        _this.setState({
          hoverStyle: hoverStyle
        });
      }
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleLeave", function () {
      _this.setState({
        hoverStyle: {}
      });
    });

    return _this;
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Carousel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          style = _this$props.style,
          hoverStyle = _this$props.hoverStyle,
          thumbContainer = _this$props.thumbContainer,
          others = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$props, ["style", "hoverStyle", "thumbContainer"]);

      var thisHoverStyle = Object(get_object_value__WEBPACK_IMPORTED_MODULE_12__["default"])(this.state, ['hoverStyle'], {});
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_11__["SemanticUI"], Object(reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, others, {
        style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Styles.container, {}, style, {}, thisHoverStyle),
        onMouseEnter: this.handleEnter,
        onMouseLeave: this.handleLeave
      }));
    }
  }]);

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Carousel);
var Styles = {
  container: {
    display: 'inline-block',
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'hidden',
    width: '100%',
    textAlign: 'center'
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

/***/ "../react-atomic-organism/packages/organism-react-carousel/build/es/ui/organisms/CarouselAnimation.js":
/*!************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-carousel/build/es/ui/organisms/CarouselAnimation.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/extends */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/extends.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutProperties */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/objectWithoutProperties.js");
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/possibleConstructorReturn */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/possibleConstructorReturn.js");
/* harmony import */ var reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reshow-runtime/es/helpers/getPrototypeOf */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/getPrototypeOf.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-atomic-molecule */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var organism_react_animate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! organism-react-animate */ "../react-atomic-organism/packages/organism-react-animate/build/es/src/index.js");
/* harmony import */ var _organisms_CarouselNavigation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../organisms/CarouselNavigation */ "../react-atomic-organism/packages/organism-react-carousel/build/es/ui/organisms/CarouselNavigation.js");










function _createSuper(Derived) {
  return function () {
    var Super = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived),
        result;

    if (_isNativeReflectConstruct()) {
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






var CarouselAnimation = /*#__PURE__*/function (_Component) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(CarouselAnimation, _Component);

  var _super = _createSuper(CarouselAnimation);

  function CarouselAnimation() {
    var _this;

    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CarouselAnimation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSelected", function (_ref) {
      var activeEl = _ref.activeEl,
          selected = _ref.selected,
          handleChange = _ref.handleChange;
      var animate = _this.props.animate;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(organism_react_animate__WEBPACK_IMPORTED_MODULE_11__["Change"], animate, activeEl);
    });

    return _this;
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(CarouselAnimation, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          animate = _this$props.animate,
          className = _this$props.className,
          others = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["animate", "className"]);

      var classes = Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_10__["mixClass"])('carousel-animation', className);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_organisms_CarouselNavigation__WEBPACK_IMPORTED_MODULE_12__["default"], Object(reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, others, {
        className: classes,
        onSelected: this.handleSelected
      }));
    }
  }]);

  return CarouselAnimation;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(CarouselAnimation, "defaultProps", {
  animate: {
    appear: 'fadeIn-500-550',
    enter: 'fadeIn-500-550',
    leave: 'fadeOut-500'
  }
});

/* harmony default export */ __webpack_exports__["default"] = (CarouselAnimation);

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

/***/ "../react-atomic-organism/packages/organism-react-carousel/build/es/ui/organisms/CarouselList.js":
/*!*******************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-carousel/build/es/ui/organisms/CarouselList.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/extends */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/extends.js");
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutProperties */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/objectWithoutProperties.js");
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reshow-runtime/es/helpers/possibleConstructorReturn */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/possibleConstructorReturn.js");
/* harmony import */ var reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reshow-runtime/es/helpers/getPrototypeOf */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/getPrototypeOf.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-atomic-molecule */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var ricon_ChevronRight__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ricon/ChevronRight */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/ricon/ChevronRight.js");
/* harmony import */ var ricon_ChevronRight__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ricon_ChevronRight__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! get-object-value */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/get-object-value/build/es/src/index.js");











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






var ArrowIcon = /*#__PURE__*/function (_Component) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(ArrowIcon, _Component);

  var _super = _createSuper(ArrowIcon);

  function ArrowIcon() {
    var _this;

    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ArrowIcon);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleEnter", function () {
      _this.setState({
        hoverStyle: {
          opacity: '.9'
        }
      });
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleLeave", function () {
      _this.setState({
        hoverStyle: {}
      });
    });

    return _this;
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ArrowIcon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          style = _this$props.style,
          iconStyle = _this$props.iconStyle,
          onClick = _this$props.onClick,
          others = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$props, ["style", "iconStyle", "onClick"]);

      var hoverStyle = Object(get_object_value__WEBPACK_IMPORTED_MODULE_13__["default"])(this.state, ['hoverStyle'], {});
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_11__["SemanticUI"], {
        style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Styles.arrowContainer, {}, style, {}, hoverStyle),
        onMouseEnter: this.handleEnter,
        onMouseLeave: this.handleLeave,
        onClick: onClick
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_11__["Icon"], Object(reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, others, {
        styles: Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_11__["reactStyle"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Styles.icon, {}, iconStyle), false, false)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(ricon_ChevronRight__WEBPACK_IMPORTED_MODULE_12___default.a, {
        style: {
          cursor: 'pointer'
        }
      })));
    }
  }]);

  return ArrowIcon;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

var CarouselList = /*#__PURE__*/function (_Component2) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(CarouselList, _Component2);

  var _super2 = _createSuper(CarouselList);

  function CarouselList() {
    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, CarouselList);

    return _super2.apply(this, arguments);
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(CarouselList, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          carouselAttr = _this$props2.carouselAttr,
          innerContainer = _this$props2.innerContainer,
          style = _this$props2.style,
          onLeft = _this$props2.onLeft,
          onRight = _this$props2.onRight,
          others = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$props2, ["children", "carouselAttr", "innerContainer", "style", "onLeft", "onRight"]); // <!-- Child


      var thisChildren = children;

      if (carouselAttr) {
        thisChildren = react__WEBPACK_IMPORTED_MODULE_10___default.a.Children.map(children, function (child) {
          return react__WEBPACK_IMPORTED_MODULE_10___default.a.cloneElement(child, Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, carouselAttr));
        });
      }

      if (innerContainer) {
        thisChildren = react__WEBPACK_IMPORTED_MODULE_10___default.a.cloneElement(innerContainer, {}, thisChildren);
      } // Child --> 


      var arrowLeft;
      var arrowRight;

      if (onLeft) {
        arrowLeft = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(ArrowIcon, {
          className: "backward",
          onClick: onLeft,
          iconStyle: Styles.leftIcon,
          style: Styles.arrowLeft
        });
      }

      if (onRight) {
        arrowRight = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(ArrowIcon, {
          className: "forward",
          onClick: onRight,
          iconStyle: Styles.rightIcon,
          style: Styles.arrowRight
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_11__["SemanticUI"], Object(reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, others, {
        style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Styles.container, {}, style)
      }), thisChildren, arrowLeft, arrowRight);
    }
  }]);

  return CarouselList;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CarouselList);
var Styles = {
  container: {
    position: 'relative',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    minHeight: 100
  },
  arrowContainer: {
    width: '15%',
    height: '100%',
    position: 'absolute',
    top: 0,
    backgroundRepeat: 'repeat-x',
    opacity: '.3',
    cursor: 'pointer'
  },
  arrowLeft: {
    left: 0,
    backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.3) 0, rgba(0,0,0,0.001) 100%)'
  },
  arrowRight: {
    right: 0,
    backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.001) 0, rgba(0,0,0,0.3) 100%)'
  },
  icon: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: '50%',
    transform: ['translateY(-50%)'],
    fill: '#fff'
  },
  leftIcon: {
    transform: ['rotate(180deg) translateY(50%)']
  },
  rightIcon: {
    right: 0
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

/***/ "../react-atomic-organism/packages/organism-react-carousel/build/es/ui/organisms/CarouselNavigation.js":
/*!*************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-carousel/build/es/ui/organisms/CarouselNavigation.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/extends */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/extends.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutProperties */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/objectWithoutProperties.js");
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reshow-runtime/es/helpers/possibleConstructorReturn */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/possibleConstructorReturn.js");
/* harmony import */ var reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reshow-runtime/es/helpers/getPrototypeOf */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/getPrototypeOf.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-atomic-molecule */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! get-object-value */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/get-object-value/build/es/src/index.js");
/* harmony import */ var _organisms_CarouselList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../organisms/CarouselList */ "../react-atomic-organism/packages/organism-react-carousel/build/es/ui/organisms/CarouselList.js");
/* harmony import */ var _organisms_Carousel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../organisms/Carousel */ "../react-atomic-organism/packages/organism-react-carousel/build/es/ui/organisms/Carousel.js");











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






var gLastX;
var gLastY;
var mouseMoveTimer;

var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_11__["SemanticUI"], null);

var CarouselNavigation = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(CarouselNavigation, _PureComponent);

  var _super = _createSuper(CarouselNavigation);

  function CarouselNavigation(_props) {
    var _this;

    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, CarouselNavigation);

    _this = _super.call(this, _props);

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "backward", null);

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "forward", null);

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleLeft", function () {
      _this.handleChange(_this.backward);
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleRight", function () {
      _this.handleChange(_this.forward);
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleChange", function (selected) {
      var onChange = _this.props.onChange;

      if ('function' === typeof onChange) {
        onChange(selected);
      }

      _this.setState({
        selected: selected
      });
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "update", function (props) {
      var children = props.children,
          propsSelected = props.selected;
      var childs = [];
      react__WEBPACK_IMPORTED_MODULE_10___default.a.Children.forEach(children, function (child) {
        if (child) {
          childs.push(child);
        }
      });
      var selected;

      if (childs) {
        // check propsSelected is valid.
        childs.some(function (child, i) {
          var key = Object(get_object_value__WEBPACK_IMPORTED_MODULE_12__["default"])(child, ['props', 'name']) || i;

          if (key === propsSelected) {
            selected = key;
            return true;
          } else {
            return false;
          }
        });

        if (!selected) {
          selected = Object(get_object_value__WEBPACK_IMPORTED_MODULE_12__["default"])(childs.slice(0, 1)[0], ['props', 'name'], 0);
        }
      }

      return {
        selected: selected,
        childs: childs
      };
    });

    _this.state = _this.update(_props);
    return _this;
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(CarouselNavigation, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      this.setState(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, this.update(props)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          selected = _this$state.selected,
          childs = _this$state.childs;

      if (!childs || !childs.length) {
        return null;
      }

      var _this$props = this.props,
          style = _this$props.style,
          className = _this$props.className,
          carouselAttr = _this$props.carouselAttr,
          container = _this$props.container,
          children = _this$props.children,
          thumbAttr = _this$props.thumbAttr,
          infinity = _this$props.infinity,
          propsSelected = _this$props.selected,
          onChange = _this$props.onChange,
          onSelected = _this$props.onSelected,
          hideThumb = _this$props.hideThumb,
          others = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["style", "className", "carouselAttr", "container", "children", "thumbAttr", "infinity", "selected", "onChange", "onSelected", "hideThumb"]);

      var thisThumbAttr = Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, carouselAttr, {}, thumbAttr, {
        hoverStyle: Styles.thumbHover,
        className: 'link card',
        style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, Object(get_object_value__WEBPACK_IMPORTED_MODULE_12__["default"])(carouselAttr, ['style'], {}), {}, Styles.thumb, {}, Object(get_object_value__WEBPACK_IMPORTED_MODULE_12__["default"])(thumbAttr, ['style'], {}))
      });

      var activeChildren = null;
      var activeEl = false;
      var thumbChild = [];
      this.backward = null;
      this.forward = null;
      childs.forEach(function (child, i) {
        var key = Object(get_object_value__WEBPACK_IMPORTED_MODULE_12__["default"])(child, ['props', 'name']) || i;
        var activeStyle = {}; //need always reset

        var isSelected = key === selected;
        childs[i] = child = Object(react__WEBPACK_IMPORTED_MODULE_10__["cloneElement"])(child, Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, carouselAttr, {
          name: key,
          key: key
        }));

        if (isSelected) {
          activeStyle = Styles.thumbActive;
          activeEl = child;
          activeChildren = onSelected({
            selected: selected,
            childs: childs,
            activeEl: activeEl,
            handleChange: _this2.handleChange
          });
        } else {
          if (!activeEl) {
            _this2.backward = key;
          } else {
            if (!_this2.forward) {
              _this2.forward = key;
            }
          }
        }

        if (!hideThumb) {
          var newThumbChildAttr = Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({
            key: key
          }, thisThumbAttr, {
            className: Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_11__["mixClass"])(thisThumbAttr.className, {
              active: isSelected
            }),
            onClick: function onClick() {
              _this2.handleChange(key);
            },
            onMouseMove: function onMouseMove(e) {
              if (mouseMoveTimer) {
                clearTimeout(mouseMoveTimer);
                mouseMoveTimer = null;
              }

              var lastX = e.screenX;
              var lastY = e.screenY;
              mouseMoveTimer = setTimeout(function () {
                gLastX = lastX;
                gLastY = lastY;
              }, 100);
            },
            onMouseOver: function onMouseOver(e) {
              var lastX = e.screenX;
              var lastY = e.screenY;

              if (gLastX === lastX && gLastY === lastY) {
                return;
              } else {
                _this2.handleChange(key);
              }
            },
            style: null,
            styles: Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_11__["reactStyle"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, thisThumbAttr.style, {}, activeStyle), false, false)
          });

          var thisChild = Object(get_object_value__WEBPACK_IMPORTED_MODULE_12__["default"])(child, ['props', 'thumbContainer']);

          if (thisChild) {
            thisChild = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_organisms_Carousel__WEBPACK_IMPORTED_MODULE_14__["default"], null, thisChild);
          } else {
            thisChild = child;
          }

          thumbChild.push(Object(react__WEBPACK_IMPORTED_MODULE_10__["cloneElement"])(thisChild, newThumbChildAttr));
        }
      });

      if (null === this.forward && infinity && childs) {
        this.forward = childs.slice(0, 1)[0].props.name;
      }

      if (null === this.backward && infinity && childs) {
        this.backward = childs.slice(-1)[0].props.name;
      }

      var thisChildren = [];
      thisChildren.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_organisms_CarouselList__WEBPACK_IMPORTED_MODULE_13__["default"], {
        key: 0,
        onLeft: this.handleLeft,
        onRight: this.handleRight
      }, Object(react__WEBPACK_IMPORTED_MODULE_10__["cloneElement"])(activeChildren, others)));

      if (!hideThumb) {
        thisChildren.push(
        /*#__PURE__*/
        //thumb
        react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_organisms_CarouselList__WEBPACK_IMPORTED_MODULE_13__["default"], Object(reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          key: 1
        }, others, {
          style: Styles.thumbList,
          className: "cards thumbs"
        }), thumbChild));
      }
      /*container*/


      var thisContainer;

      if (container) {
        thisContainer = container;
      } else {
        thisContainer = _ref;
      }

      return Object(react__WEBPACK_IMPORTED_MODULE_10__["cloneElement"])(thisContainer, {
        style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, Styles.container, {}, style),
        className: Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_11__["mixClass"])(className, 'carousel-navigation')
      }, thisChildren);
    }
  }]);

  return CarouselNavigation;
}(react__WEBPACK_IMPORTED_MODULE_10__["PureComponent"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(CarouselNavigation, "defaultProps", {
  infinity: true
});

/* harmony default export */ __webpack_exports__["default"] = (CarouselNavigation);
var Styles = {
  container: {
    position: 'relative',
    marginBottom: 35
  },
  thumbList: {
    fontSize: '1rem',
    width: '77%',
    margin: '-85px auto 0',
    minHeight: 50,
    padding: 5,
    whiteSpace: 'normal'
  },
  thumb: {
    margin: '0 5px 10px 0',
    opacity: 0.5,
    overflow: 'hidden',
    width: 50,
    height: 50,
    verticalAlign: 'bottom'
  },
  thumbHover: {
    opacity: 1
  },
  thumbActive: {
    opacity: 1,
    border: '1px solid #fff'
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

/***/ })

})
//# sourceMappingURL=main.98d516f272d83e6f8d27.hot-update.js.map