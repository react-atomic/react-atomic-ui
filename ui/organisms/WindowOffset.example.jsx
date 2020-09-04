import React, { Component } from "react";
import { PopupHover, PopupOverlay } from "organism-react-popup";

class WindowOffsetExample extends Component {
  handleClick = (e) => {
    const target = e.currentTarget;
    import("get-window-offset").then(({ default: getWindowOffset }) => {
      const info = getWindowOffset(target);
      console.log(info);
    });
  };

  render() {
    return (
      <div>
        <div style={Styles.row}>
          <PopupHover popup="1" isKeep={true}>
            <div
              style={{ ...Styles.col, ...Styles.col1 }}
              onClick={this.handleClick}
            >
              1
            </div>
          </PopupHover>
          <PopupHover popup="2" isKeep={true}>
            <div
              style={{ ...Styles.col, ...Styles.col2 }}
              onClick={this.handleClick}
            >
              2
            </div>
          </PopupHover>
          <PopupHover popup="3" isKeep={true}>
            <div
              style={{ ...Styles.col, ...Styles.col3 }}
              onClick={this.handleClick}
            >
              3
            </div>
          </PopupHover>
        </div>
        <div style={Styles.row}>
          <PopupHover popup="4">
            <div
              style={{ ...Styles.col, ...Styles.col1 }}
              onClick={this.handleClick}
            >
              4
            </div>
          </PopupHover>
          <PopupHover popup="5">
            <div
              style={{ ...Styles.col, ...Styles.col2 }}
              onClick={this.handleClick}
            >
              5
            </div>
          </PopupHover>
          <PopupHover popup="6">
            <div
              style={{ ...Styles.col, ...Styles.col3 }}
              onClick={this.handleClick}
            >
              6
            </div>
          </PopupHover>
        </div>
        <div style={{ width: 60 }}>
          <PopupHover popup="7">
            <div
              style={{ ...Styles.col, ...Styles.col1 }}
              onClick={this.handleClick}
            >
              7
            </div>
          </PopupHover>
          <PopupHover popup="8">
            <div
              style={{ ...Styles.col, ...Styles.col2 }}
              onClick={this.handleClick}
            >
              8
            </div>
          </PopupHover>
          <PopupHover popup="9">
            <div
              style={{ ...Styles.col, ...Styles.col3 }}
              onClick={this.handleClick}
            >
              9
            </div>
          </PopupHover>
        </div>
      </div>
    );
  }
}

export default WindowOffsetExample;

const Styles = {
  row: {
    justifyContent: "space-around",
    display: "flex",
    marginBottom: 100,
  },
  col: {
    width: 60,
    height: 60,
    lineHeight: "60px",
    textAlign: "center",
    color: "#fff",
  },
  col1: {
    background: "#c00",
  },
  col2: {
    background: "#095",
  },
  col3: {
    background: "#059",
  },
};
