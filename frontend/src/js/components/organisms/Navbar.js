import React from "react";

import { useDispatch, useSelector } from "react-redux";
import SDLogo from "../../../images/logos/sd-logo.svg";
import NavLinks from "../molecules/NavLinks";
import actions from "../../actions";
import PreloadLink from "../../shared/PreloadLink";

const NavBar = () => {
    const dispatch = useDispatch();
    const toggleMenu = () => {
        dispatch(actions.toggleMenu());
    };
    const isMenuOpen = useSelector(state => state.ui.mobileMenuOpen);
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
