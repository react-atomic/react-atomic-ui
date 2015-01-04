var React = require('react');

var App = React.createFactory(require('./doc/index'));


// This is just a simple example of a component that can be rendered on both
// the server and browser

var DocumentationApplicationView = React.createClass({


  // For ease of illustration, we just use the React JS methods directly
  // (no JSX compilation needed)
  // Note that we allow the button to be disabled initially, and then enable it
  // when everything has loaded
  render: function() {
    return (
     App({ prop: 'value' })
    );
  },
});


module.exports = DocumentationApplicationView;
