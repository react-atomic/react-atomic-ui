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

import Dropzone from "../organisms/Dropzone.example";
import dropzone from "../../../../ui/organisms/Dropzone.example.jsx?raw";

import FBLike from "../organisms/FBLike.example";
import fbLike from "../../../../ui/organisms/FBLike.example.jsx?raw";
import FBPage from "../organisms/FBPage.example";
import fbPage from "../../../../ui/organisms/FBPage.example.jsx?raw";

import TabView from "../organisms/TabView.example";
import tabView from "../../../../ui/organisms/TabView.example.jsx?raw";

import RadioGroup from "../organisms/RadioGroup.example";
import radioGroup from "../../../../ui/organisms/RadioGroup.example.jsx?raw";

import Checkbox from "../organisms/Checkbox.example";
import checkbox from "../../../../ui/organisms/Checkbox.example.jsx?raw";

import Suggestion from "../organisms/Suggestion.example";
import suggestion from "../../../../ui/organisms/Suggestion.example.jsx?raw";

import TagInput from "../organisms/TagInput.example";
import tagInput from "../../../../ui/organisms/TagInput.example.jsx?raw";

import ErrorForm from "../organisms/ErrorForm.example";
import errorForm from "../../../../ui/organisms/ErrorForm.example.jsx?raw";

const Organisms = (props) => {
  usePage({ ...props, pageName: "Organisms" });
  return (
    <>
      <CodeExample code={tagInput} header="Tag input" id="tag-input">
        <TagInput />
      </CodeExample>

      <CodeExample code={errorForm} header="Error Form" id="errorForm">
        <ErrorForm />
      </CodeExample>

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

      <CodeExample code={dropzone} header="Dropzone">
        <Dropzone />
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

      <CodeExample code={suggestion} header="Suggestion" id="suggestion">
        <Suggestion />
      </CodeExample>

      <CodeExample code={tabView} header="Tab View" id="tab">
        <TabView />
      </CodeExample>

      <CodeExample
        code={radioGroup}
        header="Radio Group"
        id="radioGroup"
        edit="https://codesandbox.io/embed/jjq8ko2krv?module=%2Fsrc%2FradioGroup.js&moduleview=1"
      >
        <RadioGroup />
      </CodeExample>

      <CodeExample code={checkbox} header="Checkbox" id="checkbox">
        <Checkbox />
      </CodeExample>
    </>
  );
};

export default Organisms;
