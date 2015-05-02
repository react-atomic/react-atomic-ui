var React = require('react');
var SemanticUI = require('../molecules/semantic_ui');
var mixClass = require('classnames');

module.exports  = React.createClass({
  displayName: 'Image',
  render: function() {
    var image = {image:true}
    if(false===this.props.ui){
        image = {image:false}
    }
    var classes = mixClass(this.props.className,image);
    return (
      <SemanticUI atom="img" {...this.props} className={classes} />
    );
  }

});

