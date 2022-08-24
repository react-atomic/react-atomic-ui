import usePage from "../../usePage";

const Atoms = (props) => {
  usePage({ ...props, pageName: "Atoms" });
  console.log("Develop Mode:", process.env.NODE_ENV);
  return <>This is atom</>;
};

export default Atoms;
