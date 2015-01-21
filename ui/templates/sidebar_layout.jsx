var React = require('react'),
    ReactStyle = require('react-style'),
    AtomDiv = require('../atoms/div'),
    AtomNav = require('../atoms/nav'),
    Dimmer  = require('../molecules/dimmer'),
    Hamburger = require('../molecules/hamburger_button'),
    SideNavigation = require('../molecules/side_navigation'),
    Item = require('../molecules/item'),
    Title = require('../molecules/title'),
    Classable = require('../mixins/classable'),
    NavLink = require('flux-router-component').NavLink;
var Fluxible = require('../organisms/fluxible.jsx');

    var Styles={
        nav: ReactStyle({
            backgroundColor:'#5677fc',
            minHeight:'80px',
        }),
        side: ReactStyle({
            paddingTop:"60px"
        }),
        hamburger: ReactStyle({
            marginLeft:"24px",
            position:'absolute',
            top:'5px',
            zIndex:'1002',
        }),
        content: ReactStyle({
            position: 'fixed'
        }),
        initTitle: ReactStyle({
            fontSize: '56px',
            color: '#fff',
            margin: '0 100px',
        }),
    };

module.exports = React.createClass({
  displayName: 'SidebarLayout',
  mixins: [Classable],
  getInitialState: function(){
    return {
      showSideNavigation: false,
      route:this.props.route 
    }
  },
  render: function() {
    var { pages,context,  ...other } = this.props,
        state = this.state,
        content = [],
        classes = this.getClasses('ui segment');
    if(state.showSideNavigation){
        content.push(Styles.content);
    }
    return (
      <Fluxible {...this.props} id="layout">
          <AtomNav styles={[Styles.nav]}>
            <Hamburger on={state.showSideNavigation} onTap={this.onNavButtonClick} color="#fff" styles={[Styles.hamburger]} />
            <Title styles={[Styles.initTitle]}>{this.props.title}</Title>
          </AtomNav>
          <Dimmer show={state.showSideNavigation} zIndex="2" opacity=".5" onClick={this.onDimmerClick}/>
          <SideNavigation 
                styles={[Styles.side]} 
                show={state.showSideNavigation}
                className="vertical"
          >
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
          </SideNavigation>
          <AtomDiv styles={content}>
            {this.props.view}
          </AtomDiv>
      </Fluxible>
    );
  },
  componentWillReceiveProps: function(nextProps) {
    this.setState({showSideNavigation: false});
  },
  onDimmerClick: function(){
    this.setState({showSideNavigation: false});
  },
  onNavButtonClick: function(e) {
    e.preventDefault();
    this.setState({showSideNavigation: !this.state.showSideNavigation});
  }
});
