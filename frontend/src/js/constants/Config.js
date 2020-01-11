const BASE_URL = "//sjdco.test/wp-json";

export default {
    globalAPI: `${BASE_URL}`,
    projectsAPI: `${BASE_URL}/wp/v2/projects?_embed`,
    pageAPI: `${BASE_URL}/sjdco/v1/post-by-path`,
    optionsAPI: `${BASE_URL}/acf/v3/options/sjdco-options`,
};
