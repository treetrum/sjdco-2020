import ActionTypes from "../constants/ActionTypes";

export const toggleMenu = () => ({
    type: ActionTypes.TOGGLE_MENU,
});

export const closeMenu = () => ({
    type: ActionTypes.CLOSE_MENU,
});

export const startLoading = () => ({
    type: ActionTypes.START_LOADING,
});

export const stopLoading = () => ({
    type: ActionTypes.STOP_LOADING,
});
