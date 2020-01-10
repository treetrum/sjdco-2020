import ActionTypes from "../constants/ActionTypes";

const initialState = {
    loading: false,
    error: null,
    pages: [],
};

const pagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_PAGES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ActionTypes.FETCH_PAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                pages: action.pages,
            };
        case ActionTypes.FETCH_PAGES_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default pagesReducer;
