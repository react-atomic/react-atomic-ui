/*Base*/
import CodeExample from "organism-react-code";
import usePage from "../../usePage";

/*Sample*/
import PopupExample from "../organisms/Popup.example";
import popupExample from "../../../../../src/ui/organisms/Popup.example.jsx?raw";

import FullScreenExample from "../organisms/FullScreen.example";
import fullScreenExample from "../../../../../src/ui/organisms/FullScreen.example.jsx?raw";

import SpotlightExample from "../organisms/Spotlight.example";
import spotlightExample from "../../../../../src/ui/organisms/Spotlight.example.jsx?raw";

import AlertsNotifierExample from "../organisms/AlertsNotifier.example";
import alertsNotifierExample from "../../../../../src/ui/organisms/AlertsNotifier.example.jsx?raw";

import WindowOffsetExample from "../organisms/WindowOffset.example";
import windowOffsetExample from "../../../../../src/ui/organisms/WindowOffset.example.jsx?raw";

import ReshowMessageExample from "../organisms/ReshowMessage.example";
import reshowMessageExample from "../../../../../src/ui/organisms/ReshowMessage.example.jsx?raw";

const Popup = (props) => {
  usePage({ ...props, pageName: "Popup" });
  return (
    <>
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

      <CodeExample code={reshowMessageExample} header="Reshow Message Example">
        <ReshowMessageExample />
      </CodeExample>
    </>
  );
};

export default Popup;
