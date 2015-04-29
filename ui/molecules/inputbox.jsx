/* jshint esnext: true */
var React = require('react');
var ReactStyle = require('../mixins/styles/index');
var SemanticUI = require('../molecules/semantic_ui.jsx');
var AtomInput = require('../atoms/input.jsx');
var mixClass = require('classnames');

    var Styles = {
        inputbox:{
            webkitTapHighlightColor:'rgba(255,255,255,0)',
            padding:'.67861em 1em',
            background:'#fff',
            border:'1px solid rgba(0,0,0,.15)',
            color:'rgba(0,0,0,.8)',
            transition:'background-color .2s ease,box-shadow .2s ease,border-color .2s ease',
            webkitTransition:'background-color .2s ease,box-shadow .2s ease,border-color .2s ease',
            boxShadow:'none'
        },
        myAction:{
            borderRight:'none',
            borderTopRightRadius:'0!important',
            borderBottomRightRadius:'0!important'
        }
    };

module.exports = React.createClass({
  displayName: 'InputBox',


  getDefaultProps: function() {
    return ({
        ui:true
    });
  },
  render: function() {
    var props=this.props;
    var classes=mixClass('input');
    var inputboxStyle=ReactStyle(Styles.inputbox,'.ui.input input');
    ReactStyle(Styles.myAction,'.ui.action.input:not([class*="left action"])>div input');
    return (
      <SemanticUI className={classes}>
        <AtomInput className="M-0 W-100 O-0 Ta-start Lh-15 Bdrs" styles={inputboxStyle}  {...props} ui=""  />
      </SemanticUI>
    );
  }

});

