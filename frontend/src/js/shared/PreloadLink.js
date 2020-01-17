import React from "react";
import { useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import actions from "../actions";

const PreloadLink = ({ staticContext, history, location, match, ...props }) => {
    const dispatch = useDispatch();
    const handleLinkClick = e => {
        console.log(props);
        e.preventDefault();

        if (window.location.pathname === props.to) {
            return;
        }

        dispatch(actions.closeMenu());
        dispatch(actions.fetchPage(props.to)).then(() => {
            requestAnimationFrame(() => {
                window.scrollTo(0, 0);
                history.push(props.to);
            });
        });
    };
    return <Link {...props} onClick={handleLinkClick} />;
};

export default withRouter(PreloadLink);
