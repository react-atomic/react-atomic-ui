import React, { PureComponent } from "react";

import { Button, SemanticUI } from "react-atomic-molecule";

import { Suggestion } from "react-atomic-organism";

const data = ["abc", "abb", "acc"];

class SuggestionExample1 extends PureComponent {
  state = {
    results: [],
  };

  handleChange = (e, value) => {
    if (!value.length) {
      this.setState({ results: data });
      return;
    }
    const results = [];
    data.forEach((v, k) => {
      if (value.length && -1 !== v.indexOf(value)) {
        results.push(v);
      }
    });
    this.setState({ results });
  };

  handleItemClick = (e, item) => {
    this.suggestion.setValue(item);
  };

  render() {
    const { results, myValue } = this.state;
    return (
      <SemanticUI>
        <Suggestion
          ref={(el) => (this.suggestion = el)}
          onChange={this.handleChange}
          results={results}
          onItemClick={this.handleItemClick}
          value={myValue}
        />
        <Button
          onClick={() =>
            this.setState({ myValue: myValue ? myValue + 1 : 123 })
          }
        >
          set
        </Button>
      </SemanticUI>
    );
  }
}

const SuggestionExample = () => (
  <SemanticUI>
    <SuggestionExample1 />
    couldCreate: false
    <Suggestion results={data} couldCreate={false} filter preview />
  </SemanticUI>
);

export default SuggestionExample;
