var React = require('react');
module.exports = React.createClass({
    displayName: 'H1',
    render: function() {
        return (
            <h1 {...this.props}>{this.props.children}</h1>
        );
    }
});
