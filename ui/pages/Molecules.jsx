import React from "react";
import BasePage from "../pages/BasePage";

import { DividingHeader, Form, Field, InputBox } from "react-atomic-molecule";

import { SearchBox } from "react-atomic-organism";

import Doc from "../templates/Doc";

class Molecules extends BasePage {
  static defaultProps = {
    pageName: "molecules",
  };
  render() {
    return (
      <Doc>
        <DividingHeader>Input box</DividingHeader>
        <div>Inputbox</div>
        <Form>
          <Field atom="input" />
        </Form>
        <div>Inputbox with button</div>
        <InputBox />
        <div>Search Box</div>
        <SearchBox />
      </Doc>
    );
  }
}

export default Molecules;
