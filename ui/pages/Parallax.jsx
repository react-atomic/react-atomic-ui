import React from "react";

/*Base*/
import CodeExample from "organism-react-code";
import BasePage from "../molecules/BasePage";
import Doc from "../templates/Doc";

import ParallaxBackgroundImage from "../organisms/ParallaxBackgroundImage.example";
import parallaxBackgroundImage from "!raw-loader!../../../../ui/organisms/ParallaxBackgroundImage.example";

class Parallax extends BasePage {
  static defaultProps = {
    pageName: "Parallax",
  };

  render() {
    return (
      <Doc style={Styles.page}>
        <CodeExample code={parallaxBackgroundImage} header="YouTube RWD player">
          <ParallaxBackgroundImage />
        </CodeExample>
      </Doc>
    );
  }
}

export default Parallax;

const Styles = {
  page: {
    padding: "100vh 0 100vh",
  },
};
