import React, { useState } from "react";
import prettyjson from "prettyjson";

import { Field, Form } from "react-atomic-molecule";

import { FormattedJSON } from "react-atomic-organism";

const QueryToJSON = (props) => {
  const [json, setJson] = useState("");

  const handleInput = (e) => {
    const v = e.currentTarget.value;
    const vArr = [...new URLSearchParams(v)];
    const nextArr = [];
    vArr.forEach((item) => {
      nextArr.push({ [item[0]]: item[1] });
    });
    setJson(nextArr);
  };

  return (
    <div>
      <Form className="equal width" style={{ boxSizing: "border-box" }}>
        <Field ui atom="textarea" onInput={handleInput} />
        <FormattedJSON atom="div">{prettyjson.render(json)}</FormattedJSON>
      </Form>
    </div>
  );
};

export default QueryToJSON;
