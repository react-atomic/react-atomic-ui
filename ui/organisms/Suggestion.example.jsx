import { useState, useRef, useEffect } from "react";

import { Button } from "react-atomic-molecule";

import { Suggestion } from "react-atomic-organism";

const data = ["abc", "abb", "acc"];

const SuggestionExample = () => {
  const [results, setResults] = useState();
  const [myValue, setMyValue] = useState();
  const lastSuggestion = useRef();

  const handler = {
    itemClick: (e) => {
      setMyValue(e.item);
    },
    change: (e) => {
      const value = e.value;
      setMyValue(value);
      if (!value.length) {
        setResults(data);
        return;
      }
      const results = [];
      data.forEach((v, k) => {
        if (value.length && -1 !== v.indexOf(value)) {
          results.push(v);
        }
      });
      setResults(results);
    },
  };

  useEffect(() => {
    lastSuggestion.current.setValue(myValue);
  }, [myValue]);
  return (
    <>
      <Suggestion
        ref={lastSuggestion}
        onChange={handler.change}
        results={results}
        onItemClick={handler.itemClick}
      >
        <Button
          onClick={() =>
            setMyValue((prev) =>
              prev ? (!isNaN(prev) ? prev * 1 : prev) + 1 : 123
            )
          }
          style={{ marginLeft: 10 }}
        >
          set
        </Button>
      </Suggestion>
    </>
  );
};

export default SuggestionExample;
