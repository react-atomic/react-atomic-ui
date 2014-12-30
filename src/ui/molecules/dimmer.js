var React = require('react'),
    SemanticUI = require('../molecules/semantic_ui'),
    Classable = require('../mixins/classable.js');

var Dimmer = React.createClass({
  mixins: [Classable],

  render: function() {
    var { ...other } = this.props,
        defaultCss='dimmer transition ',
        showCss='visible active',
        hiddenCss='hidden',
        classes;
        if (this.props.show) {
            defaultCss+=showCss;
        }else{
            defaultCss+=hiddenCss;
        }
    classes = this.getClasses(defaultCss);
    return (
      <SemanticUI {...other} className={classes}>{this.props.children}</SemanticUI>
    );
  }

});
module.exports=Dimmer; 
