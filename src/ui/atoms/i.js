var React = require('react');

module.exports = React.createClass({

  render: function() {
    var { ...other } = this.props;
    return (
      <i {...other}>{this.props.children}</i>
    );
  }

});

