var React = require('react');
module.exports = React.createClass({
    displayName: 'H6',
    render: function() {
        return (
            <h6 {...this.props}>{this.props.children}</h6>
        );
    }
});
