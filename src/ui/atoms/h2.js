var React = require('react');

var Div = React.createClass({

  render: function() {
    var { ...other } = this.props;
    return (
      <h2 {...other}>{this.props.children}</h2>
    );
  }

});

module.exports = Div;
