var React = require('react'),
    AtomDiv = require('../atoms/div'),
    AtomSpan = require('../atoms/span'),
    Classable = require('../mixins/classable.js');

module.exports = React.createClass({
  mixins: [Classable],

  render: function() {
    var { ...other } = this.props,
    classes = this.getClasses('meta');
    return (
      <AtomDiv {...other} className={classes}><AtomSpan>{this.props.children}</AtomSpan></AtomDiv>
    );
  }

});

