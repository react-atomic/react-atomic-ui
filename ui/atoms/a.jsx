var React = require('react');
module.exports = React.createClass({
    displayName: 'A',
    render: function() {
        return (
            <a {...this.props}>{this.props.children}</a>
        );
    }
});
