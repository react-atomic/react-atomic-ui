import React, { PureComponent } from "react";

import { Cell, Column } from "pmvc_react_list";
import Table from "pmvc_react_list/fixedDataTable";

const rows = [
  ["a1", "b1", "c1"],
  ["a2", "b2", "c2"],
  ["a3", "b3", "c3"],
  ["a4", "b4", "c4"],
  ["a5", "b5", "c5"],
  ["a6", "b6", "c6"],
];

class FixedDataTableListExample extends PureComponent {
  render() {
    return (
      <div style={{ width: 350 }}>
        <Table rows={rows} getColWidth={() => 150} height={150}>
          <Column
            header={<Cell>h1</Cell>}
            cell={({ rowIndex, columnKey: columnIndex }) => {
              return rows[rowIndex][columnIndex];
            }}
          />
          <Column
            header={<Cell>h2</Cell>}
            cell={({ rowIndex, columnKey: columnIndex }) => {
              return rows[rowIndex][columnIndex];
            }}
          />
          <Column
            header={<Cell>h3</Cell>}
            cell={({ rowIndex, columnKey: columnIndex }) => {
              return rows[rowIndex][columnIndex];
            }}
          />
        </Table>
      </div>
    );
  }
}

export default FixedDataTableListExample;
