import React from "react";

import HeroHome from "../components/organisms/HeroHome";
import MyWork from "../components/organisms/MyWork";

const Home = () => {
    return (
        <>
            <HeroHome />
            <MyWork />
        </>
    );
};

Home.preload = ({ passed: { dispatch, state }, location }) => {
    return Promise.resolve();
};

export default Home;
