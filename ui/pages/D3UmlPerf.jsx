import React from "react";

/*Base*/
import CodeExample from "organism-react-code";
import BasePage from "../pages/BasePage";
import Doc from "../templates/Doc";

/*Sample*/

import D3UmlPerf from "../organisms/D3UmlPerf.example";
import d3UmlPerf from "!raw-loader!../../../ui/organisms/D3UmlPerf.example";


class D3UmlPerfPage extends BasePage {
  static defaultProps = {
    pageName: "d3UmlPerf",
  };

  render() {
    return (
      <Doc>
        <CodeExample code={d3UmlPerf} header="D3 Uml" id="d3-uml">
          <D3UmlPerf />
        </CodeExample>
      </Doc>
    );
  }
}

export default D3UmlPerfPage;
