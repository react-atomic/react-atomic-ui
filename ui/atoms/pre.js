var React = require('react');

module.exports = React.createClass({

  render: function() {
    var { ...other } = this.props;
    return (
      <pre {...other} >{this.props.children}</pre>
    );
  }

});

