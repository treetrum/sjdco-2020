export interface UIState {
    mobileMenuOpen: boolean;
    showLoader: boolean;
}

interface ToggleMenuAction {
    type: "TOGGLE_MENU";
}

interface CloseMenuAction {
    type: "CLOSE_MENU";
}

interface StartLoadingAction {
    type: "START_LOADING";
}

interface StopLoadingAction {
    type: "STOP_LOADING";
}

export type UIActions =
    | ToggleMenuAction
    | CloseMenuAction
    | StartLoadingAction
    | StopLoadingAction;
