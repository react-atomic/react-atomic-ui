import React, { PureComponent } from "react";

import { UMLGraph } from "organism-react-d3-uml";

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

class D3UmlExample extends PureComponent {
  render() {
    return (
      <UMLGraph
        data={data}
        connsLocator={(d) => d.conns}
        connFromBoxGroupLocator={(d) => d.from.table}
        connFromBoxLocator={(d) => d.from.col}
        connToBoxGroupLocator={(d) => d.to.table}
        connToBoxLocator={(d) => d.to.col}
      />
    );
  }
}

export default D3UmlExample;
