var React = require('react'),
    List = require('../molecules/list'),
    Classable = require('../mixins/classable.js');

module.exports = React.createClass({
  mixins: [Classable],

  render: function() {
    var { ...other } = this.props,
    classes = this.getClasses('bulleted');
    return (
      <List {...other} className={classes}>{this.props.children}</List>
    );
  }

});

