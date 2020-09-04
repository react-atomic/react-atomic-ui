import React from "react";

/*Base*/
import CodeExample from "organism-react-code";
import BasePage from "../pages/BasePage";
import Doc from "../templates/Doc";

/*Sample*/
import D3PieChart from "../organisms/D3PieChart.example";
import d3PieChart from "!raw-loader!../../../ui/organisms/D3PieChart.example";

import D3BarChart from "../organisms/D3BarChart.example";
import d3BarChart from "!raw-loader!../../../ui/organisms/D3BarChart.example";

import D3LineChart from "../organisms/D3LineChart.example";
import d3LineChart from "!raw-loader!../../../ui/organisms/D3LineChart.example";

import D3AreaChart from "../organisms/D3AreaChart.example";
import d3AreaChart from "!raw-loader!../../../ui/organisms/D3AreaChart.example";

import D3Uml from "../organisms/D3Uml.example";
import d3Uml from "!raw-loader!../../../ui/organisms/D3Uml.example";

import StockChart from "../organisms/StockChart.example";
import stockChart from "!raw-loader!../../../ui/organisms/StockChart.example";

class D3 extends BasePage {
  static defaultProps = {
    pageName: "d3",
  };

  render() {
    return (
      <Doc>
        <CodeExample code={d3LineChart} header="D3 Line Chart">
          <D3LineChart />
        </CodeExample>

        <CodeExample code={d3AreaChart} header="D3 Area Chart">
          <D3AreaChart />
        </CodeExample>

        <CodeExample code={d3BarChart} header="D3 Bar Chart">
          <D3BarChart />
        </CodeExample>

        <CodeExample code={d3PieChart} header="D3 Pie Chart">
          <D3PieChart />
        </CodeExample>

        <CodeExample code={d3Uml} header="D3 Uml" id="d3-uml">
          <D3Uml />
        </CodeExample>

        <CodeExample code={stockChart} header="Stock Chart">
          <StockChart />
        </CodeExample>
      </Doc>
    );
  }
}

export default D3;
