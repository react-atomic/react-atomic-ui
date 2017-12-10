import React,{PureComponent} from 'react'; 
import get from 'get-object-value';

import {
 Button
} from 'react-atomic-molecule';

import {
    FullScreen
} from "organism-react-popup";

class FullScreenExample extends PureComponent
{
    handleClick = () =>
    {
        this.setState({
            fullScreen: (
                <FullScreen 
                    closeCallBack={()=>{
                        this.setState({fullScreen: null});
                    }}
                >
                    test
                </FullScreen>
            )
        });
    }

    render()
    {
        return ( 
            <div>
                <Button onClick={this.handleClick}>open full screen</Button>
                {get(this, ['state', 'fullScreen'])}
            </div>
        );
    }
}


export default FullScreenExample;
