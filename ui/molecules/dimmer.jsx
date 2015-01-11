/* jshint esnext: true */
var React = require('react');
var ReactStyle = require('react-style');
var SemanticUI = require('../molecules/semantic_ui.jsx');
var Classable = require('../mixins/classable');

module.exports = React.createClass({
    displayName: 'Dimmer',
    mixins: [Classable],
    render: function() {
    var { opacity, zIndex, ...other } = this.props,
        defaultCss='dimmer transition ',
        showCss='visible active',
        hiddenCss='hidden',
        Styles=[],
        classes;
        if (this.props.show) {
            defaultCss+=showCss;
            Styles.push(ReactStyle({
                opacity:opacity,
                zIndex:zIndex
            }));
        }else{
            defaultCss+=hiddenCss;
        }
    classes = this.getClasses(defaultCss);
    return (
      <SemanticUI styles={Styles} {...other} className={classes}>{this.props.children}</SemanticUI>
    );
    }
});
