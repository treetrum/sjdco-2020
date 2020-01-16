import _ from "lodash";

const getFeaturedImagePath = post => {
    return _.get(post, '_embedded["wp:featuredmedia"][0].source_url', "") || "";

    // return post._embedded["wp:featuredmedia"][0].source_url;
};

export default getFeaturedImagePath;
