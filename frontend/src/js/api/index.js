import Config from "../constants/Config";

export const get = (url = "", config = {}) => {
    return fetch(url, config).then(res => res.json());
};

export const getPage = (pagePath = "/home") => {
    return get(Config.pageAPI + pagePath);
};

export const getOptions = () => {
    return get(Config.optionsAPI);
};

export const getGlobals = () => {
    return get(Config.globalAPI);
};

export const getProjects = () => {
    return get(Config.projectsAPI);
};

export default {
    getPage,
    getOptions,
    getGlobals,
    getProjects,
};
