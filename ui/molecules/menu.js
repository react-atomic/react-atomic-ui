var React = require('react'),
    SemanticUI = require('../molecules/semantic_ui'),
    Classable = require('../mixins/classable');

module.exports = React.createClass({
  displayName: 'Menu',
  mixins: [Classable],
  render: function() {
    var { ...other } = this.props,
    classes = this.getClasses('menu');
    return (
      <SemanticUI {...other} className={classes}>{this.props.children}</SemanticUI>
    );
  }
});

