var React = require('react');

module.exports = React.createClass({

  render: function() {
    var { ...other } = this.props;
    return (
      <li {...other}>{this.props.children}</li>
    );
  }

});

