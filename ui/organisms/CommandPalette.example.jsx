import { CommandPalette } from "organism-react-select-filter";
import { useRef } from "react";

const commands = [
  {
    label: "Boy",
    value: "boy",
    command: (item) => {
      console.log({ item }, "click");
    },
  },
  {
    label: "Girl",
    value: "girl",
  },
];

const CommandPaletteExample = () => {
  const lastCommand = useRef();
  return (
    <>
      <CommandPalette
        hotkey={["Meta", "/"]}
        ref={lastCommand}
        commands={commands}
        onChange={(item) => console.log({ item }, "default change")}
        onlyCommand
      />
      <button onClick={() => lastCommand.current.open()}>open command</button>
    </>
  );
};

export default CommandPaletteExample;
