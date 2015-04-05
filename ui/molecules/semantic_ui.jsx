/* jshint esnext: true */
var React = require('react');
var ReactStyle = require('../mixins/styles/index');
var ReactStyleMixin = require('../mixins/styles/mixin');
var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');
var Classable = require('../mixins/classable');
var assign = require("react/lib/Object.assign");

module.exports = React.createClass({
  displayName: 'SemanticUI',
  mixins: [Classable,ReactStyleMixin],
  getDefaultProps: function() {
    return ({
        ui:true,
        renderChildren:true
    });
  },
  render: function() {
    var ui=this.props.ui;
    var renderChildren=this.props.renderChildren;
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
        case 'form':
            SemanticUI = require('../atoms/form.jsx');
            break;
        case 'input':
            SemanticUI = require('../atoms/input.jsx');
            renderChildren=false;
            break;
        case 'img':
            SemanticUI = require('../atoms/img.jsx');
            classes.push('image');
            break;
        case 'a':
            SemanticUI = require('../atoms/a.jsx');
            break;
        case 'svg':
            SemanticUI = require('../atoms/svg.jsx');
            break;
        default:
            SemanticUI = require('../atoms/div.jsx');
            break;
    }
    var newProps=this.bindStyles(this.props);
    newProps=assign({},this.props,newProps);
    var style;
    if(ExecutionEnvironment.canUseDOM){
        this.injectStyle();
    }else{
        style=this.injectStyle();
    }
    return (
        <SemanticUI {...newProps}>{(style)?style:null}{this.renderChildren(renderChildren)}</SemanticUI>
    );
  },
  renderChildren:function(render){
        if(!render){
            return null;
        }
        return React.Children.map(
            this.props.children,
            function (child) {
                var newProps=this.bindStyles(child.props);
                if('undefined' !== typeof newProps ){
                    return React.addons.cloneWithProps(
                        child, 
                        assign(
                            {},
                            child.props,
                            {
                                className:newProps.className,
                                styles:newProps.styles,
                                style:newProps.style,
                            }
                        )
                    );
                }
                return child;
            }.bind(this)
        );
    }
    
});
