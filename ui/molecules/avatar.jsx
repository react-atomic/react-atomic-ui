var React = require('react');
var Image = require('../molecules/image.jsx');
var mixClass = require('classnames');

module.exports = React.createClass({
    displayName: 'Avatar',
    render: function() {
        var classes = mixClass(
            this.props.className,
            'avatar'
        );
        return (
            <Image {...this.props} className={classes} />
        );
    }
});
