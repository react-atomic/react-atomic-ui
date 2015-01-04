/**
 * @jsx React.DOM
 */
'use strict';

var Colors = require('../pages/style/Colors'),
    Classable = require('../mixins/classable.js'),
    React = require('react'),
    Menu = require('../molecules/menu'),
    ReactStyle = require('react-style');




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
    transform: 'translateX(-241px)',
    transition: 'transform .2s cubic-bezier(.4,0,.2,1), visibility 0s linear .21s',
    zIndex: '1001',
    visibility: 'hidden'
  }),

  showSideNavStyle: ReactStyle({
    transform: 'translateX(0)',
    transition: 'transform .2s cubic-bezier(.4,0,.2,1), visibility 0s linear 0s',
    visibility: 'visible'
  })

};

module.exports = React.createClass({
  displayName: 'SideNavigation',
  mixins: [Classable],
  render: function() {
    var props = this.props;
    var { ...other } = props,
        classes = this.getClasses('sidebar');
    var styles = SideNavigationStyles;
    var sideNavigationStyles = [styles.normalSideNavStyle, props.styles];
    if (props.show) {
      sideNavigationStyles.push(styles.showSideNavStyle);
    }
    return ( 
    <Menu {...other} 
        className={classes}
        styles={sideNavigationStyles}
    >
      {this.props.children}
    </Menu>
    );
  }

});

