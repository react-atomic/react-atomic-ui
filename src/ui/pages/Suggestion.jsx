/*Base*/
import CodeExample from "organism-react-code";
import usePage from "../../usePage";

// example
import Suggestion from "../organisms/Suggestion.example";
import suggestion from "../../../../../src/ui/organisms/Suggestion.example.jsx?raw";

import SuggestionWithoutNewItem from "../organisms/SuggestionWithoutNewItem.example";
import suggestionWithoutNewItem from "../../../../../src/ui/organisms/SuggestionWithoutNewItem.example.jsx?raw";

import TagInput from "../organisms/TagInput.example";
import tagInput from "../../../../../src/ui/organisms/TagInput.example.jsx?raw";

import CommandPalette from "../organisms/CommandPalette.example";
import commandPalette from "../../../../../src/ui/organisms/CommandPalette.example.jsx?raw";

import SelectFilter from "../organisms/SelectFilter.example";
import selectFilter from "../../../../../src/ui/organisms/SelectFilter.example.jsx?raw";

import ErrorForm from "../organisms/ErrorForm.example";
import errorForm from "../../../../../src/ui/organisms/ErrorForm.example.jsx?raw";

import TagHighlight from "../organisms/TagHighlight.example";
import tagHighlight from "../../../../../src/ui/organisms/TagHighlight.example.jsx?raw";

const SuggestionPage = (props) => {
  usePage({ ...props, pageName: "Suggestion" });
  return (
    <>
      <CodeExample code={commandPalette} header="Command Palette" id="command-palette">
        <CommandPalette />
      </CodeExample>

      <CodeExample code={tagHighlight} header="Tag Highlight" id="tag-highlight">
        <TagHighlight />
      </CodeExample>

      <CodeExample code={selectFilter} header="Select Filter" id="select-filter">
        <SelectFilter />
      </CodeExample>

      <CodeExample code={errorForm} header="Dropdown" id="errorForm">
        <ErrorForm />
      </CodeExample>

      <CodeExample code={tagInput} header="Tag input" id="tagInput">
        <TagInput />
      </CodeExample>

      <CodeExample code={suggestion} header="Suggestion" id="suggestion">
        <Suggestion />
      </CodeExample>

      <CodeExample code={suggestionWithoutNewItem} header="Suggestion without new item" id="suggestion-without-new-item">
        <SuggestionWithoutNewItem />
      </CodeExample>
    </>
  );
};

export default SuggestionPage;
