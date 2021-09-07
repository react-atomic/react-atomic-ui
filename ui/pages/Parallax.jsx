import { lazyInject } from "react-atomic-molecule";

/*Base*/
import CodeExample from "organism-react-code";
import BasePage from "../molecules/BasePage";

import ParallaxBackgroundImage from "../organisms/ParallaxBackgroundImage.example";
import parallaxBackgroundImage from "!raw-loader!../../../../ui/organisms/ParallaxBackgroundImage.example";

class Parallax extends BasePage {
  static defaultProps = {
    pageName: "Parallax",
    tplProps: {
        className: "Parallax"
    },
  };

  constructor(props) {
    super(props);
    injects = lazyInject(injects, InjectStyles);
  }

  render() {
    return (
      <>
        <CodeExample code={parallaxBackgroundImage} header="Parallax Example">
          <ParallaxBackgroundImage />
        </CodeExample>
      </>
    );
  }
}

export default Parallax;

let injects;
const InjectStyles = {
  doc: [
    {
      paddingBottom: "150vh !important",
    },
    "div#doc.Parallax",
  ],
};
