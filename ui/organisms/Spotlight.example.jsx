import React,{PureComponent} from 'react'; 
import get from 'get-object-value';

import {
 Button
} from 'react-atomic-molecule';

import {
    PopupPool,
    FullScreen
} from "organism-react-popup";

import Spotlight from "organism-react-spotlight";

class SpotlightExample extends PureComponent
{
    handleClick = () =>
    {
        this.setState({
            fullScreen: true 
        });
    }

    render()
    {
        const {fullScreen, spotlight} = get(this, ['state'], {});
        let thisSpotlight = null;
        if (spotlight) {
            thisSpotlight = (
                <Spotlight
                    toPool="spotlight-pool"
                    targetEl={this.spot}
                    closeCallBack={()=>{
                        this.setState({spotlight: null});
                    }}
                />
            );
        }
        let thisFullScreen = null;
        if (fullScreen) {
            thisFullScreen = (
                <FullScreen 
                    closeCallBack={()=>{
                        this.setState({fullScreen: null});
                    }}
                >
                    <div ref={el=>this.spot=el} style={Styles.el}>Spotlight</div> 
                    <div>
                        <Button onClick={()=>{
                            this.setState({
                                spotlight: true 
                            });
                        }}>Try it.</Button>
                    </div>
                    {thisSpotlight}
                    <PopupPool name="spotlight-pool" />
                </FullScreen>
            );
        }
        return ( 
            <div>
                <Button onClick={this.handleClick}>open full screen</Button>
                {thisFullScreen}
            </div>
        );
    }
}

export default SpotlightExample;

const Styles = {
    el: {
        display: 'inline-block',
        width: 100,
        height: 200,
        margin: 10
    }
};
