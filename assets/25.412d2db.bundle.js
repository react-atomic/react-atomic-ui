"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25],{522(c,b,a){a.r(b),a.d(b,{default:()=>I});var d=a(2);let e=function(e){var c=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{},a=e.BlockManager,b={category:c.categoryLabel};c.resetBlocks&&a.getAll().reset(),a.add("mj-1-column",(0,d.Z)({label:"1 Column",content:"<mj-section>\n        <mj-column><mj-text>Content 1</mj-text></mj-column>\n      </mj-section>",attributes:{class:"gjs-fonts gjs-f-b1"}},b)),a.add("mj-2-columns",(0,d.Z)({label:"2 Columns",content:"<mj-section>\n        <mj-column><mj-text>Content 1</mj-text></mj-column>\n        <mj-column><mj-text>Content 2</mj-text></mj-column>\n      </mj-section>",attributes:{class:"gjs-fonts gjs-f-b2"}},b)),a.add("mj-3-columns",(0,d.Z)({label:"3 Columns",content:"<mj-section>\n        <mj-column><mj-text>Content 1</mj-text></mj-column>\n        <mj-column><mj-text>Content 2</mj-text></mj-column>\n        <mj-column><mj-text>Content 3</mj-text></mj-column>\n      </mj-section>",attributes:{class:"gjs-fonts gjs-f-b3"}},b)),a.add("mj-text",(0,d.Z)({label:"Text",content:"<mj-text>Insert text here</mj-text>",attributes:{class:"gjs-fonts gjs-f-text"}},b)),a.add("mj-button",(0,d.Z)({label:"Button",content:"<mj-button>Button</mj-button>",attributes:{class:"gjs-fonts gjs-f-button"}},b)),a.add("mj-image",(0,d.Z)({label:"Image",content:'<mj-image src="http://placehold.it/350x250/78c5d6/fff">',attributes:{class:"fa fa-image"}},b)),a.add("mj-divider",(0,d.Z)({label:"Divider",content:"<mj-divider/>",attributes:{class:"gjs-fonts gjs-f-divider"}},b)),a.add("mj-social-group",(0,d.Z)({label:"Group Social",content:'<mj-social font-size="12px" icon-size="24px" border-radius="12px" mode="horizontal">\n        <mj-social-element name="facebook"></mj-social-element>\n        <mj-social-element name="google"></mj-social-element>\n        <mj-social-element name="twitter"></mj-social-element>\n      </mj-social>',attributes:{class:"fa fa-share-alt"}},b)),a.add("mj-social-element",(0,d.Z)({label:"Social Element",content:'<mj-social-element name="facebook" />',attributes:{class:"fa fa-share-alt"}},b)),a.add("mj-spacer",(0,d.Z)({label:"Spacer",content:"<mj-spacer/>",attributes:{class:"fa fa-arrows-v"}},b)),a.add("mj-navbar",(0,d.Z)({label:"NavBar",content:"<mj-navbar>\n    <mj-navbar-link>Getting started</mj-navbar-link>\n    <mj-navbar-link>Try it live</mj-navbar-link>\n    <mj-navbar-link>Templates</mj-navbar-link>\n    <mj-navbar-link>Components</mj-navbar-link>\n    </mj-navbar>",attributes:{class:"fa fa-bars"}},b)),a.add("mj-navbar-link",(0,d.Z)({label:"NavBar Link",content:"<mj-navbar-link>Link 1</mj-navbar-link>",attributes:{class:"gjs-fonts gjs-f-button"}},b))};var f=a(40),g=a(39);let h=function(d,b){var c=b.dc,a="mjml";c.addType(a,{isComponent:z(a),model:{defaults:{droppable:"[data-gjs-type=mj-head], [data-gjs-type=mj-body]",draggable:!1}}})},i=function(e,b){var c=b.dc,a="mj-head",d=["mj-preview","mj-attributes","mj-style","mj-font","mj-title"].map(function(a){return"[data-gjs-type=".concat(a,"]")}).join(", ");c.addType(a,{isComponent:z(a),model:{defaults:{droppable:d,draggable:!1}}})},j=function(h,a){var c=a.dc,e=a.coreMjmlModel,f=a.coreMjmlView,i=a.sandboxEl,b="mj-style";c.addType(b,{isComponent:z(b),model:(0,d.Z)((0,d.Z)({},e),{},{defaults:{draggable:"[data-gjs-type=mj-head]"}}),view:(0,d.Z)((0,d.Z)({},f),{},{tagName:"style",getMjmlTemplate:function(){return{start:"<mjml><mj-head>",end:"</mj-head></mjml>"}},getTemplateFromEl:function(a){return a.querySelector("style").innerHTML},renderStyle:function(){},getTemplateFromMjml:function(){var b=this.getMjmlTemplate(),c=this.getInnerMjmlTemplate(),a=(0,g.ZP)("".concat(b.start,"\n          ").concat(c.start).concat(c.end).concat(b.end)).html,d=a.indexOf("<head>")+6,e=a.indexOf("</head>");return a=a.substring(d,e).trim(),i.innerHTML=a,this.getTemplateFromEl(i)}})})},k=function(h,a){var c=a.dc,e=a.coreMjmlModel,f=a.coreMjmlView,i=a.sandboxEl,b="mj-font";c.addType(b,{isComponent:z(b),model:(0,d.Z)((0,d.Z)({},e),{},{defaults:{draggable:"[data-gjs-type=mj-head]",void:!0}}),view:(0,d.Z)((0,d.Z)({},f),{},{tagName:"style",getMjmlTemplate:function(){var a=this.model.get("attributes").name;return{start:"<mjml><mj-head>",end:'</mj-head><mj-body><mj-text font-family="'.concat(a,'"></mj-text></mj-body></mjml>')}},getTemplateFromEl:function(a){return a.querySelectorAll("style")[1].innerHTML},renderStyle:function(){},renderContent:function(){},getTemplateFromMjml:function(){var b=this.getMjmlTemplate(),c=this.getInnerMjmlTemplate(),a=(0,g.ZP)("".concat(b.start,"\n          ").concat(c.start).concat(c.end).concat(b.end)).html,d=a.indexOf("<head>")+6,e=a.indexOf("</head>");return a=a.substring(d,e).trim(),i.innerHTML=a,this.getTemplateFromEl(i)}})})},l=function(h,a){var c=a.dc,e=a.coreMjmlModel,f=a.coreMjmlView,b="mj-body",g=["mj-section"].map(function(a){return"[data-gjs-type=".concat(a,"]")}).join(", ");c.addType(b,{isComponent:z(b),model:(0,d.Z)((0,d.Z)({},e),{},{defaults:{droppable:g,draggable:!1,copyable:!1,removable:!1,"style-default":{width:"600px"},stylable:["width","background-color"]}}),view:(0,d.Z)((0,d.Z)({},f),{},{tagName:"div",attributes:{style:"width: 100%; min-height: 100%","data-type":"mj-body"},getChildrenSelector:function(){return"div"},getInnerMjmlTemplate:function(){var a=f.getInnerMjmlTemplate.call(this);return{start:"".concat(a.start,"<mj-section></mj-section>"),end:"".concat(a.end)}},renderStyle:function(){this.el.style=this.el.getAttribute("style")+this.attributes.style},renderContent:function(){this.getChildrenContainer().innerHTML=this.model.get("content")},rerender:function(){f.rerender.call(this),this.model.components().models.forEach(function(a){"mj-section"==a.attributes.type&&a.view.rerender()})}})})},m=function(g,a){var c=a.dc,e=a.coreMjmlModel,f=a.coreMjmlView,b="mj-wrapper";c.addType(b,{isComponent:z(b),model:(0,d.Z)((0,d.Z)({},e),{},{defaults:{name:"Wrapper",draggable:"[data-gjs-type=mj-body]",droppable:"[data-gjs-type=mj-wrapper]"}}),view:(0,d.Z)((0,d.Z)({},f),{},{tagName:"div",attributes:{style:"pointer-events: all; display: table; width: 100%"},getMjmlTemplate:function(){return{start:"<mjml><mj-body>",end:"</mj-body></mjml>"}},getChildrenSelector:function(){return"table tr td"}})})},n=function(g,a){var c=a.dc,e=a.coreMjmlModel,f=a.coreMjmlView,b="mj-section";c.addType(b,{isComponent:z(b),model:(0,d.Z)((0,d.Z)({},e),{},{defaults:{name:"Section",draggable:"[data-gjs-type=mj-body]",droppable:"[data-gjs-type=mj-column]","style-default":{"padding-top":"10px","padding-bottom":"10px","vertical-align":"top","text-align":"center"},stylable:["vertical-align","text-align","padding","padding-top","padding-left","padding-right","padding-bottom","background-color","background-url","background-repeat","background-size","border-radius","border-top-left-radius","border-top-right-radius","border-bottom-left-radius","border-bottom-right-radius","border","border-width","border-style","border-color"]}}),view:(0,d.Z)((0,d.Z)({},f),{},{tagName:"div",attributes:{style:"pointer-events: all;","data-type":"mj-section"},getMjmlTemplate:function(){var a=this.model.parent().view;if(!a.getInnerMjmlTemplate)return{start:"<mjml><mj-body>",end:"</mj-body></mjml>"};var b=f.getInnerMjmlTemplate.call(a);return{start:"<mjml><mj-body>".concat(b.start),end:"".concat(b.end,"</mj-body></mjml>")}},getChildrenSelector:function(){return"table > tbody > tr > td"},init:function(){f.init.call(this),this.listenTo(this.model.get("components"),"add remove",this.render)}})})},o=function(g,a){var c=a.dc,e=a.coreMjmlModel,f=a.coreMjmlView,b="mj-group";c.addType(b,{isComponent:z(b),model:(0,d.Z)((0,d.Z)({},e),{},{defaults:{name:"Group",draggable:"[data-gjs-type=mj-section]",droppable:"[data-gjs-type=mj-column]"}}),view:(0,d.Z)((0,d.Z)({},f),{},{tagName:"div",attributes:{style:"pointer-events: all; display: table; width: 100%"},getMjmlTemplate:function(){return{start:"<mjml><mj-body>",end:"</mj-body></mjml>"}}})})},p=function(j,a){var e=a.dc,f=a.opt,h=a.coreMjmlModel,i=a.coreMjmlView,k=a.sandboxEl,b="mj-column",c=f.columnsPadding;e.addType(b,{isComponent:z(b),model:(0,d.Z)((0,d.Z)({},h),{},{defaults:{name:"Column",draggable:"[data-gjs-type=mj-section]",stylable:["background-color","vertical-align","width","border-radius","border-top-left-radius","border-top-right-radius","border-bottom-left-radius","border-bottom-right-radius","border","border-width","border-style","border-color"]}}),view:(0,d.Z)((0,d.Z)({},i),{},{tagName:"div",attributes:{style:"pointer-events: all;"+(c?"padding: ".concat(c,";"):"")},getTemplateFromMjml:function(){var c=this.getMjmlTemplate(),d=this.getInnerMjmlTemplate(),e=(0,g.ZP)("".concat(c.start,"\n          ").concat(d.start).concat(d.end).concat(c.end)).html,l=[];k.innerHTML=e,Array.from(k.querySelectorAll("style")).forEach(function(a){l.push(a.innerHTML)});var a=e.replace(/<body(.*)>/,"<body>"),m=a.indexOf("<body>")+6,n=a.indexOf("</body>");k.innerHTML=a.substring(m,n).trim();for(var f,h=this.getTemplateFromEl(k),i={},j=h.attributes,b=0,o=j.length;b<o;b++)i[(f=j[b]).name]=f.value;return{attributes:i,content:h.innerHTML,style:l.join(" ")}},render:function(){this.renderAttributes();var a=this.getTemplateFromMjml();return this.el.innerHTML=a.content,this.$el.attr(a.attributes),j.addComponents("<style>".concat(a.style,"</style>")),this.getChildrenContainer().innerHTML=this.model.get("content"),this.renderChildren(),this.renderStyle(),this},renderStyle:function(){this.el.style=this.el.getAttribute("style")+this.attributes.style},getMjmlTemplate:function(){var a=this.model.collection.length-1;a=a||0;var b=Array(a).fill("<mj-column></mj-column>").join("");return{start:"<mjml><mj-body><mj-section>",end:"".concat(b,"</mj-section></mj-body></mjml>")}},getTemplateFromEl:function(a){return a.firstChild.querySelector("div > table > tbody > tr > td > div")},getChildrenSelector:function(){return"table"}})})},q=function(g,a){var b=a.dc,c=a.coreMjmlModel,e=a.coreMjmlView,f="mj-text";b.addType(f,{extend:"text",extendFnView:["onActive","disableEditing"],isComponent:function(a){if(a.tagName===f.toUpperCase())return{type:f,content:a.innerHTML,components:[]}},model:(0,d.Z)((0,d.Z)({},c),{},{defaults:{name:"Text",draggable:"[data-gjs-type=mj-column]",highlightable:!1,stylable:["height","font-style","font-size","font-weight","font-family","color","line-height","letter-spacing","text-decoration","align","text-transform","padding","padding-top","padding-left","padding-right","padding-bottom","container-background-color"],"style-default":{"padding-top":"10px","padding-bottom":"10px","padding-right":"25px","padding-left":"25px","font-size":"13px","line-height":"22px",align:"left"}}}),view:(0,d.Z)((0,d.Z)({},e),{},{tagName:"tr",attributes:{style:"pointer-events: all; display: table; width: 100%"},getMjmlTemplate:function(){return{start:"<mjml><mj-body><mj-column>",end:"</mj-column></mj-body></mjml>"}},getTemplateFromEl:function(a){return a.querySelector("tr").innerHTML},getChildrenSelector:function(){return"td > div"},renderChildren:function(){e.renderChildren.call(this)},onActive:function(){this.getChildrenContainer().style.pointerEvents="all"},disableEditing:function(){this.getChildrenContainer().style.pointerEvents="none"}})})},r=function(g,a){var c=a.dc,e=a.coreMjmlModel,f=a.coreMjmlView,b="mj-button";c.addType(b,{isComponent:z(b),extend:"link",extendFnView:["onActive","disableEditing"],model:(0,d.Z)((0,d.Z)({},e),{},{defaults:{name:"Button",draggable:"[data-gjs-type=mj-column]",highlightable:!1,stylable:["width","height","background-color","container-background-color","font-style","font-size","font-weight","font-family","color","text-decoration","align","vertical-align","text-transform","padding","padding-top","padding-left","padding-right","padding-bottom","border-radius","border-top-left-radius","border-top-right-radius","border-bottom-left-radius","border-bottom-right-radius","border","border-width","border-style","border-color"],"style-default":{"background-color":"#414141","border-radius":"3px","font-size":"13px","font-weight":"400",color:"#ffffff","vertical-align":"middle","padding-bottom":"10px","padding-right":"25px","padding-left":"25px",align:"center"},traits:["href"]}}),view:(0,d.Z)((0,d.Z)({},f),{},{tagName:"tr",attributes:{style:"pointer-events: all; display: table; width: 100%"},getMjmlTemplate:function(){return{start:"<mjml><mj-body><mj-column>",end:"</mj-column></mj-body></mjml>"}},getTemplateFromEl:function(a){return a.querySelector("tr").innerHTML},getChildrenSelector:function(){return"a,p"},renderChildren:function(){f.renderChildren.call(this)},onActive:function(){this.getChildrenContainer().style.pointerEvents="all"},disableEditing:function(){this.getChildrenContainer().style.pointerEvents="none"}})})},s=function(g,a){var c=a.dc,e=a.coreMjmlModel,f=a.coreMjmlView,b="mj-image";c.addType(b,{isComponent:z(b),extend:"image",model:(0,d.Z)((0,d.Z)({},e),{},{defaults:{name:"Image",resizable:!1,highlightable:!1,draggable:"[data-gjs-type=mj-column],[data-gjs-type=mj-section]",stylable:["width","height","padding","padding-top","padding-left","padding-right","padding-bottom","border-radius","border-top-left-radius","border-top-right-radius","border-bottom-left-radius","border-bottom-right-radius","border","border-width","border-style","border-color","container-background-color","align"],"style-default":{"padding-top":"10px","padding-bottom":"10px","padding-right":"25px","padding-left":"25px",align:"center"},traits:["href","rel","alt","title"],void:!0}}),view:(0,d.Z)((0,d.Z)({},f),{},{tagName:"tr",attributes:{style:"pointer-events: all; display: table; width: 100%; user-select: none;"},getMjmlTemplate:function(){return{start:"<mjml><mj-body><mj-column>",end:"</mj-column></mj-body></mjml>"}},getTemplateFromEl:function(a){return a.querySelector("tr").innerHTML},getChildrenSelector:function(){return"img"}})})},t=function(g,a){var c=a.dc,e=a.coreMjmlModel,f=a.coreMjmlView,b="mj-social";c.addType(b,{isComponent:z(b),model:(0,d.Z)((0,d.Z)({},e),{},{defaults:{name:"Social",draggable:"[data-gjs-type=mj-column]",droppable:"[data-gjs-type=mj-social-element]",stylable:["icon-size","text-decoration","align","font-family","font-size","line-height","padding","padding-top","padding-left","padding-right","padding-bottom","border-radius","border-top-left-radius","border-top-right-radius","border-bottom-left-radius","border-bottom-right-radius","container-background-color","color"],"style-default":{align:"center","icon-size":"20px","font-size":"13px","line-height":"22px"},traits:[{type:"select",label:"Mode",name:"mode",options:[{value:"horizontal",name:"Horizontal"},{value:"vertical",name:"Vertical"}]}]}}),view:(0,d.Z)((0,d.Z)({},f),{},{tagName:"tr",attributes:{style:"pointer-events: all; display: table; width: 100%"},getMjmlTemplate:function(){return{start:"<mjml><mj-body><mj-column>",end:"</mj-column></mj-body></mjml>"}},getTemplateFromEl:function(a){return a.querySelector("tr").innerHTML},getChildrenSelector:function(){return"td"},rerender:function(){f.rerender.call(this),this.model.components().models.forEach(function(a){"mj-social-element"==a.attributes.type&&a.view.rerender()})},init:function(){f.init.call(this),this.listenTo(this.model.get("components"),"add remove",this.render)}})})},u=function(g,a){var c=a.dc,e=a.coreMjmlModel,f=a.coreMjmlView,b="mj-social-element";c.addType(b,{isComponent:z(b),model:(0,d.Z)((0,d.Z)({},e),{},JSON.parse('{"defaults":{"name":"SocialElement","draggable":"[data-gjs-type=mj-social]","stylable":["text-decoration","align","font-family","font-size","line-height","padding","padding-top","padding-left","padding-right","padding-bottom","border-radius","border-top-left-radius","border-top-right-radius","border-bottom-left-radius","border-bottom-right-radius","background-color","color"],"style-default":{"align":"center","icon-size":"20px","font-size":"13px","line-height":"22px"},"traits":[{"type":"select","label":"Icon","name":"name","options":[{"value":"","name":"Custom"},{"value":"facebook","name":"Facebook"},{"value":"twitter","name":"Twitter"},{"value":"google","name":"Google"},{"value":"instagram","name":"Instagram"},{"value":"web","name":"Web"},{"value":"youtube","name":"Youtube"},{"value":"pinterest","name":"Pinterest"},{"value":"linkedin","name":"Linkedin"},{"value":"snapchat","name":"Snapchat"},{"value":"vimeo","name":"Vimeo"},{"value":"tumblr","name":"Tumblr"},{"value":"github","name":"Github"},{"value":"soundcloud","name":"SoundCloud"},{"value":"medium","name":"Medium"},{"value":"dribbble","name":"Dribbble"},{"value":"xing","name":"Xing"}]},{"name":"src"},{"name":"href"}]}}')),view:(0,d.Z)((0,d.Z)({},f),{},{tagName:"table",attributes:{style:"pointer-events: all; float: none; display: inline-table;"},getMjmlTemplate:function(){var a=this.model.parent().view;if(!a.getInnerMjmlTemplate)return{start:"<mjml><mj-body><mj-column><mj-social>",end:"</mj-social></mj-column></mj-body></mjml"};var b=f.getInnerMjmlTemplate.call(a);return{start:"<mjml><mj-body><mj-column>".concat(b.start),end:"".concat(b.end,"</mj-column></mj-body></mjml>")}},getTemplateFromEl:function(a){return a.querySelector("tr > td > table").innerHTML},getChildrenSelector:function(){return"img"}})})},v=function(g,a){var c=a.dc,e=a.coreMjmlModel,f=a.coreMjmlView,b="mj-divider";c.addType(b,{isComponent:z(b),model:(0,d.Z)((0,d.Z)({},e),{},{defaults:{name:"Divider",draggable:"[data-gjs-type=mj-column]",droppable:!1,"style-default":{width:"100%","border-width":"4px","border-style":"solid","border-color":"#000000","padding-top":"10px","padding-bottom":"10px","padding-right":"25px","padding-left":"25px"},stylable:["padding","padding-top","padding-left","padding-right","padding-bottom","width","container-background-color","border-detached","border-width","border-style","border-color"]}}),view:(0,d.Z)((0,d.Z)({},f),{},{tagName:"tr",attributes:{style:"pointer-events: all; display: table; width: 100%; user-select: none;"},getMjmlTemplate:function(){return{start:"<mjml><mj-body><mj-column>",end:"</mj-column></mj-body></mjml>"}},getTemplateFromEl:function(a){return a.querySelector("tr").innerHTML},getChildrenSelector:function(){return"p"}})})},w=function(g,a){var c=a.dc,e=a.coreMjmlModel,f=a.coreMjmlView,b="mj-spacer";c.addType(b,{isComponent:z(b),model:(0,d.Z)((0,d.Z)({},e),{},{defaults:{name:"Spacer",draggable:"[data-gjs-type=mj-column]",droppable:!1,"style-default":{height:"20px"},stylable:["height","container-background-color"],void:!0}}),view:(0,d.Z)((0,d.Z)({},f),{},{tagName:"tr",attributes:{style:"pointer-events: all; display: table; width: 100%;user-select: none;"},getMjmlTemplate:function(){return{start:"<mjml><mj-body><mj-column>",end:"</mj-column></mj-body></mjml"}},getTemplateFromEl:function(a){return a.querySelector("tr").innerHTML},getChildrenSelector:function(){return"td"},renderChildren:function(){f.renderChildren.call(this)}})})},x=function(h,a){var c=a.dc,e=a.coreMjmlModel,f=a.coreMjmlView,i=a.sandboxEl,b="mj-navbar";c.addType(b,{isComponent:z(b),model:(0,d.Z)((0,d.Z)({},e),{},{defaults:{name:"NavBar",draggable:"[data-gjs-type=mj-column]",droppable:"[data-gjs-type=mj-navbar-link]","style-default":{},stylable:[],traits:[{type:"select",label:"Hamburger",name:"hamburger",options:[{value:"hamburger",name:"ON"},{value:"",name:"OFF"}]}]}}),view:(0,d.Z)((0,d.Z)({},f),{},{tagName:"tr",attributes:{style:"pointer-events: all; display: table; width: 100%"},init:function(){f.init.call(this),this.listenTo(this.model.get("components"),"add remove",this.render)},getTemplateFromMjml:function(){var c=this.getMjmlTemplate(),d=this.getInnerMjmlTemplate(),e=(0,g.ZP)("".concat(c.start,"\n          ").concat(d.start).concat(d.end).concat(c.end)).html,l=[];i.innerHTML=e,Array.from(i.querySelectorAll("style")).forEach(function(a){l.push(a.innerHTML)});var a=e.replace(/<body(.*)>/,"<body>"),m=a.indexOf("<body>")+6,n=a.indexOf("</body>");i.innerHTML=a.substring(m,n).trim();for(var f,h=this.getTemplateFromEl(i),j={},k=h.attributes,b=0,o=k.length;b<o;b++)j[(f=k[b]).name]=f.value;return{attributes:j,content:h.innerHTML,style:l.join(" ")}},render:function(){this.renderAttributes();var a=this.getTemplateFromMjml();return this.el.innerHTML=a.content,this.$el.attr(a.attributes),h.addComponents("<style>".concat(a.style,"</style>")),this.getChildrenContainer().innerHTML=this.model.get("content"),this.renderChildren(),this.renderStyle(),this},getMjmlTemplate:function(){return{start:"<mjml><mj-body><mj-column>",end:"</mj-column></mj-body></mjml>"}},getTemplateFromEl:function(a){return a.firstChild.querySelector("tr")},getChildrenSelector:function(){return"div.mj-inline-links"},rerender:function(){f.rerender.call(this),this.model.components().models.forEach(function(a){"mj-navbar-link"==a.attributes.type&&a.view.rerender()})}})})},y=function(g,a){var c=a.dc,e=a.coreMjmlModel,f=a.coreMjmlView,b="mj-navbar-link";c.addType(b,{isComponent:z(b),extend:"link",extendFnView:["onActive","disableEditing"],model:(0,d.Z)((0,d.Z)({},e),{},{defaults:{name:"NavBarLink",draggable:"[data-gjs-type=mj-navbar]",highlightable:!1,stylable:["font-style","font-size","font-weight","font-family","color","text-decoration","text-transform","padding","padding-top","padding-left","padding-right","padding-bottom"],"style-default":{"font-size":"13px","padding-top":"25px","padding-bottom":"25px","padding-left":"10px","padding-right":"10px","text-transform":"uppercase"},traits:["href"]}}),view:(0,d.Z)((0,d.Z)({},f),{},{tagName:"a",attributes:{style:"pointer-events: all; float: none; display: inline-table;"},getMjmlTemplate:function(){var a=this.model.parent().view;if(!a.getInnerMjmlTemplate)return{start:"<mjml><mj-body><mj-column><mj-navbar>",end:"</mj-navbar></mj-column></mj-body></mjml"};var b=f.getInnerMjmlTemplate.call(a);return{start:"<mjml><mj-body><mj-column>".concat(b.start),end:"".concat(b.end,"</mj-column></mj-body></mjml>")}},getTemplateFromEl:function(a){return a.querySelector("div").innerHTML},getChildrenSelector:function(){return"a,p"},renderChildren:function(){f.renderChildren.call(this)},onActive:function(){this.getChildrenContainer().style.pointerEvents="all"},disableEditing:function(){this.getChildrenContainer().style.pointerEvents="none"}})})};var z=function(a){return function(b){return b.tagName===a.toUpperCase()}};let A=function(a){var C=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{},c=a.DomComponents,e=c.getType("default"),z=c.getType("text"),A=c.getType("image"),B=c.getType("link"),D=e.model,E=e.view,F=z.model,G=z.view,H=A.model,I=A.view,J=B.model,K=B.view,M=c.ComponentsView,L=document.createElement("div"),b={dc:c,coreMjmlModel:{init:function(){var a=(0,d.Z)({},this.get("attributes")),c=(0,d.Z)({},this.get("style"));for(var b in c)b in a||(a[b]=c[b]);this.set("attributes",a),this.set("style",a),this.listenTo(this,"change:style",this.handleStyleChange)},handleStyleChange:function(){var a=(0,d.Z)((0,d.Z)({},this.get("attributes")),this.get("style"));this.set("attributes",a)},getMjmlAttributes:function(){var a=this.get("attributes")||{};delete a.style;var b=this.get("src");return b&&(a.src=b),a},getAttrToHTML:function(){var a=(0,d.Z)({},this.get("attributes")),e=(0,d.Z)({},this.get("style-default"));for(var b in delete a.style,a){var c=a[b];c&&c===e[b]&&delete a[b]}return a},toHTML:function(){var a="",c=this.get("tagName"),d=this.get("void"),e="",g=this.getAttrToHTML();for(var h in g){var b=g[h];e+=void 0!==(0,f.Z)(b)&&""!==b?" "+h+'="'+b+'"':""}return a+="<".concat(c).concat(e).concat(d?"/":"",">")+this.get("content"),this.get("components").each(function(b){a+=b.toHTML()}),d||(a+="</".concat(c,">")),a}},coreMjmlView:{init:function(){this.stopListening(this.model,"change:style"),this.listenTo(this.model,"change:attributes change:src",this.rerender)},rerender:function(){this.render(null,null,{},1)},getMjmlTemplate:function(){return{start:"<mjml>",end:"</mjml>"}},getInnerMjmlTemplate:function(){var b=this.model,c=b.get("tagName"),d=b.getMjmlAttributes(),e="";for(var g in d){var a=d[g];e+=void 0!==(0,f.Z)(a)&&""!==a?" "+g+'="'+a+'"':""}return{start:"<".concat(c).concat(e,">"),end:"</".concat(c,">")}},getTemplateFromEl:function(a){return a&&a.firstChild&&a.firstChild.innerHTML},getTemplateFromMjml:function(){var b=this.getMjmlTemplate(),c=this.getInnerMjmlTemplate(),d=b.start+c.start+c.end+b.end,a=(0,g.ZP)(d).html,e=(a=a.replace(/<body(.*)>/,"<body>")).indexOf("<body>")+6,f=a.indexOf("</body>");return a=a.substring(e,f).trim(),L.innerHTML=a,this.getTemplateFromEl(L)},renderChildren:function(d){var a=this.getChildrenContainer();d?this.componentsView.parentEl=a:(this.componentsView=new M({collection:this.model.get("components"),config:this.config,defaultTypes:this.opts.defaultTypes,componentTypes:this.opts.componentTypes}),this.childNodes=this.componentsView.render(a).el.childNodes);for(var b=Array.prototype.slice.call(this.childNodes),c=0,e=b.length;c<e;c++)a.appendChild(b.shift());a!==this.el&&!function c(b){Array.prototype.slice.call(b.children).forEach(function(b){b.style["pointer-events"]="none",a!==b&&c(b)})}(this.el)},renderStyle:function(){this.el.style=this.attributes.style},renderContent:function(){var a=this.model.get("content");a&&(this.getChildrenContainer().innerHTML=a)},render:function(b,c,d,a){return this.renderAttributes(),this.el.innerHTML=this.getTemplateFromMjml(),this.renderContent(),this.renderChildren(a),this.childNodes=this.getChildrenContainer().childNodes,this.renderStyle(),this}},opt:C,sandboxEl:L,defaultModel:D,defaultView:E,textModel:F,textView:G,linkModel:J,linkView:K,imageModel:H,imageView:I};h(a,b),i(a,b),j(a,b),k(a,b),l(a,b),m(a,b),n(a,b),o(a,b),p(a,b),r(a,b),q(a,b),s(a,b),t(a,b),u(a,b),v(a,b),w(a,b),x(a,b),y(a,b)},B=function(){var a=function b(a,c){a.each(function(a){if("image"===a.get("type")){var d=a.get("src");c?"##"===d&&a.set("src",a.get("src_bkp")):"##"!==d&&(a.set("src_bkp",a.get("src")),a.set("src","##"))}b(a.get("components"),c)})};return{run:function(b){a(b.getComponents())},stop:function(b){a(b.getComponents(),1)}}},C=function(b){var c=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{},e=b.getConfig(),f=b.CodeManager.getViewer("CodeMirror").clone(),a=document.createElement("button"),g=document.createElement("div"),d=e.stylePrefix||"";return a.innerHTML=c.modalBtnImport,a.className="".concat(d,"btn-prim ").concat(d,"btn-import"),a.onclick=function(){var a=f.editor.getValue();b.DomComponents.getWrapper().set("content",""),b.setComponents(a.trim()),b.Modal.close()},f.set({codeName:"htmlmixed",theme:c.codeViewerTheme,readOnly:0}),{run:function(l){var i=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{},b=l.Modal,e=f.editor;if(b.setTitle(c.modalTitleImport),!e){var j=document.createElement("textarea"),k=c.modalLabelImport;if(k){var h=document.createElement("div");h.className=d+"import-label",h.innerHTML=k,g.appendChild(h)}g.appendChild(j),g.appendChild(a),f.init(j),e=f.editor}b.setContent(""),b.setContent(g),f.setContent(c.importPlaceholder),b.open(),e.refresh(),i.set&&i.set("active",0)}}},D=function(a){var f,h,b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{},i=a.getConfig(),c=a.CodeManager.getViewer("CodeMirror").clone(),d=document.createElement("div"),e=a.Commands;d.style="display: flex; justify-content: space-between;",c.set({codeName:"htmlmixed",theme:b.codeViewerTheme});var j=function(){var c=b.preMjml+a.getHtml()+b.postMjml;return(0,g.ZP)(c)};return e.add("mjml-get-code",{run:function(){return j()}}),{buildEditor:function(g){var e=a.CodeManager,h=e.getViewer("CodeMirror").clone(),f=document.createElement("textarea"),c=document.createElement("div");c.style="flex:1 0 auto; padding:5px; max-width:50%; box-sizing:border-box;";var d=h.set({label:g,codeName:"htmlmixed",theme:b.codeViewerTheme,input:f}),j=new e.EditorView({model:d,config:i}).render().el;return c.appendChild(j),d.init(f),{codeEditor:d,el:c}},run:function(e){var g=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{},a=e.Modal;if(a.setTitle(b.modalTitleExport),a.setContent(""),a.setContent(d),!f){var i=this.buildEditor("MJML");f=i.codeEditor,d.appendChild(i.el)}if(!h){var k=this.buildEditor("HTML");h=k.codeEditor,d.appendChild(k.el)}if(a.open(),f&&(f.setContent(b.preMjml+e.getHtml()+b.postMjml),f.editor.refresh()),h){var c=j();c.errors.length&&c.errors.forEach(function(a){console.warn(a.formattedMessage)}),h.setContent(c.html),h.editor.refresh()}g.set&&g.set("active",0)}}},E=function(c){var b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{},a=c.Commands,d=b.overwriteExport?"export-template":"mjml-export";a.add("mjml-import",C(c,b)),a.add(d,D(c,b)),a.add(b.cmdTglImages,B(b)),a.add("undo",{run:function(a,b){b.set("active",0),a.UndoManager.undo(1)}}),a.add("redo",{run:function(a,b){b.set("active",0),a.UndoManager.redo(1)}}),a.add("set-device-desktop",{run:function(a){a.setDevice("Desktop")}}),a.add("set-device-tablet",{run:function(a){a.setDevice("Tablet")}}),a.add("set-device-mobile",{run:function(a){a.setDevice("Mobile portrait")}})};var F=a(523);let G=function(b){var c=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{},d="title",m="data-tooltip-pos",a=b.Panels,e=a.getPanel("options"),f=a.getPanel("options"),g=function(a){a.each(function(a){var b=a.get("attributes");b[m]="bottom",a.set("attributes",b)})};if(a.addButton("options",{id:"mjml-import",className:"fa fa-download",command:"mjml-import"}),e){var h=e.get("buttons");h.each(function(a){var b=a.get("attributes");b[m]="bottom",a.set("attributes",b)});var i=a.addButton("options","preview");i&&h.remove(i)}if(f){var j=f.get("buttons");j.add([{id:"undo",className:"fa fa-undo",command:"undo",attributes:(0,F.Z)({},d,c.cmdBtnUndoLabel)},{id:"redo",className:"fa fa-repeat",command:"redo",attributes:(0,F.Z)({},d,c.cmdBtnRedoLabel)}]),g(j)}b.getConfig().showDevices=0;var k=a.addPanel({id:"devices-c"}),l=k.get("buttons");k.get("buttons").add([{id:"deviceDesktop",command:"set-device-desktop",className:"fa fa-desktop"},{id:"deviceTablet",command:"set-device-tablet",className:"fa fa-tablet"},{id:"deviceMobile",command:"set-device-mobile",className:"fa fa-mobile"}]),g(l)},H=function(a){var b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{};if(b.resetStyleManager){var c=a.StyleManager.getSectors();a.on("load",function(){c.reset(),c.add(JSON.parse('[{"name":"Dimension","open":false,"buildProps":["width","height","max-width","min-height","margin","padding"],"properties":[{"property":"margin","properties":[{"name":"Top","property":"margin-top"},{"name":"Right","property":"margin-right"},{"name":"Bottom","property":"margin-bottom"},{"name":"Left","property":"margin-left"}]},{"property":"padding","detached":true,"properties":[{"name":"Top","property":"padding-top"},{"name":"Right","property":"padding-right"},{"name":"Bottom","property":"padding-bottom"},{"name":"Left","property":"padding-left"}]},{"property":"icon-size","type":"integer","defaults":"20px","units":["px","%"]}]},{"name":"Typography","open":false,"buildProps":["font-family","font-size","font-weight","letter-spacing","color","line-height","text-align","align","text-decoration"],"properties":[{"name":"Font","property":"font-family"},{"name":"Weight","property":"font-weight"},{"name":"Font color","property":"color"},{"property":"text-align","type":"radio","defaults":"left","list":[{"value":"left","name":"Left","className":"fa fa-align-left"},{"value":"center","name":"Center","className":"fa fa-align-center"},{"value":"right","name":"Right","className":"fa fa-align-right"},{"value":"justify","name":"Justify","className":"fa fa-align-justify"}]},{"property":"align","type":"radio","defaults":"left","list":[{"value":"left","name":"Left","className":"fa fa-align-left"},{"value":"center","name":"Center","className":"fa fa-align-center"},{"value":"right","name":"Right","className":"fa fa-align-right"},{"value":"justify","name":"Justify","className":"fa fa-align-justify"}]},{"property":"text-decoration","type":"radio","defaults":"none","list":[{"value":"none","name":"None","className":"fa fa-times"},{"value":"underline","name":"underline","className":"fa fa-underline"},{"value":"line-through","name":"Line-through","className":"fa fa-strikethrough"}]}]},{"name":"Decorations","open":false,"buildProps":["background-color","container-background-color","background-url","background-repeat","background-size","border-radius","border"],"properties":[{"name":"Background color","property":"container-background-color","type":"color"},{"property":"background-url","type":"file"},{"property":"border-radius","properties":[{"name":"Top","property":"border-top-left-radius"},{"name":"Right","property":"border-top-right-radius"},{"name":"Bottom","property":"border-bottom-left-radius"},{"name":"Left","property":"border-bottom-right-radius"}]},{"property":"border-detached","name":"Border detached","type":"composite","detached":true,"properties":[{"name":"Width","property":"border-width","type":"integer"},{"name":"Style","property":"border-style","type":"select","list":[{"value":"none"},{"value":"solid"},{"value":"dotted"},{"value":"dashed"},{"value":"double"},{"value":"groove"},{"value":"ridge"},{"value":"inset"},{"value":"outset"}]},{"name":"Color","property":"border-color","type":"color"}]}]}]'))})}},I=function(c){var f=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{},a=c.getConfig(),g=(0,d.Z)({editor:c,cmdBtnMoveLabel:"Move",cmdBtnUndoLabel:"Undo",cmdBtnRedoLabel:"Redo",cmdBtnDesktopLabel:"Desktop",cmdBtnTabletLabel:"Tablet",cmdBtnMobileLabel:"Mobile",expTplBtnTitle:"View Code",fullScrBtnTitle:"FullScreen",swichtVwBtnTitle:"View Components",defaultTemplate:"",categoryLabel:"",codeViewerTheme:"hopscotch",importPlaceholder:"",modalTitleImport:"Import MJML",modalBtnImport:"Import",modalLabelImport:"",modalTitleExport:"Export MJML",modalLabelExport:"",overwriteExport:1,preMjml:"",postMjml:"",exportOnly:"",resetBlocks:1,resetStyleManager:1,columnsPadding:"10px 0"},f);if(a.devicePreviewMode=1,a.forceClass=0,a.devicePreviewMode=1,a.avoidInlineStyle=0,[e,A,E,G,H].forEach(function(a){return a(c,g)}),g.resetDevices){var b=c.DeviceManager;b.getAll().reset(),b.add("Desktop",""),b.add("Mobile","320px"),b.add("Tablet","820px")}}}}])