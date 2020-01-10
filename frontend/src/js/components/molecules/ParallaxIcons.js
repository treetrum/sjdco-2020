import React from "react";

import aperture from "../../../images/icons/aperture.svg";
import checkbox from "../../../images/icons/checkbox.svg";
import command from "../../../images/icons/command.svg";
import cpu from "../../../images/icons/cpu.svg";
import cube from "../../../images/icons/cube.svg";
import headphones from "../../../images/icons/headphones.svg";
import lightningBolt from "../../../images/icons/lightning-bolt.svg";
import mapPin from "../../../images/icons/map-pin.svg";
import musicalNote from "../../../images/icons/musical-note.svg";
import pulse from "../../../images/icons/pulse.svg";

const ParallaxIcons = () => {
    return (
        <div className="parallax-icons">
            <div className="layer" data-depth="0.2">
                <img alt="" src={aperture} className="aperture" />
            </div>
            <div className="layer" data-depth="0.4">
                <img alt="" src={checkbox} className="checkbox" />
            </div>
            <div className="layer" data-depth="0.6">
                <img alt="" src={command} className="command" />
            </div>
            <div className="layer" data-depth="0.2">
                <img alt="" src={cpu} className="cpu" />
            </div>
            <div className="layer" data-depth="0.4">
                <img alt="" src={cube} className="cube" />
            </div>
            <div className="layer" data-depth="0.6">
                <img alt="" src={headphones} className="headphones" />
            </div>
            <div className="layer" data-depth="0.2">
                <img alt="" src={lightningBolt} className="lightning-bolt" />
            </div>
            <div className="layer" data-depth="0.4">
                <img alt="" src={mapPin} className="map-pin" />
            </div>
            <div className="layer" data-depth="0.6">
                <img alt="" src={musicalNote} className="musical-note" />
            </div>
            <div className="layer" data-depth="0.2">
                <img alt="" src={pulse} className="pulse" />
            </div>
        </div>
    );
};
export default ParallaxIcons;
