import React from 'react'; 

/*Base*/
import CodeExample from 'organism-react-code';
import BasePage from '../pages/BasePage';
import Doc from '../templates/Doc'; 

import YouTubeRWD from '../organisms/YouTubeRWD.example';
import youTubeRWD from '!raw-loader!../../../ui/organisms/YouTubeRWD.example';

import QQVideo from '../organisms/QQVideo.example';
import qQVideo from '!raw-loader!../../../ui/organisms/QQVideo.example';

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

                <CodeExample
                    code={qQVideo}
                    header="v.qq.com player"
                >
                    <QQVideo />
                </CodeExample>
            </Doc>
        );
    }
}

export default Video;
