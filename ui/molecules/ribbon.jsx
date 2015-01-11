var React = require('react');
var Label = require('../molecules/label.jsx');
var Classable = require('../mixins/classable');

module.exports = React.createClass({
  displayName: 'Ribbon',
  mixins: [Classable],

  render: function() {
    var classes = this.getClasses('ribbon');
    return (
      <Label {...this.props} className={classes}>{this.props.children}</Label>
    );
  }

});

