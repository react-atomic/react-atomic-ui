import { VerticalMenu } from "pmvc_react_admin";
import { SideMenu } from "organism-react-navigation";
import get from "get-object-value";
import { pageStore, ReLink } from "reshow";

const keys = Object.keys;

const Menu = (props) => {
  const thisMenus = {};
  const themes = pageStore.getMap("themes");
  keys(themes)
    .sort()
    .forEach((item) => {
      thisMenus[item] = {
        ajax: false,
        text: item,
        href: "#/" + item,
      };
    });
  return (
    <SideMenu
      shrink
      menus={thisMenus}
      linkComponent={ReLink}
      component={<VerticalMenu />}
    />
  );
};

export default Menu;
