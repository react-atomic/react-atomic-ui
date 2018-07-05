import React, {PureComponent} from 'react';
import {
    FullScreenExample as FullScreen
} from "organism-react-code";

const Col = ({style, children, key, ...props}) => <div key={key} style={{...Styles.col, ...style}}>{children}</div>

const rows = [
    [<Col>a</Col>, <Col>b</Col>, <Col>c</Col>],
    [<Col>d</Col>, <Col>e</Col>, <Col>f</Col>],
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
        let grid; 
        if (RVGrid && isLoad) {
            const className ='grid'; // hack for disable const element
            grid = <RVGrid className={className}  width={150} height={40} rows={rows} />
        }
        return (
            <FullScreen
                id="full-page-html-table"
            >
               {grid} 
            </FullScreen>
        );
    }
}

export default GridListExample;

const Styles = {
    col: {
        height: 40
    }
};
