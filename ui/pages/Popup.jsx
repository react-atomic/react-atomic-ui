import React from 'react'; 
/*Base*/
import CodeExample from 'organism-react-code';
import BasePage from '../pages/BasePage';
import Doc from '../templates/Doc'; 

/*Sample*/
import PopupExample from '../organisms/Popup.example';
import popupExample from '!raw-loader!../../../ui/organisms/Popup.example';
import AlertsNotifierExample from '../organisms/AlertsNotifier.example';
import alertsNotifierExample from '!raw-loader!../../../ui/organisms/AlertsNotifier.example';
import WindowOffsetExample from '../organisms/WindowOffset.example';
import windowOffsetExample from '!raw-loader!../../../ui/organisms/WindowOffset.example';

class Popup extends BasePage
{

    static defaultProps = {
        pageName: 'popup' 
    };

    render()
    {
        return (
            <Doc>
                <CodeExample
                    code={popupExample}
                    header="Popup Example"
                >
                    <PopupExample />
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
                >
                    <WindowOffsetExample />
                </CodeExample>
            </Doc>
        );
    };
}

export default Popup;
