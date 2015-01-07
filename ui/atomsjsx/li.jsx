var React = require('react');
module.exports = React.createClass({
    displayName: 'Li',
    render: function() {
        return (
            <li {...this.props}>{this.props.children}</li>
        );
    }
});
