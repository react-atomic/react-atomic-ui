/*Base*/
import CodeExample from "organism-react-code";
import usePage from "../../usePage";

/*Sample*/
import GrapesJsExample from "../organisms/GrapesJs.example";
import grapesJsExample from "../../../../../src/ui/organisms/GrapesJs.example.jsx?raw";

import RTEExample from "../organisms/RTE.example";
import rteExample from "../../../../../src/ui/organisms/RTE.example.jsx?raw";

const GrapesJs = (props) => {
  usePage({ ...props, pageName: "GrapesJs" });
  return (
    <>
      <CodeExample
        code={grapesJsExample}
        header="GrapesJs Example"
        edit="https://codesandbox.io/s/organism-react-grapesjs-04mo7"
        git="react-atomic/react-atomic-organism/tree/main/packages/organism-react-grapesjs/"
      >
        <GrapesJsExample />
      </CodeExample>

      <CodeExample code={rteExample} header="RTE Example">
        <RTEExample />
      </CodeExample>
    </>
  );
};

export default GrapesJs;
