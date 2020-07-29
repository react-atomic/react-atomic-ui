import React, { PureComponent } from "react";
import Animate from "organism-react-animate";

const foo = <div>Hello</div>;
const bar = <div>world!!</div>;

class AnimationDelayExample extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      foo,
      bar,
    };
  }

  render() {
    return (
      <div>
        <Animate
          appear="fadeInRight-3000"
          enter="fadeInRight-3000"
          leave="fadeOutRight-1000"
        >
          {this.state.foo}
        </Animate>
        <Animate
          appear="fadeInRight-3000-500"
          enter="fadeInRight-3000-500"
          leave="fadeOutRight-1000-500"
        >
          {this.state.bar}
        </Animate>
        <a
          href="#"
          style={{ marginLeft: "10px" }}
          onClick={((e) => {
            e.preventDefault();
            this.setState({
              foo: null,
              bar: null,
            });
          }).bind(this)}
        >
          leave
        </a>

        <a
          href="#"
          style={{ marginLeft: "10px" }}
          onClick={((e) => {
            e.preventDefault();
            this.setState({
              foo,
              bar,
            });
          }).bind(this)}
        >
          enter
        </a>
      </div>
    );
  }
}

export default AnimationDelayExample;
