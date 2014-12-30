var React = require('react'),
    AtomsView = require('./atoms_view'),
    MoleculesView = require('./molecules_view'),
    Layout = require('../ui/templates/sidebar_layout');


module.exports = React.createClass({
    statics: {
    },
    getInitialState: function () {
        return {
          view:'',
          route:'' 
        }
    },
    render: function(){
        var pages = [
            {
                name: 'atoms',
                url: '/react/index.html/atoms',
                text: 'Atoms'
            },
            {
                name: 'molecules',
                url: '/react/index.html/molecules',
                text: 'Molecules'
            }
        ];
        var views = {
            atoms:<AtomsView />,
            molecules:<MoleculesView />
        };
        var self=this;
        var context = {
            executeAction: function(obj,nav){
              var url = nav.url;
              var route = {
                    url:url,
                    navigate:{type:nav.type}
              };
              var params = url.split("/");
              var last=params.length-1;
    
              self.setState({
                view: views[params[last]], 
                route: route
              });
            }
        };
        var state = this.state;

        return (
                <Layout 
                    ref="layout"
                    context={context} 
                    pages={pages} 
                    view={state.view}
                    route={state.route}
                    checkRouteOnPageLoad="1"
                />
        );  
  }
});
