var React = require('react'),
    AtomPre = require('../atoms/pre'),
    AtomCode = require('../atoms/code');

module.exports = React.createClass({
    render: function() {
        return (
            <AtomPre className="code-block">
                <AtomCode>{this.props.children}</AtomCode>
            </AtomPre>
        );
    }
});
