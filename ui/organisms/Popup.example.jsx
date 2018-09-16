import React from 'react'; 

/**
 * Production please use
 * import {...xxx} from "organism-react-popup"
 */
import {
    Dialog,
    PopupModal,
    PopupClick
} from "organism-react-popup";

import {Button} from 'react-atomic-molecule'

const PopupExample = () =>
{
    return (
      <div>
        <PopupClick
            style={Styles.click}
            popup={()=>{
                return <PopupModal>
                    xxx
                </PopupModal>;
            }}
            container={<a />}
        >
            show modal
        </PopupClick>

        <PopupClick
            style={{marginLeft:5}}
            popup={(
              <Dialog header="Test Header">
                Test Dialog
              </Dialog>
            )}
            container={<Button />}
        >
            show dialog 
        </PopupClick>
      </div>
    );
}

export default PopupExample;

const Styles = {
    click: {
        color: 'blue',
        textDecoration: 'underline'
    }
};
