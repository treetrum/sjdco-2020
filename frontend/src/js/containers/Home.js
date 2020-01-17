import React from "react";
import { Route, Link } from "react-router-dom";

import { CSSTransition } from "react-transition-group";

import { useSelector } from "react-redux";
import HeroHome from "../components/organisms/HeroHome";
import MyWork from "../components/organisms/MyWork";
import Project from "./Project";

import usePageData from "../hooks/usePageData";
import getFeaturedImagePath from "../utils/getFeaturedImagePath";

import ProjectSlideover from "../components/organisms/ProjectSlideover";

const Home = props => {
    const [loading, page] = usePageData(props.location.pathname);
    const projects = useSelector(state => state.projects.projects);
    if (loading) {
        return null;
    }

    return (
        <>
            <HeroHome />
            <MyWork />
            {projects.map(project => (
                <Route exact path={`/project/${project.slug}`}>
                    {({ match }) => (
                        <CSSTransition
                            in={match !== null}
                            timeout={500}
                            classNames="slideover"
                            unmountOnExit
                        >
                            <ProjectSlideover
                                match={match}
                                projectSlug={project.slug}
                            />
                        </CSSTransition>
                    )}
                </Route>
            ))}
        </>
    );
};

export default Home;
