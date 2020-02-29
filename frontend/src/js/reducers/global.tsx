import { GlobalState, GlobalActions } from "../redux-store-types/global";

const initialState = {
    loading: false,
    error: null,
    data: {},
};

const globalReducer = (
    state: GlobalState = initialState,
    action: GlobalActions
) => {
    switch (action.type) {
        case "FETCH_GLOBAL_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "FETCH_GLOBAL_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.global,
            };
        case "FETCH_GLOBAL_FAIL":
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
