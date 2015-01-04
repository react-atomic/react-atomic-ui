var React = require('react'),
    AtomI = require('../atoms/i'),
    Classable = require('../mixins/classable.js');

module.exports = React.createClass({
  mixins: [Classable],

  render: function() {
    var { name, ...other } = this.props,
    classes = this.getClasses('icon '+name);
    return (
      <AtomI {...other} className={classes}></AtomI>
    );
  }

});

