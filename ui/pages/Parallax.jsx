/*Base*/
import CodeExample from "organism-react-code";
import usePage from "../../src/usePage";

import { useLazyInject } from "react-atomic-molecule";

import ParallaxBackgroundImage from "../organisms/ParallaxBackgroundImage.example";
import parallaxBackgroundImage from "../../../../ui/organisms/ParallaxBackgroundImage.example.jsx?raw";

const Parallax = (props) => {
  usePage({
    ...props,
    pageName: "Parallax",
    tplProps: { className: "Parallax" },
  });
  injects = useLazyInject(InjectStyles, injects);
  return (
    <>
      <CodeExample code={parallaxBackgroundImage} header="Parallax Example">
        <ParallaxBackgroundImage />
      </CodeExample>
    </>
  );
};

export default Parallax;

let injects;
const InjectStyles = {
  doc: [
    {
      paddingTop: "300px !important",
      paddingBottom: "150vh !important",
    },
    "div#doc.Parallax",
  ],
};
