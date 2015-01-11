var React = require('react');
module.exports = React.createClass({
    displayName: 'AtomButton',
    render: function() {
        return (
            <button {...this.props}>{this.props.children}</button>
        );
    }
});
