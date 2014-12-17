var React = require('react'),
    AtomDiv = require('../atoms/div'),
    AtomSpan = require('../atoms/span'),
    CircularImg = require('../molecules/circular_img'),
    Button = require('../molecules/button'),
    Label = require('../molecules/label'),
    Icon = require('../molecules/icon'),
    Classable = require('../mixins/classable.js');

module.exports = React.createClass({
  mixins: [Classable],

  render: function() {
    var { ...other } = this.props,
    classes = this.getClasses('item');
    return (
      <AtomDiv {...other} className={classes}>
        <AtomDiv className="image"> 
            <CircularImg src="http://semantic-ui.com/images/wireframe/image.png" />
            <Button>Hire Ryan</Button>
        </AtomDiv>
        <AtomDiv className="content"> 
            <AtomDiv className="header"> 
            12 Years a Slave
            </AtomDiv>
            <AtomDiv className="meta"> 
                <AtomSpan>Union Square 14</AtomSpan>
            </AtomDiv>
            <AtomDiv className="description"> 
            ..................
            </AtomDiv>
            <AtomDiv className="extra"> 
                <Label>IMAX</Label>
                <Label><Icon className="global"/>Additional Languages</Label>
            </AtomDiv>
        </AtomDiv>
      </AtomDiv>
    );
  }

});

