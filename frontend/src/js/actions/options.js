import ActionTypes from "../constants/ActionTypes";
import API from "../api";

const fetchOptionsRequest = () => ({
    type: ActionTypes.FETCH_OPTIONS_REQUEST,
});

const fetchOptionsSuccess = options => ({
    type: ActionTypes.FETCH_OPTIONS_SUCCESS,
    options,
});

const fetchOptionsFail = error => ({
    type: ActionTypes.FETCH_OPTIONS_FAIL,
    error,
});

export const fetchOptions = () => dispatch => {
    dispatch(fetchOptionsRequest());
    return API.getOptions()
        .then(({ acf }) => {
            dispatch(fetchOptionsSuccess(acf));
            return acf;
        })
        .catch(error => {
            dispatch(fetchOptionsFail(error));
            throw error;
        });
};
