var React = require('react'),
    ReactStyle = require('react-style'),
    AtomDiv = require('../atoms/div'),
    AtomSvg = require('../atoms/svg'),
    Classable = require('../mixins/classable.js');

var Hamburg = React.createClass({
  mixins: [Classable],

  render: function() {
    var { style, color, ...other } = this.props,
    classes = this.getClasses('');
    var dynStyle = ReactStyle(style);
    var styles = ReactStyle({
        width:'25px',
        height:'25px'
    });
    return (
      <AtomDiv {...other} className={classes} styles={[styles,dynStyle]}>{this.props.children}
          <AtomSvg viewBox="0 0 24 24" height="100%" width="100%" preserveAspectRatio="xMidYMid meet">
            <path style={{fill:color}} d="M3,18h18v-2H3V18z M3,13h18v-2H3V13z M3,6v2h18V6H3z"></path>
          </AtomSvg>
      </AtomDiv>
    );
  }

});
module.exports=Hamburg;
