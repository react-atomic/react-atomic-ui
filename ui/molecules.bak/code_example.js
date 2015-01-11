var React = require('react'),
    Segment = require('../molecules/segment'),
    AtomDiv = require('../atoms/div'),
    DivingHeader = require('../molecules/dividing_header'),
    Ribbon = require('../molecules/ribbon'),
    CodeBlock = require('../molecules/code_block');

module.exports = React.createClass({
   displayName: 'CodeExample',

    propTypes: {
      code: React.PropTypes.string.isRequired
    },

    render: function() {
        var { title,...other } = this.props;
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

