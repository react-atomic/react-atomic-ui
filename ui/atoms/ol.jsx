var React = require('react');
module.exports = React.createClass({
    displayName: 'Ol',
    render: function() {
        return (
            <ol {...this.props}>{this.props.children}</ol>
        );
    }
});
