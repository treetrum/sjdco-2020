import React from "react";
import { useSelector } from "react-redux";

import WorkTile from "../molecules/WorkTile";

const MyWork = () => {
    const projects = useSelector(state => state.projects.projects);
    return (
        <section className="my-work" id="my-work">
            <div className="container">
                <div className="my-work__intro">
                    <h3 className="section-title">My Work</h3>
                </div>
                <div className="my-work__projects">
                    {projects.map(project => (
                        <WorkTile project={project} key={project.id} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyWork;
