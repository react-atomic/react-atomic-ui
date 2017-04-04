import CodeExample from 'organism-react-code';

import BasePage from '../pages/BasePage';
import Doc from '../templates/Doc'; 

import D3PieChart from '../organisms/D3PieChart.example';
import d3PieChart from '!raw-loader!../../../ui/organisms/D3PieChart.example';

class D3 extends BasePage 
{
    static defaultProps = {
        pageName: 'd3' 
    };

    render()
    {
        return (
            <Doc>
                <CodeExample
                    code={d3PieChart}
                    header="D3 Pie Chart"
                >
                    <D3PieChart />
                </CodeExample>
            </Doc>
        );
    }
}

export default D3;
