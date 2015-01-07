var React = require('react');
module.exports = React.createClass({
    displayName: 'Pre',
    render: function() {
        return (
            <pre {...this.props} >{this.props.children}</pre>
        );
    }
});

