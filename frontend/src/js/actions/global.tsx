import api from "../api";
import { GlobalActions } from "../redux-store-types/global";
import { ThunkResult } from "../redux-store-types";

const fetchGlobalRequest = (): GlobalActions => ({
    type: "FETCH_GLOBAL_REQUEST",
});

const fetchGlobalSuccess = (global: any): GlobalActions => ({
    type: "FETCH_GLOBAL_SUCCESS",
    global,
});

const fetchGlobalFail = (error: any): GlobalActions => ({
    type: "FETCH_GLOBAL_FAIL",
    error,
});

export const fetchGlobal = (): ThunkResult<any> => dispatch => {
    dispatch(fetchGlobalRequest());
    api.getGlobals()
        .then(({ name, description, url, home }) => {
            dispatch(fetchGlobalSuccess({ name, description, url, home }));
        })
        .catch(error => {
            dispatch(fetchGlobalFail(error));
        });
};
