/*Base*/
import CodeExample from "organism-react-code";
import usePage from "../../src/usePage";

/*Sample*/
import HTMLToCanvansExample from "../organisms/HTMLToCanvans.example";
import htmlToCanvansExample from "../../../../ui/organisms/HTMLToCanvans.example.jsx?raw";

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
