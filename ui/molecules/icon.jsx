/* jshint esnext: true */
var React = require('react');
var AtomI = require('../atoms/i.jsx');
var Classable = require('../mixins/classable');

module.exports = React.createClass({
  displayName: 'Icon',
  mixins: [Classable],
  render: function() {
    var { name, ...other } = this.props,
    classes = this.getClasses('icon '+name);
    return (
      <AtomI {...other} className={classes}></AtomI>
    );
  }

});

