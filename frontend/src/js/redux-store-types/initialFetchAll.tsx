export interface IFAStateType {
    loading: boolean;
    error: null | any;
}

interface IFARequestAction {
    type: "INITIAL_FETCH_ALL_REQUEST";
}

interface IFASuccessAction {
    type: "INITIAL_FETCH_ALL_SUCCESS";
}

interface IFAFailAction {
    type: "INITIAL_FETCH_ALL_FAIL";
}

export type IFAActions = IFARequestAction | IFASuccessAction | IFAFailAction;
