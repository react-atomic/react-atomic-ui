import React from "react";

/*Base*/
import BasePage from "../molecules/BasePage";

/*Sample*/

import TomatoApp from "../organisms/TomatoApp";


class Tomato extends BasePage {
  static defaultProps = {
    pageName: "Tomato",
  };

  render() {
    return (
        <TomatoApp />
    );
  }
}

export default Tomato;
