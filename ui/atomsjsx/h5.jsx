var React = require('react');
module.exports = React.createClass({
    displayName: 'H5',
    render: function() {
        return (
            <h5 {...this.props}>{this.props.children}</h5>
        );
    }
});
