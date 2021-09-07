/*Base*/
import CodeExample from "organism-react-code";
import BasePage from "../molecules/BasePage";

/*Sample*/
import HTMLToCanvansExample from "../organisms/HTMLToCanvans.example";
import htmlToCanvansExample from "!raw-loader!../../../../ui/organisms/HTMLToCanvans.example";

class PDF extends BasePage {
  static defaultProps = {
    pageName: "PDF",
  };

  render() {
    return (
      <>
        <CodeExample code={htmlToCanvansExample} header="PDF Example">
          <HTMLToCanvansExample />
        </CodeExample>
      </>
    );
  }
}

export default PDF;
