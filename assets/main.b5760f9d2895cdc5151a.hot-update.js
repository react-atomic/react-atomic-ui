webpackHotUpdate("main",{

/***/ "../react-atomic-organism/packages/organism-react-html2canvas/build/es/src/index.js":
/*!******************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-html2canvas/build/es/src/index.js ***!
  \******************************************************************************************/
/*! exports provided: default, HTMLToPDF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_organisms_HTMLToCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/organisms/HTMLToCanvas */ "../react-atomic-organism/packages/organism-react-html2canvas/build/es/ui/organisms/HTMLToCanvas.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ui_organisms_HTMLToCanvas__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ui_organisms_HTMLToPDF__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/organisms/HTMLToPDF */ "../react-atomic-organism/packages/organism-react-html2canvas/build/es/ui/organisms/HTMLToPDF.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLToPDF", function() { return _ui_organisms_HTMLToPDF__WEBPACK_IMPORTED_MODULE_1__["default"]; });

// Default




/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-html2canvas/build/es/ui/organisms/HTMLToPDF.js":
/*!*******************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-html2canvas/build/es/ui/organisms/HTMLToPDF.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _organisms_HTMLToCanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../organisms/HTMLToCanvas */ "../react-atomic-organism/packages/organism-react-html2canvas/build/es/ui/organisms/HTMLToCanvas.js");
var _s = $RefreshSig$();



var defaultAssets = {
  jspdf: "https://cdn.jsdelivr.net/npm/jspdf@2.1.0/dist/jspdf.umd.min.js"
};

var getAsset = function getAsset(file) {
  return get(defaultAssets, [file]);
};

var HTMLToPDF = function HTMLToPDF(props, ref) {
  _s();

  var canvas = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var handleCanvas = function handleCanvas(el) {
    return canvas.current = el;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"])(ref, function () {
    download: (function () {});
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_organisms_HTMLToCanvas__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ref: handleCanvas,
    jsArr: [getAsset("jspdf")]
  });
};

_s(HTMLToPDF, "U7eCHviuayJRXMYRmtNxmbPztdU=", false, function () {
  return [react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"]];
});

_c = HTMLToPDF;
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/_c2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(HTMLToPDF));

var _c, _c2;

$RefreshReg$(_c, "HTMLToPDF");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=main.b5760f9d2895cdc5151a.hot-update.js.map