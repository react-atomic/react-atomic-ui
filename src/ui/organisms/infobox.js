var React = require('react'),
    ReactStyle = require('react-style'),
    AtomDiv = require('../atoms/div'),
    Description = require('../molecules/description'),
    Header = require('../molecules/item_header'),
    Classable = require('../mixins/classable');

module.exports = React.createClass({
  mixins: [Classable],

  render: function() {
    var { title,desc,...other } = this.props,
    classes = this.getClasses('');
    var styles = ReactStyle({
      color: 'red',
        backgroundColor: 'white'
        });
    return (
      <AtomDiv {...other} className={classes} style={{border:'1px solid #e7e7e7',padding:'30px 30px 20px 30px'}}>
            <Header style={{margin:0,textAlign:'left',fontSize:'16px',color:'#354c8d',fontWeight:700}}> 
            {title}
            </Header>
            <Description> 
            {desc}
            </Description>
      </AtomDiv>
    );
  }

});

