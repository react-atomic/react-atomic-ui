import React from 'react'; 

/*Base*/
import CodeExample from 'organism-react-code';
import BasePage from '../pages/BasePage';
import Doc from '../templates/Doc'; 

import GridList from '../organisms/GridList.example';
import gridList from '!raw-loader!../../../ui/organisms/GridList.example';

import HtmlTableList from '../organisms/HtmlTableList.example';
import htmlTableList from '!raw-loader!../../../ui/organisms/HtmlTableList.example';

import ReactVirtualizedTableList from '../organisms/ReactVirtualizedTableList.example';
import reactVirtualizedTableList from '!raw-loader!../../../ui/organisms/ReactVirtualizedTableList.example';

import FixedDataTableList from '../organisms/FixedDataTableList.example';
import fixedDataTableList from '!raw-loader!../../../ui/organisms/FixedDataTableList.example';

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

                <CodeExample
                    code={reactVirtualizedTableList}
                    header="React Virgualized Table"
                >
                    <ReactVirtualizedTableList />
                </CodeExample>

                <CodeExample
                    code={fixedDataTableList}
                    header="Fixed Data Table"
                >
                    <FixedDataTableList />
                </CodeExample>
            </Doc>
        );
    }
}

export default List;
