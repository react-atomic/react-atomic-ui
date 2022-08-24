import { VerticalMenu } from "pmvc_react_admin";
import { SideMenu } from "organism-react-navigation";
import { pageStore, ReLink } from "reshow";
import { KEYS } from "reshow-constant";

const Menu = (props) => {
  const thisMenus = {};
  const themes = pageStore.getMap("themes");
  KEYS(themes)
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
