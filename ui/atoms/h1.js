var React = require('react');

var Div = React.createClass({

  render: function() {
    var { ...other } = this.props;
    return (
      <h1 {...other}>{this.props.children}</h1>
    );
  }

});

module.exports = Div;
