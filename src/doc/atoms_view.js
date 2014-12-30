var React = require('react'),
    AtomDiv = require('../ui/atoms/div'),
    Classable = require('../ui/mixins/classable');

module.exports = React.createClass({
  mixins: [Classable],

  render: function() {
    var { ...other } = this.props,
    classes = this.getClasses('');
    return (
      <AtomDiv {...other} className={classes}>This is a test</AtomDiv>
    );
  }

});

