var React = require('react'),
    ReactStyle = require('react-style'),
    AtomSpan = require('../atoms/span'),
    Item = require('../molecules/item'),
    CircularImg = require('../molecules/circular_img'),
    Button = require('../molecules/button'),
    Labels = require('../molecules/labels'),
    Description = require('../molecules/description'),
    Header = require('../molecules/item_header'),
    Meta = require('../molecules/item_meta'),
    Content = require('../molecules/item_content'),
    Info = require('../molecules/item_info'),
    Classable = require('../mixins/classable');

module.exports = React.createClass({
  mixins: [Classable],

  render: function() {
    var { name,...other } = this.props,
    classes = this.getClasses('');
    return (
      <Item {...other} className={classes} style={{backgroundColor:'#fff',border:'1px solid #e7e7e7',padding:'40px 30px 35px 30px'}}>
        <Info style={{textAlign:'center'}}> 
            <CircularImg src="http://semantic-ui.com/images/wireframe/image.png" />
            <Button style={{marginTop:'10px'}}>Hire {name}</Button>
        </Info>
        <Content> 
            <Header> 
            12 Years a Slave
            </Header>
            <Meta> 
                Union Square 14
            </Meta>
            <Description> 
            ..................
            </Description>
            <Labels className="extra" list={[{name:'IMAX'},{name:'Additional Languages',icon:'global'}]} /> 
        </Content>
      </Item>
    );
  }

});

