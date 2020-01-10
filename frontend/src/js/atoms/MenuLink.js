import React from "react";
import PropTypes from "prop-types";

const MenuLink = ({ link }) => {
    const renderLink = l => {
        switch (l.type) {
            case "standard":
                return <a href={l.page.url}>{l.page.title}</a>;
            case "custom":
                return (
                    <a
                        href={l.custom_link.link}
                        target={l.custom_link.new_tab ? "_blank" : "_self"}
                        rel={
                            l.custom_link.new_tab ? "noreferrer noopener" : null
                        }
                    >
                        {l.custom_link.title}
                    </a>
                );
            default:
                return <a href="DEFAULT">DEFAULT</a>;
        }
    };

    return <li>{renderLink(link)}</li>;
};

MenuLink.propTypes = {
    link: PropTypes.shape().isRequired,
};

export default MenuLink;