var React = require('react');

var Nav = React.createClass({

  render: function() {
    var { ...other } = this.props;
    return (
      <nav {...other}>{this.props.children}</nav>
    );
  }

});

module.exports = Nav;
