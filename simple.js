!function(e){var t={};function __webpack_require__(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,__webpack_require__),r.l=!0,r.exports}__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,n){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(__webpack_require__.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)__webpack_require__.d(n,r,function(t){return e[t]}.bind(null,r));return n},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e["default"]}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},o="undefined",i=undefined,a=Object.keys,c=Array.isArray,u="|number|boolean|string|object|function|"+o+"|",s=function toBase(e,t){return-1===u.indexOf("|"+e+"|")?(t||(t=e),t):e},l=function getTypeIs(e,t){var n=Object.prototype.toString.call(e).replace(/^\[object\s(.*)\]$/,"$1").toLowerCase();return s(n,t)},f=function getTypeOf(e,t){if(null==e)return l(e,t);try{var n=Object.getPrototypeOf(e).constructor.name.toLowerCase();return s(n,t)}catch(r){return l(e,t)}};function _objectSpread2(e){for(var t=1,n=arguments.length;t<n;t++)if(t%2||!Object.getOwnPropertyDescriptors){var o=null!=arguments[t]?arguments[t]:{},i=a(o);"function"===f(Object.getOwnPropertySymbols)&&(i=i.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),i.forEach((function(t){r(e,t,o[t])}))}else Object.defineProperties(e,Object.getOwnPropertyDescriptors(arguments[t]));return e}var p=function getDateObject(e){return null!=e?new Date(e):new Date},d=function getTimestamp(e){return+p(e)},g=function getRandom(){return d()+""+Math.random()},m=d(),v=function classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},h=function defineProperties(e,t){for(var n=0,r=t.length;n<r;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}},_=function createClass(e,t,n){return t&&h(e.prototype,t),n&&h(e,n),e},y=function replaceValue(e,t,n,r,o){if(!o&&function isPrototypePolluted(e){var t="|".concat(e.join("|"),"|");return["__proto__","constructor","prototype"].some((function(e){return-1!==t.indexOf("|".concat(e,"|"))}))}(t))throw"Contain un-safe key.";var i=t.pop(),a=e;t.forEach((function(e){var t;a[e]=null!==(t=a[e])&&void 0!==t?t:Object.create(null),a=a[e]})),!r||a[i]&&a[i].push?r&&a[i].push?a[i].push(n):a[i]=n:a[i]?a[i]=[a[i],n]:a[i]=[n]},b=function _typeof(e){return"symbol"===f(e)?"symbol":f(e,"object")},S=function getDefaultValue(e,t){return"function"===b(e)?e(t):null!=e?e:t},k=function toJS(e){return e&&e.toJS?e.toJS():e},w=function toMap(e,t){var n=I(e,t,{}),r={};return a(n).forEach((function(e){return r[e]=k(n[e])})),r},I=function get(e,t,n){if(null==e)return S(n,e);var r=k(e);if(!t||!c(t))return r;try{for(var i=t.length,a=t.length-1;i--;){var u=t[a-i];if(!r||o===b(r[u])){r=S(n);break}if(null==(r=r[u])){r=S(n,r);break}}}catch(s){console.warn({e:s}),r=S(n)}return r},O=I,j=function callFunc(e,t,n,r){return"function"===b(e)?e.apply(n,t):o!==b(r)?r:e},x=function getParams(e){return O(e,["params"],{})},E=function(){function BaseI13nReducer(){v(this,BaseI13nReducer)}return _(BaseI13nReducer,[{key:"sendBeacon",value:function sendBeacon(e,t){return e}},{key:"initDone",value:function initDone(e,t){var n=this,r=t||{},o=r.triggerImpression,i=r.asyncInit,a=function assignState(e){return e.set("init",!0).set("nextEmit","init")};return!i&&this.dispatch(a(e)),setTimeout((function(){o?o((function(){return n.dispatch("impression")})):n.dispatch("impression")})),i?a(e):e}},{key:"processImpression",value:function processImpression(e,t){return this.sendBeacon(e,t)}},{key:"processAction",value:function processAction(e,t){var n=e.get("vpvid");return n&&y(t,[PARAMS,"query","vpvid"],n),this.sendBeacon(e,t)}},{key:"handleInit",value:function handleInit(e,t){var n=e.get("initHandler"),r=this.initDone.bind(this);return n||(t.asyncInit=!0),j(n||r,[e,t,r])}},{key:"handleImpression",value:function handleImpression(e,t){var n=this;return e.get("init")?e.get("disableHandleImpression")?e:function maybeAsyncRun(e){var r=e.get("impressionHandler"),o=j(r||n.processImpression.bind(n),[e,t]);return x(t).stop||(o=o.set("nextEmit","impression")),o}(e):this.handleInit(e,t)}},{key:"handleAction",value:function handleAction(e,t){var n=e.get("actionHandler"),r=j(n||this.processAction.bind(this),[e,t]),o=x(t),i=o.wait,a=o.stop;return null!=i||a||(r=r.set("nextEmit","action")),r}},{key:"mergeMap",value:function mergeMap(){throw"abstract method"}},{key:"reduce",value:function reduce(e,t){switch(e.get("nextEmit")&&(e=e.set("nextEmit",null)),t.type){case"impression":return this.handleImpression(e,t);case"action":return this.handleAction(e,t);case"config/set":return this.mergeMap(e,t.params);case"reset":return this.mergeMap(this.store.reset(),t.params);default:return a(t).length?this.mergeMap(e,t):e}}}]),BaseI13nReducer}(),A=Object.assign||function(e){for(var t=1,n=arguments.length;t<n;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},C=function objectWithoutProperties(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},D=Object.keys,P=function(){function Storage(e){v(this,Storage),this._storage=e}return _(Storage,[{key:"set",value:function set(e,t){var n=JSON.stringify(k(t)),r=n.length+","+n;return this._storage(e)(r),new Storage(this._storage)}},{key:"merge",value:function merge(e){var t=this;if(!e||"object"!==b(e))return this;var n=D(e);return n&&n.length?(n.forEach((function(n){return t.set(n,e[n])})),new Storage(this._storage)):this}},{key:"get",value:function get(e){var t=this._storage(e)();if(t){var n=t.indexOf(","),r=function toInt(e){return parseInt(e,10)}(t.substring(0,n)),o=t.substr(n+1);return r===o.length?JSON.parse(o):null}}}]),Storage}(),T={__null:!0},M=function doc(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:T;return e=e||N(),o!==b(e.document)?e.document:t},N=function win(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:T;return"undefined"!=typeof window?window:e},q={},z=function getStorage(e){return function(t){return function(n){var r=N();if(r&&!q[e]){var i=O(r,[e]);if(o===b(i))return console.warn("Not support. ["+e+"]"),void(q[e]=!0);if(o===b(n))return i.getItem(t);try{return null==n?i.removeItem(t):i.setItem(t,n)}catch(a){return i.clear(),i.setItem(t,n)}}}}},L=z("localStorage"),R=(z("sessionStorage"),function getTime(e){var t=p(e),n=[t.getUTCFullYear(),t.getUTCMonth()+1,t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds()].map((function(e){return function fixDigit(e){return e<10?"0"+e:e}(e)}));return{toArray:function toArray(){return n},toString:function toString(){return[n.slice(0,3).join("-"),"T",n.slice(3).join(":"),"Z"].join("")}}}),U=["stop","wait","lazeInfo","lazyKey"],H=function docUrl(){return M().URL},F=function processLazyAction(e,t){var n=function processLazy(e,n){var r=e[n],i=x(r),a=i.wait,c=i.stop;return!a||a<=0?(c||(o!==b(O(r,["params","wait"]))&&delete r.params.wait,t&&t(r)),delete e[n]):r.params.wait=function _readOnlyError(e){throw new Error('"'+e+'" is read-only')}("wait"),e[n]},r=O(e,["__seq"]);c(r)&&(e.__seq=r.filter((function(e,t){return n(r,t)})));var i=O(e,["__hash"]);return i&&a(i).forEach((function(e){return n(i,e)})),e},B=function getDefaultStorage(){return new P(L)};function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){var n=[];return a(e).some((function(r,o){if(n.push(e[r]),t===o+1)return!0})),n}(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var J=function toConsumableArray(e){if(Array.isArray(e)||!Array.from){for(var t=0,n=Array(e.length),r=e.length;t<r;t++)n[t]=e[t];return n}return Array.from(e)},V=function emitter(){var e=[];return{reset:function reset(){return e.splice(0,e.length)},add:function add(t){return e.unshift(t)},remove:function remove(t){return e.splice(e.indexOf(t)>>>0,1)},emit:function emit(t,n,r){return setTimeout((function(){for(var o=e.length;o--;){var i=e[o];i&&i(t,n,r)}}))}}},G=function refineAction(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},t=arguments.length>1?arguments[1]:undefined;return e.trim&&(e={type:e},t&&(e.params=t)),e},K=function(){function SimpleMap(e){v(this,SimpleMap),r(this,"_state",{}),e&&(this._state=e)}return _(SimpleMap,[{key:"get",value:function get(e){return"object"===b(this._state[e])&&null!==this._state[e]?new SimpleMap(this._state[e]):this._state[e]}},{key:"set",value:function set(e,t){var n=_objectSpread2(_objectSpread2({},this._state),{},r({},e,k(t)));return this._state=n,new SimpleMap(n)}},{key:"delete",value:function _delete(e){var t=_objectSpread2({},this._state);return delete t[e],this._state=t,new SimpleMap(t)}},{key:"merge",value:function merge(e){var t=_objectSpread2(_objectSpread2({},this._state),k(e));return this._state=t,new SimpleMap(t)}},{key:"toJS",value:function toJS(){return this._state}}]),SimpleMap}(),W=(Object.keys,!1),X=0,$=function logError(e,t,n){if(5===X)console.log("Max Errors exceed.",5);else if(X>5)return;X++;var r=e||{},o=r.message,i=(r.stack,{message:o,stack:O(e,["stack"],"").split(/\n/),url:M().URL,lastExec:void 0});if(n&&(i.name=n),setTimeout((function(){var e=t&&-1!==t.indexOf("I13nScriptErr")?0:undefined;te("action",{wait:e,I13N:{action:t,category:"Error",label:i}})})),W)throw console.error({action:t,name:n},void 0),e},Q=JSON,Y=new E,Z=_slicedToArray(function createReducer(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},n={current:j(t)},r=V(),a=function dispatch(){for(var t=arguments.length,a=new Array(t),c=0;c<t;c++)a[c]=arguments[c];a=G.apply(void 0,J(a));var u=n.current,s=e(u,a);if(s===i)throw console.trace(),"reduce() return ".concat(o,".");u!==s&&(n.current=s,r.emit(s,a,u))},c={reset:function reset(){return r.reset()&&j(t)},getState:function getState(){return n.current},addListener:r.add,removeListener:r.remove};return[c,a]}(Y.reduce.bind(Y),new K),2),ee=Z[0],te=Z[1],ne=function mergeMap(e,t){return e.merge(t)};(function i13nStoreReAssign(e){var t=e.oI13n,n=e.store,r=e.i13nDispatch,o=e.mergeMap;t.store=n,t.dispatch=r,t.mergeMap=o,n.i13n=t})({oI13n:Y,store:ee,i13nDispatch:te,mergeMap:ne}),ee.getClone=function(e){return function clone(e){try{return Q.parse(Q.stringify(e))}catch(t){$(t,"I13nScriptErr")}}(w(ee.getState().get(e)))},Array.isArray,Object.keys;var re,oe=Object.keys,ie=Array.isArray,ae=function removeEmpty(e,t,n){if(!e)return e;t&&"function"!==b(t)&&(t=function undefinedOnly(e){return o!==b(e)});var r={};return oe(e).forEach((function(o){var i=e[o];n&&n.length&&-1!==n.indexOf(o)||(i||t&&t(i))&&(r[o]=i)})),ie(e)?oe(r).map((function(e){return r[e]})):r},ce=new K,ue=new K,se=function lazyAttr(e,t){return function(n){var r=w(ce.get("i13nLazyAttr"));if(o===b(e))return r;var i=w(ce.get("i13nLazyExpire")),a=d();return o!==b(n)&&(r[e]=n,i[e]=a,ce.set("i13nLazyAttr",r),ce.set("i13nLazyExpire",i)),function expireCallback(e,t,n,r){var o=d(),i=!1;return null==e||isNaN(e)||(!t||o-e<=t)&&(i=!0),j(i?n:r)}(i[e],t?1e3*t:null,(function(){return r[e]}))}},le=se("__prods"),fe=function forEachStoreProducts(e){var t=function getAllLazyProducts(){return w(le())}();return["impressions","detailProducts","products"].forEach((function(n){var r=c(e[n])?e[n]:function objectToArray(e){return a(e||{}).map((function(t){return e[t]}))}(e[n]);r.length?function storeProducts(e,t){e.forEach((function(n,r){n&&n.id&&(t[n.id]=_objectSpread2(_objectSpread2({},t[n.id]),ae(n)),delete t[n.id].quantity,delete t[n.id].variant,delete t[n.id].position,e[r]=_objectSpread2(_objectSpread2({},n),t[n.id]))}))}(r,t):delete e[n]})),le(t),e},pe=function lazyProducts(e){var t=fe(w(e.get("I13N"))),n=fe(w(e.get("i13nPage")));return e.set("I13N",t).set("i13nPage",n)},de=function workerUtils(){return{dispatch:te}},ge=function getGaHost(){return"https://www.google-analytics.com/".concat(function getDebugFlag(){return W}()?"debug/":"","collect")},me=[{},[]],ve=function initLazyAction(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:B(),t=function getAllLazy(){return w(e.get("lazyAction"))},n=function getOneLazy(e){return w(t().__hash)[e]},r=function updateLazy(t){return e.set("lazyAction",t)},o=function removeLazy(e){var n=t();O(n,["__hash",e])&&(delete n.__hash[e],r(n))},i=function getActionMergeWithLazy(e,n){var r=t(),o=O(r,["__hash",n,"params"],{}),i=(o.stop,o.wait,o.lazeInfo,o.lazyKey,C(o,U));return a(i).forEach((function(t){var n=i[t],r="object"===b(n)?_objectSpread2(_objectSpread2({},n),O(e,["params",t],{})):O(e,["params",t],n);y(e,["params",t],r)})),delete e.params.withLazy,e},c=function pushLazyAction(e,n){var o=x(e),i={params:A({},o),type:e.type};y(i,["params","lazeInfo"],{from:H(),time:R().toString()});var a=t();n?y(a,["__hash",n],i):y(a,["__seq"],i,!0),r(a)},u=function process(e){return r(F(t(),e))},s=function handleAction(e,t){var n=x(t).withLazy;n&&(t=i(t,n));var r=e.get("lazyActionHandler"),a=j(r,[e,t])||e,c=x(t),u=c.wait,s=c.stop,l=c.lazyKey;return null!=u||s||n&&n!==l&&o(n),a};return{process:u,handleAction:s,getAll:t,getOne:n,push:c}}(ue),he=function maybeDelayAction(e,t){return function(){e.get("init")||y(t,["params","wait"],0);var n=_slicedToArray(function getCbParams(){return me}(),2),r=n[0],i=n[1],a=i[0],c=i[1],u=x(t);isNaN(u.delay)||delete t.params.delay;var s,l,f=u.i13nCb,p=u.lazeInfo,d=u.i13nPageCb,g=u.wait,m=u.lazyKey,v=u.I13N;if(p&&(v.lazeInfo=p),"function"===b(f)&&(r.currentTarget=null!==(s=r.currentTarget)&&void 0!==s?s:c,v=f(a,null!==(l=v)&&void 0!==l?l:{},r,e),delete t.params.i13nCb),v=function oneTimeAction(e,t){var n=t&&t.get("oneTimeAction"),r=e&&e.action;if(r&&n&&n.length){var o=se("oneTimeAction"),i=o()||{};if(i[r])return!1;-1!==n.indexOf(r)&&(i[r]=!0,o(i))}return e}(v,e),e=e.set("I13N",v),v?o!==b(g)&&(y(t,["params","I13N"],fe(v)),ve.push(t,m)):y(t,["params","stop"],!0),"function"===b(d)){var h=d(t,v,r);if(h){var _=e.get("i13nPage");e=e.set("i13nPage",_?_.merge(h):h)}}return pe(e)}},_e=function actionHandler(e,t){var n=x(t),r=n.delay,i=n.wait,c=he(e,t);return isNaN(r)?e=c():(setTimeout((function(){var e=c();e&&te(e);var t=e.get("I13N");o===b(i)&&a(t.toJS()).length&&te("action",{I13N:t})}),r),y(t,["params","stop"],!0)),e},ye=function heeding(e,t){return function(n,r){n.get("nextEmit")===t&&j(e)}},be=/[|\\{}()[\]^$+*?.]/g,Se=function cacheReg(e){return function(t,n){return function(r){if(!e[r]){var o=t?t(r):r;e[r]=new RegExp(o,n)}return e[r]}}},ke=function getSafeReg(e){return function text(e){return e?e+"":""}(e).replace(be,"\\$&")},we=function getRegString(e){return"(([#?&])"+ke(e)+"=)([^&#]*)"},Ie=Se({})(we),Oe=Se({})(we,"g"),getKeyReg=function(e){return Ie(e)},je=/^(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,xe={},Ee=i,Ae=function parseUrl(e){var t=function getUrlAnaly(e){return xe[e]||(xe[e]=je.exec(e)),xe[e]}(e);return{host:t[11],query:t[16],path:t[13]}},Ce=function resetUrl(e){return e||M().URL},De=function getUrl(e,t){var n=Ae(Ce(t)).query,r=void 0===n?"":n,o=function getOne(e){var t=e+"=";if(r.indexOf(t)===r.lastIndexOf(t)){var n=getKeyReg(e).exec(r);return n?decodeURIComponent(n[3]):Ee}return function oneItemArrayToString(e){return c(e)?e.length>1?e:e[0]:e}(Pe(e,r))};if(c(e)){var i={};return e.forEach((function(e){i[e]=o(e)})),i}return e?o(e):Ee},Pe=function getUrlArray(e,t){var n=Ae(Ce(t)).query;return function getMultiKey(e,t){for(var n,r=function getMultiMatchReg(e){return Oe(e)}(e),o=[];n=r.exec(t);)o.push(decodeURIComponent(n[3]));return o}(e,void 0===n?"":n)},Te=["Shopify","Checkout"],Me=function getStepName(){return O(N(),[].concat(Te,["step"]))},Ne=function getDocUrl(){var e=O(N(),["__st","pageurl"]);if(e)return"https://"+e},qe=function getStepNo(){switch(Me()){default:break;case"contact_information":return 1;case"shipping_method":return 2;case"payment_method":return 3}},ze=Me,Le=function getShopId(){return O(N(),["Shopify","shop"],(function(){return O(N(),[].concat(Te,["apiHost"]))}))},Re=function getPage(){if("thank_you"===Me())return"thank_you";var e=N();return O(e,["__st","t"],(function(){return O(e,["__st","p"])}))},Ue=function getUid(){return O(N(),["__st","cid"])},He=function getGaId(){var e=Ne(),t=De("_ga",e)||"";return O(t.split("-"),[1])},Fe=Ne,Be=function getCurrency(){return O(N(),[].concat(Te,["currency"]),(function(){return O(N(),["Shopify","currency","active"])}))},Je=function getClientId(){var e=O(N(),[].concat(Te,["token"]));if(e)return"shopify-checkout-"+e},Ve=function setCurrency(e,t,n){var r=O(e,["currencyCode"])||n;y(t,["currencyCode"],r)},Ge={},Ke=function handleStep(e,t,n){var r=e.stepNo,o=e.stepOption,i=e.products,a=null!=r?r:qe(),c=null!=o?o:ze();if(a){var u={step:a,option:c};!Ge[a]||i&&i.length||!c?(Ge[a]={actionField:u,products:i},Ve(e,t,n),y(t,["checkout"],Ge[a])):y(t,["checkout_option"],{actionField:u})}},We=function handlePromotionImpressions(e,t){var n=e.promotions;n&&y(t,["promoView","promotions"],n)},Xe=function handleDetailProducts(e,t,n){var r=e.fromP,o=e.detailProducts;o&&(r&&y(t,["detail","actionField","list"],r),Ve(e,t,n),y(t,["detail","products"],o))},$e=function handleImpressions(e,t,n){var r=e.p,o=e.impressions;o&&(Ve(e,t,n),r&&o.forEach((function(e,t){return o[t].list=e.list||r})),y(t,["impressions"],o))},Qe=function handlePurchase(e,t,n,r){var o=e.purchaseId,i=e.refundId,a=e.products,c=O(e,["affiliation"],""),u=O(e,["coupon"],""),s=O(e,["revenue"],0),l=O(e,["tax"],0),f=O(e,["shipping"],0);o&&(Ve(e,t,n),y(t,["purchase","actionField"],{id:o,affiliation:c,revenue:s,tax:l,shipping:f,coupon:u}),y(t,["purchase","products"],a)),i&&(y(t,["refund","actionField","id"],i),a&&(Ve(e,t,n),y(t,["refund","products"],a)))},Ye=function getActionEcommerce(e,t){var n,r,o=t.defaultCurrencyCode,i=e.p,a=e.action,c=e.products,u=e.promotions,s={};i&&(r={list:i});var l={actionField:r,products:c};switch(a){case"ClickPromotion":s.promoClick={promotions:u};break;case"ClickProduct":s.click=l,n=O(c,[0,"price"]),Ve(e,s,o);break;case"BuyNow":case"AddToCart":s.add=l,Ve(e,s,o);break;case"RemoveFromCart":s.remove=l,Ve(e,s,o);break;case"ViewContent":We(e,s),Xe(e,s,o),$e(e,s,o)}return Ke(e,s,o),Qe(e,s,o),{ecommerce:s,value:n}},Ze=function getImpressionEcommerce(e,t){var n=t.defaultCurrencyCode,r={};return We(e,r),Xe(e,r,n),$e(e,r,n),Qe(e,r,n),Ke(e,r,n),{ecommerce:r}},et=function handleEcommerce(e,t,n){var r=n.getState(),i=j("action"===e.trigger?Ye:Ze,[t,{defaultCurrencyCode:r.get("currencyCode")}]),c=i.ecommerce,u=i.value;return a(c).length&&(e.ecommerce=c,"action"===e.trigger&&(e.category="Ecommerce",o!==b(e.value)||isNaN(u)||(e.value=u))),e},tt=["ecommerce"],nt=function getOneItem(e){var t,n,r,o,i,a=e.prod,c=void 0===a?{}:a,u=e.promo,s=void 0===u?{}:u,l=((null==c?void 0:c.category)||"").split("/")||[],f={item_name:c.name,item_id:c.id,price:c.price,item_brand:c.brand,item_category:null===(t=l[0])||void 0===t?void 0:t.trim(),item_category2:null===(n=l[1])||void 0===n?void 0:n.trim(),item_category3:null===(r=l[2])||void 0===r?void 0:r.trim(),item_category4:null===(o=l[3])||void 0===o?void 0:o.trim(),item_category5:null===(i=l[4])||void 0===i?void 0:i.trim(),item_variant:c.variant,item_list_name:c.list,item_list_id:c.listId,index:c.position,quantity:c.quantity,promotion_name:s.name,promotion_id:s.id,creative_name:s.creative,creative_slot:s.creativeSlot,location_id:s.position};return ae(f)},rt="|number|".concat("string","|"),ot=function toNum(e){if(o===b(e))return 0;if(-1!==rt.indexOf("|"+b(e)+"|")&&e){var t=e&&e.trim?e.trim():e+"",n=parseFloat(t),r=parseInt(t,10);if(n!==r||r+""!==t&&0!==r){if(t===n+"")return n;var i=0;return-1!==t.indexOf(".")?n:(isNaN(t)||(i=t),console.warn("Can not change to number well.",{willNum:i,maybeString:t,num:e}),i)}return r}var a=Number(e);return isNaN(a)?0:a},it=/(\-)?(\d+)(\.)?(\d+)?/g,at=function getNum(e){if("string"!==b(e))return ot(e);var t=e.replace(",","").match(it);return t?ot(t[0]):(console.warn("Get number fail",e),0)},ct=!0,ut=Se({})((function getRegString(e){return"(?:^|;)\\s?"+ke(e)+"=([^;]+)"})),st=function notSupport(e){console.warn("cookie not support",{e:e}),ct=!1},lt=function getCookie(e,t){t=function docCookie(e){if(e)return e;if(!ct)return"";try{return M().cookie}catch(t){return st(t),""}}(t);var n=function getCookieReg(e){return ut(e)}(e).exec(t);return null!==n?decodeURIComponent(n[1]):null},ft=function getDocUrl(e){return O(e,["location"],(function(){return Fe()||M().URL}))},pt=ft,dt=function getClientIdCookie(e){var t=(lt(e||"")||"").split(".");if(t[2]&&t[3])return t[2]+"."+t[3]},gt=function getClientId(){return Je()||function getCookieClientId(){var e=dt("_ga");return e||function setCookie(e,t,n,r){if(ct)try{M().cookie=function getCookieSetStr(e,t,n,r){r=r||"";var o="";if(n=n||0){var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3),o="expires="+i.toUTCString()+";"}return r&&(r="domain="+r+";"||!1),e+"="+t+";"+o+r+"path=/"}(e,t,n,r)}catch(o){st(o)}}("_ga","GA1.3."+(e=g()),730),e}()},mt=["id","name","category","brand","variant","position","price","quantity","coupon","image","sku"],vt=["list"],ht=1,_t=function isArray(e){return e&&Array.isArray(e)&&e.length},yt=function notUndefinedNum(e){return o!==b(e)?at(e):e},bt=function(){function DataLayerToMp(){var e=this;v(this,DataLayerToMp),r(this,"isSameHost",(function(e){return function(t){var n="//"+e,r=t.indexOf(n);if(5===r||6===r){var o=t.charAt(r+n.length);if("/"===o||"?"===o||""===o||":"===o)return!0}return!1}})),r(this,"getPromotionsData",(function(t){return e.getItemsData(t,"promo",e.setOnePromotion)})),r(this,"setOnePromotion",(function(e,t,n,r){var o=n.id,i=n.name,a=n.creative,c=n.position;t[e+"id"]=o,t[e+"nm"]=i,t[e+"cr"]=a,t[e+"ps"]=yt(c)})),r(this,"getProductsData",(function(t,n){return e.getItemsData(t,"pr",e.setOneProduct,n)}))}return _(DataLayerToMp,[{key:"getReferrer",value:function getReferrer(e){e||(e=M());var t=function getHostName(e){return Ae(ft(e)).host}(),n=O(e,["referrer"]);if(n&&!this.isSameHost(t)(n))return{dr:n}}},{key:"getActionData",value:function getActionData(e){var t=e||{},n=t.action,r=t.category,o=t.label,i=t.value;return{ec:r,ea:n,el:o,ev:yt(i)}}},{key:"getItemsData",value:function getItemsData(e,t,n,r){if(_t(e)){var o=1,i={};return e.forEach((function(e){if(e){var a=t+o;o++,j(n,[a,i,e,r])}})),i}}},{key:"getEcPromotionData",value:function getEcPromotionData(e,t){if(e||t){var n=(e||t).promotions;return _objectSpread2({promoa:e?"view":"click"},this.getPromotionsData(n))}}},{key:"setOneProduct",value:function setOneProduct(e,t,n,r){var o=n.id,i=n.name,c=n.category,u=n.brand,s=n.variant,l=n.position,f=n.price,p=n.quantity,d=n.coupon,g=n.image,m=n.sku,v=C(n,mt);null==o&&null==i||(t[e+"id"]=o,t[e+"nm"]=i,t[e+"br"]=u,t[e+"ca"]=c,t[e+"va"]=s,t[e+"pr"]=yt(f),t[e+"qt"]=p,t[e+"cc"]=d,t[e+"ps"]=yt(l),t[e+"img"]=g,t[e+"sku"]=m,a(v).forEach((function(n){var r;if(0===n.indexOf("dimension")&&(r="cd"),0===n.indexOf("metric")&&(r="cm"),r){var o=at(n);t[e+r+o]=v[n]}})),(r||{}).imageIndex&&(t[e+"cd"+r.imageIndex]=g))}},{key:"getEcPurchaseData",value:function getEcPurchaseData(e,t,n){if(e||t){var r,o=e||t,i=o.actionField,a=o.products,c=i||{},u=c.id,s=c.affiliation,l=c.revenue,f=c.tax,p=c.shipping,d=c.coupon;return r=e?{pa:"purchase",ti:u,ta:s,tr:yt(l),tt:yt(f),ts:yt(p),tcc:d}:{pa:"refund",ti:u},a&&(r=_objectSpread2(_objectSpread2({},r),this.getProductsData(a,n))),r}}},{key:"getEcStepData",value:function getEcStepData(e,t,n){if(e||t){var r=e||t,o=r.actionField,i=r.products,a=o||{};return _objectSpread2({cos:a.step,col:a.option,pa:t?"checkout_option":"checkout"},this.getProductsData(i,n))}}},{key:"getEcActionData",value:function getEcActionData(e,t,n){if(e){var r=e.actionField,o=e.products,i=(r||{}).list,a=_objectSpread2(_objectSpread2({},this.getProductsData(o,n)),{},{pa:t,pal:i});return ae(a,!0)}}},{key:"getEcImpressionsData",value:function getEcImpressionsData(e,t){var n=this;if(_t(e)){var r=1,o={},i={};return e.forEach((function(e){var a=e.list,c=C(e,vt);o[a]||(o[a]={key:"il"+r,n:1},r++,i[o[a].key+"nm"]=a);var u=o[a].key+"pi"+o[a].n;o[a].n++,n.setOneProduct(u,i,c,t)})),i}}},{key:"getEcData",value:function getEcData(e){var t=(e||{}).ecommerce;if(t){var n=t.impressions,r=t.detail,o=t.click,i=t.add,a=t.remove,c=t.checkout,u=t.checkout_option,s=t.purchase,l=t.refund,f=t.promoView,p=t.promoClick,d=t.currencyCode;return _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({},this.getEcImpressionsData(n,e)),this.getEcActionData(r,"detail",e)),this.getEcActionData(o,"click",e)),this.getEcActionData(i,"add",e)),this.getEcActionData(a,"remove",e)),this.getEcStepData(c,u,e)),this.getEcPurchaseData(s,l,e)),this.getEcPromotionData(f,p)),{},{cu:null!=d?d:Be()})}}},{key:"getMp",value:function getMp(e,t){var n=M(),r=N(),o=r.navigator||{},i=r.screen||{},a=n.documentElement||{},c=Math.max(a.clientWidth||0,r.innerWidth||0),u=Math.max(a.clientHeight||0,r.innerHeight||0),s=e||{},l=s.tagId,f=s.needCheckTagId,p=s.version;if(f&&null==l)return!1;var v=t||{},h=v.event,_=v.bCookieIndex,y=v.bCookie,b=v.lazeInfoIndex,S=v.lazeInfo,k=v.expId,w=v.expVar,I=v.siteId,O=v.email,x=v.p,E=v.p2,A=v.p3,C=v.p4,D=v.p5,P=_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({},this.getActionData(t)),this.getEcData(t)),this.getReferrer()),{},{siteid:I,em:O,xid:k,xvar:w,fbp:lt("_fbp")||undefined,fbc:lt("_fbc")||undefined,cg1:x,cg2:E,cg3:A,cg4:C,cg5:D,_s:ht,dl:pt(),ul:(o.language||o.browserLanguage||"").toLowerCase(),de:n.characterSet||n.charset,dt:n.title,sd:i.colorDepth+"-bit",sr:i.width+"x"+i.height,vp:c+"x"+u,je:ot(j(o.javaEnabled,null,o)),tid:l,cid:gt(),scid:He(),dh:Le(),_gid:dt("_gid"),v:p||1,z:g()});if(ht++,P.t=-1!==(h||"").toLowerCase().indexOf("view")?"pageview":"event","Error"===P.ec&&(P.t="exception",P.exd=P.ea),y&&(_&&(P["cd"+_]=y),P.uid=y),S){b&&(P["cd"+b]=S);var T=function parseJson(e){try{return Q.parse(e)}catch(t){$(t,"I13nScriptErr")}}(S);if(T.time){var q=d(T.time);isNaN(q)||(P.qt=d()-q)}}return m&&(P.clt=d()-m),ae(P,!0)}}]),DataLayerToMp}(),St=function req(e,t,n,r){var o=function createCORSRequest(e,t){var n=N()||self;e=e||"GET";var r=null!=n.XMLHttpRequest?new n.XMLHttpRequest:null;return r&&"withCredentials"in r?r.open(e,t,!0):null!=n.XDomainRequest?(r=new n.XDomainRequest).open(e,t):r=null,r}(n,e);if(!o)return!1;o.timeout=3e4,o.onload=function(){re=!0,j(j(t,[o]))};try{return o.send(r),!0}catch(i){return console.warn("req failed.",{url:e,e:i}),!1}},kt=function imageTag(e){if(!function hasWin(e){return!N()[e||"__null"]}())return St(e);var t,n=new Image;n.onload=function(){t&&clearTimeout(t),re=!0},n.src=e,t=setTimeout((function(){n.src=""}),9e4)},wt=function beacon(e,t,n,r){n=n||St,r=r||kt;var o=function dataToQuery(e){var t="?";return e?(a(e).forEach((function(n){t=function setUrl(e,t,n,r){var o=c(t);return n=function unsetUrl(e,t){t=Ce(t);for(var n,r=getKeyReg(e);n=r.exec(t);)t="?"===n[2]?t.replace(r,"?"):t.replace(r,"");return t}(e,Ce(n)),(o?t:[t]).forEach((function(t){r||(t=encodeURIComponent(t)),n=n+(-1===n.indexOf("?")?"?":"&")+e+"="+t})),n}(n,e[n],t)})),t.substring(2)):t}(t),i=e+"?"+o;2036>=i.length?r(i):function beaconApi(e,t){var n=O(N(),["navigator","sendBeacon"]);return!(!n||!re||(n.call(N().navigator,e,t),0))}(e,o)||n(e,null,"POST",o)||r(i)},It=function mpTag(e){var t=e.store,n=e.gaId,r=e.bCookieIndex,o=e.lazeInfoIndex,i=e.mpHost,c=new bt,u=function doPush(e){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:wt,o=t.getState(),a=j(i)||o.get("mpHost"),u=o.get("defaultMpHost"),s=a||u;if(s){var l=c.getMp({tagId:n||o.get("tagId"),needCheckTagId:o.get("needCheckTagId"),version:o.get("version")},e);l&&r(s,l)}else console.warn("mp host not found")},s=function push(e){var i,c=t.getState(),s=function getUserId(){var e,t;return null!==(e=null==ee||null===(t=ee.getState())||void 0===t?void 0:t.get("uid"))&&void 0!==e?e:Ue()}();s&&(e.bCookie=s,r&&(e.bCookieIndex=r)),e.lazeInfo&&o&&(e.lazeInfoIndex=o);var l=0===(null==n?void 0:n.indexOf("UA-"))?"ua":4;if(e.event=O({action:{ua:"lucencyEventAction",4:"lucency4Action"},impression:{ua:"lucencyEventView",4:"lucency4View"}},[e.trigger,l]),"action"===e.trigger&&(e.label=function mergeGaLabel(e,t){var n=e;return a(t||{}).length&&(n="object"!==b(n)?_objectSpread2({label:e},t):_objectSpread2(_objectSpread2({},n),t)),"object"===b(n)&&(n=JSON.stringify(n)),n}(e.label,e.ecommerce?{ecommerce:e.ecommerce}:null)),e.p=null!==(i=e.p)&&void 0!==i?i:Re(),e.expId=c.get("expId"),e.expVar=c.get("expVar"),e.siteId=c.get("siteId"),e.email=c.get("email"),e.gaId=n,4===l){var f=function toGa4(e){var t=e||{},n=t.ecommerce,r=C(t,tt),o=_objectSpread2({},r);if(n){var i,a,c,u,s,l,f,p,d,g={currency:n.currencyCode};[{bool:n.impressions,prods:n.impressions,action:"view_item_list"},{bool:n.click,prods:null===(i=n.click)||void 0===i?void 0:i.products,action:"select_item"},{bool:n.detail,prods:null===(a=n.detail)||void 0===a?void 0:a.products,action:"view_item"},{bool:n.add,prods:null===(c=n.add)||void 0===c?void 0:c.products,action:"add_to_cart"},{bool:n.remove,prods:null===(u=n.remove)||void 0===u?void 0:u.products,action:"remove_from_cart"},{bool:n.checkout,prods:null===(s=n.checkout)||void 0===s?void 0:s.products,action:"begin_checkout"},{bool:n.purchase,prods:null===(l=n.purchase)||void 0===l?void 0:l.products,action:"purchase",callback:function callback(e){var t=e.nextEcommerce,r=(e.nextBeaconOption,e.prods,e.action,e.promos,n.purchase.actionField);t.transaction_id=r.id,t.affiliation=r.affiliation,t.value=r.revenue,t.tax=r.tax,t.shipping=r.shipping,t.coupon=r.coupon}},{bool:n.refund,prods:null===(f=n.refund)||void 0===f?void 0:f.products,action:"refund"},{bool:n.promoView,promos:null===(p=n.promoView)||void 0===p?void 0:p.promotions,action:"view_promotion"},{bool:n.promoClick,promos:null===(d=n.promoClick)||void 0===d?void 0:d.promotions,action:"select_promotion"}].forEach((function(e){var t=e.bool,n=e.prods,o=e.promos,i=e.action,a=e.callback;if(t){var c={nextEcommerce:g,nextBeaconOption:r,prods:n,promos:o,action:i};!function handleItems(e){var t=e.nextEcommerce,n=e.nextBeaconOption,r=e.action,o=e.prods,i=e.promos,a=[];null!=o&&o.forEach&&o.forEach((function(e){a.push(nt({prod:e}))})),null!=i&&i.forEach&&i.forEach((function(e){a.push(nt({promo:promo}))})),t.items=a,n.action=r}(c),j(a,c)}})),r.ecommerce=ae(g)}return{actionOption:r,impressionOption:o}}(e),p=f.actionOption,d=f.impressionOption;"impression"===e.trigger&&u(ae(d)),p.ecommerce&&(p.event=O(trigger,["action",4]),u(ae(p)))}else u(ae(e))};!function regTag(e){return function(t){var n=t.init,r=t.action,o=t.impression;n&&e.addListener(ye(n,"init")),r&&e.addListener(ye(r,"action")),o&&e.addListener(ye(o,"impression"))}}(t)({action:function action(){var e=t.getClone("I13N"),n=e.lazeInfo,action=e.action,r=e.category,o=e.label,i=e.value,a=e.p,c=e.p2,u=e.p3,l=e.p4,f=e.p5,p={trigger:"action",lazeInfo:JSON.stringify(n),action:action,category:null!=r?r:action,label:o,value:i,p:a,p2:c,p3:u,p4:l,p5:f};s(et(p,e,t))},impression:function impression(){var e=t.getClone("i13nPage"),n=e.p,r=e.p2,o=e.p3,i=e.p4,a=e.p5;s(et({trigger:"impression",p:n,p2:r,p3:o,p4:i,p5:a},e,t))}})},Ot=function getTag(e){e.store=ee,e.type,It(e)},jt=function initHandler(e,t,n){var r=x(t);return function initTags(e){for(var t=O(e,["tags"],[]),n=t.length;n--;)Ot(t[n])}(_objectSpread2(_objectSpread2({},O(e)),r)),t.asyncInit=!0,n(ne(e,r),t)},xt=function impressionHandler(e,t){return pe(e)};!function init(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},n=t.global,r=void 0===n?{}:n,o=t.globalKey,i=void 0===o?"i13n":o,a=t.utils,c=void 0===a?de:a,u=!1,s=function run(){u||(r[i]=j(c),u=!0,te("reset",{initHandler:jt,actionHandler:_e,impressionHandler:xt}),te("impression",{tagId:e,tags:[{mpHost:ge}]}))};s()}(function getScriptTagId(){var e=M().currentScript;if(e)return De("id",e.src)}(),{global:N()})}]);