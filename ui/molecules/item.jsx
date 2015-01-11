/* jshint esnext: true */
var React = require('react');
var AtomDiv = require('../atoms/div.jsx');
var AtomLi = require('../atoms/li.jsx');
var Classable = require('../mixins/classable');

module.exports = React.createClass({
    displayName: 'Dimmer',
    mixins: [Classable],
    render: function() {
        var Item=AtomDiv,
            classes = this.getClasses('item');
        switch (this.props.atom){
            case 'li':
                Item=AtomLi;
                break;
        }
        return (
            <Item {...this.props} className={classes}>
                {this.props.children}
            </Item>
        );
    }
});
