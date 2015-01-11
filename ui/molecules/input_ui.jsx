var React = require('react');
var SemanticUI = require('../molecules/semantic_ui.jsx');
var Classable = require('../mixins/classable');

module.exports = React.createClass({
  displayName: 'InputUI',
  mixins: [Classable],
  render: function() {
    var classes = this.getClasses('input action D-tb');
    return (
      <SemanticUI className={classes}>
        {this.props.children}
      </SemanticUI>
    );
  }
});

