import ActionTypes from "../constants/ActionTypes";

const initialState = {
    loading: false,
    error: null,
    projects: [],
};

const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_PROJECTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ActionTypes.FETCH_PROJECTS_SUCCESS:
            return {
                ...state,
                loading: false,
                projects: action.projects,
            };
        case ActionTypes.FETCH_PROJECTS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default projectsReducer;
