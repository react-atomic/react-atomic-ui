import { useEffect } from "react";
import { dispatch } from "reshow";
import { navigationDispatch } from "organism-react-navigation";
import { ajaxDispatch } from "organism-react-ajax";

let init;

const usePage = (props) => {
  const { pageName, tplProps } = props;

  useEffect(() => {
    setTimeout(() => {
      navigationDispatch({
        params: {
          activeMenu: pageName,
        },
      });
      dispatch({ tplProps, pageName });
    });
    if (!init) {
      init = 1;
      ajaxDispatch("ajaxGet", {
        url: "/data/env",
        ini: true,
      });
    }
    return () => {
      navigationDispatch({
        params: {
          activeMenu: null,
        },
      });
    };
  }, []);
};

export default usePage;
