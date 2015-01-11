var React = require('react'),
    AtomDiv = require('../atoms/div'),
    Item = require('./item_box'),
    Classable = require('../mixins/classable.js');

module.exports = React.createClass({
  mixins: [Classable],

  render: function() {
    var classes = this.getClasses('ui items');
    return (
      <AtomDiv {...this.props} className={classes}>
         {this.getItems()}
      </AtomDiv>
    );
  },
  getItems: function(){
    var children=[];
    var name;
    var itemComponent;
    for (var i=0; i < this.props.list.length; i++) {
        name = this.props.list[i];
        itemComponent = (
            <Item key={i} name={name} />
        );
        children.push(itemComponent);
    }
    return children;
  }

});

