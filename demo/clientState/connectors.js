import React from "react";
import { createAsyncDispatch } from "../../src";
import { hooks } from "./index";
const {
  useAnotherToggleDispatch,
  useAnotherToggleState,
  useToggleState,
  useToggleDispatch
} = hooks;

function delay(ms = 300) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
}

function withAnotherToggleActions(Component) {
  return ({ ...props }) => {
    const dispatch = useAnotherToggleDispatch();
    const toggle = () => dispatch({ type: "ANOTHER_TOGGLE" });
    const actions = {
      toggle
    };
    return <Component {...props} actions={actions} />;
  };
}

function withToggleActions(Component) {
  return ({ ...props }) => {
    const dispatch = useToggleDispatch();
    const asyncToggle = createAsyncDispatch(dispatch);

    const actions = {
      toggle: () => dispatch({ type: "TOGGLE" }),
      asyncToggle: () => asyncToggle(delay(1000), "TOGGLE")
    };
    return <Component {...props} actions={actions} />;
  };
}

function withAnotherToggleState(Component) {
  return ({ ...props }) => {
    const state = useAnotherToggleState();
    return <Component {...props} state={state} />;
  };
}

function withToggleState(Component) {
  return ({ ...props }) => {
    const state = useToggleState();
    return <Component {...props} state={state} />;
  };
}

function withComputedToggleState(Component) {
  return ({ ...props }) => {
    const state = useAnotherToggleState();
    const state1 = useToggleState();

    return <Component {...props} state={state.started && state1.started} />;
  };
}

export {
  withComputedToggleState,
  withAnotherToggleState,
  withToggleState,
  withToggleActions,
  withAnotherToggleActions
};
