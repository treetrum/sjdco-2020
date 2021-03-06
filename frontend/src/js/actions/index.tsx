import * as initialFetchAll from "./initialFetchAll";
import * as page from "./page";
import * as options from "./options";
import * as ui from "./ui";
import * as global from "./global";
import * as projects from "./projects";

export default {
    ...initialFetchAll,
    ...page,
    ...options,
    ...ui,
    ...global,
    ...projects,
};
