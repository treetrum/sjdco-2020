import API from "../api";

import { PageActionTypes, PageType } from "../redux-store-types/page";
import { ThunkResult } from "../redux-store-types/index";
import takeAtLeast from "../utils/takeAtLeast";

const fetchPageRequest = (): PageActionTypes => ({
    type: "FETCH_PAGE_REQUEST",
});

const fetchPageSuccess = (page: PageType, path: string): PageActionTypes => ({
    type: "FETCH_PAGE_SUCCESS",
    page,
    path,
});

const fetchPageFail = (error: any): PageActionTypes => ({
    type: "FETCH_PAGE_FAIL",
    error,
});

export const fetchPage = (path: string = "/"): ThunkResult<any> => (
    dispatch,
    getState
) => {
    const page = getState().page.pages[path];

    if (page) {
        return Promise.resolve().then(() => {
            dispatch(fetchPageSuccess(page, path));
        });
    }
    dispatch(fetchPageRequest());
    const pathToFetch = path === "/" ? "/home" : path;
    return takeAtLeast(
        API.getPage(`${pathToFetch}`)
            .then(newPage => {
                dispatch(fetchPageSuccess(newPage, path));
                return newPage;
            })
            .catch(err => {
                dispatch(fetchPageFail(err));
                throw err;
            }),
        250
    );
};
