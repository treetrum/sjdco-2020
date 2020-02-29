import { IFAStateType, IFAActions } from "../redux-store-types/initialFetchAll";

const initialState: IFAStateType = {
    loading: false,
    error: null,
};

const initialFetchAllReducer = (
    state: IFAStateType = initialState,
    action: IFAActions
) => {
    switch (action.type) {
        case "INITIAL_FETCH_ALL_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "INITIAL_FETCH_ALL_SUCCESS":
            return {
                ...state,
                loading: false,
            };
        case "INITIAL_FETCH_ALL_FAIL":
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export default initialFetchAllReducer;
