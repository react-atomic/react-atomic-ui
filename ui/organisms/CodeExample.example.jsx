import React from "react";

/**
 * Production please use
 * import CodeExample from 'organism-react-code'
 */
import CodeExample from "organism-react-code";

/**
 * Your source code.
 * npm i raw-loader
 */
import code from "!raw-loader!../organisms/CodeExample.example";

const CodeExampleExample = (props) => (
  <CodeExample
    code={code}
    header="Test Header"
    git="react-atomic/react-atomic-organism/tree/master/packages/organism-react-code/"
    npm="organism-react-code"
  >
    <div>Test Demo Area</div>
  </CodeExample>
);

export default CodeExampleExample;
