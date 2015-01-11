var React = require('react');
var AtomPre = require('../atoms/pre.jsx');
var AtomCode = require('../atoms/code.jsx');

module.exports = React.createClass({
    displayName: 'CodeBlock',
    render: function() {
        return (
            <AtomPre className="code-block">
                <AtomCode>{this.props.children}</AtomCode>
            </AtomPre>
        );
    }
});
