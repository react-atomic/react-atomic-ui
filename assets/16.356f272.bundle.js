"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[16],{16(f,c,a){a.d(c,{U:()=>L,Z:()=>z});var g,h,i,j,k,l,m=a(11),d=a(1),n=a(3),o=a(18),p=a(19),q=a(20),r=a(21),s=a(5);let t=function(){var c=(0,d.useState)(function(){return g||function(){}}),b=(0,m.Z)(c,2),e=b[0],f=b[1];return g||a.e(24).then(a.bind(a,121)).then(function(a){g=(0,s.MV)(a),f(function(){return g})}),e};var u=a(0);let v=function(a){var b=t(),c="```".concat("js","\n").concat(a.children,"\n```");return(0,u.jsx)(n.ER,{children:b(c)})};var w=a(13),x=a(15);let y=function(c){var g=c.url,h=(0,x.s4)(),e=(0,d.useState)(),a=(0,m.Z)(e,2),b=a[0],i=a[1],f=t();return((0,d.useEffect)(function(){(0,w.Bt)("ajaxGet",{url:g,callback:function(c,a,b){if(!1===h())return!1;200===b.status&&i(a.replace(/(\<\!\-\-hidden\-\-\>)([\s\S]*?)(\<\!\-\-\/hidden\-\-\>)/g,""))}})},[]),b)?(0,u.jsx)(n.XX,{children:(0,u.jsx)(n.ER,{children:f(b)})}):null},z=function(a){l=(0,n.UM)(B,l);var c,e,f,g,s,C=a.header,D=a.children,E=a.code,b=a.git,t=a.npm,w=a.edit,F=a.id,G=(0,d.useState)({on:!1}),x=(0,m.Z)(G,2),H=x[0],L=x[1],z={};if(H.on?c=(0,u.jsx)(v,{children:E}):z=A.hidden,b){var I="https://raw.githubusercontent.com/"+b.replace(/(\/(blob|tree)\/(master|main)\/)/,"/$3/")+"README.md",J="https://github.com/"+b;e=(0,u.jsx)(y,{url:I}),f=(0,u.jsx)(n.JO,{atom:"a",target:"_blank",href:J,style:A.icon,children:h||(h=(0,u.jsx)(p.Z,{}))})}if(t){var K="https://www.npmjs.com/package/"+t;g=(0,u.jsx)(n.JO,{atom:"a",target:"_blank",href:K,style:A.icon,children:i||(i=(0,u.jsx)(q.Z,{}))})}return w&&(s=(0,u.jsx)(n.JO,{atom:"a",target:"_blank",href:w,style:A.icon,children:j||(j=(0,u.jsx)(r.Z,{}))})),(0,u.jsxs)(n.aV,{type:"segments",id:F,children:[(0,u.jsxs)(n.XX,{className:"tertiary",children:[(0,u.jsx)(n.h4,{style:A.header,className:"grey",children:C}),(0,u.jsxs)(n.iX,{style:A.iconBlock,children:[s,g,f,(0,u.jsx)(n.JO,{onClick:function(){return L(function(a){return{on:!a.on}})},style:A.icon,children:k||(k=(0,u.jsx)(o.Z,{}))})]})]}),(0,u.jsx)(n.XX,{className:"secondary",style:z,styles:l.code,children:c}),(0,u.jsx)(n.XX,{children:D}),e]})};var A={header:{margin:0},hidden:{maxHeight:0,padding:"0 16px",margin:0,ovarflow:"hidden"},iconBlock:{position:"absolute",top:16,right:6},icon:{maxWidth:24,cursor:"pointer",marginRight:10}},B={code:[{transition:["padding 500ms ease"]}],fitWidth:[{whiteSpace:"break-spaces"},"code"]},C=a(463),D=a(464),E=a(472),F=a(9),G=a(10),e=a(461),H=a(17),I=a(8),J=function(){var a=document.URL.split("#"),b=a.length-1,c=a[b];return c},K=function(a){return history.pushState("","",a)},b=function(b){(0,F.Z)(a,b);var c=(0,G.Z)(a);function a(){var b;(0,C.Z)(this,a);for(var f=arguments.length,g=new Array(f),d=0;d<f;d++)g[d]=arguments[d];return b=c.call.apply(c,[this].concat(g)),(0,e.Z)((0,E.Z)(b),"state",{showFullScreen:!1}),(0,e.Z)((0,E.Z)(b),"handleClick",function(){var a=b.props.id,c=J();a&&a!==c&&K(document.URL+"#"+a),b.setState({showFullScreen:!0})}),(0,e.Z)((0,E.Z)(b),"handleClose",function(){var a=b.props,e=a.id,f=a.onClose,c=document.URL,d=c.lastIndexOf("#"+e);-1!==d&&K(c.substring(0,d)),(0,I.ZP)(f),b.setState({showFullScreen:!1})}),b}return(0,D.Z)(a,[{key:"componentDidMount",value:function(){var a=this.props.id,b=J();a===b&&this.setState({showFullScreen:!0})}},{key:"render",value:function(){var a=this.props,c=a.button,d=a.children,e=this.state.showFullScreen,b=null;return e&&(b=(0,u.jsx)(H.IT,{onClose:this.handleClose,children:d})),(0,u.jsxs)(n.iX,{children:[(0,u.jsx)(n.zx,{onClick:this.handleClick,children:c}),b]})}}]),a}(d.PureComponent);(0,e.Z)(b,"defaultProps",{button:"Open full screen"});let L=b},11(c,b,a){a.d(b,{Z:()=>e});var d=a(7);function e(a,e){var b,f,c;return function(a){if(Array.isArray(a))return a}(a)||(b=a,f=e,c=[],(0,d.tW)(b).some(function(a,d){if(c.push(b[a]),f===d+1)return!0}),c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}},18(c,b,a){a.d(b,{Z:()=>e});var d=a(6);let e=function(a){return(0,d.Z)("Code","M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z")(a)}},21(c,b,a){a.d(b,{Z:()=>e});var d=a(6);let e=function(a){return(0,d.Z)("Edit","M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z")(a)}},19(c,b,a){a.d(b,{Z:()=>g});var d=a(4),e=a(6),f=["viewBox"];let g=function(a){var b=a.viewBox,c=(0,d.Z)(a,f);return c.viewBox=void 0===b?"0 0 16 16":b,(0,e.Z)("Git","M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z")(c)}},20(c,b,a){a.d(b,{Z:()=>g});var d=a(4),e=a(6),f=["viewBox","fill"];let g=function(a){var c=a.viewBox,g=a.fill,b=(0,d.Z)(a,f);return b.viewBox=void 0===c?"0 0 3200 3200":c,b.fill=void 0===g?"#b93131":g,(0,e.Z)("Npm","M269 3186 c-99 -27 -193 -106 -243 -205 l-26 -50 0 -1332 0 -1331 31 -59 c40 -75 102 -132 187 -172 l67 -32 1255 -3 c911 -2 1271 0 1315 8 119 23 224 102 282 211 l28 54 0 1325 0 1325 -29 54 c-42 80 -128 163 -201 192 l-60 24 -1280 2 c-992 1 -1290 -1 -1326 -11z m1311 -1386 l0 -600 200 0 200 0 0 600 0 600 200 0 200 0 0 -800 0 -800 -800 0 -800 0 0 800 0 800 400 0 400 0 0 -600z")(b)}},6(c,b,a){a.d(b,{Z:()=>j});var d=a(2),e=a(4),f=a(28),g=a(25),h=a(0),i=["type","children"];let j=function(b,c){var a=function(a){var j=a.type,k=a.children,l=(0,e.Z)(a,i);return(0,h.jsxs)(f.Z,(0,d.Z)((0,d.Z)({},l),{},{"data-name":b,children:[(0,h.jsx)(g.Z,{d:c[void 0===j?null:j]||c["_"]||c}),k]}))};return a.displayName=b,a}},36(c,b,a){a.d(b,{Z:()=>i});var d,e=a(1),f=a(22),g=a(27),h=a(13);let i=function(a){var b=a.pageName,c=a.tplProps;(0,e.useEffect)(function(){return setTimeout(function(){(0,g.Ns)({params:{activeMenu:b}}),(0,f.WI)({tplProps:c,pageName:b})}),d||(d=1,(0,h.Bt)("ajaxGet",{url:"/data/env",ini:!0,disableCacheBusting:!0})),function(){(0,g.Ns)({params:{activeMenu:null}})}},[])}},401(e,b,a){a.r(b),a.d(b,{default:()=>w});var f,g=a(2),h=a(16),i=a(36),j=a(11),d=a(1),k=a(5),l=a(122),m=a(3),n=a(8),o=a(79),p=a(41),q=a(15),r="[VERSION]",s=function(a){var c=a.onLoadDelay,C=void 0===c?1500:c,e=a.inlineCSS,m=void 0===e?"body {padding: 0; margin: 0; background: transparent !important;}":e,f=a.js,s=void 0===f?"https://cdn.jsdelivr.net/npm/@asciidoctor/core@[VERSION]/dist/browser/asciidoctor.min.js":f,h=a.css,t=void 0===h?"https://cdn.jsdelivr.net/npm/@asciidoctor/core@[VERSION]/dist/css/asciidoctor.min.css":h,i=a.npmVersion,l=void 0===i?"2.2.6":i,D=a.onLoad,b=a.options,u=a.attributes,v=a.children,w=(0,d.useRef)(),x=(0,q.J7)(),y=(0,j.Z)(x,1),E=y[0];(0,d.useEffect)(function(){var b,a=w.current.getWindow(),c=function(a){w.current.postHeight(),(0,n.ZP)(D,[a])};return a.onRender=function(h){var e=(0,o.Z)({doc:a.document}),d=(0,j.Z)(e,2),f=d[0],g=d[1];b=g;var i=function(){E(function(){return c(h)},C)};f(function(){var a=p.ZP.from(h).all("img"),b=null==a?void 0:a.length;if(b){var c=0;a.forEach(function(d){var a=new Image;a.onload=function(){++c>=b&&i()},a.onerror=function(){++c>=b&&i()},a.src=d.src})}i(),w.current.postHeight()})},function(){(0,n.ZP)(b)}},[]),(b=b||{}).attributes=(0,g.Z)((0,g.Z)({},(0,k.ZP)(b,["attributes"],{})),u);var z=s.replace(r,l),A=t.replace(r,l),B=(0,d.useMemo)(function(){return['<link rel="stylesheet" type="text/css" href="'.concat(A,'" />'),'<script src="'.concat(z,'"></script>'),'<div id="data" style="display:none;">'+v+"</div>",'<div id="output"></div>',"\n        <script>\n	    var asciidoctor = Asciidoctor();\n	    var html = asciidoctor.convert(\n              document.getElementById('data').innerHTML,\n              ".concat(JSON.stringify(b),"\n            );\n            var output = document.getElementById('output');\n	    output.innerHTML = html;\n            window.onRender(output);\n        </script>\n        ")].join("")},[A,z,v,b]);return{expose:{getBody:function(){return w.current.getBody()}},inlineCSS:m,lastIframe:w,html:B}},c=(0,d.forwardRef)(function(b,c){var a=s(b),h=a.expose,e=a.inlineCSS,f=a.lastIframe,g=a.html;return(0,d.useImperativeHandle)(c,function(){return h},[]),d.createElement(l.Z,{ref:f,inlineCSS:e,autoHeight:!0},d.createElement(m.ER,null,g))});c.displayName="Asciidoc";let t=c;var u=a(0);let v=function(a){return(0,u.jsx)(t,{options:{doctype:"book"},children:"\n:toc:\n:toc-placement!:\ntoc::[]\n\n= h1 - test\ntest\n\n== h2 - test2\n* Hello *world*\n\n== h2 - test3\n- [ ] option1\n- [*] option1\n"})},w=function(a){return(0,i.Z)((0,g.Z)((0,g.Z)({},a),{},{pageName:"AsciiDoc"})),(0,u.jsx)(u.Fragment,{children:f||(f=(0,u.jsx)(h.Z,{code:'import Asciidoc from "organism-react-asciidoc";\n\nconst adoc = `\n:toc:\n:toc-placement!:\ntoc::[]\n\n= h1 - test\ntest\n\n== h2 - test2\n* Hello *world*\n\n== h2 - test3\n- [ ] option1\n- [*] option1\n`;\n\nconst AsciidocDemo = (props) => (\n  <Asciidoc options={{ doctype: "book" }}>{adoc}</Asciidoc>\n);\n\nexport default AsciidocDemo;\n',header:"Ascii Doc",edit:"https://codesandbox.io/s/8vj7x3m82",git:"react-atomic/react-atomic-organism/tree/main/packages/organism-react-asciidoc/",children:(0,u.jsx)(v,{})}))})}}}])