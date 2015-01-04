var React = require('react');

var App = React.createFactory(require('./doc/index'));

module.exports = React.createClass({
  displayName: 'MyApp',
  // For ease of illustration, we just use the React JS methods directly
  // (no JSX compilation needed)
  render: function() {
    return (
     App({ prop: 'value' })
    );
  },
});

