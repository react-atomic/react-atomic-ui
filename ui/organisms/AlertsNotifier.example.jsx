import React, {Component} from 'react'; 

import {
    AlertsNotifier,
    PopupClick
} from "organism-react-popup"

class AlertsNotifierExample extends Component
{
    render()
    {
        return (
        <PopupClick
            style={Styles.click}
            popup={()=>
                <AlertsNotifier 
                    alerts={[
                        {
                            type: 'info',
                            message: 'test'
                        }
                    ]}
                />
            }
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
        color: 'blue',
        textDecoration: 'underline'
    }
};
