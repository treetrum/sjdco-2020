import ActionTypes from "../constants/ActionTypes";
import * as options from "./options";
import * as global from "./global";

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
    ])
        .then(() => {
            dispatch(initialFetchAllSuccess());
        })
        .catch(error => {
            dispatch(initialFetchAllFail(error));
        });
};
