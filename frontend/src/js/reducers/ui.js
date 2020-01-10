import ActionTypes from "../constants/ActionTypes";

const initialState = {
    mobileMenuOpen: false,
    showLoader: false,
};

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_MENU:
            return {
                ...state,
                mobileMenuOpen: !state.mobileMenuOpen,
            };
        case ActionTypes.START_LOADING:
            return {
                ...state,
                showLoader: true,
            };
        case ActionTypes.STOP_LOADING:
            return {
                ...state,
                showLoader: false,
            };
        default:
            return state;
    }
};

export default uiReducer;
