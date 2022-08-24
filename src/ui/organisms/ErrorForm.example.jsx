import React, { useState } from "react";
import { SemanticUI, Form, Field, Menu, Item } from "react-atomic-molecule";

import { Dropdown, SelectField } from "organism-react-navigation";
import { Checkbox } from "react-atomic-organism";

const options = [
  {
    label: "Boy",
    value: "boy",
  },
  {
    label: "Girl",
    value: "girl",
  },
];

const DropdownExample = (props) => {
  const [value, setValue] = useState();

  const MyList = (props) => (
    <Menu {...props}>
      <Item onClick={() => setValue("Boy")}>Boy</Item>
      <Item onClick={() => setValue("Girl")}>Girl</Item>
    </Menu>
  );

  return (
    <Field
      {...props}
      inputComponent={
        <Dropdown style={Styles.dropdown} list={<MyList />}>
          You-select {value}
        </Dropdown>
      }
    />
  );
};

const ErrorFormExample = () => {
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setIsError(e.checked ? true : false);
  };

  return (
    <SemanticUI>
      <Form messageType={isError ? "error" : ""}>
        <DropdownExample
          messageType={isError ? "error" : ""}
          label="Dropdown: "
        />
        <SelectField
          messageType={isError ? "error" : ""}
          label="Selection: "
          options={options}
          placeholder={"not-select-yet"}
        />
        <Field>
          <Checkbox label="Error Style" toggle onChange={handleChange} />
        </Field>
      </Form>
    </SemanticUI>
  );
};

export default ErrorFormExample;

const Styles = {
  dropdown: {
    marginLeft: 10,
  },
};
