var React = require('react'),
    SemanticUI = require('../molecules/semantic_ui'),
    AtomInput = require('../atoms/input'),
    Classable = require('../mixins/classable');

module.exports = React.createClass({
  displayName: 'InputBox',

  mixins: [Classable],

  getDefaultProps: function() {
    return ({
        ui:true
    });
  },
  render: function() {
    
    var { ui, ...other } = this.props;
    var classes;
    if(ui){
        classes=this.getClasses('input');
    }else{
        classes=this.getClasses('');
    }
    return (
      <SemanticUI ui={ui} className={classes}>
        <AtomInput {...other} />
      </SemanticUI>
    );
  }

});

