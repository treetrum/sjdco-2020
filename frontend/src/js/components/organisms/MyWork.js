import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import ProjectSlideover from "./ProjectSlideover";
import WorkTile from "../molecules/WorkTile";

const MyWork = () => {
    const projects = useSelector(state => state.projects.projects);
    return (
        <>
            <section className="my-work" id="my-work">
                <div className="container">
                    <div className="my-work__intro">
                        <h3 className="section-title">My Work</h3>
                    </div>
                    <div className="my-work__projects">
                        {projects.map(project => (
                            <div
                                key={project.id}
                                className="my-work__projects__single"
                            >
                                <WorkTile project={project} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {projects.map(project => (
                <Route
                    key={project.slug}
                    exact
                    path={`/project/${project.slug}`}
                >
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

export default MyWork;
