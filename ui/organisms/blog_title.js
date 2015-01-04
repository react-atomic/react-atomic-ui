var React = require('react'),
    AtomH1 = require('../atoms/h1'),
    Classable = require('../mixins/classable.js');

module.exports = React.createClass({
  mixins: [Classable],

  render: function() {
    var { ...other } = this.props,
    classes = this.getClasses('brand-title');
    return (
      <AtomH1 {...other} className={classes}>{this.props.children}</AtomH1>
    );
  }

});

