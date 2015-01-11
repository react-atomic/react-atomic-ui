var React = require('react');
module.exports = React.createClass({
    displayName: 'H2',
    render: function() {
        return (
            <h2 {...this.props}>{this.props.children}</h2>
        );
    }
});
