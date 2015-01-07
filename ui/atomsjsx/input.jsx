var React = require('react');
module.exports = React.createClass({
    displayName: 'Input',
    render: function() {
        return (
            <input {...this.props} />
        );
    }
});
