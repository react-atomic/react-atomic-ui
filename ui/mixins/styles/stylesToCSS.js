'use strict';

var CSSProperty = require('react/lib/CSSProperty');
var hyphenateStyleName = require('react/lib/hyphenateStyleName');
var unsupportedPseudoClasses = require('./unsupportedPseudoClasses');

// Follows syntax at https://developer.mozilla.org/en-US/docs/Web/CSS/content,
// including multiple space separated values.
var unquotedContentValueRegex = /^(normal|none|(\b(url\([^)]*\)|chapter_counter|attr\([^)]*\)|(no-)?(open|close)-quote|inherit)((\b\s*)|$|\s+))+)$/;
var counter = 1;

function buildRule(result, key, value) {
  var toCSS = value.toCSS;
  if (typeof toCSS === 'function') {
    value = toCSS();
  }

  if (!CSSProperty.isUnitlessNumber[key] && typeof value === 'number') {
    value = '' + value + 'px';
  }

  if (key === 'content' && !unquotedContentValueRegex.test(value)) {
    value = "'" + value.replace(/'/g, "\\'") + "'";
  }

  // TODO: escape value
  result.css += '  ' + hyphenateStyleName(key) + ': ' + value + ';\n';
}


function buildRules(result, rules, selector) {
  if (Object.keys(rules).length === 0) {
    return result;
  }
  var bMedia=false;
  if(Array.isArray(selector)){
       selector = selector[0] + ' {\n' +  selector[1];
       bMedia = true;
  }

  result.css += selector + ' {\n';
  var styleKeys = Object.keys(rules);
  for (var j = 0, l = styleKeys.length; j < l; j++) {
    var styleKey = styleKeys[j];
    var value = rules[styleKey];

    if (unsupportedPseudoClasses[styleKey.split('(')[0].trim()]) {
      if ("production" !== process.env.NODE_ENV) {
        console.warn('You are trying to use pseudo class ' + styleKey +
        ', which we don\'t support as this is better implemented using ' +
        'JavaScript.');
      }

      continue;
    }

    if (Array.isArray(value)) {
      for (var i = 0, len = value.length; i < len; i++) {
        buildRule(result, styleKey, value[i]);
      }
    }
    else {
      buildRule(result, styleKey, value);
    }
  }
  if(bMedia){
       result.css += '}\n';
  }
  result.css += '}\n';
  return result;
}

function replicateSelector(s) {
  return [
    s,
      s + (s + 1),
      s + (s + 1) + (s + 2),
      s + (s + 1) + (s + 2) + (s + 3),
      s + (s + 1) + (s + 2) + (s + 3) + (s + 4),
      s + (s + 1) + (s + 2) + (s + 3) + (s + 4) + (s + 5),
      s + (s + 1) + (s + 2) + (s + 3) + (s + 4) + (s + 5) + (s + 6),
      s + (s + 1) + (s + 2) + (s + 3) + (s + 4) + (s + 5) + (s + 6) + (s + 7),
      s + (s + 1) + (s + 2) + (s + 3) + (s + 4) + (s + 5) + (s + 6) + (s + 7) + (s + 8),
      s + (s + 1) + (s + 2) + (s + 3) + (s + 4) + (s + 5) + (s + 6) + (s + 7) + (s + 8) + (s + 9)
  ].join(',');
}

function buildStyle(result, style, selector) {
  if (!style.className) {
    return;
  }

  if (!selector && result.classNames[style.className]) {
    return;
  }

  if(style.selector){
      selector=style.selector;
      if (Array.isArray(selector) && !selector[1]) {
        selector[1] = replicateSelector('.' + style.className);
      }
  } else {
      selector = replicateSelector('.' + style.className);
  }
  result.classNames[style.className] = counter++; //for check already inject
  buildRules(result, style.style, selector);
}

function stylesToCSS(styles) {
  if (!Array.isArray(styles)) {
    styles = [styles];
  }

  var result = {css: '', classNames: {}};
  for (var i = 0, len = styles.length; i < len; i++) {
    if(false !== styles[i].selector){
        buildStyle(result, styles[i]);
    }
  }
  return result;
}

module.exports = stylesToCSS;
