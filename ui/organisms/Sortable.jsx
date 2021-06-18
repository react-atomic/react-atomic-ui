import React, { useState, useEffect, useRef } from "react";
import { DragAndDrop } from "organism-react-graph";
import { SemanticUI } from "react-atomic-molecule";

const useSortable = (props) => {
  const [state, setState] = useState(()=>({
    absX: 0,
    absY: 0,
  }));

  const { absX, absY, startPoint } = state;

  const _mount = useRef(true);
  const dnd = useRef();
  const comp = useRef();

  useEffect(() => () => (_mount.current = false), []);

  const move = ({ absX, absY, startPoint }) => {
    if (_mount.current) {
      setState((prev) => ({
        ...prev,
        absX,
        absY,
        startPoint
      }));
    }
  };

  const handler = {
    drag: ({ absX, absY, startPoint }) => {
      move({ absX, absY, startPoint });
    },
    dragEnd: () => {},
    getEl: () => {},
  };
  return { handler, absX, absY, startPoint, dnd, comp };
};

const Sortable = (props) => {
  const { handler, absX, absY, startPoint, dnd, comp } =
    useSortable(props);
  const moveStyle =  {
    transform: (absX || absY) ?`translate(${absX}px, ${absY}px)`: null,
    left: startPoint?.elStartX,
    top: startPoint?.elStartY,
  };

  return (
    <div style={{  padding: "2rem" }}>
      some thing
      <DragAndDrop
        ref={dnd}
        onDrag={handler.drag}
        onDragEnd={handler.dragEnd}
        component={
          <SemanticUI refCb={(el) => (comp.current = el)} style={{...Styles.move, ...moveStyle}}>
            sort
          </SemanticUI>
        }
      />
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
