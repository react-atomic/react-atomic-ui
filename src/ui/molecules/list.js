var React = require('react'),
    SemanticUI = require('../molecules/semantic_ui'),
    Classable = require('../mixins/classable.js');

var List = React.createClass({
  mixins: [Classable],

  render: function() {
    var { ...other } = this.props,
    classes = this.getClasses('list');
    return (
      <SemanticUI {...other} className={classes}>{this.renderChildren()}</SemanticUI>
    );
  },
  renderChildren:function(){
    return React.Children.map(this.props.children, function (child) {
        if( 'ul'==this.props.atom 
         || 'ol'==this.props.atom )
         {
            child.props.atom='li';
        }
        return child;
    }.bind(this));
  }

});
module.exports=List; 
