import * as React from "react";
import { useSelector } from "react-redux";

import MenuLink, { MenuLinkProps } from "../atoms/MenuLink";

const NavLinks = () => {
    const menuLinks: MenuLinkProps[] = useSelector(
        (state: any) => state.options.menu_links
    );
    return (
        <>
            {menuLinks.map(({ link }, index: number) => (
                <MenuLink key={index} link={link} />
            ))}
        </>
    );
};

export default NavLinks;
