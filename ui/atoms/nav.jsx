var React = require('react');
module.exports = React.createClass({
    displayName: 'Nav',
    render: function() {
        return (
            <nav {...this.props}>{this.props.children}</nav>
        );
    }
});
