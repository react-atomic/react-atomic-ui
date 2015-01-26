var React = require('react');
var Classable = require('../mixins/classable');
var Menu = require('../molecules/menu');

module.exports = React.createClass({
  displayName: 'Sidebar',
  mixins: [Classable],
  render: function() {
    var classes = this.getClasses('sidebar');
    return (
      <Menu {...this.props} className={classes}>{this.props.children}</Menu>
    );
  }
});

