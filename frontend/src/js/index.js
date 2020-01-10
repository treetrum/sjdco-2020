// Import styles
import "../scss/main.scss";

// Polyfills
import "@babel/polyfill";
import "intersection-observer";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ReduxStore from "./Store";

import App from "./App";

ReactDOM.render(
    <Provider store={ReduxStore}>
        <App />
    </Provider>,
    document.getElementById("app")
);
