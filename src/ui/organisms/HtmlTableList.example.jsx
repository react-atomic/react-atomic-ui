import React, { PureComponent } from "react";

import { Table, Cell, Column } from "pmvc_react_list";

const rows = [
  ["a1", "b1", "c1"],
  ["a2", "b2", "c2"],
  ["a3", "b3", "c3"],
  ["a1", "b1", "c1"],
  ["a2", "b2", "c2"],
  ["a3", "b3", "c3"],
];

class HtmlTableListExample extends PureComponent {
  render() {
    return (
      <Table rows={rows}>
        <Column
          header={<Cell>h1</Cell>}
          cell={({ rowIndex, columnIndex }) => {
            return rows[rowIndex][columnIndex];
          }}
        />
        <Column
          header={<Cell>h2</Cell>}
          cell={({ rowIndex, columnIndex }) => {
            return rows[rowIndex][columnIndex];
          }}
        />
        <Column
          header={<Cell>h3</Cell>}
          cell={({ rowIndex, columnIndex }) => {
            return rows[rowIndex][2];
          }}
        />
      </Table>
    );
  }
}

export default HtmlTableListExample;

const Styles = {
  col: {
    height: 40,
  },
};
