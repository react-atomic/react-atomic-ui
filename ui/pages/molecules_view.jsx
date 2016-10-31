var React = require('react'),
    AtomDiv = require('react-atomic-ui/ui/atoms/div'),
    List = require('react-atomic-ui/ui/molecules/list'),
    Item = require('react-atomic-ui/ui/molecules/item'),
    Avatar = require('react-atomic-ui/ui/molecules/avatar'),
    CodeExample = require('react-atomic-ui/ui/molecules/code_example'),
    Content = require('react-atomic-ui/ui/molecules/item_content'),
    Header = require('react-atomic-ui/ui/molecules/item_header'),
    Meta = require('react-atomic-ui/ui/molecules/item_meta'),
    Description = require('react-atomic-ui/ui/molecules/description'),
    Icon = require('react-atomic-ui/ui/molecules/icon'),
    ButtonDemo = require('../doc/examples/button_demo'),
    InputBoxDemo = require('../doc/examples/input_box_demo'),
    InputUIDemo = require('../doc/examples/input_ui_demo'),
    Classable = require('react-atomic-ui/ui/mixins/classable');

/*
var PeopleList = React.createClass({
  render: function() {
    var codeString=`
    `;
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
  displayName: 'Molecules',
  mixins: [Classable],
  render: function() {
    var { ...other } = this.props,
    classes = this.getClasses('');
    return (
        <List style={{padding:'28px'}}>
            <Item><ExampleList /></Item>
            <Item><ExampleComplicatedList /></Item>
            <Item><ButtonDemo /></Item>
            <Item><InputBoxDemo /></Item>
            <Item><InputUIDemo /></Item>
        </List>
    )
  }
});

