import React, {PureComponent} from 'react'

import {UMLGraph} from 'organism-react-d3-uml'

const data = {
    tables: [
        {
            name: 'table1',
            cols: [
                't1-col1',
                't1-col1',
            ]
        },
        {
            name: 'table2',
            cols: [
                't2-col1',
                't2-col1',
            ]
        },
    ]
}


class D3UmlExample extends PureComponent
{
    render()
    {
        return <UMLGraph data={data} /> 
    }
}

export default D3UmlExample
