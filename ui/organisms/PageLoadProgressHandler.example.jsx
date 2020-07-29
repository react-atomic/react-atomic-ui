import React from "react";
import { PageLoadProgressHandler } from "organism-react-progress";
import { Button, InputBox } from "react-atomic-molecule";

const PageLoadProgressHandlerExample = (props) => {
  let oLoad;
  let dInput;
  return (
    <div>
      <PageLoadProgressHandler ref={(o) => (oLoad = o)} />

      <div>
        <Button
          style={Styles.button}
          onClick={() => {
            oLoad.start(100, 800);
          }}
        >
          Start
        </Button>
        <Button
          style={Styles.button}
          onClick={() => {
            oLoad.pause();
          }}
        >
          Pause
        </Button>
        <Button
          style={Styles.button}
          onClick={() => {
            oLoad.complete();
          }}
        >
          Complete
        </Button>
        <Button
          style={Styles.button}
          onClick={() => {
            oLoad.reset();
          }}
        >
          Reset
        </Button>
      </div>

      <div>
        <InputBox
          leftLabel="Pause @"
          rightLabel="%"
          refCb={(o) => (dInput = o)}
          button={"Go"}
          buttonProps={{
            onClick: () => {
              oLoad.start(dInput.value);
            },
          }}
          style={Styles.input}
        />
      </div>
    </div>
  );
};

export default PageLoadProgressHandlerExample;

const Styles = {
  input: {
    width: 20,
  },
  button: {
    marginBottom: 10,
  },
};
