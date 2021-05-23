import React from "react";
/*Base*/
import CodeExample from "organism-react-code";
import BasePage from "../molecules/BasePage";
import Doc from "../templates/Doc";

/*Sample*/
import HTMLToCanvansExample from "../organisms/HTMLToCanvans.example";
import htmlToCanvansExample from "!raw-loader!../../../../ui/organisms/HTMLToCanvans.example";

class PDF extends BasePage {
  static defaultProps = {
    pageName: "PDF",
  };

  render() {
    return (
      <Doc>
        <CodeExample code={htmlToCanvansExample} header="PDF Example">
          <HTMLToCanvansExample />
        </CodeExample>
      </Doc>
    );
  }
}

export default PDF;
