var React = require('react');
var List = require('../molecules/list.jsx');
var Classable = require('../mixins/classable');
var ReactStyle = require('../mixins/styles/index');
var SemanticUI = require('../molecules/semantic_ui.jsx');

var TabsStyles = {
  normalStyle: ReactStyle({
    position: 'relative',
    width: '100%'
  }),

  tabTitlesContainerStyle: ReactStyle({
    webkitTapHighlightColor: 'rgba(0,0,0,0)',
    backgroundColor: '#fff',
    lineHeight: '48px',
    margin: 0,
    padding: 0,
    height: 48,
    position: 'relative',
    cursor: 'pointer',
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
    boxShadow: '0px 3px 2px rgba(0, 0, 0, 0.2)'
  }),

  tabTitleStyle: ReactStyle({
    height: '100%',
    display: 'inline-block',
    textAlign: 'center',
    userSelect: 'none',
    position: 'relative',
    overflow: 'hidden',
    opacity: '.6',
    padding: '0 10px',
    transition: 'opacity .38s linear'
  }),

  tabTitleSelectedStyle: ReactStyle({
    opacity: '1'
  }),

  selectionBarStyle: ReactStyle({
    backgroundColor: '#fff',
    height: 2,
    transition: 'left .28s linear',
    position: 'absolute',
    bottom: 0
  })
};

module.exports = React.createClass({
    displayName: 'TabList',
    mixins: [Classable],
    render: function() {
        var styles = TabsStyles;
        var classes = this.getClasses('top attached tabular menu');
        return (
          <SemanticUI {...this.props} className={classes} styles={styles.normalStyles}>
            <List styles={styles.tabTitlesContainerStyle}>{this.renderChildren()}</List>
          </SemanticUI>
        );
    },
    renderChildren:function(){
        var styles = TabsStyles;
        return React.Children.map(this.props.children,function(child){
            child.props.styles=styles.tabTitleStyle;
            return child;
        }.bind(this));
    }
});
