var React = require('react'),
    SemanticUI = require('../molecules/semantic_ui'),
    Classable = require('../mixins/classable.js');

module.exports = React.createClass({
  mixins: [Classable],

  displayName: 'Button',
  render: function() {
    var { ...other } = this.props,
    classes = this.getClasses('button');
    return (
      <SemanticUI {...other} className={classes}>{this.props.children}</SemanticUI>
    );
  }

});

