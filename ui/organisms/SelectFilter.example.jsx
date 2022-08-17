import { SelectFilter } from "organism-react-select-filter";
import { useRef } from "react";

const options = [
  {
    label: "Boy",
    value: "boy",
  },
  {
    label: "Girl",
    value: "girl",
  },
];

const SelectFilterExample = () => {
  const lastCommand = useRef();
  return (
    <>
      <SelectFilter
        ref={lastCommand}
        options={options}
      />
    </>
  );
};

export default SelectFilterExample;
