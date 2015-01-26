var React = require('react');
var Button = require('../molecules/button.jsx');
var Classable = require('../mixins/classable');

module.exports = React.createClass({
    displayName: 'Button',
    mixins: [Classable],
    render: function() {
        var classes = this.getClasses('facebook');
        return (
            <Button {...this.props} className={classes}>{this.props.children}</Button>
        );
    }
});
