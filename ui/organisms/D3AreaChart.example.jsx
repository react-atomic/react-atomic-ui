import React from 'react';
import {AreaChart} from 'organism-react-d3-axis-chart';

const D3AreaChart = props =>
{
    let data = [ 
        {
            values: [
                {
                    x: '2013-01',
                    y: 100 
                },
                {
                    x: '2013-02',
                    y: 450
                },
                {
                    x: '2013-03',
                    y: 450
                },
            ]
        }
    ];
    return (
        <AreaChart
            data={data}
            style={{maxHeight: 450}}
        />
    );
}

export default D3AreaChart;
