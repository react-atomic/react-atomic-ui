var React = require('react');
var MyApp = React.createFactory(require('./myApp'));
if (typeof window !== 'undefined') {
  React.render(MyApp(), document.getElementById('container'));
}else{
  var tmp = React.renderToString(MyApp());
  console.log(tmp);
}
