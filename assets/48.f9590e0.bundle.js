"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48],{404(d,b,a){a.r(b),a.d(b,{default:()=>S});var e,f,g,h,i=a(2),j=a(31),k=a(462),l=a(1),m=a(3),n=a(72),o=a(54),p=a(22),q=a(16),r=a(42),s=a(5),t=a(0);function u(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}var v=["col1","col2"],w=["sec"],x=Object.keys,y=function(b){var a=b%60;return Math.floor(b/60)+":"+(10>a?"0"+a:a)},z=function(){return(0,t.jsx)(p.z1,{initStates:["pomodoro"],children:function(b){var a=b.pomodoro;return a?(0,t.jsx)(m.aV,{atom:"ol",children:a.tip.map(function(a,b){return(0,t.jsx)(m.ck,{children:a},b)})}):null}})},A=function(a){var b=a.col1;return a.col2,(0,k.Z)(a,v),(0,t.jsx)(m.XX,{children:(0,t.jsx)(m.X2,{children:(0,t.jsx)(m.sg,{className:"pure-u-md-1-2",children:b})})})},c=function(b){var c=b.countdown,d=b.useTomato;f=(0,m.UM)(D,f);var a=d(c),g=a.sec,h=a.active,i=a.preview,j=a.activeType,k=a.handler,p=a.modal,r=a.resetInput,s=a.TotalSec;return(0,t.jsxs)(m.iX,{children:[(0,l.useMemo)(function(){var d,a,b,e,f=(0,o.aQ)(g/s),p=(0,m.Jx)("big Pomodoro",(a={},b=null===(d=c[j])|| void 0===d?void 0:d.colorName,e=h||i,b in a?Object.defineProperty(a,b,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[b]=e,a)),l={};return f>50&&(l.styles=(0,m._s)({transform:"translate("+(100-f)+"%, 0)"},!1,!1)),(0,t.jsx)(n.k,{onClick:k.clickProgress,className:p,style:C.progress,percent:f,barLabel:y(g),barLabelProps:l})},[g,h,i]),(0,t.jsx)(A,{col1:(0,t.jsx)(m.aV,{style:C.buttonList,children:x(c).map(function(a){var b=c[a],d=null;if(a===j)d=b.colorName;else if(h)return null;var e=k.start({getModal:function(a){return(0,t.jsxs)(q.pd,{basic:!0,ref:p,contentStyle:{textAlign:"center"},children:[(0,t.jsx)(m.zx,{className:"inverted",onClick:k.stop,children:"Pause"}),(0,t.jsx)(m.Wz,{refCb:r,style:C.resetInput,defaultValue:a,inputStyle:C.reset,className:"inverted transparent",leftLabel:"Resst to:",rightLabel:"min",button:"Reset",actionProps:{className:"inverted",onClick:k.reset}})]})}});return(0,t.jsx)(m.zx,{id:a,className:d,onClick:e,onMouseEnter:k.btnMouseIn,onMouseLeave:k.btnMouseOut,children:b.label},a)})})}),e||(e=(0,t.jsx)(z,{}))]})};c.defaultProps={countdown:{POMODORO:{minute:25,label:"Pomodoro",colorName:"red"},SHORT_BREAK:{minute:5,label:"Short Break",colorName:"teal"},LONG_BREAK:{minute:15,label:"Long Break",colorName:"blue"}},useTomato:function(t){var a,c,j=(0,l.useRef)(25),d=60*j.current,e=(a=(0,l.useState)({activeType:"POMODORO",sec:d}),c=2,function(a){if(Array.isArray(a))return a}(a)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,c)||function d(a,c){if(a){if("string"==typeof a)return u(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return u(a,c)}}(a,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),b=e[0],v=e[1],f=b.sec,m=b.preview,g=b.active,h=b.activeType,x=(0,l.useRef)(),n=(0,l.useRef)(),o=(0,l.useRef)(),y=(0,l.useRef)(),z=(0,l.useRef)();(0,l.useEffect)(function(){return function(){p.stop()}},[]),(0,l.useEffect)(function(){var a=(0,r.u3)();y.current={active:g,activeType:h,now:a,sec:f}},[g,h,f]);var A=function(a,c,d){if(a){var b;c=null!==(b=c)&& void 0!==b?b:60*a,v(function(a){return(0,i.Z)((0,i.Z)((0,i.Z)({},a),d),{},{sec:c})}),j.current=a}},B=function(b,c,d){var a,e=null===(a=z.current)|| void 0===a?void 0:a.activeType;b&&e===b&&z.current.sec?A(c,z.current.sec,d):A(c,null,d)},p={btnMouseIn:function(d){if(null===(f=y.current)|| void 0===f||!f.active){z.current||(z.current=(0,i.Z)({},y.current));var f,a,b,c=null==d?void 0:null===(a=d.currentTarget)|| void 0===a?void 0:a.id,e=null===(b=t[c])|| void 0===b?void 0:b.minute;B(c,e,{activeType:c,preview:!0})}},btnMouseOut:function(b){if(null===(c=y.current)|| void 0===c||!c.active){b.currentTarget,null==b||null===(d=b.currentTarget)|| void 0===d||d.id;var c,d,a=z.current.activeType;a?B(a,t[a].minute,{activeType:a,preview:!1}):v(function(b){return(0,i.Z)((0,i.Z)({},b),{},{activeType:a,preview:!1})})}},clickProgress:function(){if(y.current){if(y.current.active)p.stop();else{var a=y.current.activeType;a&&p.start({countdownKey:a})()}}},start:function(a){var b=void 0===a?{}:a,c=b.countdownKey,d=b.getModal;return function(b){var a,e=null===(a=t[c=(null==b?void 0:b.currentTarget.id)||c])|| void 0===a?void 0:a.minute;x.current?(console.warn("Timer already running"),d&&(0,q.hq)("dom/update",{popup:d(e)})):(y.current=null,B(c,e,{active:!0,activeType:c}),setTimeout(function(){z.current=(0,i.Z)({},y.current),x.current=setInterval(function(){v(function(b){var a=b.sec,e=(0,k.Z)(b,w),c=(0,s.ZP)(y.current,["now"]);if(c){var d=(0,r.u3)()-c;d>1e3&&(a-=Math.floor(d/1e3))}return(a<=0||isNaN(a))&&(p.stop(),a=0),(0,i.Z)((0,i.Z)({},e),{},{sec:a})})},100)},200))}},stop:function(){z.current=(0,i.Z)({},y.current),n.current&&n.current.close(),x.current&&(clearInterval(x.current),x.current=null),v(function(a){return(0,i.Z)((0,i.Z)({},a),{},{active:!1,preview:!1})})},reset:function(){y.current=null,p.stop(),A(o.current.value)}};return{sec:f,active:g,preview:m,activeType:h,TotalSec:d,handler:p,modal:n,resetInput:o}}};let B=c;var C={progress:{cursor:"pointer"},buttonList:{textAlign:"center"},resetInput:{marginLeft:20},reset:{width:20}},D={bar:[{overflow:"inherit"},".ui.progress.Pomodoro .bar"],barLabel:[{fontSize:"7rem"},".ui.progress.Pomodoro .bar>.progress"]},E=a(44),F=a(39),G=a(66),H=a(6);function I(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}function J(a,b){return function(a){if(Array.isArray(a))return a}(a)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,b)||K(a,b)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(a,c){if(a){if("string"==typeof a)return I(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return I(a,c)}}var L=["children","setSortElement","style"],M=function(a){var e=a.setSortElement,f=a.fixedX,g=a.fixedY,b=J((0,l.useState)(),2),c=b[0],h=b[1],d=(0,l.useRef)(),i=function(a,j){var b,c,h,i=(0,G.nearWhere)(a,j),f=d.current,k=null===(b=a.nextSibling)|| void 0===b?void 0:b.getAttribute("name"),l=null===(c=a.previousSibling)|| void 0===c?void 0:c.getAttribute("name"),g=null==f?void 0:f.getAttribute("name");h=!a.getAttribute("data-first")&&(a.getAttribute("data-last")?!i.top:(k===g||l===g)&&i.top),e({targetEl:a,targetId:a.getAttribute("name"),sortEl:f,sortId:g,reverse:h})},j=function(a){if(!a)return!1;var b=a.getAttribute("data-type");if(b){if("sortable"===b)return a}else{var c=F.ZP.ancestor(a,'[data-type="sortable"]');if(c)return c}};return{isDraging:c,handler:{drag:function(a){if(d.current){h(!0);var b,k=a.getPointerTarget,e=a.getClientPointerTarget,l=a.getAllPointer;if(b=f?e({x:a.start.offset.x}):g?e({y:a.start.offset.y}):k()){var m={x:b.pointXY[0],y:b.pointXY[1]},c=j(b);if(!c){var n=l();["tr","br","bl"].some(function(a){return!!(c=j(b=k(n[a])))})}c&&i(c,m)}}},dragEnd:function(a){h(!1)}},comp:d}},N=function(a){var b=M(a),c=b.handler,d=b.isDraging,o=b.comp,g=a.children,p=(a.setSortElement,a.style),h=(0,k.Z)(a,L),e=function(b){var a;return(0,i.Z)((0,i.Z)((0,i.Z)({},p),null===(a=g.props)|| void 0===a?void 0:a.style),b)},f=(0,m.J_)((0,m.J_)(g)((0,i.Z)((0,i.Z)({},h),{},{"data-type":"sortable"}))),j=d?R.active:null,l=d?f({style:e(j)}):null,n=f({style:e(),refCb:function(a){return o.current=a}});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(E.Yz,{onDrag:c.drag,onDragEnd:c.dragEnd,children:n}),l]})},O=function(f){var k,g=f.children,c=J((0,l.useState)(),2),h=c[0],i=c[1],j=(0,m.n)(g,function(b,a){return(0,t.jsx)(N,{name:a,setSortElement:i,children:b},a)}),b=h||{},n=b.sortId,o=b.targetId,p=b.reverse,d=(0,l.useRef)((0,H.tW)(j).map(function(a){return j[a]})),a=[],q=function(b){k?a.push(b):(k=!0,a.push((0,m.J_)(b)({"data-first":!0})))};d.current.forEach(function(c){var b=c.props.name;n===b?n===o&&a.push(j[b]):o===b?p?(q(j[b]),q(j[n])):(q(j[n]),q(j[b])):q(j[b])});var e=a.length-1;return a[e]=(0,m.J_)(a[e])({"data-last":!0}),d.current=a,{sortOrder:a,setSortElement:i}},P=function(a){var b=O(a).sortOrder;return(0,t.jsx)(m.iX,{style:R.itemList,children:b})};let Q=function(a){return(0,t.jsxs)(P,{children:[(0,t.jsx)(m.ck,{style:R.item,children:"list 1"}),(0,t.jsx)(m.ck,{style:R.item,children:"list 2"}),(0,t.jsx)(m.ck,{style:R.item,children:"list 3"}),(0,t.jsx)(m.ck,{style:R.item,children:"list 4"}),(0,t.jsx)(m.ck,{style:R.item,children:"list 5"})]})};var R={move:{position:"absolute",pointerEvents:"none"},active:{border:"2px dashed rgba(0, 0, 0, 0.2)"},itemList:{margin:"0 auto",width:100},item:{width:100,height:50,border:"1px solid rgba(0, 0, 0, 0.5)"}};let S=function(a){return(0,j.Z)((0,i.Z)((0,i.Z)({},a),{},{pageName:"Tomato"})),(0,t.jsxs)(t.Fragment,{children:[g||(g=(0,t.jsx)(B,{})),h||(h=(0,t.jsx)(Q,{}))]})}}}])