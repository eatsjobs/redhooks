import React from 'react';
import { configureStore } from "../index.js";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

function toggleReducer(
    state = {
      loading: false,
      started: false
    },
    action
  ) {
    switch (action.type) {
      case "TOGGLE":
        return {
          ...state,
          started: !state.started
        };
      case "TOGGLE_LOADING":
        return {
          ...state,
          loading: true
        };
      case "TOGGLE_LOADED":
        return {
          ...state,
          loading: false,
          started: !state.started
        };
      default:
        return state;
    }
  }
  
  function anotherToggleReducer(state = {}, action) {
    switch (action.type) {
      case "ANOTHER_TOGGLE":
        return {
          ...state,
          started: !state.started
        };
      default:
        return state;
    }
  }
  
const TestingComponent = ({ toggleState, toggleAction }) => {
    return <div onClick={toggleAction}>
        {toggleState.started ? 'started' : 'not started'}
    </div>
}

const { Provider, useToggleState, useToggleDispatch } = configureStore(
  {
    toggle: toggleReducer,
    anotherToggle: anotherToggleReducer
  },
  {
    toggle: {
      started: false
    },
    anotherToggle: {
      started: true
    }
  }
);


const withToggleStateHOC = (Component) => {
  function withToggleState({ ...props }) {
      const toggleState = useToggleState();
      const dispatch = useToggleDispatch();
      const action = () => dispatch({ type: 'TOGGLE' });
      return <Component {...props} toggleState={toggleState} toggleAction={action} />
  }
  return withToggleState;
}

const BoundTestingComponent = withToggleStateHOC(TestingComponent)


test('configureStore should render initial value', () => {
      render(<Provider>
          <BoundTestingComponent />
      </Provider>);

      expect(screen.queryByText('not started')).toBeVisible();
});

test('configureStore should dispatch an action', () => {
  render(<Provider>
      <BoundTestingComponent />
  </Provider>);

  expect(screen.queryByText('not started')).toBeVisible();
  userEvent.click(screen.queryByText('not started'));
  expect(screen.queryByText('started')).toBeVisible();
})