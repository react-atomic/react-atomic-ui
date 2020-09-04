import React, { PureComponent } from "react";

import { Form } from "react-atomic-molecule";
import { Checkbox } from "react-atomic-organism";

class CheckboxExample extends PureComponent {
  render() {
    return (
      <Form>
        <Checkbox />
        <Checkbox type="radio" />
        <Checkbox toggle />
        <Checkbox slider />
      </Form>
    );
  }
}

export default CheckboxExample;
