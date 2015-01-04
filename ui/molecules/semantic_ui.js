var React = require('react'),
    AtomDiv=require('../atoms/div'),
    AtomImg=require('../atoms/img'),
    AtomOl=require('../atoms/ol'),
    AtomUl=require('../atoms/ul'),
    AtomH2 = require('../atoms/h2'),
    Classable = require('../mixins/classable.js');

var  Semantic = React.createClass({
  mixins: [Classable],
  getDefaultProps: function() {
    return ({
        ui:true
    });
  },
  render: function() {
    var SemanticUI;
    
    var { ui, ...other } = this.props,
        SemanticUI,
        classes = [];
    if(ui){
        classes.push('ui');
    }
    switch (this.props.atom){
        case 'h2':
            SemanticUI = AtomH2;
            break;
        case 'ol':
            SemanticUI = AtomOl;
            break;
        case 'ul':
            SemanticUI = AtomUl;
            break;
        case 'img':
            SemanticUI = AtomImg;
            classes.push('image');
            break;
        default:
            SemanticUI = AtomDiv;
            break;
    }
    return (
      <SemanticUI {...other} className={this.getClasses(classes.join(' '))}>{this.props.children}</SemanticUI>
    );
  }

});
module.exports=Semantic;
