webpackHotUpdate("main",{

/***/ "../react-atomic-organism/packages/organism-react-carousel/build/cjs/src/index.js":
/*!****************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-carousel/build/cjs/src/index.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Carousel", {
  enumerable: true,
  get: function get() {
    return _Carousel["default"];
  }
});
Object.defineProperty(exports, "CarouselList", {
  enumerable: true,
  get: function get() {
    return _CarouselList["default"];
  }
});
Object.defineProperty(exports, "CarouselAnimation", {
  enumerable: true,
  get: function get() {
    return _CarouselAnimation["default"];
  }
});
Object.defineProperty(exports, "CarouselSwipe", {
  enumerable: true,
  get: function get() {
    return _CarouselSwipe["default"];
  }
});
Object.defineProperty(exports, "CarouselSlide", {
  enumerable: true,
  get: function get() {
    return _CarouselSlide["default"];
  }
});

var _Carousel = _interopRequireDefault(__webpack_require__(/*! ../ui/organisms/Carousel */ "../react-atomic-organism/packages/organism-react-carousel/build/cjs/ui/organisms/Carousel.js"));

var _CarouselList = _interopRequireDefault(__webpack_require__(/*! ../ui/organisms/CarouselList */ "../react-atomic-organism/packages/organism-react-carousel/build/cjs/ui/organisms/CarouselList.js"));

var _CarouselAnimation = _interopRequireDefault(__webpack_require__(/*! ../ui/organisms/CarouselAnimation */ "../react-atomic-organism/packages/organism-react-carousel/build/cjs/ui/organisms/CarouselAnimation.js"));

var _CarouselSwipe = _interopRequireDefault(__webpack_require__(/*! ../ui/organisms/CarouselSwipe */ "../react-atomic-organism/packages/organism-react-carousel/build/cjs/ui/organisms/CarouselSwipe.js"));

var _CarouselSlide = _interopRequireDefault(__webpack_require__(/*! ../ui/organisms/CarouselSlide */ "../react-atomic-organism/packages/organism-react-carousel/build/cjs/ui/organisms/CarouselSlide.js"));

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-carousel/build/cjs/ui/organisms/CarouselAnimation.js":
/*!*************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-carousel/build/cjs/ui/organisms/CarouselAnimation.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {

var _interopRequireWildcard = __webpack_require__(/*! reshow-runtime/helpers/interopRequireWildcard */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/extends */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/objectWithoutProperties */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/classCallCheck */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/createClass */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/assertThisInitialized */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/assertThisInitialized.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/possibleConstructorReturn */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/getPrototypeOf */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/inherits */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/defineProperty */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/react-atomic-molecule/build/es/src/index.js");

var _organismReactAnimate = __webpack_require__(/*! organism-react-animate */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/organism-react-animate/build/es/src/index.js");

var _CarouselNavigation = _interopRequireDefault(__webpack_require__(/*! ../organisms/CarouselNavigation */ "../react-atomic-organism/packages/organism-react-carousel/build/cjs/ui/organisms/CarouselNavigation.js"));

function _createSuper(Derived) {
  return function () {
    var Super = (0, _getPrototypeOf2["default"])(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return (0, _possibleConstructorReturn2["default"])(this, result);
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
  (0, _inherits2["default"])(CarouselAnimation, _Component);

  var _super = _createSuper(CarouselAnimation);

  function CarouselAnimation() {
    var _this;

    (0, _classCallCheck2["default"])(this, CarouselAnimation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleSelected", function (_ref) {
      var activeEl = _ref.activeEl,
          selected = _ref.selected,
          handleChange = _ref.handleChange;
      var animate = _this.props.animate;
      return /*#__PURE__*/_react["default"].createElement(_organismReactAnimate.Change, animate, activeEl);
    });
    return _this;
  }

  (0, _createClass2["default"])(CarouselAnimation, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          animate = _this$props.animate,
          className = _this$props.className,
          others = (0, _objectWithoutProperties2["default"])(_this$props, ["animate", "className"]);
      var classes = (0, _reactAtomicMolecule.mixClass)('carousel-animation', className);
      return /*#__PURE__*/_react["default"].createElement(_CarouselNavigation["default"], (0, _extends2["default"])({}, others, {
        className: classes,
        onSelected: this.handleSelected
      }));
    }
  }]);
  return CarouselAnimation;
}(_react.Component);

(0, _defineProperty2["default"])(CarouselAnimation, "defaultProps", {
  animate: {
    appear: 'fadeIn-500-550',
    enter: 'fadeIn-500-550',
    leave: 'fadeOut-500'
  }
});
var _default = CarouselAnimation;
exports["default"] = _default;
module.exports = exports["default"];

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../../../../react-atomic-ui/node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-carousel/build/cjs/ui/organisms/CarouselList.js":
/*!********************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-carousel/build/cjs/ui/organisms/CarouselList.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {

var _interopRequireWildcard = __webpack_require__(/*! reshow-runtime/helpers/interopRequireWildcard */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/extends */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/extends.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/objectSpread2 */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/objectSpread2.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/objectWithoutProperties */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/classCallCheck */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/createClass */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/assertThisInitialized */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/assertThisInitialized.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/possibleConstructorReturn */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/getPrototypeOf */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/inherits */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/defineProperty */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/react-atomic-molecule/build/es/src/index.js");

var _ChevronRight = _interopRequireDefault(__webpack_require__(/*! ricon/ChevronRight */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/ricon/ChevronRight.js"));

var _getObjectValue = _interopRequireDefault(__webpack_require__(/*! get-object-value */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/get-object-value/build/es/src/index.js"));

function _createSuper(Derived) {
  return function () {
    var Super = (0, _getPrototypeOf2["default"])(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return (0, _possibleConstructorReturn2["default"])(this, result);
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
  (0, _inherits2["default"])(ArrowIcon, _Component);

  var _super = _createSuper(ArrowIcon);

  function ArrowIcon() {
    var _this;

    (0, _classCallCheck2["default"])(this, ArrowIcon);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleEnter", function () {
      _this.setState({
        hoverStyle: {
          opacity: '.9'
        }
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleLeave", function () {
      _this.setState({
        hoverStyle: {}
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(ArrowIcon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          style = _this$props.style,
          iconStyle = _this$props.iconStyle,
          onClick = _this$props.onClick,
          others = (0, _objectWithoutProperties2["default"])(_this$props, ["style", "iconStyle", "onClick"]);
      var hoverStyle = (0, _getObjectValue["default"])(this.state, ['hoverStyle'], {});
      return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, {
        style: (0, _objectSpread2["default"])({}, Styles.arrowContainer, {}, style, {}, hoverStyle),
        onMouseEnter: this.handleEnter,
        onMouseLeave: this.handleLeave,
        onClick: onClick
      }, /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.Icon, (0, _extends2["default"])({}, others, {
        styles: (0, _reactAtomicMolecule.reactStyle)((0, _objectSpread2["default"])({}, Styles.icon, {}, iconStyle), false, false)
      }), /*#__PURE__*/_react["default"].createElement(_ChevronRight["default"], {
        style: {
          cursor: 'pointer'
        }
      })));
    }
  }]);
  return ArrowIcon;
}(_react.Component);

var CarouselList = /*#__PURE__*/function (_Component2) {
  (0, _inherits2["default"])(CarouselList, _Component2);

  var _super2 = _createSuper(CarouselList);

  function CarouselList() {
    (0, _classCallCheck2["default"])(this, CarouselList);
    return _super2.apply(this, arguments);
  }

  (0, _createClass2["default"])(CarouselList, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          carouselAttr = _this$props2.carouselAttr,
          innerContainer = _this$props2.innerContainer,
          style = _this$props2.style,
          onLeft = _this$props2.onLeft,
          onRight = _this$props2.onRight,
          others = (0, _objectWithoutProperties2["default"])(_this$props2, ["children", "carouselAttr", "innerContainer", "style", "onLeft", "onRight"]); // <!-- Child

      var thisChildren = children;

      if (carouselAttr) {
        thisChildren = _react["default"].Children.map(children, function (child) {
          return _react["default"].cloneElement(child, (0, _objectSpread2["default"])({}, carouselAttr));
        });
      }

      if (innerContainer) {
        thisChildren = _react["default"].cloneElement(innerContainer, {}, thisChildren);
      } // Child --> 


      var arrowLeft;
      var arrowRight;

      if (onLeft) {
        arrowLeft = /*#__PURE__*/_react["default"].createElement(ArrowIcon, {
          className: "backward",
          onClick: onLeft,
          iconStyle: Styles.leftIcon,
          style: Styles.arrowLeft
        });
      }

      if (onRight) {
        arrowRight = /*#__PURE__*/_react["default"].createElement(ArrowIcon, {
          className: "forward",
          onClick: onRight,
          iconStyle: Styles.rightIcon,
          style: Styles.arrowRight
        });
      }

      return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, (0, _extends2["default"])({}, others, {
        style: (0, _objectSpread2["default"])({}, Styles.container, {}, style)
      }), thisChildren, arrowLeft, arrowRight);
    }
  }]);
  return CarouselList;
}(_react.Component);

var _default = CarouselList;
exports["default"] = _default;
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
module.exports = exports["default"];

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../../../../react-atomic-ui/node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-carousel/build/cjs/ui/organisms/CarouselNavigation.js":
/*!**************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-carousel/build/cjs/ui/organisms/CarouselNavigation.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {

var _interopRequireWildcard = __webpack_require__(/*! reshow-runtime/helpers/interopRequireWildcard */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/extends */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/objectWithoutProperties */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/objectWithoutProperties.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/objectSpread2 */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/objectSpread2.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/classCallCheck */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/createClass */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/assertThisInitialized */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/assertThisInitialized.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/possibleConstructorReturn */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/getPrototypeOf */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/inherits */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/defineProperty */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/react-atomic-molecule/build/es/src/index.js");

var _getObjectValue = _interopRequireDefault(__webpack_require__(/*! get-object-value */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/get-object-value/build/es/src/index.js"));

var _CarouselList = _interopRequireDefault(__webpack_require__(/*! ../organisms/CarouselList */ "../react-atomic-organism/packages/organism-react-carousel/build/cjs/ui/organisms/CarouselList.js"));

var _Carousel = _interopRequireDefault(__webpack_require__(/*! ../organisms/Carousel */ "../react-atomic-organism/packages/organism-react-carousel/build/cjs/ui/organisms/Carousel.js"));

function _createSuper(Derived) {
  return function () {
    var Super = (0, _getPrototypeOf2["default"])(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return (0, _possibleConstructorReturn2["default"])(this, result);
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

var _ref = /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, null);

var CarouselNavigation = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(CarouselNavigation, _PureComponent);

  var _super = _createSuper(CarouselNavigation);

  function CarouselNavigation(_props) {
    var _this;

    (0, _classCallCheck2["default"])(this, CarouselNavigation);
    _this = _super.call(this, _props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "backward", null);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "forward", null);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleLeft", function () {
      _this.handleChange(_this.backward);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleRight", function () {
      _this.handleChange(_this.forward);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (selected) {
      var onChange = _this.props.onChange;

      if ('function' === typeof onChange) {
        onChange(selected);
      }

      _this.setState({
        selected: selected
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "update", function (props) {
      var children = props.children,
          propsSelected = props.selected;
      var childs = [];

      _react["default"].Children.forEach(children, function (child) {
        if (child) {
          childs.push(child);
        }
      });

      var selected;

      if (childs) {
        // check propsSelected is valid.
        childs.some(function (child, i) {
          var key = (0, _getObjectValue["default"])(child, ['props', 'name']) || i;

          if (key === propsSelected) {
            selected = key;
            return true;
          } else {
            return false;
          }
        });

        if (!selected) {
          selected = (0, _getObjectValue["default"])(childs.slice(0, 1)[0], ['props', 'name'], 0);
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

  (0, _createClass2["default"])(CarouselNavigation, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      this.setState((0, _objectSpread2["default"])({}, this.update(props)));
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
          others = (0, _objectWithoutProperties2["default"])(_this$props, ["style", "className", "carouselAttr", "container", "children", "thumbAttr", "infinity", "selected", "onChange", "onSelected", "hideThumb"]);
      var thisThumbAttr = (0, _objectSpread2["default"])({}, carouselAttr, {}, thumbAttr, {
        hoverStyle: Styles.thumbHover,
        className: 'link card',
        style: (0, _objectSpread2["default"])({}, (0, _getObjectValue["default"])(carouselAttr, ['style'], {}), {}, Styles.thumb, {}, (0, _getObjectValue["default"])(thumbAttr, ['style'], {}))
      });
      var activeChildren = null;
      var activeEl = false;
      var thumbChild = [];
      this.backward = null;
      this.forward = null;
      childs.forEach(function (child, i) {
        var key = (0, _getObjectValue["default"])(child, ['props', 'name']) || i;
        var activeStyle = {}; //need always reset

        var isSelected = key === selected;
        childs[i] = child = (0, _react.cloneElement)(child, (0, _objectSpread2["default"])({}, carouselAttr, {
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
          var newThumbChildAttr = (0, _objectSpread2["default"])({
            key: key
          }, thisThumbAttr, {
            className: (0, _reactAtomicMolecule.mixClass)(thisThumbAttr.className, {
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
            styles: (0, _reactAtomicMolecule.reactStyle)((0, _objectSpread2["default"])({}, thisThumbAttr.style, {}, activeStyle), false, false)
          });
          var thisChild = (0, _getObjectValue["default"])(child, ['props', 'thumbContainer']);

          if (thisChild) {
            thisChild = /*#__PURE__*/_react["default"].createElement(_Carousel["default"], null, thisChild);
          } else {
            thisChild = child;
          }

          thumbChild.push((0, _react.cloneElement)(thisChild, newThumbChildAttr));
        }
      });

      if (null === this.forward && infinity && childs) {
        this.forward = childs.slice(0, 1)[0].props.name;
      }

      if (null === this.backward && infinity && childs) {
        this.backward = childs.slice(-1)[0].props.name;
      }

      var thisChildren = [];
      thisChildren.push( /*#__PURE__*/_react["default"].createElement(_CarouselList["default"], {
        key: 0,
        onLeft: this.handleLeft,
        onRight: this.handleRight
      }, (0, _react.cloneElement)(activeChildren, others)));

      if (!hideThumb) {
        thisChildren.push(
        /*#__PURE__*/
        //thumb
        _react["default"].createElement(_CarouselList["default"], (0, _extends2["default"])({
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

      return (0, _react.cloneElement)(thisContainer, {
        style: (0, _objectSpread2["default"])({}, Styles.container, {}, style),
        className: (0, _reactAtomicMolecule.mixClass)(className, 'carousel-navigation')
      }, thisChildren);
    }
  }]);
  return CarouselNavigation;
}(_react.PureComponent);

(0, _defineProperty2["default"])(CarouselNavigation, "defaultProps", {
  infinity: true
});
var _default = CarouselNavigation;
exports["default"] = _default;
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
module.exports = exports["default"];

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../../../../react-atomic-ui/node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-carousel/build/cjs/ui/organisms/CarouselSlide.js":
/*!*********************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-carousel/build/cjs/ui/organisms/CarouselSlide.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {

var _interopRequireWildcard = __webpack_require__(/*! reshow-runtime/helpers/interopRequireWildcard */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/objectSpread2 */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/objectSpread2.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/extends */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/classCallCheck */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/createClass */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/assertThisInitialized */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/assertThisInitialized.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/possibleConstructorReturn */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/getPrototypeOf */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/inherits */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/defineProperty */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/react-atomic-molecule/build/es/src/index.js");

var _CarouselList = _interopRequireDefault(__webpack_require__(/*! ../organisms/CarouselList */ "../react-atomic-organism/packages/organism-react-carousel/build/cjs/ui/organisms/CarouselList.js"));

var _CarouselSwipe = _interopRequireDefault(__webpack_require__(/*! ../organisms/CarouselSwipe */ "../react-atomic-organism/packages/organism-react-carousel/build/cjs/ui/organisms/CarouselSwipe.js"));

function _createSuper(Derived) {
  return function () {
    var Super = (0, _getPrototypeOf2["default"])(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return (0, _possibleConstructorReturn2["default"])(this, result);
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

var CarouselSlide = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(CarouselSlide, _Component);

  var _super = _createSuper(CarouselSlide);

  function CarouselSlide(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, CarouselSlide);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleHeight", function (height) {
      _this.setState({
        height: height
      });
    });
    _this.state = {
      height: 'auto'
    };
    return _this;
  }

  (0, _createClass2["default"])(CarouselSlide, [{
    key: "render",
    value: function render() {
      var others = (0, _extends2["default"])({}, this.props);
      return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, {
        style: (0, _objectSpread2["default"])({}, Styles.container, {
          height: this.state.height
        })
      }, /*#__PURE__*/_react["default"].createElement(_CarouselList["default"], (0, _extends2["default"])({}, others, {
        innerContainer: /*#__PURE__*/_react["default"].createElement(_CarouselSwipe["default"], {
          onHeight: this.handleHeight
        })
      })));
    }
  }]);
  return CarouselSlide;
}(_react.Component);

var _default = CarouselSlide;
exports["default"] = _default;
var Styles = {
  container: {
    overflow: 'hidden'
  }
};
module.exports = exports["default"];

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../../../../react-atomic-ui/node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-carousel/build/cjs/ui/organisms/CarouselSwipe.js":
/*!*********************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-carousel/build/cjs/ui/organisms/CarouselSwipe.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {

var _interopRequireWildcard = __webpack_require__(/*! reshow-runtime/helpers/interopRequireWildcard */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! reshow-runtime/helpers/interopRequireDefault */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/extends */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/objectWithoutProperties */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/classCallCheck */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/createClass */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/assertThisInitialized */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/assertThisInitialized.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/possibleConstructorReturn */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/getPrototypeOf */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/inherits */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! reshow-runtime/helpers/defineProperty */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactAtomicMolecule = __webpack_require__(/*! react-atomic-molecule */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/react-atomic-molecule/build/es/src/index.js");

function _createSuper(Derived) {
  return function () {
    var Super = (0, _getPrototypeOf2["default"])(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return (0, _possibleConstructorReturn2["default"])(this, result);
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

var CarouselSwipe = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(CarouselSwipe, _Component);

  var _super = _createSuper(CarouselSwipe);

  function CarouselSwipe() {
    var _this;

    (0, _classCallCheck2["default"])(this, CarouselSwipe);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "dragging", false);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "startX", null);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "swipeStart", function (e) {
      _this.dragging = true;
      _this.startX = _this.getX(e);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "swipeMove", function (e) {
      if (!_this.dragging) {
        return false;
      }

      var posX = _this.getX(e);

      var move = _this.startX - posX;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "swipeEnd", function (e) {});
    return _this;
  }

  (0, _createClass2["default"])(CarouselSwipe, [{
    key: "getX",
    value: function getX(e) {
      var posX = e.touches !== undefined ? e.touches[0].pageX : e.clientX;
      return posX;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var height = this.el.offsetHeight;
      var onHeight = this.props.onHeight;

      if (onHeight) {
        onHeight(height);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          onHeight = _this$props.onHeight,
          others = (0, _objectWithoutProperties2["default"])(_this$props, ["onHeight"]);
      return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, {
        style: Styles.container
      }, /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, (0, _extends2["default"])({
        className: "carousel-swipe",
        style: Styles.inside
      }, others, {
        refCb: function refCb(el) {
          return _this2.el = el;
        },
        onMouseDown: this.swipeStart,
        onMouseMove: this.swipeMove,
        onMouseUp: this.swipeEnd,
        onMouseLeave: this.swipeMove,
        onTouchStart: this.swipeStart,
        onTouchMove: this.swipeMove,
        onTouchEnd: this.swipeEnd,
        onTouchCancel: this.swipeMove
      })));
    }
  }]);
  return CarouselSwipe;
}(_react.Component);

var _default = CarouselSwipe;
exports["default"] = _default;
var Styles = {
  container: {
    overflowX: 'scroll',
    overflowY: 'hidden',
    position: 'relative',
    paddingBottom: 5,
    fontSize: '1rem'
  },
  inside: {
    display: 'inline-block',
    position: 'relative',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  }
};
module.exports = exports["default"];

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../../../../react-atomic-ui/node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=main.6bcc3577823e20001700.hot-update.js.map