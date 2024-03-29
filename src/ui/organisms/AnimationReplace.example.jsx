import { Replace } from "organism-react-animate";

const AnimationReplaceExample = () => (
  <Replace
    enter="fadeInRight-2000"
    leave="fadeOutRight-1000"
    style={{ minHeight: 30, overflow: "hidden" }}
  >
    <div style={{ background: "#9467bd" }}>1</div>
    <div style={{ background: "#de7a22" }}>2</div>
    <div style={{ background: "#20948b" }}>3</div>
  </Replace>
);

export default AnimationReplaceExample;
