var React = require('react');
var List = require('../molecules/list');
var mixClass = require('classnames');

module.exports = React.createClass({
  render: function() {
    var classes = mixClass(this.props.className,'bulleted');
    return (
      <List {...this.props} className={classes}>{this.props.children}</List>
    );
  }

});

