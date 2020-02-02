import React from "react";

import HeroHome from "../components/organisms/HeroHome";
import MyWork from "../components/organisms/MyWork";
import Actions from "../actions";

const Home = () => {
    return (
        <>
            <HeroHome />
            <MyWork />
        </>
    );
};

Home.preload = ({ passed: { dispatch, state }, location }) => {
    if (state.projects.projects.length > 0 && location.pathname !== "/") {
        return null;
    }
    return Promise.all([
        dispatch(Actions.fetchProjects()),
        dispatch(Actions.fetchPage("/")),
    ]);
};

export default Home;
