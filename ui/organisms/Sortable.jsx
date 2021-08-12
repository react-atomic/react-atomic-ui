import React, {
  useCallback,
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import { DragAndDrop } from "organism-react-graph";
import query from "css-query-selector";
import {
  build,
  getChildMapping,
  SemanticUI,
  List,
  Item,
} from "react-atomic-molecule";
import callfunc from "call-func";
import { nearWhere } from "get-window-offset";

const keys = Object.keys;

const useSortable = (props) => {
  const { setSortElement } = props;

  const [state, setState] = useState(() => ({
    absX: 0,
    absY: 0,
    isDraging: false,
  }));

  const { absX, absY, startPoint, isDraging, destTarget } = state;

  const _mount = useRef(true);
  const dnd = useRef();
  const comp = useRef();

  const handleTarget = (targetEl, floatXY) => {
    const near = nearWhere(targetEl, floatXY);
    const sortEl = comp.current;
    setSortElement({
      targetEl,
      targetId: targetEl.getAttribute("name"),
      sortEl,
      sortId: sortEl.getAttribute("name"),
      desc: near.top,
    });
  };

  useEffect(() => () => (_mount.current = false), []);

  const move = ({
    absX,
    absY,
    startPoint,
    destTarget,
    clientX,
    clientY,
    ...other
  }) => {
    let sortTarget;
    const floatXY = {
      x: clientX,
      y: clientY,
    };
    if (_mount.current) {
      const type = destTarget?.getAttribute("data-type");
      if (!type) {
        sortTarget = query.ancestor(destTarget, '[data-type="sortable"]');
        if (sortTarget) {
          handleTarget(sortTarget, floatXY);
        }
      } else {
        if ("sortable" === type) {
          handleTarget(destTarget, floatXY);
        }
      }
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
  return {
    handler,
    absX,
    absY,
    startPoint,
    dnd,
    comp,
    isDraging,
    destTarget,
  };
};

const Sort = forwardRef((props, ref) => {
  const { handler, absX, absY, startPoint, dnd, comp, isDraging, destTarget } =
    useSortable(props);
  const { children, setSortElement, style: propsStyle, ...otherProps } = props;

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

  const mergeStyle = (style) => {
    return {
      ...propsStyle,
      ...children.props?.style,
      ...style,
    };
  };

  const item = build(
    build(children)({
      ...otherProps,
      "data-type": "sortable",
    })
  );

  const activeStyle = isDraging ? Styles.active : null;

  const shadowEl = isDraging ? item({ style: mergeStyle(activeStyle) }) : null;
  const dragEl = item({
    style: mergeStyle(moveStyle),
    refCb: (el) => (comp.current = el),
  });

  return (
    <>
      <DragAndDrop
        ref={dnd}
        onDrag={handler.drag}
        onDragEnd={handler.dragEnd}
        component={dragEl}
      />
      {shadowEl}
    </>
  );
});

const useSortList = ({children}) => {
  const [sortElement, setSortElement] = useState();
  const childList = getChildMapping(children, (child, key) => (
    <Sort key={key} name={key} setSortElement={setSortElement}>
      {child}
    </Sort>
  ));
  const { sortId, targetId, desc } = sortElement || {};
  const lastSortOrder = useRef(
    (() => {
      return keys(childList).map((key) => childList[key]);
    })()
  );
  const sortOrder = [];
  lastSortOrder.current.forEach((item) => {
    const key = item.props.name;
    if (sortId === key) {
      if (sortId === targetId) {
        sortOrder.push(childList[key]);
      }
    } else if (targetId === key) {
      if (desc) {
        sortOrder.push(childList[sortId], childList[key]);
      } else {
        sortOrder.push(childList[key], childList[sortId]);
      }
    } else {
      sortOrder.push(childList[key]);
    }
  });
  lastSortOrder.current = sortOrder;
  return { sortOrder, setSortElement };
};

const SortList = (props) => {
  const { sortOrder } = useSortList(props);
  return <SemanticUI style={Styles.itemList}>{sortOrder}</SemanticUI>;
};

const Sortable = (props) => {
  return (
    <SortList>
      <Item style={Styles.item}>sort1</Item>
      <Item style={Styles.item}>list 1</Item>
      <Item style={Styles.item}>list 2</Item>
    </SortList>
  );
};

export default Sortable;

const Styles = {
  move: {
    position: "absolute",
    pointerEvents: "none",
  },
  active: {
    border: "2px dashed rgba(0, 0, 0, 0.2)",
  },
  itemList: {
    margin: "0 auto",
    width: 100,
  },
  item: {
    width: 100,
    height: 50,
    border: "1px solid rgba(0, 0, 0, 0.5)",
  },
};
