import React, {PureComponent} from 'react'

import {Cell, Column} from 'pmvc_react_list'
import Table from 'pmvc_react_list/rv'

const rows = [
  ['a1', 'b1', 'c1'],
  ['a2', 'b2', 'c2'],
  ['a3', 'b3', 'c3'],
  ['a1', 'b1', 'c1'],
  ['a2', 'b2', 'c2'],
  ['a3', 'b3', 'c3'],
];

class ReactVirtualizedTableListExample extends PureComponent
{
    render()
    {
        return (
            <div style={{width:200}}>
            <Table
                rows={rows}
                getColWidth={()=>150}
                height={150}
            >
                <Column
                    header={<Cell>h1</Cell>}
                    cell={({rowIndex,columnIndex})=>{
                        return rows[rowIndex][columnIndex] 
                    }}
                />
                <Column
                    header={<Cell>h2</Cell>}
                    cell={({rowIndex,columnIndex})=>{
                        return rows[rowIndex][columnIndex] 
                    }}
                />
                <Column
                    header={<Cell>h3</Cell>}
                    cell={({rowIndex,columnIndex})=>{
                        return rows[rowIndex][2] 
                    }}
                />
            </Table>
            </div>
        )
    }
}

export default ReactVirtualizedTableListExample;

