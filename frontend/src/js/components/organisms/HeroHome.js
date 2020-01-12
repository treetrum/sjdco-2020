import React from "react";
import ParallaxIcons from "../molecules/ParallaxIcons";
import ParallaxLetters from "../molecules/ParallaxLetters";

const HeroHome = () => {
    return (
        <header className="hero-home">
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
                    with a background in{" "}
                    <span className="highlight-blue">graphic design</span>
                </p>
                <p className="buttons">
                    <a className="button-green" href="/contact">
                        About Me
                    </a>
                </p>
            </div>

            <div className="more-link">
                <a href="#my-work">Some of my work</a>
            </div>
        </header>
    );
};

export default HeroHome;
