import React from "react";
import _ from "lodash";

import ParallaxIcons from "../molecules/ParallaxIcons";

const HeroPage = ({ page }) => {
    const subtitle = _.get(page, "acf.subtitle");
    const title = _.get(page, "title.rendered");
    return (
        <header className="hero-page">
            <ParallaxIcons />
            <div className="container">
                <h1 className="hero-page__title">{title}</h1>
                {subtitle ? <p className="subtitle">{subtitle}</p> : null}
            </div>
        </header>
    );
};

export default HeroPage;
