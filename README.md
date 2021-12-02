# Redhooks

A redux-like implementation without redux, and without Providers pyramid of doom!

## Why?
If you don't want or can't use redux or redux toolkit you will end up having multiple provider to handle the state
of your application. Like this.

```javascript
<UserProvider>
    <SomeOtherNestedProvider>
        {children}
    </SomeOtherNestedProvider>
</UserProvider>
```

```javascript
import React from 'react';
import { render } from 'react-dom';

import { configureStore, logger } from 'redhoooks';
import { toggleReducer, anotherToggleReducer } from './reducers';


const isDev = process.env.NODE_ENV === 'development';

const { Provider, useToggleState, useToggleDispatch } = configureStore(
  {
    toggle: isDev ? logger(toggleReducer) : toggleReducer,
    anotherToggle: isDev ? logger(anotherToggleReducer) : anotherToggleReducer,
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

const App = () => {
    const state = useToggleState();
    return <div>{state.started}</div>
}

render(<Provider>
    <App />
</Provider>
, document.getElementById('root'));

```

 Inspired by Fragstore from [Aral Roca](aralroca.com) [https://dev.to/aralroca/react-state-with-a-fragmented-store-18ff](https://dev.to/aralroca/react-state-with-a-fragmented-store-18ff)
