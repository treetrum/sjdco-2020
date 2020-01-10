import Config from "../constants/Config";

const get = url => {
    return fetch(url).then(res => res.json());
};

export const getPages = () => get(Config.pagesAPI);
export const getOptions = () => get(Config.optionsAPI);

export default {
    getPages,
    getOptions,
};
