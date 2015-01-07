var React = require('react');
module.exports = React.createClass({
    displayName: 'Div',
    render: function() {
        return (
            <div {...this.props}>{this.props.children}</div>
        );
    }
});
