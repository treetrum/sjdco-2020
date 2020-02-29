import * as React from "react";
import { Link } from "react-router-dom";

import { Project } from "../../redux-store-types/projects";
import getFeaturedImagePath from "../../utils/getFeaturedImagePath";
import { useTypedSelector } from "../../Store";

interface WorkTileProps {
    project: Project;
}

const WorkTile: React.FC<WorkTileProps> = ({ project }) => {
    const baseUrl = useTypedSelector((state: any) => state.global.data.home);
    const featuredImage = getFeaturedImagePath(project);
    return (
        <Link to={project.link} className="work-tile" key={project.id}>
            <div className="work-tile__thumb">
                {featuredImage ? (
                    <div
                        className="work-tile__thumb__inner"
                        style={{
                            backgroundImage: `url(${baseUrl + featuredImage})`,
                        }}
                    />
                ) : null}
            </div>
            <div className="work-tile__content">
                <h4 className="work-tile__title">{project.title.rendered}</h4>
                <p className="work-tile__subtitle">{project.acf.subtitle}</p>
            </div>
        </Link>
    );
};

export default WorkTile;
