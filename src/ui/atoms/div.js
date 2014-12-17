var React = require('react');

var Div = React.createClass({

  render: function() {
    var { ...other } = this.props;
    return (
      <div {...other}>{this.props.children}</div>
    );
  }

});

module.exports = Div;
