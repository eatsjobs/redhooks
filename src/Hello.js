import React, { memo } from "react";
import {
  withAnotherToggleState,
  withAnotherToggleActions
} from "./clientState/connectors";
const Hello = memo(({ state, actions }) => {
  console.log("render AnotherToggle");
  return (
    <h1 onClick={actions.toggle}>
      Start toggle 2: {`${state.started ? "started" : "not started"}`}
    </h1>
  );
});

export default withAnotherToggleState(withAnotherToggleActions(Hello));
