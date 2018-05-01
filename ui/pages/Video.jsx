import React from 'react'; 

/*Base*/
import CodeExample from 'organism-react-code';
import BasePage from '../pages/BasePage';
import Doc from '../templates/Doc'; 

import YouTubeRWD from '../organisms/YouTubeRWD.example';
import youTubeRWD from '!raw-loader!../../../ui/organisms/YouTubeRWD.example';

class Video extends BasePage
{
    static defaultProps = {
        pageName: 'video' 
    };

    render()
    {
        return (
            <Doc>

                <CodeExample
                    code={youTubeRWD}
                    header="YouTube RWD player"
                >
                    <YouTubeRWD />
                </CodeExample>

            </Doc>
        );
    }
}

export default Video;
