// Import styles
import "../scss/main.scss";

// Polyfills
import "@babel/polyfill";
import "intersection-observer";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import * as SmoothScroll from "smooth-scroll";
import { BrowserRouter as Router } from "react-router-dom";
import * as NProgress from "nprogress";
import { CSSTransition } from "react-transition-group";
import ReduxStore from "./Store";
import DataFetcher from "./utils/DataFetcher";
import Routes from "./Routes";
import Actions from "./actions/index";

import App from "./App";

NProgress.configure({ minimum: 0.3, trickleSpeed: 100 });

const Inner = () => {
    const dispatch = useDispatch();
    const [innerLoading, setInnerLoading] = React.useState(false);
    const [componentLoading, setComponentLoading] = React.useState(false);
    const state = useSelector(s => s);
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
                onLoadingStateChange={({ loading, error, initial }) => {
                    setComponentLoading(!!initial);
                    if (loading || innerLoading) {
                        NProgress.start();
                    } else {
                        NProgress.done();
                    }
                    if (error) {
                        NProgress.done();
                    }
                }}
                initialPreload={() => {
                    const promises = [dispatch(Actions.initialFetchAll())];
                    return Promise.all(promises);
                }}
            >
                <App />
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
