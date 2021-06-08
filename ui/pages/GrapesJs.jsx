import React from "react";

/*Base*/
import CodeExample from "organism-react-code";
import BasePage from "../molecules/BasePage";

/*Sample*/
import GrapesJsExample from "../organisms/GrapesJs.example";
import grapesJsExample from "!raw-loader!../../../../ui/organisms/GrapesJs.example";

import RTEExample from "../organisms/RTE.example";
import rteExample from "!raw-loader!../../../../ui/organisms/RTE.example";

class GrapesJsPage extends BasePage {
  static defaultProps = {
    pageName: "GrapesJs",
  };

  render() {
    return (
      <>
        <CodeExample
          code={grapesJsExample}
          header="GrapesJs Example"
          edit="https://codesandbox.io/s/organism-react-grapesjs-04mo7"
          git="react-atomic/react-atomic-organism/tree/master/packages/organism-react-grapesjs/"
        >
          <GrapesJsExample />
        </CodeExample>

        <CodeExample code={rteExample} header="RTE Example">
          <RTEExample />
        </CodeExample>
      </>
    );
  }
}

export default GrapesJsPage;
