import React, { useState } from "react";
import { TagsField } from "organism-react-tag-input";
import { Form, Field, SemanticUI } from "react-atomic-molecule";
import { Checkbox } from "react-atomic-organism";

const TagInputExample = (props) => {
  const [isDisable, setIsDisable] = useState(false);

  const handleDisable = (e) => {
    setIsDisable(e.checked ? true : false);
  };

  return (
    <Form>
      <TagsField disabled={isDisable} />
      <Field>
        <Checkbox label="Disable" toggle onChange={handleDisable} />
      </Field>
    </Form>
  );
};

export default TagInputExample;
