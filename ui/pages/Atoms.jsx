import React from "react";
import Doc from "../templates/Doc";
import BasePage from "../molecules/BasePage";

class Atoms extends BasePage {
  static defaultProps = {
    pageName: "atoms",
  };

  render() {
    return <Doc>This is atom</Doc>;
  }
}

export default Atoms;
