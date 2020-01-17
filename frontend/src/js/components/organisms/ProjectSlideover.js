import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

import Helmet from "react-helmet";
import getFeaturedImagePath from "../../utils/getFeaturedImagePath";

const ProjectSlideover = ({ props, projectSlug }) => {
    console.log({ props });
    const history = useHistory();
    const project = useSelector(state =>
        state.projects.projects.find(p => p.slug === projectSlug)
    );
    const baseUrl = useSelector(state => state.global.home);
    if (!project) {
        return null;
    }
    const featuredImage = baseUrl + getFeaturedImagePath(project);
    return (
        <div className="project-slideover">
            <Helmet>
                <title>{project.title.rendered}</title>
            </Helmet>
            <button
                type="button"
                className="project-slideover__overlay"
                onClick={() => {
                    history.push("/");
                }}
            />
            <div className="project-slideover__main">
                <Link to="/" className="project-slideover__back">
                    Back
                </Link>
                <div
                    className="project-slideover__thumb"
                    style={{ backgroundImage: `url(${featuredImage})` }}
                />
                <div className="project-slideover__content">
                    <h3 className="project-slideover__title">
                        {project.title.rendered}
                    </h3>
                    <div className="project-slideover__subtitle">
                        {project.acf.subtitle}
                    </div>
                    <div
                        className="rte"
                        dangerouslySetInnerHTML={{
                            __html: project.content.rendered,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectSlideover;
