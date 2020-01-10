import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import actions from "./actions";

import Home from "./containers/Home";

const App = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.initialFetchAll.loading);

    useEffect(() => {
        dispatch(actions.initialFetchAll());
    }, []);

    return <div>{loading ? "Loading" : <Home />}</div>;
};

export default App;
