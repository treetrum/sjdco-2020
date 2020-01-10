import ActionTypes from "../constants/ActionTypes";
import * as pages from "./pages";
import * as options from "./options";

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
        dispatch(pages.fetchPages()),
        dispatch(options.fetchOptions()),
    ])
        .then(() => {
            dispatch(initialFetchAllSuccess());
        })
        .catch(error => {
            dispatch(initialFetchAllFail(error));
        });
};