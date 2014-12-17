var React = require('react');
var MyApp = React.createFactory(require('./myApp'));
if (typeof window !== 'undefined') {
  React.render(MyApp(), document.getElementById('container'));
}else{
 var myAppHtml = React.renderToString(MyApp())
 console.log(myAppHtml);
}
