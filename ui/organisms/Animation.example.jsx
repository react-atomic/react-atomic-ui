import React,{Component, cloneElement} from 'react'; 

/**
 * Production please use
 * import Animate from "organism-react-animate"
 */
import Animate from "organism-react-animate"

const hello = (<div>Hello world!!</div>);

class AnimationExample extends Component
{
    constructor(props) 
    {
        super(props);
        this.state = {
             dom: hello 
        };
    }


    render()
    {
        return (
            <div>
                <Animate
                    appear="fadeInRight-3000"
                    enter="fadeInRight-3000"
                    leave="fadeOutRight-1000"
                    in={this.state.in}
                >
                {this.state.dom}
                </Animate>
                <a href="#"
                    style={{marginLeft:'10px'}}
                    onClick={((e)=>{
                        e.preventDefault();
                        this.setState({
                            dom: null 
                        });
                    }).bind(this)}
                >leave</a>

                <a href="#" 
                    style={{marginLeft:'10px'}}
                    onClick={((e)=>{
                        e.preventDefault();
                        this.setState({
                           dom: hello 
                        });
                    }).bind(this)}
                >enter</a>
            </div>
        );
    }
}

export default AnimationExample;
