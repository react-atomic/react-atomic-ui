var React = require('react');
var AtomDiv = require('../atoms/div.jsx');
var Label = require('../molecules/label.jsx');
var Icon = require('../molecules/icon.jsx');
var Classable = require('../mixins/classable');

module.exports = React.createClass({
  mixins: [Classable],

  render: function() {
    return (
      <AtomDiv {...this.props}>
        {this.getLabels()}
      </AtomDiv>
    );
  },
  getLabels: function(){
    var children=[];
    var icon;
    var item;
    var itemComponent;
    for (var i=0; i < this.props.list.length; i++) {
        item = this.props.list[i];
        if(item.icon){
            icon= <Icon name="{item.icon}" />;
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

