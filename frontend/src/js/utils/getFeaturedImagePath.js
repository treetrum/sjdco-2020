const getFeaturedImagePath = post => {
    return post._embedded["wp:featuredmedia"][0].source_url;
};

export default getFeaturedImagePath;
