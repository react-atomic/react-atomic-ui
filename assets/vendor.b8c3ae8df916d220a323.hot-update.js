webpackHotUpdate("vendor",{

/***/ "./node_modules/organism-react-iframe/build/es/ui/organisms/Iframe.js":
/*!****************************************************************************!*\
  !*** ./node_modules/organism-react-iframe/build/es/ui/organisms/Iframe.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutProperties */ "./node_modules/reshow-runtime/es/helpers/objectWithoutProperties.js");
/* harmony import */ var reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/extends */ "./node_modules/reshow-runtime/es/helpers/extends.js");
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "./node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "./node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "./node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reshow-runtime/es/helpers/possibleConstructorReturn */ "./node_modules/reshow-runtime/es/helpers/possibleConstructorReturn.js");
/* harmony import */ var reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reshow-runtime/es/helpers/getPrototypeOf */ "./node_modules/reshow-runtime/es/helpers/getPrototypeOf.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! get-object-value */ "./node_modules/get-object-value/build/es/src/index.js");
/* harmony import */ var getoffset__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! getoffset */ "./node_modules/getoffset/build/es/src/index.js");
/* harmony import */ var smooth_scroll_to__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! smooth-scroll-to */ "./node_modules/smooth-scroll-to/build/es/src/index.js");
/* harmony import */ var exec_script__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! exec-script */ "./node_modules/exec-script/build/es/src/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var css_query_selector__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! css-query-selector */ "./node_modules/css-query-selector/build/es/src/index.js");
/* harmony import */ var call_func__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! call-func */ "./node_modules/call-func/build/es/src/index.js");
/* harmony import */ var _organisms_IframeContainer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../organisms/IframeContainer */ "./node_modules/organism-react-iframe/build/es/ui/organisms/IframeContainer.js");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











var keys = Object.keys;

var IframeInner = function IframeInner(_ref) {
  var children = _ref.children,
      inlineCSS = _ref.inlineCSS,
      onLoad = _ref.onLoad;
  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(function () {
    Object(call_func__WEBPACK_IMPORTED_MODULE_17__["default"])(onLoad);
  }, [children]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_15__["SemanticUI"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_15__["Unsafe"], {
    atom: "style"
  }, function () {
    return inlineCSS || "body {padding: 0; margin: 0; background: transparent;}";
  }), children);
};

var Iframe = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Iframe, _PureComponent);

  var _super = _createSuper(Iframe);

  function Iframe() {
    var _this;

    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Iframe);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "html", null);

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "execStop", null);

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "appendHtml", function (html) {
      var div = document.createElement("div");
      div.innerHTML = html;
      var root = Object(get_object_value__WEBPACK_IMPORTED_MODULE_11__["default"])(_this.root, ["childNodes", 0, "childNodes", 0], _this.root);
      root.appendChild(div);

      _this.handleScript(div);
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "postHeight", function () {
      return _this.iframe.postHeight(_this.getWindow());
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "scrollToEl", function (el) {
      var pos = Object(getoffset__WEBPACK_IMPORTED_MODULE_12__["default"])(el);

      if (pos.rect) {
        Object(smooth_scroll_to__WEBPACK_IMPORTED_MODULE_13__["default"])(pos.rect.top);
      }
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getBody", function () {
      return Object(get_object_value__WEBPACK_IMPORTED_MODULE_11__["default"])(_this.getDoc(), ["body"]);
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getDoc", function () {
      return Object(get_object_value__WEBPACK_IMPORTED_MODULE_11__["default"])(_this.getWindow(), ["document"]);
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getWindow", function () {
      return Object(get_object_value__WEBPACK_IMPORTED_MODULE_11__["default"])(_this.el, ["contentWindow", "window"]);
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleBodyClick", function (e) {
      var _this$props = _this.props,
          keepTargetInIframe = _this$props.keepTargetInIframe,
          disableSmoothScroll = _this$props.disableSmoothScroll,
          onLinkClick = _this$props.onLinkClick;
      var query = Object(css_query_selector__WEBPACK_IMPORTED_MODULE_16__["queryFrom"])(function () {
        return _this.getBody();
      });
      var evTarget = e.target;
      var link = evTarget.nodeName === "A" ? evTarget : query.ancestor(evTarget, "a");

      if (!link) {
        return;
      }

      if (link.target && "_blank" === link.target.toLowerCase()) {
        return;
      }

      var isContinue = Object(call_func__WEBPACK_IMPORTED_MODULE_17__["default"])(onLinkClick, [e, link]);

      if (false === isContinue) {
        e.preventDefault();
        return;
      }

      if (link.hash && !disableSmoothScroll) {
        var tarDom;

        try {
          tarDom = query.one(link.hash);
        } catch (e) {
          var tarId = decodeURIComponent(link.hash.substr(1));
          tarDom = query.one("[id=\"".concat(tarId, "\"]")) || query.one("[name=\"".concat(tarId, "\"]"));
        }

        if (!tarDom) {
          console.warn("Can not handle hash", {
            e: e
          });
          return;
        } else {
          var URI = document.location;

          if (URI.pathname === link.pathname && URI.host === link.host) {
            e.preventDefault();

            _this.scrollToEl(tarDom);

            return;
          }
        }
      }

      if (keepTargetInIframe) {
        return;
      } else {
        e.preventDefault();

        if (link.href) {
          location.href = link.href;
        }
      }
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleScript", function (el) {
      var win = _this.getWindow();

      if (win) {
        _this.execStop = Object(exec_script__WEBPACK_IMPORTED_MODULE_14__["default"])(el, win, _this.root.parentNode, function (e, script) {
          console.warn('script error', [e, script]);
        });
      }
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleRef", function (el) {
      return _this.iframe = el;
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleRefCb", function (el) {
      if (el) {
        var refCb = _this.props.refCb;
        _this.el = el;
        Object(call_func__WEBPACK_IMPORTED_MODULE_17__["default"])(refCb, [el]);
      }
    });

    return _this;
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Iframe, [{
    key: "handleLinkClick",
    value: function handleLinkClick() {
      var body = this.getBody();

      if (!body) {
        return;
      }

      body.removeEventListener("click", this.handleBodyClick);
      body.addEventListener("click", this.handleBodyClick);
    }
  }, {
    key: "renderIframe",
    value: function renderIframe(props) {
      var _this2 = this;

      if (!this.root) {
        this.init();
      }

      var root = this.root;
      var children = props.children,
          autoHeight = props.autoHeight,
          onLoadDelay = props.onLoadDelay,
          onLoad = props.onLoad,
          inlineCSS = props.inlineCSS;
      this.html = root.innerHTML;

      var callback = function callback() {
        if (!_this2._mount) {
          return;
        }

        var html = root.innerHTML;

        if (html !== _this2.html) {
          _this2.handleScript(root);

          _this2.handleLinkClick();

          _this2.onLoadTimer = setTimeout(function () {
            if (!_this2._mount || !_this2.getWindow()) {
              return;
            }

            if (autoHeight) {
              _this2.postHeight();
            }

            Object(call_func__WEBPACK_IMPORTED_MODULE_17__["default"])(onLoad);
          }, onLoadDelay);
        }
      };

      return /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_10__["createPortal"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(IframeInner, Object(reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
        inlineCSS: inlineCSS,
        onLoad: callback
      })), this.root);
    }
  }, {
    key: "init",
    value: function init() {
      var _this$props2 = this.props,
          initialContent = _this$props2.initialContent,
          onUnload = _this$props2.onUnload,
          onBeforeUnload = _this$props2.onBeforeUnload,
          autoHeight = _this$props2.autoHeight;
      this.root = document.createElement("div");
      var doc = this.getDoc();

      if (doc) {
        // fixed firfox innerHTML suddenly disappear.
        doc.open("text/html", "replace");
        doc.write(initialContent);
        doc.close();
        var body = this.getBody();
        body.appendChild(this.root);
        body.addEventListener("unload", onUnload);
        body.addEventListener("beforeunload", onBeforeUnload);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      !this.root && this.forceUpdate();
      this._mount = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._mount = false;

      if (this.onLoadTimer) {
        clearTimeout(this.onLoadTimer);
      }

      Object(call_func__WEBPACK_IMPORTED_MODULE_17__["default"])(this.execStop);
      Object(call_func__WEBPACK_IMPORTED_MODULE_17__["default"])(this.props.onUnmount);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          inlineCSS = _this$props3.inlineCSS,
          initialContent = _this$props3.initialContent,
          children = _this$props3.children,
          keepTargetInIframe = _this$props3.keepTargetInIframe,
          disableSmoothScroll = _this$props3.disableSmoothScroll,
          refCb = _this$props3.refCb,
          autoHeight = _this$props3.autoHeight,
          onLinkClick = _this$props3.onLinkClick,
          onLoad = _this$props3.onLoad,
          onLoadDelay = _this$props3.onLoadDelay,
          onUnload = _this$props3.onUnload,
          onBeforeUnload = _this$props3.onBeforeUnload,
          onUnmount = _this$props3.onUnmount,
          others = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props3, ["inlineCSS", "initialContent", "children", "keepTargetInIframe", "disableSmoothScroll", "refCb", "autoHeight", "onLinkClick", "onLoad", "onLoadDelay", "onUnload", "onBeforeUnload", "onUnmount"]);

      if (autoHeight) {
        others.scrolling = "no";
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_organisms_IframeContainer__WEBPACK_IMPORTED_MODULE_18__["default"], Object(reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, others, {
        ref: this.handleRef,
        refCb: this.handleRefCb
      }), this.el && this.renderIframe(this.props));
    }
  }]);

  return Iframe;
}(react__WEBPACK_IMPORTED_MODULE_9__["PureComponent"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Iframe, "defaultProps", {
  disableSmoothScroll: false,
  keepTargetInIframe: false,
  initialContent: "<html><body /></html>",
  autoHeight: false,
  onLoadDelay: 500
});

/* harmony default export */ __webpack_exports__["default"] = (Iframe);

/***/ }),

/***/ "./node_modules/organism-react-iframe/build/es/ui/organisms/IframeContainer.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/organism-react-iframe/build/es/ui/organisms/IframeContainer.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/extends */ "./node_modules/reshow-runtime/es/helpers/extends.js");
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutProperties */ "./node_modules/reshow-runtime/es/helpers/objectWithoutProperties.js");
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "./node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "./node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "./node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reshow-runtime/es/helpers/possibleConstructorReturn */ "./node_modules/reshow-runtime/es/helpers/possibleConstructorReturn.js");
/* harmony import */ var reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reshow-runtime/es/helpers/getPrototypeOf */ "./node_modules/reshow-runtime/es/helpers/getPrototypeOf.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! get-object-value */ "./node_modules/get-object-value/build/es/src/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var call_func__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! call-func */ "./node_modules/call-func/build/es/src/index.js");











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var iframeCount = 0;

var IframeContainer = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(IframeContainer, _PureComponent);

  var _super = _createSuper(IframeContainer);

  function IframeContainer(props) {
    var _this;

    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, IframeContainer);

    _this = _super.call(this, props);

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      iframeH: "auto"
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "postHeight", function (win) {
      _this.setState({
        iframeH: "auto"
      }, function () {
        setTimeout(function () {
          var _win$parent;

          win === null || win === void 0 ? void 0 : (_win$parent = win.parent) === null || _win$parent === void 0 ? void 0 : _win$parent.window.postMessage({
            type: _this.messageKey,
            h: win.document.body.offsetHeight
          }, "*");
        });
      });
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleMessage", function (e) {
      var data = e.data;

      if ("string" === typeof data) {
        try {
          data = JSON.parse(Object(get_object_value__WEBPACK_IMPORTED_MODULE_11__["default"])(data, null, "{}"));
        } catch (ex) {}
      }

      var _data = data,
          type = _data.type,
          h = _data.h;

      if (-1 !== "|".concat(type, "|").indexOf("|".concat(_this.messageKey, "|"))) {
        _this.setState({
          iframeH: h + 50
        });
      }
    });

    var messageKey = props.messageKey;
    _this.messageKey = messageKey + "-" + iframeCount;
    iframeCount++;
    return _this;
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(IframeContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("message", this.handleMessage, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("message", this.handleMessage, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var iframeH = this.state.iframeH;

      var _this$props = this.props,
          src = _this$props.src,
          _refCb = _this$props.refCb,
          style = _this$props.style,
          messageKey = _this$props.messageKey,
          others = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$props, ["src", "refCb", "style", "messageKey"]);

      if (src) {
        others.src = src;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_12__["SemanticUI"], Object(reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, others, {
        style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Styles.iframe), {}, {
          height: iframeH,
          minHeight: iframeH
        }, style),
        atom: "iframe",
        refCb: function refCb(el) {
          if (el) {
            _this2.iframe = el;
            Object(call_func__WEBPACK_IMPORTED_MODULE_13__["default"])(_refCb, [el]);
          }
        }
      }));
    }
  }]);

  return IframeContainer;
}(react__WEBPACK_IMPORTED_MODULE_10__["PureComponent"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(IframeContainer, "defaultProps", {
  messageKey: "iframeH"
});

/* harmony default export */ __webpack_exports__["default"] = (IframeContainer);
var Styles = {
  iframe: {
    width: "100%",
    border: 0
  }
};

/***/ })

})
//# sourceMappingURL=vendor.b8c3ae8df916d220a323.hot-update.js.map