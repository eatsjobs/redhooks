import { configureStore, logger } from "../redhooks";
import { anotherToggleReducer, toggleReducer } from "./reducers";
const { Provider, ...rest } = configureStore(
  {
    toggle: logger(toggleReducer),
    anotherToggle: logger(anotherToggleReducer)
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

const hooks = rest;
export { hooks };
export default Provider;
