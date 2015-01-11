var React = require('react');
module.exports = React.createClass({
    displayName: 'Svg',
    render: function() {
        return (
            <svg {...this.props}>{this.props.children}</svg>
        );
    }
});
