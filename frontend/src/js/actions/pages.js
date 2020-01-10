import API from "../api";
import ActionTypes from "../constants/ActionTypes";

const fetchPagesRequest = () => ({
    type: ActionTypes.FETCH_PAGES_REQUEST,
});

const fetchPagesSuccess = pages => ({
    type: ActionTypes.FETCH_PAGES_SUCCESS,
    pages,
});

const fetchPagesFail = error => ({
    type: ActionTypes.FETCH_PAGES_FAIL,
    error,
});

export const fetchPages = () => dispatch => {
    dispatch(fetchPagesRequest());
    return API.getPages()
        .then(pages => {
            dispatch(fetchPagesSuccess(pages));
            return pages;
        })
        .catch(err => {
            dispatch(fetchPagesFail(err));
            throw err;
        });
};
