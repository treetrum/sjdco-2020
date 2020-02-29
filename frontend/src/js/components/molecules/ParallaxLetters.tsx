import * as React from "react";

import useParallax from "../../hooks/useParallax";

const SSVG = require("../../../images/logos/S.svg");
const DSVG = require("../../../images/logos/D.svg");

const ParallaxLetters = () => {
    const letteresRef = React.useRef<HTMLDivElement>(null);
    useParallax(letteresRef);
    return (
        <div className="parallax-letters" ref={letteresRef}>
            <div className="layer s" data-depth="0.1">
                <img alt="" src={SSVG} />
            </div>
            <div className="layer d" data-depth="0.1">
                <img alt="" src={DSVG} />
            </div>
        </div>
    );
};

export default ParallaxLetters;
