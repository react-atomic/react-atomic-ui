import React, {PureComponent} from 'react';

const rows = [
  ['a1', 'b1', 'c1'],
  ['a2', 'b2', 'c2'],
  ['a3', 'b3', 'c3'],
  ['a4', 'b4', 'c4'],
  ['a5', 'b5', 'c5'],
  ['a6', 'b6', 'c6'],
];

let RVGrid = null;

class GridListExample extends PureComponent
{
    state = {
        isLoad : false
    }

    componentDidMount()
    {
        import ('pmvc_react_list/rv').then(({RVGrid: rvGrid})=>{
            RVGrid = rvGrid; 
            this.setState({isLoad: true});
        });
    }
    
    render()
    {
        const {isLoad} = this.state;
        let grid = null; 
        if (RVGrid && isLoad) {
            const className ='grid'; // hack for disable const element
            grid = <RVGrid
                className={className}
                width={200}
                height={100}
                rows={rows}
                style={Styles.container}
            />
        }
        return grid;
    }
}

export default GridListExample;

const Styles = {
    container: {
        border: '1px solid #000'
    }
}
