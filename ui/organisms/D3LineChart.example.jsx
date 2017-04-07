import React from 'react';
import {LineChart} from 'organism-react-d3-axis-chart';

const D3LineChart = (props) =>
{
    let data = [
        {
            x: '2013-01',
            y: 100 
        },
        {
            x: '2013-02',
            y: 450
        },
        {
            x: '2013-01',
            y: 450
        },
    ];
    return (
        <LineChart
            data={data}
            style={{maxHeight: 450}}
            hideAxis={true}
            threshold={200}
        />
    );
}

export default D3LineChart;
