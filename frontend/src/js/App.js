import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Helmet from "react-helmet";

import actions from "./actions";

import Home from "./containers/Home";
import Page from "./containers/Page";
import Project from "./containers/Project";

import NavBar from "./components/organisms/Navbar";
import NavLinks from "./components/molecules/NavLinks";

const loadPageData = (nextState, replace, callback) => {
    console.log({ nextState, replace });
    setTimeout(() => {
        callback();
    }, 1000);
};

const App = () => {
    const dispatch = useDispatch();
    const loading = useSelector(
        state => state.initialFetchAll.loading || state.ui.showLoader
    );
    const showMobileMenu = useSelector(state => state.ui.mobileMenuOpen);

    useEffect(() => {
        dispatch(actions.initialFetchAll());
    }, []);

    const global = useSelector(state => state.global);

    return (
        <Router>
            <Helmet
                titleTemplate={`%s - ${global.name}`}
                defaultTitle="Sam Davis - Front End Developer"
            />
            <CSSTransition in={loading} timeout={350} classNames="loading">
                <div className="page-loader loading-enter">
                    <div className="progress-bar">
                        <div className="inner" />
                    </div>
                </div>
            </CSSTransition>

            <NavBar />

            <div className={`mobile-menu ${showMobileMenu ? "active" : ""}`}>
                <div className="container">
                    <nav className="links">
                        <NavLinks />
                    </nav>
                </div>
            </div>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/project/:projectSlug" component={Project} />
                <Route exact path="/:path" component={Page} />
            </Switch>
        </Router>
    );
};

export default App;
