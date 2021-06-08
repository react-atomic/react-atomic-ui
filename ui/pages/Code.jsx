import React from "react";

/*Base*/
import CodeExample from "organism-react-code";
import BasePage from "../molecules/BasePage";

import CodeExampleExample from "../organisms/CodeExample.example";
import CodeEditorExample from "../organisms/CodeEditor.example";
import codeEditorExample from "!raw-loader!../../../../ui/organisms/CodeEditor.example";

class Code extends BasePage {
  static defaultProps = {
    pageName: "Code",
  };

  render() {
    return (
      <>
        <CodeExampleExample />

        <CodeExample code={codeEditorExample} header="Codemirror Example">
          <CodeEditorExample />
        </CodeExample>
      </>
    );
  }
}

export default Code;
