var React = require('react');
var SemanticUI = require('../molecules/semantic_ui.jsx');
var Classable = require('../mixins/classable');

module.exports = React.createClass({
    displayName: 'Avatar',
    mixins: [Classable],
    render: function() {
        var classes = this.getClasses('avatar');
        return (
            <SemanticUI atom="img" {...this.props} className={classes} />
        );
    }
});
