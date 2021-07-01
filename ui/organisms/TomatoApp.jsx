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
  const [state, setState] = useState({ activeType: POMODORO, sec: TotalSec });
  const { sec, preview, active, activeType } = state;
  const timer = useRef();
  const modal = useRef();
  const resetInput = useRef();
  const lastActive = useRef();
  const resetState = useRef();

  useEffect(
    () => () => {
      handler.stop();
    },
    []
  );

  useEffect(() => {
    const now = getTimestamp();
    lastActive.current = { active, activeType, now, sec };
  }, [active, activeType, sec]);

  const updateClock = (setToMinute, totalSec, more) => {
    if (setToMinute) {
      totalSec = totalSec ?? setToMinute * 60;
      setState((prev) => ({ ...prev, ...more, sec: totalSec }));
      TotalMin.current = setToMinute;
    }
  };

  const updateAndRestore = (countdownKey, nextMinute, more) => {
    const activeType = resetState.current?.activeType;
    if (countdownKey && activeType === countdownKey) {
      if (resetState.current.sec) {
        updateClock(nextMinute, resetState.current.sec, more);
      } else {
        updateClock(nextMinute, null, more);
      }
    } else {
      updateClock(nextMinute, null, more);
    }
  };

  const handler = {
    btnMouseIn: (e) => {
      if (lastActive.current?.active) {
        return;
      }
      if (!resetState.current) {
        resetState.current = { ...lastActive.current };
      }
      const id = e?.currentTarget?.id;
      const setToMinute = countdown[id]?.minute;
      updateAndRestore(id, setToMinute, { activeType: id, preview: true });
    },
    btnMouseOut: (e) => {
      if (lastActive.current?.active) {
        return;
      }
      const target = e.currentTarget;
      const id = e?.currentTarget?.id;
      const origActiveType = resetState.current.activeType;
      if (origActiveType) {
        updateAndRestore(origActiveType, countdown[origActiveType].minute, {
          activeType: origActiveType,
          preview: false,
        });
      } else {
        setState((prev) => ({
          ...prev,
          activeType: origActiveType,
          preview: false,
        }));
      }
    },
    clickProgress: () => {
      if (lastActive.current) {
        if (lastActive.current.active) {
          handler.stop();
        } else {
          const countdownKey = lastActive.current.activeType;
          if (countdownKey) {
            handler.start({ countdownKey })();
          }
        }
      }
    },
    start:
      ({ countdownKey, getModal } = {}) =>
      (e) => {
        countdownKey = e?.currentTarget.id || countdownKey;
        const setToMinute = countdown[countdownKey]?.minute;
        if (!timer.current) {
          lastActive.current = null;
          updateAndRestore(countdownKey, setToMinute, {
            active: true,
            activeType: countdownKey,
          });
          setTimeout(() => {
            resetState.current = { ...lastActive.current };
            timer.current = setInterval(() => {
              setState(({ sec, ...prev }) => {
                const lastTime = get(lastActive.current, ["now"]);
                if (lastTime) {
                  const now = getTimestamp();
                  const queue = now - lastTime;
                  if (queue > 1000) {
                    const queueSec = Math.floor(queue / 1000);
                    sec -= queueSec;
                  }
                }
                if (sec <= 0 || isNaN(sec)) {
                  handler.stop();
                  sec = 0;
                }
                return { ...prev, sec };
              });
            }, 100);
          }, 200);
        } else {
          console.warn("Timer already running");
          if (getModal) {
            popupDispatch("dom/update", {
              popup: getModal(setToMinute),
            });
          }
        }
      },
    stop: () => {
      resetState.current = { ...lastActive.current };
      if (modal.current) {
        modal.current.close();
      }
      if (timer.current) {
        clearInterval(timer.current);
        timer.current = null;
      }
      setState((prev) => ({ ...prev, active: false, preview: false }));
    },
    reset: () => {
      lastActive.current = null;
      handler.stop();
      updateClock(resetInput.current.value);
    },
  };

  return {
    sec,
    active,
    preview,
    activeType,
    TotalSec,
    handler,
    modal,
    resetInput,
  };
};

const TomatoApp = (props) => {
  const { countdown, useTomato } = props;
  useEffect(() => {
    injects = lazyInject(injects, InjectStyles);
  }, []);

  const {
    sec,
    active,
    preview,
    activeType,
    handler,
    modal,
    resetInput,
    TotalSec,
  } = useTomato(countdown);

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
          [countdown[activeType]?.colorName]: active || preview,
        });
        return (
          <ProgressBar
            onClick={handler.clickProgress}
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
              } else {
                if (active) {
                  return null;
                }
              }
              const handleStart = handler.start({ getModal });
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
