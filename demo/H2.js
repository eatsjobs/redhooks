import React from "react";
import { withToggleActions } from "./clientState/connectors";

const H2 = ({ actions }) => {
  console.log("render H2");
  return <h2 onClick={actions.asyncToggle}>Start toggle 1 async</h2>;
};

export default withToggleActions(H2);
