"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17],{15(c,b,a){a.d(b,{U:()=>G,Z:()=>w});var d,e,f,g,h,i,j=a(1),k=a(3),l=a(17),m=a(19),n=a(20),o=a(18),p=a(5);let q=function(){var b=(0,j.useState)(function(){return d||function(){}}),c=b[0],e=b[1];return d||a.e(24).then(a.bind(a,42)).then(function(a){d=(0,p.MV)(a),e(function(){return d})}),c};var r=a(0);let s=function(a){var b=q(),c="```js\n"+a.children+"\n```";return(0,r.jsx)(k.ER,{children:b(c)})};var t=a(12),u=a(13);let v=function(c){var e=c.url,f=(0,u.s4)(),a=(0,j.useState)(),b=a[0],g=a[1],d=q();return((0,j.useEffect)(function(){(0,t.Bt)("ajaxGet",{url:e,callback:function(c,a,b){if(!1===f())return!1;200===b.status&&g(a.replace(/(\<\!\-\-hidden\-\-\>)([\s\S]*?)(\<\!\-\-\/hidden\-\-\>)/g,""))}})},[]),b)?(0,r.jsx)(k.XX,{children:(0,r.jsx)(k.ER,{children:d(b)})}):null},w=function(a){i=(0,k.UM)(y,i);var c,d,p,q,t,B=a.header,C=a.children,D=a.code,b=a.git,u=a.npm,w=a.edit,E=a.id,z=(0,j.useState)({on:!1}),F=z[0],J=z[1],A={};if(F.on?c=(0,r.jsx)(s,{children:D}):A=x.hidden,b){var G="https://raw.githubusercontent.com/"+b.replace(/(\/(blob|tree)\/(master|main)\/)/,"/$3/")+"README.md",H="https://github.com/"+b;d=(0,r.jsx)(v,{url:G}),p=(0,r.jsx)(k.JO,{atom:"a",target:"_blank",href:H,style:x.icon,children:e||(e=(0,r.jsx)(m.Z,{}))})}if(u){var I="https://www.npmjs.com/package/"+u;q=(0,r.jsx)(k.JO,{atom:"a",target:"_blank",href:I,style:x.icon,children:f||(f=(0,r.jsx)(n.Z,{}))})}return w&&(t=(0,r.jsx)(k.JO,{atom:"a",target:"_blank",href:w,style:x.icon,children:g||(g=(0,r.jsx)(o.Z,{}))})),(0,r.jsxs)(k.aV,{type:"segments",id:E,children:[(0,r.jsxs)(k.XX,{className:"tertiary",children:[(0,r.jsx)(k.h4,{style:x.header,className:"grey",children:B}),(0,r.jsxs)(k.iX,{style:x.iconBlock,children:[t,q,p,(0,r.jsx)(k.JO,{onClick:function(){return J(function(a){return{on:!a.on}})},style:x.icon,children:h||(h=(0,r.jsx)(l.Z,{}))})]})]}),(0,r.jsx)(k.XX,{className:"secondary",style:A,styles:i.code,children:c}),(0,r.jsx)(k.XX,{children:C}),d]})};var x={header:{margin:0},hidden:{maxHeight:0,padding:"0 16px",margin:0,ovarflow:"hidden"},iconBlock:{position:"absolute",top:16,right:6},icon:{maxWidth:24,cursor:"pointer",marginRight:10}},y={code:[{transition:["padding 500ms ease"]}],fitWidth:[{whiteSpace:"break-spaces"},"code"]},z=a(2),A=a(8),B=a(16),C=a(6),D=["button","children","id","onClose"],E=function(){var a=document.URL.split("#"),b=a.length-1,c=a[b];return c},F=function(a){return history.pushState("","",a)};let G=function(a){var b=a.button,e=a.children,h=a.id,i=a.onClose,f=(0,A.Z)(a,D),c=(0,j.useState)(),g=c[0],l=c[1];(0,j.useEffect)(function(){var a=E();h===a&&l(!0)},[]);var d=null;return g&&(d=(0,r.jsx)(B.IT,(0,z.Z)((0,z.Z)({},f),{},{onClose:function(){var a=document.URL,b=a.lastIndexOf("#"+h);-1!==b&&F(a.substring(0,b)),(0,C.ZP)(i),l(!1)},children:e}))),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(k.zx,{onClick:function(){var a=E();h&&h!==a&&F(document.URL+"#"+h),l(!0)},children:void 0===b?"Open full screen":b}),d]})}},17(c,b,a){a.d(b,{Z:()=>e});var d=a(4);let e=function(a){return(0,d.Z)("Code","M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z")(a)}},18(c,b,a){a.d(b,{Z:()=>e});var d=a(4);let e=function(a){return(0,d.Z)("Edit","M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z")(a)}},19(c,b,a){a.d(b,{Z:()=>g});var d=a(478),e=a(4),f=["viewBox"];let g=function(a){var{viewBox:c="0 0 16 16"}=a,b=(0,d.Z)(a,f);return b.viewBox=c,(0,e.Z)("Git","M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z")(b)}},20(c,b,a){a.d(b,{Z:()=>g});var d=a(478),e=a(4),f=["viewBox","fill"];let g=function(b){var{viewBox:c="0 0 3200 3200",fill:g="#b93131"}=b,a=(0,d.Z)(b,f);return a.viewBox=c,a.fill=g,(0,e.Z)("Npm","M269 3186 c-99 -27 -193 -106 -243 -205 l-26 -50 0 -1332 0 -1331 31 -59 c40 -75 102 -132 187 -172 l67 -32 1255 -3 c911 -2 1271 0 1315 8 119 23 224 102 282 211 l28 54 0 1325 0 1325 -29 54 c-42 80 -128 163 -201 192 l-60 24 -1280 2 c-992 1 -1290 -1 -1326 -11z m1311 -1386 l0 -600 200 0 200 0 0 600 0 600 200 0 200 0 0 -800 0 -800 -800 0 -800 0 0 800 0 800 400 0 400 0 0 -600z")(a)}},4(c,b,a){a.d(b,{Z:()=>j});var d=a(2),e=a(478),f=a(25),g=a(23),h=a(0),i=["type","children"];let j=function(b,c){var a=function(j){var{type:k=null,children:l}=j,m=(0,e.Z)(j,i),a=c[k]||c["_"]||c;return(0,h.jsxs)(f.Z,(0,d.Z)((0,d.Z)({},m),{},{"data-name":b,children:[a.map?a.map(function(a){return(0,h.jsx)(g.Z,{d:a})}):(0,h.jsx)(g.Z,{d:a}),l]}))};return a.displayName=b,a}},402(l,d,a){a.r(d),a.d(d,{default:()=>aZ});var m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,aa,ab,ac,ad,ae,af=a(2),ag=a(15),ah=a(32),b=a(1),ai=a(28),e=a(16),aj=a(3),ak=a(0);function al(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}let am=function(){var a,c,g,h,i,d=(a=(0,b.useState)(!1),c=2,function(a){if(Array.isArray(a))return a}(a)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,c)||function d(a,c){if(a){if("string"==typeof a)return al(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return al(a,c)}}(a,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),f=d[0],j=d[1];return(0,ak.jsxs)(ak.Fragment,{children:[(0,ak.jsx)("p",{children:(0,ak.jsx)(e.nz,{style:an.click,popup:function(){return g||(g=(0,ak.jsx)(e.pd,{backgroundScroll:f,children:"xxx"}))},component:m||(m=(0,ak.jsx)("a",{})),children:"show modal"})}),(0,ak.jsx)("p",{children:(0,ak.jsx)(e.nz,{style:an.click,popup:function(){return h||(h=(0,ak.jsxs)(e.pd,{backgroundScroll:f,children:[n||(n=(0,ak.jsx)("p",{children:"xxx1--->Start"})),o||(o=(0,ak.jsx)("p",{children:"xxx"})),p||(p=(0,ak.jsx)("p",{children:"xxx"})),q||(q=(0,ak.jsx)("p",{children:"xxx"})),r||(r=(0,ak.jsx)("p",{children:"xxx"})),s||(s=(0,ak.jsx)("p",{children:"xxx"})),t||(t=(0,ak.jsx)("p",{children:"xxx"})),u||(u=(0,ak.jsx)("p",{children:"xxx"})),v||(v=(0,ak.jsx)("p",{children:"xxx2--->End"}))]}))},component:w||(w=(0,ak.jsx)("a",{})),children:"show modal (long modal to test window resize)"})}),(0,ak.jsx)("p",{children:(0,ak.jsx)(e.nz,{style:an.click,popup:function(){return i||(i=(0,ak.jsxs)(e.pd,{backgroundScroll:f,children:[x||(x=(0,ak.jsx)("p",{children:"xxx1--->Start"})),y||(y=(0,ak.jsx)("p",{children:"xxx"})),z||(z=(0,ak.jsx)("p",{children:"xxx"})),A||(A=(0,ak.jsx)("p",{children:"xxx"})),B||(B=(0,ak.jsx)("p",{children:"xxx"})),C||(C=(0,ak.jsx)("p",{children:"xxx"})),D||(D=(0,ak.jsx)("p",{children:"xxx"})),E||(E=(0,ak.jsx)("p",{children:"xxx"})),F||(F=(0,ak.jsx)("p",{children:"xxx"})),G||(G=(0,ak.jsx)("p",{children:"xxx"})),H||(H=(0,ak.jsx)("p",{children:"xxx"})),I||(I=(0,ak.jsx)("p",{children:"xxx"})),J||(J=(0,ak.jsx)("p",{children:"xxx"})),K||(K=(0,ak.jsx)("p",{children:"xxx"})),L||(L=(0,ak.jsx)("p",{children:"xxx"})),M||(M=(0,ak.jsx)("p",{children:"xxx"})),N||(N=(0,ak.jsx)("p",{children:"xxx"})),O||(O=(0,ak.jsx)("p",{children:"xxx"})),P||(P=(0,ak.jsx)("p",{children:"xxx"})),Q||(Q=(0,ak.jsx)("p",{children:"xxx"})),R||(R=(0,ak.jsx)("p",{children:"xxx"})),S||(S=(0,ak.jsx)("p",{children:"xxx2--->End"}))]}))},component:T||(T=(0,ak.jsx)("a",{})),children:"show modal (modal element with scroll)"})}),(0,ak.jsx)("p",{children:(0,ak.jsx)(e.nz,{style:{marginLeft:5},popup:(0,ak.jsx)(e.Vq,{backgroundScroll:f,header:"Test Header",children:"Test Dialog"}),component:U||(U=(0,ak.jsx)(aj.zx,{})),children:"show dialog"})}),(0,ak.jsx)(ai.XZ,{toggle:!0,label:"Background scrollable",onChange:function(a){j(a.checked)}})]})};var an={click:{color:"blue",textDecoration:"underline"}};a(5);let ao=function(){return(0,ak.jsxs)(ak.Fragment,{children:[V||(V=(0,ak.jsx)("p",{children:(0,ak.jsx)(ag.U,{id:"full-screen-example",button:"open full screen",children:"test"})})),W||(W=(0,ak.jsx)("p",{children:(0,ak.jsxs)(ag.U,{scrolling:!0,id:"full-screen-scroll-example",button:"open full screen with scroll",children:[(0,ak.jsx)("p",{children:"test1--->Start"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test"}),(0,ak.jsx)("p",{children:"test2--->End"})]})}))]})};var ap=a(456),aq=a(457),ar=a(480),as=a(9),at=a(10),f=a(454),au=a(41),av=a(478),aw=a(31),ax=a(150),ay=a(148),az=["wh","styles","style","className"],c=function(c){(0,as.Z)(a,c);var d=(0,at.Z)(a);function a(){var c;(0,ap.Z)(this,a);for(var e=arguments.length,g=new Array(e),b=0;b<e;b++)g[b]=arguments[b];return c=d.call.apply(d,[this].concat(g)),(0,f.Z)((0,ar.Z)(c),"calPos",function(){var d=c.props,e=d.targetEl,b=d.padding,a=(0,aw.ZP)(e,(0,ax.isFixed)(e)),f=a.right-a.left+2*b,g=a.bottom-a.top+2*b,h=a.top-b,i=a.left-b;return{top:h,left:i,width:f,height:g}}),c}return(0,aq.Z)(a,[{key:"renderOverlay",value:function(a){a.wh;var c=a.styles,d=a.style,e=a.className,f=(0,av.Z)(a,az),g=(0,ay.ZP)((0,aj._s)((0,af.Z)((0,af.Z)({},aA.container),d),null,!1),c),h=(0,aj.Jx)(a.name,e,"react-spotlight-box");return b.createElement(aj.iX,(0,au.Z)({},f,{className:h,styles:g}))}}]),a}(e.SQ);(0,f.Z)(c,"defaultProps",{padding:5}),c.displayName="LightBox";var aA={container:{borderRadius:4,position:"absolute",boxShadow:["0 2px 15px rgba(0,0,0,.4)"],zIndex:99998,backgroundColor:"rgba(255,255,255,.9)"}};let aB=c;var aC=a(481),aD=a(14);let aE=function(a,b){if(a instanceof SVGElement){var c=(0,aD.Jx)(a.getAttribute("class"),b);a.setAttribute("class",c)}else a.className=(0,aD.Jx)(a.className,b)},aF=function(f){var b,g=arguments.length>1&& void 0!==arguments[1]?arguments[1]:"react-spotlight-clean-zindex",c=arguments.length>2&& void 0!==arguments[2]?arguments[2]:"",a=f.parentNode;if(a)for(;a&&"BODY"!=a.nodeName;){var d=(0,aC.Z)(a,"z-index");if(d&&"auto"!==d){var e=(0,aC.Z)(a,"position");"fixed"===e&&c?"fixed"!==e||b||(b=!0,aE(a,[c])):aE(a,[g])}a=a.parentNode}};var aG=a(38);let aH=function(a){aG.ZP.all("."+a).forEach(function(b){b instanceof SVGElement?b.setAttribute("class",(0,aD.IV)(b.getAttribute("class"),a)):b.className=(0,aD.IV)(b.className,a)})};var aI=function(b,c){aE(b,c);var a=b.parentNode;if(a)for(;"BODY"!=a.nodeName;){if("svg"===a.nodeName.toLowerCase()){aE(a,c);break}if(!(a=a.parentNode))break}};let aJ=function(a){var c=arguments.length>1&& void 0!==arguments[1]?arguments[1]:"react-spotlight-show-el",d=arguments.length>2&& void 0!==arguments[2]?arguments[2]:"react-spotlight-relative",e=(0,aC.Z)(a,"position"),b=[c];"static"===e&&b.push(d),aI(a,b),a&&a instanceof SVGElement?aI(a,b):aE(a,b)};var aK=["name","targetEl"],aL=["targetEl"],aM=0,aN=function(c){(0,as.Z)(a,c);var d=(0,at.Z)(a);function a(){return(0,ap.Z)(this,a),d.apply(this,arguments)}return(0,aq.Z)(a,[{key:"componentWillUnmount",value:function(){aH("react-spotlight-show-el"),aH("react-spotlight-relative"),aH("react-spotlight-clean-zindex")}},{key:"render",value:function(){var d=this.props,c=d.name,a=d.targetEl,i=(0,av.Z)(d,aK);aF(a);var f=[X.lightBox],g=(0,ax.isFixed)(a);aJ(a),g&&f.push(X.fixed);var h=(0,aw.ZP)(a,g);return b.createElement(aj.iX,{key:c,name:c},b.createElement(e.pd,(0,au.Z)({},i,{name:c,modal:null,styles:X.modal})),b.createElement(aB,{wh:[h.w,h.h],targetEl:a,name:c,styles:f}))}}]),a}(b.PureComponent),g=function(c){(0,as.Z)(a,c);var d=(0,at.Z)(a);function a(c){var b;return(0,ap.Z)(this,a),b=d.call(this,c),X=(0,aj.yT)(aP,X),b}return(0,aq.Z)(a,[{key:"render",value:function(){var c=this.props,a=c.targetEl,d=(0,av.Z)(c,aL);return a?(!a.id&&(a.id="spotlight-el-"+aM,aM++),b.createElement(e.mS,null,b.createElement(aN,(0,af.Z)((0,af.Z)({},d),{},{targetEl:a,name:a.id})))):(console.warn(["Need assign targetEl",a]),null)}}]),a}(b.PureComponent);let aO=g;var aP={lightBox:[{transitionDuration:"500ms",transitionProperty:"all"}],modal:[{background:["-webkit-radial-gradient(center,ellipse cover,rgba(0,0,0,0.4) 0,rgba(0,0,0,0.9) 100%)","radial-gradient(center,ellipse cover,rgba(0,0,0,0.4) 0,rgba(0,0,0,0.9) 100%)"],height:"200%"}],fixed:[{position:"fixed !important"},".react-spotlight-fixed","react-spotlight-fixed"],showEl:[{zIndex:"99999 !important"},".react-spotlight-show-el","react-spotlight-show-el"],relative:[{position:"relative !important"},".react-spotlight-relative","react-spotlight-relative"]},h=function(b){(0,as.Z)(a,b);var c=(0,at.Z)(a);function a(){var d;(0,ap.Z)(this,a);for(var e=arguments.length,g=new Array(e),b=0;b<e;b++)g[b]=arguments[b];return d=c.call.apply(c,[this].concat(g)),(0,f.Z)((0,ar.Z)(d),"state",{spotlight:!1}),d}return(0,aq.Z)(a,[{key:"render",value:function(){var c=this,b=this.state.spotlight,a=null;return b&&(a=(0,ak.jsx)(aO,{toPool:"spotlight-pool",targetEl:this.spot,onClose:function(){c.setState({spotlight:null})}})),(0,ak.jsxs)(ag.U,{button:"open full screen",onClose:function(){return c.setState({spotlight:null})},children:[(0,ak.jsx)("div",{ref:function(a){return c.spot=a},style:aR.el,children:"Spotlight"}),(0,ak.jsx)("div",{children:(0,ak.jsx)(aj.zx,{onClick:function(){c.setState({spotlight:!0})},children:"Try it."})}),a,Y||(Y=(0,ak.jsx)(e.EK,{name:"spotlight-pool"}))]})}}]),a}(b.PureComponent);let aQ=h;var aR={el:{display:"inline-block",width:100,height:200,margin:10}},i=function(b){(0,as.Z)(a,b);var c=(0,at.Z)(a);function a(){return(0,ap.Z)(this,a),c.apply(this,arguments)}return(0,aq.Z)(a,[{key:"render",value:function(){return(0,ak.jsx)(e.nz,{style:aT.click,popup:function(){return(0,ak.jsx)(e.ph,{position:"bottom",alerts:[{type:"info",message:"test","data-date":new Date}]})},component:Z||(Z=(0,ak.jsx)("a",{})),children:"alert"})}}]),a}(b.PureComponent);let aS=i;var aT={click:{color:"blue",textDecoration:"underline"}},j=function(c){(0,as.Z)(b,c);var d=(0,at.Z)(b);function b(){var e;(0,ap.Z)(this,b);for(var g=arguments.length,h=new Array(g),c=0;c<g;c++)h[c]=arguments[c];return e=d.call.apply(d,[this].concat(h)),(0,f.Z)((0,ar.Z)(e),"handleClick",function(b){var c=b.currentTarget;Promise.resolve().then(a.bind(a,150)).then(function(a){var b=(0,a.default)(c);console.log(b)})}),e}return(0,aq.Z)(b,[{key:"render",value:function(){return(0,ak.jsxs)("div",{children:[(0,ak.jsxs)("div",{style:aV.row,children:[(0,ak.jsx)(e.ZT,{popup:"1",isKeep:!0,children:(0,ak.jsx)("div",{style:(0,af.Z)((0,af.Z)({},aV.col),aV.col1),onClick:this.handleClick,children:"1"})}),(0,ak.jsx)(e.ZT,{popup:"2",isKeep:!0,children:(0,ak.jsx)("div",{style:(0,af.Z)((0,af.Z)({},aV.col),aV.col2),onClick:this.handleClick,children:"2"})}),(0,ak.jsx)(e.ZT,{popup:"3",isKeep:!0,children:(0,ak.jsx)("div",{style:(0,af.Z)((0,af.Z)({},aV.col),aV.col3),onClick:this.handleClick,children:"3"})})]}),(0,ak.jsxs)("div",{style:aV.row,children:[(0,ak.jsx)(e.ZT,{popup:"4",children:(0,ak.jsx)("div",{style:(0,af.Z)((0,af.Z)({},aV.col),aV.col1),onClick:this.handleClick,children:"4"})}),(0,ak.jsx)(e.ZT,{popup:"5",children:(0,ak.jsx)("div",{style:(0,af.Z)((0,af.Z)({},aV.col),aV.col2),onClick:this.handleClick,children:"5"})}),(0,ak.jsx)(e.ZT,{popup:"6",children:(0,ak.jsx)("div",{style:(0,af.Z)((0,af.Z)({},aV.col),aV.col3),onClick:this.handleClick,children:"6"})})]}),(0,ak.jsxs)("div",{style:{width:60},children:[(0,ak.jsx)(e.ZT,{popup:"7",children:(0,ak.jsx)("div",{style:(0,af.Z)((0,af.Z)({},aV.col),aV.col1),onClick:this.handleClick,children:"7"})}),(0,ak.jsx)(e.ZT,{popup:"8",children:(0,ak.jsx)("div",{style:(0,af.Z)((0,af.Z)({},aV.col),aV.col2),onClick:this.handleClick,children:"8"})}),(0,ak.jsx)(e.ZT,{popup:"9",children:(0,ak.jsx)("div",{style:(0,af.Z)((0,af.Z)({},aV.col),aV.col3),onClick:this.handleClick,children:"9"})})]})]})}}]),b}(b.Component);let aU=j;var aV={row:{justifyContent:"space-around",display:"flex",marginBottom:100},col:{width:60,height:60,lineHeight:"60px",textAlign:"center",color:"#fff"},col1:{background:"#c00"},col2:{background:"#095"},col3:{background:"#059"}},aW=a(22),aX=function(b){var a=b.dialogReturn;return void 0!==a?"Dialog: "+a:null},k=function(b){(0,as.Z)(a,b);var c=(0,at.Z)(a);function a(){var b;(0,ap.Z)(this,a);for(var e=arguments.length,g=new Array(e),d=0;d<e;d++)g[d]=arguments[d];return b=c.call.apply(c,[this].concat(g)),(0,f.Z)((0,ar.Z)(b),"handleAddAlert",function(a){(0,aW.WI)("alert/add",{message:"test"})}),(0,f.Z)((0,ar.Z)(b),"handleResetAlert",function(a){(0,aW.WI)("alert/reset",{alerts:[1,2,3]})}),(0,f.Z)((0,ar.Z)(b),"handleCleanAlert",function(a){(0,aW.WI)("alert/reset",{alerts:null})}),(0,f.Z)((0,ar.Z)(b),"handleOpenDialog",function(a){(0,aW.WI)("dialog/start",{dialog:"how are u"})}),b}return(0,aq.Z)(a,[{key:"render",value:function(){return(0,ak.jsxs)("div",{children:[(0,ak.jsxs)("p",{children:[(0,ak.jsx)(aj.zx,{onClick:this.handleAddAlert,children:"Add alert"}),(0,ak.jsx)(aj.zx,{onClick:this.handleResetAlert,children:"Reset alert"}),(0,ak.jsx)(aj.zx,{onClick:this.handleCleanAlert,children:"Clean all alerts"})]}),(0,ak.jsxs)("p",{children:[(0,ak.jsx)(aj.zx,{onClick:this.handleOpenDialog,children:"Open Dialog"}),(0,ak.jsx)(aW.z1,{initStates:["dialogReturn"],children:$||($=(0,ak.jsx)(aX,{}))})]})]})}}]),a}(b.PureComponent);let aY=k,aZ=function(a){return(0,ah.Z)((0,af.Z)((0,af.Z)({},a),{},{pageName:"Popup"})),(0,ak.jsxs)(ak.Fragment,{children:[_||(_=(0,ak.jsx)(ag.Z,{code:'import React, { useState } from "react";\nimport { Checkbox } from "react-atomic-organism";\n\n/**\n * Production please use\n * import {...xxx} from "organism-react-popup"\n */\nimport { Dialog, PopupModal, PopupClick } from "organism-react-popup";\n\nimport { Button } from "react-atomic-molecule";\n\nconst PopupExample = () => {\n  const [backgroundScrollAble, setBackgroundScrollAble] = useState(false);\n  return (\n    <>\n      <p>\n        <PopupClick\n          style={Styles.click}\n          popup={() => {\n            return (\n              <PopupModal backgroundScroll={backgroundScrollAble}>\n                xxx\n              </PopupModal>\n            );\n          }}\n          component={<a />}\n        >\n          show modal\n        </PopupClick>\n      </p>\n\n      <p>\n        <PopupClick\n          style={Styles.click}\n          popup={() => {\n            return (\n              <PopupModal backgroundScroll={backgroundScrollAble}>\n                <p>xxx1--->Start</p>\n                <p>xxx</p>\n                <p>xxx</p>\n                <p>xxx</p>\n                <p>xxx</p>\n                <p>xxx</p>\n                <p>xxx</p>\n                <p>xxx</p>\n                <p>xxx2--->End</p>\n              </PopupModal>\n            );\n          }}\n          component={<a />}\n        >\n          show modal (long modal to test window resize)\n        </PopupClick>\n      </p>\n\n      <p>\n        <PopupClick\n          style={Styles.click}\n          popup={() => {\n            return (\n              <PopupModal backgroundScroll={backgroundScrollAble}>\n                <p>xxx1--->Start</p>\n                <p>xxx</p>\n                <p>xxx</p>\n                <p>xxx</p>\n                <p>xxx</p>\n                <p>xxx</p>\n                <p>xxx</p>\n                <p>xxx</p>\n                <p>xxx</p>\n                <p>xxx</p>\n                <p>xxx</p>\n                <p>xxx</p>\n                <p>xxx</p>\n                <p>xxx</p>\n                <p>xxx</p>\n                <p>xxx</p>\n                <p>xxx</p>\n                <p>xxx</p>\n                <p>xxx</p>\n                <p>xxx</p>\n                <p>xxx</p>\n                <p>xxx2--->End</p>\n              </PopupModal>\n            );\n          }}\n          component={<a />}\n        >\n          show modal (modal element with scroll)\n        </PopupClick>\n      </p>\n\n      <p>\n        <PopupClick\n          style={{ marginLeft: 5 }}\n          popup={\n            <Dialog\n              backgroundScroll={backgroundScrollAble}\n              header="Test Header"\n            >\n              Test Dialog\n            </Dialog>\n          }\n          component={<Button />}\n        >\n          show dialog\n        </PopupClick>\n      </p>\n\n      <Checkbox\n        toggle\n        label="Background scrollable"\n        onChange={({ checked }) => {\n          setBackgroundScrollAble(checked);\n        }}\n      />\n    </>\n  );\n};\n\nexport default PopupExample;\n\nconst Styles = {\n  click: {\n    color: "blue",\n    textDecoration: "underline",\n  },\n};\n',header:"Popup Example",children:(0,ak.jsx)(am,{})})),aa||(aa=(0,ak.jsx)(ag.Z,{code:'import get from "get-object-value";\n\nimport { FullScreenExample as FullScreen } from "organism-react-code";\n\nconst FullScreenExample = () => (\n  <>\n    <p>\n      <FullScreen id="full-screen-example" button="open full screen">\n        test\n      </FullScreen>\n    </p>\n    <p>\n      <FullScreen\n        scrolling\n        id="full-screen-scroll-example"\n        button="open full screen with scroll"\n      >\n        <p>test1--->Start</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test</p>\n        <p>test2--->End</p>\n      </FullScreen>\n    </p>\n  </>\n);\n\nexport default FullScreenExample;\n',header:"Full Screen Example",children:(0,ak.jsx)(ao,{})})),ab||(ab=(0,ak.jsx)(ag.Z,{code:'import React, { PureComponent } from "react";\n\nimport { AlertsNotifier, PopupClick } from "organism-react-popup";\n\nclass AlertsNotifierExample extends PureComponent {\n  render() {\n    return (\n      <PopupClick\n        style={Styles.click}\n        popup={() => (\n          <AlertsNotifier\n            position="bottom"\n            alerts={[\n              {\n                type: "info",\n                message: "test",\n                "data-date": new Date(),\n              },\n            ]}\n          />\n        )}\n        component={<a />}\n      >\n        alert\n      </PopupClick>\n    );\n  }\n}\n\nexport default AlertsNotifierExample;\n\nconst Styles = {\n  click: {\n    color: "blue",\n    textDecoration: "underline",\n  },\n};\n',header:"Alerts Notifier Example",children:(0,ak.jsx)(aS,{})})),ac||(ac=(0,ak.jsx)(ag.Z,{code:'import React, { Component } from "react";\nimport { PopupHover, PopupOverlay } from "organism-react-popup";\n\nclass WindowOffsetExample extends Component {\n  handleClick = (e) => {\n    const target = e.currentTarget;\n    import("get-window-offset").then(({ default: getWindowOffset }) => {\n      const info = getWindowOffset(target);\n      console.log(info);\n    });\n  };\n\n  render() {\n    return (\n      <div>\n        <div style={Styles.row}>\n          <PopupHover popup="1" isKeep={true}>\n            <div\n              style={{ ...Styles.col, ...Styles.col1 }}\n              onClick={this.handleClick}\n            >\n              1\n            </div>\n          </PopupHover>\n          <PopupHover popup="2" isKeep={true}>\n            <div\n              style={{ ...Styles.col, ...Styles.col2 }}\n              onClick={this.handleClick}\n            >\n              2\n            </div>\n          </PopupHover>\n          <PopupHover popup="3" isKeep={true}>\n            <div\n              style={{ ...Styles.col, ...Styles.col3 }}\n              onClick={this.handleClick}\n            >\n              3\n            </div>\n          </PopupHover>\n        </div>\n        <div style={Styles.row}>\n          <PopupHover popup="4">\n            <div\n              style={{ ...Styles.col, ...Styles.col1 }}\n              onClick={this.handleClick}\n            >\n              4\n            </div>\n          </PopupHover>\n          <PopupHover popup="5">\n            <div\n              style={{ ...Styles.col, ...Styles.col2 }}\n              onClick={this.handleClick}\n            >\n              5\n            </div>\n          </PopupHover>\n          <PopupHover popup="6">\n            <div\n              style={{ ...Styles.col, ...Styles.col3 }}\n              onClick={this.handleClick}\n            >\n              6\n            </div>\n          </PopupHover>\n        </div>\n        <div style={{ width: 60 }}>\n          <PopupHover popup="7">\n            <div\n              style={{ ...Styles.col, ...Styles.col1 }}\n              onClick={this.handleClick}\n            >\n              7\n            </div>\n          </PopupHover>\n          <PopupHover popup="8">\n            <div\n              style={{ ...Styles.col, ...Styles.col2 }}\n              onClick={this.handleClick}\n            >\n              8\n            </div>\n          </PopupHover>\n          <PopupHover popup="9">\n            <div\n              style={{ ...Styles.col, ...Styles.col3 }}\n              onClick={this.handleClick}\n            >\n              9\n            </div>\n          </PopupHover>\n        </div>\n      </div>\n    );\n  }\n}\n\nexport default WindowOffsetExample;\n\nconst Styles = {\n  row: {\n    justifyContent: "space-around",\n    display: "flex",\n    marginBottom: 100,\n  },\n  col: {\n    width: 60,\n    height: 60,\n    lineHeight: "60px",\n    textAlign: "center",\n    color: "#fff",\n  },\n  col1: {\n    background: "#c00",\n  },\n  col2: {\n    background: "#095",\n  },\n  col3: {\n    background: "#059",\n  },\n};\n',header:"Detect Window Offset Example",id:"get-window-offset",children:(0,ak.jsx)(aU,{})})),ad||(ad=(0,ak.jsx)(ag.Z,{code:'import React, { PureComponent } from "react";\n\nimport { Button } from "react-atomic-molecule";\n\nimport { PopupPool } from "organism-react-popup";\n\nimport { FullScreenExample } from "organism-react-code";\n\nimport Spotlight from "organism-react-spotlight";\n\nclass SpotlightExample extends PureComponent {\n  state = {\n    spotlight: false,\n  };\n\n  render() {\n    const { spotlight } = this.state;\n    let thisSpotlight = null;\n    if (spotlight) {\n      thisSpotlight = (\n        <Spotlight\n          toPool="spotlight-pool"\n          targetEl={this.spot}\n          onClose={() => {\n            this.setState({ spotlight: null });\n          }}\n        />\n      );\n    }\n    return (\n      <FullScreenExample\n        button="open full screen"\n        onClose={() => this.setState({ spotlight: null })}\n      >\n        <div ref={(el) => (this.spot = el)} style={Styles.el}>\n          Spotlight\n        </div>\n        <div>\n          <Button\n            onClick={() => {\n              this.setState({\n                spotlight: true,\n              });\n            }}\n          >\n            Try it.\n          </Button>\n        </div>\n        {thisSpotlight}\n        <PopupPool name="spotlight-pool" />\n      </FullScreenExample>\n    );\n  }\n}\n\nexport default SpotlightExample;\n\nconst Styles = {\n  el: {\n    display: "inline-block",\n    width: 100,\n    height: 200,\n    margin: 10,\n  },\n};\n',header:"Spotlight Example",children:(0,ak.jsx)(aQ,{})})),ae||(ae=(0,ak.jsx)(ag.Z,{code:'import React, { PureComponent } from "react";\n\nimport { Button } from "react-atomic-molecule";\nimport { dispatch, Return } from "reshow";\n\nconst DialogResult = ({ dialogReturn }) =>\n  "undefined" !== typeof dialogReturn ? "Dialog: " + dialogReturn : null;\n\nclass ReshowMessageExample extends PureComponent {\n  handleAddAlert = (e) => {\n    dispatch("alert/add", {\n      message: "test",\n    });\n  };\n\n  handleResetAlert = (e) => {\n    dispatch("alert/reset", {\n      alerts: [1, 2, 3],\n    });\n  };\n\n  handleCleanAlert = (e) => {\n    dispatch("alert/reset", {\n      alerts: null,\n    });\n  };\n\n  handleOpenDialog = (e) => {\n    dispatch("dialog/start", {\n      dialog: "how are u",\n    });\n  };\n\n  render() {\n    return (\n      <div>\n        <p>\n          <Button onClick={this.handleAddAlert}>Add alert</Button>\n          <Button onClick={this.handleResetAlert}>Reset alert</Button>\n          <Button onClick={this.handleCleanAlert}>Clean all alerts</Button>\n        </p>\n        <p>\n          <Button onClick={this.handleOpenDialog}>Open Dialog</Button>\n          <Return initStates={["dialogReturn"]}>\n            <DialogResult />\n          </Return>\n        </p>\n      </div>\n    );\n  }\n}\n\nexport default ReshowMessageExample;\n',header:"Reshow Message Example",children:(0,ak.jsx)(aY,{})}))]})}},32(c,b,a){a.d(b,{Z:()=>i});var d,e=a(1),f=a(22),g=a(21),h=a(12);let i=function(a){var b=a.pageName,c=a.tplProps;(0,e.useEffect)(function(){return setTimeout(function(){(0,g.Ns)({params:{activeMenu:b}}),(0,f.WI)({tplProps:c,pageName:b})}),d||(d=1,(0,h.Bt)("ajaxGet",{url:"/data/env",ini:!0,disableCacheBusting:!0})),function(){(0,g.Ns)({params:{activeMenu:null}})}},[])}}}])