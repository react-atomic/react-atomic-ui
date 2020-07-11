webpackHotUpdate("main",{

/***/ "../react-atomic-organism/packages/organism-react-spotlight/build/es/src/cleanClass.js":
/*!*********************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-spotlight/build/es/src/cleanClass.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var class_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-lib */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/class-lib/build/src/index.js");
/* harmony import */ var class_lib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(class_lib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var css_query_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-query-selector */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/css-query-selector/build/es/src/index.js");



var cleanClass = function cleanClass(className) {
  var allEl = css_query_selector__WEBPACK_IMPORTED_MODULE_1__["default"].all('.' + className);
  allEl.forEach(function (el) {
    if (el instanceof SVGElement) {
      el.setAttribute('class', Object(class_lib__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(el.getAttribute('class'), className));
    } else {
      el.className = Object(class_lib__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(el.className, className);
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (cleanClass);

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-spotlight/build/es/src/cleanZIndex.js":
/*!**********************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-spotlight/build/es/src/cleanZIndex.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var get_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! get-style */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/get-style/build/src/index.js");
/* harmony import */ var get_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(get_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setClass */ "../react-atomic-organism/packages/organism-react-spotlight/build/es/src/setClass.js");



var cleanZIndex = function cleanZIndex(node) {
  var classCleanZIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'react-spotlight-clean-zindex';
  var classShowEl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var thisParent = node.parentNode;

  if (!thisParent) {
    return;
  }

  var isFindFixedParent;

  while (thisParent && thisParent.nodeName != 'BODY') {
    var zIndex = get_style__WEBPACK_IMPORTED_MODULE_0___default()(thisParent, 'z-index');

    if (zIndex && 'auto' !== zIndex) {
      var position = get_style__WEBPACK_IMPORTED_MODULE_0___default()(thisParent, 'position');

      if ('fixed' !== position || !classShowEl) {
        Object(_setClass__WEBPACK_IMPORTED_MODULE_1__["default"])(thisParent, [classCleanZIndex]);
      } else if ('fixed' === position) {
        if (!isFindFixedParent) {
          isFindFixedParent = true;
          Object(_setClass__WEBPACK_IMPORTED_MODULE_1__["default"])(thisParent, [classShowEl]);
        }
      }
    }

    thisParent = thisParent.parentNode;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (cleanZIndex);

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-spotlight/build/es/src/index.js":
/*!****************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-spotlight/build/es/src/index.js ***!
  \****************************************************************************************/
/*! exports provided: default, LightBox, cleanClass, cleanZIndex, setClass, showEl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_organisms_Spotlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/organisms/Spotlight */ "../react-atomic-organism/packages/organism-react-spotlight/build/es/ui/organisms/Spotlight.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ui_organisms_Spotlight__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ui_molecules_LightBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/molecules/LightBox */ "../react-atomic-organism/packages/organism-react-spotlight/build/es/ui/molecules/LightBox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LightBox", function() { return _ui_molecules_LightBox__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _cleanClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanClass */ "../react-atomic-organism/packages/organism-react-spotlight/build/es/src/cleanClass.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cleanClass", function() { return _cleanClass__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _cleanZIndex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cleanZIndex */ "../react-atomic-organism/packages/organism-react-spotlight/build/es/src/cleanZIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cleanZIndex", function() { return _cleanZIndex__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _setClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setClass */ "../react-atomic-organism/packages/organism-react-spotlight/build/es/src/setClass.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setClass", function() { return _setClass__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _showEl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./showEl */ "../react-atomic-organism/packages/organism-react-spotlight/build/es/src/showEl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showEl", function() { return _showEl__WEBPACK_IMPORTED_MODULE_5__["default"]; });


 // library






/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-spotlight/build/es/src/setClass.js":
/*!*******************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-spotlight/build/es/src/setClass.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var class_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-lib */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/class-lib/build/src/index.js");
/* harmony import */ var class_lib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(class_lib__WEBPACK_IMPORTED_MODULE_0__);


var setClass = function setClass(node, classes) {
  if (node instanceof SVGElement) {
    var thisClass = Object(class_lib__WEBPACK_IMPORTED_MODULE_0__["mixClass"])(node.getAttribute('class'), classes);
    node.setAttribute('class', thisClass);
  } else {
    node.className = Object(class_lib__WEBPACK_IMPORTED_MODULE_0__["mixClass"])(node.className, classes);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (setClass);

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-spotlight/build/es/src/showEl.js":
/*!*****************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-spotlight/build/es/src/showEl.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var get_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! get-style */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/get-style/build/src/index.js");
/* harmony import */ var get_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(get_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setClass */ "../react-atomic-organism/packages/organism-react-spotlight/build/es/src/setClass.js");



var addSvgClass = function addSvgClass(node, classes) {
  Object(_setClass__WEBPACK_IMPORTED_MODULE_1__["default"])(node, classes);
  var thisParent = node.parentNode;

  if (!thisParent) {
    return;
  }

  while (thisParent.nodeName != "BODY") {
    // svg always in lower case
    if (thisParent.nodeName.toLowerCase() === "svg") {
      Object(_setClass__WEBPACK_IMPORTED_MODULE_1__["default"])(thisParent, classes);
      break;
    }

    thisParent = thisParent.parentNode;

    if (!thisParent) {
      break;
    }
  }
};

var showEl = function showEl(node) {
  var classShowEl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "react-spotlight-show-el";
  var classRelative = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "react-spotlight-relative";
  var position = get_style__WEBPACK_IMPORTED_MODULE_0___default()(node, "position");
  var classes = [classShowEl];

  if ("static" === position) {
    classes.push(classRelative);
  }

  addSvgClass(node, classes);

  if (node && node instanceof SVGElement) {
    addSvgClass(node, classes);
  } else {
    Object(_setClass__WEBPACK_IMPORTED_MODULE_1__["default"])(node, classes);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (showEl);

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-spotlight/build/es/ui/molecules/LightBox.js":
/*!****************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-spotlight/build/es/ui/molecules/LightBox.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/hill/git/react-atomic-organism/packages/organism-react-spotlight/build/es/ui/molecules/LightBox.js'");

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-spotlight/build/es/ui/organisms/Spotlight.js":
/*!*****************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-spotlight/build/es/ui/organisms/Spotlight.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/hill/git/react-atomic-organism/packages/organism-react-spotlight/build/es/ui/organisms/Spotlight.js'");

/***/ })

})
//# sourceMappingURL=main.7ba0a014d161ae036311.hot-update.js.map