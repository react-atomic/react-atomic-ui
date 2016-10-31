var React = require('react'),
    Button = require('react-atomic-ui/ui/molecules/button.jsx');

var ButtonExample = React.createClass({

  render: function() {
    return (
      <Button>Follow</Button>
    );
  }

});

/*Code Demo*/

var CodeExample = require('react-atomic-ui/ui/molecules/code_example.jsx');

module.exports = React.createClass({
  displayName: 'ButtonDemo',
  render: function() {
    var codeString=`
      <Button>Follow</Button>
    `;
    return (
        <CodeExample code={codeString} title="Button Demo">
            <ButtonExample />
        </CodeExample>
    );
  }
});
