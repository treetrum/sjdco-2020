import * as React from "react";
import { useDispatch } from "react-redux";
import { Link, LinkProps } from "react-router-dom";

import actions from "../../actions/index";

const PreloadLink: React.FC<LinkProps> = props => {
    const dispatch = useDispatch();
    const handleLinkClick = () => {
        dispatch(actions.closeMenu());
    };
    return (
        <Link
            {...props}
            onClick={event => {
                if (props.onClick) {
                    props.onClick(event);
                }
                handleLinkClick();
            }}
        />
    );
};

export default PreloadLink;
