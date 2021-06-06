import React from "react";
/*Base*/
import CodeExample from "organism-react-code";
import BasePage from "../molecules/BasePage";
import Doc from "../templates/Doc";

/*Sample*/
import AnimationExample from "../organisms/Animation.example";
import animationExample from "!raw-loader!../../../../ui/organisms/Animation.example";
import AnimationReplaceExample from "../organisms/AnimationReplace.example";
import animationReplaceExample from "!raw-loader!../../../../ui/organisms/AnimationReplace.example";
import AnimationDelayExample from "../organisms/AnimationDelay.example";
import animationDelayExample from "!raw-loader!../../../../ui/organisms/AnimationDelay.example";

class Animation extends BasePage {
  static defaultProps = {
    pageName: "Animation",
  };

  render() {
    return (
      <Doc>
        <CodeExample code={animationExample} header="Animation Sample">
          <AnimationExample />
        </CodeExample>

        <CodeExample
          code={animationReplaceExample}
          header="Animation Replace Sample"
        >
          <AnimationReplaceExample />
        </CodeExample>

        <CodeExample
          code={animationDelayExample}
          header="Animation Delay Sample"
        >
          <AnimationDelayExample />
        </CodeExample>
      </Doc>
    );
  }
}

export default Animation;
