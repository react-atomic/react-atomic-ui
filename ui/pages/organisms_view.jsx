var React = require('react'),
    List = require('react-atomic-ui/ui/molecules/list'),
    Item = require('react-atomic-ui/ui/molecules/item'),
    ItemBoxDemo = require('../doc/examples/item_view_example'),
    FetchDemo = require('../doc/examples/fetch_demo'),
    Classable = require('react-atomic-ui/ui/mixins/classable');

module.exports = React.createClass({
  mixins: [Classable],

  render: function() {
    var { ...other } = this.props,
    classes = this.getClasses('');
    return (
        <List>
            <Item><ItemBoxDemo /></Item>
            <Item><FetchDemo /></Item>
        </List>
    );
  }

});

