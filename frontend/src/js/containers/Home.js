import React from "react";
import Helmet from "react-helmet";

import usePageData from "../hooks/usePageData";
import ParallaxIcons from "../components/molecules/ParallaxIcons";
import ParallaxLetters from "../components/molecules/ParallaxLetters";

const Home = props => {
    const [loading, page] = usePageData(props.location.pathname);
    if (loading) {
        return null;
    }

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
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
        </>
    );
};

export default Home;
