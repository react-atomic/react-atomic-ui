require(['react','react-style','./doc/index'],function(React,ReactStyle,MyApp){
    MyApp = React.createFactory(MyApp);
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      ReactStyle.inject();
      window.app=React.render(MyApp(), document.body);
      window.React=React;
    }else{
      //window.app=MyApp;
    }
var httpinvoke = require('httpinvoke');

httpinvoke('http://tw.yahoo.com', 'GET', function(err, body, statusCode, headers) {
    if(err) {
        return console.log('Failure', err);
    }
    console.log('Success', body, statusCode, headers);
});
});
