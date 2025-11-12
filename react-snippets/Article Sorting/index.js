import React from "react";
import ReactDOM from "react-dom";
import { applyPolyfills, defineCustomElements } from "h8k-components/loader";

import { ARTICLES_DATA } from "./constants";

import "./index.css";

import App from "./App";

ReactDOM.render(
  <App articles={ARTICLES_DATA} />,
  document.getElementById("root")
);

applyPolyfills().then(() => {
  defineCustomElements(window);
});
