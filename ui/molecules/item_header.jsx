var React = require('react');
var AtomDiv = require('../atoms/div.jsx');
var Classable = require('../mixins/classable');

module.exports = React.createClass({
    displayName: 'Header',
    mixins: [Classable],
    render: function() {
        var classes = this.getClasses('header');
        return (
          <AtomDiv {...this.props} className={classes}>{this.props.children}</AtomDiv>
        );
    }
});

