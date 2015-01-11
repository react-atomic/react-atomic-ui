var React = require('react');
module.exports = React.createClass({
    displayName: 'Span',
    render: function() {
        return (
            <span {...this.props} >{this.props.children}</span>
        );
    }
});
