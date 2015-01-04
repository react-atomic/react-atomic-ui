var React = require('react'),
    AtomH2 = require('../atoms/h2'),
    Classable = require('../mixins/classable.js');

module.exports = React.createClass({
  mixins: [Classable],

  render: function() {
    var { ...other } = this.props,
    classes = this.getClasses('brand-tagline');
    return (
      <AtomH2 {...other} className={classes}>{this.props.children}</AtomH2>
    );
  }

});

