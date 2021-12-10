import { useEffect } from "react";
import { dispatch } from "reshow";
import { navigationDispatch } from "organism-react-navigation";
import { ajaxDispatch } from "organism-react-ajax";

const usePage = (props) => {
  const { pageName, tplProps } = props;

  useEffect(() => {
    setTimeout(() => {
      navigationDispatch({
        params: {
          activeMenu: pageName,
        },
      });
      if (tplProps) {
        dispatch({ tplProps });
      }
    });
    ajaxDispatch("ajaxGet", {
      url: "/data/env",
      ini: true,
    });
    return () => {
      setTimeout(() => {
        navigationDispatch({
          params: {
            activeMenu: null,
          },
        });
      });
    };
  });
};

export default usePage;
