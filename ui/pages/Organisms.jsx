import CodeExample from 'organism-react-code';

import BasePage from '../pages/BasePage';
import Doc from '../templates/Doc'; 

// example
import PageLoadProgressHandler from '../organisms/PageLoadProgressHandler.example';
import pageLoadProgressHandler from '!raw-loader!../../../ui/organisms/PageLoadProgressHandler.example';

import PageLoadProgressHandlerWithAjax from '../organisms/PageLoadProgressHandlerWithAjax.example';
import pageLoadProgressHandlerWithAjax from '!raw-loader!../../../ui/organisms/PageLoadProgressHandlerWithAjax.example';

import FBLike from '../organisms/FBLike.example';
import fbLike from '!raw-loader!../../../ui/organisms/FBLike.example';
import FBPage from '../organisms/FBPage.example';
import fbPage from '!raw-loader!../../../ui/organisms/FBPage.example';

class Organisms extends BasePage 
{
    static defaultProps = {
        pageName: 'organisms' 
    };
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
                <CodeExample
                    code={fbLike}
                    header="Facebook Like Button"
                    git="react-atomic/react-atomic-organism/blob/master/packages/organism-react-facebook/"
                    npm="organism-react-facebook"
                    id="organism-react-facebook"
                >
                    <FBLike />
                </CodeExample>
                <CodeExample
                    code={fbPage}
                    header="Facebook Page Plugin"
                >
                    <FBPage />
                </CodeExample>
            </Doc>
        );
    }
}

export default Organisms;
