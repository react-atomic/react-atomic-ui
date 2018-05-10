import React,{PureComponent} from 'react'; 
import get from 'get-object-value';

import {
    FullScreenExample as FullScreen
} from "organism-react-code";

class FullScreenExample extends PureComponent
{
    render()
    {
        return ( 
            <FullScreen id="full-screen-example" button="open full screen">
            test
            </FullScreen>
        );
    }
}


export default FullScreenExample;
