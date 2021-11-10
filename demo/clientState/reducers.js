export function toggleReducer(
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

export function anotherToggleReducer(state = {}, action) {
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
