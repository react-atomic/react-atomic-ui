"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[13],{16(f,c,a){a.d(c,{U:()=>L,Z:()=>z});var g,h,i,j,k,l,m=a(11),d=a(1),n=a(3),o=a(18),p=a(19),q=a(20),r=a(21),s=a(5);let t=function(){var c=(0,d.useState)(function(){return g||function(){}}),b=(0,m.Z)(c,2),e=b[0],f=b[1];return g||a.e(22).then(a.bind(a,46)).then(function(a){g=(0,s.MV)(a),f(function(){return g})}),e};var u=a(0);let v=function(a){var b=t(),c="```".concat("js","\n").concat(a.children,"\n```");return(0,u.jsx)(n.ER,{children:b(c)})};var w=a(13),x=a(15);let y=function(c){var g=c.url,h=(0,x.s4)(),e=(0,d.useState)(),a=(0,m.Z)(e,2),b=a[0],i=a[1],f=t();return((0,d.useEffect)(function(){(0,w.Bt)("ajaxGet",{url:g,callback:function(c,a,b){if(!1===h())return!1;200===b.status&&i(a.replace(/(\<\!\-\-hidden\-\-\>)([\s\S]*?)(\<\!\-\-\/hidden\-\-\>)/g,""))}})},[]),b)?(0,u.jsx)(n.XX,{children:(0,u.jsx)(n.ER,{children:f(b)})}):null},z=function(a){l=(0,n.UM)(B,l);var c,e,f,g,s,C=a.header,D=a.children,E=a.code,b=a.git,t=a.npm,w=a.edit,F=a.id,G=(0,d.useState)({on:!1}),x=(0,m.Z)(G,2),H=x[0],L=x[1],z={};if(H.on?c=(0,u.jsx)(v,{children:E}):z=A.hidden,b){var I="https://raw.githubusercontent.com/"+b.replace(/(\/(blob|tree)\/(master|main)\/)/,"/$3/")+"README.md",J="https://github.com/"+b;e=(0,u.jsx)(y,{url:I}),f=(0,u.jsx)(n.JO,{atom:"a",target:"_blank",href:J,style:A.icon,children:h||(h=(0,u.jsx)(p.Z,{}))})}if(t){var K="https://www.npmjs.com/package/"+t;g=(0,u.jsx)(n.JO,{atom:"a",target:"_blank",href:K,style:A.icon,children:i||(i=(0,u.jsx)(q.Z,{}))})}return w&&(s=(0,u.jsx)(n.JO,{atom:"a",target:"_blank",href:w,style:A.icon,children:j||(j=(0,u.jsx)(r.Z,{}))})),(0,u.jsxs)(n.aV,{type:"segments",id:F,children:[(0,u.jsxs)(n.XX,{className:"tertiary",children:[(0,u.jsx)(n.h4,{style:A.header,className:"grey",children:C}),(0,u.jsxs)(n.iX,{style:A.iconBlock,children:[s,g,f,(0,u.jsx)(n.JO,{onClick:function(){return L(function(a){return{on:!a.on}})},style:A.icon,children:k||(k=(0,u.jsx)(o.Z,{}))})]})]}),(0,u.jsx)(n.XX,{className:"secondary",style:z,styles:l.code,children:c}),(0,u.jsx)(n.XX,{children:D}),e]})};var A={header:{margin:0},hidden:{maxHeight:0,padding:"0 16px",margin:0,ovarflow:"hidden"},iconBlock:{position:"absolute",top:16,right:6},icon:{maxWidth:24,cursor:"pointer",marginRight:10}},B={code:[{transition:["padding 500ms ease"]}],fitWidth:[{whiteSpace:"break-spaces"},"code"]},C=a(462),D=a(463),E=a(472),F=a(9),G=a(10),e=a(460),H=a(17),I=a(8),J=function(){var a=document.URL.split("#"),b=a.length-1,c=a[b];return c},K=function(a){return history.pushState("","",a)},b=function(b){(0,F.Z)(a,b);var c=(0,G.Z)(a);function a(){var b;(0,C.Z)(this,a);for(var f=arguments.length,g=new Array(f),d=0;d<f;d++)g[d]=arguments[d];return b=c.call.apply(c,[this].concat(g)),(0,e.Z)((0,E.Z)(b),"state",{showFullScreen:!1}),(0,e.Z)((0,E.Z)(b),"handleClick",function(){var a=b.props.id,c=J();a&&a!==c&&K(document.URL+"#"+a),b.setState({showFullScreen:!0})}),(0,e.Z)((0,E.Z)(b),"handleClose",function(){var a=b.props,e=a.id,f=a.onClose,c=document.URL,d=c.lastIndexOf("#"+e);-1!==d&&K(c.substring(0,d)),(0,I.ZP)(f),b.setState({showFullScreen:!1})}),b}return(0,D.Z)(a,[{key:"componentDidMount",value:function(){var a=this.props.id,b=J();a===b&&this.setState({showFullScreen:!0})}},{key:"render",value:function(){var a=this.props,c=a.button,d=a.children,e=this.state.showFullScreen,b=null;return e&&(b=(0,u.jsx)(H.IT,{onClose:this.handleClose,children:d})),(0,u.jsxs)(n.iX,{children:[(0,u.jsx)(n.zx,{onClick:this.handleClick,children:c}),b]})}}]),a}(d.PureComponent);(0,e.Z)(b,"defaultProps",{button:"Open full screen"});let L=b},11(c,b,a){a.d(b,{Z:()=>e});var d=a(7);function e(a,e){var b,f,c;return function(a){if(Array.isArray(a))return a}(a)||(b=a,f=e,c=[],(0,d.tW)(b).some(function(a,d){if(c.push(b[a]),f===d+1)return!0}),c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}},18(c,b,a){a.d(b,{Z:()=>e});var d=a(6);let e=function(a){return(0,d.Z)("Code","M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z")(a)}},21(c,b,a){a.d(b,{Z:()=>e});var d=a(6);let e=function(a){return(0,d.Z)("Edit","M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z")(a)}},19(c,b,a){a.d(b,{Z:()=>g});var d=a(4),e=a(6),f=["viewBox"];let g=function(a){var b=a.viewBox,c=(0,d.Z)(a,f);return c.viewBox=void 0===b?"0 0 16 16":b,(0,e.Z)("Git","M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z")(c)}},20(c,b,a){a.d(b,{Z:()=>g});var d=a(4),e=a(6),f=["viewBox","fill"];let g=function(a){var c=a.viewBox,g=a.fill,b=(0,d.Z)(a,f);return b.viewBox=void 0===c?"0 0 3200 3200":c,b.fill=void 0===g?"#b93131":g,(0,e.Z)("Npm","M269 3186 c-99 -27 -193 -106 -243 -205 l-26 -50 0 -1332 0 -1331 31 -59 c40 -75 102 -132 187 -172 l67 -32 1255 -3 c911 -2 1271 0 1315 8 119 23 224 102 282 211 l28 54 0 1325 0 1325 -29 54 c-42 80 -128 163 -201 192 l-60 24 -1280 2 c-992 1 -1290 -1 -1326 -11z m1311 -1386 l0 -600 200 0 200 0 0 600 0 600 200 0 200 0 0 -800 0 -800 -800 0 -800 0 0 800 0 800 400 0 400 0 0 -600z")(b)}},6(c,b,a){a.d(b,{Z:()=>j});var d=a(2),e=a(4),f=a(28),g=a(25),h=a(0),i=["type","children"];let j=function(b,c){var a=function(a){var j=a.type,k=a.children,l=(0,e.Z)(a,i);return(0,h.jsxs)(f.Z,(0,d.Z)((0,d.Z)({},l),{},{"data-name":b,children:[(0,h.jsx)(g.Z,{d:c[void 0===j?null:j]||c["_"]||c}),k]}))};return a.displayName=b,a}},36(c,b,a){a.d(b,{Z:()=>i});var d,e=a(1),f=a(23),g=a(27),h=a(13);let i=function(a){var b=a.pageName,c=a.tplProps;(0,e.useEffect)(function(){return setTimeout(function(){(0,g.Ns)({params:{activeMenu:b}}),(0,f.WI)({tplProps:c,pageName:b})}),d||(d=1,(0,h.Bt)("ajaxGet",{url:"/data/env",ini:!0,disableCacheBusting:!0})),function(){(0,g.Ns)({params:{activeMenu:null}})}},[])}},393(f,c,a){a.r(c),a.d(c,{default:()=>ae});var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u=a(2),v=a(16),w=a(36),b=a(1),x=a(0),y=(0,b.lazy)(function(){return a.e(4).then(a.bind(a,243))}),z=[["a1","b1","c1"],["a2","b2","c2"],["a3","b3","c3"],["a4","b4","c4"],["a5","b5","c5"],["a6","b6","c6"]];let A=function(a){return(0,x.jsx)(y,{className:"grid",width:200,height:100,rows:z,style:B.container})};var B={container:{border:"1px solid #000"}},C=a(462),D=a(463),E=a(9),F=a(10),G=a(5),H=a(3),I=a(4),J=["rowIndex","columnIndex","columnKey"];let K=function(a){var b=a.rowIndex,c=a.columnIndex,d=a.columnKey,e=(0,I.Z)(a,J);return(0,x.jsx)(H.iX,(0,u.Z)((0,u.Z)({},e),{},{"data-row":b,"data-col":c||d}))};var L=["header","cell"];let M=function(c){var d=c.children,a=[],e=0;return(b.Children.forEach(d,function(c,f){if(c){var b=(0,u.Z)({atom:"th",key:f},c.props),d=b.header,g=(b.cell,(0,I.Z)(b,L));!d&&e++,a.push((0,H.J_)(d,{wrap:K,doCallFunction:!0})(g))}}),e===a.length)?null:(0,x.jsx)("thead",{children:(0,x.jsx)("tr",{children:a})})},N=function(a){var c=a.tr,d=void 0===c?K:c,e=a.rowCount,f=a.children,g=function(c){var a=[];return b.Children.forEach(f,function(b,d){if(b){var e=(0,H.J_)(b.props.cell,{wrap:K,doCallFunction:!0})({atom:"td",key:d,rowIndex:c,columnIndex:d});a.push(e)}}),a};return function(){for(var b=[],a=0,c=e;a<c;a++){var f=(0,H.J_)(d,{doCallFunction:!0})({atom:"tr",key:a,rowIndex:a},g(a));b.push(f)}return b.length?(0,x.jsx)("tbody",{children:b}):null}()},O=function(a){(0,H.$t)(["table"],"semantic");var e=a.className,f=a.style,b=a.singleLine,c=void 0!==b&&b,g=a.wrap,h=(0,H.Jx)(e,{single:c,line:c},"celled","table"),d=(0,x.jsxs)(H.iX,{atom:"table",className:h,style:f,children:[(0,x.jsx)(M,(0,u.Z)({},a)),(0,x.jsx)(N,(0,u.Z)({},a))]});return g?(0,x.jsx)(H.iX,{className:"table-wrap",style:P.wrap,children:d}):d};var P={wrap:{maxWidth:"100%",overflowX:"auto"}};let Q=function(a){var b=(0,G.ZP)(a,["rows"],[]);return a.rowsLocator&&(b=a.rowsLocator(b)),(0,x.jsx)(O,(0,u.Z)({rowCount:(0,G.ZP)(b,["length"])},a))},R=function(a){return null};var S=[["a1","b1","c1"],["a2","b2","c2"],["a3","b3","c3"],["a1","b1","c1"],["a2","b2","c2"],["a3","b3","c3"]],d=function(b){(0,E.Z)(a,b);var c=(0,F.Z)(a);function a(){return(0,C.Z)(this,a),c.apply(this,arguments)}return(0,D.Z)(a,[{key:"render",value:function(){return(0,x.jsxs)(Q,{rows:S,children:[(0,x.jsx)(R,{header:g||(g=(0,x.jsx)(K,{children:"h1"})),cell:function(a){var b=a.rowIndex,c=a.columnIndex;return S[b][c]}}),(0,x.jsx)(R,{header:h||(h=(0,x.jsx)(K,{children:"h2"})),cell:function(a){var b=a.rowIndex,c=a.columnIndex;return S[b][c]}}),(0,x.jsx)(R,{header:i||(i=(0,x.jsx)(K,{children:"h3"})),cell:function(a){var b=a.rowIndex;return a.columnIndex,S[b][2]}})]})}}]),a}(b.PureComponent);let T=d;var U=(0,b.lazy)(function(){return Promise.all([a.e(4),a.e(49)]).then(a.bind(a,419))}),V=[["a1","b1","c1"],["a2","b2","c2"],["a3","b3","c3"],["a1","b1","c1"],["a2","b2","c2"],["a3","b3","c3"]],W=function(a){return function(b){alert(a)}};let X=function(a){return(0,x.jsx)("div",{style:{width:"40%",height:150},children:(0,x.jsxs)(U,{rows:V,children:[(0,x.jsx)(R,{header:j||(j=(0,x.jsx)(K,{children:"h1"})),cell:function(a){var b=a.rowIndex,c=a.columnIndex,d=a.style;return(0,x.jsx)("div",{style:d,onClick:W(b),children:V[b][c]})}}),(0,x.jsx)(R,{header:k||(k=(0,x.jsx)(K,{children:"h2"})),cell:function(a){var b=a.rowIndex,c=a.columnIndex,d=a.style;return(0,x.jsx)("div",{style:d,onClick:W(b),children:V[b][c]})}}),(0,x.jsx)(R,{header:l||(l=(0,x.jsx)(K,{children:"h3"})),cell:function(a){var b=a.rowIndex,c=a.columnIndex,d=a.style;return(0,x.jsx)("div",{style:d,onClick:W(b),children:V[b][c]})}})]})})};var Y=(0,b.lazy)(function(){return a.e(21).then(a.bind(a,420))}),Z=[["a1","b1","c1"],["a2","b2","c2"],["a3","b3","c3"],["a4","b4","c4"],["a5","b5","c5"],["a6","b6","c6"]];let $=function(a){return(0,x.jsx)("div",{style:{width:350},children:(0,x.jsxs)(Y,{rows:Z,getColWidth:function(){return 150},height:150,children:[(0,x.jsx)(R,{header:m||(m=(0,x.jsx)(K,{children:"h1"})),cell:function(a){var b=a.rowIndex,c=a.columnKey;return Z[b][c]}}),(0,x.jsx)(R,{header:n||(n=(0,x.jsx)(K,{children:"h2"})),cell:function(a){var b=a.rowIndex,c=a.columnKey;return Z[b][c]}}),(0,x.jsx)(R,{header:o||(o=(0,x.jsx)(K,{children:"h3"})),cell:function(a){var b=a.rowIndex,c=a.columnKey;return Z[b][c]}})]})})};var _=a(472),aa=a(460),ab=a(27),e=function(b){(0,E.Z)(a,b);var c=(0,F.Z)(a);function a(){var d;(0,C.Z)(this,a);for(var e=arguments.length,f=new Array(e),b=0;b<e;b++)f[b]=arguments[b];return d=c.call.apply(c,[this].concat(f)),(0,aa.Z)((0,_.Z)(d),"handlePageChange",function(a){var b=a.begin;d.setState({begin:b})}),d}return(0,D.Z)(a,[{key:"render",value:function(){var a=(this.state||{}).begin;return(0,x.jsx)(ab.Wt,{style:ad.container,onPageChange:this.handlePageChange,total:500,begin:a})}}]),a}(b.PureComponent);let ac=e;var ad={container:{textAlign:"center"}};let ae=function(a){return(0,w.Z)((0,u.Z)((0,u.Z)({},a),{},{pageName:"List"})),(0,x.jsxs)(x.Fragment,{children:[p||(p=(0,x.jsx)(v.Z,{code:'import { lazy } from "react";\nimport { Cell, Column } from "pmvc_react_list";\nconst Table = lazy(() => import("pmvc_react_list/rv"));\n\nconst rows = [\n  ["a1", "b1", "c1"],\n  ["a2", "b2", "c2"],\n  ["a3", "b3", "c3"],\n  ["a1", "b1", "c1"],\n  ["a2", "b2", "c2"],\n  ["a3", "b3", "c3"],\n];\n\nconst handleClick = (rowIndex) => (ev) => {\n  alert(rowIndex);\n};\n\nconst ReactVirtualizedTableListExample = (props) => (\n  <div style={{ width: "40%", height: 150 }}>\n    <Table rows={rows}>\n      <Column\n        header={<Cell>h1</Cell>}\n        cell={({ rowIndex, columnIndex, style }) => (\n          <div style={style} onClick={handleClick(rowIndex)}>\n            {rows[rowIndex][columnIndex]}\n          </div>\n        )}\n      />\n      <Column\n        header={<Cell>h2</Cell>}\n        cell={({ rowIndex, columnIndex, style }) => (\n          <div style={style} onClick={handleClick(rowIndex)}>\n            {rows[rowIndex][columnIndex]}\n          </div>\n        )}\n      />\n      <Column\n        header={<Cell>h3</Cell>}\n        cell={({ rowIndex, columnIndex, style }) => (\n          <div style={style} onClick={handleClick(rowIndex)}>\n            {rows[rowIndex][columnIndex]}\n          </div>\n        )}\n      />\n    </Table>\n  </div>\n);\n\nexport default ReactVirtualizedTableListExample;\n',header:"React Virgualized Table",children:(0,x.jsx)(X,{})})),q||(q=(0,x.jsx)(v.Z,{code:'import { lazy } from "react";\nconst Grid = lazy(() => import("pmvc_react_list/grid"));\n\nconst rows = [\n  ["a1", "b1", "c1"],\n  ["a2", "b2", "c2"],\n  ["a3", "b3", "c3"],\n  ["a4", "b4", "c4"],\n  ["a5", "b5", "c5"],\n  ["a6", "b6", "c6"],\n];\n\nconst GridListExample = (props) => {\n  const className = "grid"; // hack for disable const element\n  return (\n    <Grid\n      className={className}\n      width={200}\n      height={100}\n      rows={rows}\n      style={Styles.container}\n    />\n  );\n};\n\nexport default GridListExample;\n\nconst Styles = {\n  container: {\n    border: "1px solid #000",\n  },\n};\n',header:"Grid List",children:(0,x.jsx)(A,{})})),r||(r=(0,x.jsx)(v.Z,{code:'import React, { PureComponent } from "react";\n\nimport { Table, Cell, Column } from "pmvc_react_list";\n\nconst rows = [\n  ["a1", "b1", "c1"],\n  ["a2", "b2", "c2"],\n  ["a3", "b3", "c3"],\n  ["a1", "b1", "c1"],\n  ["a2", "b2", "c2"],\n  ["a3", "b3", "c3"],\n];\n\nclass HtmlTableListExample extends PureComponent {\n  render() {\n    return (\n      <Table rows={rows}>\n        <Column\n          header={<Cell>h1</Cell>}\n          cell={({ rowIndex, columnIndex }) => {\n            return rows[rowIndex][columnIndex];\n          }}\n        />\n        <Column\n          header={<Cell>h2</Cell>}\n          cell={({ rowIndex, columnIndex }) => {\n            return rows[rowIndex][columnIndex];\n          }}\n        />\n        <Column\n          header={<Cell>h3</Cell>}\n          cell={({ rowIndex, columnIndex }) => {\n            return rows[rowIndex][2];\n          }}\n        />\n      </Table>\n    );\n  }\n}\n\nexport default HtmlTableListExample;\n\nconst Styles = {\n  col: {\n    height: 40,\n  },\n};\n',header:"Html Table",children:(0,x.jsx)(T,{})})),s||(s=(0,x.jsx)(v.Z,{code:'import React, { lazy } from "react";\n\nimport { Cell, Column } from "pmvc_react_list";\nconst Table = lazy(() => import("pmvc_react_list/fixedDataTable"));\n\nconst rows = [\n  ["a1", "b1", "c1"],\n  ["a2", "b2", "c2"],\n  ["a3", "b3", "c3"],\n  ["a4", "b4", "c4"],\n  ["a5", "b5", "c5"],\n  ["a6", "b6", "c6"],\n];\n\nconst FixedDataTableListExample = (props) => (\n  <div style={{ width: 350 }}>\n    <Table rows={rows} getColWidth={() => 150} height={150}>\n      <Column\n        header={<Cell>h1</Cell>}\n        cell={({ rowIndex, columnKey: columnIndex }) => {\n          return rows[rowIndex][columnIndex];\n        }}\n      />\n      <Column\n        header={<Cell>h2</Cell>}\n        cell={({ rowIndex, columnKey: columnIndex }) => {\n          return rows[rowIndex][columnIndex];\n        }}\n      />\n      <Column\n        header={<Cell>h3</Cell>}\n        cell={({ rowIndex, columnKey: columnIndex }) => {\n          return rows[rowIndex][columnIndex];\n        }}\n      />\n    </Table>\n  </div>\n);\n\nexport default FixedDataTableListExample;\n',header:"Fixed Data Table",children:(0,x.jsx)($,{})})),t||(t=(0,x.jsx)(v.Z,{code:'import React, { PureComponent } from "react";\n\nimport { PaginationController } from "organism-react-navigation";\n\nclass PaginationExample extends PureComponent {\n  handlePageChange = ({ begin }) => {\n    this.setState({ begin });\n  };\n\n  render() {\n    const { begin } = this.state || {};\n    return (\n      <PaginationController\n        style={Styles.container}\n        onPageChange={this.handlePageChange}\n        total={500}\n        begin={begin}\n      />\n    );\n  }\n}\n\nexport default PaginationExample;\n\nconst Styles = {\n  container: {\n    textAlign: "center",\n  },\n};\n',header:"Pagination",children:(0,x.jsx)(ac,{})}))]})}}}])