import * as React from "react";
import Helmet from "react-helmet";

import usePageData from "../hooks/usePageData";
import HeroPage from "../components/organisms/HeroPage";
import GravityForm from "../components/organisms/GravityForm";

import * as pageActions from "../actions/page";

const Page = () => {
    const [loading, page] = usePageData();
    if (loading || !page) return null;
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
                        <div className="columns md-4">
                            {page.acf.sidebar.form_id ? (
                                <GravityForm
                                    formId={page.acf.sidebar.form_id}
                                />
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Page.preload = ({ passed: { store }, location }) => {
    return store.dispatch(pageActions.fetchPage(location.pathname));
};

export default Page;
