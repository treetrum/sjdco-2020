import _ from "lodash";
import API from "../api";
import ActionTypes from "../constants/ActionTypes";

import * as ui from "./ui";

// Creates a new promise that automatically resolves after some timeout:
const delay = time =>
    new Promise(resolve => {
        setTimeout(resolve, time);
    });

// Throttle this promise to resolve no faster than the specified time:
Promise.prototype.takeAtLeast = function(time) {
    return Promise.all([this, delay(time)]).then(([result]) => result);
};

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

    dispatch(ui.startLoading());
    if (page && !_.isEmpty(page)) {
        return Promise.resolve()
            .takeAtLeast(750)
            .then(() => {
                dispatch(fetchPageSuccess(page, path));
                dispatch(ui.stopLoading());
            });
    }
    dispatch(fetchPageRequest());
    const pathToFetch = path === "/" ? "/home" : path;
    return API.getPage(`${pathToFetch}`)
        .takeAtLeast(750)
        .then(page => {
            dispatch(fetchPageSuccess(page, path));
            return page;
        })
        .catch(err => {
            dispatch(fetchPageFail(err));
            throw err;
        })
        .finally(() => {
            dispatch(ui.stopLoading());
        });
};
