import * as React from "react";

import useParallax from "../../hooks/useParallax";

const aperture = require("../../../images/icons/aperture.svg");
const checkbox = require("../../../images/icons/checkbox.svg");
const command = require("../../../images/icons/command.svg");
const cpu = require("../../../images/icons/cpu.svg");
const cube = require("../../../images/icons/cube.svg");
const headphones = require("../../../images/icons/headphones.svg");
const lightningBolt = require("../../../images/icons/lightning-bolt.svg");
const mapPin = require("../../../images/icons/map-pin.svg");
const musicalNote = require("../../../images/icons/musical-note.svg");
const pulse = require("../../../images/icons/pulse.svg");

const { useRef } = React;

const ParallaxIcons = () => {
    const iconsRef = useRef<HTMLDivElement>(null);
    useParallax(iconsRef);

    return (
        <div className="parallax-icons" ref={iconsRef}>
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
