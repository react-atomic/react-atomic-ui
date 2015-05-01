/*jslint browser: true*/
'use strict';

var Style                  = require('./Style');
var Store                  = require('./store.js');

function genClassName() {
  Store.counter += 1;
  return 'c' + Store.counter + '_';
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

