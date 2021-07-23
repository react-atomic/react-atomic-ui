import React, {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import { DragAndDrop } from "organism-react-graph";
import {
  build,
  getChildMapping,
  SemanticUI,
  List,
  Item,
} from "react-atomic-molecule";
import callfunc from "call-func";

const keys = Object.keys;

const useSortable = (props) => {
  const [state, setState] = useState(() => ({
    absX: 0,
    absY: 0,
    isDraging: false,
  }));

  const { absX, absY, startPoint, isDraging, destTarget } = state;

  const _mount = useRef(true);
  const dnd = useRef();
  const comp = useRef();
  const lastDestTarget = useRef();

  useEffect(() => () => (_mount.current = false), []);
  useEffect(
    () => () => {
      lastDestTarget.current = destTarget;
      console.log({destTarget});
    },
    [destTarget]
  );

  const move = ({ absX, absY, startPoint, destTarget, ...other }) => {
    if (_mount.current) {
      setState((prev) => ({
        ...prev,
        isDraging: true,
        absX,
        absY,
        startPoint,
        destTarget,
      }));
    }
  };

  const handler = {
    drag: (e) => {
      move(e);
    },
    dragEnd: () => {
      setState((prev) => ({
        ...prev,
        isDraging: false,
      }));
    },
    getEl: () => {},
  };
  return { handler, absX, absY, startPoint, dnd, comp, isDraging, destTarget };
};

const Sort = forwardRef((props, ref) => {
  const { handler, absX, absY, startPoint, dnd, comp, isDraging, destTarget } =
    useSortable(props);

  useImperativeHandle(ref, () => ({
    getDestTarget: () => {},
  }));

  const moveStyle = isDraging
    ? {
        ...Styles.move,
        transform: absX || absY ? `translate(${absX}px, ${absY}px)` : null,
        left: startPoint?.elStartX,
        top: startPoint?.elStartY,
      }
    : {};
  const item = build(
    <SemanticUI {...props} data-type="sortable" refCb={(el) => (comp.current = el)} />
  );
  const moveEl = isDraging ? item({ style: moveStyle }) : null;
  const activeStyle = isDraging ? Styles.active : null;
  return (
    <>
      <DragAndDrop
        ref={dnd}
        onDrag={handler.drag}
        onDragEnd={handler.dragEnd}
        component={item({ style: activeStyle })}
      />
      {moveEl}
    </>
  );
});

const SortList = (props) => {
  const { children } = props;
  const childList = getChildMapping(children, (child, key) => (
    <Sort key={key} name={key}>{child}</Sort>
  ));
  return keys(childList).map((key) => childList[key]);
};

const Sortable = (props) => {
  return (
    <SortList>
      <Item>sort1</Item>
      <Item>list 1</Item>
      <Item>list 2</Item>
    </SortList>
  );
};

export default Sortable;

const Styles = {
  move: {
    position: "absolute",
    width: 100,
    height: 100,
  },
  active: {
    border: "2px dashed rgba(0, 0, 0, 0.2)",
  },
};
