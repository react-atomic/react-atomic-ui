/*jslint browser: true*/
'use strict';

var React                  = require('react');
var assign                 = require("react/lib/Object.assign");
var ExecutionEnvironment   = require('react/lib/ExecutionEnvironment');
var Style                  = require('./Style');
var stylesToCSS            = require('./stylesToCSS');
var styleComponent         = require('./styleComponent');
var ApplyStyle             = require('./applyStyles');
var Store                  = require('./store.js');



var styles = [];
var newStyles = [];
var counter = 0;

function genClassName() {
  counter += 1;
  return 'c' + counter + '_';
}

function createStyle(props, selector, className) {
  className = className || genClassName();

  var style = {};

  for (var key in props) {
    if (!props.hasOwnProperty(key)) {
      continue;
    }
    style[key] = props[key];
  }

  var styleDecl = new Style(style, className, selector);
  styles.push(styleDecl);
  newStyles.push(styleDecl);
  return styleDecl;
}


function buildProps(props){
    var newStyleProps = {
        className: props.className,
        style: props.style,
        styles: undefined
    };
    var order=0;
    if('undefined'!==typeof props.styleOrder){
        order=props.styleOrder;
    }
    ApplyStyle(newStyleProps,props.styles,order);
    return newStyleProps;
}

var ReactStyle = {
  bindStyles: buildProps,
  create: createStyle,
  style: styleComponent,
  newStyleInject: function(){
    newStyles=styles;
  },
  injectStyle: function() {
    if (!newStyles.length){
      // We are in Node or Styles are already injected
      return null;
    }
    var compiled = stylesToCSS(newStyles);
    newStyles=[];
    Store.styles=assign(Store.styles,compiled.classNames);
    if(ExecutionEnvironment.canUseDOM){
        var tag = document.createElement('style');
        tag.innerHTML = compiled.css;
        document.getElementsByTagName('head')[0].appendChild(tag);
    }else{
	return React.createElement('style', {dangerouslySetInnerHTML:{
            __html:  compiled.css
        }}); 
    }
  }
};


assign(createStyle, ReactStyle);
module.exports = createStyle;

