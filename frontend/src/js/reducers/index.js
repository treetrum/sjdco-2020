import { combineReducers } from "redux";

import pages from "./pages";
import initialFetchAll from "./initialFetchAll";
import options from "./options";
import ui from "./ui";

export default combineReducers({
    pages,
    initialFetchAll,
    options,
    ui,
});
