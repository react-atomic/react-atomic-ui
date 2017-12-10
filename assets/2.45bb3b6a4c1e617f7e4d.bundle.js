webpackJsonp([2],{

/***/ 667:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFixed = exports.isOnScreen = exports.getPositionString = exports.alignUI = exports.default = undefined;

var _alignUI = __webpack_require__(880);

Object.defineProperty(exports, 'alignUI', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_alignUI).default;
  }
});

var _getPositionString = __webpack_require__(886);

Object.defineProperty(exports, 'getPositionString', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getPositionString).default;
  }
});

var _isOnScreen = __webpack_require__(762);

Object.defineProperty(exports, 'isOnScreen', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isOnScreen).default;
  }
});

var _isFixed = __webpack_require__(763);

Object.defineProperty(exports, 'isFixed', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isFixed).default;
  }
});

var _getWindowOffset = __webpack_require__(761);

var _getWindowOffset2 = _interopRequireDefault(_getWindowOffset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _getWindowOffset2.default;

/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var positions = {
    TL: 'tl',
    TR: 'tr',
    BL: 'bl',
    BR: 'br',
    TC: 'tc',
    RC: 'rc',
    BC: 'bc',
    LC: 'lc',
    CC: 'cc'
};

exports.default = positions;
module.exports = exports['default'];

/***/ }),

/***/ 761:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _getScrollInfo = __webpack_require__(62);

var _getScrollInfo2 = _interopRequireDefault(_getScrollInfo);

var _getoffset = __webpack_require__(36);

var _getoffset2 = _interopRequireDefault(_getoffset);

var _isOnScreen = __webpack_require__(762);

var _isOnScreen2 = _interopRequireDefault(_isOnScreen);

var _isFixed = __webpack_require__(763);

var _isFixed2 = _interopRequireDefault(_isFixed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var calWindowOffset = function calWindowOffset(domInfo, scrollInfo) {
    var _distanceFlip;

    var distance = {};
    distance.top = domInfo.top - scrollInfo.top;
    distance.right = scrollInfo.right - domInfo.right;
    distance.bottom = scrollInfo.bottom - domInfo.bottom;
    distance.left = domInfo.left - scrollInfo.left;
    var distanceFlip = (_distanceFlip = {}, _defineProperty(_distanceFlip, distance.top, 't'), _defineProperty(_distanceFlip, distance.right, 'r'), _defineProperty(_distanceFlip, distance.bottom, 'b'), _defineProperty(_distanceFlip, distance.left, 'l'), _distanceFlip);
    var maxDistance = Math.max(distance.top, distance.right, distance.bottom, distance.left);
    var firstKey = distanceFlip[maxDistance];
    var secondKey = void 0;
    var locs = [firstKey + 'c'];
    if (firstKey === 't' || firstKey === 'b') {
        var _distanceFlip2;

        distanceFlip = (_distanceFlip2 = {}, _defineProperty(_distanceFlip2, distance.right, 'r'), _defineProperty(_distanceFlip2, distance.left, 'l'), _distanceFlip2);
        secondKey = distanceFlip[Math.max(distance.left, distance.right)];
    } else {
        var _distanceFlip3;

        distanceFlip = (_distanceFlip3 = {}, _defineProperty(_distanceFlip3, distance.top, 't'), _defineProperty(_distanceFlip3, distance.bottom, 'b'), _distanceFlip3);
        secondKey = firstKey;
        firstKey = distanceFlip[Math.max(distance.top, distance.bottom)];
    }
    locs.push(firstKey + secondKey);
    var tb = firstKey;
    var lr = secondKey;
    return {
        locs: locs,
        tb: tb,
        lr: lr
    };
};

var getWindowOffset = function getWindowOffset(dom) {
    if (!dom) {
        console.error('getWindowOffset not assign dom');
        console.trace();
        return false;
    }
    var scrollInfo = (0, _getScrollInfo2.default)();
    var domInfo = (0, _isOnScreen2.default)((0, _getoffset2.default)(dom), scrollInfo);
    domInfo.isFixed = (0, _isFixed2.default)(dom);
    if (!domInfo.isFixed && !domInfo.isOnScreen) {
        console.warn('Dom is not in screen', { dom: dom, domInfo: domInfo, scrollInfo: scrollInfo });
        return false;
    }
    var cookScrollInfo = _extends({}, scrollInfo);
    if (domInfo.isFixed) {
        cookScrollInfo.top = 0;
        cookScrollInfo.right = scrollInfo.scrollNodeWidth;
        cookScrollInfo.bottom = scrollInfo.scrollNodeHeight;
        cookScrollInfo.left = 0;
    }
    return _extends({ domInfo: domInfo, scrollInfo: scrollInfo }, calWindowOffset(domInfo, cookScrollInfo));
};

exports.default = getWindowOffset;
module.exports = exports['default'];

/***/ }),

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var isOnScreen = function isOnScreen(domInfo, scrollInfo) {
    var margin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    domInfo.atTop = domInfo.bottom <= scrollInfo.top + margin;
    domInfo.atRight = domInfo.left >= scrollInfo.right - margin;
    domInfo.atBottom = domInfo.top >= scrollInfo.bottom - margin;
    domInfo.atLeft = domInfo.right <= scrollInfo.left + margin;
    domInfo.isOnScreen = !(domInfo.atTop || domInfo.atRight || domInfo.atBottom || domInfo.atLeft);
    return domInfo;
};

exports.default = isOnScreen;
module.exports = exports['default'];

/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getStyle = __webpack_require__(882);

var _getStyle2 = _interopRequireDefault(_getStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isFixed = function isFixed(node) {
    if (!document.body.contains(node)) {
        console.warn(['Dom not exists in body', node]);
        return false;
    }
    var thisParent = node;
    while (thisParent.nodeName != 'BODY') {
        var position = (0, _getStyle2.default)(thisParent, 'position');
        if ('fixed' === position) {
            return true;
        }
        thisParent = thisParent.parentNode;
    }
    return false;
};

exports.default = isFixed;
module.exports = exports['default'];

/***/ }),

/***/ 880:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getoffset = __webpack_require__(36);

var _getoffset2 = _interopRequireDefault(_getoffset);

var _getAfterMove = __webpack_require__(881);

var _getAfterMove2 = _interopRequireDefault(_getAfterMove);

var _getWindowOffset = __webpack_require__(761);

var _getWindowOffset2 = _interopRequireDefault(_getWindowOffset);

var _alignWith = __webpack_require__(883);

var _alignWith2 = _interopRequireDefault(_alignWith);

var _isFullOnScreen = __webpack_require__(885);

var _isFullOnScreen2 = _interopRequireDefault(_isFullOnScreen);

var _positions = __webpack_require__(721);

var _positions2 = _interopRequireDefault(_positions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAlignWithLoc = function getAlignWithLoc(toLoc) {
    var loc = void 0;
    switch (toLoc) {
        case _positions2.default.TL:
            loc = _positions2.default.TR;
            break;
        case _positions2.default.TR:
            loc = _positions2.default.TL;
            break;
        case _positions2.default.BL:
            loc = _positions2.default.BR;
            break;
        case _positions2.default.BR:
            loc = _positions2.default.BL;
            break;
        default:
            loc = toLoc;
            break;
    }
    return loc;
};

var alignUI = function alignUI(targetEl, floatEl, toLoc, disableAutoLoc) {
    if (!targetEl) {
        console.error('targetEl was empty');
        console.trace();
        return false;
    }
    var targetInfo = void 0;
    var winInfo = void 0;
    var locs = [];
    if (toLoc) {
        locs.push(toLoc);
    }
    if (!disableAutoLoc) {
        winInfo = (0, _getWindowOffset2.default)(targetEl);
        if (!winInfo) {
            console.error('get windows offset failed');
        } else {
            targetInfo = winInfo.domInfo;
            locs = locs.concat(winInfo.locs);
        }
    }
    if (!targetInfo) {
        targetInfo = (0, _getoffset2.default)(targetEl);
    }
    if (!locs.length) {
        console.error('Not set any locs', toLoc);
        return;
    }
    var loc = void 0;
    var move = void 0;
    var floatInfo = (0, _getoffset2.default)(floatEl);
    locs.some(function (locItem) {
        toLoc = locItem;
        loc = getAlignWithLoc(toLoc);
        move = (0, _alignWith2.default)(targetInfo, floatInfo, loc);
        if (!winInfo) {
            return true;
        } else {
            var movePos = (0, _getAfterMove2.default)(floatInfo, move);
            var bFullOnScreen = (0, _isFullOnScreen2.default)(movePos, winInfo.scrollInfo);
            if (bFullOnScreen) {
                return true;
            } else {
                return false;
            }
        }
    });
    var result = {
        loc: loc,
        toLoc: toLoc,
        move: move
    };
    //console.log(result);
    return result;
};

exports.default = alignUI;
module.exports = exports['default'];

/***/ }),

/***/ 881:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var getAfterMove = function getAfterMove(domInfo, moveXY) {
    var width = domInfo.right - domInfo.left;
    var height = domInfo.bottom - domInfo.top;
    var info = {
        top: moveXY[1],
        right: moveXY[0] + width,
        bottom: moveXY[1] + height,
        left: moveXY[0]
    };
    return info;
};

exports.default = getAfterMove;
module.exports = exports['default'];

/***/ }),

/***/ 882:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var getStyle = function getStyle(el, styleKey) {
    if ('undefined' === typeof document) {
        return;
    }
    var doc = document;
    var styleValue = '';
    if (el.currentStyle) {
        styleValue = el.currentStyle[styleKey];
    } else if (doc.defaultView && doc.defaultView.getComputedStyle) {
        styleValue = doc.defaultView.getComputedStyle(el, null).getPropertyValue(styleKey);
    }
    if (styleValue && styleValue.toLowerCase) {
        return styleValue.toLowerCase();
    } else {
        return styleValue;
    }
};

exports.default = getStyle;
module.exports = exports['default'];

/***/ }),

/***/ 883:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getAlignTargetXY = __webpack_require__(884);

var _getAlignTargetXY2 = _interopRequireDefault(_getAlignTargetXY);

var _positions = __webpack_require__(721);

var _positions2 = _interopRequireDefault(_positions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var alignWith = function alignWith(targetInfo, floatElInfo, loc) {
    var xy = (0, _getAlignTargetXY2.default)(targetInfo, loc);
    var width = floatElInfo.right - floatElInfo.left;
    var height = floatElInfo.bottom - floatElInfo.top;
    var moveXY = void 0;
    switch (loc) {
        case _positions2.default.TL:
            moveXY = [xy[0], xy[1] - height];
            break;
        case _positions2.default.TR:
            moveXY = [xy[0] - width, xy[1] - height];
            break;
        case _positions2.default.BL:
            moveXY = [xy[0], xy[1]];
            break;
        case _positions2.default.BR:
            moveXY = [xy[0] - width, xy[1]];
            break;
        case _positions2.default.TC:
            moveXY = [xy[0] - Math.floor(width / 2), xy[1] - height];
            break;
        case _positions2.default.RC:
            moveXY = [xy[0], xy[1] - Math.floor(height / 2)];
            break;
        case _positions2.default.BC:
            moveXY = [xy[0] - Math.floor(width / 2), xy[1]];
            break;
        case _positions2.default.LC:
            moveXY = [xy[0] - width, xy[1] - Math.floor(height / 2)];
            break;
        case _positions2.default.CC:
            moveXY = [xy[0] - Math.floor(width / 2), xy[1] - Math.floor(height / 2)];
            break;
        default:
            console.error('Not support align type.');
            break;
    }
    return moveXY;
};

exports.default = alignWith;
module.exports = exports['default'];

/***/ }),

/***/ 884:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _positions = __webpack_require__(721);

var _positions2 = _interopRequireDefault(_positions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAlignTargetXY = function getAlignTargetXY(domInfo, loc) {
    var xy = void 0;
    var width = domInfo.right - domInfo.left;
    var height = domInfo.bottom - domInfo.top;
    switch (loc) {
        case _positions2.default.TL:
            xy = [domInfo.left, domInfo.top];
            break;
        case _positions2.default.TR:
            xy = [domInfo.right, domInfo.top];
            break;
        case _positions2.default.BL:
            xy = [domInfo.left, domInfo.bottom];
            break;
        case _positions2.default.BR:
            xy = [domInfo.right, domInfo.bottom];
            break;
        case _positions2.default.TC:
            xy = [domInfo.left + Math.floor(width / 2), domInfo.top];
            break;
        case _positions2.default.RC:
            xy = [domInfo.right, domInfo.top + Math.floor(height / 2)];
            break;
        case _positions2.default.BC:
            xy = [domInfo.left + Math.floor(width / 2), domInfo.bottom];
            break;
        case _positions2.default.LC:
            xy = [domInfo.left, domInfo.top + Math.floor(height / 2)];
            break;
        case _positions2.default.CC:
            xy = [domInfo.left + Math.floor(width / 2), domInfo.top + Math.floor(height / 2)];
            break;
        default:
            console.error('Not support align type. [' + loc + ']');
            break;
    }
    return xy;
};

exports.default = getAlignTargetXY;
module.exports = exports['default'];

/***/ }),

/***/ 885:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var isFullOnScreen = function isFullOnScreen(domInfo, scrollInfo) {
    var bool = domInfo.top > scrollInfo.top && domInfo.right < scrollInfo.right && domInfo.bottom < scrollInfo.bottom && domInfo.left > scrollInfo.left;
    return bool;
};

exports.default = isFullOnScreen;
module.exports = exports['default'];

/***/ }),

/***/ 886:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getObjectValue = __webpack_require__(5);

var _getObjectValue2 = _interopRequireDefault(_getObjectValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var position = {
    tl: 'top left',
    tr: 'top right',
    bl: 'bottom left',
    br: 'bottom right',
    tc: 'top center',
    rc: 'right center',
    bc: 'bottom center',
    lc: 'left center'
};

var getPositionString = function getPositionString(loc) {
    return (0, _getObjectValue2.default)(position, [loc]);
};

exports.default = getPositionString;
module.exports = exports['default'];

/***/ })

});