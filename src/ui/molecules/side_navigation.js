/**
 * @jsx React.DOM
 */
'use strict';

var Colors = require('../pages/style/Colors');
var React = require('react');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var ReactStyle = require('react-style');

var SideNavigationStyles = {

  normalSideNavStyle: ReactStyle({
    backgroundColor: 'white',
    borderRight: '1px solid ' + Colors.grey.P300,
    bottom: 0,
    left: 0,
    overflow: 'auto',
    position: 'fixed',
    top: 0,
    width: 240,
//    transform: 'translateX(-241px)',
//    transition: 'transform .2s cubic-bezier(.4,0,.2,1), visibility 0s linear .21s',
    zIndex: '1001',
    visibility: 'hidden'
  }),

  showSideNavStyle: ReactStyle({
  //  transform: 'translateX(0)',
  //  transition: 'transform .2s cubic-bezier(.4,0,.2,1), visibility 0s linear 0s',
    visibility: 'visible'
  })

};

var SideNavigation = React.createClass({

  render: function() {
    var props = this.props;
    var styles = SideNavigationStyles;
    var sideNavigationStyles = [styles.normalSideNavStyle];
    if (props.show) {
      sideNavigationStyles.push(styles.showSideNavStyle);
    }
    return ( 
    <ReactCSSTransitionGroup transitionName="example">
    <div styles={sideNavigationStyles}>
      {this.props.children}
    </div>
    </ReactCSSTransitionGroup>
    );
  }

});

module.exports = SideNavigation;
