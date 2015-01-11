var React = require('react');
module.exports = React.createClass({
    displayName: 'I',
    render: function() {
        return (
            <i {...this.props}>{this.props.children}</i>
        );
    }
});
