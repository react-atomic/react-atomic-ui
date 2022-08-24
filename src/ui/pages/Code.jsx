/*Base*/
import CodeExample from "organism-react-code";
import usePage from "../../usePage";

import CodeExampleExample from "../organisms/CodeExample.example";

import CodeEditorExample from "../organisms/CodeEditor.example";
import codeEditorExample from "../../../../../src/ui/organisms/CodeEditor.example.jsx?raw";

const Code = (props) => {
  usePage({ ...props, pageName: "Code" });
  return (
    <>
      <CodeExampleExample />

      <CodeExample code={codeEditorExample} header="Codemirror Example">
        <CodeEditorExample />
      </CodeExample>
    </>
  );
};

export default Code;
