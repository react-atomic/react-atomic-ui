/* jshint esnext: true */
var React = require('react'),
    AtomDiv = require('../atoms/div'),
    CircularImg = require('../molecules/circular_img'),
    Button = require('../molecules/button'),
    Labels = require('../molecules/labels'),
    Description = require('../molecules/description'),
    Header = require('../molecules/item_header'),
    Meta = require('../molecules/item_meta'),
    Content = require('../molecules/item_content'),
    Info = require('../molecules/item_info'),
    InfoBox = require('../organisms/infobox'), 
    TextItem = require('../organisms/text_item'),
    Classable = require('../mixins/classable');

module.exports = React.createClass({
  mixins: [Classable],

  render: function() {
    var { name,...other } = this.props;
    var classes = this.getClasses('item');
    return (
      <AtomDiv className="ui items" style={{backgroundColor:'#fff',border:'1px solid #e7e7e7',padding:'40px 30px 35px 30px'}} >
          <AtomDiv {...other} className={classes} >
            <Info style={{textAlign:'center'}}> 
                <CircularImg src="http://semantic-ui.com/images/wireframe/image.png" />
                <Button style={{marginTop:'10px'}}>Hire {name}</Button>
            </Info>
            <Content> 
                <Header> 
                bbbbb 
                </Header>
                <Meta> 
                    Union Square 14
                </Meta>
                <Description> 
                ..................
                </Description>
                <Labels className="extra" list={[{name:'IMAX'},{name:'Additional Languages',icon:'global'}]} /> 
            </Content>
          </AtomDiv>
          <AtomDiv className="pure-g">
            <InfoBox className="pure-u-1-2" title="PORTFOLIO:" desc="Toptal,Freelance"/>
            <InfoBox className="pure-u-1-2" title="EXPERIENCE:" desc="PHP"/>
            <InfoBox className="pure-u-1-2" title="AVAILABILITY:" desc="Part-time"/>
            <InfoBox className="pure-u-1-2" title="PREFERRED ENVIRONMENT:" desc="CakePHP,Ubuntu"/>
          </AtomDiv>
          <TextItem title="EMPLOYMENT:" />
          <TextItem title="EXPERIENCE:" />
          <TextItem title="SKILLS:"/>
          <TextItem title="EDUCATION:"/>
      </AtomDiv>
    );
  }

});

