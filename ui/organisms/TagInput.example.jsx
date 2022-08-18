import React, { useState } from "react";
import { TagsField } from "organism-react-tag-input";
import { Form, Field, SemanticUI } from "react-atomic-molecule";
import { Checkbox } from "react-atomic-organism";

const TagInputExample = (props) => {
  const [isDisable, setIsDisable] = useState(false);
  const [limit, setLimit] = useState(-1);

  const handleDisable = (e) => {
    setIsDisable(e.checked ? true : false);
  };

  return (
    <Form>
      <TagsField disabled={isDisable} maxTags={limit} />
      <Field>
        <Checkbox label="Disable" toggle onChange={handleDisable} />
      </Field>
      <Field label="Limit tags" atom="input" type="number" inline defaultValue="-1" onChange={(e)=>{setLimit(e.currentTarget.value)}} min="-1"/>
    </Form>
  );
};

export default TagInputExample;
