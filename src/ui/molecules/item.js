var React = require('react'),
    AtomDiv = require('../atoms/div'),
    AtomLi = require('../atoms/li'),
    Classable = require('../mixins/classable.js');

var Item = React.createClass({
  mixins: [Classable],

  render: function() {
    var { ...other } = this.props,
        Item=AtomDiv,
        classes = this.getClasses('item');
    switch (this.props.atom){
        case 'li':
            Item=AtomLi;
            break;
    }
    return (
      <Item {...other} className={classes}>{this.props.children}</Item>
    );
  }

});
module.exports = Item;
