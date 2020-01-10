import ActionTypes from "../constants/ActionTypes";

const initialState = {
    loading: false,
    error: null,
    menu_links: [],
};

const optionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_OPTIONS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ActionTypes.FETCH_OPTIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                ...action.options,
            };
        case ActionTypes.FETCH_OPTIONS_FAILL:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default optionsReducer;
