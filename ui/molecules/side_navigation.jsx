/**
 * @jsx React.DOM
 */
'use strict';

var Colors = require('../pages/style/Colors');
var mixClass = require('classnames');
var React = require('react');
var Menu = require('../molecules/menu');
var ReactStyle = require('../mixins/styles/index');

var Styles = {

  normalSideNavStyle: ReactStyle({
    bottom: 0,
    left: 0,
    overflow: 'auto',
    position: 'fixed',
    top: 0,
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
  render: function() {
    var props = this.props;
    var classes = mixClass(this.props.className,'sidebar');
    var sideNavigationStyles = [Styles.normalSideNavStyle];
    if (props.show) {
        sideNavigationStyles.push(Styles.showSideNavStyle);
    }
    var width=(props.width || null===props.width)?props.width:'240px'; 
    if(width){
        sideNavigationStyles.push(ReactStyle({
            width:width,
            transform: 'translateX(-'+(width++)+'px)',
        },false));
    }
    if(props.background){
        sideNavigationStyles.push(ReactStyle({
            backgroundColor: 'white',
            borderRight: '1px solid ' + Colors.grey.P300,
        },false));
    }else{
        sideNavigationStyles.push(ReactStyle({
             boxShadow:'none'
        },false));
    }
    sideNavigationStyles=sideNavigationStyles.concat(props.styles);
    return ( 
    <Menu {...props} 
        className={classes}
        styles={sideNavigationStyles}
    >
      {this.props.children}
    </Menu>
    );
  }

});

