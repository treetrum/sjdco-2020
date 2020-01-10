import ActionTypes from "../constants/ActionTypes";

const initialState = {
    mobileMenuOpen: false,
};

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_MENU:
            return {
                ...state,
                mobileMenuOpen: !state.mobileMenuOpen,
            };
        default:
            return state;
    }
};

export default uiReducer;
