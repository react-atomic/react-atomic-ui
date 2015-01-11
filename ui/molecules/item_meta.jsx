var React = require('react');
var AtomDiv = require('../atoms/div.jsx');
var AtomSpan = require('../atoms/span.jsx');
var Classable = require('../mixins/classable');

module.exports = React.createClass({
  displayName: 'Meta',
  mixins: [Classable],

  render: function() {
    var classes = this.getClasses('meta');
    return (
      <AtomDiv {...this.props} className={classes}><AtomSpan>{this.props.children}</AtomSpan></AtomDiv>
    );
  }

});

