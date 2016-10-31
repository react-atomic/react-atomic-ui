var React = require('react'),
    Button = require('react-atomic-ui/ui/molecules/button'),
    InputUI = require('react-atomic-ui/ui/molecules/input_ui'),
    InputBox = require('react-atomic-ui/ui/molecules/inputbox');

var InputUIExample = React.createClass({
  displayName: 'InputUIExample',
  render: function() {
    return (
      <InputUI>
        <InputBox ui={false} type="text" placeholder="Search..." />
        <Button>Go</Button>
      </InputUI>
    );
  }

});

/*Code Demo*/

var CodeExample = require('react-atomic-ui/ui/molecules/code_example');

module.exports = React.createClass({
  displayName: 'InputDemo',
  render: function() {
    var codeString=`
      <InputUI>
        <InputBox ui={false} type="text" placeholder="Search..." />
        <Button>Go</Button>
      </InputUI>
    `;
    return (
        <CodeExample code={codeString} title="Input UI Demo">
            <InputUIExample />
        </CodeExample>
    );
  }
});


