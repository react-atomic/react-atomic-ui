import { CommandPalette } from "organism-react-select-filter";
import Link from "ricon/Link";
import Email from "ricon/Email";
import Code from "ricon/Code";
import Home from "ricon/Home";
import Account from "ricon/Account";
import Edit from "ricon/Edit";
import Lightbulb from "ricon/Lightbulb";

const commands = [
  {
    label: "Copy Link",
    header: "General",
    icon: Link,
  },
  {
    label: "Send Email",
    header: "General",
    icon: Email,
  },
  {
    label: "View Source",
    header: "General",
    icon: Code,
  },
  {
    label: "Home",
    header: "Go To",
    icon: Home,
  },
  {
    label: "About",
    header: "Go To",
    icon: Account,
  },
  {
    label: "Articles",
    header: "Go To",
    icon: Edit,
  },
  {
    label: "Projects",
    header: "Go To",
    icon: Lightbulb,
  },
];

const CommandPaletteExample = () => 
    <CommandPalette
      hotkey={["Meta", "/"]}
      commands={commands}
      onChange={(item) => console.log({ item }, "default change")}
      onlyCommand
    />

export default CommandPaletteExample;
