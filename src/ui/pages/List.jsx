/*Base*/
import CodeExample from "organism-react-code";
import usePage from "../../usePage";

/*Sample*/

import GridList from "../organisms/GridList.example";
import gridList from "../../../../../src/ui/organisms/GridList.example.jsx?raw";

import HtmlTableList from "../organisms/HtmlTableList.example";
import htmlTableList from "../../../../../src/ui/organisms/HtmlTableList.example.jsx?raw";

import ReactVirtualizedTableList from "../organisms/ReactVirtualizedTableList.example";
import reactVirtualizedTableList from "../../../../../src/ui/organisms/ReactVirtualizedTableList.example.jsx?raw";

import FixedDataTableList from "../organisms/FixedDataTableList.example";
import fixedDataTableList from "../../../../../src/ui/organisms/FixedDataTableList.example.jsx?raw";

import Pagination from "../organisms/Pagination.example";
import pagination from "../../../../../src/ui/organisms/Pagination.example.jsx?raw";

const List = (props) => {
  usePage({ ...props, pageName: "List" });
  return (
    <>
      <CodeExample
        code={reactVirtualizedTableList}
        header="React Virgualized Table"
      >
        <ReactVirtualizedTableList />
      </CodeExample>

      <CodeExample code={gridList} header="Grid List">
        <GridList />
      </CodeExample>

      <CodeExample code={htmlTableList} header="Html Table">
        <HtmlTableList />
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
