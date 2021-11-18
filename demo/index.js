import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Provider from "./clientState/index";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
