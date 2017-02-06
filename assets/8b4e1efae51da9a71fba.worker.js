/******/ (function(modules) { // webpackBootstrap
/******/ 	this["webpackChunk"] = function webpackChunkCallback(chunkIds, moreModules) {
/******/ 		for(var moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		while(chunkIds.length)
/******/ 			installedChunks[chunkIds.pop()] = 1;
/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded chunks
/******/ 	// "1" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		1: 1
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "1" is the signal for "already loaded"
/******/ 		if(!installedChunks[chunkId]) {
/******/ 			importScripts("" + chunkId + "." + "8b4e1efae51da9a71fba" + ".worker.js");
/******/ 		}
/******/ 		return Promise.resolve();
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./assets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _isArray = Array.isArray;

var getObjectValue = function getObjectValue(o, path, defaultValue) {
    if (!o || !_isArray(path)) {
        return defaultValue;
    }
    var current = o;
    path.every(function (a) {
        if (current[a]) {
            current = current[a];
            return true;
        } else {
            current = defaultValue;
            return false;
        }
    });
    return current;
};

exports.default = getObjectValue;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _getObjectValue = __webpack_require__(1);

var _getObjectValue2 = _interopRequireDefault(_getObjectValue);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
}

var ws;
var callbacks = [];
var post;

try {
    post = postMessage;
    post({ type: "ready" });
} catch (e) {
    post = function post(data) {
        var e = {
            data: data
        };
        callbacks.forEach(function (c) {
            c(e);
        });
    };
}
exports.default = {
    postMessage: function postMessage(data) {
        var e = {
            data: data
        };
        onmessage(e);
    },
    addEventListener: function addEventListener(type, callback) {
        callbacks.push(callback);
    }
};

onmessage = function onmessage(e) {
    var data = (0, _getObjectValue2.default)(e, ['data']);
    switch (data.type) {
        case 'initWs':
            initWs(data.ws);
            break;
        case 'ajaxGet':
            ajaxGet(data);
            break;
        case 'ajaxPost':
            ajaxPost(data);
            break;
    }
};

var ajaxGet = function ajaxGet(_ref) {
    var url = _ref.url,
        action = _ref.action;

    var params = (0, _getObjectValue2.default)(action, ['params'], {});
    __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(0)]; (function (req) {
        req.get(url).query(params.query).set('Accept', (0, _getObjectValue2.default)(params, ['accept'], 'application/json')).end(function (err, res) {
            var req = res.req,
                xhr = res.xhr,
                error = res.error,
                resetRes = _objectWithoutProperties(res, ['req', 'xhr', 'error']);

            post(_extends({}, action, {
                text: res.text,
                response: resetRes
            }));
        });
    }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe);
};

var ajaxPost = function ajaxPost(_ref2) {
    var url = _ref2.url,
        action = _ref2.action;

    var params = (0, _getObjectValue2.default)(action, ['params'], {});
    __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(0)]; (function (req) {
        req.post(url).send(params.query).set('Accept', (0, _getObjectValue2.default)(params, ['accept'], 'application/json')).end(function (err, res) {
            var req = res.req,
                xhr = res.xhr,
                error = res.error,
                resetRes = _objectWithoutProperties(res, ['req', 'xhr', 'error']);

            post(_extends({}, action, {
                text: res.text,
                response: resetRes
            }));
        });
    }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe);
};

var initWs = function initWs(url) {
    ws = new WebSocket(url);
    ws.onopen = function (e) {};
    ws.onerror = function (e) {};
    ws.onmessage = function (e) {
        post({ type: 'ws', text: e.data });
    };
};
module.exports = exports['default'];

/***/ })
/******/ ]);