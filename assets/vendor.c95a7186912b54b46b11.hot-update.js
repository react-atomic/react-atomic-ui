webpackHotUpdate("vendor",{

/***/ "./node_modules/organism-react-popup/build/es/ui/organisms/PopupPool.js":
/*!******************************************************************************!*\
  !*** ./node_modules/organism-react-popup/build/es/ui/organisms/PopupPool.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutProperties */ "./node_modules/reshow-runtime/es/helpers/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! get-object-value */ "./node_modules/get-object-value/build/es/src/index.js");
/* harmony import */ var reshow_return__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-return */ "./node_modules/reshow-return/build/es/src/index.js");
/* harmony import */ var _src_stores_popupStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/stores/popupStore */ "./node_modules/organism-react-popup/build/es/src/stores/popupStore.js");







var keys = Object.keys;

var getPops = function getPops(nodes, name) {
  nodes = Object(get_object_value__WEBPACK_IMPORTED_MODULE_4__["default"])(nodes) || {};
  var pops = [];
  keys(nodes).map(function (key) {
    var node = nodes[key];
    var nodeProps = Object(get_object_value__WEBPACK_IMPORTED_MODULE_4__["default"])(node, ["props"], {});
    var toPool = nodeProps.toPool;

    if ((name || toPool) && toPool !== name) {
      return;
    }

    pops.push(Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["build"])(node)({
      key: key
    }));
  });
  return pops;
};

var PopupPool = function PopupPool(_ref) {
  var name = _ref.name,
      component = _ref.component,
      otherProps = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["name", "component"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reshow_return__WEBPACK_IMPORTED_MODULE_5__["default"], {
    stores: [_src_stores_popupStore__WEBPACK_IMPORTED_MODULE_6__["default"]],
    initStates: ["nodes"]
  }, function (_ref2) {
    var nodes = _ref2.nodes;
    var pops = getPops(nodes, name);

    if (pops.length) {
      return Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["build"])(component)(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: "popup-pool",
        ui: false
      }, otherProps), pops);
    } else {
      return null;
    }
  });
};

PopupPool.defaultProps = {
  component: react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["SemanticUI"]
};
/* harmony default export */ __webpack_exports__["default"] = (PopupPool);

/***/ })

})
//# sourceMappingURL=vendor.c95a7186912b54b46b11.hot-update.js.map