var React = require('react');
var Button = require('../molecules/button.jsx');
var Classable = require('../mixins/classable');
var ReactStyle = require('../mixins/styles/index');

var Styles = {
    button:{
        padding:'.78571em 1.5em',
        border:'none',
        margin:'0 .25em 0 0',
        verticalAlign: 'middle'
    },
    actionButton:{
        borderTopLeftRadius:'0',
        borderBottomLeftRadius:'0'
    }
};

module.exports = React.createClass({
    displayName: 'SearchButton',
    mixins: [Classable],
    render: function() {
        var classes=this.getClasses('D-tbc Lh-15 O-0');
        ReactStyle(Styles.actionButton,'.ui.action.input:not([class*="left action"])>.button');
        ReactStyle(Styles.button,'.ui.action.input>.button');
        return (
            <Button className={classes} {...this.props}>
                {this.props.children}
            </Button>
        );
    }
});
