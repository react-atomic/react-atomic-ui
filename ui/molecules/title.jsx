var React = require('react');
var AtomDiv = require('../atoms/div.jsx');
var Classable = require('../mixins/classable');

module.exports = React.createClass({
    displayName: 'Title',
    mixins: [Classable],

    render: function() {
        var classes = this.getClasses('title');
        return (
          <AtomDiv {...this.props} className={classes}>{this.props.children}</AtomDiv>
        );
    }

});
