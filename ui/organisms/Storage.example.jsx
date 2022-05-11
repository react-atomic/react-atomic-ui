import { useRef } from "react";
import { InputBox } from "react-atomic-molecule";
import { useLocalStorage } from "reshow";

const StorageExample = () => {
  const lastEl = useRef();
  const [state, storageDispatch] = useLocalStorage(["foo"]);
  console.log({ state });
  const handleClick = () => {
    storageDispatch({ foo: lastEl.current.value });
  };
  return (
    <InputBox
      refCb={lastEl}
      actionProps={{
        onClick: handleClick,
      }}
    />
  );
};
export default StorageExample;
