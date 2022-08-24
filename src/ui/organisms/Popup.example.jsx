import React, { useState } from "react";
import { Checkbox } from "react-atomic-organism";

/**
 * Production please use
 * import {...xxx} from "organism-react-popup"
 */
import { Dialog, PopupModal, PopupClick } from "organism-react-popup";

import { Button } from "react-atomic-molecule";

const PopupExample = () => {
  const [backgroundScrollAble, setBackgroundScrollAble] = useState(false);
  return (
    <>
      <p>
        <PopupClick
          style={Styles.click}
          popup={() => {
            return (
              <PopupModal backgroundScroll={backgroundScrollAble}>
                xxx
              </PopupModal>
            );
          }}
          component={<a />}
        >
          show modal
        </PopupClick>
      </p>

      <p>
        <PopupClick
          style={Styles.click}
          popup={() => {
            return (
              <PopupModal backgroundScroll={backgroundScrollAble}>
                <p>xxx1--->Start</p>
                <p>xxx</p>
                <p>xxx</p>
                <p>xxx</p>
                <p>xxx</p>
                <p>xxx</p>
                <p>xxx</p>
                <p>xxx</p>
                <p>xxx2--->End</p>
              </PopupModal>
            );
          }}
          component={<a />}
        >
          show modal (long modal to test window resize)
        </PopupClick>
      </p>

      <p>
        <PopupClick
          style={Styles.click}
          popup={() => {
            return (
              <PopupModal backgroundScroll={backgroundScrollAble}>
                <p>xxx1--->Start</p>
                <p>xxx</p>
                <p>xxx</p>
                <p>xxx</p>
                <p>xxx</p>
                <p>xxx</p>
                <p>xxx</p>
                <p>xxx</p>
                <p>xxx</p>
                <p>xxx</p>
                <p>xxx</p>
                <p>xxx</p>
                <p>xxx</p>
                <p>xxx</p>
                <p>xxx</p>
                <p>xxx</p>
                <p>xxx</p>
                <p>xxx</p>
                <p>xxx</p>
                <p>xxx</p>
                <p>xxx</p>
                <p>xxx2--->End</p>
              </PopupModal>
            );
          }}
          component={<a />}
        >
          show modal (modal element with scroll)
        </PopupClick>
      </p>

      <p>
        <PopupClick
          style={{ marginLeft: 5 }}
          popup={
            <Dialog
              backgroundScroll={backgroundScrollAble}
              header="Test Header"
            >
              Test Dialog
            </Dialog>
          }
          component={<Button />}
        >
          show dialog
        </PopupClick>
      </p>

      <Checkbox
        toggle
        label="Background scrollable"
        onChange={({ checked }) => {
          setBackgroundScrollAble(checked);
        }}
      />
    </>
  );
};

export default PopupExample;

const Styles = {
  click: {
    color: "blue",
    textDecoration: "underline",
  },
};
