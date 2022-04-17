import { lazy } from "react";
const Grid = lazy(() => import("pmvc_react_list/grid"));

const rows = [
  ["a1", "b1", "c1"],
  ["a2", "b2", "c2"],
  ["a3", "b3", "c3"],
  ["a4", "b4", "c4"],
  ["a5", "b5", "c5"],
  ["a6", "b6", "c6"],
];

const GridListExample = (props) => {
  const className = "grid"; // hack for disable const element
  return (
    <Grid
      className={className}
      width={200}
      height={100}
      rows={rows}
      style={Styles.container}
    />
  );
};

export default GridListExample;

const Styles = {
  container: {
    border: "1px solid #000",
  },
};
