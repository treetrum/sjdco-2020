import ActionTypes from "../constants/ActionTypes";
import api from "../api";

const fetchGlobalRequest = () => ({
    type: ActionTypes.FETCH_GLOBAL_REQUEST,
});

const fetchGlobalSuccess = global => ({
    type: ActionTypes.FETCH_GLOBAL_SUCCESS,
    global,
});

const fetchGlobalFail = error => ({
    type: ActionTypes.FETCH_GLOBAL_FAIL,
    error,
});

export const fetchGlobal = () => dispatch => {
    dispatch(fetchGlobalRequest());
    api.getGlobals()
        .then(({ name, description, url, home }) => {
            dispatch(fetchGlobalSuccess({ name, description, url, home }));
        })
        .catch(error => {
            dispatch(fetchGlobalFail(error));
        });
};
