var React = require('react'),
    AtomDiv = require('../atoms/div'),
    Label = require('../molecules/label'),
    Icon = require('../molecules/icon'),
    Classable = require('../mixins/classable.js');

module.exports = React.createClass({
  mixins: [Classable],

  render: function() {
    var { ...other } = this.props,
    classes = this.getClasses('');
    return (
      <AtomDiv {...other} className={classes}>
        {this.getLabels()}
      </AtomDiv>
    );
  },
  getLabels: function(){
    var children=[],name,icon;
    for (var i=0; i < this.props.list.length; i++) {
        item = this.props.list[i];
        if(item.icon){
            icon= <Icon name="global" />;
        }else{
            icon='';
        }
        itemComponent = (
            <Label key={i}>{icon}{item.name}</Label>
        );
        children.push(itemComponent);
    }
    return children;
  }

});

