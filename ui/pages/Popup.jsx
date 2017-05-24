/*Base*/
import CodeExample from 'organism-react-code';
import BasePage from '../pages/BasePage';
import Doc from '../templates/Doc'; 

/*Sample*/
import PopupExample from '../organisms/Popup.example';
import popupExample from '!raw-loader!../../../ui/organisms/Popup.example';
import AlertsNotifierExample from '../organisms/AlertsNotifier.example';
import alertsNotifierExample from '!raw-loader!../../../ui/organisms/AlertsNotifier.example';

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
            </Doc>
        );
    };
}

export default Popup;
