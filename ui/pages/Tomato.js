/*Base*/
import usePage from "../../src/usePage";

/*Sample*/

import TomatoApp from "../organisms/TomatoApp";
import Sortable from "../organisms/Sortable";

const Tomato = (props) => {
  usePage({ ...props, pageName: "Tomato" });
  return (
    <>
      <TomatoApp />
      <Sortable />
    </>
  );
};

export default Tomato;
