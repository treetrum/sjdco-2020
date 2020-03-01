const BASE_URL =
    process.env.NODE_ENV === "production"
        ? "https://wp.sjd.co/wp-json"
        : "https://wp.sjd.co/wp-json";

export default {
    globalAPI: `${BASE_URL}`,
    projectsAPI: `${BASE_URL}/wp/v2/projects?_embed&order=asc&orderby=menu_order`,
    pageAPI: `${BASE_URL}/sjdco/v1/post-by-path`,
    optionsAPI: `${BASE_URL}/acf/v3/options/sjdco-options`,
    formEntriesAPI: `${BASE_URL}/gf/v2/entries`,
    formDataAPI: `${BASE_URL}/gf/v2/forms`,
    gravityAuth: {
        user: "ck_558afd1f565d5daf5ed6977917baf24c11ba0aa0",
        pass: "cs_0f09791ac0f7ad7c66c524bce12e0d6512cbeccf",
    },
    socialLinks: [
        {
            icon: "github",
            link: "https://github.com/treetrum",
        },
        {
            icon: "twitter",
            link: "https://twitter.com/samjdavis",
        },
        {
            icon: "instagram",
            link: "https://www.instagram.com/samjdavis",
        },
        {
            icon: "linkedin",
            link: "https://www.linkedin.com/in/sam-davis-174aa7163",
        },
    ],
};
