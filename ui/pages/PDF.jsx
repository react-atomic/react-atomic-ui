/*Base*/
import CodeExample from "organism-react-code";
import usePage from "../../src/usePage";

/*Sample*/
import HTMLToCanvansExample from "../organisms/HTMLToCanvans.example";
import htmlToCanvansExample from "!raw-loader!../../../../ui/organisms/HTMLToCanvans.example";

const PDF = (props) => {
  usePage({ ...props, pageName: "PDF" });
  return (
    <>
      <CodeExample code={htmlToCanvansExample} header="PDF Example">
        <HTMLToCanvansExample />
      </CodeExample>
    </>
  );
};

export default PDF;
