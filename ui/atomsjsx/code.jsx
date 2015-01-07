var React = require('react');
module.exports = React.createClass({
    displayName: 'Code',
    render: function() {
        return (
            <code {...this.props} >{this.props.children}</code>
        );
    }
});
