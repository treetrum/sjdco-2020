// Import styles
import "../scss/main.scss";

// Polyfills
import "@babel/polyfill";
import "intersection-observer";

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import SmoothScroll from "smooth-scroll";
import { BrowserRouter as Router } from "react-router-dom";
import NProgress from "nprogress";
import { CSSTransition } from "react-transition-group";
import { loadRecaptcha } from "react-recaptcha-google";
import ReduxStore from "./Store";
import DataFetcher from "./utils/DataFetcher";
import Routes from "./Routes";
import Actions from "./actions/index";

import App from "./App";

NProgress.configure({ minimum: 0.3, trickleSpeed: 100 });

// Creates a new promise that automatically resolves after some timeout:
const delay = time =>
    new Promise(resolve => {
        setTimeout(resolve, time);
    });

// Throttle this promise to resolve no faster than the specified time:
Promise.prototype.takeAtLeast = function(time) {
    return Promise.all([this, delay(time)]).then(([result]) => result);
};

const Inner = () => {
    const dispatch = useDispatch();
    const [innerLoading, setInnerLoading] = useState(false);
    const [componentLoading, setComponentLoading] = useState(false);
    const state = useSelector(state => state);
    const handleLoadingStateChange = ({ loading, error, initial } = {}) => {
        setComponentLoading(!!initial);
        if (loading || innerLoading) {
            NProgress.start();
        } else {
            NProgress.done();
        }
        if (error) {
            NProgress.done();
        }
    };
    const showSiteLoader = innerLoading && componentLoading;
    return (
        <Router>
            <CSSTransition
                in={componentLoading}
                timeout={1200}
                classNames="loading"
            >
                <div className="loader loading-enter">
                    <div className="loader-1" />
                    <div className="loader-2" />
                    <div className="loader-3" />
                    <div className="loader-4" />
                </div>
            </CSSTransition>
            <DataFetcher
                routes={Routes}
                passToPreload={{ dispatch: ReduxStore.dispatch, state }}
                onLoadingStateChange={handleLoadingStateChange}
                initialPreload={() => {
                    const promises = [dispatch(Actions.initialFetchAll())];
                    return Promise.all(promises);
                }}
            >
                <App
                    setLoading={setInnerLoading}
                    showSiteLoader={showSiteLoader}
                />
            </DataFetcher>
        </Router>
    );
};

const OuterApp = () => {
    return (
        <Provider store={ReduxStore}>
            <Inner />
        </Provider>
    );
};

ReactDOM.render(<OuterApp />, document.getElementById("app"));

const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
});
