import React from 'react'; 
import Pin from 'ricon/Pin';

import Link from '../molecules/Link';
import HeaderLink from '../molecules/HeaderLink';
import Doc from '../templates/Doc'; 
import BasePage from '../pages/BasePage';


const rows = [
    [<Pin />],
];
let RVGrid;

class List extends BasePage
{

    static defaultProps = {
        pageName: 'list' 
    };

    componentDidMount()
    {
        super.componentDidMount();
        let self = this;
        import ('pmvc_react_list/rv').then(({RVGrid: rvGrid})=>{
            RVGrid = rvGrid; 
            this.setState({
                width: this.el.offsetWidth,
            });
        });
    }

    render()
    {
        const state = this.state;
        let grid; 
        if (state && state.width && RVGrid) {
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
