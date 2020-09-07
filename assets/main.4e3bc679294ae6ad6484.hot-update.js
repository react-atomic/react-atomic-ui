webpackHotUpdate("main",{

/***/ "../react-atomic-organism/packages/organism-react-html2canvas/build/es/ui/organisms/HTMLToPDF.js":
/*!*******************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-html2canvas/build/es/ui/organisms/HTMLToPDF.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/extends */ "../react-atomic-organism/packages/organism-react-html2canvas/node_modules/reshow-runtime/es/helpers/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! get-object-value */ "../react-atomic-organism/packages/organism-react-html2canvas/node_modules/get-object-value/build/es/src/index.js");
/* harmony import */ var ratio_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ratio-js */ "../react-atomic-organism/packages/organism-react-html2canvas/node_modules/ratio-js/build/es/src/index.js");
/* harmony import */ var _organisms_HTMLToCanvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../organisms/HTMLToCanvas */ "../react-atomic-organism/packages/organism-react-html2canvas/build/es/ui/organisms/HTMLToCanvas.js");
var _s = $RefreshSig$();






var defaultAssets = {
  jspdf: "https://cdn.jsdelivr.net/npm/jspdf@2.1.0/dist/jspdf.umd.min.js"
};

var getAsset = function getAsset(file) {
  return Object(get_object_value__WEBPACK_IMPORTED_MODULE_2__["default"])(defaultAssets, [file]);
};

var HTMLToPDF = function HTMLToPDF(props, ref) {
  _s();

  var canvas = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var handleRefCanvas = function handleRefCanvas(el) {
    return canvas.current = el;
  };

  var handleCanvas = function handleCanvas(payload) {
    var iframe = payload.iframe,
        canvas = payload.canvas;
    var oIframwWindow = iframe.getWindow();
    var jsPDF = oIframwWindow.jspdf.jsPDF;
    var doc = new jsPDF("", "pt", "a4");
    var image = canvas.toDataURL("image/jpeg", 1.0); // paper size
    // https://web.archive.org/web/20200906132355/https://prawnpdf.org/docs/0.11.1/Prawn/Document/PageGeometry.html

    var _ratio = Object(ratio_js__WEBPACK_IMPORTED_MODULE_3__["default"])(canvas.width, canvas.height, 595.28, 841.89),
        newWH = _ratio.newWH,
        newWHLoc = _ratio.newWHLoc;

    doc.addImage(image, "JPEG", newWHLoc.x, newWHLoc.y, newWH.w, newWH.h);
    doc.save("test.pdf");
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useImperativeHandle"])(ref, function () {
    download: (function () {});
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_organisms_HTMLToCanvas__WEBPACK_IMPORTED_MODULE_4__["default"], Object(reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    onCanvas: handleCanvas,
    ref: handleRefCanvas,
    jsArr: [getAsset("jspdf")]
  }));
};

_s(HTMLToPDF, "U7eCHviuayJRXMYRmtNxmbPztdU=", false, function () {
  return [react__WEBPACK_IMPORTED_MODULE_1__["useImperativeHandle"]];
});

_c = HTMLToPDF;
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/_c2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(HTMLToPDF));

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
//# sourceMappingURL=main.4e3bc679294ae6ad6484.hot-update.js.map