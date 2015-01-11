var React = require('react');

module.exports = React.createClass({
  displayName: 'Path',
  render: function() {
    var { ...other } = this.props;
    return (
      <path {...other}>{this.props.children}</path>
    );
  }
});

