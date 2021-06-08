import React from "react";

/*Base*/
import CodeExample from "organism-react-code";
import BasePage from "../molecules/BasePage";

/*Sample*/

import D3UmlPerfExample from "../organisms/D3UmlPerf.example";
import d3UmlPerfExample from "!raw-loader!../../../../ui/organisms/D3UmlPerf.example";


class D3UmlPerf extends BasePage {
  static defaultProps = {
    pageName: "D3UmlPerf",
  };

  render() {
    return (
      <>
        <CodeExample code={d3UmlPerfExample} header="D3 Uml" id="d3-uml">
          <D3UmlPerfExample />
        </CodeExample>
      </>
    );
  }
}

export default D3UmlPerf;
