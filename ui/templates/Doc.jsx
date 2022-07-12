import { lazy } from "react";
import { getDocTemplate } from "organism-react-navigation";
const Menu = lazy(() => import("../molecules/Menu"));

const DocTemplate = getDocTemplate({
  sideWidth: 160,
  active: true,
});

const Doc = ({ children, ...props }) => (
  <DocTemplate {...props} body={children} menu={Menu} />
);

export default Doc;
