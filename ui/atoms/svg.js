var React = require('react');

var SVG = React.createClass({

  render: function() {
    var { ...other } = this.props;
    return (
      <svg {...other}>{this.props.children}</svg>
    );
  }

});

module.exports = SVG;
