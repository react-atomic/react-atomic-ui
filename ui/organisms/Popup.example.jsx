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
    <div>
      <PopupClick
        style={Styles.click}
        popup={() => {
          return (
            <PopupModal backgroundScroll={backgroundScrollAble}>xxx</PopupModal>
          );
        }}
        component={<a />}
      >
        show modal
      </PopupClick>

      <PopupClick
        style={{ marginLeft: 5 }}
        popup={
          <Dialog backgroundScroll={backgroundScrollAble} header="Test Header">
            Test Dialog
          </Dialog>
        }
        component={<Button />}
      >
        show dialog
      </PopupClick>
      <Checkbox
        toggle
        label="Background scrollable"
        onChange={({ checked }) => {
          setBackgroundScrollAble(checked);
        }}
      />
    </div>
  );
};

export default PopupExample;

const Styles = {
  click: {
    color: "blue",
    textDecoration: "underline",
  },
};
