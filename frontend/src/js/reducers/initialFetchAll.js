import ActionTypes from "../constants/ActionTypes";

const initialState = {
    loading: false,
    error: null,
};

const initialFetchAllReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.INITIAL_FETCH_ALL_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ActionTypes.INITIAL_FETCH_ALL_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case ActionTypes.INITIAL_FETCH_ALL_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default initialFetchAllReducer;
