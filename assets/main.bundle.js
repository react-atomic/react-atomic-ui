/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + "." + "65fe50965c5d8c181f4a" + ".bundle.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./assets/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./build/src/client.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/src/client.js":
/*!*****************************!*\
  !*** ./build/src/client.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_app_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-app/client */ "./node_modules/reshow-app/client.js");
/* harmony import */ var _ui_pages_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/pages/index */ "./build/ui/pages/index.js");
/* harmony import */ var _i13n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i13n */ "./build/src/i13n.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(reshow_app_client__WEBPACK_IMPORTED_MODULE_0__["default"])(_ui_pages_index__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./build/src/i13n.js":
/*!***************************!*\
  !*** ./build/src/i13n.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var organism_react_i13n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! organism-react-i13n */ "./node_modules/organism-react-i13n/build/es/src/index.js");


var actionHandler = function actionHandler(state, action) {
  console.log("action", action);
  return state;
};

var impressionHandler = function impressionHandler(state, action) {
  console.log("view", state.get("pvid"));
  return state;
};

var initHandler = function initHandler(state, action) {
  console.log("init", state);
  return state;
};

Object(organism_react_i13n__WEBPACK_IMPORTED_MODULE_0__["i13nDispatch"])("config/set", {
  initHandler: initHandler,
  actionHandler: actionHandler,
  impressionHandler: impressionHandler
});

/***/ }),

/***/ "./build/ui/organisms/AjaxDownload.example.js":
/*!****************************************************!*\
  !*** ./build/ui/organisms/AjaxDownload.example.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-progress */ "./node_modules/organism-react-progress/build/es/src/index.js");
/* harmony import */ var organism_react_ajax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-ajax */ "./node_modules/organism-react-ajax/build/es/src/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var ajax_save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ajax-save */ "./node_modules/ajax-save/build/es/src/index.js");






var AjaxDownloadExample = function AjaxDownloadExample(props) {
  var url = "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: function onClick() {
      Object(organism_react_ajax__WEBPACK_IMPORTED_MODULE_2__["ajaxDispatch"])("ajaxGet", {
        responseType: ["blob"],
        url: url,
        callback: function callback(json, text, o) {
          Object(ajax_save__WEBPACK_IMPORTED_MODULE_4__["download"])(o.body, url.split("/").splice(-1)[0]);
        }
      });
    }
  }, "Ajax Download");
};

/* harmony default export */ __webpack_exports__["default"] = (AjaxDownloadExample);

/***/ }),

/***/ "./build/ui/organisms/AlertsNotifier.example.js":
/*!******************************************************!*\
  !*** ./build/ui/organisms/AlertsNotifier.example.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var organism_react_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-popup */ "./node_modules/organism-react-popup/build/es/src/index.js");


var _a;




var AlertsNotifierExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AlertsNotifierExample, _PureComponent);

  function AlertsNotifierExample() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = AlertsNotifierExample.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_2__["PopupClick"], {
      style: Styles.click,
      popup: function popup() {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_2__["AlertsNotifier"], {
          position: "bottom",
          alerts: [{
            type: "info",
            message: "test"
          }]
        });
      },
      component: _a || (_a = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null))
    }, "alert");
  };

  return AlertsNotifierExample;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (AlertsNotifierExample);
var Styles = {
  click: {
    color: "blue",
    textDecoration: "underline"
  }
};

/***/ }),

/***/ "./build/ui/organisms/Animation.example.js":
/*!*************************************************!*\
  !*** ./build/ui/organisms/Animation.example.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var organism_react_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-animate */ "./node_modules/organism-react-animate/build/es/src/index.js");



var hello = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Hello world!!");

var AnimationExample = /*#__PURE__*/function (_Component) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AnimationExample, _Component);

  function AnimationExample(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      dom: hello
    };
    return _this;
  }

  var _proto = AnimationExample.prototype;

  _proto.render = function render() {
    var _this2 = this;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(organism_react_animate__WEBPACK_IMPORTED_MODULE_2__["default"], {
      appear: "fadeInRight-3000",
      enter: "fadeInRight-3000",
      leave: "fadeOutRight-1000"
    }, this.state.dom), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#",
      style: {
        marginLeft: "10px"
      },
      onClick: function (e) {
        e.preventDefault();

        _this2.setState({
          dom: null
        });
      }.bind(this)
    }, "leave"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#",
      style: {
        marginLeft: "10px"
      },
      onClick: function (e) {
        e.preventDefault();

        _this2.setState({
          dom: hello
        });
      }.bind(this)
    }, "enter"));
  };

  return AnimationExample;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AnimationExample);

/***/ }),

/***/ "./build/ui/organisms/AnimationDelay.example.js":
/*!******************************************************!*\
  !*** ./build/ui/organisms/AnimationDelay.example.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var organism_react_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-animate */ "./node_modules/organism-react-animate/build/es/src/index.js");



var foo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Hello");
var bar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "world!!");

var AnimationDelayExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AnimationDelayExample, _PureComponent);

  function AnimationDelayExample(props) {
    var _this;

    _this = _PureComponent.call(this, props) || this;
    _this.state = {
      foo: foo,
      bar: bar
    };
    return _this;
  }

  var _proto = AnimationDelayExample.prototype;

  _proto.render = function render() {
    var _this2 = this;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(organism_react_animate__WEBPACK_IMPORTED_MODULE_2__["default"], {
      appear: "fadeInRight-3000",
      enter: "fadeInRight-3000",
      leave: "fadeOutRight-1000"
    }, this.state.foo), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(organism_react_animate__WEBPACK_IMPORTED_MODULE_2__["default"], {
      appear: "fadeInRight-3000-500",
      enter: "fadeInRight-3000-500",
      leave: "fadeOutRight-1000-500"
    }, this.state.bar), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#",
      style: {
        marginLeft: "10px"
      },
      onClick: function (e) {
        e.preventDefault();

        _this2.setState({
          foo: null,
          bar: null
        });
      }.bind(this)
    }, "leave"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#",
      style: {
        marginLeft: "10px"
      },
      onClick: function (e) {
        e.preventDefault();

        _this2.setState({
          foo: foo,
          bar: bar
        });
      }.bind(this)
    }, "enter"));
  };

  return AnimationDelayExample;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (AnimationDelayExample);

/***/ }),

/***/ "./build/ui/organisms/AnimationReplace.example.js":
/*!********************************************************!*\
  !*** ./build/ui/organisms/AnimationReplace.example.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var organism_react_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-animate */ "./node_modules/organism-react-animate/build/es/src/index.js");


/**
 * Production please use
 * import Animate from "organism-react-animate"
 */



var AnimationReplaceExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AnimationReplaceExample, _PureComponent);

  function AnimationReplaceExample() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = AnimationReplaceExample.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(organism_react_animate__WEBPACK_IMPORTED_MODULE_2__["Replace"], {
      enter: "fadeInRight-2000",
      leave: "fadeOutRight-1000",
      style: {
        minHeight: 30,
        overflow: "hidden"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        background: "#f4cc70"
      }
    }, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        background: "#de7a22"
      }
    }, "2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        background: "#20948b"
      }
    }, "3"));
  };

  return AnimationReplaceExample;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (AnimationReplaceExample);

/***/ }),

/***/ "./build/ui/organisms/AsciiDoc.example.js":
/*!************************************************!*\
  !*** ./build/ui/organisms/AsciiDoc.example.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var organism_react_asciidoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-asciidoc */ "./node_modules/organism-react-asciidoc/build/es/src/index.js");



var adoc = "\n:toc:\n:toc-placement!:\ntoc::[]\n\n= h1 - test\ntest\n\n== h2 - test2\n* Hello *world*\n\n== h2 - test3\n- [ ] option1\n- [*] option1\n";

var AsciidocDemo = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AsciidocDemo, _PureComponent);

  function AsciidocDemo() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = AsciidocDemo.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(organism_react_asciidoc__WEBPACK_IMPORTED_MODULE_2__["default"], {
      options: {
        doctype: "book"
      }
    }, adoc);
  };

  return AsciidocDemo;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (AsciidocDemo);

/***/ }),

/***/ "./build/ui/organisms/CarouselAnimation.example.js":
/*!*********************************************************!*\
  !*** ./build/ui/organisms/CarouselAnimation.example.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-carousel */ "./node_modules/organism-react-carousel/build/es/src/index.js");
var _Carousel, _Carousel2, _Carousel3, _Carousel4;





var CarouselAnimationExample = function CarouselAnimationExample(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__["CarouselAnimation"], {
    carouselAttr: {
      style: Styles.carousel
    },
    style: Styles.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: Styles.img,
    src: "https://c1.staticflickr.com/9/8567/16584613141_d984a3680a_b.jpg"
  })), _Carousel || (_Carousel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "https://live.staticflickr.com/7883/47562596261_cc18fc91b6_b.jpg"
  }))), _Carousel2 || (_Carousel2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], null, "3")), _Carousel3 || (_Carousel3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], null, "4")), _Carousel4 || (_Carousel4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], null, "5")));
};

/* harmony default export */ __webpack_exports__["default"] = (CarouselAnimationExample);
var Styles = {
  container: {
    margin: "0 10%"
  },
  carousel: {
    width: "100%",
    height: 300,
    background: "#00558B"
  },
  img: {
    maxWidth: "100%",
    verticalAlign: "bottom"
  }
};

/***/ }),

/***/ "./build/ui/organisms/CarouselAnimationHideThumb.example.js":
/*!******************************************************************!*\
  !*** ./build/ui/organisms/CarouselAnimationHideThumb.example.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-carousel */ "./node_modules/organism-react-carousel/build/es/src/index.js");
var _Carousel, _Carousel2, _Carousel3, _Carousel4;




var CarouselAnimationExample = function CarouselAnimationExample(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselAnimation"], {
    carouselAttr: {
      style: Styles.carousel
    },
    style: Styles.container,
    hideThumb: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: Styles.img,
    src: "https://c1.staticflickr.com/9/8567/16584613141_d984a3680a_b.jpg"
  })), _Carousel || (_Carousel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], null, "2")), _Carousel2 || (_Carousel2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], null, "3")), _Carousel3 || (_Carousel3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], null, "4")), _Carousel4 || (_Carousel4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], null, "5")));
};

/* harmony default export */ __webpack_exports__["default"] = (CarouselAnimationExample);
var Styles = {
  container: {
    margin: "0 10%"
  },
  carousel: {
    width: "100%",
    height: 300,
    background: "#00558B"
  },
  img: {
    maxWidth: "100%",
    verticalAlign: "bottom"
  }
};

/***/ }),

/***/ "./build/ui/organisms/CarouselSlide.example.js":
/*!*****************************************************!*\
  !*** ./build/ui/organisms/CarouselSlide.example.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-carousel */ "./node_modules/organism-react-carousel/build/es/src/index.js");
var _Carousel, _Carousel2, _Carousel3, _Carousel4;




var CarouselSlideExample = function CarouselSlideExample(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselSlide"], {
    carouselAttr: {
      style: Styles.carousel
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: Styles.img,
    src: "https://c1.staticflickr.com/9/8567/16584613141_d984a3680a_b.jpg"
  })), _Carousel || (_Carousel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], null, "2")), _Carousel2 || (_Carousel2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], null, "3")), _Carousel3 || (_Carousel3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], null, "4")), _Carousel4 || (_Carousel4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], null, "5")));
};

/* harmony default export */ __webpack_exports__["default"] = (CarouselSlideExample);
var Styles = {
  carousel: {
    width: 300,
    height: 300,
    background: "#00558B"
  }
};

/***/ }),

/***/ "./build/ui/organisms/Checkbox.example.js":
/*!************************************************!*\
  !*** ./build/ui/organisms/Checkbox.example.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var react_atomic_organism__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-atomic-organism */ "./node_modules/react-atomic-organism/build/es/src/index.js");


var _Form;





var CheckboxExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CheckboxExample, _PureComponent);

  function CheckboxExample() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = CheckboxExample.prototype;

  _proto.render = function render() {
    return _Form || (_Form = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_atomic_organism__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_atomic_organism__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
      type: "radio"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_atomic_organism__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
      toggle: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_atomic_organism__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
      slider: true
    })));
  };

  return CheckboxExample;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (CheckboxExample);

/***/ }),

/***/ "./build/ui/organisms/CodeEditor.example.js":
/*!**************************************************!*\
  !*** ./build/ui/organisms/CodeEditor.example.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_codeeditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-codeeditor */ "./node_modules/organism-react-codeeditor/build/es/src/index.js");



var CodeEditorExample = function CodeEditorExample(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return Object(organism_react_codeeditor__WEBPACK_IMPORTED_MODULE_1__["openCodeEditor"])();
    }
  }, "open");
};

/* harmony default export */ __webpack_exports__["default"] = (CodeEditorExample);

/***/ }),

/***/ "./build/ui/organisms/CodeExample.example.js":
/*!***************************************************!*\
  !*** ./build/ui/organisms/CodeExample.example.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-code */ "./node_modules/organism-react-code/build/es/src/index.js");
/* harmony import */ var _raw_loader_ui_organisms_CodeExample_example__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/CodeExample.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CodeExample.example.jsx");
var _CodeExample;


/**
 * Production please use
 * import CodeExample from 'organism-react-code'
 */


/**
 * Your source code.
 * npm i raw-loader
 */



var CodeExampleExample = function CodeExampleExample(props) {
  return _CodeExample || (_CodeExample = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_1__["default"], {
    code: _raw_loader_ui_organisms_CodeExample_example__WEBPACK_IMPORTED_MODULE_2__["default"],
    header: "Test Header",
    git: "react-atomic/react-atomic-organism/tree/master/packages/organism-react-code/",
    npm: "organism-react-code"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Test Demo Area")));
};

/* harmony default export */ __webpack_exports__["default"] = (CodeExampleExample);

/***/ }),

/***/ "./build/ui/organisms/D3AreaChart.example.js":
/*!***************************************************!*\
  !*** ./build/ui/organisms/D3AreaChart.example.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_d3_axis_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-d3-axis-chart */ "./node_modules/organism-react-d3-axis-chart/build/es/src/index.js");


var data = [{
  values: [{
    x: "2019-01",
    y: 100
  }, {
    x: "2019-02",
    y: 450
  }, {
    x: "2019-03",
    y: 450
  }, {
    x: "2019-04",
    y: 0
  }, {
    x: "2019-05",
    y: 0
  }]
}];

var D3AreaChart = function D3AreaChart(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_d3_axis_chart__WEBPACK_IMPORTED_MODULE_1__["AreaChart"], {
    data: data,
    style: {
      maxHeight: 450
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (D3AreaChart);

/***/ }),

/***/ "./build/ui/organisms/D3BarChart.example.js":
/*!**************************************************!*\
  !*** ./build/ui/organisms/D3BarChart.example.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_d3_axis_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-d3-axis-chart */ "./node_modules/organism-react-d3-axis-chart/build/es/src/index.js");



var D3BarChart = function D3BarChart(props) {
  var data = {
    values: [{
      x: "2013-01",
      y: 53
    }, {
      x: "2013-02",
      y: 165
    }, {
      x: "2013-03",
      y: 269
    }]
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_d3_axis_chart__WEBPACK_IMPORTED_MODULE_1__["BarChart"], {
    data: data,
    style: {
      maxHeight: 450
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (D3BarChart);

/***/ }),

/***/ "./build/ui/organisms/D3LineChart.example.js":
/*!***************************************************!*\
  !*** ./build/ui/organisms/D3LineChart.example.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_d3_axis_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-d3-axis-chart */ "./node_modules/organism-react-d3-axis-chart/build/es/src/index.js");



var D3LineChart = function D3LineChart(props) {
  var data = [{
    values: [{
      x: "2013-01",
      y: 100
    }, {
      x: "2013-02",
      y: 450
    }, {
      x: "2013-01",
      y: 450
    }]
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_d3_axis_chart__WEBPACK_IMPORTED_MODULE_1__["LineChart"], {
    data: data,
    style: {
      maxHeight: 450
    },
    hideAxis: true,
    thresholds: [200]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (D3LineChart);

/***/ }),

/***/ "./build/ui/organisms/D3PieChart.example.js":
/*!**************************************************!*\
  !*** ./build/ui/organisms/D3PieChart.example.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_d3_piechart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-d3-piechart */ "./node_modules/organism-react-d3-piechart/build/es/src/index.js");



var D3PieChartExample = function D3PieChartExample(props) {
  var data = [{
    value: 10,
    label: "xxx"
  }, {
    value: 30,
    label: "yyy"
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_d3_piechart__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: data,
    style: {
      maxWidth: 300
    },
    unit: ""
  });
};

/* harmony default export */ __webpack_exports__["default"] = (D3PieChartExample);

/***/ }),

/***/ "./build/ui/organisms/D3Uml.example.js":
/*!*********************************************!*\
  !*** ./build/ui/organisms/D3Uml.example.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_d3_uml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-d3-uml */ "./node_modules/organism-react-d3-uml/build/es/src/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var react_atomic_organism__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-atomic-organism */ "./node_modules/react-atomic-organism/build/es/src/index.js");
var _Field;





var data = {
  tables: [{
    name: "table1",
    cols: ["t1-col1", "t1-col2"]
  }, {
    name: "table2",
    cols: ["t2-col1", "t2-col2"]
  }],
  conns: [{
    from: {
      table: "table1",
      col: "t1-col1"
    },
    to: {
      table: "table2",
      col: "t2-col2"
    }
  }]
};

var D3UmlExample = function D3UmlExample() {
  var uml = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isDisableCurve = _useState[0],
      setIsDisableCurve = _useState[1];

  var handleUml = function handleUml(el) {
    return uml.current = el;
  };

  var handleUpdate = function handleUpdate(e) {
    var t = e.currentTarget || {};
    var fm = t.form;
    uml.current.zoom.setXYK({
      x: fm.x.value || null,
      y: fm.y.value || null,
      k: fm.k.value || null
    });
  };

  var handleZoom = function handleZoom(e) {//  console.log(e.zoom.getXYK());
  };

  var isDisableDel;
  var isDisableMove;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_d3_uml__WEBPACK_IMPORTED_MODULE_1__["UMLGraph"], {
    onZoom: handleZoom,
    ref: handleUml,
    data: data,
    lineDefaultProps: {
      curve: !isDisableCurve
    },
    connsLocator: function connsLocator(d) {
      return d.conns;
    },
    connFromBoxGroupLocator: function connFromBoxGroupLocator(d) {
      return d.from.table;
    },
    connFromBoxLocator: function connFromBoxLocator(d) {
      return d.from.col;
    },
    connToBoxGroupLocator: function connToBoxGroupLocator(d) {
      return d.to.table;
    },
    connToBoxLocator: function connToBoxLocator(d) {
      return d.to.col;
    },
    onBoxWillDrag: function onBoxWillDrag(e) {
      return !isDisableMove.getChecked().input;
    },
    onLineDel: function onLineDel(e) {
      console.log({
        e: e
      });
      return !isDisableDel.getChecked().input;
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    style: {
      boxSizing: "border-box"
    },
    className: "equal width"
  }, _Field || (_Field = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Field"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    atom: "input",
    label: "x",
    name: "x"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    atom: "input",
    label: "y",
    name: "y"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    atom: "input",
    label: "k",
    name: "k"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Field"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_organism__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
    toggle: true,
    label: "disable curve",
    onChange: function onChange(_ref) {
      var checked = _ref.checked;
      setIsDisableCurve(checked);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_organism__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
    label: "disable line delete",
    ref: function ref(el) {
      return isDisableDel = el;
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_organism__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
    label: "disable node move",
    ref: function ref(el) {
      return isDisableMove = el;
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: handleUpdate
  }, "update")));
};

/* harmony default export */ __webpack_exports__["default"] = (D3UmlExample);

/***/ }),

/***/ "./build/ui/organisms/D3UmlPerf.example.js":
/*!*************************************************!*\
  !*** ./build/ui/organisms/D3UmlPerf.example.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_d3_uml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-d3-uml */ "./node_modules/organism-react-d3-uml/build/es/src/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var react_atomic_organism__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-atomic-organism */ "./node_modules/react-atomic-organism/build/es/src/index.js");
var _Field;





var data = {
  tables: [],
  conns: [{
    from: {
      table: "table1",
      col: "t1-col1"
    },
    to: {
      table: "table2",
      col: "t2-col2"
    }
  }]
};

for (var i = 1; i < 300; i++) {
  data.tables.push({
    name: "table" + i,
    cols: ["t" + i + "-col1", "t" + i + "-col2"]
  });
}

var D3UmlPerfExample = function D3UmlPerfExample() {
  var uml = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isDisableCurve = _useState[0],
      setIsDisableCurve = _useState[1];

  var handleUml = function handleUml(el) {
    return uml.current = el;
  };

  var handleUpdate = function handleUpdate(e) {
    var t = e.currentTarget || {};
    var fm = t.form;
    uml.current.zoom.setXYK({
      x: fm.x.value || null,
      y: fm.y.value || null,
      k: fm.k.value || null
    });
  };

  var handleZoom = function handleZoom(e) {//  console.log(e.zoom.getXYK());
  };

  var isDisableDel;
  var isDisableMove;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: "50vh"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_d3_uml__WEBPACK_IMPORTED_MODULE_1__["UMLGraph"], {
    onZoom: handleZoom,
    ref: handleUml,
    data: data,
    lineDefaultProps: {
      curve: !isDisableCurve
    },
    connsLocator: function connsLocator(d) {
      return d.conns;
    },
    connFromBoxGroupLocator: function connFromBoxGroupLocator(d) {
      return d.from.table;
    },
    connFromBoxLocator: function connFromBoxLocator(d) {
      return d.from.col;
    },
    connToBoxGroupLocator: function connToBoxGroupLocator(d) {
      return d.to.table;
    },
    connToBoxLocator: function connToBoxLocator(d) {
      return d.to.col;
    },
    onBoxWillDrag: function onBoxWillDrag(e) {
      return !isDisableMove.getChecked().input;
    },
    onLineDel: function onLineDel(e) {
      console.log({
        e: e
      });
      return !isDisableDel.getChecked().input;
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    style: {
      boxSizing: "border-box"
    },
    className: "equal width"
  }, _Field || (_Field = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Field"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    atom: "input",
    label: "x",
    name: "x"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    atom: "input",
    label: "y",
    name: "y"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    atom: "input",
    label: "k",
    name: "k"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Field"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_organism__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
    toggle: true,
    label: "disable curve",
    onChange: function onChange(_ref) {
      var checked = _ref.checked;
      setIsDisableCurve(checked);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_organism__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
    label: "disable line delete",
    ref: function ref(el) {
      return isDisableDel = el;
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_organism__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
    label: "disable node move",
    ref: function ref(el) {
      return isDisableMove = el;
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: handleUpdate
  }, "update")));
};

/* harmony default export */ __webpack_exports__["default"] = (D3UmlPerfExample);

/***/ }),

/***/ "./build/ui/organisms/Dropzone.example.js":
/*!************************************************!*\
  !*** ./build/ui/organisms/Dropzone.example.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var organism_react_dropzone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! organism-react-dropzone */ "./node_modules/organism-react-dropzone/build/es/src/index.js");
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! get-object-value */ "./node_modules/get-object-value/build/es/src/index.js");







var DropzoneExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(DropzoneExample, _PureComponent);

  function DropzoneExample() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "state", {
      urls: []
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "handleClick", function () {
      _this.dropzone.openDialog();
    });

    return _this;
  }

  var _proto = DropzoneExample.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var urls = this.state.urls;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(organism_react_dropzone__WEBPACK_IMPORTED_MODULE_4__["default"], {
      ref: function ref(el) {
        return _this2.dropzone = el;
      },
      acceptedFiles: ".png, .jpg",
      showFiletypeIcon: true,
      postUrl: "https://file.io",
      djsConfig: {
        addRemoveLinks: true
      },
      eventHandlers: {
        success: function success(file) {
          _this2.setState(function (_ref) {
            var urls = _ref.urls;
            var req = Object(get_object_value__WEBPACK_IMPORTED_MODULE_5__["default"])(file, ["xhr", "response"]);

            if (req) {
              var json = JSON.parse(req);
              urls.push(json.link);
            }

            return urls;
          });
        }
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", null, urls.map(function (url, key) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
        key: key
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
        href: url,
        target: "_blank"
      }, url));
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
      onClick: this.handleClick
    }, "open"));
  };

  return DropzoneExample;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (DropzoneExample);

/***/ }),

/***/ "./build/ui/organisms/ErrorForm.example.js":
/*!*************************************************!*\
  !*** ./build/ui/organisms/ErrorForm.example.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/extends */ "./node_modules/reshow-runtime/es/helpers/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var organism_react_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-navigation */ "./node_modules/organism-react-navigation/build/es/src/index.js");
/* harmony import */ var react_atomic_organism__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-atomic-organism */ "./node_modules/react-atomic-organism/build/es/src/index.js");





var options = [{
  label: "Boy",
  value: "boy"
}, {
  label: "Girl",
  value: "girl"
}];

var DropdownExample = function DropdownExample(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      value = _useState[0],
      setValue = _useState[1];

  var MyList = function MyList(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Menu"], props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Item"], {
      onClick: function onClick() {
        return setValue("Boy");
      }
    }, "Boy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Item"], {
      onClick: function onClick() {
        return setValue("Girl");
      }
    }, "Girl"));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Field"], Object(reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    inputComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(organism_react_navigation__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
      style: Styles.dropdown,
      list: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MyList, null)
    }, "You-select ", value)
  }));
};

var ErrorFormExample = function ErrorFormExample() {
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isError = _useState2[0],
      setIsError = _useState2[1];

  var handleChange = function handleChange(e) {
    setIsError(e.checked ? true : false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["SemanticUI"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    messageType: isError ? "error" : ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DropdownExample, {
    messageType: isError ? "error" : "",
    label: "Dropdown: "
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(organism_react_navigation__WEBPACK_IMPORTED_MODULE_3__["SelectField"], {
    messageType: isError ? "error" : "",
    label: "Selection: ",
    options: options,
    placeholder: "not-select-yet"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Field"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_atomic_organism__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
    label: "Error Style",
    toggle: true,
    onChange: handleChange
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ErrorFormExample);
var Styles = {
  dropdown: {
    marginLeft: 10
  }
};

/***/ }),

/***/ "./build/ui/organisms/FBLike.example.js":
/*!**********************************************!*\
  !*** ./build/ui/organisms/FBLike.example.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_facebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-facebook */ "./node_modules/organism-react-facebook/build/src/index.js");
/* harmony import */ var organism_react_facebook__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(organism_react_facebook__WEBPACK_IMPORTED_MODULE_1__);
var _FBLike;




var FBLikeExample = function FBLikeExample(props) {
  return _FBLike || (_FBLike = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_facebook__WEBPACK_IMPORTED_MODULE_1__["FBLike"], {
    page: "https://www.facebook.com/react"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FBLikeExample);

/***/ }),

/***/ "./build/ui/organisms/FBPage.example.js":
/*!**********************************************!*\
  !*** ./build/ui/organisms/FBPage.example.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_facebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-facebook */ "./node_modules/organism-react-facebook/build/src/index.js");
/* harmony import */ var organism_react_facebook__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(organism_react_facebook__WEBPACK_IMPORTED_MODULE_1__);
var _FBPage;




var FBPageExample = function FBPageExample(props) {
  return _FBPage || (_FBPage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_facebook__WEBPACK_IMPORTED_MODULE_1__["FBPage"], {
    page: "react"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FBPageExample);

/***/ }),

/***/ "./build/ui/organisms/FixedDataTableList.example.js":
/*!**********************************************************!*\
  !*** ./build/ui/organisms/FixedDataTableList.example.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pmvc_react_list */ "./node_modules/pmvc_react_list/build/es/src/index.js");
/* harmony import */ var pmvc_react_list_fixedDataTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pmvc_react_list/fixedDataTable */ "./node_modules/pmvc_react_list/fixedDataTable.js");
/* harmony import */ var pmvc_react_list_fixedDataTable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pmvc_react_list_fixedDataTable__WEBPACK_IMPORTED_MODULE_3__);


var _Cell, _Cell2, _Cell3;




var rows = [["a1", "b1", "c1"], ["a2", "b2", "c2"], ["a3", "b3", "c3"], ["a4", "b4", "c4"], ["a5", "b5", "c5"], ["a6", "b6", "c6"]];

var FixedDataTableListExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(FixedDataTableListExample, _PureComponent);

  function FixedDataTableListExample() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = FixedDataTableListExample.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        width: 350
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(pmvc_react_list_fixedDataTable__WEBPACK_IMPORTED_MODULE_3___default.a, {
      rows: rows,
      getColWidth: function getColWidth() {
        return 150;
      },
      height: 150
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Column"], {
      header: _Cell || (_Cell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Cell"], null, "h1")),
      cell: function cell(_ref) {
        var rowIndex = _ref.rowIndex,
            columnIndex = _ref.columnKey;
        return rows[rowIndex][columnIndex];
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Column"], {
      header: _Cell2 || (_Cell2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Cell"], null, "h2")),
      cell: function cell(_ref2) {
        var rowIndex = _ref2.rowIndex,
            columnIndex = _ref2.columnKey;
        return rows[rowIndex][columnIndex];
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Column"], {
      header: _Cell3 || (_Cell3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Cell"], null, "h3")),
      cell: function cell(_ref3) {
        var rowIndex = _ref3.rowIndex,
            columnIndex = _ref3.columnKey;
        return rows[rowIndex][columnIndex];
      }
    })));
  };

  return FixedDataTableListExample;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (FixedDataTableListExample);

/***/ }),

/***/ "./build/ui/organisms/FullScreen.example.js":
/*!**************************************************!*\
  !*** ./build/ui/organisms/FullScreen.example.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! get-object-value */ "./node_modules/get-object-value/build/es/src/index.js");
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-code */ "./node_modules/organism-react-code/build/es/src/index.js");


var _FullScreen;





var FullScreenExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(FullScreenExample, _PureComponent);

  function FullScreenExample() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = FullScreenExample.prototype;

  _proto.render = function render() {
    return _FullScreen || (_FullScreen = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["FullScreenExample"], {
      id: "full-screen-example",
      button: "open full screen"
    }, "test"));
  };

  return FullScreenExample;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (FullScreenExample);

/***/ }),

/***/ "./build/ui/organisms/GrapesJs.example.js":
/*!************************************************!*\
  !*** ./build/ui/organisms/GrapesJs.example.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_grapesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-grapesjs */ "./node_modules/organism-react-grapesjs/build/es/src/index.js");



var GrapesJsExample = function GrapesJsExample() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_grapesjs__WEBPACK_IMPORTED_MODULE_1__["GrapesJsController"], {
    style: Styles.container,
    debug: true
  });
};

/* harmony default export */ __webpack_exports__["default"] = (GrapesJsExample);
var Styles = {
  container: {
    minHeight: 600
  }
};

/***/ }),

/***/ "./build/ui/organisms/GridList.example.js":
/*!************************************************!*\
  !*** ./build/ui/organisms/GridList.example.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




var rows = [["a1", "b1", "c1"], ["a2", "b2", "c2"], ["a3", "b3", "c3"], ["a4", "b4", "c4"], ["a5", "b5", "c5"], ["a6", "b6", "c6"]];
var RVGrid = null;

var GridListExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(GridListExample, _PureComponent);

  function GridListExample() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "state", {
      isLoad: false
    });

    return _this;
  }

  var _proto = GridListExample.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! pmvc_react_list/rv */ "./node_modules/pmvc_react_list/rv.js", 7)).then(function (_ref) {
      var rvGrid = _ref.RVGrid;
      RVGrid = rvGrid;

      _this2.setState({
        isLoad: true
      });
    });
  };

  _proto.render = function render() {
    var isLoad = this.state.isLoad;
    var grid = null;

    if (RVGrid && isLoad) {
      var className = "grid"; // hack for disable const element

      grid = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(RVGrid, {
        className: className,
        width: 200,
        height: 100,
        rows: rows,
        style: Styles.container
      });
    }

    return grid;
  };

  return GridListExample;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (GridListExample);
var Styles = {
  container: {
    border: "1px solid #000"
  }
};

/***/ }),

/***/ "./build/ui/organisms/HTMLToCanvans.example.js":
/*!*****************************************************!*\
  !*** ./build/ui/organisms/HTMLToCanvans.example.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var organism_react_html2canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-html2canvas */ "./node_modules/organism-react-html2canvas/build/es/src/index.js");




var HTMLToCanvansExample = function HTMLToCanvansExample(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      html = _useState[0],
      setHtml = _useState[1];

  var pdf = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var handleInput = function handleInput(e) {
    var v = e.currentTarget.value;
    setHtml(v);
  };

  var handleClick = function handleClick(e) {
    if (pdf && pdf.current) {
      pdf.current.download();
    }
  };

  var handlePdf = function handlePdf(el) {
    return pdf.current = el;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    className: "equal width",
    style: {
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    atom: "textarea",
    onInput: handleInput
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: handleClick
  }, "Download")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_html2canvas__WEBPACK_IMPORTED_MODULE_2__["HTMLToPDF"], {
    preview: true,
    autoGenCanvas: true,
    ref: handlePdf
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_1__["Unsafe"], null, html)));
};

/* harmony default export */ __webpack_exports__["default"] = (HTMLToCanvansExample);

/***/ }),

/***/ "./build/ui/organisms/HtmlTableList.example.js":
/*!*****************************************************!*\
  !*** ./build/ui/organisms/HtmlTableList.example.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pmvc_react_list */ "./node_modules/pmvc_react_list/build/es/src/index.js");


var _Cell, _Cell2, _Cell3;



var rows = [["a1", "b1", "c1"], ["a2", "b2", "c2"], ["a3", "b3", "c3"], ["a1", "b1", "c1"], ["a2", "b2", "c2"], ["a3", "b3", "c3"]];

var HtmlTableListExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlTableListExample, _PureComponent);

  function HtmlTableListExample() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = HtmlTableListExample.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Table"], {
      rows: rows
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Column"], {
      header: _Cell || (_Cell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Cell"], null, "h1")),
      cell: function cell(_ref) {
        var rowIndex = _ref.rowIndex,
            columnIndex = _ref.columnIndex;
        return rows[rowIndex][columnIndex];
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Column"], {
      header: _Cell2 || (_Cell2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Cell"], null, "h2")),
      cell: function cell(_ref2) {
        var rowIndex = _ref2.rowIndex,
            columnIndex = _ref2.columnIndex;
        return rows[rowIndex][columnIndex];
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Column"], {
      header: _Cell3 || (_Cell3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Cell"], null, "h3")),
      cell: function cell(_ref3) {
        var rowIndex = _ref3.rowIndex,
            columnIndex = _ref3.columnIndex;
        return rows[rowIndex][2];
      }
    }));
  };

  return HtmlTableListExample;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (HtmlTableListExample);
var Styles = {
  col: {
    height: 40
  }
};

/***/ }),

/***/ "./build/ui/organisms/Menu.js":
/*!************************************!*\
  !*** ./build/ui/organisms/Menu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pmvc_react_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pmvc_react_admin */ "./node_modules/pmvc_react_admin/build/src/index.js");
/* harmony import */ var pmvc_react_admin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pmvc_react_admin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var organism_react_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-navigation */ "./node_modules/organism-react-navigation/build/es/src/index.js");
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! get-object-value */ "./node_modules/get-object-value/build/es/src/index.js");
/* harmony import */ var reshow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow */ "./node_modules/reshow/build/es/src/index.js");
var _VerticalMenu;






var keys = Object.keys;

var Menu = function Menu(props) {
  var thisMenus = {};
  var themes = reshow__WEBPACK_IMPORTED_MODULE_4__["pageStore"].getMap("themes");
  keys(themes).forEach(function (item) {
    thisMenus[item] = {
      text: item,
      href: "#/" + item
    };
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_navigation__WEBPACK_IMPORTED_MODULE_2__["SideMenu"], {
    menus: thisMenus,
    linkComponent: reshow__WEBPACK_IMPORTED_MODULE_4__["ReLink"],
    component: _VerticalMenu || (_VerticalMenu = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(pmvc_react_admin__WEBPACK_IMPORTED_MODULE_1__["VerticalMenu"], null))
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./build/ui/organisms/PageLoadProgressHandler.example.js":
/*!***************************************************************!*\
  !*** ./build/ui/organisms/PageLoadProgressHandler.example.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-progress */ "./node_modules/organism-react-progress/build/es/src/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");




var PageLoadProgressHandlerExample = function PageLoadProgressHandlerExample(props) {
  var oLoad;
  var dInput;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_progress__WEBPACK_IMPORTED_MODULE_1__["PageLoadProgressHandler"], {
    ref: function ref(o) {
      return oLoad = o;
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: Styles.button,
    onClick: function onClick() {
      oLoad.start(100, 800);
    }
  }, "Start"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: Styles.button,
    onClick: function onClick() {
      oLoad.pause();
    }
  }, "Pause"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: Styles.button,
    onClick: function onClick() {
      oLoad.complete();
    }
  }, "Complete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: Styles.button,
    onClick: function onClick() {
      oLoad.reset();
    }
  }, "Reset")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["InputBox"], {
    leftLabel: "Pause @",
    rightLabel: "%",
    refCb: function refCb(o) {
      return dInput = o;
    },
    button: "Go",
    buttonProps: {
      onClick: function onClick() {
        oLoad.start(dInput.value);
      }
    },
    style: Styles.input
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PageLoadProgressHandlerExample);
var Styles = {
  input: {
    width: 20
  },
  button: {
    marginBottom: 10
  }
};

/***/ }),

/***/ "./build/ui/organisms/PageLoadProgressHandlerWithAjax.example.js":
/*!***********************************************************************!*\
  !*** ./build/ui/organisms/PageLoadProgressHandlerWithAjax.example.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-progress */ "./node_modules/organism-react-progress/build/es/src/index.js");
/* harmony import */ var organism_react_ajax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-ajax */ "./node_modules/organism-react-ajax/build/es/src/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
var _PageLoadProgressHand;






var PageLoadProgressHandlerExample = function PageLoadProgressHandlerExample(props) {
  var url = "https://raw.githubusercontent.com/react-atomic/react-atomic-ui/master/README.md";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, _PageLoadProgressHand || (_PageLoadProgressHand = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_progress__WEBPACK_IMPORTED_MODULE_1__["PageLoadProgressHandler"], {
    ajax: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: function onClick() {
      Object(organism_react_ajax__WEBPACK_IMPORTED_MODULE_2__["ajaxDispatch"])({
        type: "ajaxGet",
        params: {
          url: url,
          callback: function callback(json, text, o) {
            alert(text);
          }
        }
      });
    }
  }, "Call Ajax"));
};

/* harmony default export */ __webpack_exports__["default"] = (PageLoadProgressHandlerExample);

/***/ }),

/***/ "./build/ui/organisms/Pagination.example.js":
/*!**************************************************!*\
  !*** ./build/ui/organisms/Pagination.example.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var organism_react_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! organism-react-navigation */ "./node_modules/organism-react-navigation/build/es/src/index.js");






var PaginationExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(PaginationExample, _PureComponent);

  function PaginationExample() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "handlePageChange", function (_ref) {
      var begin = _ref.begin;

      _this.setState({
        begin: begin
      });
    });

    return _this;
  }

  var _proto = PaginationExample.prototype;

  _proto.render = function render() {
    var _ref2 = this.state || {},
        begin = _ref2.begin;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(organism_react_navigation__WEBPACK_IMPORTED_MODULE_4__["PaginationController"], {
      style: Styles.container,
      onPageChange: this.handlePageChange,
      total: 500,
      begin: begin
    });
  };

  return PaginationExample;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (PaginationExample);
var Styles = {
  container: {
    textAlign: "center"
  }
};

/***/ }),

/***/ "./build/ui/organisms/ParallaxBackgroundImage.example.js":
/*!***************************************************************!*\
  !*** ./build/ui/organisms/ParallaxBackgroundImage.example.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-parallax */ "./node_modules/organism-react-parallax/build/es/src/index.js");



var ParallaxBackgroundImageExample = function ParallaxBackgroundImageExample() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_parallax__WEBPACK_IMPORTED_MODULE_1__["ParallaxBackgroundImage"], {
    style: Styles.container,
    backgroundImage: "https://c1.staticflickr.com/9/8621/16732897815_4705c08fe6_h.jpg"
  }, "test");
};

/* harmony default export */ __webpack_exports__["default"] = (ParallaxBackgroundImageExample);
var Styles = {
  container: {
    height: 300,
    color: "#fff",
    textAlign: "center",
    paddingTop: 200
  }
};

/***/ }),

/***/ "./build/ui/organisms/Popup.example.js":
/*!*********************************************!*\
  !*** ./build/ui/organisms/Popup.example.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_atomic_organism__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-atomic-organism */ "./node_modules/react-atomic-organism/build/es/src/index.js");
/* harmony import */ var organism_react_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-popup */ "./node_modules/organism-react-popup/build/es/src/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
var _a, _Button;



/**
 * Production please use
 * import {...xxx} from "organism-react-popup"
 */




var PopupExample = function PopupExample() {
  var _PopupModal;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      backgroundScrollAble = _useState[0],
      setBackgroundScrollAble = _useState[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_2__["PopupClick"], {
    style: Styles.click,
    popup: function popup() {
      return _PopupModal || (_PopupModal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_2__["PopupModal"], {
        backgroundScroll: backgroundScrollAble
      }, "xxx"));
    },
    component: _a || (_a = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null))
  }, "show modal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_2__["PopupClick"], {
    style: {
      marginLeft: 5
    },
    popup: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_2__["Dialog"], {
      backgroundScroll: backgroundScrollAble,
      header: "Test Header"
    }, "Test Dialog"),
    component: _Button || (_Button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["Button"], null))
  }, "show dialog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_organism__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    toggle: true,
    label: "Background scrollable",
    onChange: function onChange(_ref) {
      var checked = _ref.checked;
      setBackgroundScrollAble(checked);
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PopupExample);
var Styles = {
  click: {
    color: "blue",
    textDecoration: "underline"
  }
};

/***/ }),

/***/ "./build/ui/organisms/QQVideo.example.js":
/*!***********************************************!*\
  !*** ./build/ui/organisms/QQVideo.example.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_qq_video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-qq-video */ "./node_modules/organism-react-qq-video/build/es/src/index.js");
var _QQVideo;




var QQVideoExample = function QQVideoExample() {
  return _QQVideo || (_QQVideo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_qq_video__WEBPACK_IMPORTED_MODULE_1__["default"], {
    videoId: "j0792wzb6v8"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (QQVideoExample);

/***/ }),

/***/ "./build/ui/organisms/QueryToJSON.js":
/*!*******************************************!*\
  !*** ./build/ui/organisms/QueryToJSON.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/toConsumableArray */ "./node_modules/reshow-runtime/es/helpers/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prettyjson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prettyjson */ "./node_modules/prettyjson/lib/prettyjson.js");
/* harmony import */ var prettyjson__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prettyjson__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var react_atomic_organism__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-atomic-organism */ "./node_modules/react-atomic-organism/build/es/src/index.js");






var QueryToJSON = function QueryToJSON(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      json = _useState[0],
      setJson = _useState[1];

  var handleInput = function handleInput(e) {
    var v = e.currentTarget.value;

    var vArr = Object(reshow_runtime_es_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(new URLSearchParams(v));

    var nextArr = [];
    vArr.forEach(function (item) {
      var _nextArr$push;

      nextArr.push((_nextArr$push = {}, _nextArr$push[item[0]] = item[1], _nextArr$push));
    });
    setJson(nextArr);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    className: "equal width",
    style: {
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["Field"], {
    ui: true,
    atom: "textarea",
    onInput: handleInput
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_atomic_organism__WEBPACK_IMPORTED_MODULE_4__["FormattedJSON"], {
    atom: "div"
  }, prettyjson__WEBPACK_IMPORTED_MODULE_2___default.a.render(json))));
};

/* harmony default export */ __webpack_exports__["default"] = (QueryToJSON);

/***/ }),

/***/ "./build/ui/organisms/RTE.example.js":
/*!*******************************************!*\
  !*** ./build/ui/organisms/RTE.example.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _div, _Editor;

 // import { Editor } from "organism-react-rte-writer";

var Editor = function Editor() {
  return _div || (_div = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null));
};

var RTEExample = function RTEExample() {
  return _Editor || (_Editor = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Editor, null));
};

/* harmony default export */ __webpack_exports__["default"] = (RTEExample);
var Styles = {};

/***/ }),

/***/ "./build/ui/organisms/RadioGroup.example.js":
/*!**************************************************!*\
  !*** ./build/ui/organisms/RadioGroup.example.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var react_atomic_organism__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-atomic-organism */ "./node_modules/react-atomic-organism/build/es/src/index.js");






var options = [{
  label: "Boy",
  value: "boy"
}, {
  label: "Girl",
  value: "girl"
}];

var RadioGroupExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(RadioGroupExample, _PureComponent);

  function RadioGroupExample() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "state", {
      value: ""
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "handleChange", function () {
      _this.setState({
        value: _this.radio.getValue()
      });
    });

    return _this;
  }

  var _proto = RadioGroupExample.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var value = this.state.value;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_atomic_organism__WEBPACK_IMPORTED_MODULE_5__["RadioGroup"], {
      ref: function ref(el) {
        return _this2.radio = el;
      },
      inline: false,
      label: "Sex: ",
      name: "sex",
      value: value,
      options: options,
      onChange: this.handleChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, "Current: ", value), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      onClick: function onClick() {
        return _this2.setState({
          value: "boy"
        });
      }
    }, "Set to Boy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      onClick: function onClick() {
        return _this2.setState({
          value: "girl"
        });
      }
    }, "Set to Girl"));
  };

  return RadioGroupExample;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (RadioGroupExample);

/***/ }),

/***/ "./build/ui/organisms/ReactVirtualizedTableList.example.js":
/*!*****************************************************************!*\
  !*** ./build/ui/organisms/ReactVirtualizedTableList.example.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var pmvc_react_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pmvc_react_list */ "./node_modules/pmvc_react_list/build/es/src/index.js");
/* harmony import */ var pmvc_react_list_rv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pmvc_react_list/rv */ "./node_modules/pmvc_react_list/rv.js");
/* harmony import */ var pmvc_react_list_rv__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pmvc_react_list_rv__WEBPACK_IMPORTED_MODULE_5__);




var _Cell, _Cell2, _Cell3;




var rows = [["a1", "b1", "c1"], ["a2", "b2", "c2"], ["a3", "b3", "c3"], ["a1", "b1", "c1"], ["a2", "b2", "c2"], ["a3", "b3", "c3"]];

var ReactVirtualizedTableListExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ReactVirtualizedTableListExample, _PureComponent);

  function ReactVirtualizedTableListExample() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "handleClick", function (rowIndex) {
      return function (ev) {
        alert(rowIndex);
      };
    });

    return _this;
  }

  var _proto = ReactVirtualizedTableListExample.prototype;

  _proto.render = function render() {
    var _this2 = this;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      style: {
        width: "40%",
        height: 150
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(pmvc_react_list_rv__WEBPACK_IMPORTED_MODULE_5___default.a, {
      rows: rows
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_4__["Column"], {
      header: _Cell || (_Cell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_4__["Cell"], null, "h1")),
      cell: function cell(_ref) {
        var rowIndex = _ref.rowIndex,
            columnIndex = _ref.columnIndex,
            style = _ref.style;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          style: style,
          onClick: _this2.handleClick(rowIndex)
        }, rows[rowIndex][columnIndex]);
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_4__["Column"], {
      header: _Cell2 || (_Cell2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_4__["Cell"], null, "h2")),
      cell: function cell(_ref2) {
        var rowIndex = _ref2.rowIndex,
            columnIndex = _ref2.columnIndex,
            style = _ref2.style;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          style: style,
          onClick: _this2.handleClick(rowIndex)
        }, rows[rowIndex][columnIndex]);
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_4__["Column"], {
      header: _Cell3 || (_Cell3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_4__["Cell"], null, "h3")),
      cell: function cell(_ref3) {
        var rowIndex = _ref3.rowIndex,
            columnIndex = _ref3.columnIndex,
            style = _ref3.style;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          style: style,
          onClick: _this2.handleClick(rowIndex)
        }, rows[rowIndex][columnIndex]);
      }
    })));
  };

  return ReactVirtualizedTableListExample;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (ReactVirtualizedTableListExample);

/***/ }),

/***/ "./build/ui/organisms/ReshowMessage.example.js":
/*!*****************************************************!*\
  !*** ./build/ui/organisms/ReshowMessage.example.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var reshow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow */ "./node_modules/reshow/build/es/src/index.js");




var _DialogResult;





var DialogResult = function DialogResult(_ref) {
  var dialogReturn = _ref.dialogReturn;
  return "undefined" !== typeof dialogReturn ? "Dialog: " + dialogReturn : null;
};

var ReshowMessageExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ReshowMessageExample, _PureComponent);

  function ReshowMessageExample() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "handleAddAlert", function (e) {
      Object(reshow__WEBPACK_IMPORTED_MODULE_5__["dispatch"])("alert/add", {
        message: "test"
      });
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "handleResetAlert", function (e) {
      Object(reshow__WEBPACK_IMPORTED_MODULE_5__["dispatch"])("alert/reset", {
        alerts: [1, 2, 3]
      });
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "handleCleanAlert", function (e) {
      Object(reshow__WEBPACK_IMPORTED_MODULE_5__["dispatch"])("alert/reset", {
        alerts: null
      });
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "handleOpenDialog", function (e) {
      Object(reshow__WEBPACK_IMPORTED_MODULE_5__["dispatch"])("dialog/start", {
        dialog: "how are u"
      });
    });

    return _this;
  }

  var _proto = ReshowMessageExample.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      onClick: this.handleAddAlert
    }, "Add alert"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      onClick: this.handleResetAlert
    }, "Reset alert"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      onClick: this.handleCleanAlert
    }, "Clean all alerts")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      onClick: this.handleOpenDialog
    }, "Open Dialog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reshow__WEBPACK_IMPORTED_MODULE_5__["Return"], {
      initStates: ["dialogReturn"]
    }, _DialogResult || (_DialogResult = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(DialogResult, null)))));
  };

  return ReshowMessageExample;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (ReshowMessageExample);

/***/ }),

/***/ "./build/ui/organisms/Spotlight.example.js":
/*!*************************************************!*\
  !*** ./build/ui/organisms/Spotlight.example.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var organism_react_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! organism-react-popup */ "./node_modules/organism-react-popup/build/es/src/index.js");
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! organism-react-code */ "./node_modules/organism-react-code/build/es/src/index.js");
/* harmony import */ var organism_react_spotlight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! organism-react-spotlight */ "./node_modules/organism-react-spotlight/build/es/src/index.js");




var _PopupPool;







var SpotlightExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(SpotlightExample, _PureComponent);

  function SpotlightExample() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "state", {
      spotlight: false
    });

    return _this;
  }

  var _proto = SpotlightExample.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var spotlight = this.state.spotlight;
    var thisSpotlight = null;

    if (spotlight) {
      thisSpotlight = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(organism_react_spotlight__WEBPACK_IMPORTED_MODULE_7__["default"], {
        toPool: "spotlight-pool",
        targetEl: this.spot,
        onClose: function onClose() {
          _this2.setState({
            spotlight: null
          });
        }
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_6__["FullScreenExample"], {
      button: "open full screen",
      onClose: function onClose() {
        return _this2.setState({
          spotlight: null
        });
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      ref: function ref(el) {
        return _this2.spot = el;
      },
      style: Styles.el
    }, "Spotlight"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      onClick: function onClick() {
        _this2.setState({
          spotlight: true
        });
      }
    }, "Try it.")), thisSpotlight, _PopupPool || (_PopupPool = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_5__["PopupPool"], {
      name: "spotlight-pool"
    })));
  };

  return SpotlightExample;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (SpotlightExample);
var Styles = {
  el: {
    display: "inline-block",
    width: 100,
    height: 200,
    margin: 10
  }
};

/***/ }),

/***/ "./build/ui/organisms/StockChart.example.js":
/*!**************************************************!*\
  !*** ./build/ui/organisms/StockChart.example.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! organism-react-code */ "./node_modules/organism-react-code/build/es/src/index.js");
/* harmony import */ var organism_react_stockcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! organism-react-stockcharts */ "./node_modules/organism-react-stockcharts/build/es/src/index.js");
/* harmony import */ var organism_react_ajax__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! organism-react-ajax */ "./node_modules/organism-react-ajax/build/es/src/index.js");








var StockChartExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(StockChartExample, _PureComponent);

  function StockChartExample() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "state", {
      data: null
    });

    return _this;
  }

  var _proto = StockChartExample.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    Object(organism_react_ajax__WEBPACK_IMPORTED_MODULE_6__["ajaxDispatch"])({
      type: "ajaxGet",
      params: {
        url: "//raw.githubusercontent.com/react-atomic/react-atomic-ui/master/data/stock.json",
        callback: function callback(json) {
          _this2.setState({
            data: {
              trades: json
            }
          });
        }
      }
    });
  };

  _proto.render = function render() {
    var data = this.state.data;

    if (!data) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_4__["FullScreenExample"], {
      id: "full-page-stock-chart",
      button: "open full screen"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(organism_react_stockcharts__WEBPACK_IMPORTED_MODULE_5__["StockChartCompute"], {
      data: data,
      tradeRowsLocator: function tradeRowsLocator(d) {
        return d.trades;
      },
      tradeHighLocator: function tradeHighLocator(d) {
        return d.h;
      },
      tradeLowLocator: function tradeLowLocator(d) {
        return d.l;
      },
      tradeOpenLocator: function tradeOpenLocator(d) {
        return d.o;
      },
      tradeCloseLocator: function tradeCloseLocator(d) {
        return d.c;
      },
      tradeVolumeLocator: function tradeVolumeLocator(d) {
        return d.v;
      },
      tradeDateLocator: function tradeDateLocator(d) {
        return d.t;
      }
    }));
  };

  return StockChartExample;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (StockChartExample);

/***/ }),

/***/ "./build/ui/organisms/Suggestion.example.js":
/*!**************************************************!*\
  !*** ./build/ui/organisms/Suggestion.example.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var react_atomic_organism__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-atomic-organism */ "./node_modules/react-atomic-organism/build/es/src/index.js");




var _SemanticUI;




var data = ["abc", "abb", "acc"];

var SuggestionExample1 = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(SuggestionExample1, _PureComponent);

  function SuggestionExample1() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "state", {
      results: []
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "handleChange", function (e, value) {
      if (!value.length) {
        _this.setState({
          results: data
        });

        return;
      }

      var results = [];
      data.forEach(function (v, k) {
        if (value.length && -1 !== v.indexOf(value)) {
          results.push(v);
        }
      });

      _this.setState({
        results: results
      });
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "handleItemClick", function (e, item) {
      _this.suggestion.setValue(item);
    });

    return _this;
  }

  var _proto = SuggestionExample1.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$state = this.state,
        results = _this$state.results,
        myValue = _this$state.myValue;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["SemanticUI"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_atomic_organism__WEBPACK_IMPORTED_MODULE_5__["Suggestion"], {
      ref: function ref(el) {
        return _this2.suggestion = el;
      },
      onChange: this.handleChange,
      results: results,
      onItemClick: this.handleItemClick,
      value: myValue
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      onClick: function onClick() {
        return _this2.setState({
          myValue: myValue ? myValue + 1 : 123
        });
      }
    }, "set"));
  };

  return SuggestionExample1;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);

var SuggestionExample = function SuggestionExample() {
  return _SemanticUI || (_SemanticUI = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["SemanticUI"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(SuggestionExample1, null), "couldCreate: false", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_atomic_organism__WEBPACK_IMPORTED_MODULE_5__["Suggestion"], {
    results: data,
    couldCreate: false,
    filter: true,
    preview: true
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SuggestionExample);

/***/ }),

/***/ "./build/ui/organisms/TabView.example.js":
/*!***********************************************!*\
  !*** ./build/ui/organisms/TabView.example.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var ricon_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ricon/Search */ "./node_modules/ricon/Search.js");
/* harmony import */ var ricon_Search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ricon_Search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var organism_react_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-navigation */ "./node_modules/organism-react-navigation/build/es/src/index.js");
var _InputBox, _RightMenu, _Tab, _Tab2;






var RightMenu = function RightMenu() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    className: "right",
    ui: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_1__["Item"], {
    style: {
      boxSizing: "border-box"
    }
  }, _InputBox || (_InputBox = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_1__["InputBox"], {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ricon_Search__WEBPACK_IMPORTED_MODULE_2___default.a, null),
    transparent: true,
    placeholder: "Search..."
  }))));
};

var TabViewExample = function TabViewExample(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      selected = _useState[0],
      setSelected = _useState[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_1__["SemanticUI"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_navigation__WEBPACK_IMPORTED_MODULE_3__["TabView"], {
    selected: selected,
    rightMenu: _RightMenu || (_RightMenu = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RightMenu, null))
  }, _Tab || (_Tab = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_navigation__WEBPACK_IMPORTED_MODULE_3__["Tab"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "content1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "menu1"))), _Tab2 || (_Tab2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_navigation__WEBPACK_IMPORTED_MODULE_3__["Tab"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "content2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "menu2")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: function onClick() {
      return setSelected(0);
    }
  }, "to tab1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: function onClick() {
      return setSelected(1);
    }
  }, "to tab2"));
};

/* harmony default export */ __webpack_exports__["default"] = (TabViewExample);

/***/ }),

/***/ "./build/ui/organisms/TagInput.example.js":
/*!************************************************!*\
  !*** ./build/ui/organisms/TagInput.example.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_tag_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-tag-input */ "./node_modules/organism-react-tag-input/build/es/src/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var react_atomic_organism__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-atomic-organism */ "./node_modules/react-atomic-organism/build/es/src/index.js");





var TagInputExample = function TagInputExample(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isDisable = _useState[0],
      setIsDisable = _useState[1];

  var handleDisable = function handleDisable(e) {
    setIsDisable(e.checked ? true : false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_tag_input__WEBPACK_IMPORTED_MODULE_1__["TagsField"], {
    disabled: isDisable
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Field"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_organism__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
    label: "Disable",
    toggle: true,
    onChange: handleDisable
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TagInputExample);

/***/ }),

/***/ "./build/ui/organisms/WindowOffset.example.js":
/*!****************************************************!*\
  !*** ./build/ui/organisms/WindowOffset.example.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var organism_react_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! organism-react-popup */ "./node_modules/organism-react-popup/build/es/src/index.js");







var WindowOffsetExample = /*#__PURE__*/function (_Component) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(WindowOffsetExample, _Component);

  function WindowOffsetExample() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "handleClick", function (e) {
      var target = e.currentTarget;
      Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! get-window-offset */ "./node_modules/get-window-offset/build/es/src/index.js")).then(function (_ref) {
        var getWindowOffset = _ref["default"];
        var info = getWindowOffset(target);
        console.log(info);
      });
    });

    return _this;
  }

  var _proto = WindowOffsetExample.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      style: Styles.row
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_5__["PopupHover"], {
      popup: "1",
      isKeep: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Styles.col), Styles.col1),
      onClick: this.handleClick
    }, "1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_5__["PopupHover"], {
      popup: "2",
      isKeep: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Styles.col), Styles.col2),
      onClick: this.handleClick
    }, "2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_5__["PopupHover"], {
      popup: "3",
      isKeep: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Styles.col), Styles.col3),
      onClick: this.handleClick
    }, "3"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      style: Styles.row
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_5__["PopupHover"], {
      popup: "4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Styles.col), Styles.col1),
      onClick: this.handleClick
    }, "4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_5__["PopupHover"], {
      popup: "5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Styles.col), Styles.col2),
      onClick: this.handleClick
    }, "5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_5__["PopupHover"], {
      popup: "6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Styles.col), Styles.col3),
      onClick: this.handleClick
    }, "6"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      style: {
        width: 60
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_5__["PopupHover"], {
      popup: "7"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Styles.col), Styles.col1),
      onClick: this.handleClick
    }, "7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_5__["PopupHover"], {
      popup: "8"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Styles.col), Styles.col2),
      onClick: this.handleClick
    }, "8")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_5__["PopupHover"], {
      popup: "9"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Styles.col), Styles.col3),
      onClick: this.handleClick
    }, "9"))));
  };

  return WindowOffsetExample;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (WindowOffsetExample);
var Styles = {
  row: {
    justifyContent: "space-around",
    display: "flex",
    marginBottom: 100
  },
  col: {
    width: 60,
    height: 60,
    lineHeight: "60px",
    textAlign: "center",
    color: "#fff"
  },
  col1: {
    background: "#c00"
  },
  col2: {
    background: "#095"
  },
  col3: {
    background: "#059"
  }
};

/***/ }),

/***/ "./build/ui/organisms/YouTubeRWD.example.js":
/*!**************************************************!*\
  !*** ./build/ui/organisms/YouTubeRWD.example.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-video */ "./node_modules/organism-react-video/build/es/src/index.js");
var _YoutubeRWD;




var YouTubeRWDExample = function YouTubeRWDExample() {
  return _YoutubeRWD || (_YoutubeRWD = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_video__WEBPACK_IMPORTED_MODULE_1__["YoutubeRWD"], {
    videoId: "_2i6CmKjN3E"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (YouTubeRWDExample);

/***/ }),

/***/ "./build/ui/pages/Animation.js":
/*!*************************************!*\
  !*** ./build/ui/pages/Animation.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-code */ "./node_modules/organism-react-code/build/es/src/index.js");
/* harmony import */ var _pages_BasePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/BasePage */ "./build/ui/pages/BasePage.js");
/* harmony import */ var _templates_Doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Doc */ "./build/ui/templates/Doc.js");
/* harmony import */ var _organisms_Animation_example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/Animation.example */ "./build/ui/organisms/Animation.example.js");
/* harmony import */ var _raw_loader_ui_organisms_Animation_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/Animation.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Animation.example.jsx");
/* harmony import */ var _organisms_AnimationReplace_example__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../organisms/AnimationReplace.example */ "./build/ui/organisms/AnimationReplace.example.js");
/* harmony import */ var _raw_loader_ui_organisms_AnimationReplace_example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/AnimationReplace.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AnimationReplace.example.jsx");
/* harmony import */ var _organisms_AnimationDelay_example__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../organisms/AnimationDelay.example */ "./build/ui/organisms/AnimationDelay.example.js");
/* harmony import */ var _raw_loader_ui_organisms_AnimationDelay_example__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/AnimationDelay.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AnimationDelay.example.jsx");



var _Doc;


/*Base*/




/*Sample*/








var Animation = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Animation, _BasePage);

  function Animation() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = Animation.prototype;

  _proto.render = function render() {
    return _Doc || (_Doc = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_templates_Doc__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_Animation_example__WEBPACK_IMPORTED_MODULE_7__["default"],
      header: "Animation Sample"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_Animation_example__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_AnimationReplace_example__WEBPACK_IMPORTED_MODULE_9__["default"],
      header: "Animation Replace Sample"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_AnimationReplace_example__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_AnimationDelay_example__WEBPACK_IMPORTED_MODULE_11__["default"],
      header: "Animation Delay Sample"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_AnimationDelay_example__WEBPACK_IMPORTED_MODULE_10__["default"], null))));
  };

  return Animation;
}(_pages_BasePage__WEBPACK_IMPORTED_MODULE_4__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Animation, "defaultProps", {
  pageName: "animation"
});

/* harmony default export */ __webpack_exports__["default"] = (Animation);

/***/ }),

/***/ "./build/ui/pages/AsciiDoc.js":
/*!************************************!*\
  !*** ./build/ui/pages/AsciiDoc.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-code */ "./node_modules/organism-react-code/build/es/src/index.js");
/* harmony import */ var _pages_BasePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/BasePage */ "./build/ui/pages/BasePage.js");
/* harmony import */ var _templates_Doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Doc */ "./build/ui/templates/Doc.js");
/* harmony import */ var _organisms_AsciiDoc_example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/AsciiDoc.example */ "./build/ui/organisms/AsciiDoc.example.js");
/* harmony import */ var _raw_loader_ui_organisms_AsciiDoc_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/AsciiDoc.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AsciiDoc.example.jsx");



var _Doc;


/*Base*/




/*Sample*/




var AsciiDocPage = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AsciiDocPage, _BasePage);

  function AsciiDocPage() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = AsciiDocPage.prototype;

  _proto.render = function render() {
    return _Doc || (_Doc = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_templates_Doc__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_AsciiDoc_example__WEBPACK_IMPORTED_MODULE_7__["default"],
      header: "Ascii Doc",
      edit: "https://codesandbox.io/s/8vj7x3m82",
      git: "react-atomic/react-atomic-organism/tree/master/packages/organism-react-asciidoc/"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_AsciiDoc_example__WEBPACK_IMPORTED_MODULE_6__["default"], null))));
  };

  return AsciiDocPage;
}(_pages_BasePage__WEBPACK_IMPORTED_MODULE_4__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(AsciiDocPage, "defaultProps", {
  pageName: "AsciiDoc"
});

/* harmony default export */ __webpack_exports__["default"] = (AsciiDocPage);

/***/ }),

/***/ "./build/ui/pages/Atoms.js":
/*!*********************************!*\
  !*** ./build/ui/pages/Atoms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _templates_Doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates/Doc */ "./build/ui/templates/Doc.js");
/* harmony import */ var _pages_BasePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/BasePage */ "./build/ui/pages/BasePage.js");



var _Doc;





var Atoms = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Atoms, _BasePage);

  function Atoms() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = Atoms.prototype;

  _proto.render = function render() {
    return _Doc || (_Doc = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_templates_Doc__WEBPACK_IMPORTED_MODULE_3__["default"], null, "This is atom"));
  };

  return Atoms;
}(_pages_BasePage__WEBPACK_IMPORTED_MODULE_4__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Atoms, "defaultProps", {
  pageName: "atoms"
});

/* harmony default export */ __webpack_exports__["default"] = (Atoms);

/***/ }),

/***/ "./build/ui/pages/BasePage.js":
/*!************************************!*\
  !*** ./build/ui/pages/BasePage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var organism_react_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-navigation */ "./node_modules/organism-react-navigation/build/es/src/index.js");




var BasePage = /*#__PURE__*/function (_Component) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BasePage, _Component);

  function BasePage() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = BasePage.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this = this;

    setTimeout(function () {
      Object(organism_react_navigation__WEBPACK_IMPORTED_MODULE_2__["navigationDispatch"])({
        params: {
          activeMenu: _this.props.pageName
        }
      });
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    setTimeout(function () {
      Object(organism_react_navigation__WEBPACK_IMPORTED_MODULE_2__["navigationDispatch"])({
        params: {
          activeMenu: null
        }
      });
    });
  };

  return BasePage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BasePage);

/***/ }),

/***/ "./build/ui/pages/Carousel.js":
/*!************************************!*\
  !*** ./build/ui/pages/Carousel.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-code */ "./node_modules/organism-react-code/build/es/src/index.js");
/* harmony import */ var _pages_BasePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/BasePage */ "./build/ui/pages/BasePage.js");
/* harmony import */ var _templates_Doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Doc */ "./build/ui/templates/Doc.js");
/* harmony import */ var _organisms_CarouselAnimation_example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/CarouselAnimation.example */ "./build/ui/organisms/CarouselAnimation.example.js");
/* harmony import */ var _raw_loader_ui_organisms_CarouselAnimation_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/CarouselAnimation.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CarouselAnimation.example.jsx");
/* harmony import */ var _organisms_CarouselAnimationHideThumb_example__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../organisms/CarouselAnimationHideThumb.example */ "./build/ui/organisms/CarouselAnimationHideThumb.example.js");
/* harmony import */ var _raw_loader_ui_organisms_CarouselAnimationHideThumb_example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/CarouselAnimationHideThumb.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CarouselAnimationHideThumb.example.jsx");
/* harmony import */ var _organisms_CarouselSlide_example__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../organisms/CarouselSlide.example */ "./build/ui/organisms/CarouselSlide.example.js");
/* harmony import */ var _raw_loader_ui_organisms_CarouselSlide_example__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/CarouselSlide.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CarouselSlide.example.jsx");



var _Doc;





/*example*/








var CarouselPage = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CarouselPage, _BasePage);

  function CarouselPage() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = CarouselPage.prototype;

  _proto.render = function render() {
    return _Doc || (_Doc = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_templates_Doc__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_CarouselAnimation_example__WEBPACK_IMPORTED_MODULE_7__["default"],
      header: "Carousel Animation",
      git: "react-atomic/react-atomic-organism/blob/master/packages/organism-react-carousel/",
      npm: "organism-react-carousel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_CarouselAnimation_example__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_CarouselAnimationHideThumb_example__WEBPACK_IMPORTED_MODULE_9__["default"],
      header: "Carousel Animation Hide Thumb",
      git: "react-atomic/react-atomic-organism/blob/master/packages/organism-react-carousel/",
      npm: "organism-react-carousel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_CarouselAnimationHideThumb_example__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_CarouselSlide_example__WEBPACK_IMPORTED_MODULE_11__["default"],
      header: "Carousel Slide (WIP)"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_CarouselSlide_example__WEBPACK_IMPORTED_MODULE_10__["default"], null))));
  };

  return CarouselPage;
}(_pages_BasePage__WEBPACK_IMPORTED_MODULE_4__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(CarouselPage, "defaultProps", {
  pageName: "carousel"
});

/* harmony default export */ __webpack_exports__["default"] = (CarouselPage);

/***/ }),

/***/ "./build/ui/pages/Code.js":
/*!********************************!*\
  !*** ./build/ui/pages/Code.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-code */ "./node_modules/organism-react-code/build/es/src/index.js");
/* harmony import */ var _pages_BasePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/BasePage */ "./build/ui/pages/BasePage.js");
/* harmony import */ var _templates_Doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Doc */ "./build/ui/templates/Doc.js");
/* harmony import */ var _organisms_CodeExample_example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/CodeExample.example */ "./build/ui/organisms/CodeExample.example.js");
/* harmony import */ var _organisms_CodeEditor_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../organisms/CodeEditor.example */ "./build/ui/organisms/CodeEditor.example.js");
/* harmony import */ var _raw_loader_ui_organisms_CodeEditor_example__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/CodeEditor.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CodeEditor.example.jsx");



var _Doc;


/*Base*/








var Code = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Code, _BasePage);

  function Code() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = Code.prototype;

  _proto.render = function render() {
    return _Doc || (_Doc = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_templates_Doc__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_CodeExample_example__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_CodeEditor_example__WEBPACK_IMPORTED_MODULE_8__["default"],
      header: "Codemirror Example"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_CodeEditor_example__WEBPACK_IMPORTED_MODULE_7__["default"], null))));
  };

  return Code;
}(_pages_BasePage__WEBPACK_IMPORTED_MODULE_4__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Code, "defaultProps", {
  pageName: "Code"
});

/* harmony default export */ __webpack_exports__["default"] = (Code);

/***/ }),

/***/ "./build/ui/pages/D3.js":
/*!******************************!*\
  !*** ./build/ui/pages/D3.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-code */ "./node_modules/organism-react-code/build/es/src/index.js");
/* harmony import */ var _pages_BasePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/BasePage */ "./build/ui/pages/BasePage.js");
/* harmony import */ var _templates_Doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Doc */ "./build/ui/templates/Doc.js");
/* harmony import */ var _organisms_D3PieChart_example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/D3PieChart.example */ "./build/ui/organisms/D3PieChart.example.js");
/* harmony import */ var _raw_loader_ui_organisms_D3PieChart_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/D3PieChart.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3PieChart.example.jsx");
/* harmony import */ var _organisms_D3BarChart_example__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../organisms/D3BarChart.example */ "./build/ui/organisms/D3BarChart.example.js");
/* harmony import */ var _raw_loader_ui_organisms_D3BarChart_example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/D3BarChart.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3BarChart.example.jsx");
/* harmony import */ var _organisms_D3LineChart_example__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../organisms/D3LineChart.example */ "./build/ui/organisms/D3LineChart.example.js");
/* harmony import */ var _raw_loader_ui_organisms_D3LineChart_example__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/D3LineChart.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3LineChart.example.jsx");
/* harmony import */ var _organisms_D3AreaChart_example__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../organisms/D3AreaChart.example */ "./build/ui/organisms/D3AreaChart.example.js");
/* harmony import */ var _raw_loader_ui_organisms_D3AreaChart_example__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/D3AreaChart.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3AreaChart.example.jsx");
/* harmony import */ var _organisms_D3Uml_example__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../organisms/D3Uml.example */ "./build/ui/organisms/D3Uml.example.js");
/* harmony import */ var _raw_loader_ui_organisms_D3Uml_example__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/D3Uml.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3Uml.example.jsx");
/* harmony import */ var _organisms_StockChart_example__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../organisms/StockChart.example */ "./build/ui/organisms/StockChart.example.js");
/* harmony import */ var _raw_loader_ui_organisms_StockChart_example__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/StockChart.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/StockChart.example.jsx");



var _Doc;


/*Base*/




/*Sample*/














var D3 = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(D3, _BasePage);

  function D3() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = D3.prototype;

  _proto.render = function render() {
    return _Doc || (_Doc = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_templates_Doc__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_D3Uml_example__WEBPACK_IMPORTED_MODULE_15__["default"],
      header: "D3 Uml",
      id: "d3-uml"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_D3Uml_example__WEBPACK_IMPORTED_MODULE_14__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_D3LineChart_example__WEBPACK_IMPORTED_MODULE_11__["default"],
      header: "D3 Line Chart"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_D3LineChart_example__WEBPACK_IMPORTED_MODULE_10__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_D3AreaChart_example__WEBPACK_IMPORTED_MODULE_13__["default"],
      header: "D3 Area Chart"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_D3AreaChart_example__WEBPACK_IMPORTED_MODULE_12__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_D3BarChart_example__WEBPACK_IMPORTED_MODULE_9__["default"],
      header: "D3 Bar Chart"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_D3BarChart_example__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_D3PieChart_example__WEBPACK_IMPORTED_MODULE_7__["default"],
      header: "D3 Pie Chart"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_D3PieChart_example__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_StockChart_example__WEBPACK_IMPORTED_MODULE_17__["default"],
      header: "Stock Chart"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_StockChart_example__WEBPACK_IMPORTED_MODULE_16__["default"], null))));
  };

  return D3;
}(_pages_BasePage__WEBPACK_IMPORTED_MODULE_4__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(D3, "defaultProps", {
  pageName: "d3"
});

/* harmony default export */ __webpack_exports__["default"] = (D3);

/***/ }),

/***/ "./build/ui/pages/D3UmlPerf.js":
/*!*************************************!*\
  !*** ./build/ui/pages/D3UmlPerf.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-code */ "./node_modules/organism-react-code/build/es/src/index.js");
/* harmony import */ var _pages_BasePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/BasePage */ "./build/ui/pages/BasePage.js");
/* harmony import */ var _templates_Doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Doc */ "./build/ui/templates/Doc.js");
/* harmony import */ var _organisms_D3UmlPerf_example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/D3UmlPerf.example */ "./build/ui/organisms/D3UmlPerf.example.js");
/* harmony import */ var _raw_loader_ui_organisms_D3UmlPerf_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/D3UmlPerf.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3UmlPerf.example.jsx");



var _Doc;


/*Base*/




/*Sample*/




var D3UmlPerfPage = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(D3UmlPerfPage, _BasePage);

  function D3UmlPerfPage() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = D3UmlPerfPage.prototype;

  _proto.render = function render() {
    return _Doc || (_Doc = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_templates_Doc__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_D3UmlPerf_example__WEBPACK_IMPORTED_MODULE_7__["default"],
      header: "D3 Uml",
      id: "d3-uml"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_D3UmlPerf_example__WEBPACK_IMPORTED_MODULE_6__["default"], null))));
  };

  return D3UmlPerfPage;
}(_pages_BasePage__WEBPACK_IMPORTED_MODULE_4__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(D3UmlPerfPage, "defaultProps", {
  pageName: "d3UmlPerf"
});

/* harmony default export */ __webpack_exports__["default"] = (D3UmlPerfPage);

/***/ }),

/***/ "./build/ui/pages/GrapesJs.js":
/*!************************************!*\
  !*** ./build/ui/pages/GrapesJs.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-code */ "./node_modules/organism-react-code/build/es/src/index.js");
/* harmony import */ var _pages_BasePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/BasePage */ "./build/ui/pages/BasePage.js");
/* harmony import */ var _templates_Doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Doc */ "./build/ui/templates/Doc.js");
/* harmony import */ var _organisms_GrapesJs_example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/GrapesJs.example */ "./build/ui/organisms/GrapesJs.example.js");
/* harmony import */ var _raw_loader_ui_organisms_GrapesJs_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/GrapesJs.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/GrapesJs.example.jsx");
/* harmony import */ var _organisms_RTE_example__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../organisms/RTE.example */ "./build/ui/organisms/RTE.example.js");
/* harmony import */ var _raw_loader_ui_organisms_RTE_example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/RTE.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/RTE.example.jsx");



var _Doc;


/*Base*/




/*Sample*/






var GrapesJsPage = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(GrapesJsPage, _BasePage);

  function GrapesJsPage() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = GrapesJsPage.prototype;

  _proto.render = function render() {
    return _Doc || (_Doc = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_templates_Doc__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_GrapesJs_example__WEBPACK_IMPORTED_MODULE_7__["default"],
      header: "GrapesJs Example",
      edit: "https://codesandbox.io/s/organism-react-grapesjs-04mo7",
      git: "react-atomic/react-atomic-organism/tree/master/packages/organism-react-grapesjs/"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_GrapesJs_example__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_RTE_example__WEBPACK_IMPORTED_MODULE_9__["default"],
      header: "RTE Example"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_RTE_example__WEBPACK_IMPORTED_MODULE_8__["default"], null))));
  };

  return GrapesJsPage;
}(_pages_BasePage__WEBPACK_IMPORTED_MODULE_4__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(GrapesJsPage, "defaultProps", {
  pageName: "GrapesJs"
});

/* harmony default export */ __webpack_exports__["default"] = (GrapesJsPage);

/***/ }),

/***/ "./build/ui/pages/Icons.js":
/*!*********************************!*\
  !*** ./build/ui/pages/Icons.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ricon_Account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ricon/Account */ "./node_modules/ricon/Account.js");
/* harmony import */ var ricon_Account__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ricon_Account__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ricon_AccessTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ricon/AccessTime */ "./node_modules/ricon/AccessTime.js");
/* harmony import */ var ricon_AccessTime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ricon_AccessTime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ricon_Add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ricon/Add */ "./node_modules/ricon/Add.js");
/* harmony import */ var ricon_Add__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ricon_Add__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ricon_BarChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ricon/BarChart */ "./node_modules/ricon/BarChart.js");
/* harmony import */ var ricon_BarChart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ricon_BarChart__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ricon_Build__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ricon/Build */ "./node_modules/ricon/Build.js");
/* harmony import */ var ricon_Build__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ricon_Build__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ricon_Blur__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ricon/Blur */ "./node_modules/ricon/Blur.js");
/* harmony import */ var ricon_Blur__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ricon_Blur__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ricon_Calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ricon/Calendar */ "./node_modules/ricon/Calendar.js");
/* harmony import */ var ricon_Calendar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ricon_Calendar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ricon_ChevronRight__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ricon/ChevronRight */ "./node_modules/ricon/ChevronRight.js");
/* harmony import */ var ricon_ChevronRight__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ricon_ChevronRight__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ricon_Code__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ricon/Code */ "./node_modules/ricon/Code.js");
/* harmony import */ var ricon_Code__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ricon_Code__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ricon_CircleLoading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ricon/CircleLoading */ "./node_modules/ricon/CircleLoading.js");
/* harmony import */ var ricon_CircleLoading__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ricon_CircleLoading__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ricon_Dashboard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ricon/Dashboard */ "./node_modules/ricon/Dashboard.js");
/* harmony import */ var ricon_Dashboard__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ricon_Dashboard__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var ricon_Description__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ricon/Description */ "./node_modules/ricon/Description.js");
/* harmony import */ var ricon_Description__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ricon_Description__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var ricon_Device__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ricon/Device */ "./node_modules/ricon/Device.js");
/* harmony import */ var ricon_Device__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ricon_Device__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var ricon_Dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ricon/Dropdown */ "./node_modules/ricon/Dropdown.js");
/* harmony import */ var ricon_Dropdown__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ricon_Dropdown__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var ricon_Download__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ricon/Download */ "./node_modules/ricon/Download.js");
/* harmony import */ var ricon_Download__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ricon_Download__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var ricon_Delete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ricon/Delete */ "./node_modules/ricon/Delete.js");
/* harmony import */ var ricon_Delete__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ricon_Delete__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var ricon_Edit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ricon/Edit */ "./node_modules/ricon/Edit.js");
/* harmony import */ var ricon_Edit__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(ricon_Edit__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var ricon_Email__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ricon/Email */ "./node_modules/ricon/Email.js");
/* harmony import */ var ricon_Email__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(ricon_Email__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var ricon_Exit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ricon/Exit */ "./node_modules/ricon/Exit.js");
/* harmony import */ var ricon_Exit__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(ricon_Exit__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var ricon_File__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ricon/File */ "./node_modules/ricon/File.js");
/* harmony import */ var ricon_File__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(ricon_File__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var ricon_Facebook__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ricon/Facebook */ "./node_modules/ricon/Facebook.js");
/* harmony import */ var ricon_Facebook__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(ricon_Facebook__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var ricon_FacebookMessage__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ricon/FacebookMessage */ "./node_modules/ricon/FacebookMessage.js");
/* harmony import */ var ricon_FacebookMessage__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(ricon_FacebookMessage__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var ricon_FeaturedPlayList__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ricon/FeaturedPlayList */ "./node_modules/ricon/FeaturedPlayList.js");
/* harmony import */ var ricon_FeaturedPlayList__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(ricon_FeaturedPlayList__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var ricon_Git__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ricon/Git */ "./node_modules/ricon/Git.js");
/* harmony import */ var ricon_Git__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(ricon_Git__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var ricon_Help__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ricon/Help */ "./node_modules/ricon/Help.js");
/* harmony import */ var ricon_Help__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(ricon_Help__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var ricon_Hamburger__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ricon/Hamburger */ "./node_modules/ricon/Hamburger.js");
/* harmony import */ var ricon_Hamburger__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(ricon_Hamburger__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var ricon_HamburgerToArrow__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ricon/HamburgerToArrow */ "./node_modules/ricon/HamburgerToArrow.js");
/* harmony import */ var ricon_HamburgerToArrow__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(ricon_HamburgerToArrow__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var ricon_HamburgerToX__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ricon/HamburgerToX */ "./node_modules/ricon/HamburgerToX.js");
/* harmony import */ var ricon_HamburgerToX__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(ricon_HamburgerToX__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var ricon_Home__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ricon/Home */ "./node_modules/ricon/Home.js");
/* harmony import */ var ricon_Home__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(ricon_Home__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var ricon_Link__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ricon/Link */ "./node_modules/ricon/Link.js");
/* harmony import */ var ricon_Link__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(ricon_Link__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var ricon_Monetization__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ricon/Monetization */ "./node_modules/ricon/Monetization.js");
/* harmony import */ var ricon_Monetization__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(ricon_Monetization__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var ricon_MyLocation__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ricon/MyLocation */ "./node_modules/ricon/MyLocation.js");
/* harmony import */ var ricon_MyLocation__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(ricon_MyLocation__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var ricon_Npm__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ricon/Npm */ "./node_modules/ricon/Npm.js");
/* harmony import */ var ricon_Npm__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(ricon_Npm__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var ricon_Notification__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ricon/Notification */ "./node_modules/ricon/Notification.js");
/* harmony import */ var ricon_Notification__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(ricon_Notification__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var ricon_Person__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ricon/Person */ "./node_modules/ricon/Person.js");
/* harmony import */ var ricon_Person__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(ricon_Person__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var ricon_Phone__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ricon/Phone */ "./node_modules/ricon/Phone.js");
/* harmony import */ var ricon_Phone__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(ricon_Phone__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var ricon_Pin__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ricon/Pin */ "./node_modules/ricon/Pin.js");
/* harmony import */ var ricon_Pin__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(ricon_Pin__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var ricon_Play__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ricon/Play */ "./node_modules/ricon/Play.js");
/* harmony import */ var ricon_Play__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(ricon_Play__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var ricon_PlayListAdd__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ricon/PlayListAdd */ "./node_modules/ricon/PlayListAdd.js");
/* harmony import */ var ricon_PlayListAdd__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(ricon_PlayListAdd__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var ricon_Pulse__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ricon/Pulse */ "./node_modules/ricon/Pulse.js");
/* harmony import */ var ricon_Pulse__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(ricon_Pulse__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var ricon_Refresh__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ricon/Refresh */ "./node_modules/ricon/Refresh.js");
/* harmony import */ var ricon_Refresh__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(ricon_Refresh__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var ricon_Reply__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ricon/Reply */ "./node_modules/ricon/Reply.js");
/* harmony import */ var ricon_Reply__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(ricon_Reply__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var ricon_Search__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ricon/Search */ "./node_modules/ricon/Search.js");
/* harmony import */ var ricon_Search__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(ricon_Search__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var ricon_Settings__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ricon/Settings */ "./node_modules/ricon/Settings.js");
/* harmony import */ var ricon_Settings__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(ricon_Settings__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var ricon_ShoppingCart__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ricon/ShoppingCart */ "./node_modules/ricon/ShoppingCart.js");
/* harmony import */ var ricon_ShoppingCart__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(ricon_ShoppingCart__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var ricon_Sort__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ricon/Sort */ "./node_modules/ricon/Sort.js");
/* harmony import */ var ricon_Sort__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(ricon_Sort__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var ricon_Shopee__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ricon/Shopee */ "./node_modules/ricon/Shopee.js");
/* harmony import */ var ricon_Shopee__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(ricon_Shopee__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var ricon_Sync__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ricon/Sync */ "./node_modules/ricon/Sync.js");
/* harmony import */ var ricon_Sync__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(ricon_Sync__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var ricon_TouchApp__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ricon/TouchApp */ "./node_modules/ricon/TouchApp.js");
/* harmony import */ var ricon_TouchApp__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(ricon_TouchApp__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var ricon_Timer__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ricon/Timer */ "./node_modules/ricon/Timer.js");
/* harmony import */ var ricon_Timer__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(ricon_Timer__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var ricon_VerifiedUser__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ricon/VerifiedUser */ "./node_modules/ricon/VerifiedUser.js");
/* harmony import */ var ricon_VerifiedUser__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(ricon_VerifiedUser__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var ricon_Video__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ricon/Video */ "./node_modules/ricon/Video.js");
/* harmony import */ var ricon_Video__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(ricon_Video__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var ricon_Visibility__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ricon/Visibility */ "./node_modules/ricon/Visibility.js");
/* harmony import */ var ricon_Visibility__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(ricon_Visibility__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var ricon_ViewModule__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ricon/ViewModule */ "./node_modules/ricon/ViewModule.js");
/* harmony import */ var ricon_ViewModule__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(ricon_ViewModule__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var ricon_Wifi__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ricon/Wifi */ "./node_modules/ricon/Wifi.js");
/* harmony import */ var ricon_Wifi__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(ricon_Wifi__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var ricon_Wallet__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ricon/Wallet */ "./node_modules/ricon/Wallet.js");
/* harmony import */ var ricon_Wallet__WEBPACK_IMPORTED_MODULE_58___default = /*#__PURE__*/__webpack_require__.n(ricon_Wallet__WEBPACK_IMPORTED_MODULE_58__);
/* harmony import */ var ricon_X__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ricon/X */ "./node_modules/ricon/X.js");
/* harmony import */ var ricon_X__WEBPACK_IMPORTED_MODULE_59___default = /*#__PURE__*/__webpack_require__.n(ricon_X__WEBPACK_IMPORTED_MODULE_59__);
/* harmony import */ var ricon_ZoomIn__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ricon/ZoomIn */ "./node_modules/ricon/ZoomIn.js");
/* harmony import */ var ricon_ZoomIn__WEBPACK_IMPORTED_MODULE_60___default = /*#__PURE__*/__webpack_require__.n(ricon_ZoomIn__WEBPACK_IMPORTED_MODULE_60__);
/* harmony import */ var ricon_Error__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ricon/Error */ "./node_modules/ricon/Error.js");
/* harmony import */ var ricon_Error__WEBPACK_IMPORTED_MODULE_61___default = /*#__PURE__*/__webpack_require__.n(ricon_Error__WEBPACK_IMPORTED_MODULE_61__);
/* harmony import */ var ricon_Warning__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ricon/Warning */ "./node_modules/ricon/Warning.js");
/* harmony import */ var ricon_Warning__WEBPACK_IMPORTED_MODULE_62___default = /*#__PURE__*/__webpack_require__.n(ricon_Warning__WEBPACK_IMPORTED_MODULE_62__);
/* harmony import */ var _pages_BasePage__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ../pages/BasePage */ "./build/ui/pages/BasePage.js");
/* harmony import */ var _templates_Doc__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../templates/Doc */ "./build/ui/templates/Doc.js");




























































 // Alert





var icons = [["Account", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Account__WEBPACK_IMPORTED_MODULE_3___default.a, null)], ["Account (circle)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Account__WEBPACK_IMPORTED_MODULE_3___default.a, {
  type: "circle"
})], ["Account (supervisor)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Account__WEBPACK_IMPORTED_MODULE_3___default.a, {
  type: "supervisor"
})], ["Add", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Add__WEBPACK_IMPORTED_MODULE_5___default.a, null)], ["Add (box)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Add__WEBPACK_IMPORTED_MODULE_5___default.a, {
  type: "box"
})], ["Add (circle)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Add__WEBPACK_IMPORTED_MODULE_5___default.a, {
  type: "circle"
})], ["Add (circleOutline)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Add__WEBPACK_IMPORTED_MODULE_5___default.a, {
  type: "circleOutline"
})], ["AccessTime", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_AccessTime__WEBPACK_IMPORTED_MODULE_4___default.a, null)], ["AccessTime (fill)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_AccessTime__WEBPACK_IMPORTED_MODULE_4___default.a, {
  type: "fill"
})], ["AccessTime (update)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_AccessTime__WEBPACK_IMPORTED_MODULE_4___default.a, {
  type: "update"
})], ["BarChart", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_BarChart__WEBPACK_IMPORTED_MODULE_6___default.a, null)], ["Build", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Build__WEBPACK_IMPORTED_MODULE_7___default.a, null)], ["Blur", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Blur__WEBPACK_IMPORTED_MODULE_8___default.a, null)], ["Calendar", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Calendar__WEBPACK_IMPORTED_MODULE_9___default.a, null)], ["ChevronRight", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_ChevronRight__WEBPACK_IMPORTED_MODULE_10___default.a, null)], ["Code", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Code__WEBPACK_IMPORTED_MODULE_11___default.a, null)], ["CircleLoading", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_CircleLoading__WEBPACK_IMPORTED_MODULE_12___default.a, null)], ["Dashboard", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Dashboard__WEBPACK_IMPORTED_MODULE_13___default.a, null)], ["Delete", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Delete__WEBPACK_IMPORTED_MODULE_18___default.a, null)], ["Delete (forever)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Delete__WEBPACK_IMPORTED_MODULE_18___default.a, {
  type: "forever"
})], ["Delete (sweep)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Delete__WEBPACK_IMPORTED_MODULE_18___default.a, {
  type: "sweep"
})], ["Device (desktop)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Device__WEBPACK_IMPORTED_MODULE_15___default.a, {
  type: "desktop"
})], ["Device (tablet)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Device__WEBPACK_IMPORTED_MODULE_15___default.a, {
  type: "tablet"
})], ["Device (phone)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Device__WEBPACK_IMPORTED_MODULE_15___default.a, {
  type: "phone"
})], ["Download", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Download__WEBPACK_IMPORTED_MODULE_17___default.a, null)], ["Download (file)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Download__WEBPACK_IMPORTED_MODULE_17___default.a, {
  type: "file"
})], ["Dropdown", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Dropdown__WEBPACK_IMPORTED_MODULE_16___default.a, null)], ["Dropdown (up)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Dropdown__WEBPACK_IMPORTED_MODULE_16___default.a, {
  type: "up"
})], ["Dropdown (right)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Dropdown__WEBPACK_IMPORTED_MODULE_16___default.a, {
  type: "right"
})], ["Dropdown (left)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Dropdown__WEBPACK_IMPORTED_MODULE_16___default.a, {
  type: "left"
})], ["Description", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Description__WEBPACK_IMPORTED_MODULE_14___default.a, null)], ["Edit", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Edit__WEBPACK_IMPORTED_MODULE_19___default.a, null)], ["Email", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Email__WEBPACK_IMPORTED_MODULE_20___default.a, null)], ["Exit", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Exit__WEBPACK_IMPORTED_MODULE_21___default.a, null)], ["File", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_File__WEBPACK_IMPORTED_MODULE_22___default.a, null, ".js")], ["Facebook", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Facebook__WEBPACK_IMPORTED_MODULE_23___default.a, null)], ["FacebookMessage", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_FacebookMessage__WEBPACK_IMPORTED_MODULE_24___default.a, null)], ["FeaturedPlayList", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_FeaturedPlayList__WEBPACK_IMPORTED_MODULE_25___default.a, null)], ["Git", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Git__WEBPACK_IMPORTED_MODULE_26___default.a, null)], ["Help", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Help__WEBPACK_IMPORTED_MODULE_27___default.a, null)], ["Home", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Home__WEBPACK_IMPORTED_MODULE_31___default.a, null)], ["Hamburger", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Hamburger__WEBPACK_IMPORTED_MODULE_28___default.a, null)], ["HamburgerToArrow", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_HamburgerToArrow__WEBPACK_IMPORTED_MODULE_29___default.a, {
  on: true
})], ["HamburgerToX", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_HamburgerToX__WEBPACK_IMPORTED_MODULE_30___default.a, {
  on: true
})], ["Link", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Link__WEBPACK_IMPORTED_MODULE_32___default.a, null)], ["Monetization", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Monetization__WEBPACK_IMPORTED_MODULE_33___default.a, null)], ["Monetization", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Monetization__WEBPACK_IMPORTED_MODULE_33___default.a, {
  type: "sign"
})], ["MyLocation (fixed)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_MyLocation__WEBPACK_IMPORTED_MODULE_34___default.a, null)], ["MyLocation (off)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_MyLocation__WEBPACK_IMPORTED_MODULE_34___default.a, {
  type: "off"
})], ["MyLocation (on)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_MyLocation__WEBPACK_IMPORTED_MODULE_34___default.a, {
  type: "on"
})], ["MyLocation (loading)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_MyLocation__WEBPACK_IMPORTED_MODULE_34___default.a, {
  loading: true,
  type: "on"
})], ["Npm", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Npm__WEBPACK_IMPORTED_MODULE_35___default.a, null)], ["Notification", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Notification__WEBPACK_IMPORTED_MODULE_36___default.a, null)], ["Notification (active)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Notification__WEBPACK_IMPORTED_MODULE_36___default.a, {
  type: "active"
})], ["Notification (none)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Notification__WEBPACK_IMPORTED_MODULE_36___default.a, {
  type: "none"
})], ["Notification (off)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Notification__WEBPACK_IMPORTED_MODULE_36___default.a, {
  type: "off"
})], ["Notification (paused)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Notification__WEBPACK_IMPORTED_MODULE_36___default.a, {
  type: "paused"
})], ["Person", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Person__WEBPACK_IMPORTED_MODULE_37___default.a, null)], ["Person (add)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Person__WEBPACK_IMPORTED_MODULE_37___default.a, {
  type: "add"
})], ["Phone", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Phone__WEBPACK_IMPORTED_MODULE_38___default.a, null)], ["Pin", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Pin__WEBPACK_IMPORTED_MODULE_39___default.a, null)], ["Pulse", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Pulse__WEBPACK_IMPORTED_MODULE_42___default.a, null)], ["Pulse (breath)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Pulse__WEBPACK_IMPORTED_MODULE_42___default.a, {
  animation: "breath"
})], ["Play", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Play__WEBPACK_IMPORTED_MODULE_40___default.a, null)], ["PlayListAdd", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_PlayListAdd__WEBPACK_IMPORTED_MODULE_41___default.a, null)], ["Refresh", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Refresh__WEBPACK_IMPORTED_MODULE_43___default.a, null)], ["Reply", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Reply__WEBPACK_IMPORTED_MODULE_44___default.a, null)], ["Reply (right)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Reply__WEBPACK_IMPORTED_MODULE_44___default.a, {
  type: "right"
})], ["Search", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Search__WEBPACK_IMPORTED_MODULE_45___default.a, null)], ["Settings", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Settings__WEBPACK_IMPORTED_MODULE_46___default.a, null)], ["Settings", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Settings__WEBPACK_IMPORTED_MODULE_46___default.a, {
  type: "square"
})], ["ShoppingCart", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_ShoppingCart__WEBPACK_IMPORTED_MODULE_47___default.a, null)], ["Sort", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Sort__WEBPACK_IMPORTED_MODULE_48___default.a, null)], ["Shopee", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Shopee__WEBPACK_IMPORTED_MODULE_49___default.a, null)], ["Sync", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Sync__WEBPACK_IMPORTED_MODULE_50___default.a, null)], ["Sync (disabled)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Sync__WEBPACK_IMPORTED_MODULE_50___default.a, {
  type: "disabled"
})], ["Sync (problem)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Sync__WEBPACK_IMPORTED_MODULE_50___default.a, {
  type: "problem"
})], ["TouchApp", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_TouchApp__WEBPACK_IMPORTED_MODULE_51___default.a, null)], ["Timer", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Timer__WEBPACK_IMPORTED_MODULE_52___default.a, null)], ["Timer (off)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Timer__WEBPACK_IMPORTED_MODULE_52___default.a, {
  type: "off"
})], ["VerifiedUser", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_VerifiedUser__WEBPACK_IMPORTED_MODULE_53___default.a, null)], ["Video", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Video__WEBPACK_IMPORTED_MODULE_54___default.a, null)], ["Visibility", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Visibility__WEBPACK_IMPORTED_MODULE_55___default.a, null)], ["ViewModule", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_ViewModule__WEBPACK_IMPORTED_MODULE_56___default.a, null)], ["Wifi", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Wifi__WEBPACK_IMPORTED_MODULE_57___default.a, null)], ["Wallet", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Wallet__WEBPACK_IMPORTED_MODULE_58___default.a, null)], ["X", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_X__WEBPACK_IMPORTED_MODULE_59___default.a, {
  style: {
    position: "static"
  }
})], ["ZoomIn", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_ZoomIn__WEBPACK_IMPORTED_MODULE_60___default.a, null)], // Alert
["Error", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Error__WEBPACK_IMPORTED_MODULE_61___default.a, null)], ["Warning", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Warning__WEBPACK_IMPORTED_MODULE_62___default.a, null)]];

var Icons = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Icons, _BasePage);

  function Icons() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = Icons.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_templates_Doc__WEBPACK_IMPORTED_MODULE_64__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "pure-g"
    }, icons.map(function (v, k) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        key: k,
        className: "pure-u-1 pure-u-md-1-3 pure-u-lg-1-5",
        style: Styles.grid
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: Styles.icon
      }, v[1]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, v[0]));
    })));
  };

  return Icons;
}(_pages_BasePage__WEBPACK_IMPORTED_MODULE_63__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Icons, "defaultProps", {
  pageName: "icons"
});

/* harmony default export */ __webpack_exports__["default"] = (Icons);
var Styles = {
  grid: {
    textAlign: "center"
  },
  icon: {
    maxWidth: 30,
    minHeight: 30,
    maxHeight: 30,
    margin: "0 auto 10px",
    position: "relative"
  }
};

/***/ }),

/***/ "./build/ui/pages/JSON.js":
/*!********************************!*\
  !*** ./build/ui/pages/JSON.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-code */ "./node_modules/organism-react-code/build/es/src/index.js");
/* harmony import */ var _pages_BasePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/BasePage */ "./build/ui/pages/BasePage.js");
/* harmony import */ var _templates_Doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Doc */ "./build/ui/templates/Doc.js");
/* harmony import */ var _organisms_QueryToJSON__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/QueryToJSON */ "./build/ui/organisms/QueryToJSON.js");
/* harmony import */ var _raw_loader_ui_organisms_QueryToJSON__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/QueryToJSON */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/QueryToJSON.jsx");



var _Doc;


/*Base*/




/*Sample*/




var JSON = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(JSON, _BasePage);

  function JSON() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = JSON.prototype;

  _proto.render = function render() {
    return _Doc || (_Doc = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_templates_Doc__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_QueryToJSON__WEBPACK_IMPORTED_MODULE_7__["default"],
      header: "Query To JSON"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_QueryToJSON__WEBPACK_IMPORTED_MODULE_6__["default"], null))));
  };

  return JSON;
}(_pages_BasePage__WEBPACK_IMPORTED_MODULE_4__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(JSON, "defaultProps", {
  pageName: "JSON"
});

/* harmony default export */ __webpack_exports__["default"] = (JSON);

/***/ }),

/***/ "./build/ui/pages/List.js":
/*!********************************!*\
  !*** ./build/ui/pages/List.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-code */ "./node_modules/organism-react-code/build/es/src/index.js");
/* harmony import */ var _pages_BasePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/BasePage */ "./build/ui/pages/BasePage.js");
/* harmony import */ var _templates_Doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Doc */ "./build/ui/templates/Doc.js");
/* harmony import */ var _organisms_GridList_example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/GridList.example */ "./build/ui/organisms/GridList.example.js");
/* harmony import */ var _raw_loader_ui_organisms_GridList_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/GridList.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/GridList.example.jsx");
/* harmony import */ var _organisms_HtmlTableList_example__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../organisms/HtmlTableList.example */ "./build/ui/organisms/HtmlTableList.example.js");
/* harmony import */ var _raw_loader_ui_organisms_HtmlTableList_example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/HtmlTableList.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/HtmlTableList.example.jsx");
/* harmony import */ var _organisms_ReactVirtualizedTableList_example__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../organisms/ReactVirtualizedTableList.example */ "./build/ui/organisms/ReactVirtualizedTableList.example.js");
/* harmony import */ var _raw_loader_ui_organisms_ReactVirtualizedTableList_example__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/ReactVirtualizedTableList.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/ReactVirtualizedTableList.example.jsx");
/* harmony import */ var _organisms_FixedDataTableList_example__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../organisms/FixedDataTableList.example */ "./build/ui/organisms/FixedDataTableList.example.js");
/* harmony import */ var _raw_loader_ui_organisms_FixedDataTableList_example__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/FixedDataTableList.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FixedDataTableList.example.jsx");
/* harmony import */ var _organisms_Pagination_example__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../organisms/Pagination.example */ "./build/ui/organisms/Pagination.example.js");
/* harmony import */ var _raw_loader_ui_organisms_Pagination_example__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/Pagination.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Pagination.example.jsx");



var _Doc;


/*Base*/




/*Sample*/












var List = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(List, _BasePage);

  function List() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = List.prototype;

  _proto.render = function render() {
    return _Doc || (_Doc = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_templates_Doc__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_GridList_example__WEBPACK_IMPORTED_MODULE_7__["default"],
      header: "Grid List"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_GridList_example__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_HtmlTableList_example__WEBPACK_IMPORTED_MODULE_9__["default"],
      header: "Html Table"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_HtmlTableList_example__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_ReactVirtualizedTableList_example__WEBPACK_IMPORTED_MODULE_11__["default"],
      header: "React Virgualized Table"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_ReactVirtualizedTableList_example__WEBPACK_IMPORTED_MODULE_10__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_FixedDataTableList_example__WEBPACK_IMPORTED_MODULE_13__["default"],
      header: "Fixed Data Table"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_FixedDataTableList_example__WEBPACK_IMPORTED_MODULE_12__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_Pagination_example__WEBPACK_IMPORTED_MODULE_15__["default"],
      header: "Pagination"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_Pagination_example__WEBPACK_IMPORTED_MODULE_14__["default"], null))));
  };

  return List;
}(_pages_BasePage__WEBPACK_IMPORTED_MODULE_4__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(List, "defaultProps", {
  pageName: "list"
});

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./build/ui/pages/Molecules.js":
/*!*************************************!*\
  !*** ./build/ui/pages/Molecules.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_BasePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/BasePage */ "./build/ui/pages/BasePage.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var react_atomic_organism__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-atomic-organism */ "./node_modules/react-atomic-organism/build/es/src/index.js");
/* harmony import */ var _templates_Doc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../templates/Doc */ "./build/ui/templates/Doc.js");



var _Doc;







var Molecules = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Molecules, _BasePage);

  function Molecules() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = Molecules.prototype;

  _proto.render = function render() {
    return _Doc || (_Doc = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_templates_Doc__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["DividingHeader"], null, "Input box"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "Inputbox"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      atom: "input"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "Inputbox with button"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["InputBox"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "Search Box"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_atomic_organism__WEBPACK_IMPORTED_MODULE_5__["SearchBox"], null)));
  };

  return Molecules;
}(_pages_BasePage__WEBPACK_IMPORTED_MODULE_3__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Molecules, "defaultProps", {
  pageName: "molecules"
});

/* harmony default export */ __webpack_exports__["default"] = (Molecules);

/***/ }),

/***/ "./build/ui/pages/Organisms.js":
/*!*************************************!*\
  !*** ./build/ui/pages/Organisms.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-code */ "./node_modules/organism-react-code/build/es/src/index.js");
/* harmony import */ var _pages_BasePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/BasePage */ "./build/ui/pages/BasePage.js");
/* harmony import */ var _templates_Doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Doc */ "./build/ui/templates/Doc.js");
/* harmony import */ var _organisms_PageLoadProgressHandler_example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/PageLoadProgressHandler.example */ "./build/ui/organisms/PageLoadProgressHandler.example.js");
/* harmony import */ var _raw_loader_ui_organisms_PageLoadProgressHandler_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/PageLoadProgressHandler.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/PageLoadProgressHandler.example.jsx");
/* harmony import */ var _organisms_PageLoadProgressHandlerWithAjax_example__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../organisms/PageLoadProgressHandlerWithAjax.example */ "./build/ui/organisms/PageLoadProgressHandlerWithAjax.example.js");
/* harmony import */ var _raw_loader_ui_organisms_PageLoadProgressHandlerWithAjax_example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/PageLoadProgressHandlerWithAjax.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/PageLoadProgressHandlerWithAjax.example.jsx");
/* harmony import */ var _organisms_AjaxDownload_example__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../organisms/AjaxDownload.example */ "./build/ui/organisms/AjaxDownload.example.js");
/* harmony import */ var _raw_loader_ui_organisms_AjaxDownload_example__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/AjaxDownload.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AjaxDownload.example.jsx");
/* harmony import */ var _organisms_Dropzone_example__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../organisms/Dropzone.example */ "./build/ui/organisms/Dropzone.example.js");
/* harmony import */ var _raw_loader_ui_organisms_Dropzone_example__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/Dropzone.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Dropzone.example.jsx");
/* harmony import */ var _organisms_FBLike_example__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../organisms/FBLike.example */ "./build/ui/organisms/FBLike.example.js");
/* harmony import */ var _raw_loader_ui_organisms_FBLike_example__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/FBLike.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FBLike.example.jsx");
/* harmony import */ var _organisms_FBPage_example__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../organisms/FBPage.example */ "./build/ui/organisms/FBPage.example.js");
/* harmony import */ var _raw_loader_ui_organisms_FBPage_example__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/FBPage.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FBPage.example.jsx");
/* harmony import */ var _organisms_TabView_example__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../organisms/TabView.example */ "./build/ui/organisms/TabView.example.js");
/* harmony import */ var _raw_loader_ui_organisms_TabView_example__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/TabView.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/TabView.example.jsx");
/* harmony import */ var _organisms_RadioGroup_example__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../organisms/RadioGroup.example */ "./build/ui/organisms/RadioGroup.example.js");
/* harmony import */ var _raw_loader_ui_organisms_RadioGroup_example__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/RadioGroup.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/RadioGroup.example.jsx");
/* harmony import */ var _organisms_Checkbox_example__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../organisms/Checkbox.example */ "./build/ui/organisms/Checkbox.example.js");
/* harmony import */ var _raw_loader_ui_organisms_Checkbox_example__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/Checkbox.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Checkbox.example.jsx");
/* harmony import */ var _organisms_Suggestion_example__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../organisms/Suggestion.example */ "./build/ui/organisms/Suggestion.example.js");
/* harmony import */ var _raw_loader_ui_organisms_Suggestion_example__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/Suggestion.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Suggestion.example.jsx");
/* harmony import */ var _organisms_TagInput_example__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../organisms/TagInput.example */ "./build/ui/organisms/TagInput.example.js");
/* harmony import */ var _raw_loader_ui_organisms_TagInput_example__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/TagInput.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/TagInput.example.jsx");
/* harmony import */ var _organisms_ErrorForm_example__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../organisms/ErrorForm.example */ "./build/ui/organisms/ErrorForm.example.js");
/* harmony import */ var _raw_loader_ui_organisms_ErrorForm_example__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/ErrorForm.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/ErrorForm.example.jsx");



var _Doc;




 // example


























var Organisms = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Organisms, _BasePage);

  function Organisms() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = Organisms.prototype;

  _proto.render = function render() {
    return _Doc || (_Doc = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_templates_Doc__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_TagInput_example__WEBPACK_IMPORTED_MODULE_27__["default"],
      header: "Tag input",
      id: "tag-input"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_TagInput_example__WEBPACK_IMPORTED_MODULE_26__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_ErrorForm_example__WEBPACK_IMPORTED_MODULE_29__["default"],
      header: "Error Form",
      id: "errorForm"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_ErrorForm_example__WEBPACK_IMPORTED_MODULE_28__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_PageLoadProgressHandler_example__WEBPACK_IMPORTED_MODULE_7__["default"],
      header: "Page Load Progress",
      git: "react-atomic/react-atomic-organism/blob/master/packages/organism-react-progress/",
      npm: "organism-react-progress"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_PageLoadProgressHandler_example__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_PageLoadProgressHandlerWithAjax_example__WEBPACK_IMPORTED_MODULE_9__["default"],
      header: "Page Load Progress With Ajax"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_PageLoadProgressHandlerWithAjax_example__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_AjaxDownload_example__WEBPACK_IMPORTED_MODULE_11__["default"],
      id: "ajax-save",
      header: "Ajax Save (Downloader)"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_AjaxDownload_example__WEBPACK_IMPORTED_MODULE_10__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_Dropzone_example__WEBPACK_IMPORTED_MODULE_13__["default"],
      header: "Dropzone"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_Dropzone_example__WEBPACK_IMPORTED_MODULE_12__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_FBLike_example__WEBPACK_IMPORTED_MODULE_15__["default"],
      header: "Facebook Like Button",
      git: "react-atomic/react-atomic-organism/blob/master/packages/organism-react-facebook/",
      npm: "organism-react-facebook",
      id: "organism-react-facebook"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_FBLike_example__WEBPACK_IMPORTED_MODULE_14__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_FBPage_example__WEBPACK_IMPORTED_MODULE_17__["default"],
      header: "Facebook Page Plugin"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_FBPage_example__WEBPACK_IMPORTED_MODULE_16__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_Suggestion_example__WEBPACK_IMPORTED_MODULE_25__["default"],
      header: "Suggestion",
      id: "suggestion"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_Suggestion_example__WEBPACK_IMPORTED_MODULE_24__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_TabView_example__WEBPACK_IMPORTED_MODULE_19__["default"],
      header: "Tab View",
      id: "tab"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_TabView_example__WEBPACK_IMPORTED_MODULE_18__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_RadioGroup_example__WEBPACK_IMPORTED_MODULE_21__["default"],
      header: "Radio Group",
      id: "radioGroup",
      edit: "https://codesandbox.io/embed/jjq8ko2krv?module=%2Fsrc%2FradioGroup.js&moduleview=1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_RadioGroup_example__WEBPACK_IMPORTED_MODULE_20__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_Checkbox_example__WEBPACK_IMPORTED_MODULE_23__["default"],
      header: "Checkbox",
      id: "checkbox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_Checkbox_example__WEBPACK_IMPORTED_MODULE_22__["default"], null))));
  };

  return Organisms;
}(_pages_BasePage__WEBPACK_IMPORTED_MODULE_4__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Organisms, "defaultProps", {
  pageName: "organisms"
});

/* harmony default export */ __webpack_exports__["default"] = (Organisms);

/***/ }),

/***/ "./build/ui/pages/PDF.js":
/*!*******************************!*\
  !*** ./build/ui/pages/PDF.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-code */ "./node_modules/organism-react-code/build/es/src/index.js");
/* harmony import */ var _pages_BasePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/BasePage */ "./build/ui/pages/BasePage.js");
/* harmony import */ var _templates_Doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Doc */ "./build/ui/templates/Doc.js");
/* harmony import */ var _organisms_HTMLToCanvans_example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/HTMLToCanvans.example */ "./build/ui/organisms/HTMLToCanvans.example.js");
/* harmony import */ var _raw_loader_ui_organisms_HTMLToCanvans_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/HTMLToCanvans.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/HTMLToCanvans.example.jsx");



var _Doc;


/*Base*/




/*Sample*/




var PDF = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PDF, _BasePage);

  function PDF() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = PDF.prototype;

  _proto.render = function render() {
    return _Doc || (_Doc = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_templates_Doc__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_HTMLToCanvans_example__WEBPACK_IMPORTED_MODULE_7__["default"],
      header: "PDF Example"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_HTMLToCanvans_example__WEBPACK_IMPORTED_MODULE_6__["default"], null))));
  };

  return PDF;
}(_pages_BasePage__WEBPACK_IMPORTED_MODULE_4__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(PDF, "defaultProps", {
  pageName: "PDF"
});

/* harmony default export */ __webpack_exports__["default"] = (PDF);

/***/ }),

/***/ "./build/ui/pages/Parallax.js":
/*!************************************!*\
  !*** ./build/ui/pages/Parallax.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-code */ "./node_modules/organism-react-code/build/es/src/index.js");
/* harmony import */ var _pages_BasePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/BasePage */ "./build/ui/pages/BasePage.js");
/* harmony import */ var _templates_Doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Doc */ "./build/ui/templates/Doc.js");
/* harmony import */ var _organisms_ParallaxBackgroundImage_example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/ParallaxBackgroundImage.example */ "./build/ui/organisms/ParallaxBackgroundImage.example.js");
/* harmony import */ var _raw_loader_ui_organisms_ParallaxBackgroundImage_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/ParallaxBackgroundImage.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/ParallaxBackgroundImage.example.jsx");



var _CodeExample;


/*Base*/







var Parallax = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Parallax, _BasePage);

  function Parallax() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = Parallax.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_templates_Doc__WEBPACK_IMPORTED_MODULE_5__["default"], {
      style: Styles.page
    }, _CodeExample || (_CodeExample = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_ParallaxBackgroundImage_example__WEBPACK_IMPORTED_MODULE_7__["default"],
      header: "YouTube RWD player"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_ParallaxBackgroundImage_example__WEBPACK_IMPORTED_MODULE_6__["default"], null))));
  };

  return Parallax;
}(_pages_BasePage__WEBPACK_IMPORTED_MODULE_4__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Parallax, "defaultProps", {
  pageName: "parallax"
});

/* harmony default export */ __webpack_exports__["default"] = (Parallax);
var Styles = {
  page: {
    padding: "100vh 0 100vh"
  }
};

/***/ }),

/***/ "./build/ui/pages/Popup.js":
/*!*********************************!*\
  !*** ./build/ui/pages/Popup.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-code */ "./node_modules/organism-react-code/build/es/src/index.js");
/* harmony import */ var _pages_BasePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/BasePage */ "./build/ui/pages/BasePage.js");
/* harmony import */ var _templates_Doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Doc */ "./build/ui/templates/Doc.js");
/* harmony import */ var _organisms_Popup_example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/Popup.example */ "./build/ui/organisms/Popup.example.js");
/* harmony import */ var _raw_loader_ui_organisms_Popup_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/Popup.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Popup.example.jsx");
/* harmony import */ var _organisms_FullScreen_example__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../organisms/FullScreen.example */ "./build/ui/organisms/FullScreen.example.js");
/* harmony import */ var _raw_loader_ui_organisms_FullScreen_example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/FullScreen.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FullScreen.example.jsx");
/* harmony import */ var _organisms_Spotlight_example__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../organisms/Spotlight.example */ "./build/ui/organisms/Spotlight.example.js");
/* harmony import */ var _raw_loader_ui_organisms_Spotlight_example__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/Spotlight.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Spotlight.example.jsx");
/* harmony import */ var _organisms_AlertsNotifier_example__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../organisms/AlertsNotifier.example */ "./build/ui/organisms/AlertsNotifier.example.js");
/* harmony import */ var _raw_loader_ui_organisms_AlertsNotifier_example__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/AlertsNotifier.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AlertsNotifier.example.jsx");
/* harmony import */ var _organisms_WindowOffset_example__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../organisms/WindowOffset.example */ "./build/ui/organisms/WindowOffset.example.js");
/* harmony import */ var _raw_loader_ui_organisms_WindowOffset_example__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/WindowOffset.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/WindowOffset.example.jsx");
/* harmony import */ var _organisms_ReshowMessage_example__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../organisms/ReshowMessage.example */ "./build/ui/organisms/ReshowMessage.example.js");
/* harmony import */ var _raw_loader_ui_organisms_ReshowMessage_example__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/ReshowMessage.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/ReshowMessage.example.jsx");



var _Doc;


/*Base*/




/*Sample*/














var Popup = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Popup, _BasePage);

  function Popup() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = Popup.prototype;

  _proto.render = function render() {
    return _Doc || (_Doc = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_templates_Doc__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_Popup_example__WEBPACK_IMPORTED_MODULE_7__["default"],
      header: "Popup Example"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_Popup_example__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_FullScreen_example__WEBPACK_IMPORTED_MODULE_9__["default"],
      header: "Full Screen Example"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_FullScreen_example__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_AlertsNotifier_example__WEBPACK_IMPORTED_MODULE_13__["default"],
      header: "Alerts Notifier Example"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_AlertsNotifier_example__WEBPACK_IMPORTED_MODULE_12__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_WindowOffset_example__WEBPACK_IMPORTED_MODULE_15__["default"],
      header: "Detect Window Offset Example",
      id: "get-window-offset"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_WindowOffset_example__WEBPACK_IMPORTED_MODULE_14__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_Spotlight_example__WEBPACK_IMPORTED_MODULE_11__["default"],
      header: "Spotlight Example"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_Spotlight_example__WEBPACK_IMPORTED_MODULE_10__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_ReshowMessage_example__WEBPACK_IMPORTED_MODULE_17__["default"],
      header: "Reshow Message Example"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_ReshowMessage_example__WEBPACK_IMPORTED_MODULE_16__["default"], null))));
  };

  return Popup;
}(_pages_BasePage__WEBPACK_IMPORTED_MODULE_4__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Popup, "defaultProps", {
  pageName: "popup"
});

/* harmony default export */ __webpack_exports__["default"] = (Popup);

/***/ }),

/***/ "./build/ui/pages/Video.js":
/*!*********************************!*\
  !*** ./build/ui/pages/Video.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-code */ "./node_modules/organism-react-code/build/es/src/index.js");
/* harmony import */ var _pages_BasePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/BasePage */ "./build/ui/pages/BasePage.js");
/* harmony import */ var _templates_Doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Doc */ "./build/ui/templates/Doc.js");
/* harmony import */ var _organisms_YouTubeRWD_example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/YouTubeRWD.example */ "./build/ui/organisms/YouTubeRWD.example.js");
/* harmony import */ var _raw_loader_ui_organisms_YouTubeRWD_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/YouTubeRWD.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/YouTubeRWD.example.jsx");
/* harmony import */ var _organisms_QQVideo_example__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../organisms/QQVideo.example */ "./build/ui/organisms/QQVideo.example.js");
/* harmony import */ var _raw_loader_ui_organisms_QQVideo_example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/QQVideo.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/QQVideo.example.jsx");



var _Doc;


/*Base*/









var Video = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Video, _BasePage);

  function Video() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = Video.prototype;

  _proto.render = function render() {
    return _Doc || (_Doc = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_templates_Doc__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_YouTubeRWD_example__WEBPACK_IMPORTED_MODULE_7__["default"],
      header: "YouTube RWD player"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_YouTubeRWD_example__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
      code: _raw_loader_ui_organisms_QQVideo_example__WEBPACK_IMPORTED_MODULE_9__["default"],
      header: "v.qq.com player"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_QQVideo_example__WEBPACK_IMPORTED_MODULE_8__["default"], null))));
  };

  return Video;
}(_pages_BasePage__WEBPACK_IMPORTED_MODULE_4__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Video, "defaultProps", {
  pageName: "video"
});

/* harmony default export */ __webpack_exports__["default"] = (Video);

/***/ }),

/***/ "./build/ui/pages/index.js":
/*!*********************************!*\
  !*** ./build/ui/pages/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/extends */ "./node_modules/reshow-runtime/es/helpers/extends.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutPropertiesLoose */ "./node_modules/reshow-runtime/es/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reshow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow */ "./node_modules/reshow/build/es/src/index.js");
/* harmony import */ var reshow_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-url */ "./node_modules/reshow-url/build/es/src/index.js");
/* harmony import */ var organism_react_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! organism-react-popup */ "./node_modules/organism-react-popup/build/es/src/index.js");
/* harmony import */ var organism_react_progress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! organism-react-progress */ "./node_modules/organism-react-progress/build/es/src/index.js");
/* harmony import */ var organism_react_i13n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! organism-react-i13n */ "./node_modules/organism-react-i13n/build/es/src/index.js");
/* harmony import */ var _pages_Atoms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/Atoms */ "./build/ui/pages/Atoms.js");
/* harmony import */ var _pages_Molecules__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/Molecules */ "./build/ui/pages/Molecules.js");
/* harmony import */ var _pages_Organisms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/Organisms */ "./build/ui/pages/Organisms.js");
/* harmony import */ var _pages_Icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/Icons */ "./build/ui/pages/Icons.js");
/* harmony import */ var _pages_List__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pages/List */ "./build/ui/pages/List.js");
/* harmony import */ var _pages_Carousel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pages/Carousel */ "./build/ui/pages/Carousel.js");
/* harmony import */ var _pages_D3__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../pages/D3 */ "./build/ui/pages/D3.js");
/* harmony import */ var _pages_D3UmlPerf__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../pages/D3UmlPerf */ "./build/ui/pages/D3UmlPerf.js");
/* harmony import */ var _pages_Animation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../pages/Animation */ "./build/ui/pages/Animation.js");
/* harmony import */ var _pages_Popup__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../pages/Popup */ "./build/ui/pages/Popup.js");
/* harmony import */ var _pages_Video__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../pages/Video */ "./build/ui/pages/Video.js");
/* harmony import */ var _pages_Parallax__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../pages/Parallax */ "./build/ui/pages/Parallax.js");
/* harmony import */ var _pages_Code__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../pages/Code */ "./build/ui/pages/Code.js");
/* harmony import */ var _pages_AsciiDoc__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../pages/AsciiDoc */ "./build/ui/pages/AsciiDoc.js");
/* harmony import */ var _pages_GrapesJs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../pages/GrapesJs */ "./build/ui/pages/GrapesJs.js");
/* harmony import */ var _pages_PDF__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../pages/PDF */ "./build/ui/pages/PDF.js");
/* harmony import */ var _pages_JSON__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../pages/JSON */ "./build/ui/pages/JSON.js");



var _PopupPool, _PageLoadProgressHand, _I13nElement, _ReshowMessage;
























var themes = {
  atoms: _pages_Atoms__WEBPACK_IMPORTED_MODULE_8__["default"],
  molecules: _pages_Molecules__WEBPACK_IMPORTED_MODULE_9__["default"],
  organisms: _pages_Organisms__WEBPACK_IMPORTED_MODULE_10__["default"],
  d3: _pages_D3__WEBPACK_IMPORTED_MODULE_14__["default"],
  d3UmlPerf: _pages_D3UmlPerf__WEBPACK_IMPORTED_MODULE_15__["default"],
  icons: _pages_Icons__WEBPACK_IMPORTED_MODULE_11__["default"],
  list: _pages_List__WEBPACK_IMPORTED_MODULE_12__["default"],
  carousel: _pages_Carousel__WEBPACK_IMPORTED_MODULE_13__["default"],
  animation: _pages_Animation__WEBPACK_IMPORTED_MODULE_16__["default"],
  popup: _pages_Popup__WEBPACK_IMPORTED_MODULE_17__["default"],
  parallax: _pages_Parallax__WEBPACK_IMPORTED_MODULE_19__["default"],
  video: _pages_Video__WEBPACK_IMPORTED_MODULE_18__["default"],
  Code: _pages_Code__WEBPACK_IMPORTED_MODULE_20__["default"],
  AsciiDoc: _pages_AsciiDoc__WEBPACK_IMPORTED_MODULE_21__["default"],
  GrapesJs: _pages_GrapesJs__WEBPACK_IMPORTED_MODULE_22__["default"],
  PDF: _pages_PDF__WEBPACK_IMPORTED_MODULE_23__["default"],
  JSON: _pages_JSON__WEBPACK_IMPORTED_MODULE_24__["default"]
};

var Index = function Index(props) {
  var themePath = props.themePath,
      others = Object(reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["themePath"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reshow_url__WEBPACK_IMPORTED_MODULE_4__["ClientRoute"], Object(reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, others, {
    themes: themes,
    defaultThemePath: "atoms"
  })), _PopupPool || (_PopupPool = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_5__["PopupPool"], null)), _PageLoadProgressHand || (_PageLoadProgressHand = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_progress__WEBPACK_IMPORTED_MODULE_6__["PageLoadProgressHandler"], {
    ajax: true
  })), _I13nElement || (_I13nElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_i13n__WEBPACK_IMPORTED_MODULE_7__["I13nElement"], null)), _ReshowMessage || (_ReshowMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reshow__WEBPACK_IMPORTED_MODULE_3__["ReshowMessage"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./build/ui/templates/Doc.js":
/*!***********************************!*\
  !*** ./build/ui/templates/Doc.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/extends */ "./node_modules/reshow-runtime/es/helpers/extends.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutPropertiesLoose */ "./node_modules/reshow-runtime/es/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var pmvc_react_admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pmvc_react_admin */ "./node_modules/pmvc_react_admin/build/src/index.js");
/* harmony import */ var pmvc_react_admin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pmvc_react_admin__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _organisms_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../organisms/Menu */ "./build/ui/organisms/Menu.js");



var _Menu;




var DocTemplate = Object(pmvc_react_admin__WEBPACK_IMPORTED_MODULE_3__["getDocTemplate"])({}, true, {
  sideWidth: 160
});

var Doc = function Doc(_ref) {
  var children = _ref.children,
      props = Object(reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DocTemplate, Object(reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    body: children,
    menu: _Menu || (_Menu = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_Menu__WEBPACK_IMPORTED_MODULE_4__["default"], null))
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Doc);

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AjaxDownload.example.jsx":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AjaxDownload.example.jsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\nimport { PageLoadProgressHandler } from \"organism-react-progress\";\nimport { ajaxDispatch } from \"organism-react-ajax\";\nimport { Button } from \"react-atomic-molecule\";\nimport { download } from \"ajax-save\";\n\nconst AjaxDownloadExample = (props) => {\n  const url =\n    \"https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg\";\n  return (\n    <Button\n      onClick={() => {\n        ajaxDispatch(\"ajaxGet\", {\n          responseType: [\"blob\"],\n          url,\n          callback: (json, text, o) => {\n            download(o.body, url.split(\"/\").splice(-1)[0]);\n          },\n        });\n      }}\n    >\n      Ajax Download\n    </Button>\n  );\n};\n\nexport default AjaxDownloadExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AlertsNotifier.example.jsx":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AlertsNotifier.example.jsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { PureComponent } from \"react\";\n\nimport { AlertsNotifier, PopupClick } from \"organism-react-popup\";\n\nclass AlertsNotifierExample extends PureComponent {\n  render() {\n    return (\n      <PopupClick\n        style={Styles.click}\n        popup={() => (\n          <AlertsNotifier\n            position=\"bottom\"\n            alerts={[\n              {\n                type: \"info\",\n                message: \"test\",\n              },\n            ]}\n          />\n        )}\n        component={<a />}\n      >\n        alert\n      </PopupClick>\n    );\n  }\n}\n\nexport default AlertsNotifierExample;\n\nconst Styles = {\n  click: {\n    color: \"blue\",\n    textDecoration: \"underline\",\n  },\n};\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Animation.example.jsx":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Animation.example.jsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { Component, cloneElement } from \"react\";\nimport Animate from \"organism-react-animate\";\n\nconst hello = <div>Hello world!!</div>;\n\nclass AnimationExample extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      dom: hello,\n    };\n  }\n\n  render() {\n    return (\n      <div>\n        <Animate\n          appear=\"fadeInRight-3000\"\n          enter=\"fadeInRight-3000\"\n          leave=\"fadeOutRight-1000\"\n        >\n          {this.state.dom}\n        </Animate>\n        <a\n          href=\"#\"\n          style={{ marginLeft: \"10px\" }}\n          onClick={((e) => {\n            e.preventDefault();\n            this.setState({\n              dom: null,\n            });\n          }).bind(this)}\n        >\n          leave\n        </a>\n\n        <a\n          href=\"#\"\n          style={{ marginLeft: \"10px\" }}\n          onClick={((e) => {\n            e.preventDefault();\n            this.setState({\n              dom: hello,\n            });\n          }).bind(this)}\n        >\n          enter\n        </a>\n      </div>\n    );\n  }\n}\n\nexport default AnimationExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AnimationDelay.example.jsx":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AnimationDelay.example.jsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { PureComponent } from \"react\";\nimport Animate from \"organism-react-animate\";\n\nconst foo = <div>Hello</div>;\nconst bar = <div>world!!</div>;\n\nclass AnimationDelayExample extends PureComponent {\n  constructor(props) {\n    super(props);\n    this.state = {\n      foo,\n      bar,\n    };\n  }\n\n  render() {\n    return (\n      <div>\n        <Animate\n          appear=\"fadeInRight-3000\"\n          enter=\"fadeInRight-3000\"\n          leave=\"fadeOutRight-1000\"\n        >\n          {this.state.foo}\n        </Animate>\n        <Animate\n          appear=\"fadeInRight-3000-500\"\n          enter=\"fadeInRight-3000-500\"\n          leave=\"fadeOutRight-1000-500\"\n        >\n          {this.state.bar}\n        </Animate>\n        <a\n          href=\"#\"\n          style={{ marginLeft: \"10px\" }}\n          onClick={((e) => {\n            e.preventDefault();\n            this.setState({\n              foo: null,\n              bar: null,\n            });\n          }).bind(this)}\n        >\n          leave\n        </a>\n\n        <a\n          href=\"#\"\n          style={{ marginLeft: \"10px\" }}\n          onClick={((e) => {\n            e.preventDefault();\n            this.setState({\n              foo,\n              bar,\n            });\n          }).bind(this)}\n        >\n          enter\n        </a>\n      </div>\n    );\n  }\n}\n\nexport default AnimationDelayExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AnimationReplace.example.jsx":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AnimationReplace.example.jsx ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { PureComponent } from \"react\";\n\n/**\n * Production please use\n * import Animate from \"organism-react-animate\"\n */\nimport { Replace } from \"organism-react-animate\";\n\nclass AnimationReplaceExample extends PureComponent {\n  render() {\n    return (\n      <Replace\n        enter=\"fadeInRight-2000\"\n        leave=\"fadeOutRight-1000\"\n        style={{ minHeight: 30, overflow: \"hidden\" }}\n      >\n        <div style={{ background: \"#f4cc70\" }}>1</div>\n        <div style={{ background: \"#de7a22\" }}>2</div>\n        <div style={{ background: \"#20948b\" }}>3</div>\n      </Replace>\n    );\n  }\n}\n\nexport default AnimationReplaceExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AsciiDoc.example.jsx":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AsciiDoc.example.jsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { PureComponent } from \"react\";\n\nimport Asciidoc from \"organism-react-asciidoc\";\n\nconst adoc = `\n:toc:\n:toc-placement!:\ntoc::[]\n\n= h1 - test\ntest\n\n== h2 - test2\n* Hello *world*\n\n== h2 - test3\n- [ ] option1\n- [*] option1\n`;\n\nclass AsciidocDemo extends PureComponent {\n  render() {\n    return <Asciidoc options={{ doctype: \"book\" }}>{adoc}</Asciidoc>;\n  }\n}\n\nexport default AsciidocDemo;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CarouselAnimation.example.jsx":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CarouselAnimation.example.jsx ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\nimport { Image } from \"react-atomic-molecule\";\nimport { Carousel, CarouselAnimation } from \"organism-react-carousel\";\n\nconst CarouselAnimationExample = (props) => {\n  return (\n    <CarouselAnimation\n      carouselAttr={{\n        style: Styles.carousel,\n      }}\n      style={Styles.container}\n    >\n      <Carousel>\n        <img\n          style={Styles.img}\n          src=\"https://c1.staticflickr.com/9/8567/16584613141_d984a3680a_b.jpg\"\n        />\n      </Carousel>\n      <Carousel>\n        <Image src=\"https://live.staticflickr.com/7883/47562596261_cc18fc91b6_b.jpg\" />\n      </Carousel>\n      <Carousel>3</Carousel>\n      <Carousel>4</Carousel>\n      <Carousel>5</Carousel>\n    </CarouselAnimation>\n  );\n};\n\nexport default CarouselAnimationExample;\n\nconst Styles = {\n  container: {\n    margin: \"0 10%\",\n  },\n  carousel: {\n    width: \"100%\",\n    height: 300,\n    background: \"#00558B\",\n  },\n  img: {\n    maxWidth: \"100%\",\n    verticalAlign: \"bottom\",\n  },\n};\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CarouselAnimationHideThumb.example.jsx":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CarouselAnimationHideThumb.example.jsx ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\nimport { Carousel, CarouselAnimation } from \"organism-react-carousel\";\n\nconst CarouselAnimationExample = (props) => {\n  return (\n    <CarouselAnimation\n      carouselAttr={{\n        style: Styles.carousel,\n      }}\n      style={Styles.container}\n      hideThumb\n    >\n      <Carousel>\n        <img\n          style={Styles.img}\n          src=\"https://c1.staticflickr.com/9/8567/16584613141_d984a3680a_b.jpg\"\n        />\n      </Carousel>\n      <Carousel>2</Carousel>\n      <Carousel>3</Carousel>\n      <Carousel>4</Carousel>\n      <Carousel>5</Carousel>\n    </CarouselAnimation>\n  );\n};\n\nexport default CarouselAnimationExample;\n\nconst Styles = {\n  container: {\n    margin: \"0 10%\",\n  },\n  carousel: {\n    width: \"100%\",\n    height: 300,\n    background: \"#00558B\",\n  },\n  img: {\n    maxWidth: \"100%\",\n    verticalAlign: \"bottom\",\n  },\n};\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CarouselSlide.example.jsx":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CarouselSlide.example.jsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\nimport { Carousel, CarouselSlide } from \"organism-react-carousel\";\n\nconst CarouselSlideExample = (props) => {\n  return (\n    <CarouselSlide\n      carouselAttr={{\n        style: Styles.carousel,\n      }}\n    >\n      <Carousel>\n        <img\n          style={Styles.img}\n          src=\"https://c1.staticflickr.com/9/8567/16584613141_d984a3680a_b.jpg\"\n        />\n      </Carousel>\n      <Carousel>2</Carousel>\n      <Carousel>3</Carousel>\n      <Carousel>4</Carousel>\n      <Carousel>5</Carousel>\n    </CarouselSlide>\n  );\n};\n\nexport default CarouselSlideExample;\n\nconst Styles = {\n  carousel: {\n    width: 300,\n    height: 300,\n    background: \"#00558B\",\n  },\n};\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Checkbox.example.jsx":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Checkbox.example.jsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { PureComponent } from \"react\";\n\nimport { Form } from \"react-atomic-molecule\";\nimport { Checkbox } from \"react-atomic-organism\";\n\nclass CheckboxExample extends PureComponent {\n  render() {\n    return (\n      <Form>\n        <Checkbox />\n        <Checkbox type=\"radio\" />\n        <Checkbox toggle />\n        <Checkbox slider />\n      </Form>\n    );\n  }\n}\n\nexport default CheckboxExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CodeEditor.example.jsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CodeEditor.example.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\n\nimport { openCodeEditor } from \"organism-react-codeeditor\";\n\nconst CodeEditorExample = (props) => {\n  return <button onClick={() => openCodeEditor()}>open</button>;\n};\n\nexport default CodeEditorExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CodeExample.example.jsx":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CodeExample.example.jsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\n\n/**\n * Production please use\n * import CodeExample from 'organism-react-code'\n */\nimport CodeExample from \"organism-react-code\";\n\n/**\n * Your source code.\n * npm i raw-loader\n */\nimport code from \"!raw-loader!../../../ui/organisms/CodeExample.example\";\n\nconst CodeExampleExample = (props) => (\n  <CodeExample\n    code={code}\n    header=\"Test Header\"\n    git=\"react-atomic/react-atomic-organism/tree/master/packages/organism-react-code/\"\n    npm=\"organism-react-code\"\n  >\n    <div>Test Demo Area</div>\n  </CodeExample>\n);\n\nexport default CodeExampleExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3AreaChart.example.jsx":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3AreaChart.example.jsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\nimport { AreaChart } from \"organism-react-d3-axis-chart\";\n\nconst data = [\n  {\n    values: [\n      {\n        x: \"2019-01\",\n        y: 100,\n      },\n      {\n        x: \"2019-02\",\n        y: 450,\n      },\n      {\n        x: \"2019-03\",\n        y: 450,\n      },\n      {\n        x: \"2019-04\",\n        y: 0,\n      },\n      {\n        x: \"2019-05\",\n        y: 0,\n      },\n    ],\n  },\n];\n\nconst D3AreaChart = (props) => {\n  return <AreaChart data={data} style={{ maxHeight: 450 }} />;\n};\n\nexport default D3AreaChart;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3BarChart.example.jsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3BarChart.example.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\nimport { BarChart } from \"organism-react-d3-axis-chart\";\n\nconst D3BarChart = (props) => {\n  let data = {\n    values: [\n      {\n        x: \"2013-01\",\n        y: 53,\n      },\n      {\n        x: \"2013-02\",\n        y: 165,\n      },\n      {\n        x: \"2013-03\",\n        y: 269,\n      },\n    ],\n  };\n\n  return <BarChart data={data} style={{ maxHeight: 450 }} />;\n};\n\nexport default D3BarChart;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3LineChart.example.jsx":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3LineChart.example.jsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\nimport { LineChart } from \"organism-react-d3-axis-chart\";\n\nconst D3LineChart = (props) => {\n  let data = [\n    {\n      values: [\n        {\n          x: \"2013-01\",\n          y: 100,\n        },\n        {\n          x: \"2013-02\",\n          y: 450,\n        },\n        {\n          x: \"2013-01\",\n          y: 450,\n        },\n      ],\n    },\n  ];\n  return (\n    <LineChart\n      data={data}\n      style={{ maxHeight: 450 }}\n      hideAxis={true}\n      thresholds={[200]}\n    />\n  );\n};\n\nexport default D3LineChart;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3PieChart.example.jsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3PieChart.example.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\nimport PieChart from \"organism-react-d3-piechart\";\n\nconst D3PieChartExample = (props) => {\n  let data = [\n    { value: 10, label: \"xxx\" },\n    { value: 30, label: \"yyy\" },\n  ];\n  return <PieChart data={data} style={{ maxWidth: 300 }} unit=\"\" />;\n};\n\nexport default D3PieChartExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3Uml.example.jsx":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3Uml.example.jsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { useRef, useState } from \"react\";\n\nimport { UMLGraph } from \"organism-react-d3-uml\";\nimport { Form, Field, Button } from \"react-atomic-molecule\";\nimport { Checkbox } from \"react-atomic-organism\";\n\nconst data = {\n  tables: [\n    {\n      name: \"table1\",\n      cols: [\"t1-col1\", \"t1-col2\"],\n    },\n    {\n      name: \"table2\",\n      cols: [\"t2-col1\", \"t2-col2\"],\n    },\n  ],\n  conns: [\n    {\n      from: {\n        table: \"table1\",\n        col: \"t1-col1\",\n      },\n      to: {\n        table: \"table2\",\n        col: \"t2-col2\",\n      },\n    },\n  ],\n};\n\nconst D3UmlExample = () => {\n  const uml = useRef();\n  const [isDisableCurve, setIsDisableCurve] = useState(false);\n  const handleUml = (el) => (uml.current = el);\n  const handleUpdate = (e) => {\n    const t = e.currentTarget || {};\n    const fm = t.form;\n    uml.current.zoom.setXYK({\n      x: fm.x.value || null,\n      y: fm.y.value || null,\n      k: fm.k.value || null,\n    });\n  };\n  const handleZoom = (e) => {\n    //  console.log(e.zoom.getXYK());\n  };\n  let isDisableDel;\n  let isDisableMove;\n  return (\n    <div>\n      <UMLGraph\n        onZoom={handleZoom}\n        ref={handleUml}\n        data={data}\n        lineDefaultProps={{curve: !isDisableCurve}}\n        connsLocator={(d) => d.conns}\n        connFromBoxGroupLocator={(d) => d.from.table}\n        connFromBoxLocator={(d) => d.from.col}\n        connToBoxGroupLocator={(d) => d.to.table}\n        connToBoxLocator={(d) => d.to.col}\n        onBoxWillDrag={(e) => {\n          return !isDisableMove.getChecked().input;\n        }}\n        onLineDel={(e) => {\n          console.log({ e });\n          return !isDisableDel.getChecked().input;\n        }}\n      />\n      <Form style={{ boxSizing: \"border-box\" }} className=\"equal width\">\n        <Field>\n          <Field atom=\"input\" label=\"x\" name=\"x\" />\n          <Field atom=\"input\" label=\"y\" name=\"y\" />\n          <Field atom=\"input\" label=\"k\" name=\"k\" />\n        </Field>\n        <Field>\n          <Checkbox\n            toggle\n            label=\"disable curve\"\n            onChange={({checked}) => {setIsDisableCurve(checked)}}\n          />\n          <Checkbox\n            label=\"disable line delete\"\n            ref={(el) => (isDisableDel = el)}\n          />\n          <Checkbox\n            label=\"disable node move\"\n            ref={(el) => (isDisableMove = el)}\n          />\n        </Field>\n        <Button onClick={handleUpdate}>update</Button>\n      </Form>\n    </div>\n  );\n};\n\nexport default D3UmlExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3UmlPerf.example.jsx":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3UmlPerf.example.jsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { useRef, useState } from \"react\";\n\nimport { UMLGraph } from \"organism-react-d3-uml\";\nimport { Form, Field, Button } from \"react-atomic-molecule\";\nimport { Checkbox } from \"react-atomic-organism\";\n\nconst data = {\n  tables: [\n  ],\n  conns: [\n    {\n      from: {\n        table: \"table1\",\n        col: \"t1-col1\",\n      },\n      to: {\n        table: \"table2\",\n        col: \"t2-col2\",\n      },\n    },\n  ],\n};\n\nfor (let i = 1; i < 300; i++) {\n  data.tables.push(\n    {\n      name: `table${i}`,\n      cols: [`t${i}-col1`, `t${i}-col2`],\n    },\n  );\n}\n\nconst D3UmlPerfExample = () => {\n  const uml = useRef();\n  const [isDisableCurve, setIsDisableCurve] = useState(false);\n  const handleUml = (el) => (uml.current = el);\n  const handleUpdate = (e) => {\n    const t = e.currentTarget || {};\n    const fm = t.form;\n    uml.current.zoom.setXYK({\n      x: fm.x.value || null,\n      y: fm.y.value || null,\n      k: fm.k.value || null,\n    });\n  };\n  const handleZoom = (e) => {\n    //  console.log(e.zoom.getXYK());\n  };\n  let isDisableDel;\n  let isDisableMove;\n  return (\n    <div style={{height: \"50vh\"}}>\n      <UMLGraph\n        onZoom={handleZoom}\n        ref={handleUml}\n        data={data}\n        lineDefaultProps={{curve: !isDisableCurve}}\n        connsLocator={(d) => d.conns}\n        connFromBoxGroupLocator={(d) => d.from.table}\n        connFromBoxLocator={(d) => d.from.col}\n        connToBoxGroupLocator={(d) => d.to.table}\n        connToBoxLocator={(d) => d.to.col}\n        onBoxWillDrag={(e) => {\n          return !isDisableMove.getChecked().input;\n        }}\n        onLineDel={(e) => {\n          console.log({ e });\n          return !isDisableDel.getChecked().input;\n        }}\n      />\n      <Form style={{ boxSizing: \"border-box\" }} className=\"equal width\">\n        <Field>\n          <Field atom=\"input\" label=\"x\" name=\"x\" />\n          <Field atom=\"input\" label=\"y\" name=\"y\" />\n          <Field atom=\"input\" label=\"k\" name=\"k\" />\n        </Field>\n        <Field>\n          <Checkbox\n            toggle\n            label=\"disable curve\"\n            onChange={({checked}) => {setIsDisableCurve(checked)}}\n          />\n          <Checkbox\n            label=\"disable line delete\"\n            ref={(el) => (isDisableDel = el)}\n          />\n          <Checkbox\n            label=\"disable node move\"\n            ref={(el) => (isDisableMove = el)}\n          />\n        </Field>\n        <Button onClick={handleUpdate}>update</Button>\n      </Form>\n    </div>\n  );\n};\n\nexport default D3UmlPerfExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Dropzone.example.jsx":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Dropzone.example.jsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { PureComponent } from \"react\";\nimport Dropzone from \"organism-react-dropzone\";\nimport get from \"get-object-value\";\n\nclass DropzoneExample extends PureComponent {\n  state = {\n    urls: [],\n  };\n\n  handleClick = () => {\n    this.dropzone.openDialog();\n  };\n\n  render() {\n    const { urls } = this.state;\n    return (\n      <div>\n        <Dropzone\n          ref={(el) => (this.dropzone = el)}\n          acceptedFiles=\".png, .jpg\"\n          showFiletypeIcon={true}\n          postUrl=\"https://file.io\"\n          djsConfig={{\n            addRemoveLinks: true,\n          }}\n          eventHandlers={{\n            success: (file) => {\n              this.setState(({ urls }) => {\n                const req = get(file, [\"xhr\", \"response\"]);\n                if (req) {\n                  const json = JSON.parse(req);\n                  urls.push(json.link);\n                }\n                return urls;\n              });\n            },\n          }}\n        />\n        <ul>\n          {urls.map((url, key) => (\n            <li key={key}>\n              <a href={url} target=\"_blank\">\n                {url}\n              </a>\n            </li>\n          ))}\n        </ul>\n        <button onClick={this.handleClick}>open</button>\n      </div>\n    );\n  }\n}\n\nexport default DropzoneExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/ErrorForm.example.jsx":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/ErrorForm.example.jsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { useState } from \"react\";\nimport { SemanticUI, Form, Field, Menu, Item } from \"react-atomic-molecule\";\n\nimport { Dropdown, Select, SelectField } from \"organism-react-navigation\";\nimport { Checkbox } from \"react-atomic-organism\";\n\nconst options = [\n  {\n    label: \"Boy\",\n    value: \"boy\",\n  },\n  {\n    label: \"Girl\",\n    value: \"girl\",\n  },\n];\n\nconst DropdownExample = (props) => {\n  const [value, setValue] = useState();\n\n  const MyList = (props) => (\n    <Menu {...props}>\n      <Item onClick={() => setValue(\"Boy\")}>Boy</Item>\n      <Item onClick={() => setValue(\"Girl\")}>Girl</Item>\n    </Menu>\n  );\n\n  return (\n    <Field\n      {...props}\n      inputComponent={\n        <Dropdown style={Styles.dropdown} list={<MyList />}>\n          You-select {value}\n        </Dropdown>\n      }\n    />\n  );\n};\n\nconst ErrorFormExample = () => {\n  const [isError, setIsError] = useState(false);\n\n  const handleChange = (e) => {\n    setIsError(e.checked ? true : false);\n  };\n\n  return (\n    <SemanticUI>\n      <Form messageType={isError ? \"error\" : \"\"}>\n        <DropdownExample\n          messageType={isError ? \"error\" : \"\"}\n          label=\"Dropdown: \"\n        />\n        <SelectField\n          messageType={isError ? \"error\" : \"\"}\n          label=\"Selection: \"\n          options={options}\n          placeholder={\"not-select-yet\"}\n        />\n        <Field>\n          <Checkbox label=\"Error Style\" toggle onChange={handleChange} />\n        </Field>\n      </Form>\n    </SemanticUI>\n  );\n};\n\nexport default ErrorFormExample;\n\nconst Styles = {\n  dropdown: {\n    marginLeft: 10,\n  },\n};\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FBLike.example.jsx":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FBLike.example.jsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\nimport { FBLike } from \"organism-react-facebook\";\n\nconst FBLikeExample = (props) => (\n  <FBLike page=\"https://www.facebook.com/react\" />\n);\n\nexport default FBLikeExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FBPage.example.jsx":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FBPage.example.jsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\nimport { FBPage } from \"organism-react-facebook\";\n\nconst FBPageExample = (props) => {\n  return <FBPage page=\"react\" />;\n};\n\nexport default FBPageExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FixedDataTableList.example.jsx":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FixedDataTableList.example.jsx ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { PureComponent } from \"react\";\n\nimport { Cell, Column } from \"pmvc_react_list\";\nimport Table from \"pmvc_react_list/fixedDataTable\";\n\nconst rows = [\n  [\"a1\", \"b1\", \"c1\"],\n  [\"a2\", \"b2\", \"c2\"],\n  [\"a3\", \"b3\", \"c3\"],\n  [\"a4\", \"b4\", \"c4\"],\n  [\"a5\", \"b5\", \"c5\"],\n  [\"a6\", \"b6\", \"c6\"],\n];\n\nclass FixedDataTableListExample extends PureComponent {\n  render() {\n    return (\n      <div style={{ width: 350 }}>\n        <Table rows={rows} getColWidth={() => 150} height={150}>\n          <Column\n            header={<Cell>h1</Cell>}\n            cell={({ rowIndex, columnKey: columnIndex }) => {\n              return rows[rowIndex][columnIndex];\n            }}\n          />\n          <Column\n            header={<Cell>h2</Cell>}\n            cell={({ rowIndex, columnKey: columnIndex }) => {\n              return rows[rowIndex][columnIndex];\n            }}\n          />\n          <Column\n            header={<Cell>h3</Cell>}\n            cell={({ rowIndex, columnKey: columnIndex }) => {\n              return rows[rowIndex][columnIndex];\n            }}\n          />\n        </Table>\n      </div>\n    );\n  }\n}\n\nexport default FixedDataTableListExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FullScreen.example.jsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FullScreen.example.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { PureComponent } from \"react\";\nimport get from \"get-object-value\";\n\nimport { FullScreenExample as FullScreen } from \"organism-react-code\";\n\nclass FullScreenExample extends PureComponent {\n  render() {\n    return (\n      <FullScreen id=\"full-screen-example\" button=\"open full screen\">\n        test\n      </FullScreen>\n    );\n  }\n}\n\nexport default FullScreenExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/GrapesJs.example.jsx":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/GrapesJs.example.jsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\nimport { GrapesJsController } from \"organism-react-grapesjs\";\n\nconst GrapesJsExample = () => (\n  <GrapesJsController style={Styles.container} debug />\n);\n\nexport default GrapesJsExample;\n\nconst Styles = {\n  container: {\n    minHeight: 600,\n  },\n};\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/GridList.example.jsx":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/GridList.example.jsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { PureComponent } from \"react\";\n\nconst rows = [\n  [\"a1\", \"b1\", \"c1\"],\n  [\"a2\", \"b2\", \"c2\"],\n  [\"a3\", \"b3\", \"c3\"],\n  [\"a4\", \"b4\", \"c4\"],\n  [\"a5\", \"b5\", \"c5\"],\n  [\"a6\", \"b6\", \"c6\"],\n];\n\nlet RVGrid = null;\n\nclass GridListExample extends PureComponent {\n  state = {\n    isLoad: false,\n  };\n\n  componentDidMount() {\n    import(\"pmvc_react_list/rv\").then(({ RVGrid: rvGrid }) => {\n      RVGrid = rvGrid;\n      this.setState({ isLoad: true });\n    });\n  }\n\n  render() {\n    const { isLoad } = this.state;\n    let grid = null;\n    if (RVGrid && isLoad) {\n      const className = \"grid\"; // hack for disable const element\n      grid = (\n        <RVGrid\n          className={className}\n          width={200}\n          height={100}\n          rows={rows}\n          style={Styles.container}\n        />\n      );\n    }\n    return grid;\n  }\n}\n\nexport default GridListExample;\n\nconst Styles = {\n  container: {\n    border: \"1px solid #000\",\n  },\n};\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/HTMLToCanvans.example.jsx":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/HTMLToCanvans.example.jsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { useState, useRef } from \"react\";\nimport { Unsafe, Field, Form, Button } from \"react-atomic-molecule\";\n\nimport { HTMLToPDF } from \"organism-react-html2canvas\";\n\nconst HTMLToCanvansExample = (props) => {\n  const [html, setHtml] = useState(\"\");\n\n  const pdf = useRef();\n\n  const handleInput = (e) => {\n    const v = e.currentTarget.value;\n    setHtml(v);\n  };\n\n  const handleClick = (e) => {\n    if (pdf && pdf.current) {\n      pdf.current.download();\n    }\n  };\n\n  const handlePdf = (el) => (pdf.current = el);\n  return (\n    <div>\n      <Form className=\"equal width\" style={{ boxSizing: \"border-box\" }}>\n        <Field atom=\"textarea\" onInput={handleInput} />\n        <Button onClick={handleClick}>Download</Button>\n      </Form>\n      <HTMLToPDF preview autoGenCanvas ref={handlePdf}>\n        <Unsafe>{html}</Unsafe>\n      </HTMLToPDF>\n    </div>\n  );\n};\n\nexport default HTMLToCanvansExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/HtmlTableList.example.jsx":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/HtmlTableList.example.jsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { PureComponent } from \"react\";\n\nimport { Table, Cell, Column } from \"pmvc_react_list\";\n\nconst rows = [\n  [\"a1\", \"b1\", \"c1\"],\n  [\"a2\", \"b2\", \"c2\"],\n  [\"a3\", \"b3\", \"c3\"],\n  [\"a1\", \"b1\", \"c1\"],\n  [\"a2\", \"b2\", \"c2\"],\n  [\"a3\", \"b3\", \"c3\"],\n];\n\nclass HtmlTableListExample extends PureComponent {\n  render() {\n    return (\n      <Table rows={rows}>\n        <Column\n          header={<Cell>h1</Cell>}\n          cell={({ rowIndex, columnIndex }) => {\n            return rows[rowIndex][columnIndex];\n          }}\n        />\n        <Column\n          header={<Cell>h2</Cell>}\n          cell={({ rowIndex, columnIndex }) => {\n            return rows[rowIndex][columnIndex];\n          }}\n        />\n        <Column\n          header={<Cell>h3</Cell>}\n          cell={({ rowIndex, columnIndex }) => {\n            return rows[rowIndex][2];\n          }}\n        />\n      </Table>\n    );\n  }\n}\n\nexport default HtmlTableListExample;\n\nconst Styles = {\n  col: {\n    height: 40,\n  },\n};\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/PageLoadProgressHandler.example.jsx":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/PageLoadProgressHandler.example.jsx ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\nimport { PageLoadProgressHandler } from \"organism-react-progress\";\nimport { Button, InputBox } from \"react-atomic-molecule\";\n\nconst PageLoadProgressHandlerExample = (props) => {\n  let oLoad;\n  let dInput;\n  return (\n    <div>\n      <PageLoadProgressHandler ref={(o) => (oLoad = o)} />\n\n      <div>\n        <Button\n          style={Styles.button}\n          onClick={() => {\n            oLoad.start(100, 800);\n          }}\n        >\n          Start\n        </Button>\n        <Button\n          style={Styles.button}\n          onClick={() => {\n            oLoad.pause();\n          }}\n        >\n          Pause\n        </Button>\n        <Button\n          style={Styles.button}\n          onClick={() => {\n            oLoad.complete();\n          }}\n        >\n          Complete\n        </Button>\n        <Button\n          style={Styles.button}\n          onClick={() => {\n            oLoad.reset();\n          }}\n        >\n          Reset\n        </Button>\n      </div>\n\n      <div>\n        <InputBox\n          leftLabel=\"Pause @\"\n          rightLabel=\"%\"\n          refCb={(o) => (dInput = o)}\n          button={\"Go\"}\n          buttonProps={{\n            onClick: () => {\n              oLoad.start(dInput.value);\n            },\n          }}\n          style={Styles.input}\n        />\n      </div>\n    </div>\n  );\n};\n\nexport default PageLoadProgressHandlerExample;\n\nconst Styles = {\n  input: {\n    width: 20,\n  },\n  button: {\n    marginBottom: 10,\n  },\n};\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/PageLoadProgressHandlerWithAjax.example.jsx":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/PageLoadProgressHandlerWithAjax.example.jsx ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\nimport { PageLoadProgressHandler } from \"organism-react-progress\";\nimport { ajaxDispatch } from \"organism-react-ajax\";\nimport { Button } from \"react-atomic-molecule\";\n\nconst PageLoadProgressHandlerExample = (props) => {\n  let url =\n    \"https://raw.githubusercontent.com/react-atomic/react-atomic-ui/master/README.md\";\n  return (\n    <div>\n      <PageLoadProgressHandler ajax={true} />\n\n      <Button\n        onClick={() => {\n          ajaxDispatch({\n            type: \"ajaxGet\",\n            params: {\n              url: url,\n              callback: (json, text, o) => {\n                alert(text);\n              },\n            },\n          });\n        }}\n      >\n        Call Ajax\n      </Button>\n    </div>\n  );\n};\n\nexport default PageLoadProgressHandlerExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Pagination.example.jsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Pagination.example.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { PureComponent } from \"react\";\n\nimport { PaginationController } from \"organism-react-navigation\";\n\nclass PaginationExample extends PureComponent {\n  handlePageChange = ({ begin }) => {\n    this.setState({ begin });\n  };\n\n  render() {\n    const { begin } = this.state || {};\n    return (\n      <PaginationController\n        style={Styles.container}\n        onPageChange={this.handlePageChange}\n        total={500}\n        begin={begin}\n      />\n    );\n  }\n}\n\nexport default PaginationExample;\n\nconst Styles = {\n  container: {\n    textAlign: \"center\",\n  },\n};\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/ParallaxBackgroundImage.example.jsx":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/ParallaxBackgroundImage.example.jsx ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\nimport { ParallaxBackgroundImage } from \"organism-react-parallax\";\n\nconst ParallaxBackgroundImageExample = () => (\n  <ParallaxBackgroundImage\n    style={Styles.container}\n    backgroundImage=\"https://c1.staticflickr.com/9/8621/16732897815_4705c08fe6_h.jpg\"\n  >\n    test\n  </ParallaxBackgroundImage>\n);\n\nexport default ParallaxBackgroundImageExample;\n\nconst Styles = {\n  container: {\n    height: 300,\n    color: \"#fff\",\n    textAlign: \"center\",\n    paddingTop: 200,\n  },\n};\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Popup.example.jsx":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Popup.example.jsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { useState } from \"react\";\nimport { Checkbox } from \"react-atomic-organism\";\n\n/**\n * Production please use\n * import {...xxx} from \"organism-react-popup\"\n */\nimport { Dialog, PopupModal, PopupClick } from \"organism-react-popup\";\n\nimport { Button } from \"react-atomic-molecule\";\n\nconst PopupExample = () => {\n  const [backgroundScrollAble, setBackgroundScrollAble] = useState(false);\n  return (\n    <div>\n      <PopupClick\n        style={Styles.click}\n        popup={() => {\n          return <PopupModal backgroundScroll={backgroundScrollAble}>xxx</PopupModal>;\n        }}\n        component={<a />}\n      >\n        show modal\n      </PopupClick>\n\n      <PopupClick\n        style={{ marginLeft: 5 }}\n        popup={<Dialog backgroundScroll={backgroundScrollAble} header=\"Test Header\">Test Dialog</Dialog>}\n        component={<Button />}\n      >\n        show dialog\n      </PopupClick>\n      <Checkbox\n        toggle\n        label=\"Background scrollable\"\n        onChange={({ checked }) => {\n          setBackgroundScrollAble(checked);\n        }}\n      />\n    </div>\n  );\n};\n\nexport default PopupExample;\n\nconst Styles = {\n  click: {\n    color: \"blue\",\n    textDecoration: \"underline\",\n  },\n};\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/QQVideo.example.jsx":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/QQVideo.example.jsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\nimport QQVideo from \"organism-react-qq-video\";\n\nconst QQVideoExample = () => <QQVideo videoId=\"j0792wzb6v8\" />;\n\nexport default QQVideoExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/QueryToJSON.jsx":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/QueryToJSON.jsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { useState } from \"react\";\nimport prettyjson from \"prettyjson\";\n\nimport { Field, Form } from \"react-atomic-molecule\";\n\nimport { FormattedJSON } from \"react-atomic-organism\";\n\nconst QueryToJSON = (props) => {\n  const [json, setJson] = useState(\"\");\n\n  const handleInput = (e) => {\n    const v = e.currentTarget.value;\n    const vArr = [...new URLSearchParams(v)];\n    const nextArr = [];\n    vArr.forEach((item) => {\n      nextArr.push({ [item[0]]: item[1] });\n    });\n    setJson(nextArr);\n  };\n\n  return (\n    <div>\n      <Form className=\"equal width\" style={{ boxSizing: \"border-box\" }}>\n        <Field ui atom=\"textarea\" onInput={handleInput} />\n        <FormattedJSON atom=\"div\">{prettyjson.render(json)}</FormattedJSON>\n      </Form>\n    </div>\n  );\n};\n\nexport default QueryToJSON;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/RTE.example.jsx":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/RTE.example.jsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\n// import { Editor } from \"organism-react-rte-writer\";\nconst Editor = () => <div />;\n\nconst RTEExample = () => {\n  return <Editor />;\n};\n\nexport default RTEExample;\n\nconst Styles = {};\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/RadioGroup.example.jsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/RadioGroup.example.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { PureComponent } from \"react\";\n\nimport { Form, Button } from \"react-atomic-molecule\";\nimport { RadioGroup } from \"react-atomic-organism\";\n\nconst options = [\n  {\n    label: \"Boy\",\n    value: \"boy\",\n  },\n  {\n    label: \"Girl\",\n    value: \"girl\",\n  },\n];\n\nclass RadioGroupExample extends PureComponent {\n  state = {\n    value: \"\",\n  };\n  handleChange = () => {\n    this.setState({ value: this.radio.getValue() });\n  };\n\n  render() {\n    const { value } = this.state;\n    return (\n      <Form>\n        <RadioGroup\n          ref={(el) => (this.radio = el)}\n          inline={false}\n          label=\"Sex: \"\n          name=\"sex\"\n          value={value}\n          options={options}\n          onChange={this.handleChange}\n        />\n        <div>Current: {value}</div>\n        <Button onClick={() => this.setState({ value: \"boy\" })}>\n          Set to Boy\n        </Button>\n        <Button onClick={() => this.setState({ value: \"girl\" })}>\n          Set to Girl\n        </Button>\n      </Form>\n    );\n  }\n}\n\nexport default RadioGroupExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/ReactVirtualizedTableList.example.jsx":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/ReactVirtualizedTableList.example.jsx ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { PureComponent } from \"react\";\n\nimport { Cell, Column } from \"pmvc_react_list\";\nimport Table from \"pmvc_react_list/rv\";\n\nconst rows = [\n  [\"a1\", \"b1\", \"c1\"],\n  [\"a2\", \"b2\", \"c2\"],\n  [\"a3\", \"b3\", \"c3\"],\n  [\"a1\", \"b1\", \"c1\"],\n  [\"a2\", \"b2\", \"c2\"],\n  [\"a3\", \"b3\", \"c3\"],\n];\n\nclass ReactVirtualizedTableListExample extends PureComponent {\n  handleClick = (rowIndex) => (ev) => {\n    alert(rowIndex);\n  };\n\n  render() {\n    return (\n      <div style={{ width: \"40%\", height: 150 }}>\n        <Table rows={rows}>\n          <Column\n            header={<Cell>h1</Cell>}\n            cell={({ rowIndex, columnIndex, style }) => (\n              <div style={style} onClick={this.handleClick(rowIndex)}>\n                {rows[rowIndex][columnIndex]}\n              </div>\n            )}\n          />\n          <Column\n            header={<Cell>h2</Cell>}\n            cell={({ rowIndex, columnIndex, style }) => (\n              <div style={style} onClick={this.handleClick(rowIndex)}>\n                {rows[rowIndex][columnIndex]}\n              </div>\n            )}\n          />\n          <Column\n            header={<Cell>h3</Cell>}\n            cell={({ rowIndex, columnIndex, style }) => (\n              <div style={style} onClick={this.handleClick(rowIndex)}>\n                {rows[rowIndex][columnIndex]}\n              </div>\n            )}\n          />\n        </Table>\n      </div>\n    );\n  }\n}\n\nexport default ReactVirtualizedTableListExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/ReshowMessage.example.jsx":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/ReshowMessage.example.jsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { PureComponent } from \"react\";\n\nimport { Button } from \"react-atomic-molecule\";\nimport { dispatch, Return } from \"reshow\";\n\nconst DialogResult = ({ dialogReturn }) =>\n  \"undefined\" !== typeof dialogReturn ? \"Dialog: \" + dialogReturn : null;\n\nclass ReshowMessageExample extends PureComponent {\n  handleAddAlert = (e) => {\n    dispatch(\"alert/add\", {\n      message: \"test\",\n    });\n  };\n\n  handleResetAlert = (e) => {\n    dispatch(\"alert/reset\", {\n      alerts: [1, 2, 3],\n    });\n  };\n\n  handleCleanAlert = (e) => {\n    dispatch(\"alert/reset\", {\n      alerts: null,\n    });\n  };\n\n  handleOpenDialog = (e) => {\n    dispatch(\"dialog/start\", {\n      dialog: \"how are u\",\n    });\n  };\n\n  render() {\n    return (\n      <div>\n        <p>\n          <Button onClick={this.handleAddAlert}>Add alert</Button>\n          <Button onClick={this.handleResetAlert}>Reset alert</Button>\n          <Button onClick={this.handleCleanAlert}>Clean all alerts</Button>\n        </p>\n        <p>\n          <Button onClick={this.handleOpenDialog}>Open Dialog</Button>\n          <Return initStates={[\"dialogReturn\"]}>\n            <DialogResult />\n          </Return>\n        </p>\n      </div>\n    );\n  }\n}\n\nexport default ReshowMessageExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Spotlight.example.jsx":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Spotlight.example.jsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { PureComponent } from \"react\";\n\nimport { Button } from \"react-atomic-molecule\";\n\nimport { PopupPool } from \"organism-react-popup\";\n\nimport { FullScreenExample } from \"organism-react-code\";\n\nimport Spotlight from \"organism-react-spotlight\";\n\nclass SpotlightExample extends PureComponent {\n  state = {\n    spotlight: false,\n  };\n\n  render() {\n    const { spotlight } = this.state;\n    let thisSpotlight = null;\n    if (spotlight) {\n      thisSpotlight = (\n        <Spotlight\n          toPool=\"spotlight-pool\"\n          targetEl={this.spot}\n          onClose={() => {\n            this.setState({ spotlight: null });\n          }}\n        />\n      );\n    }\n    return (\n      <FullScreenExample\n        button=\"open full screen\"\n        onClose={() => this.setState({ spotlight: null })}\n      >\n        <div ref={(el) => (this.spot = el)} style={Styles.el}>\n          Spotlight\n        </div>\n        <div>\n          <Button\n            onClick={() => {\n              this.setState({\n                spotlight: true,\n              });\n            }}\n          >\n            Try it.\n          </Button>\n        </div>\n        {thisSpotlight}\n        <PopupPool name=\"spotlight-pool\" />\n      </FullScreenExample>\n    );\n  }\n}\n\nexport default SpotlightExample;\n\nconst Styles = {\n  el: {\n    display: \"inline-block\",\n    width: 100,\n    height: 200,\n    margin: 10,\n  },\n};\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/StockChart.example.jsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/StockChart.example.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { PureComponent } from \"react\";\nimport { FullScreenExample as FullScreen } from \"organism-react-code\";\nimport { StockChartCompute } from \"organism-react-stockcharts\";\nimport { ajaxDispatch } from \"organism-react-ajax\";\n\nclass StockChartExample extends PureComponent {\n  state = {\n    data: null,\n  };\n\n  componentDidMount() {\n    ajaxDispatch({\n      type: \"ajaxGet\",\n      params: {\n        url:\n          \"//raw.githubusercontent.com/react-atomic/react-atomic-ui/master/data/stock.json\",\n        callback: (json) => {\n          this.setState({ data: { trades: json } });\n        },\n      },\n    });\n  }\n\n  render() {\n    const { data } = this.state;\n    if (!data) {\n      return null;\n    }\n    return (\n      <FullScreen id=\"full-page-stock-chart\" button=\"open full screen\">\n        <StockChartCompute\n          data={data}\n          tradeRowsLocator={(d) => d.trades}\n          tradeHighLocator={(d) => d.h}\n          tradeLowLocator={(d) => d.l}\n          tradeOpenLocator={(d) => d.o}\n          tradeCloseLocator={(d) => d.c}\n          tradeVolumeLocator={(d) => d.v}\n          tradeDateLocator={(d) => d.t}\n        />\n      </FullScreen>\n    );\n  }\n}\n\nexport default StockChartExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Suggestion.example.jsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Suggestion.example.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { PureComponent } from \"react\";\n\nimport { Button, SemanticUI } from \"react-atomic-molecule\";\n\nimport { Suggestion } from \"react-atomic-organism\";\n\nconst data = [\"abc\", \"abb\", \"acc\"];\n\nclass SuggestionExample1 extends PureComponent {\n  state = {\n    results: [],\n  };\n\n  handleChange = (e, value) => {\n    if (!value.length) {\n      this.setState({ results: data });\n      return;\n    }\n    const results = [];\n    data.forEach((v, k) => {\n      if (value.length && -1 !== v.indexOf(value)) {\n        results.push(v);\n      }\n    });\n    this.setState({ results });\n  };\n\n  handleItemClick = (e, item) => {\n    this.suggestion.setValue(item);\n  };\n\n  render() {\n    const { results, myValue } = this.state;\n    return (\n      <SemanticUI>\n        <Suggestion\n          ref={(el) => (this.suggestion = el)}\n          onChange={this.handleChange}\n          results={results}\n          onItemClick={this.handleItemClick}\n          value={myValue}\n        />\n        <Button\n          onClick={() =>\n            this.setState({ myValue: myValue ? myValue + 1 : 123 })\n          }\n        >\n          set\n        </Button>\n      </SemanticUI>\n    );\n  }\n}\n\nconst SuggestionExample = () => (\n  <SemanticUI>\n    <SuggestionExample1 />\n    couldCreate: false\n    <Suggestion results={data} couldCreate={false} filter preview />\n  </SemanticUI>\n);\n\nexport default SuggestionExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/TabView.example.jsx":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/TabView.example.jsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, {useState} from \"react\";\n\nimport {\n  SemanticUI,\n  Menu,\n  Item,\n  InputBox,\n  Button,\n} from \"react-atomic-molecule\";\nimport SearchIcon from \"ricon/Search\";\n\nimport { TabView, Tab } from \"organism-react-navigation\";\n\nconst RightMenu = () => (\n  <Menu className=\"right\" ui={false}>\n    <Item style={{ boxSizing: \"border-box\" }}>\n      <InputBox icon={<SearchIcon />} transparent placeholder=\"Search...\" />\n    </Item>\n  </Menu>\n);\n\nconst TabViewExample = (props) => {\n  const [selected, setSelected] = useState();\n  return (\n    <SemanticUI>\n      <TabView selected={selected} rightMenu={<RightMenu />}>\n        <Tab>\n          <div>content1</div>\n          <div>menu1</div>\n        </Tab>\n        <Tab>\n          <div>content2</div>\n          <div>menu2</div>\n        </Tab>\n      </TabView>\n      <Button onClick={()=>setSelected(0)}>to tab1</Button>\n      <Button onClick={()=>setSelected(1)}>to tab2</Button>\n    </SemanticUI>\n  );\n};\n\nexport default TabViewExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/TagInput.example.jsx":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/TagInput.example.jsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { useState } from \"react\";\nimport { TagsField } from \"organism-react-tag-input\";\nimport { Form, Field, SemanticUI } from \"react-atomic-molecule\";\nimport { Checkbox } from \"react-atomic-organism\";\n\nconst TagInputExample = (props) => {\n  const [isDisable, setIsDisable] = useState(false);\n\n  const handleDisable = (e) => {\n    setIsDisable(e.checked ? true : false);\n  };\n\n  return (\n    <Form>\n      <TagsField disabled={isDisable} />\n      <Field>\n        <Checkbox label=\"Disable\" toggle onChange={handleDisable} />\n      </Field>\n    </Form>\n  );\n};\n\nexport default TagInputExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/WindowOffset.example.jsx":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/WindowOffset.example.jsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { Component } from \"react\";\nimport { PopupHover, PopupOverlay } from \"organism-react-popup\";\n\nclass WindowOffsetExample extends Component {\n  handleClick = (e) => {\n    const target = e.currentTarget;\n    import(\"get-window-offset\").then(({ default: getWindowOffset }) => {\n      const info = getWindowOffset(target);\n      console.log(info);\n    });\n  };\n\n  render() {\n    return (\n      <div>\n        <div style={Styles.row}>\n          <PopupHover popup=\"1\" isKeep={true}>\n            <div\n              style={{ ...Styles.col, ...Styles.col1 }}\n              onClick={this.handleClick}\n            >\n              1\n            </div>\n          </PopupHover>\n          <PopupHover popup=\"2\" isKeep={true}>\n            <div\n              style={{ ...Styles.col, ...Styles.col2 }}\n              onClick={this.handleClick}\n            >\n              2\n            </div>\n          </PopupHover>\n          <PopupHover popup=\"3\" isKeep={true}>\n            <div\n              style={{ ...Styles.col, ...Styles.col3 }}\n              onClick={this.handleClick}\n            >\n              3\n            </div>\n          </PopupHover>\n        </div>\n        <div style={Styles.row}>\n          <PopupHover popup=\"4\">\n            <div\n              style={{ ...Styles.col, ...Styles.col1 }}\n              onClick={this.handleClick}\n            >\n              4\n            </div>\n          </PopupHover>\n          <PopupHover popup=\"5\">\n            <div\n              style={{ ...Styles.col, ...Styles.col2 }}\n              onClick={this.handleClick}\n            >\n              5\n            </div>\n          </PopupHover>\n          <PopupHover popup=\"6\">\n            <div\n              style={{ ...Styles.col, ...Styles.col3 }}\n              onClick={this.handleClick}\n            >\n              6\n            </div>\n          </PopupHover>\n        </div>\n        <div style={{ width: 60 }}>\n          <PopupHover popup=\"7\">\n            <div\n              style={{ ...Styles.col, ...Styles.col1 }}\n              onClick={this.handleClick}\n            >\n              7\n            </div>\n          </PopupHover>\n          <PopupHover popup=\"8\">\n            <div\n              style={{ ...Styles.col, ...Styles.col2 }}\n              onClick={this.handleClick}\n            >\n              8\n            </div>\n          </PopupHover>\n          <PopupHover popup=\"9\">\n            <div\n              style={{ ...Styles.col, ...Styles.col3 }}\n              onClick={this.handleClick}\n            >\n              9\n            </div>\n          </PopupHover>\n        </div>\n      </div>\n    );\n  }\n}\n\nexport default WindowOffsetExample;\n\nconst Styles = {\n  row: {\n    justifyContent: \"space-around\",\n    display: \"flex\",\n    marginBottom: 100,\n  },\n  col: {\n    width: 60,\n    height: 60,\n    lineHeight: \"60px\",\n    textAlign: \"center\",\n    color: \"#fff\",\n  },\n  col1: {\n    background: \"#c00\",\n  },\n  col2: {\n    background: \"#095\",\n  },\n  col3: {\n    background: \"#059\",\n  },\n};\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/YouTubeRWD.example.jsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/YouTubeRWD.example.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\nimport { YoutubeRWD } from \"organism-react-video\";\n\nconst YouTubeRWDExample = () => <YoutubeRWD videoId=\"_2i6CmKjN3E\" />;\n\nexport default YouTubeRWDExample;\n");

/***/ }),

/***/ "d3":
/*!*********************!*\
  !*** external "d3" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = d3;

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map