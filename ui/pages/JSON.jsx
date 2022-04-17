/*Base*/
import CodeExample from "organism-react-code";
import usePage from "../../src/usePage";

/*Sample*/
import QueryToJSON from "../organisms/QueryToJSON";
import queryToJSON from "../../../../ui/organisms/QueryToJSON.jsx?raw";

const JSON = props => {
    usePage({ ...props, pageName: "JSON" });
    return (
      <>
        <CodeExample code={queryToJSON} header="Query To JSON">
          <QueryToJSON />
        </CodeExample>
      </>
    );
};

export default JSON;
