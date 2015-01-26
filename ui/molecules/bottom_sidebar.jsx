var React = require('react');
var Classable = require('../mixins/classable');
var Sidebar = require('../molecules/sidebar');

module.exports = React.createClass({
  displayName: 'BottomSidebar',
  mixins: [Classable],
  render: function() {
    var classes = this.getClasses('bottom');
    return (
      <Sidebar {...this.props} className={classes}>{this.props.children}</Sidebar>
    );
  }
});

