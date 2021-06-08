import React from "react";
import CodeExample from "organism-react-code";

import BasePage from "../molecules/BasePage";

// example
import PageLoadProgressHandler from "../organisms/PageLoadProgressHandler.example";
import pageLoadProgressHandler from "!raw-loader!../../../../ui/organisms/PageLoadProgressHandler.example";

import PageLoadProgressHandlerWithAjax from "../organisms/PageLoadProgressHandlerWithAjax.example";
import pageLoadProgressHandlerWithAjax from "!raw-loader!../../../../ui/organisms/PageLoadProgressHandlerWithAjax.example";

import AjaxDownload from "../organisms/AjaxDownload.example";
import ajaxDownload from "!raw-loader!../../../../ui/organisms/AjaxDownload.example";

import Dropzone from "../organisms/Dropzone.example";
import dropzone from "!raw-loader!../../../../ui/organisms/Dropzone.example";

import FBLike from "../organisms/FBLike.example";
import fbLike from "!raw-loader!../../../../ui/organisms/FBLike.example";
import FBPage from "../organisms/FBPage.example";
import fbPage from "!raw-loader!../../../../ui/organisms/FBPage.example";

import TabView from "../organisms/TabView.example";
import tabView from "!raw-loader!../../../../ui/organisms/TabView.example";

import RadioGroup from "../organisms/RadioGroup.example";
import radioGroup from "!raw-loader!../../../../ui/organisms/RadioGroup.example";

import Checkbox from "../organisms/Checkbox.example";
import checkbox from "!raw-loader!../../../../ui/organisms/Checkbox.example";

import Suggestion from "../organisms/Suggestion.example";
import suggestion from "!raw-loader!../../../../ui/organisms/Suggestion.example";

import TagInput from "../organisms/TagInput.example";
import tagInput from "!raw-loader!../../../../ui/organisms/TagInput.example";

import ErrorForm from "../organisms/ErrorForm.example";
import errorForm from "!raw-loader!../../../../ui/organisms/ErrorForm.example";

class Organisms extends BasePage {
  static defaultProps = {
    pageName: "Organisms",
  };
  render() {
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
          git="react-atomic/react-atomic-organism/blob/master/packages/organism-react-progress/"
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
          git="react-atomic/react-atomic-organism/blob/master/packages/organism-react-facebook/"
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
  }
}

export default Organisms;
