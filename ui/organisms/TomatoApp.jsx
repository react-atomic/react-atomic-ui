import React, { useRef, useState, useEffect, useMemo } from "react";
import {
  lazyInject,
  reactStyle,
  SemanticUI,
  Button,
  Segment,
  Row,
  Column,
  List,
  Item,
  InputBox,
} from "react-atomic-molecule";
import { ProgressBar } from "organism-react-progress";
import { percent } from "to-percent-js";
import { Return } from "reshow";
import { PopupModal, PopupClick } from "organism-react-popup";

const secToMin = (sec) => {
  const min = Math.floor(sec / 60);
  const remainSec = sec % 60;
  return `${min}:${10 > remainSec ? "0" + remainSec : remainSec}`;
};

const Tip = () => (
  <Return initStates={["pomodoro"]}>
    {({ pomodoro }) => {
      if (!pomodoro) {
        return null;
      }
      return (
        <List atom="ol">
          {pomodoro.tip.map((item, key) => (
            <Item key={key}>{item}</Item>
          ))}
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
  useEffect(() => {
    injects = lazyInject(injects, InjectStyles);
  }, []);
  const TotalMin = 1;
  const TotalSec = TotalMin * 60;
  const [sec, setSec] = useState(TotalSec);
  const timer = useRef();
  const modal = useRef();

  const handleStart = () => {
    if (!timer.current) {
      timer.current = setInterval(() => {
        setSec((v) => {
          if (v <= 0) {
            handleStop();
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
    if (modal.current) {
      modal.current.close();
    }
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  };

  const handleReset = () => {
    handleStop();
    setSec(TotalSec);
  };

  return (
    <SemanticUI>
      <PopupClick
        style={Styles.click}
        popup={() => {
          return (
            <PopupModal
              basic
              ref={modal}
              contentStyle={{ textAlign: "center" }}
            >
              <Button className="inverted" onClick={handleStop}>
                Stop
              </Button>
              <InputBox
                style={Styles.resetInput}
                defaultValue={TotalMin}
                inputStyle={Styles.reset}
                className="inverted transparent"
                leftLabel="Resst to:"
                rightLabel="min"
                button="Reset"
                actionProps={{
                  className: "inverted",
                  onClick: handleReset,
                }}
              />
            </PopupModal>
          );
        }}
        component={<a />}
      >
        {useMemo(() => {
          const percentNum = percent(sec / TotalSec);
          return (
            <ProgressBar
              className="big Pomodoro"
              percent={percentNum}
              barLabel={secToMin(sec)}
              barLabelProps={{
                styles: reactStyle(
                  { transform: `translate(${100 - percentNum}%, 0)` },
                  false,
                  false
                ),
              }}
            />
          );
        }, [sec])}
      </PopupClick>
      <ActionSegment
        col1={
          <List style={Styles.buttonList}>
            <Button onClick={handleStart}>Pomodoro</Button>
            <Button onClick={handleStart}>Short Break</Button>
            <Button onClick={handleStart}>Long Break</Button>
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
  resetInput: {
    marginLeft: 20,
  },
  reset: {
    width: 20,
  },
};

let injects;
const InjectStyles = {
  barLabel: [
    {
      fontSize: "7rem",
    },
    ".ui.progress.Pomodoro .bar>.progress",
  ],
};
