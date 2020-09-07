webpackHotUpdate("main",{

/***/ "../react-atomic-organism/packages/organism-react-html2canvas/build/es/ui/organisms/HTMLToCanvas.js":
/*!**********************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-html2canvas/build/es/ui/organisms/HTMLToCanvas.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_iframe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-iframe */ "../react-atomic-organism/packages/organism-react-html2canvas/node_modules/organism-react-iframe/build/es/src/index.js");
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! get-object-value */ "../react-atomic-organism/packages/organism-react-html2canvas/node_modules/get-object-value/build/es/src/index.js");
/* harmony import */ var call_func__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! call-func */ "../react-atomic-organism/packages/organism-react-html2canvas/node_modules/call-func/build/es/src/index.js");
var _s = $RefreshSig$();





var defaultAssets = {
  "html2canvas.min.js": "https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.7/dist/html2canvas.min.js"
};

var getAsset = function getAsset(file) {
  return Object(get_object_value__WEBPACK_IMPORTED_MODULE_2__["default"])(defaultAssets, [file]);
};

var initialContent = function initialContent(jsArr) {
  return "\n<html>\n<body>\n  <script src=\"".concat(getAsset("html2canvas.min.js"), "\"></script>\n  ").concat((jsArr || []).map(function (js) {
    return "<script src=\"".concat(js, "\"></script>");
  }), "\n</body>\n</html>\n");
};

var HTMLToCanvas = function HTMLToCanvas(props, ref) {
  _s();

  var children = props.children,
      jsArr = props.jsArr,
      onCanvas = props.onCanvas;
  var iframe = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var preview = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var canvas = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _timer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"])(ref, function () {
    getCanvas: (function () {
      if (canvas.current) {
        return canvas.current;
      } else {
        console.warn("canvas not ready.");
      }
    });
  });

  var handleIframe = function handleIframe(el) {
    return iframe.current = el;
  };

  var handlePreview = function handlePreview(el) {
    return preview.current = el;
  };

  var handleLoad = function handleLoad() {
    var oIframe = iframe.current;
    _timer.current = setTimeout(function () {
      var oIframwWindow = oIframe.getWindow();
      var html2canvas = oIframwWindow.html2canvas;
      html2canvas(oIframe.root).then(function (dCanvas) {
        canvas.current = dCanvas;
        Object(call_func__WEBPACK_IMPORTED_MODULE_3__["default"])(onCanvas, [{
          iframe: oIframe,
          canvas: dCanvas
        }]);
        preview.current.innerHTML = '';
        preview.current.appendChild(dCanvas);
      });
    }, 1000);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_iframe__WEBPACK_IMPORTED_MODULE_1__["default"], {
    autoHeight: true,
    initialContent: initialContent(jsArr),
    onLoad: handleLoad,
    ref: handleIframe
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: handlePreview,
    className: "preivew"
  }));
};

_s(HTMLToCanvas, "sXiyxOEGeNM8Kh6x48TQC+Xy2ig=", false, function () {
  return [react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"]];
});

_c = HTMLToCanvas;
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/_c2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(HTMLToCanvas));

var _c, _c2;

$RefreshReg$(_c, "HTMLToCanvas");
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
//# sourceMappingURL=main.b9d5683bb9df2f5a10cd.hot-update.js.map