import _ from "lodash";
import API from "../api";
import ActionTypes from "../constants/ActionTypes";

import * as ui from "./ui";

const fetchPageRequest = () => ({
    type: ActionTypes.FETCH_PAGE_REQUEST,
});

const fetchPageSuccess = (page, path) => ({
    type: ActionTypes.FETCH_PAGE_SUCCESS,
    page,
    path,
});

const fetchPageFail = error => ({
    type: ActionTypes.FETCH_PAGE_FAIL,
    error,
});

export const fetchPage = (path = "/") => (dispatch, getState) => {
    const page = getState().page[path];

    if (page && !_.isEmpty(page)) {
        return Promise.resolve().then(() => {
            dispatch(fetchPageSuccess(page, path));
        });
    }
    dispatch(fetchPageRequest());
    const pathToFetch = path === "/" ? "/home" : path;
    return API.getPage(`${pathToFetch}`)
        .takeAtLeast(500)
        .then(newPage => {
            dispatch(fetchPageSuccess(newPage, path));
            return newPage;
        })
        .catch(err => {
            dispatch(fetchPageFail(err));
            throw err;
        });
};
