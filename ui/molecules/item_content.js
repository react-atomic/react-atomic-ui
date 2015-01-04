var React = require('react'),
    AtomDiv = require('../atoms/div'),
    Classable = require('../mixins/classable.js');

module.exports = React.createClass({
  mixins: [Classable],

  render: function() {
    var { ...other } = this.props,
    classes = this.getClasses('content');
    return (
      <AtomDiv {...other} className={classes}>{this.props.children}</AtomDiv>
    );
  }

});

