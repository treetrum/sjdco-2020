import { UIState, UIActions } from "../redux-store-types/ui";

const initialState = {
    mobileMenuOpen: false,
    showLoader: false,
};

const uiReducer = (state: UIState = initialState, action: UIActions) => {
    switch (action.type) {
        case "TOGGLE_MENU":
            return {
                ...state,
                mobileMenuOpen: !state.mobileMenuOpen,
            };
        case "CLOSE_MENU":
            return {
                ...state,
                mobileMenuOpen: false,
            };
        case "START_LOADING":
            return {
                ...state,
                showLoader: true,
            };
        case "STOP_LOADING":
            return {
                ...state,
                showLoader: false,
            };
        default:
            return state;
    }
};

export default uiReducer;
