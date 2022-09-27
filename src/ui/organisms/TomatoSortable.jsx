import { useState, useRef } from "react";
import { DDWrapper } from "organism-react-graph";
import query from "css-query-selector";
import {
  build,
  getChildMapping,
  SemanticUI,
  Item,
} from "react-atomic-molecule";
import { nearWhere } from "get-window-offset";
import { KEYS } from "reshow-constant";

const useSortable = ({ setSortElement, fixedX, fixedY }) => {
  const [isDraging, setIsDraging] = useState();
  const comp = useRef();

  const handleSortElement = (targetEl, pointXY) => {
    const near = nearWhere(targetEl, pointXY);
    const sortEl = comp.current;
    const nextId = targetEl.nextSibling?.getAttribute("name");
    const prevId = targetEl.previousSibling?.getAttribute("name");
    const sortId = sortEl?.getAttribute("name");

    let reverse;
    if (targetEl.getAttribute("data-first")) {
      reverse = false;
    } else if (targetEl.getAttribute("data-last")) {
      reverse = near.top ? false : true;
    } else {
      reverse = (nextId === sortId || prevId === sortId) && near.top;
    }

    setSortElement({
      targetEl,
      targetId: targetEl.getAttribute("name"),
      sortEl,
      sortId,
      reverse,
    });
  };

  const handleSortTarget = (pointerTarget) => {
    if (!pointerTarget) {
      return false;
    }
    const type = pointerTarget.getAttribute("data-type");
    if (!type) {
      const sortTarget = query.ancestor(
        pointerTarget,
        '[data-type="sortable"]'
      );
      if (sortTarget) {
        return sortTarget;
      }
    } else {
      if ("sortable" === type) {
        return pointerTarget;
      }
    }
  };

  const handler = {
    drag: (e) => {
      if (!comp.current) {
        return;
      }
      setIsDraging(true);
      const { getPointerTarget, getClientPointerTarget, getAllPointer } = e;
      let pointerTarget;
      if (fixedX) {
        pointerTarget = getClientPointerTarget({ x: e.start.offset.x });
      } else if (fixedY) {
        pointerTarget = getClientPointerTarget({ y: e.start.offset.y });
      } else {
        pointerTarget = getPointerTarget();
      }

      if (!pointerTarget) {
        return;
      }
      const pointXY = {
        x: pointerTarget.pointXY[0],
        y: pointerTarget.pointXY[1],
      };

      let sortTarget = handleSortTarget(pointerTarget);
      if (!sortTarget) {
        const allPointer = getAllPointer();
        ["tr", "br", "bl"].some((key) => {
          pointerTarget = getPointerTarget(allPointer[key]);
          sortTarget = handleSortTarget(pointerTarget);
          if (sortTarget) {
            return true;
          } else {
            return false;
          }
        });
      }
      if (sortTarget) {
        handleSortElement(sortTarget, pointXY);
      }
    },
    dragEnd: (e) => {
      setIsDraging(false);
    },
  };
  return { isDraging, handler, comp };
};

const Sort = (props) => {
  const { handler, isDraging, comp } = useSortable(props);
  const { children, setSortElement, style: propsStyle, ...otherProps } = props;

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
    style: mergeStyle(),
    refCb: (el) => (comp.current = el),
  });

  return (
    <>
      <DDWrapper onDrag={handler.drag} onDragEnd={handler.dragEnd}>
        {dragEl}
      </DDWrapper>
      {shadowEl}
    </>
  );
};

const useSortList = ({ children }) => {
  const [{ sortId, targetId, reverse }, setSortElement] = useState({});
  const lastSortOrder = useRef();
  const sortOrder = [];
  let bFirst;
  const sortOrderPush = (item) => {
    if (!bFirst) {
      bFirst = true;
      sortOrder.push(build(item)({ "data-first": true }));
    } else {
      sortOrder.push(item);
    }
  };

  const childList = getChildMapping(children, (child, key) => (
    <Sort key={key} name={key} setSortElement={setSortElement}>
      {child}
    </Sort>
  ));
  if (!lastSortOrder.current) {
    lastSortOrder.current = KEYS(childList).map((key) => childList[key]);
  }
  lastSortOrder.current.forEach((item) => {
    const key = item.props.name;
    if (sortId === key) {
      if (sortId === targetId) {
        sortOrder.push(childList[key]);
      }
    } else if (targetId === key) {
      if (reverse) {
        sortOrderPush(childList[key]);
        sortOrderPush(childList[sortId]);
      } else {
        sortOrderPush(childList[sortId]);
        sortOrderPush(childList[key]);
      }
    } else {
      sortOrderPush(childList[key]);
    }
  });
  const lastIndex = sortOrder.length - 1;
  sortOrder[lastIndex] = build(sortOrder[lastIndex])({ "data-last": true });
  lastSortOrder.current = sortOrder;
  return { sortOrder, setSortElement };
};

const SortList = (props) => {
  const { sortOrder } = useSortList(props);
  return <SemanticUI style={Styles.itemList}>{sortOrder}</SemanticUI>;
};

const Sortable = (props) => (
  <SortList>
    <Item style={Styles.item}>list 1</Item>
    <Item style={Styles.item}>list 2</Item>
    <Item style={Styles.item}>list 3</Item>
    <Item style={Styles.item}>list 4</Item>
    <Item style={Styles.item}>list 5</Item>
  </SortList>
);

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
