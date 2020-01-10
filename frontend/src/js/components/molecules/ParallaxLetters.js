import React from "react";

import SSVG from "../../../images/logos/S.svg";
import DSVG from "../../../images/logos/D.svg";

const ParallaxLetters = () => {
    return (
        <div className="parallax-letters">
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
