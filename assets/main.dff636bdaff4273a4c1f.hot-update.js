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

var HTMLToCanvasComp = function HTMLToCanvasComp(props, ref) {
  _s();

  var children = props.children,
      jsArr = props.jsArr,
      hasPreview = props.preview,
      hideHtml = props.hideHtml;
  var iframe = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var preview = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _timer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"])(ref, function () {
    return {
      getCanvas: function getCanvas() {},
      getIframe: function getIframe() {
        return iframe.current;
      }
    };
  });

  var handleIframe = function handleIframe(el) {
    return iframe.current = el;
  };

  var handlePreview = function handlePreview(el) {
    return preview.current = el;
  };

  var getCanvas = function getCanvas(onCanvas) {
    var oIframwWindow = oIframe.getWindow();
    var html2canvas = oIframwWindow.html2canvas;

    if (!html2canvas) {
      return;
    }

    html2canvas(oIframe.root, {
      useCORS: true
    }).then(function (dCanvas) {
      Object(call_func__WEBPACK_IMPORTED_MODULE_3__["default"])(onCanvas, [{
        iframe: oIframe,
        canvas: dCanvas
      }]);

      if (hasPreview && preview.current) {
        preview.current.innerHTML = "";
        preview.current.appendChild(dCanvas);
      }
    });
  };

  var handleLoad = function handleLoad() {
    var oIframe = iframe.current;

    if (_timer.current) {
      clearTimeout(_timer.current);
    }

    _timer.current = setTimeout(function () {}, 1000);
  };

  var oPreview;

  if (hasPreview) {
    oPreview = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      ref: handlePreview,
      className: "preivew"
    });
  }

  var iframeStyle = {};

  if (hideHtml) {
    iframeStyle = {
      position: 'absolute',
      top: -99999,
      left: -99999,
      opacity: 0
    };
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_iframe__WEBPACK_IMPORTED_MODULE_1__["default"], {
    autoHeight: true,
    style: iframeStyle,
    initialContent: initialContent(jsArr),
    onLoad: handleLoad,
    ref: handleIframe
  }, children), oPreview);
};

_s(HTMLToCanvasComp, "b4W6dO4dO2z4Skf53P1Gf89RUxU=", false, function () {
  return [react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"]];
});

_c = HTMLToCanvasComp;
var HTMLToCanvas = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(HTMLToCanvasComp);
_c2 = HTMLToCanvas;
HTMLToCanvas.defaultProps = {
  preview: false,
  hideHtml: false
};
/* harmony default export */ __webpack_exports__["default"] = (HTMLToCanvas);

var _c, _c2;

$RefreshReg$(_c, "HTMLToCanvasComp");
$RefreshReg$(_c2, "HTMLToCanvas");

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
//# sourceMappingURL=main.dff636bdaff4273a4c1f.hot-update.js.map