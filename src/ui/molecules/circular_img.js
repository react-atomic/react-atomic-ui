var React = require('react'),
    AtomImg = require('../atoms/img'),
    Classable = require('../mixins/classable.js');

module.exports  = React.createClass({
  mixins: [Classable],

  render: function() {
    var { ...other } = this.props,
    classes = this.getClasses('ui circular image');
    return (
      <AtomImg {...other} className={classes} />
    );
  }

});

