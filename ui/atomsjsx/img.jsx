var React = require('react');
module.exports = React.createClass({
    displayName: 'Img',
    render: function() {
        return (
            <img {...this.props} />
        );
    }
});
