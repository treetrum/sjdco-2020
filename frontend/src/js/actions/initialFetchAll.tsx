import * as options from "./options";
import * as global from "./global";

import { ThunkResult } from "../redux-store-types/index";
import { IFAActions } from "../redux-store-types/initialFetchAll";
import takeAtLeast from "../utils/takeAtLeast";

const initialFetchAllRequest = (): IFAActions => ({
    type: "INITIAL_FETCH_ALL_REQUEST",
});

const initialFetchAllSuccess = (): IFAActions => ({
    type: "INITIAL_FETCH_ALL_SUCCESS",
});

const initialFetchAllFail = (): IFAActions => ({
    type: "INITIAL_FETCH_ALL_FAIL",
});

export const initialFetchAll = (): ThunkResult<Promise<any>> => dispatch => {
    dispatch(initialFetchAllRequest());
    return takeAtLeast(
        Promise.all([
            dispatch(options.fetchOptions()),
            dispatch(global.fetchGlobal()),
        ])
            .then(() => {
                dispatch(initialFetchAllSuccess());
            })
            .catch(() => {
                dispatch(initialFetchAllFail());
            }),
        1200
    );
};
