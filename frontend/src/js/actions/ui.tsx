import { UIActions } from "../redux-store-types/ui";

export const toggleMenu = (): UIActions => ({
    type: "TOGGLE_MENU",
});

export const closeMenu = (): UIActions => ({
    type: "CLOSE_MENU",
});

export const startLoading = (): UIActions => ({
    type: "START_LOADING",
});

export const stopLoading = (): UIActions => ({
    type: "STOP_LOADING",
});
