var React = require('react'),
    SemanticUI = require('../molecules/semantic_ui'),
    Classable = require('../mixins/classable.js');

module.exports = React.createClass({
  displayName: 'Segment',

  mixins: [Classable],

  render: function() {
    var classes = this.getClasses('segment');
    return (
      <SemanticUI {...this.props} className={classes}>{this.props.children}</SemanticUI>
    );
  }

});

