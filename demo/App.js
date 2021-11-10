import React from "react";
import "./styles.css";

import Hello from "./Hello";
import H2 from "./H2";
import ToggleState from "./ToggleState";
import ComputedToggleState from "./ComputedToggleState";

export default function App() {
  console.log("render App");
  return (
    <div className="App">
      <Hello />
      <H2 />
      <ToggleState />
      <ComputedToggleState />
    </div>
  );
}
