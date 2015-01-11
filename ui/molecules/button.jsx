var React = require('react');
var SemanticUI = require('../molecules/semantic_ui.jsx');
var Classable = require('../mixins/classable');

module.exports = React.createClass({
    displayName: 'Button',
    mixins: [Classable],
    render: function() {
        var classes = this.getClasses('button');
        return (
            <SemanticUI {...this.props} className={classes}>{this.props.children}</SemanticUI>
        );
    }
});
