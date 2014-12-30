var React = require('react'),
    Label = require('../molecules/label'),
    Classable = require('../mixins/classable.js');

module.exports = React.createClass({
  mixins: [Classable],

  render: function() {
    var { ...other } = this.props,
    classes = this.getClasses('ribbon');
    return (
      <Label {...other} className={classes}>{this.props.children}</Label>
    );
  }

});

