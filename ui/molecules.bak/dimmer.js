var React = require('react'),
    ReactStyle = require('react-style'),
    SemanticUI = require('../molecules/semantic_ui'),
    Classable = require('../mixins/classable.js');

var Dimmer = React.createClass({
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
module.exports=Dimmer; 
