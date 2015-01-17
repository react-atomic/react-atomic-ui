'use strict';

var CSSProperty = require('react/lib/CSSProperty');
var isArray     = Array.isArray;

// TODO: Is this enough?
var COMPLEX_OVERRIDES = CSSProperty.shorthandPropertyExpansions;

function applyStyle(props, style, order) {
  if (style === null || style === undefined || style === false) {
    return order;
  }
  else if (style.isCompiled() && order < 10) {
    if (!props.className) {
      props.className = '';
    }
    for (var j = 0; j < order + 1; j++) {
      props.className += ' ' + style.className + (j === 0 ? '' : j);
    }
    if (props.style) {
      for (var k in style.style) {
        if (props.style[k] !== null || props.style[k] !== undefined) {
          props.style[k] = null;
          var complexOverride = COMPLEX_OVERRIDES[k];
          if (complexOverride) {
            for (k in complexOverride) {
              if (props.style[k] !== null || props.style[k] !== undefined) {
                props.style[k] = null;
              }
            }
          }
        }
      }
    }
    return order + 1;
  }
  else {
    if (!props.style) {
      props.style = {};
    }
    for (var key in style.style) {
      if (!style.style.hasOwnProperty(key)) {
        continue;
      }
      props.style[key] = style.style[key];
    }
    return order;
  }
}

function applyStyles(props, styles, order) {
  if (order === undefined) {
    order = 0;
  }
  if (isArray(styles)) {
    for (var i = 0, len = styles.length; i < len; i++) {
      order = applyStyles(props, styles[i], order);
    }
    return order;
  }
  else {
    return applyStyle(props, styles, order);
  }
}

module.exports = applyStyles;
