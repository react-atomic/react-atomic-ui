import React, { Component } from "react";
import {dispatch} from "reshow";
import { navigationDispatch } from "organism-react-navigation";

class BasePage extends Component {
  componentDidMount() {
    setTimeout(() => {
      navigationDispatch({
        params: {
          activeMenu: this.props.pageName,
        },
      });
      if (this.props.tplProps) {
          console.log(this.props.tplProps);
          dispatch({tplProps: this.props.tplProps});
      }
    });
  }

  componentWillUnmount() {
    setTimeout(() => {
      navigationDispatch({
        params: {
          activeMenu: null,
        },
      });
    });
  }
}

export default BasePage;
