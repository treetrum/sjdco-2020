import * as React from "react";

import { useDispatch } from "react-redux";
import NavLinks from "../molecules/NavLinks";
import actions from "../../actions";
import PreloadLink from "../atoms/PreloadLink";
import { useTypedSelector } from "../../Store";

const SDLogo = require("../../../images/logos/sd-logo.svg");

const NavBar = () => {
    const dispatch = useDispatch();
    const toggleMenu = () => {
        dispatch(actions.toggleMenu());
    };
    const isMenuOpen = useTypedSelector(state => state.ui.mobileMenuOpen);
    return (
        <header className="navbar">
            <div className="container">
                <div className="navbar-items">
                    <div className="navbar-item logo">
                        <PreloadLink to="/">
                            <img src={SDLogo} alt="SJDco Logo" />
                        </PreloadLink>
                    </div>
                    <nav className="navbar-item menu">
                        <NavLinks />
                    </nav>
                    <div className="navbar-item hamburger">
                        <button
                            aria-label="Menu"
                            style={{ background: "none", border: 0 }}
                            type="button"
                            className={`animated-hamburger ${
                                isMenuOpen ? "active" : ""
                            }`}
                            onClick={toggleMenu}
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
