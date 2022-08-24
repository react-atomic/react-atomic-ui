/*Base*/
import CodeExample from "organism-react-code";
import usePage from "../../usePage";

/*Sample*/
import D3PieChart from "../organisms/D3PieChart.example";
import d3PieChart from "../../../../../src/ui/organisms/D3PieChart.example.jsx?raw";

import D3BarChart from "../organisms/D3BarChart.example";
import d3BarChart from "../../../../../src/ui/organisms/D3BarChart.example.jsx?raw";

import D3LineChart from "../organisms/D3LineChart.example";
import d3LineChart from "../../../../../src/ui/organisms/D3LineChart.example.jsx?raw";

import D3AreaChart from "../organisms/D3AreaChart.example";
import d3AreaChart from "../../../../../src/ui/organisms/D3AreaChart.example.jsx?raw";

import D3Uml from "../organisms/D3Uml.example";
import d3Uml from "../../../../../src/ui/organisms/D3Uml.example.jsx?raw";

import StockChart from "../organisms/StockChart.example";
import stockChart from "../../../../../src/ui/organisms/StockChart.example.jsx?raw";

const D3 = (props) => {
  usePage({ ...props, pageName: "D3" });
  return (
    <>
      <CodeExample code={d3Uml} header="D3 Uml" id="d3-uml">
        <D3Uml />
      </CodeExample>

      <CodeExample code={d3LineChart} header="D3 Line Chart">
        <D3LineChart />
      </CodeExample>

      <CodeExample code={d3BarChart} header="D3 Bar Chart">
        <D3BarChart />
      </CodeExample>

      <CodeExample code={d3AreaChart} header="D3 Area Chart">
        <D3AreaChart />
      </CodeExample>

      <CodeExample code={d3PieChart} header="D3 Pie Chart">
        <D3PieChart />
      </CodeExample>

      <CodeExample code={stockChart} header="Stock Chart">
        <StockChart />
      </CodeExample>
    </>
  );
};

export default D3;
