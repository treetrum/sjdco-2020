import React from "react";

import HeroHome from "../components/organisms/HeroHome";
import MyWork from "../components/organisms/MyWork";

import usePageData from "../hooks/usePageData";

const Home = props => {
    const [loading, page] = usePageData(props.location.pathname);
    if (loading) {
        return null;
    }

    return (
        <>
            <HeroHome />
            <MyWork />
        </>
    );
};

export default Home;
