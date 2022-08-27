"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12],{15(c,b,a){a.d(b,{U:()=>G,Z:()=>w});var d,e,f,g,h,i,j=a(1),k=a(3),l=a(17),m=a(19),n=a(20),o=a(18),p=a(5);let q=function(){var b=(0,j.useState)(function(){return d||function(){}}),c=b[0],e=b[1];return d||a.e(24).then(a.bind(a,42)).then(function(a){d=(0,p.MV)(a),e(function(){return d})}),c};var r=a(0);let s=function(a){var b=q(),c="```js\n"+a.children+"\n```";return(0,r.jsx)(k.ER,{children:b(c)})};var t=a(12),u=a(13);let v=function(c){var e=c.url,f=(0,u.s4)(),a=(0,j.useState)(),b=a[0],g=a[1],d=q();return((0,j.useEffect)(function(){(0,t.Bt)("ajaxGet",{url:e,callback:function(c,a,b){if(!1===f())return!1;200===b.status&&g(a.replace(/(\<\!\-\-hidden\-\-\>)([\s\S]*?)(\<\!\-\-\/hidden\-\-\>)/g,""))}})},[]),b)?(0,r.jsx)(k.XX,{children:(0,r.jsx)(k.ER,{children:d(b)})}):null},w=function(a){i=(0,k.UM)(y,i);var c,d,p,q,t,B=a.header,C=a.children,D=a.code,b=a.git,u=a.npm,w=a.edit,E=a.id,z=(0,j.useState)({on:!1}),F=z[0],J=z[1],A={};if(F.on?c=(0,r.jsx)(s,{children:D}):A=x.hidden,b){var G="https://raw.githubusercontent.com/"+b.replace(/(\/(blob|tree)\/(master|main)\/)/,"/$3/")+"README.md",H="https://github.com/"+b;d=(0,r.jsx)(v,{url:G}),p=(0,r.jsx)(k.JO,{atom:"a",target:"_blank",href:H,style:x.icon,children:e||(e=(0,r.jsx)(m.Z,{}))})}if(u){var I="https://www.npmjs.com/package/"+u;q=(0,r.jsx)(k.JO,{atom:"a",target:"_blank",href:I,style:x.icon,children:f||(f=(0,r.jsx)(n.Z,{}))})}return w&&(t=(0,r.jsx)(k.JO,{atom:"a",target:"_blank",href:w,style:x.icon,children:g||(g=(0,r.jsx)(o.Z,{}))})),(0,r.jsxs)(k.aV,{type:"segments",id:E,children:[(0,r.jsxs)(k.XX,{className:"tertiary",children:[(0,r.jsx)(k.h4,{style:x.header,className:"grey",children:B}),(0,r.jsxs)(k.iX,{style:x.iconBlock,children:[t,q,p,(0,r.jsx)(k.JO,{onClick:function(){return J(function(a){return{on:!a.on}})},style:x.icon,children:h||(h=(0,r.jsx)(l.Z,{}))})]})]}),(0,r.jsx)(k.XX,{className:"secondary",style:A,styles:i.code,children:c}),(0,r.jsx)(k.XX,{children:C}),d]})};var x={header:{margin:0},hidden:{maxHeight:0,padding:"0 16px",margin:0,ovarflow:"hidden"},iconBlock:{position:"absolute",top:16,right:6},icon:{maxWidth:24,cursor:"pointer",marginRight:10}},y={code:[{transition:["padding 500ms ease"]}],fitWidth:[{whiteSpace:"break-spaces"},"code"]},z=a(2),A=a(8),B=a(16),C=a(6),D=["button","children","id","onClose"],E=function(){var a=document.URL.split("#"),b=a.length-1,c=a[b];return c},F=function(a){return history.pushState("","",a)};let G=function(a){var b=a.button,e=a.children,h=a.id,i=a.onClose,f=(0,A.Z)(a,D),c=(0,j.useState)(),g=c[0],l=c[1];(0,j.useEffect)(function(){var a=E();h===a&&l(!0)},[]);var d=null;return g&&(d=(0,r.jsx)(B.IT,(0,z.Z)((0,z.Z)({},f),{},{onClose:function(){var a=document.URL,b=a.lastIndexOf("#"+h);-1!==b&&F(a.substring(0,b)),(0,C.ZP)(i),l(!1)},children:e}))),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(k.zx,{onClick:function(){var a=E();h&&h!==a&&F(document.URL+"#"+h),l(!0)},children:void 0===b?"Open full screen":b}),d]})}},17(c,b,a){a.d(b,{Z:()=>e});var d=a(4);let e=function(a){return(0,d.Z)("Code","M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z")(a)}},18(c,b,a){a.d(b,{Z:()=>e});var d=a(4);let e=function(a){return(0,d.Z)("Edit","M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z")(a)}},104(c,b,a){a.d(b,{Z:()=>e});var d=a(4);let e=function(a){return(0,d.Z)("Facebook","M13,10h3v3h-3v7h-3v-7H7v-3h3V8.745c0-1.189,0.374-2.691,1.118-3.512C11.862,4.41,12.791,4,13.904,4H16v3h-2.1 C13.402,7,13,7.402,13,7.899V10z")(a)}},19(c,b,a){a.d(b,{Z:()=>g});var d=a(476),e=a(4),f=["viewBox"];let g=function(a){var{viewBox:c="0 0 16 16"}=a,b=(0,d.Z)(a,f);return b.viewBox=c,(0,e.Z)("Git","M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z")(b)}},77(c,b,a){a.d(b,{Z:()=>e});var d=a(4);let e=function(a){return(0,d.Z)("Link","M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z")(a)}},20(c,b,a){a.d(b,{Z:()=>g});var d=a(476),e=a(4),f=["viewBox","fill"];let g=function(b){var{viewBox:c="0 0 3200 3200",fill:g="#b93131"}=b,a=(0,d.Z)(b,f);return a.viewBox=c,a.fill=g,(0,e.Z)("Npm","M269 3186 c-99 -27 -193 -106 -243 -205 l-26 -50 0 -1332 0 -1331 31 -59 c40 -75 102 -132 187 -172 l67 -32 1255 -3 c911 -2 1271 0 1315 8 119 23 224 102 282 211 l28 54 0 1325 0 1325 -29 54 c-42 80 -128 163 -201 192 l-60 24 -1280 2 c-992 1 -1290 -1 -1326 -11z m1311 -1386 l0 -600 200 0 200 0 0 600 0 600 200 0 200 0 0 -800 0 -800 -800 0 -800 0 0 800 0 800 400 0 400 0 0 -600z")(a)}},61(c,b,a){a.d(b,{Z:()=>e});var d=a(4);let e=function(a){return(0,d.Z)("Search","M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z")(a)}},4(c,b,a){a.d(b,{Z:()=>j});var d=a(2),e=a(476),f=a(25),g=a(23),h=a(0),i=["type","children"];let j=function(b,c){var a=function(j){var{type:k=null,children:l}=j,m=(0,e.Z)(j,i),a=c[k]||c["_"]||c;return(0,h.jsxs)(f.Z,(0,d.Z)((0,d.Z)({},m),{},{"data-name":b,children:[a.map?a.map(function(a){return(0,h.jsx)(g.Z,{d:a})}):(0,h.jsx)(g.Z,{d:a}),l]}))};return a.displayName=b,a}},386(g,b,a){a.r(b),a.d(b,{default:()=>ad});var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=a(2),w=a(15),x=a(31),c=a(1),y=a(76),z=a(3),A=a(0);let B=function(a){var b,c;return(0,A.jsxs)("div",{children:[(0,A.jsx)(y.t,{ref:function(a){return b=a}}),(0,A.jsxs)("div",{children:[(0,A.jsx)(z.zx,{style:C.button,onClick:function(){b.start(100,800)},children:"Start"}),(0,A.jsx)(z.zx,{style:C.button,onClick:function(){b.pause()},children:"Pause"}),(0,A.jsx)(z.zx,{style:C.button,onClick:function(){b.complete()},children:"Complete"}),(0,A.jsx)(z.zx,{style:C.button,onClick:function(){b.reset()},children:"Reset"})]}),(0,A.jsx)("div",{children:(0,A.jsx)(z.Wz,{leftLabel:"Pause @",rightLabel:"%",refCb:function(a){return c=a},button:"Go",actionProps:{onClick:function(){b.start(c.value)}},style:C.input})})]})};var C={input:{width:20},button:{marginBottom:10}},D=a(12);let E=function(a){return(0,A.jsxs)("div",{children:[h||(h=(0,A.jsx)(y.t,{ajax:!0})),(0,A.jsx)(z.zx,{onClick:function(){(0,D.Bt)({type:"ajaxGet",params:{url:"https://raw.githubusercontent.com/react-atomic/react-atomic-ui/main/README.md",callback:function(b,a,c){alert(a)}}})},children:"Call Ajax"})]})};var F=a(59),G=a(44),H=a(11);let I=function(a,f,g,h){var c,d=(0,H.p_)().URL,i=(c=a)instanceof Blob||"[object Blob]"===Object.prototype.toString.call(c)?a:new Blob([a],g),e=d.createObjectURL(i),b=(0,F.Ue)("a")()({download:f||(0,G.ZP)(),href:e});(0,F.f3)()(b),b.click(),h||((0,F.Od)(b),d.revokeObjectURL(e))},J=function(a){var b="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg";return(0,A.jsx)(z.zx,{onClick:function(){(0,D.Bt)("ajaxGet",{responseType:["blob"],url:b,callback:function(c,d,a){I(a.body,b.split("/").splice(-1)[0])}})},children:"Ajax Download"})};var K=a(461),L=a(462),M=a(9),N=a(10),d=a(460),O=a(5),P=a(104),Q=a(77),R=Object.keys,e=function(b){(0,M.Z)(a,b);var d=(0,N.Z)(a);function a(c){var b;return(0,K.Z)(this,a),(b=d.call(this,c)).state={load:0},i=(0,z.yT)(U,i),b}return(0,L.Z)(a,[{key:"update",value:function(){var h=this,b=this.props,d=b.page,e=b.params,f=(0,v.Z)({appId:"1579401905644484",action:"like",href:d,layout:"standard",share:"true",show_faces:"true"},e),g=[];R(f).forEach(function(a){g.push(a+"="+encodeURIComponent(f[a]))});var a="//www.facebook.com/plugins/like.php?"+g.join("&");if(this.src!==a){var i=c.createElement(z.iX,{atom:"iframe",src:a,refCb:function(a){return h.iframe=a},style:T.iframe,onLoad:function(){console.log("fb like load")}});this.src=a,this.setState({iframe:null}),setTimeout(function(){h.setState({iframe:i})},300)}}},{key:"componentDidUpdate",value:function(a,b){this.update()}},{key:"componentDidMount",value:function(){this.setState({load:1})}},{key:"render",value:function(){var e,f,g=this.state,a=this.props,h=a.page,j=a.params,k=a.pageTarget,b=a.linkComponent;if(!g.load)return null;var d=(0,O.ZP)(j,["href"]),l=(e=(0,c.isValidElement)(b)?c.cloneElement:c.createElement)(b,{target:"_blank",href:h},c.createElement(P.Z,{style:T.fbSvg}));return d&&h!==d&&(f=c.createElement(z.JO,{styles:i.icon,style:{left:0}},e(b,{href:d,target:k,rel:"bookmark"},c.createElement(Q.Z,{style:T.linkSvg})))),c.createElement(z.iX,{style:T.container},c.createElement(z.JO,{styles:i.icon},l),f,g.iframe)}}]),a}(c.Component);(0,d.Z)(e,"defaultProps",{linkComponent:"a"});let S=e;var T={container:{position:"relative",overflow:"hidden"},fbSvg:{fill:"#3b5998"},linkSvg:{fill:"#586069"},iframe:{paddingLeft:70,border:"none",overflow:"hidden",width:"100%",maxWidth:"100%",maxHeight:60}},U={icon:[{borderRadius:5,width:30,height:30,position:"absolute",top:0,left:30,cursor:"pointer",boxShadow:["5px 0 1em #ddd"]}]},V=Object.keys,f=function(b){(0,M.Z)(a,b);var d=(0,N.Z)(a);function a(c){var b;return(0,K.Z)(this,a),(b=d.call(this,c)).state={load:0},b}return(0,L.Z)(a,[{key:"componentDidMount",value:function(){this.setState({load:1})}},{key:"render",value:function(){if(!this.state.load)return null;var a=this.props,f=a.page,g=a.appId,b=a.width,d=a.height,h=a.tabs,i=a.hide_cover,j=a.show_facepile,k=a.hide_cta,l=a.small_header,m=a.adapt_container_width,e="https://www.facebook.com/plugins/page.php",n={href:"https://www.facebook.com/"+f,appId:g,width:b,height:d,tabs:h,hide_cover:i,show_facepile:j,hide_cta:k,small_header:l,adapt_container_width:m},o=V(n),p=[];return o.forEach(function(a){p.push(a+"="+encodeURIComponent(n[a]))}),e+="?"+p.join("&"),c.createElement("iframe",{style:X.iframe,src:e,width:b,height:d,onLoad:function(){console.log("fb page load")}})}}]),a}(c.Component);(0,d.Z)(f,"defaultProps",{appId:"1579401905644484",width:340,height:500,tabs:"timeline",hide_cover:!1,show_facepile:!0,hide_cta:!1,small_header:!1,adapt_container_width:!0});let W=f;var X={iframe:{}};let Y=function(a){return j||(j=(0,A.jsx)(S,{page:"https://www.facebook.com/react"}))},Z=function(a){return k||(k=(0,A.jsx)(W,{page:"react"}))};var $=a(61),_=a(21);function aa(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}var ab=function(){return(0,A.jsx)(z.v2,{className:"right",ui:!1,children:(0,A.jsx)(z.ck,{style:{boxSizing:"border-box"},children:l||(l=(0,A.jsx)(z.Wz,{icon:(0,A.jsx)($.Z,{}),transparent:!0,placeholder:"Search..."}))})})};let ac=function(f){var a,b,d=(a=(0,c.useState)(),b=2,function(a){if(Array.isArray(a))return a}(a)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,b)||function d(a,c){if(a){if("string"==typeof a)return aa(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return aa(a,c)}}(a,b)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),e=d[0],g=d[1];return(0,A.jsxs)(z.iX,{children:[(0,A.jsxs)(_.xf,{selected:e,rightMenu:m||(m=(0,A.jsx)(ab,{})),children:[n||(n=(0,A.jsxs)(_.OK,{children:[(0,A.jsx)("div",{children:"content1"}),(0,A.jsx)("div",{children:"menu1"})]})),o||(o=(0,A.jsxs)(_.OK,{children:[(0,A.jsx)("div",{children:"content2"}),(0,A.jsx)("div",{children:"menu2"})]}))]}),(0,A.jsx)(z.zx,{onClick:function(){return g(0)},children:"to tab1"}),(0,A.jsx)(z.zx,{onClick:function(){return g(1)},children:"to tab2"})]})},ad=function(a){return(0,x.Z)((0,v.Z)((0,v.Z)({},a),{},{pageName:"Organisms"})),(0,A.jsxs)(A.Fragment,{children:[p||(p=(0,A.jsx)(w.Z,{code:'import React from "react";\nimport { PageLoadProgressHandler } from "organism-react-progress";\nimport { Button, InputBox } from "react-atomic-molecule";\n\nconst PageLoadProgressHandlerExample = (props) => {\n  let oLoad;\n  let dInput;\n  return (\n    <div>\n      <PageLoadProgressHandler ref={(o) => (oLoad = o)} />\n\n      <div>\n        <Button\n          style={Styles.button}\n          onClick={() => {\n            oLoad.start(100, 800);\n          }}\n        >\n          Start\n        </Button>\n        <Button\n          style={Styles.button}\n          onClick={() => {\n            oLoad.pause();\n          }}\n        >\n          Pause\n        </Button>\n        <Button\n          style={Styles.button}\n          onClick={() => {\n            oLoad.complete();\n          }}\n        >\n          Complete\n        </Button>\n        <Button\n          style={Styles.button}\n          onClick={() => {\n            oLoad.reset();\n          }}\n        >\n          Reset\n        </Button>\n      </div>\n\n      <div>\n        <InputBox\n          leftLabel="Pause @"\n          rightLabel="%"\n          refCb={(o) => (dInput = o)}\n          button={"Go"}\n          actionProps={{\n            onClick: () => {\n              oLoad.start(dInput.value);\n            },\n          }}\n          style={Styles.input}\n        />\n      </div>\n    </div>\n  );\n};\n\nexport default PageLoadProgressHandlerExample;\n\nconst Styles = {\n  input: {\n    width: 20,\n  },\n  button: {\n    marginBottom: 10,\n  },\n};\n',header:"Page Load Progress",git:"react-atomic/react-atomic-organism/blob/main/packages/organism-react-progress/",npm:"organism-react-progress",children:(0,A.jsx)(B,{})})),q||(q=(0,A.jsx)(w.Z,{code:'import React from "react";\nimport { PageLoadProgressHandler } from "organism-react-progress";\nimport { ajaxDispatch } from "organism-react-ajax";\nimport { Button } from "react-atomic-molecule";\n\nconst PageLoadProgressHandlerExample = (props) => {\n  let url =\n    "https://raw.githubusercontent.com/react-atomic/react-atomic-ui/main/README.md";\n  return (\n    <div>\n      <PageLoadProgressHandler ajax={true} />\n\n      <Button\n        onClick={() => {\n          ajaxDispatch({\n            type: "ajaxGet",\n            params: {\n              url: url,\n              callback: (json, text, o) => {\n                alert(text);\n              },\n            },\n          });\n        }}\n      >\n        Call Ajax\n      </Button>\n    </div>\n  );\n};\n\nexport default PageLoadProgressHandlerExample;\n',header:"Page Load Progress With Ajax",children:(0,A.jsx)(E,{})})),r||(r=(0,A.jsx)(w.Z,{code:'import React from "react";\nimport { PageLoadProgressHandler } from "organism-react-progress";\nimport { ajaxDispatch } from "organism-react-ajax";\nimport { Button } from "react-atomic-molecule";\nimport { download } from "ajax-save";\n\nconst AjaxDownloadExample = (props) => {\n  const url =\n    "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg";\n  return (\n    <Button\n      onClick={() => {\n        ajaxDispatch("ajaxGet", {\n          responseType: ["blob"],\n          url,\n          callback: (json, text, o) => {\n            download(o.body, url.split("/").splice(-1)[0]);\n          },\n        });\n      }}\n    >\n      Ajax Download\n    </Button>\n  );\n};\n\nexport default AjaxDownloadExample;\n',id:"ajax-save",header:"Ajax Save (Downloader)",children:(0,A.jsx)(J,{})})),s||(s=(0,A.jsx)(w.Z,{code:'import React from "react";\nimport { FBLike } from "organism-react-facebook";\n\nconst FBLikeExample = (props) => (\n  <FBLike page="https://www.facebook.com/react" />\n);\n\nexport default FBLikeExample;\n',header:"Facebook Like Button",git:"react-atomic/react-atomic-organism/blob/main/packages/organism-react-facebook/",npm:"organism-react-facebook",id:"organism-react-facebook",children:(0,A.jsx)(Y,{})})),t||(t=(0,A.jsx)(w.Z,{code:'import React from "react";\nimport { FBPage } from "organism-react-facebook";\n\nconst FBPageExample = (props) => {\n  return <FBPage page="react" />;\n};\n\nexport default FBPageExample;\n',header:"Facebook Page Plugin",children:(0,A.jsx)(Z,{})})),u||(u=(0,A.jsx)(w.Z,{code:'import React, { useState } from "react";\n\nimport {\n  SemanticUI,\n  Menu,\n  Item,\n  InputBox,\n  Button,\n} from "react-atomic-molecule";\nimport SearchIcon from "ricon/Search";\n\nimport { TabView, Tab } from "organism-react-navigation";\n\nconst RightMenu = () => (\n  <Menu className="right" ui={false}>\n    <Item style={{ boxSizing: "border-box" }}>\n      <InputBox icon={<SearchIcon />} transparent placeholder="Search..." />\n    </Item>\n  </Menu>\n);\n\nconst TabViewExample = (props) => {\n  const [selected, setSelected] = useState();\n  return (\n    <SemanticUI>\n      <TabView selected={selected} rightMenu={<RightMenu />}>\n        <Tab>\n          <div>content1</div>\n          <div>menu1</div>\n        </Tab>\n        <Tab>\n          <div>content2</div>\n          <div>menu2</div>\n        </Tab>\n      </TabView>\n      <Button onClick={() => setSelected(0)}>to tab1</Button>\n      <Button onClick={() => setSelected(1)}>to tab2</Button>\n    </SemanticUI>\n  );\n};\n\nexport default TabViewExample;\n',header:"Tab View",id:"tab",children:(0,A.jsx)(ac,{})}))]})}},31(c,b,a){a.d(b,{Z:()=>i});var d,e=a(1),f=a(22),g=a(21),h=a(12);let i=function(a){var b=a.pageName,c=a.tplProps;(0,e.useEffect)(function(){return setTimeout(function(){(0,g.Ns)({params:{activeMenu:b}}),(0,f.WI)({tplProps:c,pageName:b})}),d||(d=1,(0,h.Bt)("ajaxGet",{url:"/data/env",ini:!0,disableCacheBusting:!0})),function(){(0,g.Ns)({params:{activeMenu:null}})}},[])}}}])