/*jslint browser: true*/
'use strict';
var Store                  = require('./store.js');

function Style(style, className, selector) {
  this.style = style;
  this.className = className;
  this.selector = selector;
}

Style.prototype.isCompiled = function() {
    var registry = Store.styles;
    return registry && registry[this.className];
};

module.exports = Style;
