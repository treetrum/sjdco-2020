import React from "react";
import Helmet from "react-helmet";
import _ from "lodash";

import { useSelector } from "react-redux";
import usePageData from "../hooks/usePageData";
import HeroPage from "../components/organisms/HeroPage";

import getFeaturedImagePath from "../utils/getFeaturedImagePath";

const Project = props => {
    const [loading, page] = usePageData(props.location.pathname);
    const baseUrl = useSelector(state => state.global.home);
    if (loading || _.isEmpty(page)) return null;
    const galleryImages = _.get(page, ["acf", "gallery_images"], []) || [];
    return (
        <>
            {page.title ? (
                <Helmet>
                    <title>{page.title.rendered}</title>{" "}
                </Helmet>
            ) : null}
            <HeroPage page={page} />
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="columns md-4">
                            <div className="page-content__project-content rte">
                                <h3 className="page-content__title">
                                    About the project
                                </h3>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: page.content.rendered,
                                    }}
                                />
                            </div>
                        </div>
                        <div className="columns md-8">
                            {getFeaturedImagePath(page) ? (
                                <div className="featured-project-image">
                                    <img
                                        src={
                                            baseUrl + getFeaturedImagePath(page)
                                        }
                                        alt=""
                                    />
                                </div>
                            ) : null}
                            <div className="project-gallery-images">
                                {galleryImages.map(({ image }, index) => (
                                    <img
                                        className="project-gallery-image"
                                        key={index}
                                        src={baseUrl + image.url}
                                        alt={image.alt}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project;
