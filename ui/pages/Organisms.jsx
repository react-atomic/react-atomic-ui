import CodeExample from 'organism-react-code';

import BasePage from '../pages/BasePage';
import Doc from '../templates/Doc'; 
import PageLoadProgressHandler from '../organisms/PageLoadProgressHandler.example';
import pageLoadProgressHandler from '!raw!../../../ui/organisms/PageLoadProgressHandler.example';

import PageLoadProgressHandlerWithAjax from '../organisms/PageLoadProgressHandlerWithAjax.example';
import pageLoadProgressHandlerWithAjax from '!raw!../../../ui/organisms/PageLoadProgressHandlerWithAjax.example';

class Organisms extends BasePage 
{
    pageName = 'organisms';
    render()
    {
        return (
            <Doc>
                <CodeExample
                    code={pageLoadProgressHandler}
                    header="Page Load Progress"
                    git="react-atomic/react-atomic-organism/blob/master/packages/organism-react-progress/"
                    npm="organism-react-progress"
                >
                    <PageLoadProgressHandler />
                </CodeExample>
                <CodeExample
                    code={pageLoadProgressHandlerWithAjax}
                    header="Page Load Progress With Ajax"
                >
                    <PageLoadProgressHandlerWithAjax />
                </CodeExample>
            </Doc>
        );
    }
}

export default Organisms;
