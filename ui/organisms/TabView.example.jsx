import React, {useState} from "react";

import {
  SemanticUI,
  Menu,
  Item,
  InputBox,
  Button,
} from "react-atomic-molecule";
import SearchIcon from "ricon/Search";

import { TabView, Tab } from "organism-react-navigation";

const RightMenu = () => (
  <Menu className="right" ui={false}>
    <Item style={{ boxSizing: "border-box" }}>
      <InputBox icon={<SearchIcon />} transparent placeholder="Search..." />
    </Item>
  </Menu>
);

const TabViewExample = (props) => {
  const [selected, setSelected] = useState();
  return (
    <SemanticUI>
      <TabView selected={selected} rightMenu={<RightMenu />}>
        <Tab>
          <div>content1</div>
          <div>menu1</div>
        </Tab>
        <Tab>
          <div>content2</div>
          <div>menu2</div>
        </Tab>
      </TabView>
      <Button onClick={()=>setSelected(0)}>to tab1</Button>
      <Button onClick={()=>setSelected(1)}>to tab2</Button>
    </SemanticUI>
  );
};

export default TabViewExample;
