import React from 'react'; 
/*Base*/
import CodeExample from 'organism-react-code';
import BasePage from '../pages/BasePage';
import Doc from '../templates/Doc'; 

/*Sample*/
import AnimationExample from '../organisms/Animation.example';
import animationExample from '!raw-loader!../../../ui/organisms/Animation.example';

class Animation extends BasePage
{

    static defaultProps = {
        pageName: 'animation' 
    };

    render()
    {
        return (
            <Doc>
                <CodeExample
                    code={animationExample}
                    header="Animation Sample"
                >
                    <AnimationExample />
                </CodeExample>
            </Doc>
        );
    };
}

export default Animation;
