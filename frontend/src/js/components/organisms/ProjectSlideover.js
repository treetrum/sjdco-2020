import React, { useEffect } from "react";
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
    const handleKeyDown = event => {
        if (event.key === "Escape") {
            history.push("/");
        }
    };
    const handleOverlayClick = () => {
        history.push("/");
    };
    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
    }, []);
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
                onClick={handleOverlayClick}
            />
            <Link to="/" className="project-slideover__back">
                <i className="icon icon-arrow-left" />
            </Link>
            <div className="project-slideover__main">
                <div
                    className="project-slideover__thumb"
                    style={{ backgroundImage: `url(${featuredImage})` }}
                />
                <div className="project-slideover__content">
                    <h3 className="project-slideover__title">
                        {project.title.rendered}
                    </h3>
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
