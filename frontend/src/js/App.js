import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { Switch, Route, useLocation } from "react-router-dom";
import Helmet from "react-helmet";
import dist, { loadReCaptcha } from "react-recaptcha-google";

import actions from "./actions";

import Home from "./containers/Home";
import Page from "./containers/Page";

import NavBar from "./components/organisms/Navbar";
import Footer from "./components/organisms/Footer";
import NavLinks from "./components/molecules/NavLinks";

import Favicon from "../images/favicon.png";

const LockBodyScroll = () => {
    const location = useLocation();
    useEffect(() => {
        const { body } = document;
        if (location.pathname.includes("/project/")) {
            window.sjdco_scroll_distance = window.scrollY;
            requestAnimationFrame(() => {
                body.classList.add("noscroll");
                body.style.top = `-${window.sjdco_scroll_distance}px`;
            });
        } else {
            requestAnimationFrame(() => {
                body.classList.remove("noscroll");
                body.style.top = null;
                if (window.sjdco_scroll_distance) {
                    window.scroll(null, window.sjdco_scroll_distance);
                    window.sjdco_scroll_distance = 0;
                }
            });
        }
    }, [location.pathname]);
    return null;
};

const App = () => {
    const dispatch = useDispatch();
    const loading = useSelector(
        state => state.initialFetchAll.loading || state.ui.showLoader
    );
    const showMobileMenu = useSelector(state => state.ui.mobileMenuOpen);

    useEffect(() => {
        dispatch(actions.initialFetchAll());
        loadReCaptcha();
    }, []);

    const global = useSelector(state => state.global);

    return (
        <>
            <LockBodyScroll />
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
                <Route exact path="/project/:projectSlug" component={Home} />
                <Route exact path="/:path" component={Page} />
            </Switch>

            <Footer />
        </>
    );
};

export default App;
