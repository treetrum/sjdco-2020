import { combineReducers } from "redux";

import page from "./page";
import initialFetchAll from "./initialFetchAll";
import options from "./options";
import ui from "./ui";
import global from "./global";

export default combineReducers({
    page,
    initialFetchAll,
    options,
    ui,
    global,
});
