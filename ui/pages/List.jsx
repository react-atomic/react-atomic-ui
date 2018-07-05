import React from 'react'; 

/*Base*/
import CodeExample from 'organism-react-code';
import BasePage from '../pages/BasePage';
import Doc from '../templates/Doc'; 

import GridList from '../organisms/GridList.example';
import gridList from '!raw-loader!../../../ui/organisms/GridList.example';

import HtmlTableList from '../organisms/HtmlTableList.example';
import htmlTableList from '!raw-loader!../../../ui/organisms/HtmlTableList.example';

class List extends BasePage
{

    static defaultProps = {
        pageName: 'list' 
    };

    render()
    {
        return (
            <Doc>
                <CodeExample
                    code={gridList}
                    header="Grid List"
                >
                    <GridList />
                </CodeExample>

                <CodeExample
                    code={htmlTableList}
                    header="Html Table"
                >
                    <HtmlTableList />
                </CodeExample>

            </Doc>
        );
    }
}

export default List;
