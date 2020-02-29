import { OptionsActions } from "../redux-store-types/options";

const initialState = {
    loading: false,
    error: null,
    menu_links: [],
};

const optionsReducer = (state = initialState, action: OptionsActions) => {
    switch (action.type) {
        case "FETCH_OPTIONS_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "FETCH_OPTIONS_SUCCESS":
            return {
                ...state,
                loading: false,
                ...action.options,
            };
        case "FETCH_OPTIONS_FAIL":
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
