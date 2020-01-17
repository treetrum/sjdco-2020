// Import styles
import "../scss/main.scss";

// Polyfills
import "@babel/polyfill";
import "intersection-observer";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import SmoothScroll from "smooth-scroll";
import { BrowserRouter as Router } from "react-router-dom";
import ReduxStore from "./Store";

import App from "./App";

ReactDOM.render(
    <Provider store={ReduxStore}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("app")
);

const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
});
