import { useState, useRef } from "react";

import { Form, Button } from "react-atomic-molecule";
import { RadioGroup, Checkbox } from "react-atomic-organism";

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

const RadioGroupExample = (props) => {
  const isOkChange = useRef();
  const [value, setValue] = useState();

  const handleChange = (nextValue, e) => {
    if (isOkChange.current.getChecked().state) {
      setValue(nextValue);
    } else {
      console.log("change is deny.");
      return false;
    }
  };

  return (
    <Form>
      <Checkbox toggle label="Enable Change" checked ref={isOkChange} />
      <RadioGroup
        inline={false}
        label="Sex: "
        name="sex"
        value={value}
        options={options}
        onChange={handleChange}
      />
      <div>Current: {value}</div>
      <Button onClick={() => setValue("boy")}>Set to Boy</Button>
      <Button onClick={() => setValue("girl")}>Set to Girl</Button>
    </Form>
  );
};

export default RadioGroupExample;
