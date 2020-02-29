// Core objects
// ------------

export interface PageType {
    id: number;
    title: { rendered: string };
    acf: any;
    [key: string]: any;
}

// Reducer state
// -------------

export interface PageStateType {
    loading: boolean;
    error: null | any;
    pages: {
        [key: string]: null | undefined | PageType;
    };
}

// Action Creators
// ---------------

interface FetchPageRequestAction {
    type: "FETCH_PAGE_REQUEST";
}

interface FetchPageSuccessAction {
    type: "FETCH_PAGE_SUCCESS";
    page: PageType;
    path: string;
}

interface FetchPageFailAction {
    type: "FETCH_PAGE_FAIL";
    error: any;
}

export type PageActionTypes =
    | FetchPageRequestAction
    | FetchPageSuccessAction
    | FetchPageFailAction;
