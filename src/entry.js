require(['react','react-style','./doc/index'],function(React,ReactStyle,MyApp){
    MyApp = React.createFactory(MyApp);
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      ReactStyle.inject();
      window.app=React.render(MyApp(), document.body);
      window.React=React;
    }else{
      //window.app=MyApp;
    }
});
