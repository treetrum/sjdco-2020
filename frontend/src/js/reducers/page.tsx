import { PageStateType, PageActionTypes } from "../redux-store-types/page";

const initialState: PageStateType = {
    loading: false,
    error: null,
    pages: {},
};

function pageReducer(
    state: PageStateType = initialState,
    action: PageActionTypes
): PageStateType {
    switch (action.type) {
        case "FETCH_PAGE_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "FETCH_PAGE_SUCCESS":
            return {
                ...state,
                loading: false,
                pages: {
                    ...state.pages,
                    [action.path]: action.page,
                },
            };
        case "FETCH_PAGE_FAIL":
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
}

export default pageReducer;
