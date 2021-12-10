/*Base*/
import CodeExample from "organism-react-code";
import usePage from "../../src/usePage";

/*Sample*/

import GridList from "../organisms/GridList.example";
import gridList from "!raw-loader!../../../../ui/organisms/GridList.example";

import HtmlTableList from "../organisms/HtmlTableList.example";
import htmlTableList from "!raw-loader!../../../../ui/organisms/HtmlTableList.example";

import ReactVirtualizedTableList from "../organisms/ReactVirtualizedTableList.example";
import reactVirtualizedTableList from "!raw-loader!../../../../ui/organisms/ReactVirtualizedTableList.example";

import FixedDataTableList from "../organisms/FixedDataTableList.example";
import fixedDataTableList from "!raw-loader!../../../../ui/organisms/FixedDataTableList.example";

import Pagination from "../organisms/Pagination.example";
import pagination from "!raw-loader!../../../../ui/organisms/Pagination.example";

const List = (props) => {
  usePage({ ...props, pageName: "List" });
  return (
    <>
      <CodeExample code={gridList} header="Grid List">
        <GridList />
      </CodeExample>

      <CodeExample code={htmlTableList} header="Html Table">
        <HtmlTableList />
      </CodeExample>

      <CodeExample
        code={reactVirtualizedTableList}
        header="React Virgualized Table"
      >
        <ReactVirtualizedTableList />
      </CodeExample>

      <CodeExample code={fixedDataTableList} header="Fixed Data Table">
        <FixedDataTableList />
      </CodeExample>

      <CodeExample code={pagination} header="Pagination">
        <Pagination />
      </CodeExample>
    </>
  );
};

export default List;
