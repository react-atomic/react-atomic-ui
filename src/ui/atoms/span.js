var React = require('react');

var Span = React.createClass({

  render: function() {
    var { ...other } = this.props;
    return (
      <span {...other} data-owner="hill">{this.props.children}</span>
    );
  }

});

module.exports = Span;
