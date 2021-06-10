import React, { useRef, useState, useEffect } from "react";
import {
  SemanticUI,
  Button,
  Segment,
  Row,
  Column,
  List,
  Item,
} from "react-atomic-molecule";
import { ProgressBar } from "organism-react-progress";
import { percent } from "to-percent-js";
import { Return } from "reshow";

const secToMin = (sec) => {
  const min = Math.floor(sec / 60);
  const remainSec = sec % 60;
  return `${min}:${10 > remainSec ? "0" + remainSec : remainSec}`;
};

const Tip = () => (
  <Return initStates={["pomodoro"]}>
    {({pomodoro}) => { 
      if (!pomodoro) {
        return null;
      }
      return (
      <List atom="ol">
      {pomodoro.tip.map((item, key)=><Item key={key}>{item}</Item>)}
      </List>
      );
    }}
  </Return>
);

const ActionSegment = ({ col1, col2, ...props }) => {
  return (
    <Segment>
      <Row>
        <Column className="pure-u-md-1-2">{col1}</Column>
        <Column className="pure-u-md-1-2">{col2}</Column>
      </Row>
    </Segment>
  );
};

const TomatoApp = (props) => {
  const TotalSec = 25 * 60;
  const [sec, setSec] = useState(TotalSec);
  const timer = useRef();

  const handleStart = () => {
    if (!timer.current) {
      timer.current = setInterval(() => {
        setSec((v) => {
          if (v <= 0) {
            this.handleStop();
            return 0;
          }
          return --v;
        });
      }, 1000);
    } else {
      console.warn("Timer already running");
    }
  };

  const handleStop = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  };

  const handleReset = () => {
    handleStop();
    setSec(TotalSec);
  };

  const handleClickProgressBar = () => {
    console.log('xxx');
  };

  return (
    <SemanticUI>
      <ProgressBar
        onClick={handleClickProgressBar}
        className="big Pomodoro"
        percent={percent(sec / TotalSec)}
        barLabel={secToMin(sec)}
      />
      <ActionSegment
        col1={
          <List style={Styles.buttonList}>
            <Button onClick={handleStart}>Pomodoro</Button>
            <Button onClick={handleStart}>Short Break</Button>
            <Button onClick={handleStart}>Long Break</Button>
          </List>
        }
        col2={
          <List style={Styles.buttonList}>
            <Button onClick={handleStop}>Stop</Button>
            <Button onClick={handleReset}>Reset</Button>
          </List>
        }
      />
      <Tip />
    </SemanticUI>
  );
};

export default TomatoApp;

const Styles = {
  buttonList: {
    textAlign: "center",
  },
};
