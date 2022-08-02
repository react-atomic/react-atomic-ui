"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17],{16(f,c,a){a.d(c,{U:()=>L,Z:()=>z});var g,h,i,j,k,l,m=a(11),d=a(1),n=a(3),o=a(18),p=a(19),q=a(20),r=a(21),s=a(5);let t=function(){var c=(0,d.useState)(function(){return g||function(){}}),b=(0,m.Z)(c,2),e=b[0],f=b[1];return g||a.e(22).then(a.bind(a,46)).then(function(a){g=(0,s.MV)(a),f(function(){return g})}),e};var u=a(0);let v=function(a){var b=t(),c="```".concat("js","\n").concat(a.children,"\n```");return(0,u.jsx)(n.ER,{children:b(c)})};var w=a(13),x=a(15);let y=function(c){var g=c.url,h=(0,x.s4)(),e=(0,d.useState)(),a=(0,m.Z)(e,2),b=a[0],i=a[1],f=t();return((0,d.useEffect)(function(){(0,w.Bt)("ajaxGet",{url:g,callback:function(c,a,b){if(!1===h())return!1;200===b.status&&i(a.replace(/(\<\!\-\-hidden\-\-\>)([\s\S]*?)(\<\!\-\-\/hidden\-\-\>)/g,""))}})},[]),b)?(0,u.jsx)(n.XX,{children:(0,u.jsx)(n.ER,{children:f(b)})}):null},z=function(a){l=(0,n.UM)(B,l);var c,e,f,g,s,C=a.header,D=a.children,E=a.code,b=a.git,t=a.npm,w=a.edit,F=a.id,G=(0,d.useState)({on:!1}),x=(0,m.Z)(G,2),H=x[0],L=x[1],z={};if(H.on?c=(0,u.jsx)(v,{children:E}):z=A.hidden,b){var I="https://raw.githubusercontent.com/"+b.replace(/(\/(blob|tree)\/(master|main)\/)/,"/$3/")+"README.md",J="https://github.com/"+b;e=(0,u.jsx)(y,{url:I}),f=(0,u.jsx)(n.JO,{atom:"a",target:"_blank",href:J,style:A.icon,children:h||(h=(0,u.jsx)(p.Z,{}))})}if(t){var K="https://www.npmjs.com/package/"+t;g=(0,u.jsx)(n.JO,{atom:"a",target:"_blank",href:K,style:A.icon,children:i||(i=(0,u.jsx)(q.Z,{}))})}return w&&(s=(0,u.jsx)(n.JO,{atom:"a",target:"_blank",href:w,style:A.icon,children:j||(j=(0,u.jsx)(r.Z,{}))})),(0,u.jsxs)(n.aV,{type:"segments",id:F,children:[(0,u.jsxs)(n.XX,{className:"tertiary",children:[(0,u.jsx)(n.h4,{style:A.header,className:"grey",children:C}),(0,u.jsxs)(n.iX,{style:A.iconBlock,children:[s,g,f,(0,u.jsx)(n.JO,{onClick:function(){return L(function(a){return{on:!a.on}})},style:A.icon,children:k||(k=(0,u.jsx)(o.Z,{}))})]})]}),(0,u.jsx)(n.XX,{className:"secondary",style:z,styles:l.code,children:c}),(0,u.jsx)(n.XX,{children:D}),e]})};var A={header:{margin:0},hidden:{maxHeight:0,padding:"0 16px",margin:0,ovarflow:"hidden"},iconBlock:{position:"absolute",top:16,right:6},icon:{maxWidth:24,cursor:"pointer",marginRight:10}},B={code:[{transition:["padding 500ms ease"]}],fitWidth:[{whiteSpace:"break-spaces"},"code"]},C=a(462),D=a(463),E=a(472),F=a(9),G=a(10),e=a(460),H=a(17),I=a(8),J=function(){var a=document.URL.split("#"),b=a.length-1,c=a[b];return c},K=function(a){return history.pushState("","",a)},b=function(b){(0,F.Z)(a,b);var c=(0,G.Z)(a);function a(){var b;(0,C.Z)(this,a);for(var f=arguments.length,g=new Array(f),d=0;d<f;d++)g[d]=arguments[d];return b=c.call.apply(c,[this].concat(g)),(0,e.Z)((0,E.Z)(b),"state",{showFullScreen:!1}),(0,e.Z)((0,E.Z)(b),"handleClick",function(){var a=b.props.id,c=J();a&&a!==c&&K(document.URL+"#"+a),b.setState({showFullScreen:!0})}),(0,e.Z)((0,E.Z)(b),"handleClose",function(){var a=b.props,e=a.id,f=a.onClose,c=document.URL,d=c.lastIndexOf("#"+e);-1!==d&&K(c.substring(0,d)),(0,I.ZP)(f),b.setState({showFullScreen:!1})}),b}return(0,D.Z)(a,[{key:"componentDidMount",value:function(){var a=this.props.id,b=J();a===b&&this.setState({showFullScreen:!0})}},{key:"render",value:function(){var a=this.props,c=a.button,d=a.children,e=this.state.showFullScreen,b=null;return e&&(b=(0,u.jsx)(H.IT,{onClose:this.handleClose,children:d})),(0,u.jsxs)(n.iX,{children:[(0,u.jsx)(n.zx,{onClick:this.handleClick,children:c}),b]})}}]),a}(d.PureComponent);(0,e.Z)(b,"defaultProps",{button:"Open full screen"});let L=b},11(c,b,a){a.d(b,{Z:()=>e});var d=a(7);function e(a,e){var b,f,c;return function(a){if(Array.isArray(a))return a}(a)||(b=a,f=e,c=[],(0,d.tW)(b).some(function(a,d){if(c.push(b[a]),f===d+1)return!0}),c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}},18(c,b,a){a.d(b,{Z:()=>e});var d=a(6);let e=function(a){return(0,d.Z)("Code","M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z")(a)}},21(c,b,a){a.d(b,{Z:()=>e});var d=a(6);let e=function(a){return(0,d.Z)("Edit","M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z")(a)}},19(c,b,a){a.d(b,{Z:()=>g});var d=a(4),e=a(6),f=["viewBox"];let g=function(a){var b=a.viewBox,c=(0,d.Z)(a,f);return c.viewBox=void 0===b?"0 0 16 16":b,(0,e.Z)("Git","M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z")(c)}},20(c,b,a){a.d(b,{Z:()=>g});var d=a(4),e=a(6),f=["viewBox","fill"];let g=function(a){var c=a.viewBox,g=a.fill,b=(0,d.Z)(a,f);return b.viewBox=void 0===c?"0 0 3200 3200":c,b.fill=void 0===g?"#b93131":g,(0,e.Z)("Npm","M269 3186 c-99 -27 -193 -106 -243 -205 l-26 -50 0 -1332 0 -1331 31 -59 c40 -75 102 -132 187 -172 l67 -32 1255 -3 c911 -2 1271 0 1315 8 119 23 224 102 282 211 l28 54 0 1325 0 1325 -29 54 c-42 80 -128 163 -201 192 l-60 24 -1280 2 c-992 1 -1290 -1 -1326 -11z m1311 -1386 l0 -600 200 0 200 0 0 600 0 600 200 0 200 0 0 -800 0 -800 -800 0 -800 0 0 800 0 800 400 0 400 0 0 -600z")(b)}},6(c,b,a){a.d(b,{Z:()=>j});var d=a(2),e=a(4),f=a(28),g=a(25),h=a(0),i=["type","children"];let j=function(b,c){var a=function(a){var j=a.type,k=a.children,l=(0,e.Z)(a,i);return(0,h.jsxs)(f.Z,(0,d.Z)((0,d.Z)({},l),{},{"data-name":b,children:[(0,h.jsx)(g.Z,{d:c[void 0===j?null:j]||c["_"]||c}),k]}))};return a.displayName=b,a}},36(c,b,a){a.d(b,{Z:()=>i});var d,e=a(1),f=a(23),g=a(27),h=a(13);let i=function(a){var b=a.pageName,c=a.tplProps;(0,e.useEffect)(function(){return setTimeout(function(){(0,g.Ns)({params:{activeMenu:b}}),(0,f.WI)({tplProps:c,pageName:b})}),d||(d=1,(0,h.Bt)("ajaxGet",{url:"/data/env",ini:!0,disableCacheBusting:!0})),function(){(0,g.Ns)({params:{activeMenu:null}})}},[])}},402(e,b,a){a.r(b),a.d(b,{default:()=>E});var f,g=a(2),h=a(16),i=a(36),c=a(1),j=a(3),k=a(48),l=a(8),m=a(5),n={jspdf:"https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js","html2canvas.min.js":"https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"};let o=function(a){return(0,m.ZP)(n,[a])};var p=a(0),q={allowTaint:!0,useCORS:!0,logging:!1},d=(0,c.forwardRef)(function(a,h){var b,d=a.preview,i=void 0!==d&&d,e=a.hideHtml,j=a.children,m=a.jsArr,t=a.autoGenCanvas,u=a.onCanvas,n=(0,c.useRef)(),r=(0,c.useRef)(),v=(0,c.useRef)(),s=function(f,e,a){void 0===a&&(a=q);var b=n.current,c=null==b?void 0:b.getWindow(),d=null==c?void 0:c.html2canvas;if(d)return d(e||b.getRoot(),a).then(function(a){(0,l.ZP)(f,[{iframe:b,canvas:a}]),i&&r.current&&(r.current.innerHTML="",r.current.appendChild(a))})},w={getCanvas:s};(0,c.useImperativeHandle)(h,function(){return w},[]),i&&(b=(0,p.jsx)("div",{ref:r,className:"preivew"}));var f,g={};return void 0!==e&&e&&(g={position:"absolute",top:-99999,left:-99999,opacity:0}),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(k.Z,{autoHeight:!0,style:g,initialContent:(f=m,'<!DOCTYPE html>\n<html>\n<body>\n  <script src="'+o("html2canvas.min.js")+'"></script>\n  '+(f||[]).map(function(a){return'<script src="'+a+'"></script>'})+"\n</body>\n</html>\n"),onLoad:function(){t&&(v.current&&clearTimeout(v.current),v.current=setTimeout(function(){return s(u)},1e3))},ref:n,children:j}),b]})});d.displayName="HTMLToCanvas";let r=d;var s=a(7);function t(c,d,e,f,g,h,i){try{var a=c[h](i),b=a.value}catch(j){e(j);return}a.done?d(b):Promise.resolve(b).then(f,g)}var u=a(4),v=function(a,c,d){void 0===d&&(d=!1);var b=a.w/(c.w/c.h);if(!(b<=a.h)&&!d)return w(a,c);b=Math.floor(b);var e=Math.floor((a.h-b)/2);return a.h=b,{x:0,y:e}},w=function(a,c,d){void 0===d&&(d=!1);var b=a.h*(c.w/c.h);if(!(b<=a.w)&&!d)return v(a,c);b=Math.floor(b);var e=Math.floor((a.w-b)/2);return a.w=b,{x:e,y:0}},x=function(b,d,c){var a={x:(b.w-d.w)/2,y:(b.h-d.h)/2};return a.x<0&&(c.w>b.w?a.x=-((c.w-b.w)/2):a.x=0),a.y<0&&(c.h>b.h?a.y=-((c.h-b.h)/2):a.y=0),a};let y=function(g,h,c,d){var e,f={w:c,h:d},a={w:c,h:d},i={w:c,h:d},b={w:g,h:h};g>h?(e=v(f,b),v(a,b,!0)):(e=w(f,b),w(a,b,!0));var j=x(i,a,a),k=x(i,b,a);return{newWHLoc:e,maxWHLoc:j,origWHLoc:k,newWH:f,maxWH:a,origWH:b}};var z=a(42),A=["downloadFileName"];function B(){B=function(){return b};var b={},l=Object.prototype,p=l.hasOwnProperty,f="function"==typeof Symbol?Symbol:{},g=f.iterator||"@@iterator",q=f.asyncIterator||"@@asyncIterator",m=f.toStringTag||"@@toStringTag";function a(a,b,c){return Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}),a[b]}try{a({},"")}catch(u){a=function(a,b,c){return a[b]=c}}function r(c,a,d,e){var f,g,h,i,b=Object.create((a&&a.prototype instanceof s?a:s).prototype),j=new o(e||[]);return b._invoke=(f=c,g=d,h=j,i="suspendedStart",function(c,d){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===c)throw d;return A()}for(h.method=c,h.arg=d;;){var e=h.delegate;if(e){var b=x(e,h);if(b){if(b===w)continue;return b}}if("next"===h.method)h.sent=h._sent=h.arg;else if("throw"===h.method){if("suspendedStart"===i)throw i="completed",h.arg;h.dispatchException(h.arg)}else"return"===h.method&&h.abrupt("return",h.arg);i="executing";var a=v(f,g,h);if("normal"===a.type){if(i=h.done?"completed":"suspendedYield",a.arg===w)continue;return{value:a.arg,done:h.done}}"throw"===a.type&&(i="completed",h.method="throw",h.arg=a.arg)}}),b}function v(a,b,c){try{return{type:"normal",arg:a.call(b,c)}}catch(d){return{type:"throw",arg:d}}}b.wrap=r;var w={};function s(){}function h(){}function c(){}var i={};a(i,g,function(){return this});var j=Object.getPrototypeOf,e=j&&j(j(t([])));e&&e!==l&&p.call(e,g)&&(i=e);var d=c.prototype=s.prototype=Object.create(i);function n(b){["next","throw","return"].forEach(function(c){a(b,c,function(a){return this._invoke(c,a)})})}function k(a,b){var c;function d(f,g,j,h){var e=v(a[f],a,g);if("throw"!==e.type){var i=e.arg,c=i.value;return c&&"object"==typeof c&&p.call(c,"__await")?b.resolve(c.__await).then(function(a){d("next",a,j,h)},function(a){d("throw",a,j,h)}):b.resolve(c).then(function(a){i.value=a,j(i)},function(a){return d("throw",a,j,h)})}h(e.arg)}this._invoke=function(e,f){function a(){return new b(function(a,b){d(e,f,a,b)})}return c=c?c.then(a,a):a()}}function x(b,a){var e=b.iterator[a.method];if(void 0===e){if(a.delegate=null,"throw"===a.method){if(b.iterator.return&&(a.method="return",a.arg=void 0,x(b,a),"throw"===a.method))return w;a.method="throw",a.arg=new TypeError("The iterator does not provide a 'throw' method")}return w}var d=v(e,b.iterator,a.arg);if("throw"===d.type)return a.method="throw",a.arg=d.arg,a.delegate=null,w;var c=d.arg;return c?c.done?(a[b.resultName]=c.value,a.next=b.nextLoc,"return"!==a.method&&(a.method="next",a.arg=void 0),a.delegate=null,w):c:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,w)}function y(a){var b={tryLoc:a[0]};1 in a&&(b.catchLoc=a[1]),2 in a&&(b.finallyLoc=a[2],b.afterLoc=a[3]),this.tryEntries.push(b)}function z(b){var a=b.completion||{};a.type="normal",delete a.arg,b.completion=a}function o(a){this.tryEntries=[{tryLoc:"root"}],a.forEach(y,this),this.reset(!0)}function t(a){if(a){var b=a[g];if(b)return b.call(a);if("function"==typeof a.next)return a;if(!isNaN(a.length)){var d=-1,c=function b(){for(;++d<a.length;)if(p.call(a,d))return b.value=a[d],b.done=!1,b;return b.value=void 0,b.done=!0,b};return c.next=c}}return{next:A}}function A(){return{value:void 0,done:!0}}return h.prototype=c,a(d,"constructor",c),a(c,"constructor",h),h.displayName=a(c,m,"GeneratorFunction"),b.isGeneratorFunction=function(b){var a="function"==typeof b&&b.constructor;return!!a&&(a===h||"GeneratorFunction"===(a.displayName||a.name))},b.mark=function(b){return Object.setPrototypeOf?Object.setPrototypeOf(b,c):(b.__proto__=c,a(b,m,"GeneratorFunction")),b.prototype=Object.create(d),b},b.awrap=function(a){return{__await:a}},n(k.prototype),a(k.prototype,q,function(){return this}),b.AsyncIterator=k,b.async=function(e,c,f,g,a){void 0===a&&(a=Promise);var d=new k(r(e,c,f,g),a);return b.isGeneratorFunction(c)?d:d.next().then(function(a){return a.done?a.value:d.next()})},n(d),a(d,m,"Generator"),a(d,g,function(){return this}),a(d,"toString",function(){return"[object Generator]"}),b.keys=function(b){var a=[];for(var c in b)a.push(c);return a.reverse(),function c(){for(;a.length;){var d=a.pop();if(d in b)return c.value=d,c.done=!1,c}return c.done=!0,c}},b.values=t,o.prototype={constructor:o,reset:function(b){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(z),!b)for(var a in this)"t"===a.charAt(0)&&p.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=void 0)},stop:function(){this.done=!0;var a=this.tryEntries[0].completion;if("throw"===a.type)throw a.arg;return this.rval},dispatchException:function(f){if(this.done)throw f;var g=this;function b(b,a){return h.type="throw",h.arg=f,g.next=b,a&&(g.method="next",g.arg=void 0),!!a}for(var c=this.tryEntries.length-1;c>=0;--c){var a=this.tryEntries[c],h=a.completion;if("root"===a.tryLoc)return b("end");if(a.tryLoc<=this.prev){var d=p.call(a,"catchLoc"),e=p.call(a,"finallyLoc");if(d&&e){if(this.prev<a.catchLoc)return b(a.catchLoc,!0);if(this.prev<a.finallyLoc)return b(a.finallyLoc)}else if(d){if(this.prev<a.catchLoc)return b(a.catchLoc,!0)}else{if(!e)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return b(a.finallyLoc)}}}},abrupt:function(c,d){for(var e=this.tryEntries.length-1;e>=0;--e){var b=this.tryEntries[e];if(b.tryLoc<=this.prev&&p.call(b,"finallyLoc")&&this.prev<b.finallyLoc){var a=b;break}}a&&("break"===c||"continue"===c)&&a.tryLoc<=d&&d<=a.finallyLoc&&(a=null);var f=a?a.completion:{};return f.type=c,f.arg=d,a?(this.method="next",this.next=a.finallyLoc,w):this.complete(f)},complete:function(a,b){if("throw"===a.type)throw a.arg;return"break"===a.type||"continue"===a.type?this.next=a.arg:"return"===a.type?(this.rval=this.arg=a.arg,this.method="return",this.next="end"):"normal"===a.type&&b&&(this.next=b),w},finish:function(c){for(var b=this.tryEntries.length-1;b>=0;--b){var a=this.tryEntries[b];if(a.finallyLoc===c)return this.complete(a.completion,a.afterLoc),z(a),w}},catch:function(d){for(var a=this.tryEntries.length-1;a>=0;--a){var b=this.tryEntries[a];if(b.tryLoc===d){var c=b.completion;if("throw"===c.type){var e=c.arg;z(b)}return e}}throw new Error("illegal catch attempt")},delegateYield:function(a,b,c){return this.delegate={iterator:t(a),resultName:b,nextLoc:c},"next"===this.method&&(this.arg=void 0),w}},b}let C=(0,c.forwardRef)(function(a,d){var e,f,b=a.downloadFileName,j=void 0===b?"html.pdf":b,h=(0,u.Z)(a,A),i=(0,c.useRef)(),k=(0,c.useRef)(),l=function(a){return function(c){var f=c.iframe,b=c.canvas;if(!k.current){var g=f.getWindow().jspdf.jsPDF;k.current=new g("","pt","a4")}if(k.current){var h=b.toDataURL("image/jpeg",1),d=y(b.width,b.height,595.28,841.89),e=d.newWH,i=d.newWHLoc;a&&k.current.addPage(),k.current.addImage(h,"JPEG",i.x||1,1,e.w||1,e.h||1)}}},m={download:(f=(e=B().mark(function a(b,c){var d,e,f,g,h;return B().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:k.current=null,d=(0,z.jE)(b).all("[data-pdf-page]"),f=0,g=(e=(0,s.fl)(d)?d:[b]).length;case 4:if(!(f<g)){a.next=10;break}return a.next=7,null==i?void 0:null===(h=i.current)|| void 0===h?void 0:h.getCanvas(l(f),e[f],c);case 7:f++,a.next=4;break;case 10:k.current.save(j);case 11:case"end":return a.stop()}},a)}),function(){var a=this,b=arguments;return new Promise(function(d,f){var g=e.apply(a,b);function c(a){t(g,d,f,c,h,"next",a)}function h(a){t(g,d,f,c,h,"throw",a)}c(s.p0)})}),function(a,b){return f.apply(this,arguments)})};return(0,c.useImperativeHandle)(d,function(){return m},[]),(0,p.jsx)(r,(0,g.Z)((0,g.Z)({},h),{},{ref:i,jsArr:[o("jspdf")]}))}),D=function(d){var a=(0,c.useState)(""),b=a[0],e=a[1],f=(0,c.useRef)();return(0,p.jsxs)("div",{children:[(0,p.jsxs)(j.l0,{className:"equal width",style:{boxSizing:"border-box"},children:[(0,p.jsx)(j.gN,{atom:"textarea",onInput:function(a){e(a.currentTarget.value)}}),(0,p.jsx)(j.zx,{onClick:function(a){f&&f.current&&f.current.download()},children:"Download"})]}),(0,p.jsx)(C,{preview:!0,autoGenCanvas:!0,ref:function(a){return f.current=a},children:(0,p.jsx)(j.ER,{children:b})})]})},E=function(a){return(0,i.Z)((0,g.Z)((0,g.Z)({},a),{},{pageName:"PDF"})),(0,p.jsx)(p.Fragment,{children:f||(f=(0,p.jsx)(h.Z,{code:'import React, { useState, useRef } from "react";\nimport { Unsafe, Field, Form, Button } from "react-atomic-molecule";\n\nimport { HTMLToPDF } from "organism-react-html2canvas";\n\nconst HTMLToCanvansExample = (props) => {\n  const [html, setHtml] = useState("");\n\n  const pdf = useRef();\n\n  const handleInput = (e) => {\n    const v = e.currentTarget.value;\n    setHtml(v);\n  };\n\n  const handleClick = (e) => {\n    if (pdf && pdf.current) {\n      pdf.current.download();\n    }\n  };\n\n  const handlePdf = (el) => (pdf.current = el);\n  return (\n    <div>\n      <Form className="equal width" style={{ boxSizing: "border-box" }}>\n        <Field atom="textarea" onInput={handleInput} />\n        <Button onClick={handleClick}>Download</Button>\n      </Form>\n      <HTMLToPDF preview autoGenCanvas ref={handlePdf}>\n        <Unsafe>{html}</Unsafe>\n      </HTMLToPDF>\n    </div>\n  );\n};\n\nexport default HTMLToCanvansExample;\n',header:"PDF Example",children:(0,p.jsx)(D,{})}))})}}}])