/* jshint esnext: true */
var React = require('react');
var ReactStyle = require('react-style');
var SemanticUI = require('../molecules/semantic_ui.jsx');
var AtomInput = require('../atoms/input.jsx');
var Classable = require('../mixins/classable');


module.exports = React.createClass({
  displayName: 'InputBox',

  mixins: [Classable],

  getDefaultProps: function() {
    return ({
        ui:true
    });
  },
  render: function() {
    
    var props=this.props;
    var ui=props.ui;
    var classes;
    if(ui){
        classes=this.getClasses('input');
    }else{
        classes=this.getClasses('D-tbc');
    }
    return (
      <SemanticUI ui={ui} className={classes}>
        <AtomInput className="W-100" {...props} ui="" />
      </SemanticUI>
    );
  }

});

