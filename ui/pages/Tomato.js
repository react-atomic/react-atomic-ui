import React from "react";

/*Base*/
import BasePage from "../molecules/BasePage";

/*Sample*/

import TomatoApp from "../organisms/TomatoApp";
import Sortable from "../organisms/Sortable";


class Tomato extends BasePage {
  static defaultProps = {
    pageName: "Tomato",
  };

  render() {
    return (
        <>
        <TomatoApp />
        <Sortable />
        </>
    );
  }
}

export default Tomato;
