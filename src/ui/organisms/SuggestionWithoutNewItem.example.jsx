import { useState, useRef } from "react";

import { Button } from "react-atomic-molecule";

import { Suggestion } from "react-atomic-organism";

const data = ["abc", "abb", "acc"];

const SuggestionExample = () => (
    <Suggestion results={data} couldCreate={false} filter preview />
);

export default SuggestionExample;
