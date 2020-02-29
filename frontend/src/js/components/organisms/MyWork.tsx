import * as React from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import actions from "../../actions/index";

import ProjectSlideover from "./ProjectSlideover";
import WorkTile from "../molecules/WorkTile";
import { useTypedSelector } from "../../Store";

const MyWork = () => {
    const projects = useTypedSelector(state => state.projects.projects);
    const dispatch = useDispatch();

    React.useEffect(() => {
        if (projects.length === 0) {
            dispatch(actions.fetchProjects());
        }
    }, [projects]);

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
                            <ProjectSlideover projectSlug={project.slug} />
                        </CSSTransition>
                    )}
                </Route>
            ))}
        </>
    );
};

export default MyWork;
