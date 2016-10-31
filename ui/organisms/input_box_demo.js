var React = require('react');
    InputBox = require('react-atomic-ui/ui/molecules/inputbox');

var InputBoxExample = React.createClass({
  displayName: 'InputBoxExample',
  render: function() {
    return (
      <InputBox type="text" placeholder="Search..." />
    );
  }

});

/*Code Demo*/

var CodeExample = require('react-atomic-ui/ui/molecules/code_example');

module.exports = React.createClass({
  displayName: 'InputBoxDemo',
  render: function() {
    var codeString=`
      <InputBox type="text" placeholder="Search..." />
    `;
    return (
        <CodeExample code={codeString} title="Input Box Demo">
            <InputBoxExample />
        </CodeExample>
    );
  }
});


