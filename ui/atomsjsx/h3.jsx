var React = require('react');
module.exports = React.createClass({
    displayName: 'H3',
    render: function() {
        return (
            <h3 {...this.props}>{this.props.children}</h3>
        );
    }
});
