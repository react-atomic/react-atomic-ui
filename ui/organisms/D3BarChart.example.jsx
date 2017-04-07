import React from 'react';
import {BarChart} from 'organism-react-d3-axis-chart';

const D3BarChart = (props) =>
{
    let data = [
        {
            x: '2013-01',
            y: 53
        },
        {
            x: '2013-02',
            y: 165 
        },
        {
            x: '2013-03',
            y: 269 
        },
    ];
    return (
        <BarChart
            data={data}
            style={{maxHeight: 450}}
            textRotate={false}
        />
    );
}

export default D3BarChart;
