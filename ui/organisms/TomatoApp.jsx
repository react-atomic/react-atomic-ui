import React, { useRef, useState, useEffect, useMemo } from "react";
import {
  mixClass,
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
import { popupDispatch, PopupModal, PopupClick } from "organism-react-popup";
import { getTimestamp } from "get-random-id";
import get from "get-object-value";

const POMODORO = "POMODORO";
const SHORT_BREAK = "SHORT_BREAK";
const LONG_BREAK = "LONG_BREAK";
const keys = Object.keys;

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
      </Row>
    </Segment>
  );
};

const useTomato = (countdown) => {
  const TotalMin = useRef(25);
  const TotalSec = TotalMin.current * 60;
  const [sec, setSec] = useState(TotalSec);
  const [preview, setPreview] = useState();
  const [active, setActive] = useState();
  const [activeType, setActiveType] = useState(POMODORO);
  const timer = useRef();
  const modal = useRef();
  const resetInput = useRef();
  const lastActive = useRef();
  const resetState = useRef();

  useEffect(() => {
    lastActive.current = { active, activeType };
  }, [active, activeType]);

  const updateClockSec = (setToMinute) => {
    if (setToMinute) {
      const totalSec = setToMinute * 60;
      setSec(totalSec);
      TotalMin.current = setToMinute;
    }
  };

  const handler = {
    btnMouseIn: (e) => {
      if (!resetState.current) {
        resetState.current = { ...lastActive.current };
      }
      const id = e?.currentTarget?.id;
      setActiveType(id);
      setPreview(true);
      const setToMinute = countdown[id]?.minute;
      updateClockSec(setToMinute);
    },
    btnMouseOut: (e) => {
      const target = e.currentTarget;
      const id = e?.currentTarget?.id;
      setActiveType(resetState.current.activeType);
      setPreview(false);
    },
    clickProgress: (getModal) => () => {
      if (lastActive.current.active) {
        popupDispatch("dom/update", {
          popup: getModal(countdown[activeType]?.minute),
        });
      } else {
        handler.start(lastActive.current.activeType)();
      }
    },
    start: (countdownKey, getModal) => () => {
      const setToMinute = countdown[countdownKey]?.minute;
      if (!timer.current) {
        if (lastActive.current.activeType !== countdownKey) {
          updateClockSec(setToMinute);
        }
        setActive(true);
        setActiveType(countdownKey);
        resetState.current = { ...lastActive.current };
        timer.current = setInterval(() => {
          const now = getTimestamp();
          setSec((v) => {
            if (v <= 0) {
              handler.stop();
              return 0;
            }
            const lastTime = get(lastActive.current, ["lastTime", "now"]);
            if (!lastTime) {
              lastActive.current.lastTime = {
                sec: v,
                now,
              };
            } else {
              const queue = now - lastTime;
              if (queue > 1000) {
                const queueSec = Math.floor(queue / 1000);
                v -= queueSec;
                lastActive.current.lastTime = {
                  sec: v,
                  now,
                };
              }
            }
            return v;
          });
        }, 100);
      } else {
        console.warn("Timer already running");
        popupDispatch("dom/update", {
          popup: getModal(setToMinute),
        });
      }
    },
    stop: () => {
      if (modal.current) {
        modal.current.close();
      }
      if (timer.current) {
        clearInterval(timer.current);
        timer.current = null;
        setActive(false);
      }
    },
    reset: () => {
      handler.stop();
      updateClockSec(resetInput.current.value);
    },
  };

  return { sec, active, preview, activeType, TotalSec, handler, modal, resetInput };
};

const TomatoApp = (props) => {
  const { countdown, useTomato } = props;
  useEffect(() => {
    injects = lazyInject(injects, InjectStyles);
  }, []);

  const { sec, active, preview, activeType, handler, modal, resetInput, TotalSec } =
    useTomato(countdown);

  const getModal = (defaultValue) => {
    return (
      <PopupModal basic ref={modal} contentStyle={{ textAlign: "center" }}>
        <Button className="inverted" onClick={handler.stop}>
          Pause
        </Button>
        <InputBox
          refCb={resetInput}
          style={Styles.resetInput}
          defaultValue={defaultValue}
          inputStyle={Styles.reset}
          className="inverted transparent"
          leftLabel="Resst to:"
          rightLabel="min"
          button="Reset"
          actionProps={{
            className: "inverted",
            onClick: handler.reset,
          }}
        />
      </PopupModal>
    );
  };

  return (
    <SemanticUI>
      {useMemo(() => {
        const percentNum = percent(sec / TotalSec);
        const classes = mixClass("big Pomodoro", {
          [countdown[activeType].colorName]: active || preview,
        });
        return (
          <ProgressBar
            onClick={handler.clickProgress(getModal)}
            className={classes}
            style={Styles.progress}
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
      }, [sec, active, preview])}
      <ActionSegment
        col1={
          <List style={Styles.buttonList}>
            {keys(countdown).map((key) => {
              const count = countdown[key];
              let thisClass = null;
              if (key === activeType) {
                thisClass = count.colorName;
              }
              const handleStart = handler.start(key, getModal);
              return (
                <Button
                  key={key}
                  id={key}
                  className={thisClass}
                  onClick={handleStart}
                  onMouseEnter={handler.btnMouseIn}
                  onMouseLeave={handler.btnMouseOut}
                >
                  {count.label}
                </Button>
              );
            })}
          </List>
        }
      />
      <Tip />
    </SemanticUI>
  );
};

TomatoApp.defaultProps = {
  countdown: {
    POMODORO: {
      minute: 25,
      label: "Pomodoro",
      colorName: "red",
    },
    SHORT_BREAK: {
      minute: 5,
      label: "Short Break",
      colorName: "teal",
    },
    LONG_BREAK: {
      minute: 15,
      label: "Long Break",
      colorName: "blue",
    },
  },
  useTomato,
};

export default TomatoApp;

const Styles = {
  progress: {
    cursor: "pointer",
  },
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
