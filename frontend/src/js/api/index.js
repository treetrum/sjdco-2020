import Config from "../constants/Config";

const get = url => {
    return fetch(url).then(res => res.json());
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

export default {
    getPage,
    getOptions,
    getGlobals,
};
