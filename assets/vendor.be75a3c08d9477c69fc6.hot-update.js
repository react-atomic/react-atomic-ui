webpackHotUpdate("vendor",{

/***/ "../react-atomic-organism/packages/organism-react-carousel/node_modules/organism-react-animate/build/es/ui/organisms/Change.js":
/*!*************************************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-carousel/node_modules/organism-react-animate/build/es/ui/organisms/Change.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/extends */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/extends.js");
/* harmony import */ var reshow_runtime_es_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/slicedToArray */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/slicedToArray.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutProperties */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/reshow-runtime/es/helpers/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var call_func__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! call-func */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/call-func/build/es/src/index.js");
/* harmony import */ var _organisms_Animate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../organisms/Animate */ "../react-atomic-organism/packages/organism-react-carousel/node_modules/organism-react-animate/build/es/ui/organisms/Animate.js");







var Change = function Change(props) {
  var propsChildren = props.children,
      onExited = props.onExited,
      otherProps = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["children", "onExited"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(propsChildren),
      _useState2 = Object(reshow_runtime_es_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      children = _useState2[0],
      setChildren = _useState2[1];

  var mount = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(false);
  var nextChildren = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(false);

  var handleExited = function handleExited(node) {
    if (mount.current) {
      setChildren(function (prevChildren) {
        if (!prevChildren) {
          return nextChildren.current;
        } else {
          Object(call_func__WEBPACK_IMPORTED_MODULE_4__["default"])(onExited, [node]);
          return prevChildren;
        }
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    mount.current = true;
    nextChildren.current = propsChildren;
    console.log({
      propsChildren: propsChildren
    });

    if (children !== propsChildren) {
      setChildren(null);
    } else {
      setChildren(propsChildren);
    }

    return function () {
      mount.current = false;
    };
  }, [propsChildren]);
  return Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_organisms_Animate__WEBPACK_IMPORTED_MODULE_5__["default"], Object(reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, otherProps, {
      onExited: handleExited
    }), children);
  }, [children]);
};

/* harmony default export */ __webpack_exports__["default"] = (Change);

/***/ })

})
//# sourceMappingURL=vendor.be75a3c08d9477c69fc6.hot-update.js.map