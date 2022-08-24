/*Base*/
import usePage from "../../usePage";

/*Sample*/

import TomatoApp from "../organisms/TomatoApp";
import TomatoSortable from "../organisms/TomatoSortable";

const Tomato = (props) => {
  usePage({ ...props, pageName: "Tomato" });
  return (
    <>
      <TomatoApp />
      <TomatoSortable />
    </>
  );
};

export default Tomato;
