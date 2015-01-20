var React = require('react');
module.exports = React.createClass({
    displayName: 'Form',
    render: function() {
        return (
            <form {...this.props}>{this.props.children}</form>
        );
    }
});
