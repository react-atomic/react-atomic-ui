var React = require('react');

module.exports = React.createClass({

  render: function() {
    var { ...other } = this.props;
    return (
      <code {...other} >{this.props.children}</code>
    );
  }

});

