import * as React from "react";
import styled from "styled-components";

import * as Colors from "../../constants/Colors";

export interface LinkProps {
    [key: string]: any;
    icon: string;
    link: string;
}

const ListItem = styled.li`
    display: block;

    a {
        display: block;
        padding: 1rem;
        color: ${Colors.white};
        font-size: 1.5rem;
        opacity: 0.5;

        &:hover {
            opacity: 1;
        }
    }
`;

const SocialLink: React.FC<LinkProps> = ({ icon, link, ...props }) => {
    return (
        <ListItem {...props}>
            <a
                aria-label={icon}
                href={link}
                target="_blank"
                rel="noreferrer noopener"
            >
                <i className={`icon icon-${icon}`} />
            </a>
        </ListItem>
    );
};

export default SocialLink;
