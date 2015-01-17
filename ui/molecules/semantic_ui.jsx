/* jshint esnext: true */
var React = require('react');
var ReactStyle = require('../mixins/styles/index');
var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');
var Classable = require('../mixins/classable');

module.exports = React.createClass({
  displayName: 'SemanticUI',
  mixins: [Classable,ReactStyle],
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
        case 'nav':
            SemanticUI = require('../atoms/nav.jsx');
            break;
        case 'button':
            SemanticUI = require('../atoms/button.jsx');
            break;
        case 'img':
            SemanticUI = require('../atoms/img.jsx');
            classes.push('image');
            break;
        case 'a':
            SemanticUI = require('../atoms/a.jsx');
            break;
        default:
            SemanticUI = require('../atoms/div.jsx');
            break;
    }
    this.buildStyles(this.props);
    var style;
    if(ExecutionEnvironment.canUseDOM){
        this.injectStyle();
    }else{
        style=this.injectStyle();
    }
    return (
      <SemanticUI {...this.props} className={this.getClasses(classes.join(' '))}>{(style)?style:null}{this.renderChildren()}</SemanticUI>
    );
  },
  renderChildren:function(){
        return React.Children.map(
            this.props.children,
            function (child) {
                this.buildStyles(child.props);
                return child;
            }.bind(this)
        );
    },
    buildStyles: function(props){
        if( 'undefined' !== typeof props &&
            'undefined' !== typeof props.styles 
        ){
            var newProps=this.bindStyles(props);
            if('undefined' !== typeof newProps ){
                props.className=newProps.className;
                props.style=newProps.style;
                props.styles=newProps.styles;
            }
        }
    }
    
});
