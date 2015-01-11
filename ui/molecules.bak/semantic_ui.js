var React = require('react'),
    Classable = require('../mixins/classable');

module.exports = React.createClass({
  displayName: 'SemanticUI',
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
            SemanticUI = require('../atoms/h2');
            break;
        case 'ol':
            SemanticUI = require('../atoms/ol');
            break;
        case 'ul':
            SemanticUI = require('../atoms/ul');
            break;
        case 'img':
            SemanticUI = require('../atoms/img');
            classes.push('image');
            break;
        default:
            SemanticUI = require('../atoms/div');
            break;
    }
    return (
      <SemanticUI {...other} className={this.getClasses(classes.join(' '))}>
        {this.props.children}
      </SemanticUI>
    );
  }
});
