export interface GlobalState {
    loading: boolean;
    error: any;
    data: {
        [key: string]: any;
    };
}

interface fetchGlobalRequest {
    type: "FETCH_GLOBAL_REQUEST";
}

interface fetchGlobalSuccess {
    type: "FETCH_GLOBAL_SUCCESS";
    global: {
        [key: string]: any;
    };
}

interface fetchGlobalFail {
    type: "FETCH_GLOBAL_FAIL";
    error: any;
}

export type GlobalActions =
    | fetchGlobalRequest
    | fetchGlobalSuccess
    | fetchGlobalFail;
