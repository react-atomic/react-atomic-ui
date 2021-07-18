import React, { useState, useEffect, useRef } from "react";
import { DragAndDrop } from "organism-react-graph";
import { SemanticUI, List, Item } from "react-atomic-molecule";

const useSortable = (props) => {
  const [state, setState] = useState(() => ({
    absX: 0,
    absY: 0,
    isDraging: false,
  }));

  const { absX, absY, startPoint, isDraging } = state;

  const _mount = useRef(true);
  const dnd = useRef();
  const comp = useRef();

  useEffect(() => () => (_mount.current = false), []);

  const move = ({ absX, absY, startPoint }) => {
    if (_mount.current) {
      setState((prev) => ({
        ...prev,
        isDraging: true,
        absX,
        absY,
        startPoint,
      }));
    }
  };

  const handler = {
    drag: ({ absX, absY, startPoint }) => {
      move({ absX, absY, startPoint });
    },
    dragEnd: () => {
      setState((prev) => ({
        ...prev,
        isDraging: false,
      }));
    },
    getEl: () => {},
  };
  return { handler, absX, absY, startPoint, dnd, comp, isDraging };
};

const Sort = (props) => {
  const {children} = props;
  const { handler, absX, absY, startPoint, dnd, comp, isDraging } =
    useSortable(props);
  const moveStyle = isDraging
    ? {
        ...Styles.move,
        transform: absX || absY ? `translate(${absX}px, ${absY}px)` : null,
        left: startPoint?.elStartX,
        top: startPoint?.elStartY,
      }
    : {};
  return (
    <DragAndDrop
      ref={dnd}
      onDrag={handler.drag}
      onDragEnd={handler.dragEnd}
      component={
        <SemanticUI refCb={(el) => (comp.current = el)} style={moveStyle}>
          {children}
        </SemanticUI>
      }
    />
  );
};

const Sortable = (props) => {
  return (
    <div style={{ padding: "2rem" }}>
      some thing
      <List>
        <Sort>sort1</Sort>
        <Item>list 1</Item>
        <Item>list 2</Item>
      </List>
    </div>
  );
};

export default Sortable;

const Styles = {
  move: {
    position: "absolute",
    width: 100,
    height: 100,
  },
};
