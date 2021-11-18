import React from "react";
import { withToggleState } from "./clientState/connectors";

const ToggleState = ({ state }) => {
  console.log("render ToggleState");
  let s = state.started ? "started" : "not started";
  return (
    <span>
      toggle 1 started? {s} {state.loading ? "loading" : ""}
    </span>
  );
};

export default withToggleState(ToggleState);
