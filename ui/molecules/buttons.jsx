var React = require('react');
var SemanticUI = require('../molecules/semantic_ui.jsx');
var Classable = require('../mixins/classable');

module.exports = React.createClass({
    displayName: 'Buttons',
    mixins: [Classable],
    render: function() {
        var classes = this.getClasses('buttons');
        return (
            <SemanticUI {...this.props} className={classes}>{this.props.children}</SemanticUI>
        );
    }
});
