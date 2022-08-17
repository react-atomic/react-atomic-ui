/*Base*/
import usePage from "../../src/usePage";

import { DividingHeader, Form, Field, InputBox } from "react-atomic-molecule";

import { SearchBox } from "react-atomic-organism";

const Molecules = (props) => {
  usePage({ ...props, pageName: "Molecules" });
  return (
    <>
      <DividingHeader>Input box</DividingHeader>
      <div>Inputbox</div>
      <Form>
        <Field atom="input" />
      </Form>
      <div>Inputbox with button</div>
      <InputBox button="Go!" />
      <div>Search Box</div>
      <SearchBox />
    </>
  );
};

export default Molecules;
