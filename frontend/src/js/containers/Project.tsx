import * as React from "react";
import { Helmet } from "react-helmet";

import { useTypedSelector } from "../Store";
import usePageData from "../hooks/usePageData";
import HeroPage from "../components/organisms/HeroPage";

import getFeaturedImagePath from "../utils/getFeaturedImagePath";

const Project = () => {
    const [loading, page] = usePageData();
    const baseUrl = useTypedSelector(state => state.global.data.home);
    if (loading || !page) return null;
    const galleryImages = page.acf.gallery_images || [];
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
