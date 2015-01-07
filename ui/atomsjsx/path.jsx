var React = require('react');
module.exports = React.createClass({
    displayName: 'Path',
    render: function() {
        return (
            <path {...this.props}>{this.props.children}</path>
        );
    }
});
