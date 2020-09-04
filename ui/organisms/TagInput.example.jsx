import React, { PureComponent } from "react";
import { TagsField } from "organism-react-tag-input";
import { SemanticUI } from "react-atomic-molecule";

class TagInputExample extends PureComponent {
  render() {
    return (
      <SemanticUI>
        <TagsField />
      </SemanticUI>
    );
  }
}

export default TagInputExample;
