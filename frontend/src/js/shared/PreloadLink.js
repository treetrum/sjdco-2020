import React from "react";
import { useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import actions from "../actions";

const PreloadLink = ({ staticContext, history, ...props }) => {
    const dispatch = useDispatch();
    const handleLinkClick = e => {
        console.log(props);
        e.preventDefault();
        dispatch(actions.fetchPage(props.to)).then(() => {
            history.push(props.to);
        });
    };
    return <Link {...props} onClick={handleLinkClick} />;
};

export default withRouter(PreloadLink);
