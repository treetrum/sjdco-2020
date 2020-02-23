import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Helmet from "react-helmet";
import { loadReCaptcha } from "react-recaptcha-google";
import { renderRoutes } from "react-router-config";

import Routes from "./Routes";
import NavBar from "./components/organisms/Navbar";
import Footer from "./components/organisms/Footer";
import NavLinks from "./components/molecules/NavLinks";
import LockBodyScroll from "./components/atoms/LockBodyScroll";
import Favicon from "../images/favicon.png";

const App = () => {
    const showMobileMenu = useSelector(state => state.ui.mobileMenuOpen);
    const global = useSelector(state => state.global);
    useEffect(() => {
        setTimeout(() => {
            loadReCaptcha();
        }, 1000);
    }, []);
    return (
        <>
            <LockBodyScroll />
            <Helmet
                titleTemplate={`%s - ${global.name}`}
                defaultTitle="Sam Davis - Front End Developer"
            >
                <meta
                    name="description"
                    content="Sam Davis - Sydney based frontend developer with over 6 years experience"
                />
                <link rel="shortcut icon" type="image/png" href={Favicon} />
            </Helmet>
            <NavBar />
            <div className={`mobile-menu ${showMobileMenu ? "active" : ""}`}>
                <div className="container">
                    <nav className="links">
                        <NavLinks />
                    </nav>
                </div>
            </div>
            {renderRoutes(Routes)}
            <Footer />
        </>
    );
};

export default App;
