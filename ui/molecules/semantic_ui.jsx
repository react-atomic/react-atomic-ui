/* jshint esnext: true */
var React = require('react');
var Classable = require('../mixins/classable');

module.exports = React.createClass({
  displayName: 'SemanticUI',
  mixins: [Classable],
  getDefaultProps: function() {
    return ({
        ui:true
    });
  },
  render: function() {
    var ui=this.props.ui;
    var SemanticUI;
    var classes = [];
    if(ui){
        classes.push('ui');
    }
    switch (this.props.atom){
        case 'h1':
            SemanticUI = require('../atoms/h1.jsx');
            break;
        case 'h2':
            SemanticUI = require('../atoms/h2.jsx');
            break;
        case 'h3':
            SemanticUI = require('../atoms/h3.jsx');
            break;
        case 'h4':
            SemanticUI = require('../atoms/h4.jsx');
            break;
        case 'h5':
            SemanticUI = require('../atoms/h5.jsx');
            break;
        case 'h6':
            SemanticUI = require('../atoms/h6.jsx');
            break;
        case 'ol':
            SemanticUI = require('../atoms/ol.jsx');
            break;
        case 'ul':
            SemanticUI = require('../atoms/ul.jsx');
            break;
        case 'button':
            SemanticUI = require('../atoms/button.jsx');
            break;
        case 'img':
            SemanticUI = require('../atoms/img.jsx');
            classes.push('image');
            break;
        default:
            SemanticUI = require('../atoms/div.jsx');
            break;
    }
    console.log(this.props);
    return (
      <SemanticUI {...this.props} className={this.getClasses(classes.join(' '))}>
        {this.props.children}
      </SemanticUI>
    );
  }
});
