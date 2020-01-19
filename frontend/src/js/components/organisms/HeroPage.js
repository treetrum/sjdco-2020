import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

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

HeroPage.propTypes = {
    page: PropTypes.object.isRequired,
};

export default HeroPage;
