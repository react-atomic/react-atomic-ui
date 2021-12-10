import usePage from "../../src/usePage";

const Atoms = (props) => {
  usePage({ ...props, pageName: "Atoms" });
  return <>This is atom</>;
};

export default Atoms;
