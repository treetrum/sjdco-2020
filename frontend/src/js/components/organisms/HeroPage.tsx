import * as React from "react";

import ParallaxIcons from "../molecules/ParallaxIcons";

import { PageType } from "../../redux-store-types/page";

interface PropsType {
    page: PageType;
}

const HeroPage: React.FC<PropsType> = ({ page }) => {
    const subtitle = page.acf.subtitle;
    const title = page.title.rendered;
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
