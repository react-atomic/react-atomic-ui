import React, { lazy } from "react";

import { Cell, Column } from "pmvc_react_list";
const Table = lazy(() => import("pmvc_react_list/rv"));

const rows = [
  ["a1", "b1", "c1"],
  ["a2", "b2", "c2"],
  ["a3", "b3", "c3"],
  ["a1", "b1", "c1"],
  ["a2", "b2", "c2"],
  ["a3", "b3", "c3"],
];

const handleClick = (rowIndex) => (ev) => {
  alert(rowIndex);
};

const ReactVirtualizedTableListExample = (props) => (
  <div style={{ width: "40%", height: 150 }}>
    <Table rows={rows}>
      <Column
        header={<Cell>h1</Cell>}
        cell={({ rowIndex, columnIndex, style }) => (
          <div style={style} onClick={handleClick(rowIndex)}>
            {rows[rowIndex][columnIndex]}
          </div>
        )}
      />
      <Column
        header={<Cell>h2</Cell>}
        cell={({ rowIndex, columnIndex, style }) => (
          <div style={style} onClick={handleClick(rowIndex)}>
            {rows[rowIndex][columnIndex]}
          </div>
        )}
      />
      <Column
        header={<Cell>h3</Cell>}
        cell={({ rowIndex, columnIndex, style }) => (
          <div style={style} onClick={handleClick(rowIndex)}>
            {rows[rowIndex][columnIndex]}
          </div>
        )}
      />
    </Table>
  </div>
);

export default ReactVirtualizedTableListExample;
