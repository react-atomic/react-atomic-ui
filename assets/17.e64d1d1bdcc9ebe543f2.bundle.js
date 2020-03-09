(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "../react-atomic-organism/packages/organism-react-ajax/build/es/src/worker.js":
/*!************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-ajax/build/es/src/worker.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "../react-atomic-organism/packages/organism-react-ajax/node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "../react-atomic-organism/packages/organism-react-ajax/node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "../react-atomic-organism/packages/organism-react-ajax/node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var reshow_runtime_es_helpers_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/typeof */ "../react-atomic-organism/packages/organism-react-ajax/node_modules/reshow-runtime/es/helpers/typeof.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutProperties */ "../react-atomic-organism/packages/organism-react-ajax/node_modules/reshow-runtime/es/helpers/objectWithoutProperties.js");
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "../react-atomic-organism/packages/organism-react-ajax/node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! get-object-value */ "../react-atomic-organism/packages/organism-react-ajax/node_modules/get-object-value/build/es/src/index.js");
/* harmony import */ var non_worker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! non-worker */ "../react-atomic-organism/packages/organism-react-ajax/node_modules/non-worker/build/es/src/index.js");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! superagent */ "../react-atomic-organism/packages/organism-react-ajax/node_modules/superagent/lib/client.js");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_8__);









var keys = Object.keys;
var arrWs = {};

var handleMessage = function handleMessage(e) {
  var data = Object(get_object_value__WEBPACK_IMPORTED_MODULE_6__["default"])(e, ['data']);

  switch (data.type) {
    case 'initWs':
      initWs(data.ws)(data.params);
      break;

    case 'closeWs':
      closeWs(data.ws);
      break;

    case 'ajaxGet':
      ajaxGet(data);
      break;

    case 'ajaxPost':
      ajaxPost(data);
      break;
  }
};

var oNonWorker = new non_worker__WEBPACK_IMPORTED_MODULE_7__["default"]().onMessage(handleMessage);
var post = oNonWorker.post;
/* harmony default export */ __webpack_exports__["default"] = (oNonWorker);

var cookParams = function cookParams(action, callReq) {
  var params = Object(get_object_value__WEBPACK_IMPORTED_MODULE_6__["default"])(action, ['params'], {});

  var cookHeaders = Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, Object(get_object_value__WEBPACK_IMPORTED_MODULE_6__["default"])(params, ['globalHeaders'], {}), {}, Object(get_object_value__WEBPACK_IMPORTED_MODULE_6__["default"])(params, ['headers'], {}), {
    Accept: Object(get_object_value__WEBPACK_IMPORTED_MODULE_6__["default"])(params, ['accept'], 'application/json')
  });

  params.cookHeaders = cookHeaders;
  var superagent = params.superagent || {};
  var syncKeys = ['responseType'];
  syncKeys.forEach(function (key) {
    if (params[key]) {
      superagent[key] = params[key];
    }
  });
  keys(superagent).forEach(function (key) {
    callReq = callReq[key].apply(callReq, superagent[key]);
  });
  return params;
};

var ajaxGet = function ajaxGet(_ref) {
  var url = _ref.url,
      action = _ref.action;
  var callReq = superagent__WEBPACK_IMPORTED_MODULE_8___default.a.get(url);
  var params = cookParams(action, callReq);
  callReq.query(params.query).set(params.cookHeaders).end(function (err, res) {
    if (res) {
      var error = res.error,
          _req = res.req,
          text = res.text,
          xhr = res.xhr,
          response = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(res, ["error", "req", "text", "xhr"]);

      post(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, action, {
        text: text,
        response: response
      }));
    }
  });
};

var ajaxPost = function ajaxPost(_ref2) {
  var url = _ref2.url,
      action = _ref2.action;
  var callReq;

  switch (method) {
    case 'delete':
      callReq = superagent__WEBPACK_IMPORTED_MODULE_8___default.a.del(url);
      break;

    case 'head':
      callReq = superagent__WEBPACK_IMPORTED_MODULE_8___default.a.head(url);
      break;

    case 'patch':
      callReq = superagent__WEBPACK_IMPORTED_MODULE_8___default.a.patch(url);
      break;

    case 'put':
      callReq = superagent__WEBPACK_IMPORTED_MODULE_8___default.a.put(url);
      break;

    default:
      callReq = superagent__WEBPACK_IMPORTED_MODULE_8___default.a.post(url);
      break;
  }

  var _cookParams = cookParams(action, callReq),
      query = _cookParams.query,
      method = _cookParams.method,
      isSendJson = _cookParams.isSendJson,
      cookHeaders = _cookParams.cookHeaders,
      responseType = _cookParams.responseType,
      params = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(_cookParams, ["query", "method", "isSendJson", "cookHeaders", "responseType"]);

  var isSend = false;

  if (isSendJson) {
    isSend = true;
  } else {
    if (null == isSendJson) {
      keys(query).every(function (key) {
        if ('object' !== Object(reshow_runtime_es_helpers_typeof__WEBPACK_IMPORTED_MODULE_3__["default"])(query[key])) {
          return true;
        }

        isSend = true;
        return false;
      });
    }
  }

  if (!isSend) {
    callReq = callReq.type('form');
  }

  callReq.send(query).set(cookHeaders).end(function (err, res) {
    if (res) {
      var error = res.error,
          _req2 = res.req,
          text = res.text,
          xhr = res.xhr,
          response = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(res, ["error", "req", "text", "xhr"]);

      post(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, action, {
        text: text,
        response: response
      }));
    }
  });
};

var closeWs = function closeWs(url) {
  if (arrWs[url]) {
    arrWs[url].close();
    delete arrWs[url];
  }

  return !arrWs[url];
};

var WebSocketHelper = /*#__PURE__*/function () {
  function WebSocketHelper(url, params) {
    var _this = this;

    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WebSocketHelper);

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "isWsConnect", false);

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "ping", function () {
      _this.pingTimeout = setTimeout(function () {
        if (!_this.isWsConnect) {
          console.warn(_this.url, 'ajaxws-restore');

          _this.open();
        } else {
          _this.ws.send(JSON.stringify({
            type: 'ping'
          }));
        }

        _this.ping();
      }, 15000);
    });

    this.ws = null;
    this.pingTimeout = null;
    this.url = url;
    this.params = params;
    this.open();
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(WebSocketHelper, [{
    key: "open",
    value: function open() {
      var _this2 = this;

      if (this.isWsConnect) {
        return;
      }

      var url = this.url;
      var params = this.params;
      var ws = new WebSocket(url);
      this.ws = ws;

      ws.onopen = function (e) {
        _this2.isWsConnect = true;

        _this2.ping();

        var messages = params.messages;

        if (Object(get_object_value__WEBPACK_IMPORTED_MODULE_6__["default"])(messages, ['length'])) {
          messages.forEach(function (m) {
            return ws.send(JSON.stringify(m));
          });
        }
      };

      ws.onerror = function (e) {
        _this2.isWsConnect = false;
      };

      ws.onmessage = function (e) {
        switch (e.data) {
          case 'pong':
            break;

          default:
            post({
              type: 'ws',
              text: e.data,
              url: url
            });
            break;
        }
      };

      ws.onclose = function (e) {
        _this2.isWsConnect = false;
        console.warn('WS close', url);
      };
    }
  }, {
    key: "close",
    value: function close() {
      this.ws.close();
      clearTimeout(this.pingTimeout);
    }
  }]);

  return WebSocketHelper;
}();

var initWs = function initWs(url) {
  return function (params) {
    var create = function create() {
      arrWs[url] = new WebSocketHelper(url, params);
    };

    if (!arrWs[url]) {
      create(url);
    }
  };
};

/***/ })

}]);
//# sourceMappingURL=17.e64d1d1bdcc9ebe543f2.bundle.js.map