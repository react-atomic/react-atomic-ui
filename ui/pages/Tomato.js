import React from "react";

/*Base*/
import BasePage from "../molecules/BasePage";
import Doc from "../templates/Doc";

/*Sample*/

import TomatoApp from "../organisms/TomatoApp";


class Tomato extends BasePage {
  static defaultProps = {
    pageName: "Tomato",
  };

  render() {
    return (
      <Doc>
        <TomatoApp />
      </Doc>
    );
  }
}

export default Tomato;
