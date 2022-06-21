"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[44],{409(e,b,a){a.r(b),a.d(b,{default:()=>O});var f,g,h,i,j=a(2),k=a(37),l=a(4),d=a(1),m=a(3),n=a(100),o=a(52),p=a(22),q=a(17),r=a(42),s=a(5),t=a(0),u=["col1","col2"],v=["sec"],w=Object.keys,x=function(b){var a=b%60;return Math.floor(b/60)+":"+(10>a?"0"+a:a)},y=function(){return(0,t.jsx)(p.z1,{initStates:["pomodoro"],children:function(b){var a=b.pomodoro;return a?(0,t.jsx)(m.aV,{atom:"ol",children:a.tip.map(function(a,b){return(0,t.jsx)(m.ck,{children:a},b)})}):null}})},z=function(a){var b=a.col1;return a.col2,(0,l.Z)(a,u),(0,t.jsx)(m.XX,{children:(0,t.jsx)(m.X2,{children:(0,t.jsx)(m.sg,{className:"pure-u-md-1-2",children:b})})})},c=function(b){var c=b.countdown,e=b.useTomato;g=(0,m.UM)(C,g);var a=e(c),h=a.sec,i=a.active,j=a.preview,k=a.activeType,l=a.handler,p=a.modal,r=a.resetInput,s=a.TotalSec;return(0,t.jsxs)(m.iX,{children:[(0,d.useMemo)(function(){var a,d,b=(0,o.aQ)(h/s),f=(0,m.Jx)("big Pomodoro",((d={})[null===(a=c[k])|| void 0===a?void 0:a.colorName]=i||j,d)),e={};return b>50&&(e.styles=(0,m._s)({transform:"translate("+(100-b)+"%, 0)"},!1,!1)),(0,t.jsx)(n.k,{onClick:l.clickProgress,className:f,style:B.progress,percent:b,barLabel:x(h),barLabelProps:e})},[h,i,j]),(0,t.jsx)(z,{col1:(0,t.jsx)(m.aV,{style:B.buttonList,children:w(c).map(function(a){var b=c[a],d=null;if(a===k)d=b.colorName;else if(i)return null;var e=l.start({getModal:function(a){return(0,t.jsxs)(q.pd,{basic:!0,ref:p,contentStyle:{textAlign:"center"},children:[(0,t.jsx)(m.zx,{className:"inverted",onClick:l.stop,children:"Pause"}),(0,t.jsx)(m.Wz,{refCb:r,style:B.resetInput,defaultValue:a,inputStyle:B.reset,className:"inverted transparent",leftLabel:"Resst to:",rightLabel:"min",button:"Reset",actionProps:{className:"inverted",onClick:l.reset}})]})}});return(0,t.jsx)(m.zx,{id:a,className:d,onClick:e,onMouseEnter:l.btnMouseIn,onMouseLeave:l.btnMouseOut,children:b.label},a)})})}),f||(f=(0,t.jsx)(y,{}))]})};c.defaultProps={countdown:{POMODORO:{minute:25,label:"Pomodoro",colorName:"red"},SHORT_BREAK:{minute:5,label:"Short Break",colorName:"teal"},LONG_BREAK:{minute:15,label:"Long Break",colorName:"blue"}},useTomato:function(o){var h=(0,d.useRef)(25),b=60*h.current,c=(0,d.useState)({activeType:"POMODORO",sec:b}),a=c[0],p=c[1],e=a.sec,i=a.preview,f=a.active,g=a.activeType,t=(0,d.useRef)(),k=(0,d.useRef)(),m=(0,d.useRef)(),u=(0,d.useRef)(),w=(0,d.useRef)();(0,d.useEffect)(function(){return function(){n.stop()}},[]),(0,d.useEffect)(function(){var a=(0,r.u3)();u.current={active:f,activeType:g,now:a,sec:e}},[f,g,e]);var x=function(a,c,d){if(a){var b;c=null!==(b=c)&& void 0!==b?b:60*a,p(function(a){return(0,j.Z)((0,j.Z)((0,j.Z)({},a),d),{},{sec:c})}),h.current=a}},y=function(b,c,d){var a,e=null===(a=w.current)|| void 0===a?void 0:a.activeType;b&&e===b&&w.current.sec?x(c,w.current.sec,d):x(c,null,d)},n={btnMouseIn:function(d){if(null===(f=u.current)|| void 0===f||!f.active){w.current||(w.current=(0,j.Z)({},u.current));var f,a,b,c=null==d?void 0:null===(a=d.currentTarget)|| void 0===a?void 0:a.id,e=null===(b=o[c])|| void 0===b?void 0:b.minute;y(c,e,{activeType:c,preview:!0})}},btnMouseOut:function(b){if(null===(c=u.current)|| void 0===c||!c.active){b.currentTarget,null==b||null===(d=b.currentTarget)|| void 0===d||d.id;var c,d,a=w.current.activeType;a?y(a,o[a].minute,{activeType:a,preview:!1}):p(function(b){return(0,j.Z)((0,j.Z)({},b),{},{activeType:a,preview:!1})})}},clickProgress:function(){if(u.current){if(u.current.active)n.stop();else{var a=u.current.activeType;a&&n.start({countdownKey:a})()}}},start:function(a){var b=void 0===a?{}:a,c=b.countdownKey,d=b.getModal;return function(b){var a,e=null===(a=o[c=(null==b?void 0:b.currentTarget.id)||c])|| void 0===a?void 0:a.minute;t.current?(console.warn("Timer already running"),d&&(0,q.hq)("dom/update",{popup:d(e)})):(u.current=null,y(c,e,{active:!0,activeType:c}),setTimeout(function(){w.current=(0,j.Z)({},u.current),t.current=setInterval(function(){p(function(b){var a=b.sec,e=(0,l.Z)(b,v),c=(0,s.ZP)(u.current,["now"]);if(c){var d=(0,r.u3)()-c;d>1e3&&(a-=Math.floor(d/1e3))}return(a<=0||isNaN(a))&&(n.stop(),a=0),(0,j.Z)((0,j.Z)({},e),{},{sec:a})})},100)},200))}},stop:function(){w.current=(0,j.Z)({},u.current),k.current&&k.current.close(),t.current&&(clearInterval(t.current),t.current=null),p(function(a){return(0,j.Z)((0,j.Z)({},a),{},{active:!1,preview:!1})})},reset:function(){u.current=null,n.stop(),x(m.current.value)}};return{sec:e,active:f,preview:i,activeType:g,TotalSec:b,handler:n,modal:k,resetInput:m}}};let A=c;var B={progress:{cursor:"pointer"},buttonList:{textAlign:"center"},resetInput:{marginLeft:20},reset:{width:20}},C={bar:[{overflow:"inherit"},".ui.progress.Pomodoro .bar"],barLabel:[{fontSize:"7rem"},".ui.progress.Pomodoro .bar>.progress"]},D=a(44),E=a(43);a(7);var F=a(98),G=["children","setSortElement","style"],H=Object.keys,I=function(b){var f=b.setSortElement,a=(0,d.useState)(),c=a[0],g=a[1],e=(0,d.useRef)(),h=function(a,j){var b,c,h,i=(0,F.nearWhere)(a,j),d=e.current,k=null===(b=a.nextSibling)|| void 0===b?void 0:b.getAttribute("name"),l=null===(c=a.previousSibling)|| void 0===c?void 0:c.getAttribute("name"),g=null==d?void 0:d.getAttribute("name");h=!a.getAttribute("data-first")&&(a.getAttribute("data-last")?!i.top:(k===g||l===g)&&i.top),f({targetEl:a,targetId:a.getAttribute("name"),sortEl:d,sortId:g,reverse:h})};return{isDraging:c,handler:{drag:function(b){if(e.current){g(!0);var c,j=b.destTarget,k=b.destPoint,a=j(),d=k(),f={x:d[0],y:d[1]},i=null==a?void 0:a.getAttribute("data-type");i?"sortable"===i&&h(a,f):(c=E.ZP.ancestor(a,'[data-type="sortable"]'))&&h(c,f)}},dragEnd:function(a){g(!1)}},comp:e}},J=(0,d.forwardRef)(function(a,o){var b=I(a),c=b.handler,d=b.isDraging,p=b.comp,g=a.children,q=(a.setSortElement,a.style),h=(0,l.Z)(a,G),e=function(b){var a;return(0,j.Z)((0,j.Z)((0,j.Z)({},q),null===(a=g.props)|| void 0===a?void 0:a.style),b)},f=(0,m.J_)((0,m.J_)(g)((0,j.Z)((0,j.Z)({},h),{},{"data-type":"sortable"}))),i=d?N.active:null,k=d?f({style:e(i)}):null,n=f({style:e(),refCb:function(a){return p.current=a}});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(D.Yz,{onDrag:c.drag,onDragEnd:c.dragEnd,children:n}),k]})}),K=function(g){var l,h=g.children,c=(0,d.useState)(),i=c[0],j=c[1],k=(0,m.n)(h,function(b,a){return(0,t.jsx)(J,{name:a,setSortElement:j,children:b},a)}),b=i||{},n=b.sortId,o=b.targetId,p=b.reverse,e=(0,d.useRef)(H(k).map(function(a){return k[a]})),a=[],q=function(b){l?a.push(b):(l=!0,a.push((0,m.J_)(b)({"data-first":!0})))};e.current.forEach(function(c){var b=c.props.name;n===b?n===o&&a.push(k[b]):o===b?p?(q(k[b]),q(k[n])):(q(k[n]),q(k[b])):q(k[b])});var f=a.length-1;return a[f]=(0,m.J_)(a[f])({"data-last":!0}),e.current=a,{sortOrder:a,setSortElement:j}},L=function(a){var b=K(a).sortOrder;return(0,t.jsx)(m.iX,{style:N.itemList,children:b})};let M=function(a){return(0,t.jsxs)(L,{children:[(0,t.jsx)(m.ck,{style:N.item,children:"list 1"}),(0,t.jsx)(m.ck,{style:N.item,children:"list 2"}),(0,t.jsx)(m.ck,{style:N.item,children:"list 3"}),(0,t.jsx)(m.ck,{style:N.item,children:"list 4"}),(0,t.jsx)(m.ck,{style:N.item,children:"list 5"})]})};var N={move:{position:"absolute",pointerEvents:"none"},active:{border:"2px dashed rgba(0, 0, 0, 0.2)"},itemList:{margin:"0 auto",width:100},item:{width:100,height:50,border:"1px solid rgba(0, 0, 0, 0.5)"}};let O=function(a){return(0,k.Z)((0,j.Z)((0,j.Z)({},a),{},{pageName:"Tomato"})),(0,t.jsxs)(t.Fragment,{children:[h||(h=(0,t.jsx)(A,{})),i||(i=(0,t.jsx)(M,{}))]})}}}])