import * as React from "react";

import ParallaxIcons from "../molecules/ParallaxIcons";
import ParallaxLetters from "../molecules/ParallaxLetters";
import PreloadLink from "../atoms/PreloadLink";
import useWindowHeight from "../../hooks/useWindowHeight";

const HeroHome = () => {
    const minHeight = useWindowHeight();
    return (
        <header className="hero-home" style={{ minHeight: `${minHeight}px` }}>
            <ParallaxIcons />
            <ParallaxLetters />
            <div className="container">
                <h1 className="site-title">Sam Davis</h1>
                <p className="subtitle">
                    A passionate{" "}
                    <span className="highlight-purple">
                        front-end developer
                    </span>{" "}
                    <br />
                    with over{" "}
                    <span className="highlight-blue">6 years experience</span>
                </p>
                <p className="buttons">
                    <PreloadLink className="button-green" to="/contact">
                        About Me
                    </PreloadLink>
                </p>
            </div>
            <div className="more-link">
                <a href="#my-work">Some of my work</a>
            </div>
        </header>
    );
};

export default HeroHome;
