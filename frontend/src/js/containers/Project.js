import React from "react";
import Helmet from "react-helmet";
import _ from "lodash";
import usePageData from "../hooks/usePageData";

const Project = props => {
    const [loading, page] = usePageData(props.location.pathname);
    if (loading || _.isEmpty(page)) return null;
    return (
        <>
            {page.title ? (
                <Helmet>
                    <title>{page.title.rendered}</title>{" "}
                </Helmet>
            ) : null}
            <div className="container" style={{ marginTop: 200 }}>
                <h1>{page.title.rendered}</h1>
                <div
                    dangerouslySetInnerHTML={{ __html: page.content.rendered }}
                />
            </div>
        </>
    );
};

export default Project;
