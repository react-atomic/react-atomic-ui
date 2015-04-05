var React = require('react/addons');
var RouterMixin = require('flux-router-component').RouterMixin;
var SemanticUI = require('../molecules/semantic_ui.jsx');
var assign = require("react/lib/Object.assign");

module.exports = React.createClass({
    displayName: 'Fluxible',
    mixins: [RouterMixin],
    render: function() {
        return (
          <SemanticUI {...this.props}>{this.renderChildren()}</SemanticUI>
        );
    },
    renderChildren:function(){
        return React.Children.map(
            this.props.children,
            function (child) {
                return React.addons.cloneWithProps(
                    child,assign(
                        {},
                        this.props, {
                            children:null,
                            id:null,
                            styles:null
                        },
                        child.props
                    )
                );
            }.bind(this));
    },
    componentWillReceiveProps: function(nextProps) {
        this.setState({route:nextProps.route});
    },
});
