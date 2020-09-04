import React, { PureComponent } from "react";

import { Menu, Item, InputBox } from "react-atomic-molecule";
import SearchIcon from "ricon/Search";

import { TabView, Tab } from "organism-react-navigation";

const RightMenu = () => (
  <Menu className="right" ui={false}>
    <Item style={{ boxSizing: "border-box" }}>
      <InputBox icon={<SearchIcon />} transparent placeholder="Search..." />
    </Item>
  </Menu>
);

class TabViewExample extends PureComponent {
  render() {
    return (
      <TabView rightMenu={<RightMenu />}>
        <Tab>
          <div>content1</div>
          <div>menu1</div>
        </Tab>
        <Tab>
          <div>content2</div>
          <div>menu2</div>
        </Tab>
      </TabView>
    );
  }
}

export default TabViewExample;
