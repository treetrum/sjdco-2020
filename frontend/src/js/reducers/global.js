import ActionTypes from "../constants/ActionTypes";

const initialState = {
    loading: false,
    error: null,
};

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_GLOBAL_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ActionTypes.FETCH_GLOBAL_SUCCESS:
            return {
                ...state,
                loading: false,
                ...action.global,
            };
        case ActionTypes.FETCH_GLOBAL_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default globalReducer;
