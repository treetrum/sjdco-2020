import React from "react";
import { useSelector } from "react-redux";

import MenuLink from "../atoms/MenuLink";

const NavLinks = () => {
    const menuLinks = useSelector(state => state.options.menu_links);
    return (
        <>
            {menuLinks.map(({ link }, index) => (
                <MenuLink key={index} link={link} />
            ))}
            ;
        </>
    );
};

export default NavLinks;
