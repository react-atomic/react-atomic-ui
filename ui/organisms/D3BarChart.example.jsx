import React from 'react';
import {BarChart} from 'organism-react-d3-axis-chart';

const D3BarChart = (props) =>
{
    let data = [
        {
            label: '2013-01',
            value: 53
        },
        {
            label: '2013-02',
            value: 165 
        },
        {
            label: '2013-03',
            value: 269 
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
