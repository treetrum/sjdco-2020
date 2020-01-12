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
import Footer from "./components/organisms/Footer";
import NavLinks from "./components/molecules/NavLinks";

import Favicon from "../images/favicon.png";
import Config from "./constants/Config";

const App = () => {
    const dispatch = useDispatch();
    const loading = useSelector(
        state => state.initialFetchAll.loading || state.ui.showLoader
    );
    const showMobileMenu = useSelector(state => state.ui.mobileMenuOpen);

    useEffect(() => {
        dispatch(actions.initialFetchAll());

        const username = "ck_558afd1f565d5daf5ed6977917baf24c11ba0aa0";
        const password = "cs_0f09791ac0f7ad7c66c524bce12e0d6512cbeccf";
        fetch(Config.formsAPI, {
            headers: {
                Authorization: `Basic ${Buffer.from(
                    `${username}:${password}`
                ).toString("base64")}`,
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log("Got form response", data);
            });
    }, []);

    const global = useSelector(state => state.global);

    return (
        <Router>
            <Helmet
                titleTemplate={`%s - ${global.name}`}
                defaultTitle="Sam Davis - Front End Developer"
            >
                <link rel="shortcut icon" type="image/png" href={Favicon} />
            </Helmet>
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
            <Footer />
        </Router>
    );
};

export default App;
