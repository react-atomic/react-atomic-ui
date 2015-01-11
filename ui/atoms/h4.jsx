var React = require('react');
module.exports = React.createClass({
    displayName: 'H4',
    render: function() {
        return (
            <h4 {...this.props}>{this.props.children}</h4>
        );
    }
});
