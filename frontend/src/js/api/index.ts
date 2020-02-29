import Config from "../constants/Config";

export const get = async (
    url: RequestInfo,
    config: RequestInit = {}
): Promise<any> => {
    const res = await fetch(url, config);
    return await res.json();
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
