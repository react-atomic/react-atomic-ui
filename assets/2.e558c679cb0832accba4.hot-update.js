webpackHotUpdate(2,{

/***/ "./node_modules/non-worker/build/es/src/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/non-worker/build/es/src/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "./node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var array_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! array.polyfill */ "./node_modules/array.polyfill/build/es/src/index.js");
/* harmony import */ var array_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(array_polyfill__WEBPACK_IMPORTED_MODULE_2__);




var NonWorker = function NonWorker() {
  var _this = this;

  Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NonWorker);

  Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "callbacks", []);

  Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "onMessage", function (callback) {
    _this.onmessage = callback;

    if ("undefined" === typeof window) {
      onmessage = callback;
    }

    return _this;
  });

  Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "addEventListener", function (type, callback) {
    return _this.callbacks.push(callback);
  });

  Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "postMessage", function (data) {
    var e = {
      data: data
    };

    _this.onmessage(e);
  });

  this.post = function (data) {
    var e = {
      data: data
    };

    _this.callbacks.forEach(function (c) {
      return c(e);
    });
  };

  if ("undefined" === typeof window) {
    try {
      var post = postMessage;
      post({
        type: "ready"
      });
      this.post = post;
    } catch (e) {
      console.error(e);
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (NonWorker);

/***/ })

})
//# sourceMappingURL=2.e558c679cb0832accba4.hot-update.js.map