// @ts-check
import { useState } from "react";
import { useLazyInject } from "react-atomic-molecule";
import { ChangeAnimation } from "organism-react-animate";

const AnimationChangeStyleExample = ({initAni="fadeInRight-1000"}) => {
  const [animation, setAnimation] = useState(initAni);
  injects = useLazyInject(InjectStyles, injects);
  const handleEnd = () => {
    setAnimation("");
  };
  return (
    <>
      <div>
        <ChangeAnimation
          animation={animation}
          onEnd={handleEnd}
          {...{ style: { display: "inline-block" } }}
        >
          <div>abc</div>
        </ChangeAnimation>
      </div>
      <button
        style={{ marginRight: 10 }}
        onClick={() => setAnimation(initAni)}
      >
        fadeInRight
      </button>
      <button onClick={() => setAnimation("flip-1000")}>flip</button>
    </>
  );
};

export default AnimationChangeStyleExample;

let injects;
const InjectStyles = {};
