import React from "react";
/*Base*/
import CodeExample from "organism-react-code";
import BasePage from "../pages/BasePage";
import Doc from "../templates/Doc";

/*Sample*/
import PopupExample from "../organisms/Popup.example";
import popupExample from "!raw-loader!../../../ui/organisms/Popup.example";
import FullScreenExample from "../organisms/FullScreen.example";
import fullScreenExample from "!raw-loader!../../../ui/organisms/FullScreen.example";
import SpotlightExample from "../organisms/Spotlight.example";
import spotlightExample from "!raw-loader!../../../ui/organisms/Spotlight.example";

import AlertsNotifierExample from "../organisms/AlertsNotifier.example";
import alertsNotifierExample from "!raw-loader!../../../ui/organisms/AlertsNotifier.example";

import WindowOffsetExample from "../organisms/WindowOffset.example";
import windowOffsetExample from "!raw-loader!../../../ui/organisms/WindowOffset.example";

import ReshowMessageExample from "../organisms/ReshowMessage.example";
import reshowMessageExample from "!raw-loader!../../../ui/organisms/ReshowMessage.example";

class Popup extends BasePage {
  static defaultProps = {
    pageName: "popup",
  };

  render() {
    return (
      <Doc>
        <CodeExample code={popupExample} header="Popup Example">
          <PopupExample />
        </CodeExample>

        <CodeExample code={fullScreenExample} header="Full Screen Example">
          <FullScreenExample />
        </CodeExample>

        <CodeExample
          code={alertsNotifierExample}
          header="Alerts Notifier Example"
        >
          <AlertsNotifierExample />
        </CodeExample>

        <CodeExample
          code={windowOffsetExample}
          header="Detect Window Offset Example"
          id="get-window-offset"
        >
          <WindowOffsetExample />
        </CodeExample>

        <CodeExample code={spotlightExample} header="Spotlight Example">
          <SpotlightExample />
        </CodeExample>

        <CodeExample
          code={reshowMessageExample}
          header="Reshow Message Example"
        >
          <ReshowMessageExample />
        </CodeExample>
      </Doc>
    );
  }
}

export default Popup;
