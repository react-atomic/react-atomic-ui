/*Base*/
import CodeExample from "organism-react-code";
import usePage from "../../usePage";

/*Sample*/
import AnimationExample from "../organisms/Animation.example";
import animationExample from "../../../../../src/ui/organisms/Animation.example.jsx?raw";

import AnimationReplaceExample from "../organisms/AnimationReplace.example";
import animationReplaceExample from "../../../../../src/ui/organisms/AnimationReplace.example.jsx?raw";

import AnimationDelayExample from "../organisms/AnimationDelay.example";
import animationDelayExample from "../../../../../src/ui/organisms/AnimationDelay.example.jsx?raw";

import AnimationChangeStyleExample from "../organisms/AnimationChangeStyle.example";
import animationChangeStyleExample from "../../../../../src/ui/organisms/AnimationChangeStyle.example.jsx?raw";

const Animation = (props) => {
  usePage({ ...props, pageName: "Animation" });
  return (
    <>
      <CodeExample
        code={animationChangeStyleExample}
        header="Animation Change Style Sample"
      >
        <AnimationChangeStyleExample />
      </CodeExample>

      <CodeExample code={animationExample} header="Animation Sample">
        <AnimationExample />
      </CodeExample>

      <CodeExample
        code={animationReplaceExample}
        header="Animation Replace Sample"
      >
        <AnimationReplaceExample />
      </CodeExample>

      <CodeExample code={animationDelayExample} header="Animation Delay Sample">
        <AnimationDelayExample />
      </CodeExample>
    </>
  );
};

export default Animation;
