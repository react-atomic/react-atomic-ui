import React from 'react'; 

import {
   openCodeEditor 
} from "organism-react-codeeditor";

const CodeEditorExample = props => {
  return ( 
    <button onClick={()=>openCodeEditor()}>
      open
    </button>
  );
}

export default CodeEditorExample;
