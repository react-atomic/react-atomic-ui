/* jshint esnext: true */
var React = require('react');
var ReactStyle = require('../mixins/styles/index');
var Touch = require('../molecules/tappable.jsx');
var AtomPath = require('../atoms/path.jsx');
var SemanticUI = require('../molecules/semantic_ui.jsx');

var Styles = {
        box: ReactStyle({
            width:'50px',
            height:'50px',
        }),
        line: ReactStyle({
            transform: 'rotate(0deg)',
            transition: 'transform .2s cubic-bezier(.4,0,.2,1), visibility 0s linear .21s',
        })
   };

module.exports = React.createClass({
  displayName: 'Hamburger',

  render: function() {
    var {  on, color, ...other } = this.props;

    var line1=[Styles.line],line2=[Styles.line],line3=[Styles.line];
    var lineColor;
    if(on){
        line1.push(ReactStyle({transform: 'rotate(38deg)  translateX(4px) '}, false ));
        line2.push(ReactStyle({transform: 'rotate(360deg) translateX(-1px) translateY(-1px)'}, false ));
        line3.push(ReactStyle({transform: 'rotate(-390deg) translateX(-7px) translateY(-7px)'}, false ));
        color="#000";
    }
    lineColor=ReactStyle({fill:color}, false);
    line1.push(lineColor);
    line2.push(lineColor);
    line3.push(lineColor);
    return (
      <Touch {...other} styles={[Styles.box,this.props.styles]}>
          <SemanticUI atom="svg" viewBox="0 0 24 24" height="100%" width="100%" preserveAspectRatio="xMidYMid meet">
            <AtomPath styles={line1} d="M3,6v2h18V6H3z"></AtomPath>
            <AtomPath styles={line2} d="M3,13h18v-2H3V13z"></AtomPath>
            <AtomPath styles={line3} d="M3,18h18v-2H3V18z"></AtomPath>
          </SemanticUI>
      </Touch>
    );
  }

});
