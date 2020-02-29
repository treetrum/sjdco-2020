import * as React from "react";
import * as moment from "moment";

const SDLogo = require("../../../images/logos/sd-logo.svg");
import PreloadLink from "../atoms/PreloadLink";

const socialLinks = [
    {
        icon: "github",
        link: "https://github.com/treetrum",
    },
    {
        icon: "twitter",
        link: "https://twitter.com/samjdavis",
    },
    {
        icon: "instagram",
        link: "https://www.instagram.com/samjdavis",
    },
    {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/sam-davis-174aa7163",
    },
];

const Footer = () => {
    return (
        <>
            <footer className="primary">
                <div className="container">
                    <div className="logo">
                        <PreloadLink to="/">
                            <img src={SDLogo} alt="Sam Davis Logo" />
                        </PreloadLink>
                    </div>
                    <ul className="social-links">
                        {socialLinks.map(link => (
                            <li key={link.link}>
                                <a
                                    aria-label={link.icon}
                                    href={link.link}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <i className={`icon icon-${link.icon}`} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </footer>
            <footer className="secondary">
                <div className="container">
                    <p>
                        Made with <i className="icon icon-heart" /> by Sam Davis
                        &copy; {moment().format("Y")}
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
