/*Base*/
import CodeExample from "organism-react-code";
import usePage from "../../src/usePage";

/*Sample*/
import GrapesJsExample from "../organisms/GrapesJs.example";
import grapesJsExample from "!raw-loader!../../../../ui/organisms/GrapesJs.example";

import RTEExample from "../organisms/RTE.example";
import rteExample from "!raw-loader!../../../../ui/organisms/RTE.example";

const GrapesJs = props => {
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
}

export default GrapesJs;
