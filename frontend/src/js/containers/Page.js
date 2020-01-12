import React from "react";
import Helmet from "react-helmet";
import _ from "lodash";

import usePageData from "../hooks/usePageData";
import HeroPage from "../components/organisms/HeroPage";

const Page = props => {
    const [loading, page] = usePageData(props.location.pathname);
    if (loading || _.isEmpty(page)) return null;
    return (
        <>
            {page.title ? (
                <Helmet>
                    <title>{page.title.rendered}</title>
                </Helmet>
            ) : null}
            <HeroPage page={page} />
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="columns md-7">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: page.content.rendered,
                                }}
                            />
                        </div>
                        {/* <div className="columns md-4">
                            <p>CONTACT FORM HERE</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
