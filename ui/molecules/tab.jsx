/* jshint esnext: true */
var React = require('react');
var Item = require('../molecules/item.jsx');
var Span = require('../atoms/span.jsx');
var Classable = require('../mixins/classable');

module.exports = React.createClass({
    displayName: 'Tab',
    mixins: [Classable],
    getInitialState: function(){
        return {
            selected: false
        };
    },
    render: function() {
        var classes = this.getClasses('item');
        var selectBar=null;
        if (this.props.selected) {
            selectBar = <Span style={{
                width:"100%",
                background:"#400090",
                height:"3px",
                position:"absolute",
                bottom:0,
                left:0
            }} />;  
        }
        return (
            <Item {...this.props} className={classes}>{this.props.children}{selectBar}</Item>
        );
    }
});
