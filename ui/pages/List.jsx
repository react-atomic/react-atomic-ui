import React,{Component} from 'react'; 
import Doc from '../templates/Doc'; 
import {RVGrid} from 'pmvc_react_list/rv'
import Pin from 'ricon/Pin';

const rows = [
    [<Pin />],
];


class List extends Component {

    componentDidMount()
    {
        this.setState({
            width: this.el.offsetWidth
        });
    }

    render()
    {
        const state = this.state;
        let grid; 
        if (state && state.width) {
            grid = <RVGrid width={state.width} autoContainerWidth={true} rows={rows} />
        }
        return (
            <Doc>
                <div ref={el=>this.el=el}>
                {grid}
                </div>
            </Doc>
        );
    }
}

export default List;
