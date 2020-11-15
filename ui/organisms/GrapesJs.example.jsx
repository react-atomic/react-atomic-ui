import React from "react";
import { GrapesJsController } from "organism-react-grapesjs";

const GrapesJsExample = () => <GrapesJsController style={Styles.container} debug />;

export default GrapesJsExample;

const Styles = {
  container: {
    minHeight: 600,
  },
};
