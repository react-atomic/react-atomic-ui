import React from 'react';
import PieChart from 'organism-react-d3-piechart';

const D3PieChartExample = (props) =>
{
    let data = [
        {value: 10, label: 'xxx'},
        {value: 30, label: 'yyy'},
    ];
    return (
    <PieChart
       data={data} 
       style={{maxWidth:300}}
       unit=''
    />
    );
}

export default D3PieChartExample;
