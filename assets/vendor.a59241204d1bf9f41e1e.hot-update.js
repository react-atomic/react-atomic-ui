webpackHotUpdate("vendor",{

/***/ "../react-atomic-organism/packages/organism-react-popup/node_modules/set-object-value/build/es/src/index.js":
/*!******************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/node_modules/set-object-value/build/es/src/index.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var replaceValue = function replaceValue(obj, arrKey, val, isAppend) {
  var last = arrKey.pop();
  arrKey.forEach(function (k) {
    obj[k] = obj[k] || {};
    obj = obj[k];
  });

  if (isAppend && (!obj[last] || !obj[last].push)) {
    if (!obj[last]) {
      obj[last] = [val];
    } else {
      obj[last] = [obj[last], val];
    }
  } else if (isAppend && obj[last].push) {
    obj[last].push(val);
  } else {
    obj[last] = val;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (replaceValue);

/***/ })

})
//# sourceMappingURL=vendor.a59241204d1bf9f41e1e.hot-update.js.map