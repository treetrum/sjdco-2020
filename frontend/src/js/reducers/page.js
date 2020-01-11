import ActionTypes from "../constants/ActionTypes";

const initialState = {
    loading: false,
    error: null,
    page: {},
};

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_PAGE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ActionTypes.FETCH_PAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                [action.path]: action.page,
            };
        case ActionTypes.FETCH_PAGE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default pageReducer;
