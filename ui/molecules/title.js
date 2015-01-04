var React = require('react'),
    AtomDiv = require('../atoms/div'),
    Classable = require('../mixins/classable');

var Title = React.createClass({
  mixins: [Classable],

  render: function() {
    var { ...other } = this.props,
    classes = this.getClasses('title');
    return (
      <AtomDiv {...other} className={classes}>{this.props.children}</AtomDiv>
    );
  }

});
module.exports = Title;
