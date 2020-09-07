webpackHotUpdate("vendor",{

/***/ "../react-atomic-organism/packages/organism-react-html2canvas/node_modules/ratio-js/build/es/src/index.js":
/*!****************************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-html2canvas/node_modules/ratio-js/build/es/src/index.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var fixX = function fixX(newWH, origWH) {
  var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var tmpH = newWH.w / (origWH.w / origWH.h);

  if (tmpH <= newWH.h || force) {
    tmpH = Math.floor(tmpH);
    var y = Math.floor((newWH.h - tmpH) / 2);
    newWH.h = tmpH;
    return {
      x: 0,
      y: y
    };
  } else {
    return fixY(newWH, origWH);
  }
};

var fixY = function fixY(newWH, origWH) {
  var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var tmpW = newWH.h * (origWH.w / origWH.h);

  if (tmpW <= newWH.w || force) {
    tmpW = Math.floor(tmpW);
    var x = Math.floor((newWH.w - tmpW) / 2);
    newWH.w = tmpW;
    return {
      x: x,
      y: 0
    };
  } else {
    return fixX(newWH, origWH);
  }
};

var getNextLoc = function getNextLoc(toWH, origWH, maxWH) {
  var nextLoc = {
    x: (toWH.w - origWH.w) / 2,
    y: (toWH.h - origWH.h) / 2
  };

  if (nextLoc.x < 0) {
    if (maxWH.w > toWH.w) {
      nextLoc.x = -((maxWH.w - toWH.w) / 2);
    } else {
      nextLoc.x = 0;
    }
  }

  if (nextLoc.y < 0) {
    if (maxWH.h > toWH.h) {
      nextLoc.y = -((maxWH.h - toWH.h) / 2);
    } else {
      nextLoc.y = 0;
    }
  }

  return nextLoc;
};

var ratio = function ratio(w, h, newW, newH) {
  var newWH = {
    w: newW,
    h: newH
  };
  var maxWH = {
    w: newW,
    h: newH
  };
  var toWH = {
    w: newW,
    h: newH
  };
  var origWH = {
    w: w,
    h: h
  };
  var newWHLoc;

  if (w > h) {
    newWHLoc = fixX(newWH, origWH);
    fixX(maxWH, origWH, true);
  } else {
    newWHLoc = fixY(newWH, origWH);
    fixY(maxWH, origWH, true);
  }

  var maxWHLoc = getNextLoc(toWH, maxWH, maxWH);
  var origWHLoc = getNextLoc(toWH, origWH, maxWH);
  return {
    newWHLoc: newWHLoc,
    maxWHLoc: maxWHLoc,
    origWHLoc: origWHLoc,
    newWH: newWH,
    maxWH: maxWH,
    origWH: origWH
  };
};

/* harmony default export */ __webpack_exports__["default"] = (ratio);

/***/ })

})
//# sourceMappingURL=vendor.6fe6923997ca38d20a29.hot-update.js.map