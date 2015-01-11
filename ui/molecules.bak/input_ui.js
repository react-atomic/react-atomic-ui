var React = require('react'),
    SemanticUI = require('../molecules/semantic_ui'),
    Classable = require('../mixins/classable');

module.exports = React.createClass({
  mixins: [Classable],

  displayName: 'InputUI',
  render: function() {
    var classes = this.getClasses('input action');
    return (
      <SemanticUI className={classes}>
        {this.props.children}
      </SemanticUI>
    );
  }

});

