var React = require('react');
var Segment = require('../molecules/segment.jsx');
var AtomDiv = require('../atoms/div.jsx');
var DivingHeader = require('../molecules/dividing_header.jsx');
var Ribbon = require('../molecules/ribbon.jsx');
var CodeBlock = require('../molecules/code_block.jsx');

module.exports = React.createClass({
    displayName: 'CodeExample',

    propTypes: {
      code: React.PropTypes.string.isRequired
    },

    render: function() {
        var title = this.props.title;
        return (
            <Segment>
                <DivingHeader style={{marginBottom:'10px'}}>
                    {title}
                </DivingHeader>
                <Ribbon style={{marginBottom:'10px'}}>Example</Ribbon>
                <AtomDiv style={{marginBottom:'10px'}}>
                        {this.props.children}
                </AtomDiv>
                <Ribbon>Source Code</Ribbon>
                <CodeBlock>{this.props.code}</CodeBlock>
            </Segment>
        );
    }

});

