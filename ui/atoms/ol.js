var React = require('react');

module.exports = React.createClass({

  render: function() {
    var { ...other } = this.props;
    return (
      <ol {...other}>{this.props.children}</ol>
    );
  }

});

