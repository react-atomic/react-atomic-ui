var React = require('react'),
    AtomDiv = require('../atoms/div'),
    AtomNav = require('../atoms/nav'),
    Dimmer  = require('../molecules/dimmer'),
    Hamburg = require('../molecules/hamburg_button'),
    SideNavigation = require('../molecules/side_navigation'),
    List = require('../molecules/list'),
    Item = require('../molecules/item'),
    NavLink = require('flux-router-component').NavLink, 
    RouterMixin = require('flux-router-component').RouterMixin,
    Classable = require('../mixins/classable.js');



var SidebarLayout = React.createClass({
  mixins: [Classable,RouterMixin],
  getInitialState: function(){
    return {
      showSideNavigation: false,
      route:this.props.route 
    }
  },
  render: function() {
    var { pages,context,  ...other } = this.props,
        state = this.state,
        classes = this.getClasses('ui segment');
    var self=this;
    return (
      <AtomDiv id="layout">
          <AtomNav style={{backgroundColor:'#5677fc'}}>
            <Hamburg onClick={this.onNavButtonClick} color="#fff" />
          </AtomNav>
          <Dimmer show={state.showSideNavigation} onClick={this.onDimmerClick}/>
          <SideNavigation show={state.showSideNavigation}>
            <List>
               {
                pages.map(function(page){
                     return(
                       <Item key={page.name}> 
                            <NavLink href={page.url} routeName={page.name} context={context}>                       
                            {page.text} 
                            </NavLink>
                       </Item>
                     ); 
                })
               } 
            </List>
          </SideNavigation>
          {this.props.view}
      </AtomDiv>
    );
  },
  componentWillReceiveProps: function(nextProps) {
    this.setState({showSideNavigation: false, route:nextProps.route});
  },
  onDimmerClick: function(){
    this.setState({showSideNavigation: false});
  },
  onNavButtonClick: function() {
    this.setState({showSideNavigation: !this.state.showSideNavigation});
  }
});
module.exports=SidebarLayout;
