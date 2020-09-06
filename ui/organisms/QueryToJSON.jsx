import React, { useState } from "react";

import { Field } from "react-atomic-molecule";

import { FormattedJSON } from "react-atomic-organism";

const QueryToJSON = (props) => {
  const [json, setJson] = useState("");

  const handleInput = (e) => {
    const v = e.currentTarget.value;
    const vArr = Array.from(new URLSearchParams(v));
    setJson(JSON.stringify(vArr, null, "\n"));
  };

  return (
    <div>
      <Field ui atom="textarea" onInput={handleInput} />
      <pre>{json}</pre>
    </div>
  );
};

export default QueryToJSON;
