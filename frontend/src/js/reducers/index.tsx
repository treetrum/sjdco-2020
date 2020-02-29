import { combineReducers } from "redux";

import page from "./page";
import initialFetchAll from "./initialFetchAll";
import options from "./options";
import ui from "./ui";
import global from "./global";
import projects from "./projects";

const rootReducer = combineReducers({
    page,
    initialFetchAll,
    options,
    ui,
    global,
    projects,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
