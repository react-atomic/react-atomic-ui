var React = require('react'),
    SemanticUI = require('../molecules/semantic_ui'),
    Classable = require('../mixins/classable.js');

module.exports = React.createClass({
  displayName: 'Label',
  mixins: [Classable],

  render: function() {
    var { ...other } = this.props,
    classes = this.getClasses('label');
    return (
      <SemanticUI {...other} className={classes}>{this.props.children}</SemanticUI>
    );
  }

});

