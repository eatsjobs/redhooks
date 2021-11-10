import React, { createContext, useContext, useReducer } from "react";

const capitalize = (k) => `${k[0].toUpperCase()}${k.slice(1, k.length)}`;
const Empty = ({ children }) => children;

const createContexts = (keys) =>
  keys.reduce((o, key) => {
    const context = createContext({}); // Property context
    const actionContext = createContext({}); // Actions context

    return [
      ...o,
      // All contexts
      { context, actionContext, key }
    ];
  }, []);

const createStore = (reducers = {}, initialState) => {
  const contexts = createContexts(Object.keys(reducers));

  const Component = contexts
    .map(({ context, actionContext, key }) => {
      return ({ children }) => {
        const [state, dispatch] = useReducer(
          reducers[key],
          initialState[key] || {}
        );
        return (
          <actionContext.Provider value={dispatch}>
            <context.Provider value={state}>{children}</context.Provider>
          </actionContext.Provider>
        );
      };
    })
    .reduce(
      (RestProviders, Provider) => ({ children }) => (
        <Provider>
          <RestProviders>{children}</RestProviders>
        </Provider>
      ),
      Empty
    );

  return {
    Provider: ({ children }) => <Component>{children}</Component>,
    ...createHooks(contexts)
  };
};

const createHooks = (contexts) => {
  return contexts.reduce((acc, { context, actionContext, key }) => {
    return {
      ...acc,
      [`use${capitalize(key)}State`]: () => useContext(context),
      [`use${capitalize(key)}Dispatch`]: () => useContext(actionContext)
    };
  }, {});
};

export default createStore;
