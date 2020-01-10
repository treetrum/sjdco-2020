import API from "../api";
import ActionTypes from "../constants/ActionTypes";

import * as ui from "./ui";

// Creates a new promise that automatically resolves after some timeout:
Promise.delay = function(time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time);
    });
};

// Throttle this promise to resolve no faster than the specified time:
Promise.prototype.takeAtLeast = function(time) {
    return new Promise((resolve, reject) => {
        Promise.all([this, Promise.delay(time)]).then(([result]) => {
            resolve(result);
        }, reject);
    });
};

const fetchPageRequest = () => ({
    type: ActionTypes.FETCH_PAGE_REQUEST,
});

const fetchPageSuccess = page => ({
    type: ActionTypes.FETCH_PAGE_SUCCESS,
    page,
});

const fetchPageFail = error => ({
    type: ActionTypes.FETCH_PAGE_FAIL,
    error,
});

export const fetchPage = path => dispatch => {
    dispatch(ui.startLoading());
    dispatch(fetchPageRequest());
    return API.getPage(path)
        .takeAtLeast(1000)
        .then(page => {
            dispatch(fetchPageSuccess(page));
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
