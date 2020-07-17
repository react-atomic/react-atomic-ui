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

var _CarouselList = _interopRequireDefault(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../ui/organisms/CarouselList'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var _CarouselAnimation = _interopRequireDefault(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../ui/organisms/CarouselAnimation'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var _CarouselSwipe = _interopRequireDefault(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../ui/organisms/CarouselSwipe'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var _CarouselSlide = _interopRequireDefault(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../ui/organisms/CarouselSlide'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-carousel/build/cjs/ui/organisms/Carousel.js":
/*!****************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-carousel/build/cjs/ui/organisms/Carousel.js ***!
  \****************************************************************************************************/
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

var Carousel = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Carousel, _Component);

  var _super = _createSuper(Carousel);

  function Carousel() {
    var _this;

    (0, _classCallCheck2["default"])(this, Carousel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleEnter", function () {
      var hoverStyle = (0, _getObjectValue["default"])(_this.props, ['hoverStyle']);

      if (hoverStyle) {
        _this.setState({
          hoverStyle: hoverStyle
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleLeave", function () {
      _this.setState({
        hoverStyle: {}
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(Carousel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          style = _this$props.style,
          hoverStyle = _this$props.hoverStyle,
          thumbContainer = _this$props.thumbContainer,
          others = (0, _objectWithoutProperties2["default"])(_this$props, ["style", "hoverStyle", "thumbContainer"]);
      var thisHoverStyle = (0, _getObjectValue["default"])(this.state, ['hoverStyle'], {});
      return /*#__PURE__*/_react["default"].createElement(_reactAtomicMolecule.SemanticUI, (0, _extends2["default"])({}, others, {
        style: (0, _objectSpread2["default"])({}, Styles.container, {}, style, {}, thisHoverStyle),
        onMouseEnter: this.handleEnter,
        onMouseLeave: this.handleLeave
      }));
    }
  }]);
  return Carousel;
}(_react.Component);

var _default = Carousel;
exports["default"] = _default;
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

/***/ "./build/ui/organisms/CarouselAnimation.example.js":
/*!*********************************************************!*\
  !*** ./build/ui/organisms/CarouselAnimation.example.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-carousel */ "../react-atomic-organism/packages/organism-react-carousel/build/cjs/src/index.js");
/* harmony import */ var organism_react_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__);



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], null, "2");

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], null, "3");

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], null, "4");

var _ref4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], null, "5");

var CarouselAnimationExample = function CarouselAnimationExample(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__["CarouselAnimation"], {
    carouselAttr: {
      style: Styles.carousel
    },
    style: Styles.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: Styles.img,
    src: "https://c1.staticflickr.com/9/8567/16584613141_d984a3680a_b.jpg"
  })), _ref, _ref2, _ref3, _ref4);
};

_c = CarouselAnimationExample;
/* harmony default export */ __webpack_exports__["default"] = (CarouselAnimationExample);
var Styles = {
  container: {
    margin: '0 10%'
  },
  carousel: {
    width: '100%',
    height: 300,
    background: '#00558B'
  },
  img: {
    maxWidth: '100%',
    verticalAlign: 'bottom'
  }
};

var _c;

$RefreshReg$(_c, "CarouselAnimationExample");

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/CarouselAnimationHideThumb.example.js":
/*!******************************************************************!*\
  !*** ./build/ui/organisms/CarouselAnimationHideThumb.example.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-carousel */ "../react-atomic-organism/packages/organism-react-carousel/build/cjs/src/index.js");
/* harmony import */ var organism_react_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__);



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], null, "2");

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], null, "3");

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], null, "4");

var _ref4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], null, "5");

var CarouselAnimationExample = function CarouselAnimationExample(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__["CarouselAnimation"], {
    carouselAttr: {
      style: Styles.carousel
    },
    style: Styles.container,
    hideThumb: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: Styles.img,
    src: "https://c1.staticflickr.com/9/8567/16584613141_d984a3680a_b.jpg"
  })), _ref, _ref2, _ref3, _ref4);
};

_c = CarouselAnimationExample;
/* harmony default export */ __webpack_exports__["default"] = (CarouselAnimationExample);
var Styles = {
  container: {
    margin: '0 10%'
  },
  carousel: {
    width: '100%',
    height: 300,
    background: '#00558B'
  },
  img: {
    maxWidth: '100%',
    verticalAlign: 'bottom'
  }
};

var _c;

$RefreshReg$(_c, "CarouselAnimationExample");

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/CarouselSlide.example.js":
/*!*****************************************************!*\
  !*** ./build/ui/organisms/CarouselSlide.example.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-carousel */ "../react-atomic-organism/packages/organism-react-carousel/build/cjs/src/index.js");
/* harmony import */ var organism_react_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__);



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], null, "2");

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], null, "3");

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], null, "4");

var _ref4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], null, "5");

var CarouselSlideExample = function CarouselSlideExample(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__["CarouselSlide"], {
    carouselAttr: {
      style: Styles.carousel
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: Styles.img,
    src: "https://c1.staticflickr.com/9/8567/16584613141_d984a3680a_b.jpg"
  })), _ref, _ref2, _ref3, _ref4);
};

_c = CarouselSlideExample;
/* harmony default export */ __webpack_exports__["default"] = (CarouselSlideExample);
var Styles = {
  carousel: {
    width: 300,
    height: 300,
    background: '#00558B'
  }
};

var _c;

$RefreshReg$(_c, "CarouselSlideExample");

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=main.6ae28a4701413595386f.hot-update.js.map