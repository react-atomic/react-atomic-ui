/*Base*/
import CodeExample from "organism-react-code";
import usePage from "../../src/usePage";

/*Sample*/
import AsciiDocExample from "../organisms/AsciiDoc.example";
import asciiDocExample from "!raw-loader!../../../../ui/organisms/AsciiDoc.example";

const AsciiDocPage = props => {
    usePage({...props, pageName: "AsciiDoc"});
    return (
      <>
        <CodeExample
          code={asciiDocExample}
          header="Ascii Doc"
          edit="https://codesandbox.io/s/8vj7x3m82"
          git="react-atomic/react-atomic-organism/tree/master/packages/organism-react-asciidoc/"
        >
          <AsciiDocExample />
        </CodeExample>
      </>
    );
};

export default AsciiDocPage;
