var React = require('react'),
    Segment = require('../molecules/segment'),
    AtomDiv = require('../atoms/div'),
    DivingHeader = require('../molecules/dividing_header'),
    Ribbon = require('../molecules/ribbon'),
    CodeBlock = require('../molecules/code_block');

module.exports = React.createClass({

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
                <Ribbon>Example</Ribbon>
                <AtomDiv>
                        {this.props.children}
                </AtomDiv>
                <Ribbon>Source Code</Ribbon>
                <CodeBlock>{this.props.code}</CodeBlock>
            </Segment>
        );
    }

});

