webpackHotUpdate("main",{

/***/ "../react-atomic-organism/packages/organism-react-code/build/es/ui/organisms/CodeBlock.js":
/*!************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-code/build/es/ui/organisms/CodeBlock.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ "../react-atomic-organism/packages/organism-react-code/node_modules/marked/lib/marked.umd.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-atomic-molecule */ "../react-atomic-organism/packages/organism-react-code/node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var syntax_colorer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! syntax-colorer */ "../react-atomic-organism/packages/organism-react-code/node_modules/syntax-colorer/build/es/src/index.js");




var DEFAULT_LANG = "js";
marked__WEBPACK_IMPORTED_MODULE_1__["marked"].setOptions({
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: syntax_colorer__WEBPACK_IMPORTED_MODULE_3__["default"]
});

var CodeBlock = function CodeBlock(props) {
  var text = "```".concat(DEFAULT_LANG, "\n").concat(props.children, "\n```");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Unsafe"], null, Object(marked__WEBPACK_IMPORTED_MODULE_1__["marked"])(text));
};

_c = CodeBlock;
/* harmony default export */ __webpack_exports__["default"] = (CodeBlock);

var _c;

$RefreshReg$(_c, "CodeBlock");

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

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-code/build/es/ui/organisms/CodeExample.js":
/*!**************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-code/build/es/ui/organisms/CodeExample.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var reshow_runtime_es_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/createSuper */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/createSuper.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-atomic-molecule */ "../react-atomic-organism/packages/organism-react-code/node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var ricon_Code__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ricon/Code */ "../react-atomic-organism/packages/organism-react-code/node_modules/ricon/Code.js");
/* harmony import */ var ricon_Code__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ricon_Code__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ricon_Git__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ricon/Git */ "../react-atomic-organism/packages/organism-react-code/node_modules/ricon/Git.js");
/* harmony import */ var ricon_Git__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ricon_Git__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ricon_Npm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ricon/Npm */ "../react-atomic-organism/packages/organism-react-code/node_modules/ricon/Npm.js");
/* harmony import */ var ricon_Npm__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ricon_Npm__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ricon_Edit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ricon/Edit */ "../react-atomic-organism/packages/organism-react-code/node_modules/ricon/Edit.js");
/* harmony import */ var ricon_Edit__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ricon_Edit__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _organisms_CodeBlock__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../organisms/CodeBlock */ "../react-atomic-organism/packages/organism-react-code/build/es/ui/organisms/CodeBlock.js");
/* harmony import */ var _organisms_CodeReadme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../organisms/CodeReadme */ "../react-atomic-organism/packages/organism-react-code/build/es/ui/organisms/CodeReadme.js");







var _GitIcon, _NpmIcon, _EditIcon, _CodeIcon;










var CodeExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(CodeExample, _PureComponent);

  var _super = Object(reshow_runtime_es_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(CodeExample);

  function CodeExample(props) {
    var _this;

    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CodeExample);

    _this = _super.call(this, props);

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleClick", function () {
      _this.setState({
        on: !_this.state.on
      });
    });

    _this.state = {
      on: false
    };
    injects = Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_7__["lazyInject"])(injects, InjectStyles);
    return _this;
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CodeExample, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          header = _this$props.header,
          children = _this$props.children,
          code = _this$props.code,
          git = _this$props.git,
          npm = _this$props.npm,
          edit = _this$props.edit,
          id = _this$props.id;
      var state = this.state;
      var codeStyle = {};
      var thisCode;
      var thisReadme;
      var thisGit;
      var thisNpm;
      var thisEdit;

      if (!state.on) {
        codeStyle = Styles.hidden;
      } else {
        thisCode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_organisms_CodeBlock__WEBPACK_IMPORTED_MODULE_12__["default"], null, code);
      }

      if (git) {
        var readmeUrl = "https://raw.githubusercontent.com/" + git.replace(/(\/(blob|tree)\/master\/)/, "/master/") + "README.md";
        var gitUrl = "https://github.com/" + git;
        thisReadme = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_organisms_CodeReadme__WEBPACK_IMPORTED_MODULE_13__["default"], {
          url: readmeUrl
        });
        thisGit = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
          atom: "a",
          target: "_blank",
          href: gitUrl,
          style: Styles.icon
        }, _GitIcon || (_GitIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ricon_Git__WEBPACK_IMPORTED_MODULE_9___default.a, null)));
      }

      if (npm) {
        var npmUrl = "https://www.npmjs.com/package/" + npm;
        thisNpm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
          atom: "a",
          target: "_blank",
          href: npmUrl,
          style: Styles.icon
        }, _NpmIcon || (_NpmIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ricon_Npm__WEBPACK_IMPORTED_MODULE_10___default.a, null)));
      }

      if (edit) {
        thisEdit = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
          atom: "a",
          target: "_blank",
          href: edit,
          style: Styles.icon
        }, _EditIcon || (_EditIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ricon_Edit__WEBPACK_IMPORTED_MODULE_11___default.a, null)));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_7__["List"], {
        type: "segments",
        id: id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_7__["Segment"], {
        className: "tertiary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_7__["Header"], {
        style: Styles.header,
        className: "grey"
      }, header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_7__["SemanticUI"], {
        style: Styles.iconBlock
      }, thisEdit, thisNpm, thisGit, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        onClick: this.handleClick,
        style: Styles.icon
      }, _CodeIcon || (_CodeIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ricon_Code__WEBPACK_IMPORTED_MODULE_8___default.a, null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_7__["Segment"], {
        className: "secondary",
        style: codeStyle,
        styles: injects.code
      }, thisCode), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_7__["Segment"], null, children), thisReadme);
    }
  }]);

  return CodeExample;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (CodeExample);
var Styles = {
  header: {
    margin: 0
  },
  hidden: {
    maxHeight: 0,
    padding: "0 16px",
    margin: 0,
    ovarflow: "hidden"
  },
  iconBlock: {
    position: "absolute",
    top: 16,
    right: 6
  },
  icon: {
    maxWidth: 24,
    cursor: "pointer",
    marginRight: 10
  }
};
var injects;
var InjectStyles = {
  code: [{
    transition: ["padding 500ms ease"]
  }]
};

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

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-code/build/es/ui/organisms/CodeReadme.js":
/*!*************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-code/build/es/ui/organisms/CodeReadme.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var reshow_runtime_es_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/createSuper */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/createSuper.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! marked */ "../react-atomic-organism/packages/organism-react-code/node_modules/marked/lib/marked.umd.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var organism_react_ajax__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! organism-react-ajax */ "./node_modules/organism-react-ajax/build/es/src/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-atomic-molecule */ "../react-atomic-organism/packages/organism-react-code/node_modules/react-atomic-molecule/build/es/src/index.js");











var CodeReadme = /*#__PURE__*/function (_Component) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(CodeReadme, _Component);

  var _super = Object(reshow_runtime_es_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(CodeReadme);

  function CodeReadme(props) {
    var _this;

    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CodeReadme);

    _this = _super.call(this, props);

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "_isMount", true);

    _this.state = {
      text: ""
    };
    return _this;
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CodeReadme, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var self = this;
      Object(organism_react_ajax__WEBPACK_IMPORTED_MODULE_8__["ajaxDispatch"])({
        type: "ajaxGet",
        params: {
          url: this.props.url,
          callback: function callback(json, text, o) {
            if (!_this2._isMount) {
              return false;
            }

            if (200 === o.status) {
              self.setState({
                text: text.replace(/(\<\!\-\-hidden\-\-\>)([\s\S]*?)(\<\!\-\-\/hidden\-\-\>)/g, "")
              });
            }
          }
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMount = false;
    }
  }, {
    key: "render",
    value: function render() {
      var text = this.state.text;

      if (text) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_9__["Segment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_9__["Unsafe"], null, Object(marked__WEBPACK_IMPORTED_MODULE_7__["marked"])(text)));
      } else {
        return null;
      }
    }
  }]);

  return CodeReadme;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CodeReadme);

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

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-code/build/es/ui/organisms/FullScreenExample.js":
/*!********************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-code/build/es/ui/organisms/FullScreenExample.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var reshow_runtime_es_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/createSuper */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/createSuper.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var organism_react_popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! organism-react-popup */ "./node_modules/organism-react-popup/build/es/src/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-atomic-molecule */ "../react-atomic-organism/packages/organism-react-code/node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var call_func__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! call-func */ "../react-atomic-organism/packages/organism-react-code/node_modules/call-func/build/es/src/index.js");











var getLastHash = function getLastHash() {
  var urls = document.URL.split("#");
  var lastIndex = urls.length - 1;
  var last = urls[lastIndex];
  return last;
};

var updateUrl = function updateUrl(url) {
  return history.pushState("", "", url);
};

var FullScreenExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FullScreenExample, _PureComponent);

  var _super = Object(reshow_runtime_es_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(FullScreenExample);

  function FullScreenExample() {
    var _this;

    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FullScreenExample);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      showFullScreen: false
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleClick", function () {
      var id = _this.props.id;
      var last = getLastHash();

      if (id && id !== last) {
        updateUrl(document.URL + "#" + id);
      }

      _this.setState({
        showFullScreen: true
      });
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleClose", function () {
      var _this$props = _this.props,
          id = _this$props.id,
          onClose = _this$props.onClose;
      var url = document.URL;
      var idIndex = url.lastIndexOf("#" + id);

      if (-1 !== idIndex) {
        updateUrl(url.substring(0, idIndex));
      }

      Object(call_func__WEBPACK_IMPORTED_MODULE_9__["default"])(onClose);

      _this.setState({
        showFullScreen: false
      });
    });

    return _this;
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FullScreenExample, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var id = this.props.id;
      var last = getLastHash();

      if (id === last) {
        this.setState({
          showFullScreen: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          button = _this$props2.button,
          children = _this$props2.children;
      var showFullScreen = this.state.showFullScreen;
      var thisFullScreen = null;

      if (showFullScreen) {
        thisFullScreen = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_7__["FullScreen"], {
          onClose: this.handleClose
        }, children);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_8__["SemanticUI"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        onClick: this.handleClick
      }, button), thisFullScreen);
    }
  }]);

  return FullScreenExample;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(FullScreenExample, "defaultProps", {
  button: "Open full screen"
});

/* harmony default export */ __webpack_exports__["default"] = (FullScreenExample);

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
//# sourceMappingURL=main.c1d2c660148c656e3754.hot.js.map