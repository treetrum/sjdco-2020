import API from "../api";

import { OptionsActions } from "../redux-store-types/options";
import { ThunkResult } from "../redux-store-types/index";

const fetchOptionsRequest = (): OptionsActions => ({
    type: "FETCH_OPTIONS_REQUEST",
});

const fetchOptionsSuccess = (options: any): OptionsActions => ({
    type: "FETCH_OPTIONS_SUCCESS",
    options,
});

const fetchOptionsFail = (error: any): OptionsActions => ({
    type: "FETCH_OPTIONS_FAIL",
    error,
});

export const fetchOptions = (): ThunkResult<Promise<any>> => dispatch => {
    dispatch(fetchOptionsRequest());
    return API.getOptions()
        .then(({ acf }) => {
            dispatch(fetchOptionsSuccess(acf));
            return acf;
        })
        .catch(error => {
            dispatch(fetchOptionsFail(error));
            throw error;
        });
};
