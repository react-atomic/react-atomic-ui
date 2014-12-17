var React = require('react'),
    AtomDiv = require('../atoms/div'),
    Item = require('./item'),
    Classable = require('../mixins/classable.js');

module.exports = React.createClass({
  mixins: [Classable],

  render: function() {
    var { ...other } = this.props,
    classes = this.getClasses('ui items');
    return (
      <AtomDiv {...other} className={classes}>
        <Item />
      </AtomDiv>
    );
  }

});

