require([
    'react',
    'react-atomic-ui/ui/molecules/button.jsx'
],function(React,Button){
var FetchExample = React.createClass({

  render: function() {
    return (
      <Button onClick={this.onclick}>Fetch</Button>
    );
  },
  onclick: function(){
    require(['superagent'],function(req){
        req.get("http://tw.yahoo.com")
           .withCredentials()
           .end(function(res){
              console.log(res);
           });
    });
  }

});

/*Code Demo*/

var CodeExample = require('react-atomic-ui/ui/molecules/code_example');

module.exports = React.createClass({
  displayName: 'FetchDemo',
  render: function() {
    var codeString=`
      <Button onClick={this.onclick}>Fetch</Button>
    `;
    return (
        <CodeExample code={codeString} title="Fetch Demo">
            <FetchExample />
        </CodeExample>
    );
  }
});

});
