/*Base*/
import CodeExample from "organism-react-code";
import usePage from "../../src/usePage";

/*Sample*/

import D3UmlPerfExample from "../organisms/D3UmlPerf.example";
import d3UmlPerfExample from "../../../../ui/organisms/D3UmlPerf.example.jsx?raw";

const D3UmlPerf = props =>
{
    usePage({ ...props, pageName: "D3UmlPerf" });
    return (
      <>
        <CodeExample code={d3UmlPerfExample} header="D3 Uml" id="d3-uml">
          <D3UmlPerfExample />
        </CodeExample>
      </>
    );
}

export default D3UmlPerf;
