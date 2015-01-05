var React = require('react'),
    SemanticUI = require('../molecules/semantic_ui'),
    Classable = require('../mixins/classable.js');

module.exports = React.createClass({
  displayName: 'DividingHeader',
  mixins: [Classable],

  render: function() {
    var { ...other } = this.props,
    classes = this.getClasses('dividing header');
    return (
      <SemanticUI {...other} className={classes}>{this.props.children}</SemanticUI>
    );
  }

});

