import React, {useRef} from "react";

import { UMLGraph } from "organism-react-d3-uml";
import { Form, Field, Button } from "react-atomic-molecule";

const data = {
  tables: [
    {
      name: "table1",
      cols: ["t1-col1", "t1-col2"],
    },
    {
      name: "table2",
      cols: ["t2-col1", "t2-col2"],
    },
  ],
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

const D3UmlExample = () => {
  const uml = useRef();
  const handleUml = el => uml.current = el;
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
    console.log(e.zoom.getXYK());
  }
  return (
    <div>
      <UMLGraph
        onZoom={handleZoom}
        ref={handleUml}
        data={data}
        connsLocator={(d) => d.conns}
        connFromBoxGroupLocator={(d) => d.from.table}
        connFromBoxLocator={(d) => d.from.col}
        connToBoxGroupLocator={(d) => d.to.table}
        connToBoxLocator={(d) => d.to.col}
      />
      <Form style={{boxSizing: "border-box"}} className="equal width">
        <Field>
          <Field atom="input" label="x" name="x"/>
          <Field atom="input" label="y" name="y"/>
          <Field atom="input" label="k" name="k"/>
        </Field>
        <Button onClick={handleUpdate}>update</Button>
      </Form>
    </div>
  );
};

export default D3UmlExample;
