/*Base*/
import CodeExample from "organism-react-code";
import usePage from "../../src/usePage";

// example
import PageLoadProgressHandler from "../organisms/PageLoadProgressHandler.example";
import pageLoadProgressHandler from "../../../../ui/organisms/PageLoadProgressHandler.example.jsx?raw";

import PageLoadProgressHandlerWithAjax from "../organisms/PageLoadProgressHandlerWithAjax.example";
import pageLoadProgressHandlerWithAjax from "../../../../ui/organisms/PageLoadProgressHandlerWithAjax.example.jsx?raw";

import AjaxDownload from "../organisms/AjaxDownload.example";
import ajaxDownload from "../../../../ui/organisms/AjaxDownload.example.jsx?raw";


import FBLike from "../organisms/FBLike.example";
import fbLike from "../../../../ui/organisms/FBLike.example.jsx?raw";
import FBPage from "../organisms/FBPage.example";
import fbPage from "../../../../ui/organisms/FBPage.example.jsx?raw";

import TabView from "../organisms/TabView.example";
import tabView from "../../../../ui/organisms/TabView.example.jsx?raw";


const Organisms = (props) => {
  usePage({ ...props, pageName: "Organisms" });
  return (
    <>

      <CodeExample
        code={pageLoadProgressHandler}
        header="Page Load Progress"
        git="react-atomic/react-atomic-organism/blob/main/packages/organism-react-progress/"
        npm="organism-react-progress"
      >
        <PageLoadProgressHandler />
      </CodeExample>

      <CodeExample
        code={pageLoadProgressHandlerWithAjax}
        header="Page Load Progress With Ajax"
      >
        <PageLoadProgressHandlerWithAjax />
      </CodeExample>

      <CodeExample
        code={ajaxDownload}
        id="ajax-save"
        header="Ajax Save (Downloader)"
      >
        <AjaxDownload />
      </CodeExample>


      <CodeExample
        code={fbLike}
        header="Facebook Like Button"
        git="react-atomic/react-atomic-organism/blob/main/packages/organism-react-facebook/"
        npm="organism-react-facebook"
        id="organism-react-facebook"
      >
        <FBLike />
      </CodeExample>

      <CodeExample code={fbPage} header="Facebook Page Plugin">
        <FBPage />
      </CodeExample>

      <CodeExample code={tabView} header="Tab View" id="tab">
        <TabView />
      </CodeExample>

    </>
  );
};

export default Organisms;
