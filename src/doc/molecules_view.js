var React = require('react'),
    AtomDiv = require('../ui/atoms/div'),
    List = require('../ui/molecules/list'),
    Item = require('../ui/molecules/item'),
    Avatar = require('../ui/molecules/avatar'),
    CodeExample = require('../ui/molecules/code_example'),
    Content = require('../ui/molecules/item_content'),
    Header = require('../ui/molecules/item_header'),
    Meta = require('../ui/molecules/item_meta'),
    Description = require('../ui/molecules/description'),
    Icon = require('../ui/molecules/icon'),
    Classable = require('../ui/mixins/classable');

/*
var PeopleList = React.createClass({
    var { ...other } = this.props;
    var codeString=`
    `;
  render: function() {
    return (
        <CodeExample code={codeString} title="List and Item">
        </CodeExample>
    );
  }
});
*/
var ExampleList = React.createClass({

  render: function() {
    var codeString=`
            <List>
                <Item>Apples</Item>
                <Item>Pears</Item>
                <Item>Oranges</Item>
            </List>
    `;
    return (
        <CodeExample code={codeString} title="List and Item">
            <List>
                <Item>Apples</Item>
                <Item>Pears</Item>
                <Item>Oranges</Item>
            </List>
        </CodeExample>
    )
  }

});

var ExampleComplicatedList = React.createClass({
  render: function() {
    var codeString=`
            <List>
                <Item>
                    <Avatar className="top aligned" src="http://i1.wp.com/semantic-ui.com/images/avatar/small/daniel.jpg" />
                    <Content>
                        <Header>Daniel Louise</Header>
                        <Meta>Friends since 1992</Meta>
                        <List>
                            <Item>
                                <Icon name="triangle" className="top aligned"/>
                                <Content>
                                    <Header>Hey man</Header>
                                    <Description>Hey man so I forgot to send you an invite to my party, but it's this saturday...</Description>
                                </Content>
                            </Item>
                            <Item>
                                <Icon name="triangle" className="top aligned"/>
                                <Content>
                                    <Header>Hey man</Header>
                                    <Description>Hey man so I forgot to send you an invite to my party, but it's this saturday...</Description>
                                </Content>
                            </Item>
                        </List>
                    </Content>
                </Item>
                <Item>
                    <Avatar className="top aligned" src="http://i1.wp.com/semantic-ui.com/images/avatar/small/steve.jpg" />
                    <Content>
                        <Header>Steve Jobes</Header>
                        <Meta>Work acquaintance from Apple</Meta>
                        <List>
                            <Item>
                                <Icon name="triangle" className="top aligned"/>
                                <Content>
                                    <Header>Hey man</Header>
                                    <Description>Hey man so I forgot to send you an invite to my party, but it's this saturday...</Description>
                                </Content>
                            </Item>
                            <Item>
                                <Icon name="triangle" className="top aligned"/>
                                <Content>
                                    <Header>Hey man</Header>
                                    <Description>Hey man so I forgot to send you an invite to my party, but it's this saturday...</Description>
                                </Content>
                            </Item>
                        </List>
                    </Content>
                </Item>
            </List>
    `;
    return (
        <CodeExample code={codeString} title="Complicated List Sample">
            <List atom="ol">
                <Item>
                    <Avatar className="top aligned" src="http://i1.wp.com/semantic-ui.com/images/avatar/small/daniel.jpg" />
                    <Content>
                        <Header>Daniel Louise</Header>
                        <Meta>Friends since 1992</Meta>
                        <List>
                            <Item>
                                <Icon name="triangle" className="top aligned"/>
                                <Content>
                                    <Header>Hey man</Header>
                                    <Description>Hey man so I forgot to send you an invite to my party, but it's this saturday...</Description>
                                </Content>
                            </Item>
                            <Item>
                                <Icon name="triangle" className="top aligned"/>
                                <Content>
                                    <Header>Hey man</Header>
                                    <Description>Hey man so I forgot to send you an invite to my party, but it's this saturday...</Description>
                                </Content>
                            </Item>
                        </List>
                    </Content>
                </Item>
                <Item>
                    <Avatar className="top aligned" src="http://i1.wp.com/semantic-ui.com/images/avatar/small/steve.jpg" />
                    <Content>
                        <Header>Steve Jobes</Header>
                        <Meta>Work acquaintance from Apple</Meta>
                        <List>
                            <Item>
                                <Icon name="triangle" className="top aligned"/>
                                <Content>
                                    <Header>Hey man</Header>
                                    <Description>Hey man so I forgot to send you an invite to my party, but it's this saturday...</Description>
                                </Content>
                            </Item>
                            <Item>
                                <Icon name="triangle" className="top aligned"/>
                                <Content>
                                    <Header>Hey man</Header>
                                    <Description>Hey man so I forgot to send you an invite to my party, but it's this saturday...</Description>
                                </Content>
                            </Item>
                        </List>
                    </Content>
                </Item>
            </List>
        </CodeExample>
    );
  }
});


module.exports = React.createClass({
  mixins: [Classable],

  render: function() {
    var { ...other } = this.props,
    classes = this.getClasses('');
    return (
        <List style={{padding:'28px'}}>
            <Item><ExampleList /></Item>
            <Item><ExampleComplicatedList /></Item>
        </List>
    )
  }

});

