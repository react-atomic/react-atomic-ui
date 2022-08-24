import React, { useState, useRef } from "react";
import { Unsafe, Field, Form, Button } from "react-atomic-molecule";

import { HTMLToPDF } from "organism-react-html2canvas";

const HTMLToCanvansExample = (props) => {
  const [html, setHtml] = useState("");

  const pdf = useRef();

  const handleInput = (e) => {
    const v = e.currentTarget.value;
    setHtml(v);
  };

  const handleClick = (e) => {
    if (pdf && pdf.current) {
      pdf.current.download();
    }
  };

  const handlePdf = (el) => (pdf.current = el);
  return (
    <div>
      <Form className="equal width" style={{ boxSizing: "border-box" }}>
        <Field atom="textarea" onInput={handleInput} />
        <Button onClick={handleClick}>Download</Button>
      </Form>
      <HTMLToPDF preview autoGenCanvas ref={handlePdf}>
        <Unsafe>{html}</Unsafe>
      </HTMLToPDF>
    </div>
  );
};

export default HTMLToCanvansExample;
