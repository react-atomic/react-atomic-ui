/*Base*/
import CodeExample from "organism-react-code";
import usePage from "../../usePage";

/*Sample*/
import QueryToJSON from "../organisms/QueryToJSON";
import queryToJSON from "../../../../../src/ui/organisms/QueryToJSON.jsx?raw";

import Storage from "../organisms/Storage.example";
import storage from "../../../../../src/ui/organisms/Storage.example.jsx?raw";

const JSON = (props) => {
  usePage({ ...props, pageName: "JSON" });
  return (
    <>
      <CodeExample code={queryToJSON} header="Query To JSON">
        <QueryToJSON />
      </CodeExample>

      <CodeExample code={storage} header="Storage test">
        <Storage />
      </CodeExample>
    </>
  );
};

export default JSON;
