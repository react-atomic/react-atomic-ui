'use strict';

var cloneWithProps         = require('react/lib/cloneWithProps');

function styleComponent(styles, component) {
  var componentStyles = [].concat(component.props.styles || [], styles);
  var children = component.props.children;
  component = cloneWithProps(component, {
    children: children,
    styles:   componentStyles
  });

  return component;
}

module.exports = styleComponent;
