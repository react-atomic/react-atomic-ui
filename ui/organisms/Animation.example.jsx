import { useState } from "react";
import Animate from "organism-react-animate";

const Hello = () => <div>Hello world!!</div>;
const Button = ({ setIsShow, action, children }) => (
  <a
    href="#"
    style={{ marginLeft: "10px" }}
    onClick={(e) => {
      e.preventDefault();
      setIsShow(action);
    }}
  >
    {children}
  </a>
);

const AnimationExample = () => {
  const [isShow, setIsShow] = useState(true);
  return (
    <>
      <Animate
        appear="fadeInRight-3000"
        enter="fadeInRight-3000"
        leave="fadeOutRight-1000"
      >
        {isShow && <Hello />}
      </Animate>
      <Button setIsShow={setIsShow} action={false}>
        leave
      </Button>
      <Button setIsShow={setIsShow} action={true}>
        enter
      </Button>
    </>
  );
};

export default AnimationExample;
