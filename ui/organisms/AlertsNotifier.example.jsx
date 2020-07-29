import React, { PureComponent } from "react";

import { AlertsNotifier, PopupClick } from "organism-react-popup";

class AlertsNotifierExample extends PureComponent {
  render() {
    return (
      <PopupClick
        style={Styles.click}
        popup={() => (
          <AlertsNotifier
            position="bottom"
            alerts={[
              {
                type: "info",
                message: "test",
              },
            ]}
          />
        )}
        container={<a />}
      >
        alert
      </PopupClick>
    );
  }
}

export default AlertsNotifierExample;

const Styles = {
  click: {
    color: "blue",
    textDecoration: "underline",
  },
};
