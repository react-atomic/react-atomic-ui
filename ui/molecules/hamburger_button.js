var React = require('react'),
    ReactStyle = require('react-style'),
    Touch = require('../molecules/tappable'),
    AtomSvg = require('../atoms/svg');

    var styles = ReactStyle({
        width:'25px',
        height:'25px'
    });
module.exports = React.createClass({
  displayName: 'Hamburger',

  render: function() {
    var {  color, ...other } = this.props;
    return (
      <Touch {...other} className=''  styles={[styles]}>{this.props.children}
          <AtomSvg viewBox="0 0 24 24" height="100%" width="100%" preserveAspectRatio="xMidYMid meet">
            <path style={{fill:color}} d="M3,18h18v-2H3V18z M3,13h18v-2H3V13z M3,6v2h18V6H3z"></path>
          </AtomSvg>
      </Touch>
    );
  }

});
