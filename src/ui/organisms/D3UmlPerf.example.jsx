import React, { useRef, useState } from "react";

import { UMLGraph } from "organism-react-d3-uml";
import { Form, Field, Button } from "react-atomic-molecule";
import { Checkbox } from "react-atomic-organism";

const data = {
  tables: [],
  conns: [
    {
      from: {
        table: "table1",
        col: "t1-col1",
      },
      to: {
        table: "table2",
        col: "t2-col2",
      },
    },
  ],
};

for (let i = 1; i < 999; i++) {
  data.tables.push({
    name: `table${i}`,
    cols: [`t${i}-col1`, `t${i}-col2`],
  });
}

const D3UmlPerfExample = () => {
  const uml = useRef();
  const [isDisableCurve, setIsDisableCurve] = useState(false);
  const handleUml = (el) => (uml.current = el);
  const handleUpdate = (e) => {
    const t = e.currentTarget || {};
    const fm = t.form;
    uml.current.zoom.setXYK({
      x: fm.x.value || null,
      y: fm.y.value || null,
      k: fm.k.value || null,
    });
  };
  const handleZoom = (e) => {
    //  console.log(e.zoom.getXYK());
  };
  let isDisableDel;
  let isDisableMove;
  return (
    <>
      <UMLGraph
        style={{ height: "50vh" }}
        onZoom={handleZoom}
        ref={handleUml}
        data={data}
        lineDefaultProps={{ curve: !isDisableCurve }}
        connsLocator={(d) => d.conns}
        connFromBoxGroupLocator={(d) => d.from.table}
        connFromBoxLocator={(d) => d.from.col}
        connToBoxGroupLocator={(d) => d.to.table}
        connToBoxLocator={(d) => d.to.col}
        onBoxWillDrag={(e) => {
          return !isDisableMove.getChecked().input;
        }}
        onLineDel={(e) => {
          console.log({ e });
          return !isDisableDel.getChecked().input;
        }}
      />
      <Form style={{ boxSizing: "border-box" }} className="equal width">
        <Field>
          <Field atom="input" label="x" name="x" />
          <Field atom="input" label="y" name="y" />
          <Field atom="input" label="k" name="k" />
        </Field>
        <Field>
          <Checkbox
            toggle
            label="disable curve"
            onChange={({ checked }) => {
              setIsDisableCurve(checked);
            }}
          />
          <Checkbox
            label="disable line delete"
            ref={(el) => (isDisableDel = el)}
          />
          <Checkbox
            label="disable node move"
            ref={(el) => (isDisableMove = el)}
          />
        </Field>
        <Button onClick={handleUpdate}>update</Button>
      </Form>
    </>
  );
};

export default D3UmlPerfExample;
