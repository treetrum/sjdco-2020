// Import styles
import "../scss/main.scss";

// Polyfills
import "@babel/polyfill";
import "intersection-observer";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as SmoothScroll from "smooth-scroll";
import { BrowserRouter as Router } from "react-router-dom";
import * as NProgress from "nprogress";

import ReduxStore, { useTypedSelector } from "./Store";
import DataFetcher from "./utils/DataFetcher";
import Routes from "./Routes";
import Actions from "./actions/index";
import App from "./App";
import SiteLoader from "./components/atoms/SiteLoader";

NProgress.configure({ minimum: 0.3, trickleSpeed: 100 });

const RootApp = () => {
    const [componentLoading, setComponentLoading] = React.useState(false);
    return (
        <Provider store={ReduxStore}>
            <Router>
                <SiteLoader active={componentLoading} />
                <DataFetcher
                    routes={Routes}
                    passToPreload={{ store: ReduxStore }}
                    onLoadingStateChange={({ loading, error, initial }) => {
                        setComponentLoading(!!initial);
                        if (loading) {
                            NProgress.start();
                        } else {
                            NProgress.done();
                        }
                        if (error) {
                            NProgress.done();
                        }
                    }}
                    initialPreload={() => {
                        const promises = [
                            ReduxStore.dispatch<any>(Actions.initialFetchAll()),
                        ];
                        return Promise.all(promises);
                    }}
                >
                    <App />
                </DataFetcher>
            </Router>
        </Provider>
    );
};

ReactDOM.render(<RootApp />, document.getElementById("app"));

const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
});
