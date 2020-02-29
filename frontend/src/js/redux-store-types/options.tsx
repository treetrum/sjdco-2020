export interface StandardLink {
    type: "standard";
    page: {
        url: string;
        title: string;
    };
}

export interface CustomLink {
    type: "custom";
    custom_link: {
        link: string;
        new_tab: boolean;
        title: string;
    };
}

export interface MenuLink {
    link: StandardLink | CustomLink;
}

export interface OptionsState {
    loading: boolean;
    error: any | null;
    menu_links: MenuLink[];
}

interface FetchOptionsRequestAction {
    type: "FETCH_OPTIONS_REQUEST";
}

interface FetchOptionsSuccessAction {
    type: "FETCH_OPTIONS_SUCCESS";
    options: any;
}

interface FetchOptionsFailAction {
    type: "FETCH_OPTIONS_FAIL";
    error: any;
}

export type OptionsActions =
    | FetchOptionsRequestAction
    | FetchOptionsSuccessAction
    | FetchOptionsFailAction;
