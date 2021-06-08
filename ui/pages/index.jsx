import React from "react";
import { ReshowMessage, Return } from "reshow";
import { ClientRoute } from "reshow-url";
import { PopupPool } from "organism-react-popup";
import { PageLoadProgressHandler } from "organism-react-progress";
import { I13nElement } from "organism-react-i13n";

import Doc from "../templates/Doc";

import Atoms from "../pages/Atoms";
import Molecules from "../pages/Molecules";
import Organisms from "../pages/Organisms";
import Icons from "../pages/Icons";
import List from "../pages/List";
import Carousel from "../pages/Carousel";
import D3 from "../pages/D3";
import D3UmlPerf from "../pages/D3UmlPerf";
import Animation from "../pages/Animation";
import Popup from "../pages/Popup";
import Video from "../pages/Video";
import Parallax from "../pages/Parallax";
import Code from "../pages/Code";
import AsciiDoc from "../pages/AsciiDoc";
import GrapesJs from "../pages/GrapesJs";
import PDF from "../pages/PDF";
import JSON from "../pages/JSON";
import Tomato from "../pages/Tomato";

const themes = {
  Atoms,
  Molecules,
  Organisms,
  D3,
  D3UmlPerf,
  Icons,
  List,
  Carousel,
  Animation,
  Popup,
  Parallax,
  Video,
  Code,
  AsciiDoc,
  GrapesJs,
  PDF,
  JSON,
  Tomato,
};

const Index = (props) => (
  <Return initStates={['tplProps']}>
  {(props)=>{
    const {tplProps} = props;
    return (<Doc {...tplProps}>
      <ClientRoute {...props} themes={themes} defaultThemePath="Atoms" />
      <PageLoadProgressHandler ajax={true} />
      <I13nElement />
      <ReshowMessage />
      <PopupPool />
    </Doc>
    );
    }
  }
  </Return>
);

export default Index;
