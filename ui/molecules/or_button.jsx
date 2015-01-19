var React = require('react');
var SemanticUI = require('../molecules/semantic_ui.jsx');
var Classable = require('../mixins/classable');

module.exports = React.createClass({
    displayName: 'Button',
    mixins: [Classable],
    getDefaultProps: function() {
        return ({
            ui:false,
            renderChildren:false
        });
    },
    render: function() {
        var classes = this.getClasses('or');
        return (
            <SemanticUI {...this.props} 
                className={classes}
                data-text={this.props.children}
            />
        );
    }
});
