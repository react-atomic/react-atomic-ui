import React from "react";
import { AreaChart } from "organism-react-d3-axis-chart";

const data = [
  {
    values: [
      {
        x: "2019-01",
        y: 100,
      },
      {
        x: "2019-02",
        y: 450,
      },
      {
        x: "2019-03",
        y: 450,
      },
      {
        x: "2019-04",
        y: 0,
      },
      {
        x: "2019-05",
        y: 0,
      },
    ],
  },
];

const D3AreaChart = (props) => {
  return <AreaChart data={data} style={{ maxHeight: 450 }} />;
};

export default D3AreaChart;
