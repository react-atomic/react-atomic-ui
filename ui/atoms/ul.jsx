var React = require('react');
module.exports = React.createClass({
    displayName: 'UL',
    render: function() {
        return (
            <ul {...this.props}>{this.props.children}</ul>
        );
    }
});
