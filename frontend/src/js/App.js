import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import actions from "./actions";

import Home from "./containers/Home";
import Page from "./containers/Page";

import NavBar from "./components/organisms/Navbar";
import NavLinks from "./components/molecules/NavLinks";

const App = () => {
    const dispatch = useDispatch();
    const loading = useSelector(
        state => state.initialFetchAll.loading || state.ui.showLoader
    );
    const showMobileMenu = useSelector(state => state.ui.mobileMenuOpen);

    useEffect(() => {
        dispatch(actions.initialFetchAll());
    }, []);

    return (
        <Router>
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
                <Route exact path="/:path" component={Page} />
            </Switch>
        </Router>
    );
};

export default App;
