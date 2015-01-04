var React = require('react');

var Img = React.createClass({

  render: function() {
    var { ...other } = this.props;
    return (
      <img {...other} />
    );
  }

});

module.exports = Img;
