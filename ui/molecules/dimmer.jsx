/* jshint esnext: true */
var React = require('react');
var ReactStyle = require('../mixins/styles/index');
var SemanticUI = require('../molecules/semantic_ui.jsx');
var mixClass = require('classnames');
module.exports = React.createClass({
    displayName: 'Dimmer',
    render: function() {
    var { opacity, zIndex, ...other } = this.props,
        cssVisible,
        cssActive,
        cssHidden,
        Styles=[];
        if (this.props.show) {
            cssVisible=true;
            cssActive=true;
            Styles.push(ReactStyle({
                opacity:opacity,
                zIndex:zIndex
            },false));
        }else{
            cssHidden=true;
        }
    var classes=mixClass(
        this.props.className,
        'dimmer',
        'transition',
        {visible:cssVisible},
        {active:cssActive},
        {hidden:cssHidden}
    );
    return (
      <SemanticUI {...other} styles={Styles}  className={classes}>{this.props.children}</SemanticUI>
    );
    }
});
