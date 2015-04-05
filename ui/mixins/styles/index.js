/*jslint browser: true*/
'use strict';

var Style                  = require('./Style');
var Store                  = require('./store.js');



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
  Store.styles.push(styleDecl);
  Store.newStyles.push(styleDecl);
  return styleDecl;
}




module.exports = createStyle;

