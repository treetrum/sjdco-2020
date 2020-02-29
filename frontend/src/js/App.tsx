import * as React from "react";
import { useTypedSelector } from "./Store";
import Helmet from "react-helmet";
import { renderRoutes } from "react-router-config";

import Routes from "./Routes";
import NavBar from "./components/organisms/Navbar";
import Footer from "./components/organisms/Footer";
import NavLinks from "./components/molecules/NavLinks";
import LockBodyScroll from "./components/atoms/LockBodyScroll";

const Favicon = require("../images/favicon.png");

const App = () => {
    const showMobileMenu = useTypedSelector(state => state.ui.mobileMenuOpen);
    const global = useTypedSelector(state => state.global);

    return (
        <>
            <LockBodyScroll />
            <Helmet
                titleTemplate={`%s - ${global.data.name}`}
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
