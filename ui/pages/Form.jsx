/*Base*/
import CodeExample from "organism-react-code";
import usePage from "../../src/usePage";

/*examples*/
import Dropzone from "../organisms/Dropzone.example";
import dropzone from "../../../../ui/organisms/Dropzone.example.jsx?raw";

import RadioGroup from "../organisms/RadioGroup.example";
import radioGroup from "../../../../ui/organisms/RadioGroup.example.jsx?raw";

import Checkbox from "../organisms/Checkbox.example";
import checkbox from "../../../../ui/organisms/Checkbox.example.jsx?raw";

import ErrorForm from "../organisms/ErrorForm.example";
import errorForm from "../../../../ui/organisms/ErrorForm.example.jsx?raw";

import ConstraintForm from "../organisms/ConstraintForm.example";
import constraintForm from "../../../../ui/organisms/ConstraintForm.example.jsx?raw";

const Form = props => {
  usePage({ ...props, pageName: "Form" });
  return (
    <>
      <CodeExample
        code={constraintForm}
        header="Constraint Form"
        id="constraintForm"
      >
        <ConstraintForm />
      </CodeExample>

      <CodeExample code={errorForm} header="Error Form" id="errorForm">
        <ErrorForm />
      </CodeExample>

      <CodeExample code={dropzone} header="Dropzone">
        <Dropzone />
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

export default Form;
