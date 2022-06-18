import { lazy } from "react";
import { ReshowMessage, Return } from "reshow";
import { ClientRoute } from "reshow-url";
import { PopupPool } from "organism-react-popup";
import { PageLoadProgressHandler } from "organism-react-progress";
import { I13nElement } from "organism-react-i13n";

import Doc from "../templates/Doc";

const themes = {
  Atoms: lazy(() => import("../pages/Atoms")),
  Molecules: lazy(() => import("../pages/Molecules")),
  Organisms: lazy(() => import("../pages/Organisms")),
  D3: lazy(() => import("../pages/D3")),
  D3UmlPerf: lazy(() => import("../pages/D3UmlPerf")),
  Icons: lazy(() => import("../pages/Icons")),
  List: lazy(() => import("../pages/List")),
  Carousel: lazy(() => import("../pages/Carousel")),
  Animation: lazy(() => import("../pages/Animation")),
  Popup: lazy(() => import("../pages/Popup")),
  Parallax: lazy(() => import("../pages/Parallax")),
  Video: lazy(() => import("../pages/Video")),
  Code: lazy(() => import("../pages/Code")),
  AsciiDoc: lazy(() => import("../pages/AsciiDoc")),
  GrapesJs: lazy(() => import("../pages/GrapesJs")),
  PDF: lazy(() => import("../pages/PDF")),
  JSON: lazy(() => import("../pages/JSON")),
  Tomato: lazy(() => import("../pages/Tomato")),
};

const Index = (props) => (
  <Return initStates={["tplProps", "pageName"]}>
    {({ tplProps, pageName }) => {
      return (
        <>
          <Doc {...tplProps} className={pageName}>
            <ClientRoute {...props} themes={themes} defaultThemePath="Atoms" />
            <PageLoadProgressHandler ajax={true} />
            <I13nElement />
            <ReshowMessage />
          </Doc>
          <PopupPool />
        </>
      );
    }}
  </Return>
);

export default Index;
