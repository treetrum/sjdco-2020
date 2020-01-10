import React from "react";

import { useSelector } from "react-redux";
import NavBar from "../organisms/Navbar";
import NavLinks from "../molecules/NavLinks";

const Home = () => {
    const isActive = useSelector(state => state.ui.mobileMenuOpen);
    return (
        <>
            <NavBar />
            <div className={`mobile-menu ${isActive ? "active" : ""}`}>
                <div className="contain">
                    <nav className="links">
                        <NavLinks />
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Home;
