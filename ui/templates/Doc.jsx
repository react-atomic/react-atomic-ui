import React, { Component } from "react";
import { getDocTemplate } from "organism-react-navigation";
import Menu from "../molecules/Menu";

const DocTemplate = getDocTemplate({
  sideWidth: 160,
  active: true,
});

const Doc = ({ children, ...props }) => (
  <DocTemplate {...props} body={children} menu={<Menu />} />
);

export default Doc;
