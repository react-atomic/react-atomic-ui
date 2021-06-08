import React from "react";
/*Base*/
import CodeExample from "organism-react-code";
import BasePage from "../molecules/BasePage";

/*Sample*/
import QueryToJSON from "../organisms/QueryToJSON";
import queryToJSON from "!raw-loader!../../../../ui/organisms/QueryToJSON";

class JSON extends BasePage {
  static defaultProps = {
    pageName: "JSON",
  };

  render() {
    return (
      <>
        <CodeExample code={queryToJSON} header="Query To JSON">
          <QueryToJSON />
        </CodeExample>
      </>
    );
  }
}

export default JSON;
