var React = require('react'),
    ReactStyle = require('react-style'),
    AtomDiv = require('../atoms/div'),
    AtomSpan = require('../atoms/span'),
    Description = require('../molecules/description'),
    Header = require('../molecules/item_header'),
    Meta = require('../molecules/item_meta'),
    Content = require('../molecules/item_content'),
    Info = require('../molecules/item_info'),
    Classable = require('../mixins/classable');

module.exports = React.createClass({
  mixins: [Classable],

  render: function() {
    var { title,...other } = this.props,
    classes = this.getClasses('');
    var styles = ReactStyle({
      color: 'red',
        backgroundColor: 'white'
        });
    return (
      <AtomDiv {...other} className={classes} style={{border:'1px solid #e7e7e7',padding:'30px 25px 10px 30px'}}>
        <Info style={{textAlign:'left'}}> 
            <Header style={{margin:0,textAlign:'left',fontWeight:700,color:'#354c8d'}}>
            {title}
            </Header>
        </Info>
        <Content> 
            <Description> 
            ..................
            </Description>
        </Content>
      </AtomDiv>
    );
  }

});

