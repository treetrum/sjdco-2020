import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../actions";

const Page = props => {
    const showLoader = useSelector(state => state.ui.showLoader);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.fetchPage(props.location.path));
    }, []);
    if (showLoader) {
        return null;
    }

    return (
        <>
            <h1>Some page</h1>
        </>
    );
};

export default Page;
