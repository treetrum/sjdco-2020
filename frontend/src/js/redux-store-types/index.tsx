import { ThunkAction } from "redux-thunk";

import { PageActionTypes, PageStateType } from "./page";
import { IFAStateType, IFAActions } from "./initialFetchAll";
import { OptionsActions, OptionsState } from "./options";
import { UIActions, UIState } from "./ui";
import { GlobalActions, GlobalState } from "./global";
import { ProjectState, ProjectActions } from "./projects";

export type Actions =
    | PageActionTypes
    | IFAActions
    | OptionsActions
    | UIActions
    | GlobalActions
    | ProjectActions;

export type State = {
    page: PageStateType;
    initialFetchAll: IFAStateType;
    options: OptionsState;
    ui: UIState;
    global: GlobalState;
    projects: ProjectState;
};

export type ThunkResult<R> = ThunkAction<R, State, undefined, Actions>;
