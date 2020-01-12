import React from "react";
import { useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import actions from "../actions";

const PreloadLink = ({ staticContext, history, ...props }) => {
    const dispatch = useDispatch();
    const handleLinkClick = e => {
        console.log(props);
        e.preventDefault();

        if (window.location.pathname === props.to) {
            return;
        }

        dispatch(actions.fetchPage(props.to)).then(() => {
            window.scrollTo(0, 0);
            requestAnimationFrame(() => {
                history.push(props.to);
            });
        });
    };
    return <Link {...props} onClick={handleLinkClick} />;
};

export default withRouter(PreloadLink);
