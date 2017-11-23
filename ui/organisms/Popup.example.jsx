import React from 'react'; 

/**
 * Production please use
 * import {...xxx} from "organism-react-popup"
 */
import {
    PopupModal,
    PopupElement,
    PopupClick
} from "organism-react-popup"

const PopupExample = () =>
{
    return (
        <PopupClick
            style={Styles.click}
            popup={()=>{
                return <PopupModal>
                    xxx
                </PopupModal>;
            }}
            container={<a />}
        >
            show
        </PopupClick>
    );
}

export default PopupExample;

const Styles = {
    click: {
        color: 'blue',
        textDecoration: 'underline'
    }
};
