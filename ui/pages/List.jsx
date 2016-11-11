import React,{Component} from 'react'; 
import {RVGrid} from 'pmvc_react_list/rv'
import Pin from 'ricon/Pin';
import {
    DividingHeader,
    SemanticUI,
} from 'react-atomic-molecule';

import Link from '../molecules/Link';
import HeaderLink from '../molecules/HeaderLink';
import Doc from '../templates/Doc'; 


const rows = [
    [<Pin />],
];


class List extends Component {

    componentDidMount()
    {
        console.log(this.el);
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
            <Doc refCb={el=>this.el=el}>
                <HeaderLink className="header" href="https://github.com/pmvc-theme/pmvc_react_list">
                    PMVC List
                </HeaderLink>
                {grid}
            </Doc>
        );
    }
}

export default List;
