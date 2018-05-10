import React from 'react'; 

/*Base*/
import BasePage from '../pages/BasePage';
import Doc from '../templates/Doc'; 

import CodeExampleExample from '../organisms/CodeExample.example';

class Code extends BasePage
{
    static defaultProps = {
        pageName: 'Code' 
    };

    render()
    {
        return (
            <Doc>
                <CodeExampleExample />
            </Doc>
        );
    }
}

export default Code;
