import React,{PureComponent} from 'react'; 

import { Button } from 'react-atomic-molecule';

import {
    PopupPool
} from "organism-react-popup";

import {
    FullScreenExample
} from "organism-react-code";

import Spotlight from "organism-react-spotlight";

class SpotlightExample extends PureComponent
{
    state = {
        spotlight: false
    };

    render()
    {
        const {spotlight} = this.state;
        let thisSpotlight = null;
        if (spotlight) {
            thisSpotlight = (
                <Spotlight
                    toPool="spotlight-pool"
                    targetEl={this.spot}
                    closeCallback={()=>{
                        this.setState({spotlight: null});
                    }}
                />
            );
        }
        return ( 
            <FullScreenExample
                button="open full screen"
                closeCallback={()=>this.setState({spotlight: null})}
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
            </FullScreenExample>
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
