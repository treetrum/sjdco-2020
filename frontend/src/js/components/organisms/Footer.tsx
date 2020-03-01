import * as React from "react";
import { rgba } from "polished";
import styled from "styled-components";

import PreloadLink from "../atoms/PreloadLink";
import Container from "../atoms/Container";
import * as Colors from "../../constants/Colors";
import SocialLinks from "../molecules/SocialLinks";
import Config from "../../constants/Config";
import SmallPrint from "../atoms/SmallPrint";

const SDLogo = require("../../../images/logos/sd-logo.svg");

const FooterPrimary = styled.footer`
    padding: 48px 0 16px;
    background-color: ${Colors.background};
    text-align: center;
    margin-top: auto;
`;

const FooterSecondary = styled.footer`
    padding: 2rem 0;
    background-color: ${Colors.background};
    border-top: 1px solid ${rgba("white", 0.1)};
    text-align: center;
`;

const Logo = styled.div`
    height: 100px;
    margin-bottom: 24px;

    img {
        height: 100%;
        display: block;
        margin: 0 auto;
    }
`;

const Footer = () => {
    const year = React.useRef(new Date().getFullYear()).current;
    return (
        <>
            <FooterPrimary>
                <Container>
                    <Logo>
                        <PreloadLink to="/">
                            <img src={SDLogo} alt="Sam Davis Logo" />
                        </PreloadLink>
                    </Logo>
                    <SocialLinks links={Config.socialLinks} />
                </Container>
            </FooterPrimary>
            <FooterSecondary>
                <Container>
                    <SmallPrint>
                        Made with <i className="icon icon-heart" /> by Sam Davis
                        &copy; {year}
                    </SmallPrint>
                </Container>
            </FooterSecondary>
        </>
    );
};

export default Footer;
