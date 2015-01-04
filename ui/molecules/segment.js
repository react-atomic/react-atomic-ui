var React = require('react'),
    SemanticUI = require('../molecules/semantic_ui'),
    Classable = require('../mixins/classable.js');

module.exports = React.createClass({
  mixins: [Classable],

  render: function() {
    var { ...other } = this.props,
    classes = this.getClasses('segment');
    return (
      <SemanticUI {...other} className={classes}>{this.props.children}</SemanticUI>
    );
  }

});

