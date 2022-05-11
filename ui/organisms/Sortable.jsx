import React, {
  useCallback,
  useState,
  useEffect,
  useRef,
  forwardRef,
} from "react";
import { DDWrapper } from "organism-react-graph";
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
  const [isDraging, setIsDraging] = useState();
  const comp = useRef();

  const handleTarget = (targetEl, floatXY) => {
    const near = nearWhere(targetEl, floatXY);
    const sortEl = comp.current;
    const nextId = targetEl.nextSibling?.getAttribute("name");
    const prevId = targetEl.previousSibling?.getAttribute("name");
    const sortId = sortEl?.getAttribute("name");

    let reverse = (nextId === sortId || prevId === sortId) && near.top;
    if (targetEl.getAttribute("data-first")) {
      reverse = false;
    } else if (targetEl.getAttribute("data-last")) {
      reverse = near.top ? false : true;
    }

    setSortElement({
      targetEl,
      targetId: targetEl.getAttribute("name"),
      sortEl,
      sortId,
      reverse,
    });
  };

  const handler = {
    drag: (e) => {
      if (!comp.current) {
        return;
      }
      setIsDraging(true);
      const { destTarget, clientX, clientY } = e;
      let sortTarget;
      const floatXY = {
        x: clientX,
        y: clientY,
      };
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
    },
    dragEnd: (e) => {
      setIsDraging(false);
    },
  };
  return { isDraging, handler, comp };
};

const Sort = forwardRef((props, ref) => {
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
});

const useSortList = ({ children }) => {
  const [sortElement, setSortElement] = useState();
  const childList = getChildMapping(children, (child, key) => (
    <Sort key={key} name={key} setSortElement={setSortElement}>
      {child}
    </Sort>
  ));

  const { sortId, targetId, reverse } = sortElement || {};

  const lastSortOrder = useRef(
    (() => {
      return keys(childList).map((key) => childList[key]);
    })()
  );
  const sortOrder = [];
  let bFirst;
  let bLast;
  const arrPush = (item) => {
    if (!bFirst) {
      bFirst = true;
      sortOrder.push(build(item)({ "data-first": true }));
    } else {
      sortOrder.push(item);
    }
  };

  lastSortOrder.current.forEach((item) => {
    const key = item.props.name;
    if (sortId === key) {
      if (sortId === targetId) {
        sortOrder.push(childList[key]);
      }
    } else if (targetId === key) {
      if (reverse) {
        arrPush(childList[key]);
        arrPush(childList[sortId]);
      } else {
        arrPush(childList[sortId]);
        arrPush(childList[key]);
      }
    } else {
      arrPush(childList[key]);
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
