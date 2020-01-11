import ActionTypes from "../constants/ActionTypes";
import * as options from "./options";
import * as page from "./page";
import * as global from "./global";
import * as projects from "./projects";

const initialFetchAllRequest = () => ({
    type: ActionTypes.INITIAL_FETCH_ALL_REQUEST,
});

const initialFetchAllSuccess = () => ({
    type: ActionTypes.INITIAL_FETCH_ALL_SUCCESS,
});

const initialFetchAllFail = () => ({
    type: ActionTypes.INITIAL_FETCH_ALL_FAIL,
});

export const initialFetchAll = () => dispatch => {
    dispatch(initialFetchAllRequest());
    return Promise.all([
        dispatch(options.fetchOptions()),
        dispatch(global.fetchGlobal()),
        dispatch(projects.fetchProjects()),
        dispatch(page.fetchPage(window.location.pathname)),
    ])
        .then(() => {
            dispatch(initialFetchAllSuccess());
        })
        .catch(error => {
            dispatch(initialFetchAllFail(error));
        });
};
