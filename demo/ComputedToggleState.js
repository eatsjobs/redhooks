import React, { memo } from "react";
import { withComputedToggleState } from "./clientState/connectors";

const ComputedToggleState = memo(({ state, actions }) => {
  console.log("render ComputedToggleState");
  return <div> both started? {state ? "yes" : "no"}</div>;
});

export default withComputedToggleState(ComputedToggleState);
