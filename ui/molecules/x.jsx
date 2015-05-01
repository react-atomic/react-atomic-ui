var React = require('react');
var ReactStyle = require('../mixins/styles/index');
var SemanticUI = require('../molecules/semantic_ui.jsx');
var AtomSpan = require('../atoms/span.jsx');
var mixClass = require('classnames');
var assign = require("react/lib/Object.assign");

var Common = {
    closeBeforeAfter:{
        content:'',
        position:'absolute',
        width:'.3em',
        height:'1em',
        left:'50%',
        marginLeft:'-.15em',
        background:'#333',
        transformOrigin:'center',
        webkitTransformOrigin:'center'
    }
};

var Styles = {
    close:ReactStyle({
        position:'absolute',
        height:'1em',
        width:'1em',
        right:'5px',
        top:'5px',
        cursor:'pointer',
        background:'#fff'
    },'.icon.x'),
    closeBefore:ReactStyle(
        assign(
            Common.closeBeforeAfter,
            {
                transform:'rotate(-40deg)',
                webkitTransform:'rotate(-40deg)'
            }
        ),
        '.icon.x:before'
    ),
    closeAfter:ReactStyle(
        assign(
            Common.closeBeforeAfter,
            {
                transform:'rotate(40deg)',
                webkitTransform:'rotate(40deg)'
            }
        ),
        '.icon.x:after'
    )
    
};

module.exports = React.createClass({
    displayName: 'ICON_X',
    render: function() {
        var classes = mixClass(
            this.props.className
            ,'icon'
            ,'x'
        );
        return (
            <SemanticUI {...this.props} className={classes}></SemanticUI>
        );
    }
});
