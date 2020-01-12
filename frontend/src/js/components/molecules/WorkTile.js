import React from "react";
import { useSelector } from "react-redux";
import PreloadLink from "../../shared/PreloadLink";

import getFeaturedImagePath from "../../utils/getFeaturedImagePath";

const WorkTile = ({ project }) => {
    const baseUrl = useSelector(state => state.global.home);
    return (
        <div className="work-tile" key={project.id}>
            <div
                className="work-tile__thumb"
                style={{
                    backgroundImage: `url(${baseUrl +
                        getFeaturedImagePath(project)})`,
                }}
            />
            <div className="work-tile__content">
                <h4 className="work-tile__title">{project.title.rendered}</h4>
                <p className="work-tile__subtitle">{project.acf.subtitle}</p>
                <p className="work-tile__buttons">
                    <PreloadLink to={project.link} className="button-green">
                        View Project
                    </PreloadLink>
                </p>
            </div>
        </div>
    );
};

export default WorkTile;
