var React = require('react'),
    Items = require('react-atomic-ui/ui/organisms/items.jsx');

var ItemViewExample = React.createClass({

  render: function() {
    var data = ['a'];
    return (
      <Items list={data}/>
    );
  }

});

/*Code Demo*/

var CodeExample = require('react-atomic-ui/ui/molecules/code_example.jsx');

module.exports = React.createClass({
  render: function() {
    var codeString=`
      <Items />
    `;
    return (
        <CodeExample code={codeString} title="Item Box Demo">
            <ItemViewExample />
        </CodeExample>
    );
  }
});


