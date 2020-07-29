import React from "react";

/*Base*/
import CodeExample from "organism-react-code";
import BasePage from "../pages/BasePage";
import Doc from "../templates/Doc";

/*Sample*/
import GrapesJsExample from "../organisms/GrapesJs.example";
import grapesJsExample from "!raw-loader!../../../ui/organisms/GrapesJs.example";

class GrapesJsPage extends BasePage {
  static defaultProps = {
    pageName: "GrapesJs",
  };

  render() {
    return (
      <Doc>
        <CodeExample
          code={grapesJsExample}
          header="GrapesJs Example"
          edit="https://codesandbox.io/s/iframegrapejs-g40gq"
          git="react-atomic/react-atomic-organism/tree/master/packages/organism-react-grapesjs/"
        >
          <GrapesJsExample />
        </CodeExample>
      </Doc>
    );
  }
}

export default GrapesJsPage;
