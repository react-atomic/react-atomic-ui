var React = require('react');
var SemanticUI = require('../molecules/semantic_ui.jsx');
var Classable = require('../mixins/classable');

module.exports = React.createClass({
    displayName: 'YahooLogo',
    mixins: [Classable],
    getDefaultProps: function() {
        return ({
            src:'',
            href:''
        });
    },
    render: function() {
        var classes = this.getClasses('avatar');
        var style = {
            backgroundImage: 'url('+this.props.src+')',
            backgroundSize:'74px auto',
            position:'absolute',
            width: '84px',
            height: '37px',
            backgroundPosition: '50% 50%',
            textIndent: '-9999px',
            backgroundRepeat: 'no-repeat'
        };
        return (
            <SemanticUI atom="a" style={style} {...this.props} src="" className={classes}>
                {this.props.children}
            </SemanticUI>
        );
    }
});
