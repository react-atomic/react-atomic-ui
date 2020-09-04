import React from "react";
import { DividingHeader } from "react-atomic-molecule";

const HeaderLink = (props) => (
  <DividingHeader
    atom="a"
    target="_blank"
    style={{ display: "block" }}
    {...props}
  />
);

export default HeaderLink;
