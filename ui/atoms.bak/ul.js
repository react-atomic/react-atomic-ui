var React = require('react');

module.exports = React.createClass({

  render: function() {
    var { ...other } = this.props;
    return (
      <ul {...other}>{this.props.children}</ul>
    );
  }

});

