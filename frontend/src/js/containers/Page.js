import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Helmet from "react-helmet";
import actions from "../actions";

const Page = props => {
    const showLoader = useSelector(state => state.ui.showLoader);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(`Fetching with`, props);
        dispatch(actions.fetchPage(props.location.pathname));
    }, [props.location]);
    const page = useSelector(state => state.page.page) || {};
    if (showLoader) {
        return null;
    }

    return (
        <>
            {page.title ? (
                <Helmet>
                    <title>{page.title.rendered}</title>{" "}
                </Helmet>
            ) : null}
            <h1>Some page</h1>
        </>
    );
};

export default Page;
