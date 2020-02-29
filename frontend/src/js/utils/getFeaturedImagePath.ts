const getFeaturedImagePath = (post: any) => {
    const img = post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
    return img ? img : "";
};

export default getFeaturedImagePath;
