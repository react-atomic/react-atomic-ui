var React = require('react'),
    AtomDiv = require('../atoms/div'),
    Title = require('../molecules/blog_title'),
    SubTitle = require('../molecules/blog_subtitle'),
    Items = require('../organisms/items'),
    Profile = require('../organisms/profile'),
    Classable = require('../mixins/classable.js');

module.exports = React.createClass({
  mixins: [Classable],
  getInitialState: function(){
    return {view:1};
  },
  render: function() {
    var { ...other } = this.props,
    classes = this.getClasses('ui segment');
    var data = ['a','b','c','d','e'];
    var show;
    if(this.state.view){
        show=<Items onClick={this.onClick(0)} list={data}/>;
    }else{
        show=<Profile />;
    }

    return (
      <AtomDiv id="layout" className="pure-g">
          <AtomDiv className="sidebar pure-u-1 pure-u-md-1-4">
            <AtomDiv className="header">
             <Title>People List</Title>
             <SubTitle>Subject Title</SubTitle>
            </AtomDiv>
          </AtomDiv>
          <AtomDiv className="content pure-u-1 pure-u-md-3-4">
            <AtomDiv>
            {show}
            </AtomDiv>
          </AtomDiv>
      </AtomDiv>
    );
  },
  onClick: function(position) {
    var self = this;
    return function() {
      self.setState({view: position});
    }
  }

});

